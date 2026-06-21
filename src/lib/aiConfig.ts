export type AiProvider = "custom" | "deepseek" | "zhipu" | "openrouter" | "relay";

export type AiStorageMode = "none" | "session" | "local";

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
  baseUrl: string;
  path: string;
  model: string;
};

const AI_CONFIG_KEY = "html-deck-editor:ai-config:v1";

export const aiProviderPresets: AiProviderPreset[] = [
  {
    id: "custom",
    label: "OpenAI-compatible",
    baseUrl: "",
    path: "/v1/chat/completions",
    model: ""
  },
  {
    id: "deepseek",
    label: "DeepSeek",
    baseUrl: "https://api.deepseek.com",
    path: "/chat/completions",
    model: "deepseek-v4-flash"
  },
  {
    id: "zhipu",
    label: "智谱",
    baseUrl: "https://open.bigmodel.cn/api/paas/v4",
    path: "/chat/completions",
    model: "glm-5.2"
  },
  {
    id: "openrouter",
    label: "OpenRouter",
    baseUrl: "https://openrouter.ai/api/v1",
    path: "/chat/completions",
    model: "openai/gpt-4.1"
  },
  {
    id: "relay",
    label: "自定义中转站",
    baseUrl: "",
    path: "/v1/chat/completions",
    model: ""
  }
];

export const defaultAiConfig: AiConfig = {
  provider: "custom",
  baseUrl: "",
  path: "/v1/chat/completions",
  apiKey: "",
  model: "",
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
  const sessionConfig = readStoredConfig(sessionStorage);
  if (sessionConfig) return sessionConfig;
  const localConfig = readStoredConfig(localStorage);
  return localConfig || defaultAiConfig;
}

export function persistAiConfig(config: AiConfig): void {
  sessionStorage.removeItem(AI_CONFIG_KEY);
  localStorage.removeItem(AI_CONFIG_KEY);
  if (config.storage === "session") {
    sessionStorage.setItem(AI_CONFIG_KEY, JSON.stringify(config));
  } else if (config.storage === "local") {
    localStorage.setItem(AI_CONFIG_KEY, JSON.stringify(config));
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

function readStoredConfig(storage: Storage): AiConfig | null {
  try {
    const raw = storage.getItem(AI_CONFIG_KEY);
    if (!raw) return null;
    const parsed = JSON.parse(raw) as Partial<AiConfig>;
    return normalizeAiConfig(parsed);
  } catch {
    storage.removeItem(AI_CONFIG_KEY);
    return null;
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
