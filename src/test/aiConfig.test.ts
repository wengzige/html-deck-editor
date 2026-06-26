import { afterEach, beforeEach, describe, expect, it, vi } from "vitest";
import { applyProviderPreset, assertAiConfigReady, clearAiConfigSecret, defaultAiConfig, loadAiConfig, persistAiConfig } from "../lib/aiConfig";

describe("AI config", () => {
  beforeEach(() => {
    vi.stubGlobal("localStorage", memoryStorage());
    vi.stubGlobal("sessionStorage", memoryStorage());
  });

  afterEach(() => {
    vi.unstubAllGlobals();
  });

  it("applies editable provider presets", () => {
    const config = applyProviderPreset(defaultAiConfig, "deepseek");

    expect(config.baseUrl).toBe("https://api.deepseek.com");
    expect(config.path).toBe("/chat/completions");
    expect(config.model).toBe("deepseek-v4-flash");
  });

  it("stores session config without writing local storage", () => {
    persistAiConfig({ ...defaultAiConfig, storage: "session", apiKey: "sk-session", model: "demo", baseUrl: "https://api.example.com" });

    expect(loadAiConfig().apiKey).toBe("sk-session");
    expect(localStorage.length).toBe(0);
  });

  it("clears saved API keys", () => {
    const saved = { ...defaultAiConfig, storage: "local" as const, apiKey: "sk-local", model: "demo", baseUrl: "https://api.example.com" };
    persistAiConfig(saved);

    const cleared = clearAiConfigSecret(saved);

    expect(cleared.apiKey).toBe("");
    expect(loadAiConfig().apiKey).toBe("");
  });

  it("reports missing required fields", () => {
    expect(assertAiConfigReady(defaultAiConfig)).toEqual([
      "请填写 API Base URL，或填写 Proxy URL。",
      "请填写 API Key。",
      "请填写 Model。"
    ]);
  });
});

function memoryStorage(): Storage {
  const values = new Map<string, string>();
  return {
    get length() {
      return values.size;
    },
    clear: () => values.clear(),
    getItem: (key: string) => values.get(key) ?? null,
    key: (index: number) => Array.from(values.keys())[index] ?? null,
    removeItem: (key: string) => {
      values.delete(key);
    },
    setItem: (key: string, value: string) => {
      values.set(key, value);
    }
  };
}
