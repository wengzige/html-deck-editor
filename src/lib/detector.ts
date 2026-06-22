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
  if (hasExistingRuntime && deckStage && slides.length > 0) {
    return {
      status: "already-editable",
      sourceKind: "fixed-stage",
      indexPath: indexFile.path,
      slideCount: slides.length,
      confidence: 0.98,
      messages: ["这份演示稿已经带有编辑功能，可以升级为新版编辑器。"],
      warnings: []
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
      warnings: []
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
      warnings: ["第一版会把每页内容包装进固定舞台，复杂 Reveal 转场和插件不会完整保留。"]
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
      warnings: ["会把这些页面包装成可编辑 HTML deck。"]
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
      warnings: ["普通 section 会按页包装，排版可能需要打开编辑器后微调。"]
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
