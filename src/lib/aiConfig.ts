export type AiProvider = "custom" | "openai" | "anthropic" | "deepseek" | "qwen" | "kimi" | "zhipu" | "minimax" | "siliconflow" | "openrouter" | "relay";

export type AiStorageMode = "none" | "session" | "local";
export type AiApiProtocol = "openai-chat" | "anthropic-messages";

export type AiConfig = {
  provider: AiProvider;
  baseUrl: string;
  path: string;
  apiKey: string;
  model: string;
  stream: boolean;
  storage: AiStorageMode;
  proxyUrl: string;
};

export type AiProviderPreset = {
  id: AiProvider;
  label: string;
  protocol: AiApiProtocol;
  baseUrl: string;
  path: string;
  model: string;
  modelOptions: string[];
};

const AI_CONFIG_KEY = "html-deck-editor:ai-config:v1";

export const aiProviderPresets: AiProviderPreset[] = [
  {
    id: "custom",
    label: "OpenAI-compatible",
    protocol: "openai-chat",
    baseUrl: "",
    path: "/v1/chat/completions",
    model: "gpt-5.5",
    modelOptions: ["gpt-5.5", "gpt-5.4", "gpt-5.4-mini", "gpt-5.4-nano"]
  },
  {
    id: "openai",
    label: "OpenAI",
    protocol: "openai-chat",
    baseUrl: "https://api.openai.com/v1",
    path: "/chat/completions",
    model: "gpt-5.5",
    modelOptions: ["gpt-5.5", "gpt-5.4", "gpt-5.4-mini", "gpt-5.4-nano"]
  },
  {
    id: "anthropic",
    label: "Claude / Anthropic",
    protocol: "anthropic-messages",
    baseUrl: "https://api.anthropic.com",
    path: "/v1/messages",
    model: "claude-sonnet-4-6",
    modelOptions: ["claude-fable-5", "claude-opus-4-8", "claude-sonnet-4-6", "claude-haiku-4-5-20251001"]
  },
  {
    id: "deepseek",
    label: "DeepSeek",
    protocol: "openai-chat",
    baseUrl: "https://api.deepseek.com",
    path: "/chat/completions",
    model: "deepseek-v4-flash",
    modelOptions: ["deepseek-v4-flash", "deepseek-v4-pro"]
  },
  {
    id: "qwen",
    label: "通义千问 / DashScope",
    protocol: "openai-chat",
    baseUrl: "https://dashscope.aliyuncs.com/compatible-mode/v1",
    path: "/chat/completions",
    model: "qwen3.7-plus",
    modelOptions: ["qwen3.7-max", "qwen3.7-plus", "qwen3.6-flash", "qwen-plus", "qwen-max"]
  },
  {
    id: "kimi",
    label: "Kimi / 月之暗面",
    protocol: "openai-chat",
    baseUrl: "https://api.moonshot.ai/v1",
    path: "/chat/completions",
    model: "kimi-k2.7-code",
    modelOptions: ["kimi-k2.7-code", "kimi-k2.7-code-highspeed", "kimi-k2.6", "kimi-k2.5", "moonshot-v1-128k"]
  },
  {
    id: "zhipu",
    label: "智谱",
    protocol: "openai-chat",
    baseUrl: "https://open.bigmodel.cn/api/paas/v4",
    path: "/chat/completions",
    model: "glm-5.2",
    modelOptions: ["glm-5.2", "glm-5.1", "glm-5-turbo", "glm-5", "glm-4.7"]
  },
  {
    id: "minimax",
    label: "MiniMax",
    protocol: "openai-chat",
    baseUrl: "https://api.minimax.io/v1",
    path: "/chat/completions",
    model: "MiniMax-M3",
    modelOptions: ["MiniMax-M3", "MiniMax-M2.7", "MiniMax-M2.7-highspeed", "MiniMax-M2.5"]
  },
  {
    id: "siliconflow",
    label: "硅基流动",
    protocol: "openai-chat",
    baseUrl: "https://api.siliconflow.cn/v1",
    path: "/chat/completions",
    model: "deepseek-ai/DeepSeek-V3.2",
    modelOptions: ["deepseek-ai/DeepSeek-V3.2", "Pro/deepseek-ai/DeepSeek-V3.2", "Pro/zai-org/GLM-4.7", "Qwen/Qwen3-Coder-480B-A35B-Instruct", "Qwen/Qwen3-32B"]
  },
  {
    id: "openrouter",
    label: "OpenRouter",
    protocol: "openai-chat",
    baseUrl: "https://openrouter.ai/api/v1",
    path: "/chat/completions",
    model: "openai/gpt-5.5",
    modelOptions: ["openai/gpt-5.5", "openai/gpt-5.4", "anthropic/claude-sonnet-4.5", "anthropic/claude-opus-4.5", "google/gemini-3-pro", "deepseek/deepseek-v4-flash"]
  },
  {
    id: "relay",
    label: "自定义中转站",
    protocol: "openai-chat",
    baseUrl: "",
    path: "/v1/chat/completions",
    model: "gpt-5.5",
    modelOptions: ["gpt-5.5", "gpt-5.4", "deepseek-v4-flash", "glm-5.2"]
  }
];

