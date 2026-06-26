import type { LoadedInput } from "../types/deck";
import type { AiConfig } from "./aiConfig";
import { requestAiChatCompletion } from "./aiClient";
import { findIndexFile } from "./detector";
import { bytesToText } from "./text";
import type { AiChatMessage } from "./aiClient";

export type AiAdaptationSlide = {
  selector: string;
  title?: string;
};

export type AiAdaptationPlan = {
  stageSelector?: string;
  slides?: AiAdaptationSlide[];
  editableTextSelectors?: string[];
  editableMediaSelectors?: string[];
  editableBoxSelectors?: string[];
  ignoreSelectors?: string[];
  warnings?: string[];
};

export type ValidatedAiAdaptationPlan = {
  stageSelector: string | null;
  slides: Array<{ selector: string; title: string }>;
  editableTextSelectors: string[];
  editableMediaSelectors: string[];
  editableBoxSelectors: string[];
  ignoreSelectors: string[];
  warnings: string[];
};

export type AiAdaptationPreview = {
  slideCount: number;
  textCount: number;
  mediaCount: number;
  boxCount: number;
  warnings: string[];
};

export type AiAdaptationApplication = {
  html: string;
  plan: ValidatedAiAdaptationPlan;
  preview: AiAdaptationPreview;
};

type CandidateSummary = {
  selector: string;
  tag: string;
  id?: string;
  className?: string;
  role?: string;
  text?: string;
  media?: string;
};

const unsafeTargetSelector = "script, style, template, meta, link, title, head";
const maxSummaryCandidates = 180;
const maxTextLength = 80;

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
          "selector 必须来自摘要中出现的 selector。slides 至少 2 页。",
          "",
          summary
        ].join("\n")
      }
    ]
  };
}

export async function createAiAdaptationPreview(input: LoadedInput, config: AiConfig): Promise<AiAdaptationApplication> {
  const indexFile = findIndexFile(input.files);
  if (!indexFile) throw new Error("没有找到可供 AI 适配的 HTML 文件。");
  const { messages } = buildAiAdaptationMessages(input);
  const raw = await requestAiChatCompletion(config, messages, { temperature: 0.1, stream: config.stream });
  const plan = parseAiAdaptationPlan(raw);
  return previewAiAdaptationPlan(bytesToText(indexFile.data), plan);
}

export function buildHtmlAdaptationSummary(html: string): string {
  const doc = parseHtml(html);
  const candidates = collectCandidateSummaries(doc);
  const title = doc.title?.trim() || "Untitled";
  return JSON.stringify({
    title,
    candidateCount: candidates.length,
    candidates
  }, null, 2);
}

export function parseAiAdaptationPlan(raw: string): AiAdaptationPlan {
  const jsonText = extractJsonText(raw);
  const parsed = JSON.parse(jsonText) as AiAdaptationPlan;
  if (!parsed || typeof parsed !== "object") throw new Error("AI 适配结果不是有效 JSON。");
  return parsed;
}

export function previewAiAdaptationPlan(html: string, plan: AiAdaptationPlan): AiAdaptationApplication {
  const doc = parseHtml(html);
  const validated = validateAiAdaptationPlan(doc, plan);
  return {
    html,
    plan: validated,
    preview: previewForPlan(doc, validated)
  };
}

export function applyAiAdaptationPlanToHtml(html: string, plan: AiAdaptationPlan): AiAdaptationApplication {
  const doc = parseHtml(html);
  const validated = validateAiAdaptationPlan(doc, plan);
  applyValidatedPlan(doc, validated);
  return {
    html: `<!doctype html>\n${doc.documentElement.outerHTML}`,
    plan: validated,
    preview: previewForPlan(doc, validated)
  };
}

