import type { DetectionReport, LoadedInput, VirtualFile } from "../types/deck";
import { bytesToText } from "./text";

const HTML_MIME_HINT = /\.(html?|xhtml)$/i;
const explicitDeckParentSelector = [
  "#deck",
  ".deck",
  ".slides",
  "#slides",
  "[data-deck]",
  "[data-slides]",
  "#webslides",
  "#presentation",
  ".presentation",
  "#impress",
  ".impress"
].join(", ");
const explicitDeckSlideSelector = [
  "section",
  "article",
  ".slide",
  ".step",
  "[data-slide]",
  "[data-page]",
  ".page",
  ".screen"
].join(", ");

export function findIndexFile(files: VirtualFile[]): VirtualFile | null {
  const htmlFiles = files.filter((file) => HTML_MIME_HINT.test(file.path));
  const rootIndex = htmlFiles.find((file) => file.path.toLowerCase() === "index.html");
  if (rootIndex) return rootIndex;

  const indexFiles = htmlFiles
    .filter((file) => file.path.toLowerCase().endsWith("/index.html"))
    .sort((a, b) => a.path.split("/").length - b.path.split("/").length);
  if (indexFiles[0]) return indexFiles[0];

  return htmlFiles.length === 1 ? htmlFiles[0] : null;
}

export function detectDeck(input: LoadedInput): DetectionReport {
  const indexFile = findIndexFile(input.files);
  if (!indexFile) {
    return unsupported(null, ["没有找到 index.html 或唯一的 HTML 文件。"]);
  }

  const html = bytesToText(indexFile.data);
  const doc = new DOMParser().parseFromString(html, "text/html");
  const parseError = doc.querySelector("parsererror");
  if (parseError) {
    return unsupported(indexFile.path, ["HTML 文件解析失败，可能不是标准 HTML。"]);
  }

  const hasExistingRuntime =
    html.includes("HtmlDeckEditor") ||
    html.includes("FrontendSlidesEditor.mount") ||
    Boolean(doc.querySelector('script[src*="html-deck-editor"], script[src*="editor-runtime"]'));

  const deckStage = doc.querySelector("deck-stage#deckStage, #deckStage, .deck-stage");
  const slides = deckStage ? stageSlides(deckStage) : [];
  const aiWarnings = aiFriendlinessWarnings(doc, input, indexFile.path, deckStage, slides);
  if (hasExistingRuntime && deckStage && slides.length > 0) {
    return {
      status: "already-editable",
      sourceKind: "fixed-stage",
      indexPath: indexFile.path,
      slideCount: slides.length,
      confidence: 0.98,
      messages: ["这份演示稿已经带有编辑功能，可以升级为新版编辑器。"],
      warnings: aiWarnings
    };
  }

  if (deckStage && slides.length > 0) {
    return {
      status: "ready",
      sourceKind: html.includes("frontend-slides") ? "frontend-slides" : "fixed-stage",
      indexPath: indexFile.path,
      slideCount: slides.length,
      confidence: 0.95,
      messages: [`找到了固定舞台结构，共 ${slides.length} 页。`],
      warnings: aiWarnings
    };
  }

  const revealSlides = directChildren(doc.querySelector(".reveal .slides"), "section");
  if (revealSlides.length >= 2) {
    return {
      status: "adaptable",
      sourceKind: "reveal",
      indexPath: indexFile.path,
      slideCount: revealSlides.length,
      confidence: 0.82,
      messages: [`识别到 Reveal.js 演示结构，共 ${revealSlides.length} 页。`],
      warnings: ["第一版会把每页内容包装进固定舞台，复杂 Reveal 转场和插件不会完整保留。", ...aiWarnings]
    };
  }

  const sectionSlides = selectTopLevelSlides(doc);
  if (sectionSlides.length >= 2) {
    return {
      status: "adaptable",
      sourceKind: "section-slide",
      indexPath: indexFile.path,
      slideCount: sectionSlides.length,
      confidence: 0.78,
      messages: [`识别到 ${sectionSlides.length} 个 slide 页面。`],
      warnings: ["会把这些页面包装成可编辑 HTML deck。", ...aiWarnings]
    };
  }

  const sections = selectGenericSections(doc);
  if (sections.length >= 2 && sections.length <= 80) {
    return {
      status: "adaptable",
      sourceKind: "generic-section",
      indexPath: indexFile.path,
      slideCount: sections.length,
      confidence: 0.62,
      messages: [`看起来像由 ${sections.length} 个页面区块组成的简单演示。`],
      warnings: ["普通 section 会按页包装，排版可能需要打开编辑器后微调。", ...aiWarnings]
    };
  }

  return unsupported(indexFile.path, [
    "这看起来更像普通网页或应用，不像 HTML 演示稿。",
    "第一版不会强行转换普通网站，避免生成难以编辑的结果。"
  ]);
}