export const defaultAiConfig: AiConfig = {
  provider: "custom",
  baseUrl: "",
  path: "/v1/chat/completions",
  apiKey: "",
  model: "gpt-5.5",
  stream: true,
  storage: "none",
  proxyUrl: ""
};

export function presetForProvider(provider: AiProvider): AiProviderPreset {
  return aiProviderPresets.find((preset) => preset.id === provider) || aiProviderPresets[0];
}

export function applyProviderPreset(config: AiConfig, provider: AiProvider): AiConfig {
  const preset = presetForProvider(provider);
  return {
    ...config,
    provider,
    baseUrl: preset.baseUrl,
    path: preset.path,
    model: preset.model
  };
}

export function loadAiConfig(): AiConfig {
  const sessionConfig = readStoredConfig(safeStorage("sessionStorage"));
  if (sessionConfig) return sessionConfig;
  const localConfig = readStoredConfig(safeStorage("localStorage"));
  return localConfig || defaultAiConfig;
}

export function persistAiConfig(config: AiConfig): void {
  const session = safeStorage("sessionStorage");
  const local = safeStorage("localStorage");
  removeStoredConfig(session);
  removeStoredConfig(local);
  if (config.storage === "session") {
    writeStoredConfig(session, config);
  } else if (config.storage === "local") {
    writeStoredConfig(local, config);
  }
}

export function clearAiConfigSecret(config: AiConfig): AiConfig {
  const next = { ...config, apiKey: "" };
  persistAiConfig(next);
  return next;
}

export function assertAiConfigReady(config: AiConfig): string[] {
  const errors: string[] = [];
  if (!config.proxyUrl.trim() && !config.baseUrl.trim()) errors.push("请填写 API Base URL，或填写 Proxy URL。");
  if (!config.path.trim() && !config.proxyUrl.trim()) errors.push("请填写 API Path。");
  if (!config.apiKey.trim()) errors.push("请填写 API Key。");
  if (!config.model.trim()) errors.push("请填写 Model。");
  return errors;
}

function safeStorage(name: "sessionStorage" | "localStorage"): Storage | null {
  try {
    return globalThis[name];
  } catch {
    return null;
  }
}

function readStoredConfig(storage: Storage | null): AiConfig | null {
  if (!storage) return null;
  try {
    const raw = storage.getItem(AI_CONFIG_KEY);
    if (!raw) return null;
    const parsed = JSON.parse(raw) as Partial<AiConfig>;
    return normalizeAiConfig(parsed);
  } catch {
    removeStoredConfig(storage);
    return null;
  }
}

function writeStoredConfig(storage: Storage | null, config: AiConfig): void {
  if (!storage) return;
  try {
    storage.setItem(AI_CONFIG_KEY, JSON.stringify(config));
  } catch {
    // Storage can be unavailable in private browsing, file://, or sandboxed pages.
  }
}

function removeStoredConfig(storage: Storage | null): void {
  if (!storage) return;
  try {
    storage.removeItem(AI_CONFIG_KEY);
  } catch {
    // Storage can be unavailable in private browsing, file://, or sandboxed pages.
  }
}

function normalizeAiConfig(value: Partial<AiConfig>): AiConfig {
  const provider = isProvider(value.provider) ? value.provider : defaultAiConfig.provider;
  const storage = isStorageMode(value.storage) ? value.storage : defaultAiConfig.storage;
  return {
    provider,
    baseUrl: String(value.baseUrl || ""),
    path: String(value.path || presetForProvider(provider).path),
    apiKey: String(value.apiKey || ""),
    model: String(value.model || ""),
    stream: value.stream !== false,
    storage,
    proxyUrl: String(value.proxyUrl || "")
  };
}

function isProvider(value: unknown): value is AiProvider {
  return typeof value === "string" && aiProviderPresets.some((preset) => preset.id === value);
}

function isStorageMode(value: unknown): value is AiStorageMode {
  return value === "none" || value === "session" || value === "local";
}
