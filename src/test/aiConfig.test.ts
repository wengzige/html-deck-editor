import { afterEach, beforeEach, describe, expect, it, vi } from "vitest";
import { aiProviderPresets, applyProviderPreset, assertAiConfigReady, clearAiConfigSecret, defaultAiConfig, loadAiConfig, persistAiConfig } from "../lib/aiConfig";

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

  it("provides preset model options while allowing custom models", () => {
    const deepseek = aiProviderPresets.find((preset) => preset.id === "deepseek");
    const openaiCompatible = aiProviderPresets.find((preset) => preset.id === "custom");
    const anthropic = aiProviderPresets.find((preset) => preset.id === "anthropic");
    const qwen = aiProviderPresets.find((preset) => preset.id === "qwen");

    expect(deepseek?.modelOptions).toContain("deepseek-v4-flash");
    expect(deepseek?.modelOptions).toContain("deepseek-v4-pro");
    expect(openaiCompatible?.modelOptions).toContain("gpt-5.5");
    expect(openaiCompatible?.modelOptions).not.toContain("gpt-4.1");
    expect(anthropic?.protocol).toBe("anthropic-messages");
    expect(anthropic?.modelOptions).toContain("claude-sonnet-4-6");
    expect(qwen?.modelOptions).toContain("qwen-plus");
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

  it("falls back safely when browser storage is unavailable", () => {
    vi.stubGlobal("localStorage", blockedStorage());
    vi.stubGlobal("sessionStorage", blockedStorage());

    expect(() => loadAiConfig()).not.toThrow();
    expect(loadAiConfig()).toEqual(defaultAiConfig);
    expect(() => persistAiConfig({ ...defaultAiConfig, storage: "local", apiKey: "sk-local", model: "demo", baseUrl: "https://api.example.com" })).not.toThrow();
    expect(() => clearAiConfigSecret({ ...defaultAiConfig, storage: "session", apiKey: "sk-session", model: "demo", baseUrl: "https://api.example.com" })).not.toThrow();
  });

  it("reports missing required fields", () => {
    expect(assertAiConfigReady({ ...defaultAiConfig, model: "" })).toEqual([
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

function blockedStorage(): Storage {
  return {
    get length(): number {
      throw new DOMException("blocked", "SecurityError");
    },
    clear: () => {
      throw new DOMException("blocked", "SecurityError");
    },
    getItem: () => {
      throw new DOMException("blocked", "SecurityError");
    },
    key: (): string | null => {
      throw new DOMException("blocked", "SecurityError");
    },
    removeItem: () => {
      throw new DOMException("blocked", "SecurityError");
    },
    setItem: () => {
      throw new DOMException("blocked", "SecurityError");
    }
  };
}
