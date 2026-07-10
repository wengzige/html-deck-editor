import { afterEach, describe, expect, it, vi } from "vitest";
import { defaultAiConfig } from "../lib/aiConfig";
import { friendlyAiStatusMessage, joinBaseAndPath, parseAnthropicMessageContent, parseAnthropicStreamDataLine, parseChatCompletionContent, parseStreamDataLine, requestAiChatCompletion } from "../lib/aiClient";

describe("AI client", () => {
  afterEach(() => {
    vi.unstubAllGlobals();
  });

  it("joins base URL and path", () => {
    expect(joinBaseAndPath("https://api.example.com/", "/v1/chat/completions")).toBe("https://api.example.com/v1/chat/completions");
  });

  it("parses non-stream chat completion content", () => {
    expect(parseChatCompletionContent({
      choices: [{ message: { content: "hello" } }]
    })).toBe("hello");
  });

  it("parses streamed data lines", () => {
    expect(parseStreamDataLine('data: {"choices":[{"delta":{"content":"he"}}]}')).toBe("he");
    expect(parseStreamDataLine('data: {"choices":[{"delta":{"content":"llo"}}]}')).toBe("llo");
    expect(parseStreamDataLine("data: [DONE]")).toBeNull();
  });

  it("parses Anthropic message content", () => {
    expect(parseAnthropicMessageContent({
      content: [{ type: "text", text: "hello" }]
    })).toBe("hello");
  });

  it("parses Anthropic streamed data lines", () => {
    expect(parseAnthropicStreamDataLine('data: {"type":"content_block_delta","delta":{"type":"text_delta","text":"he"}}')).toBe("he");
    expect(parseAnthropicStreamDataLine('data: {"type":"content_block_delta","delta":{"type":"text_delta","text":"llo"}}')).toBe("llo");
    expect(parseAnthropicStreamDataLine('data: {"type":"message_stop"}')).toBeNull();
  });

  it("maps common HTTP statuses to readable messages", () => {
    expect(friendlyAiStatusMessage(401)).toContain("API Key");
    expect(friendlyAiStatusMessage(402)).toContain("余额");
    expect(friendlyAiStatusMessage(404)).toContain("API Base URL");
    expect(friendlyAiStatusMessage(413)).toContain("太长");
    expect(friendlyAiStatusMessage(429)).toContain("频繁");
    expect(friendlyAiStatusMessage(500)).toContain("服务");
  });

  it("falls back to JSON when streaming was requested but the server is not SSE", async () => {
    vi.stubGlobal("fetch", vi.fn(async () => new Response(JSON.stringify({
      choices: [{ message: { content: "json fallback" } }]
    }), { headers: { "content-type": "application/json" } })));

    await expect(requestAiChatCompletion({
      ...defaultAiConfig,
      baseUrl: "https://api.example.com",
      apiKey: "sk-test",
      model: "test",
      stream: true
    }, [{ role: "user", content: "hello" }])).resolves.toBe("json fallback");
  });

  it("adds Anthropic browser-direct headers", async () => {
    const fetchMock = vi.fn(async (_input: RequestInfo | URL, _init?: RequestInit) => new Response(JSON.stringify({
      content: [{ type: "text", text: "hello" }]
    }), { headers: { "content-type": "application/json" } }));
    vi.stubGlobal("fetch", fetchMock);

    await requestAiChatCompletion({
      ...defaultAiConfig,
      provider: "anthropic",
      baseUrl: "https://api.anthropic.com",
      path: "/v1/messages",
      apiKey: "sk-ant-test",
      model: "claude-test",
      stream: true
    }, [{ role: "user", content: "hello" }]);

    const headers = new Headers(fetchMock.mock.calls[0]?.[1]?.headers);
    expect(headers.get("anthropic-dangerous-direct-browser-access")).toBe("true");
    expect(headers.get("anthropic-version")).toBe("2023-06-01");
  });

  it("cancels the reader after an SSE completion marker", async () => {
    let canceled = false;
    const stream = new ReadableStream<Uint8Array>({
      start(controller) {
        controller.enqueue(new TextEncoder().encode('data: {"choices":[{"delta":{"content":"done"}}]}\n\ndata: [DONE]\n\n'));
      },
      cancel() {
        canceled = true;
      }
    });
    vi.stubGlobal("fetch", vi.fn(async () => new Response(stream, {
      headers: { "content-type": "text/event-stream" }
    })));

    const output = await requestAiChatCompletion({
      ...defaultAiConfig,
      baseUrl: "https://api.example.com",
      apiKey: "sk-test",
      model: "test",
      stream: true
    }, [{ role: "user", content: "hello" }]);

    expect(output).toBe("done");
    expect(canceled).toBe(true);
  });
});