function selectGenericSections(doc: Document): Element[] {
  const explicitSlides = selectExplicitContainerSlides(doc);
  if (explicitSlides.length >= 2) return explicitSlides;

  return Array.from(doc.body.querySelectorAll("main > section, body > section")).filter(hasEnoughText);
}

function selectExplicitContainerSlides(doc: Document): Element[] {
  const parents = Array.from(doc.body.querySelectorAll(explicitDeckParentSelector));
  for (const parent of parents) {
    const slides = directChildren(parent, explicitDeckSlideSelector).filter(hasEnoughText);
    if (slides.length >= 2) return slides;
  }
  return [];
}

function selectTopLevelSlides(doc: Document): Element[] {
  return topLevelElements(Array.from(doc.body.querySelectorAll("section.slide, .slide")));
}

function stageSlides(stage: Element): Element[] {
  const directSlides = directChildren(stage, ".slide");
  return directSlides.length ? directSlides : topLevelElements(Array.from(stage.querySelectorAll(".slide")));
}

function topLevelElements(elements: Element[]): Element[] {
  return elements.filter((element) => !elements.some((other) => other !== element && other.contains(element)));
}

function directChildren(parent: Element | null, selector: string): Element[] {
  if (!parent) return [];
  return Array.from(parent.children).filter((child) => child.matches(selector));
}

function hasEnoughText(section: Element): boolean {
  const text = (section.textContent || "").trim();
  return text.length > 10;
}

function aiFriendlinessWarnings(doc: Document, input: LoadedInput, indexPath: string, deckStage: Element | null, knownSlides: Element[]): string[] {
  const warnings: string[] = [];
  warnings.push(...slideStructureWarnings(doc, deckStage));

  const slides = knownSlides.length ? knownSlides : likelySlides(doc, deckStage);
  const screenshotSlides = slides.filter(isScreenshotLikeSlide);
  if (screenshotSlides.length > 0) {
    warnings.push(`AI 友好度提示：有 ${screenshotSlides.length} 页主要由单张图片、SVG 或画布构成，后续 AI 难以直接改里面的文字。`);
  }

  if (hasDynamicSlideScript(doc)) {
    warnings.push("AI 友好度提示：脚本里疑似动态生成 slide 内容，建议先固化为静态 HTML 再交给 AI 修改。");
  }

  const missing = missingLocalResources(doc, input, indexPath);
  if (missing.length > 0) {
    warnings.push(`AI 友好度提示：引用了 ${missing.length} 个本地资源但上传内容里找不到：${missing.slice(0, 3).join("、")}。建议上传完整文件夹或 ZIP。`);
  }

  return Array.from(new Set(warnings));
}

