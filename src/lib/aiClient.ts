import { presetForProvider, type AiConfig } from "./aiConfig";

export type AiChatMessage = {
  role: "system" | "user" | "assistant";
  content: string;
};

export type AiChatOptions = {
  temperature?: number;
  stream?: boolean;
};

export class AiRequestError extends Error {
  status: number | null;

  constructor(message: string, status: number | null = null) {
    super(message);
    this.name = "AiRequestError";
    this.status = status;
  }
}

export function chatCompletionUrl(config: Pick<AiConfig, "baseUrl" | "path" | "proxyUrl">): string {
  const proxyUrl = config.proxyUrl.trim();
  if (proxyUrl) return proxyUrl;
  return joinBaseAndPath(config.baseUrl, config.path);
}

export function joinBaseAndPath(baseUrl: string, path: string): string {
  const base = baseUrl.trim().replace(/\/+$/, "");
  const suffix = path.trim().replace(/^\/+/, "");
  if (!base) return `/${suffix}`;
  if (!suffix) return base;
  return `${base}/${suffix}`;
}

export async function requestAiChatCompletion(
  config: AiConfig,
  messages: AiChatMessage[],
  options: AiChatOptions = {}
): Promise<string> {
  if (presetForProvider(config.provider).protocol === "anthropic-messages") {
    return requestAnthropicMessage(config, messages, options);
  }
  return requestOpenAiChatCompletion(config, messages, options);
}