export function validateAiAdaptationPlan(doc: Document, plan: AiAdaptationPlan): ValidatedAiAdaptationPlan {
  const warnings = normalizeStringList(plan.warnings);
  const ignoreSelectors = validSelectorList(doc, normalizeStringList(plan.ignoreSelectors), {
    label: "忽略区域",
    warnings,
    allowMultiple: true
  });
  const ignoredElements = elementsForSelectors(doc, ignoreSelectors);
  const stageSelector = firstValidSelector(doc, plan.stageSelector, warnings, "舞台容器");
  const slides = validSlides(doc, plan.slides || [], warnings);

  if (slides.length < 2) {
    throw new Error("AI 适配计划没有识别出至少 2 页。");
  }

  return {
    stageSelector,
    slides,
    editableTextSelectors: validSelectorList(doc, normalizeStringList(plan.editableTextSelectors), {
      label: "文本元素",
      warnings,
      ignoredElements,
      allowMultiple: true
    }),
    editableMediaSelectors: validSelectorList(doc, normalizeStringList(plan.editableMediaSelectors), {
      label: "媒体元素",
      warnings,
      ignoredElements,
      allowMultiple: true
    }),
    editableBoxSelectors: validSelectorList(doc, normalizeStringList(plan.editableBoxSelectors), {
      label: "视觉块",
      warnings,
      ignoredElements,
      allowMultiple: true
    }),
    ignoreSelectors,
    warnings
  };
}

function collectCandidateSummaries(doc: Document): CandidateSummary[] {
  const selector = [
    "main",
    "section",
    "article",
    "aside",
    "header",
    "footer",
    "nav",
    "div",
    "figure",
    "h1",
    "h2",
    "h3",
    "h4",
    "p",
    "li",
    "blockquote",
    "img",
    "picture",
    "video",
    "canvas",
    "svg",
    "iframe",
    "[data-slide]",
    "[data-page]",
    "[data-deck]",
    "[data-slides]"
  ].join(", ");

  return Array.from(doc.body.querySelectorAll(selector))
    .filter((element) => !isUnsafeTarget(element))
    .filter((element) => isUsefulSummaryCandidate(element))
    .slice(0, maxSummaryCandidates)
    .map((element) => summarizeElement(element));
}

function summarizeElement(element: Element): CandidateSummary {
  const summary: CandidateSummary = {
    selector: selectorForElement(element),
    tag: element.tagName.toLowerCase()
  };
  const id = element.getAttribute("id");
  const className = element.getAttribute("class");
  const role = element.getAttribute("role");
  if (id) summary.id = id;
  if (className) summary.className = compactWhitespace(className).slice(0, 120);
  if (role) summary.role = role;
  if (isMediaElement(element)) {
    summary.media = mediaDescription(element);
  } else {
    const text = compactWhitespace(element.textContent || "");
    if (text) summary.text = text.slice(0, maxTextLength);
  }
  return summary;
}

function isUsefulSummaryCandidate(element: Element): boolean {
  if (isMediaElement(element)) return true;
  if (element.matches("main, section, article, aside, header, footer, nav, [data-slide], [data-page], [data-deck], [data-slides]")) return true;
  if (element.matches("h1, h2, h3, h4, p, li, blockquote")) return Boolean(compactWhitespace(element.textContent || ""));
  const idClass = `${element.getAttribute("id") || ""} ${element.getAttribute("class") || ""}`;
  if (/deck|slide|page|screen|card|panel|hero|section|content|chart|metric|kpi|visual|media|image/i.test(idClass)) return true;
  const text = compactWhitespace(element.textContent || "");
  return text.length >= 16 && text.length <= 260 && element.children.length <= 6;
}

function applyValidatedPlan(doc: Document, plan: ValidatedAiAdaptationPlan): void {
  const slideElements = plan.slides
    .map((slide) => doc.querySelector(slide.selector))
    .filter(Boolean) as Element[];
  const stage = resolveStage(doc, plan.stageSelector, slideElements);
  const mountedSlides = ensureSlidesInStage(doc, stage, slideElements);

  mountedSlides.forEach((slide, index) => {
    clearHiddenState(slide);
    slide.classList.add("slide");
    slide.classList.toggle("active", index === 0);
    slide.classList.toggle("visible", index === 0);
    slide.toggleAttribute("data-deck-active", index === 0);
    const title = plan.slides[index]?.title || slideTitle(slide, index);
    if (title && !slide.getAttribute("data-title")) slide.setAttribute("data-title", title.slice(0, 80));
  });

  markElements(doc, plan.editableTextSelectors, "data-editable");
  markElements(doc, plan.editableMediaSelectors, "data-editable-media");
  markElements(doc, plan.editableBoxSelectors, "data-editable-box");
}

