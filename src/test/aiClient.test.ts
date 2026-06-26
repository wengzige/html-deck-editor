import { describe, expect, it } from "vitest";
import { friendlyAiStatusMessage, joinBaseAndPath, parseChatCompletionContent, parseStreamDataLine } from "../lib/aiClient";

describe("AI client", () => {
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

  it("maps common HTTP statuses to readable messages", () => {
    expect(friendlyAiStatusMessage(401)).toContain("API Key");
    expect(friendlyAiStatusMessage(402)).toContain("余额");
    expect(friendlyAiStatusMessage(404)).toContain("API Base URL");
    expect(friendlyAiStatusMessage(413)).toContain("太长");
    expect(friendlyAiStatusMessage(429)).toContain("频繁");
    expect(friendlyAiStatusMessage(500)).toContain("服务");
  });
});