async function requestOpenAiChatCompletion(
  config: AiConfig,
  messages: AiChatMessage[],
  options: AiChatOptions = {}
): Promise<string> {
  const stream = options.stream ?? config.stream;
  const body = {
    model: config.model.trim(),
    messages,
    temperature: options.temperature ?? 0.1,
    stream
  };

  let response: Response;
  try {
    response = await fetch(chatCompletionUrl(config), {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${config.apiKey.trim()}`
      },
      body: JSON.stringify(body)
    });
  } catch {
    throw new AiRequestError("网络请求失败，可能是接口暂时不可达或不支持当前网页直连。");
  }

  if (!response.ok) {
    throw new AiRequestError(await errorMessageForResponse(response), response.status);
  }

  if (stream && response.body && isEventStreamResponse(response)) {
    return readStreamedContent(response.body, parseStreamDataLine);
  }

  const json = await response.json();
  return parseChatCompletionContent(json);
}

async function requestAnthropicMessage(
  config: AiConfig,
  messages: AiChatMessage[],
  options: AiChatOptions = {}
): Promise<string> {
  const stream = options.stream ?? config.stream;
  const { system, messages: anthropicMessages } = toAnthropicMessages(messages);
  const body = {
    model: config.model.trim(),
    max_tokens: 8192,
    messages: anthropicMessages,
    stream,
    system: system || undefined
  };

  let response: Response;
  try {
    const headers: Record<string, string> = {
      "Content-Type": "application/json",
      "x-api-key": config.apiKey.trim(),
      "anthropic-version": "2023-06-01"
    };
    if (!config.proxyUrl.trim()) headers["anthropic-dangerous-direct-browser-access"] = "true";
    response = await fetch(chatCompletionUrl(config), {
      method: "POST",
      headers,
      body: JSON.stringify(body)
    });
  } catch {
    throw new AiRequestError("网络请求失败，可能是接口暂时不可达或不支持当前网页直连。");
  }

  if (!response.ok) {
    throw new AiRequestError(await errorMessageForResponse(response), response.status);
  }

  if (stream && response.body && isEventStreamResponse(response)) {
    return readStreamedContent(response.body, parseAnthropicStreamDataLine);
  }

  const json = await response.json();
  return parseAnthropicMessageContent(json);
}

export function parseChatCompletionContent(json: unknown): string {
  const choice = getFirstChoice(json);
  const content = choice?.message?.content;
  if (typeof content === "string") return content;
  if (Array.isArray(content)) {
    return content.map((part) => typeof part?.text === "string" ? part.text : "").join("");
  }
  throw new AiRequestError("AI 返回格式不完整，没有找到可读取的文本结果。");
}

export function parseStreamDataLine(line: string): string | null {
  const trimmed = line.trim();
  if (!trimmed.startsWith("data:")) return "";
  const payload = trimmed.slice(5).trim();
  if (!payload) return "";
  if (payload === "[DONE]") return null;
  try {
    const json = JSON.parse(payload);
    const choice = getFirstChoice(json);
    return choice?.delta?.content || choice?.message?.content || "";
  } catch {
    return "";
  }
}

export function parseAnthropicMessageContent(json: unknown): string {
  if (!json || typeof json !== "object") {
    throw new AiRequestError("AI 返回格式不完整，没有找到可读取的文本结果。");
  }
  const content = (json as { content?: unknown }).content;
  if (!Array.isArray(content)) {
    throw new AiRequestError("AI 返回格式不完整，没有找到可读取的文本结果。");
  }
  const output = content.map((part) => {
    if (part && typeof part === "object" && typeof (part as { text?: unknown }).text === "string") {
      return (part as { text: string }).text;
    }
    return "";
  }).join("");
  if (output) return output;
  throw new AiRequestError("AI 返回格式不完整，没有找到可读取的文本结果。");
}

export function parseAnthropicStreamDataLine(line: string): string | null {
  const trimmed = line.trim();
  if (!trimmed.startsWith("data:")) return "";
  const payload = trimmed.slice(5).trim();
  if (!payload) return "";
  if (payload === "[DONE]") return null;
  try {
    const json = JSON.parse(payload);
    if (json?.type === "message_stop") return null;
    if (json?.type === "content_block_delta" && typeof json?.delta?.text === "string") {
      return json.delta.text;
    }
    if (json?.type === "content_block_start" && typeof json?.content_block?.text === "string") {
      return json.content_block.text;
    }
    return "";
  } catch {
    return "";
  }
}

export function friendlyAiStatusMessage(status: number): string {
  if (status === 401 || status === 403) return "API Key 错误或没有权限。";
  if (status === 402) return "账户余额不足或当前模型不可用。";
  if (status === 404) return "API Base URL、API Path 或 Model 可能不正确。";
  if (status === 413) return "当前 HTML 内容太长，请减少页面内容后再试。";
  if (status === 429) return "请求过于频繁，请稍后再试。";
  if (status >= 500) return "服务暂时异常，请稍后再试。";
  return `AI 请求失败，HTTP ${status}。`;
}

async function readStreamedContent(
  body: ReadableStream<Uint8Array>,
  parseLine: (line: string) => string | null
): Promise<string> {
  const reader = body.getReader();
  const decoder = new TextDecoder();
  let buffer = "";
  let output = "";
  let finished = false;

  try {
    while (true) {
      const { done, value } = await reader.read();
      if (done) {
        finished = true;
        break;
      }
      buffer += decoder.decode(value, { stream: true });
      const lines = buffer.split(/\r?\n/);
      buffer = lines.pop() || "";
      for (const line of lines) {
        const parsed = parseLine(line);
        if (parsed === null) {
          await reader.cancel();
          finished = true;
          return output;
        }
        output += parsed;
      }
    }

    if (buffer) {
      const parsed = parseLine(buffer);
      if (parsed) output += parsed;
    }
    return output;
  } finally {
    if (!finished) {
      try {
        await reader.cancel();
      } catch {
        // The stream may already be closed by the provider.
      }
    }
    reader.releaseLock();
  }
}

function isEventStreamResponse(response: Response): boolean {
  return response.headers.get("content-type")?.toLowerCase().includes("text/event-stream") === true;
}

async function errorMessageForResponse(response: Response): Promise<string> {
  const friendly = friendlyAiStatusMessage(response.status);
  try {
    const text = await response.text();
    if (!text.trim()) return friendly;
    return `${friendly} ${compactErrorText(text)}`;
  } catch {
    return friendly;
  }
}

function compactErrorText(text: string): string {
  return text.replace(/\s+/g, " ").trim().slice(0, 220);
}

function getFirstChoice(json: unknown): any {
  if (!json || typeof json !== "object") return null;
  const choices = (json as { choices?: unknown }).choices;
  return Array.isArray(choices) ? choices[0] : null;
}

function toAnthropicMessages(messages: AiChatMessage[]): { system: string; messages: Array<{ role: "user" | "assistant"; content: string }> } {
  const systemParts: string[] = [];
  const nextMessages: Array<{ role: "user" | "assistant"; content: string }> = [];

  for (const message of messages) {
    if (message.role === "system") {
      systemParts.push(message.content);
    } else {
      nextMessages.push({ role: message.role, content: message.content });
    }
  }

  return {
    system: systemParts.join("\n\n"),
    messages: nextMessages.length > 0 ? nextMessages : [{ role: "user", content: "" }]
  };
}