function resolveStage(doc: Document, stageSelector: string | null, slides: Element[]): Element | null {
  if (stageSelector) {
    const stage = doc.querySelector(stageSelector);
    if (stage && stage !== doc.body && stage !== doc.documentElement) return stage;
  }

  const parent = slides[0]?.parentElement;
  if (parent && parent !== doc.body && slides.every((slide) => slide.parentElement === parent)) return parent;
  return null;
}

function ensureSlidesInStage(doc: Document, stage: Element | null, slides: Element[]): Element[] {
  const targetStage = stage || createStageBeforeFirstSlide(doc, slides[0]);
  if (!targetStage.id) targetStage.id = "deckStage";
  targetStage.setAttribute("data-html-deck-editor-stage", "preserve");
  targetStage.setAttribute("data-html-deck-editor-navigation", "horizontal");
  if (!targetStage.getAttribute("aria-label")) targetStage.setAttribute("aria-label", "Presentation");

  slides.forEach((slide) => {
    if (slide.parentElement !== targetStage) targetStage.appendChild(slide);
  });
  return slides;
}

function createStageBeforeFirstSlide(doc: Document, firstSlide: Element): Element {
  const stage = doc.createElement("div");
  stage.id = "deckStage";
  stage.className = "deck-stage";
  firstSlide.parentNode?.insertBefore(stage, firstSlide);
  return stage;
}

function markElements(doc: Document, selectors: string[], attribute: string): void {
  elementsForSelectors(doc, selectors).forEach((element) => {
    element.setAttribute(attribute, "");
  });
}

function validSlides(doc: Document, slides: AiAdaptationSlide[], warnings: string[]): Array<{ selector: string; title: string }> {
  const seen = new Set<Element>();
  const valid: Array<{ selector: string; title: string }> = [];
  slides.forEach((slide, index) => {
    const selector = typeof slide?.selector === "string" ? slide.selector.trim() : "";
    if (!selector) {
      warnings.push(`第 ${index + 1} 页缺少 selector，已跳过。`);
      return;
    }
    const matches = safeQuerySelectorAll(doc, selector, warnings, `第 ${index + 1} 页`);
    if (matches.length !== 1 || isUnsafeTarget(matches[0])) {
      warnings.push(`第 ${index + 1} 页 selector 无法唯一匹配，已跳过。`);
      return;
    }
    if (seen.has(matches[0])) {
      warnings.push(`第 ${index + 1} 页与前面页面重复，已跳过。`);
      return;
    }
    seen.add(matches[0]);
    valid.push({
      selector,
      title: compactWhitespace(slide.title || matches[0].querySelector("h1, h2, h3")?.textContent || `Slide ${valid.length + 1}`)
    });
  });
  return valid;
}

function validSelectorList(
  doc: Document,
  selectors: string[],
  options: {
    label: string;
    warnings: string[];
    allowMultiple: boolean;
    ignoredElements?: Element[];
  }
): string[] {
  const valid: string[] = [];
  const seen = new Set<string>();
  selectors.forEach((selector) => {
    const trimmed = selector.trim();
    if (!trimmed || seen.has(trimmed)) return;
    const matches = safeQuerySelectorAll(doc, trimmed, options.warnings, options.label)
      .filter((element) => !isUnsafeTarget(element))
      .filter((element) => !isInsideAny(element, options.ignoredElements || []));
    if (matches.length === 0) {
      options.warnings.push(`${options.label} selector 未匹配到可用元素：${trimmed}`);
      return;
    }
    if (!options.allowMultiple && matches.length > 1) {
      options.warnings.push(`${options.label} selector 匹配过多元素：${trimmed}`);
      return;
    }
    seen.add(trimmed);
    valid.push(trimmed);
  });
  return valid;
}

function firstValidSelector(doc: Document, selector: unknown, warnings: string[], label: string): string | null {
  if (typeof selector !== "string" || !selector.trim()) return null;
  const trimmed = selector.trim();
  const matches = safeQuerySelectorAll(doc, trimmed, warnings, label).filter((element) => !isUnsafeTarget(element));
  if (matches.length !== 1) {
    warnings.push(`${label} selector 无法唯一匹配，已忽略。`);
    return null;
  }
  return trimmed;
}