function slideStructureWarnings(doc: Document, deckStage: Element | null): string[] {
  const warnings: string[] = [];
  const parents = uniqueElements([
    deckStage,
    ...Array.from(doc.body.querySelectorAll(explicitDeckParentSelector))
  ]);
  for (const parent of parents) {
    if (!parent) continue;
    const nestedSlide = parent.querySelector(".slide .slide, section.slide section.slide, [data-slide] [data-slide]");
    if (nestedSlide) {
      warnings.push("AI 友好度提示：检测到 slide 嵌套结构，建议让每个 .slide 直接放在 deck-stage 或 deck 容器下。");
      break;
    }
    const allSlides = Array.from(parent.querySelectorAll(".slide, section.slide, article.slide, [data-slide]"));
    const directSlides = directChildren(parent, ".slide, section.slide, article.slide, [data-slide]");
    if (allSlides.length >= 2 && directSlides.length > 0 && directSlides.length < allSlides.length) {
      warnings.push("AI 友好度提示：部分 slide 不是 deck 容器的直接子元素，AI 修改结构时更容易误判层级。");
      break;
    }
  }
  return warnings;
}

function likelySlides(doc: Document, deckStage: Element | null): Element[] {
  if (deckStage) return stageSlides(deckStage);
  const revealSlides = directChildren(doc.querySelector(".reveal .slides"), "section");
  if (revealSlides.length) return revealSlides;
  const explicit = selectTopLevelSlides(doc);
  if (explicit.length) return explicit;
  const parents = Array.from(doc.body.querySelectorAll(explicitDeckParentSelector));
  for (const parent of parents) {
    const slides = directChildren(parent, explicitDeckSlideSelector);
    if (slides.length) return slides;
  }
  return topLevelElements(Array.from(doc.body.querySelectorAll("main > section, body > section, article")));
}

function isScreenshotLikeSlide(slide: Element): boolean {
  const text = (slide.textContent || "").replace(/\s+/g, "").trim();
  if (text.length > 8) return false;
  const media = Array.from(slide.querySelectorAll("img, picture, svg, canvas, video"));
  return media.length === 1;
}

function hasDynamicSlideScript(doc: Document): boolean {
  return Array.from(doc.querySelectorAll("script:not([src])")).some((script) => {
    const text = script.textContent || "";
    const writesHtml = /innerHTML\s*=|insertAdjacentHTML|document\.write|createElement\(\s*["'](?:section|article|div|deck-stage)/i.test(text);
    const mentionsSlides = /slide|deck|presentation|section/i.test(text);
    return writesHtml && mentionsSlides;
  });
}

function missingLocalResources(doc: Document, input: LoadedInput, indexPath: string): string[] {
  const files = new Set(input.files.map((item) => normalizeVirtualPath(item.path)));
  const references = Array.from(doc.querySelectorAll("img[src], video[src], audio[src], source[src], track[src], script[src], link[href]"))
    .map((element) => element.getAttribute("src") || element.getAttribute("href") || "")
    .map((value) => resolveResourcePath(value, indexPath))
    .filter((value): value is string => Boolean(value));
  return Array.from(new Set(references.filter((reference) => !files.has(reference))));
}

function resolveResourcePath(value: string, indexPath: string): string | null {
  const raw = value.trim();
  if (!raw || raw.startsWith("#")) return null;
  if (/^(?:https?:|data:|blob:|mailto:|tel:|javascript:)/i.test(raw)) return null;
  const clean = raw.split(/[?#]/)[0];
  if (!clean) return null;
  const base = clean.startsWith("/") ? "" : dirname(indexPath);
  return normalizeVirtualPath(`${base}${clean.replace(/^\/+/, "")}`);
}

function normalizeVirtualPath(path: string): string {
  const parts: string[] = [];
  path.replace(/\\/g, "/").split("/").forEach((part) => {
    if (!part || part === ".") return;
    if (part === "..") {
      parts.pop();
      return;
    }
    parts.push(part);
  });
  return parts.join("/");
}

function dirname(path: string): string {
  const normalized = normalizeVirtualPath(path);
  const index = normalized.lastIndexOf("/");
  return index >= 0 ? `${normalized.slice(0, index)}/` : "";
}

function uniqueElements(elements: Array<Element | null>): Element[] {
  return Array.from(new Set(elements.filter((element): element is Element => Boolean(element))));
}

function unsupported(indexPath: string | null, messages: string[]): DetectionReport {
  return {
    status: "unsupported",
    sourceKind: "unknown",
    indexPath,
    slideCount: 0,
    confidence: 0,
    messages,
    warnings: []
  };
}
