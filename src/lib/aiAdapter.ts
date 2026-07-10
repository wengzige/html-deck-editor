import type { LoadedInput } from "../types/deck";
import type {
  AdaptationPlan,
  AdaptationPreview,
  AdaptationSlide,
  ValidatedAdaptationPlan
} from "./adaptationPlan.js";
import {
  applyAdaptationPlan,
  buildAdaptationSummary,
  inspectAdaptationPlan,
  parseAdaptationPlanText,
  validateAdaptationPlan
} from "./adaptationPlan.js";
import type { AiConfig } from "./aiConfig";
import { requestAiChatCompletion } from "./aiClient";
import type { AiChatMessage } from "./aiClient";
import { detectDeck, findIndexFile } from "./detector";
import { bytesToText } from "./text";

export type AiAdaptationSlide = AdaptationSlide;
export type AiAdaptationPlan = AdaptationPlan;
export type ValidatedAiAdaptationPlan = ValidatedAdaptationPlan;
export type AiAdaptationPreview = AdaptationPreview;

export type AiAdaptationApplication = {
  html: string;
  plan: ValidatedAiAdaptationPlan;
  preview: AiAdaptationPreview;
};

export type AiAdaptationPreflight =
  | { ok: true }
  | {
      ok: false;
      title: string;
      detail: string;
      action: string;
    };

const aiPreflightUnsupportedMessage = "本地没有识别出明确的演示分页，因此不会调用上游 API。";

export function buildAiAdaptationMessages(input: LoadedInput): { messages: AiChatMessage[]; summary: string } {
  const indexFile = findIndexFile(input.files);
  if (!indexFile) throw new Error("没有找到可供 AI 适配的 HTML 文件。");
  const html = bytesToText(indexFile.data);
  const summary = buildHtmlAdaptationSummary(html);
  return {
    summary,
    messages: [
      {
        role: "system",
        content: [
          "你是 Anchor Deck 的 HTML 结构适配助手。",
          "你的任务是生成一个可执行的 HTML 结构修改方案，让现有 HTML 更容易被 Anchor Deck 编辑器识别和编辑。",
          "本地代码会按你的计划修改 DOM 结构和 data-* 标记，再注入编辑器运行时。",
          "只返回 JSON，不要返回 Markdown、解释、完整 HTML、CSS、JavaScript 或编辑器代码。",
          "只建议最小结构标记：页面、可编辑文本、可编辑媒体、可编辑视觉块和忽略区域。",
          "不要改写用户文案，不要重排样式，不要删除内容。"
        ].join("\n")
      },
      {
        role: "user",
        content: [
          "请根据下面的 HTML 结构摘要生成可执行的 HTML 结构修改方案 JSON。",
          "JSON 结构必须是：",
          "{",
          '  "stageSelector": "可选，已有舞台/页面容器 selector",',
          '  "slides": [{ "selector": "每页 selector", "title": "页面标题" }],',
          '  "editableTextSelectors": ["文本元素 selector"],',
          '  "editableMediaSelectors": ["图片、视频、SVG、canvas 等媒体 selector"],',
          '  "editableBoxSelectors": ["卡片、图形、色块、数据块等视觉块 selector"],',
          '  "ignoreSelectors": ["导航、按钮、装饰、非内容区域 selector"],',
          '  "warnings": ["不确定或需要用户确认的点"]',
          "}",
          "selector 必须来自摘要中出现的 selector。slides 至少 1 页；单页幻灯片也是合法演示稿。",
          "slides 必须是页面节点，不能选择舞台/外层容器，也不能互相嵌套或互相包含。",
          "stageSelector 如果填写，必须是所有 slide 的共同祖先，不能指向任何 slide 或 slide 内部元素。",
          "",
          summary
        ].join("\n")
      }
    ]
  };
}

export async function createAiAdaptationPreview(input: LoadedInput, config: AiConfig): Promise<AiAdaptationApplication> {
  assertAiAdaptationCanStart(input);
  const indexFile = findIndexFile(input.files);
  if (!indexFile) throw new Error("没有找到可供 AI 适配的 HTML 文件。");
  const { messages } = buildAiAdaptationMessages(input);
  const raw = await requestAiChatCompletion(config, messages, { temperature: 0.1, stream: config.stream });
  return previewAiAdaptationPlan(bytesToText(indexFile.data), parseAiAdaptationPlan(raw));
}

export function getAiAdaptationPreflight(input: LoadedInput): AiAdaptationPreflight {
  const report = detectDeck(input);
  if (report.status !== "unsupported" && report.indexPath) return { ok: true };

  if (!report.indexPath) {
    return {
      ok: false,
      title: "AI 适配已暂停",
      detail: "没有找到可供适配的 HTML 文件，因此不会调用上游 API。",
      action: "请重新选择包含 index.html 的 ZIP 或文件夹。"
    };
  }

  const reason = report.messages[0] ? ` ${report.messages[0]}` : "";
  return {
    ok: false,
    title: "AI 适配已暂停",
    detail: `${aiPreflightUnsupportedMessage}${reason}`,
    action: "可以先用本地单页转换，或整理成 slide/deck 结构后再用 AI。"
  };
}

function assertAiAdaptationCanStart(input: LoadedInput): void {
  const preflight = getAiAdaptationPreflight(input);
  if (preflight.ok) return;
  throw new Error(`${preflight.detail} ${preflight.action}`);
}

export function buildHtmlAdaptationSummary(html: string): string {
  return JSON.stringify(buildAdaptationSummary(parseHtml(html)), null, 2);
}

export function parseAiAdaptationPlan(raw: string): AiAdaptationPlan {
  return parseAdaptationPlanText(raw, { sourceLabel: "AI" });
}

export function previewAiAdaptationPlan(html: string, plan: AiAdaptationPlan): AiAdaptationApplication {
  const doc = parseHtml(html);
  const result = inspectAdaptationPlan(doc, plan, { sourceLabel: "AI" });
  return { html, ...result };
}

export function applyAiAdaptationPlanToHtml(html: string, plan: AiAdaptationPlan): AiAdaptationApplication {
  const doc = parseHtml(html);
  const result = applyAdaptationPlan(doc, plan, { sourceLabel: "AI" });
  return {
    html: `<!doctype html>\n${doc.documentElement.outerHTML}`,
    ...result
  };
}

export function validateAiAdaptationPlan(doc: Document, plan: AiAdaptationPlan): ValidatedAiAdaptationPlan {
  return validateAdaptationPlan(doc, plan, { sourceLabel: "AI" });
}

function parseHtml(html: string): Document {
  return new DOMParser().parseFromString(html, "text/html");
}