function previewForPlan(doc: Document, plan: ValidatedAiAdaptationPlan): AiAdaptationPreview {
  return {
    slideCount: plan.slides.length,
    textCount: elementsForSelectors(doc, plan.editableTextSelectors).length,
    mediaCount: elementsForSelectors(doc, plan.editableMediaSelectors).length,
    boxCount: elementsForSelectors(doc, plan.editableBoxSelectors).length,
    warnings: plan.warnings
  };
}

function elementsForSelectors(doc: Document, selectors: string[]): Element[] {
  const elements: Element[] = [];
  const seen = new Set<Element>();
  selectors.forEach((selector) => {
    safeQuerySelectorAll(doc, selector).forEach((element) => {
      if (!seen.has(element)) {
        seen.add(element);
        elements.push(element);
      }
    });
  });
  return elements;
}

function safeQuerySelectorAll(doc: Document, selector: string, warnings: string[] = [], label = "selector"): Element[] {
  try {
    return Array.from(doc.querySelectorAll(selector));
  } catch {
    warnings.push(`${label} selector 语法无效：${selector}`);
    return [];
  }
}

function isUnsafeTarget(element: Element): boolean {
  return Boolean(element.closest(unsafeTargetSelector));
}

function isInsideAny(element: Element, ancestors: Element[]): boolean {
  return ancestors.some((ancestor) => ancestor === element || ancestor.contains(element));
}

function isMediaElement(element: Element): boolean {
  return element.matches("img, picture, video, canvas, svg, iframe, object, embed");
}

function mediaDescription(element: Element): string {
  if (element.matches("img")) return `img ${element.getAttribute("src") || element.getAttribute("alt") || ""}`.trim();
  if (element.matches("video")) return `video ${element.getAttribute("src") || ""}`.trim();
  if (element.matches("iframe")) return `iframe ${element.getAttribute("src") || ""}`.trim();
  return element.tagName.toLowerCase();
}

function clearHiddenState(element: Element): void {
  element.removeAttribute("hidden");
  if (element.getAttribute("aria-hidden") === "true") element.removeAttribute("aria-hidden");
  if (element instanceof HTMLElement) {
    if (element.style.display === "none") element.style.removeProperty("display");
    if (element.style.visibility === "hidden") element.style.removeProperty("visibility");
    if (Number.parseFloat(element.style.opacity || "") === 0) element.style.removeProperty("opacity");
  }
}

function slideTitle(element: Element, index: number): string {
  return compactWhitespace(element.querySelector("h1, h2, h3, [data-title]")?.textContent || "") || `Slide ${index + 1}`;
}

function selectorForElement(element: Element): string {
  const id = element.getAttribute("id");
  if (id && element.ownerDocument.querySelectorAll(idSelector(id)).length === 1) return idSelector(id);

  const parts: string[] = [];
  let current: Element | null = element;
  while (current && current.tagName.toLowerCase() !== "html") {
    const tag = current.tagName.toLowerCase();
    if (tag === "body") {
      parts.unshift("body");
      break;
    }
    const siblings = Array.from(current.parentElement?.children || []).filter((sibling) => sibling.tagName === current?.tagName);
    const index = siblings.indexOf(current) + 1;
    parts.unshift(`${tag}:nth-of-type(${Math.max(1, index)})`);
    current = current.parentElement;
  }
  return parts.join(" > ");
}

function idSelector(id: string): string {
  if (/^-?[_a-zA-Z]+[_a-zA-Z0-9-]*$/.test(id)) return `#${id}`;
  return `[id="${id.replace(/\\/g, "\\\\").replace(/"/g, '\\"')}"]`;
}

function extractJsonText(raw: string): string {
  const fenced = raw.match(/```(?:json)?\s*([\s\S]*?)```/i);
  if (fenced) return fenced[1].trim();
  const start = raw.indexOf("{");
  const end = raw.lastIndexOf("}");
  if (start >= 0 && end > start) return raw.slice(start, end + 1);
  return raw.trim();
}

function normalizeStringList(value: unknown): string[] {
  return Array.isArray(value) ? value.filter((item): item is string => typeof item === "string").map((item) => item.trim()).filter(Boolean) : [];
}

function compactWhitespace(value: string): string {
  return value.replace(/\s+/g, " ").trim();
}

function parseHtml(html: string): Document {
  return new DOMParser().parseFromString(html, "text/html");
}
