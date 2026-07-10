import JSZip from "jszip";
import type { ConvertResult, DetectionReport, LoadedInput, VirtualFile } from "../types/deck";
import { applyAiAdaptationPlanToHtml, type AiAdaptationPlan } from "./aiAdapter";
import { detectDeck, findIndexFile } from "./detector";
import { runtimeAssets, RUNTIME_VERSION } from "./runtimeAssets";
import { LIMITS } from "./safety";
import { bytesToText, textToBytes } from "./text";

const marker = "data-html-deck-editor-runtime";

const legacyEditorShellSelectors = [
  "[data-html-deck-editor-ui]",
  "#editorShell",
  "#shapeMenu",
  "#editorFrame",
  "#editorToast",
  "#editorGuideV",
  "#editorGuideH"
];

const legacyEditorFloatingSelectors = [
  "#editToggle",
  "#editExport",
  ".edit-toggle",
  ".edit-export",
  ".edit-hotzone",
  "[data-html-deck-editor-ui]"
];

const legacyEditorRootSelectors = [
  ".editor-toolbar",
  ".editor-slides",
  ".editor-panel",
  ".editor-help-modal",
  ".visual-editor",
  ".visual-editor-shell",
  "#visualEditor"
];

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
const forcedHiddenSlideClasses = ["hidden", "is-hidden", "d-none", "invisible", "opacity-0"];

export type ConvertProgressEvent = {
  stage: "detect" | "rewrite" | "runtime" | "zip";
  percent: number;
  detail: string;
};

type ConvertProgressCallback = (event: ConvertProgressEvent) => void;

export type ConvertOptions = {
  aiAdaptationPlan?: AiAdaptationPlan;
  allowSinglePageFallback?: boolean;
};

const singlePageFallbackWarning = "普通检测没有识别出分页，已按你的选择把整个页面作为 1 页进行本地转换，请在编辑器中复核布局。";

export async function convertInput(
  input: LoadedInput,
  inputWarnings: string[] = [],
  onProgress?: ConvertProgressCallback,
  options: ConvertOptions = {}
): Promise<ConvertResult> {
  let workingInput = input;
  let warnings = [...inputWarnings];

  if (options.aiAdaptationPlan) {
    const indexFile = findIndexFile(input.files);
    if (!indexFile) {
      const report = detectDeck(input);
      return {
        report,
        blob: null,
        outputName: null,
        filesAdded: [],
        filesModified: [],
        warnings
      };
    }

    onProgress?.({ stage: "rewrite", percent: 0, detail: "正在把 AI 优化写入 HTML。" });
    const adapted = applyAiAdaptationPlanToHtml(bytesToText(indexFile.data), options.aiAdaptationPlan);
    const adaptedBytes = textToBytes(adapted.html);
    workingInput = {
      ...input,
      files: input.files.map((file) => file.path === indexFile.path
        ? { ...file, data: adaptedBytes, size: adaptedBytes.byteLength }
        : file)
    };
    warnings = [...warnings, ...adapted.preview.warnings];
    onProgress?.({ stage: "rewrite", percent: 28, detail: "AI 优化已写入本地 HTML。" });
  }

  onProgress?.({ stage: "detect", percent: 0, detail: "正在检查是不是 HTML 演示稿。" });
  let report = detectDeck(workingInput);
  if (options.allowSinglePageFallback && report.status === "unsupported" && report.indexPath) {
    report = {
      ...report,
      status: "adaptable",
      sourceKind: "unknown",
      slideCount: 1,
      confidence: 0.2,
      messages: ["未识别出明确分页，将整个页面作为 1 页进行本地转换。"],
      warnings: [...report.warnings, singlePageFallbackWarning]
    };
  }
  onProgress?.({ stage: "detect", percent: 100, detail: report.messages[0] || "检测完成。" });
  if (report.status === "unsupported" || !report.indexPath) {
    return {
      report,
      blob: null,
      outputName: null,
      filesAdded: [],
      filesModified: [],
      warnings: [...warnings, ...report.warnings]
    };
  }

  const indexFile = findIndexFile(workingInput.files);
  if (!indexFile) {
    return {
      report,
      blob: null,
      outputName: null,
      filesAdded: [],
      filesModified: [],
      warnings: [...warnings, "没有找到可转换的 HTML 文件。"]
    };
  }

  onProgress?.({ stage: "rewrite", percent: 0, detail: `正在改写 ${indexFile.path}` });
  const sourceHtml = bytesToText(indexFile.data);
  const manifestResult = injectExportAssetManifest(rewriteHtml(sourceHtml, report, indexFile.path), workingInput.files, indexFile.path);
  const rewrittenHtml = manifestResult.html;
  warnings = [...warnings, ...manifestResult.warnings];
  onProgress?.({ stage: "rewrite", percent: 100, detail: "HTML 已加入编辑器入口。" });

  const zip = new JSZip();
  const indexDir = indexFile.path.includes("/") ? indexFile.path.split("/").slice(0, -1).join("/") : "";
  const runtimePrefix = indexDir ? `${indexDir}/runtime/` : "runtime/";

  onProgress?.({ stage: "runtime", percent: 0, detail: "正在整理原文件和编辑器文件。" });
  for (const file of workingInput.files) {
    if (file.path === indexFile.path) {
      zip.file(file.path, rewrittenHtml);
    } else if (report.status === "already-editable" && isLegacyRuntimeFile(file.path)) {
      continue;
    } else {
      zip.file(file.path, stableBytes(file.data));
    }
  }
  onProgress?.({ stage: "runtime", percent: 55, detail: `已放入 ${workingInput.files.length} 个原文件。` });

  for (const [path, content] of Object.entries(runtimeAssets)) {
    const name = path.replace("runtime/", "");
    zip.file(`${runtimePrefix}${name}`, content);
  }
  onProgress?.({ stage: "runtime", percent: 100, detail: `已加入 ${Object.keys(runtimeAssets).length} 个编辑器文件。` });

  const blob = await zip.generateAsync({ type: "blob", compression: "DEFLATE" }, (metadata) => {
    onProgress?.({ stage: "zip", percent: metadata.percent, detail: metadata.currentFile || "正在生成 ZIP。" });
  });
  onProgress?.({ stage: "zip", percent: 100, detail: "可编辑 ZIP 已生成。" });

  return {
    report,
    blob,
    outputName: `${safeName(input.name)}-editable.zip`,
    filesAdded: Object.keys(runtimeAssets).map((path) => `${runtimePrefix}${path.replace("runtime/", "")}`),
    filesModified: [indexFile.path],
    warnings: [...warnings, ...report.warnings]
  };
}

export function rewriteHtml(html: string, report: DetectionReport, indexPath = "index.html"): string {
  const doc = new DOMParser().parseFromString(html, "text/html");
  const upgradeExistingEditor = report.status === "already-editable";
  rewriteBaseResources(doc, indexPath);
  ensureTitle(doc);
  ensureUtf8Charset(doc);
  removeLegacyEditorArtifacts(doc, { upgradeExistingEditor });

  if ((report.status === "ready" || report.status === "already-editable") && shouldPreserveReadyStage(doc)) {
    prepareReadyStage(doc);
  } else if (report.status === "adaptable") {
    prepareAdaptableStage(doc, report);
  }

  neutralizeSourceFramework(doc, report);
  ensureRuntimeLinks(doc, upgradeExistingEditor);
  ensureRuntimeMount(doc);
  return serializeHtmlDocument(doc, html);
}

function ensureTitle(doc: Document): void {
  if (!doc.querySelector("title")) {
    const title = doc.createElement("title");
    title.textContent = "Editable HTML Deck";
    doc.head.appendChild(title);
  }
}

function ensureUtf8Charset(doc: Document): void {
  const charsetMetas = Array.from(doc.querySelectorAll("meta[charset]"));
  const primary = charsetMetas.shift() || doc.createElement("meta");
  primary.setAttribute("charset", "utf-8");
  if (!primary.parentElement) doc.head.prepend(primary);
  charsetMetas.forEach((meta) => meta.remove());
  doc.querySelectorAll("meta[http-equiv]").forEach((meta) => {
    if (meta.getAttribute("http-equiv")?.toLowerCase() === "content-type") meta.remove();
  });
}

function serializeHtmlDocument(doc: Document, sourceHtml: string): string {
  const doctype = sourceHtml.match(/<!doctype\b[^>]*>/i)?.[0] || "<!doctype html>";
  return `${doctype}\n${doc.documentElement.outerHTML}`;
}

function rewriteBaseResources(doc: Document, indexPath: string): void {
  const base = doc.querySelector("base[href]");
  if (!base) return;
  const baseHref = base.getAttribute("href")?.trim();
  if (!baseHref) {
    doc.querySelectorAll("base").forEach((node) => node.remove());
    return;
  }

  const localOrigin = "https://html-deck.local";
  const documentUrl = new URL(indexPath.replace(/^\/+/, ""), `${localOrigin}/`);
  let baseUrl: URL;
  try {
    baseUrl = new URL(baseHref, documentUrl);
  } catch {
    doc.querySelectorAll("base").forEach((node) => node.remove());
    return;
  }

  const indexDir = virtualDirname(indexPath);
  const rewrite = (value: string) => rewriteBasedUrl(value, baseUrl, indexDir, localOrigin);
  [
    ["[src]", "src"],
    ["[href]", "href"],
    ["[poster]", "poster"],
    ["object[data]", "data"],
    ["image[href]", "href"],
    ["image[xlink\\:href]", "xlink:href"]
  ].forEach(([selector, attribute]) => {
    doc.querySelectorAll(selector).forEach((element) => {
      const value = element.getAttribute(attribute);
      if (value !== null) element.setAttribute(attribute, rewrite(value));
    });
  });
  doc.querySelectorAll("[srcset]").forEach((element) => {
    const value = element.getAttribute("srcset") || "";
    element.setAttribute("srcset", value.split(",").map((candidate) => {
      const parts = candidate.trim().split(/\s+/);
      if (!parts[0]) return candidate;
      parts[0] = rewrite(parts[0]);
      return parts.join(" ");
    }).join(", "));
  });
  doc.querySelectorAll("[style]").forEach((element) => {
    element.setAttribute("style", rewriteCssUrls(element.getAttribute("style") || "", rewrite));
  });
  doc.querySelectorAll("style").forEach((style) => {
    style.textContent = rewriteCssUrls(style.textContent || "", rewrite);
  });
  doc.querySelectorAll("base").forEach((node) => node.remove());
}

function rewriteBasedUrl(value: string, baseUrl: URL, indexDir: string, localOrigin: string): string {
  const raw = value.trim();
  if (!raw || raw.startsWith("#") || /^(?:data:|blob:|mailto:|tel:|javascript:)/i.test(raw)) return value;
  try {
    const resolved = new URL(raw, baseUrl);
    if (resolved.origin !== localOrigin) return resolved.href;
    const target = resolved.pathname.replace(/^\/+/, "");
    return `${relativeVirtualPath(target, indexDir)}${resolved.search}${resolved.hash}`;
  } catch {
    return value;
  }
}

function rewriteCssUrls(css: string, rewrite: (value: string) => string): string {
  return css.replace(/url\((['"]?)(.*?)\1\)/gi, (match, quote, value) => {
    const source = String(value || "").trim();
    if (!source) return match;
    const rewritten = rewrite(source);
    return `url(${quote || "\""}${rewritten}${quote || "\""})`;
  });
}

function virtualDirname(path: string): string {
  const clean = path.replace(/\\/g, "/").replace(/^\/+/, "");
  const index = clean.lastIndexOf("/");
  return index >= 0 ? clean.slice(0, index) : "";
}

function relativeVirtualPath(target: string, indexDir: string): string {
  const targetParts = target.split("/").filter(Boolean);
  const fromParts = indexDir.split("/").filter(Boolean);
  let common = 0;
  while (common < targetParts.length && common < fromParts.length && targetParts[common] === fromParts[common]) common += 1;
  return [...fromParts.slice(common).map(() => ".."), ...targetParts.slice(common)].join("/") || "./";
}

function prepareReadyStage(doc: Document): void {
  const stage = doc.querySelector("deck-stage#deckStage, #deckStage, .deck-stage, [data-html-deck-editor-stage]");
  if (!stage || slideElementsInStage(stage).length < 1) return;
  stage.setAttribute("data-html-deck-editor-stage", "preserve");
  if (!stage.id) stage.id = "deckStage";
  if (!stage.getAttribute("aria-label")) stage.setAttribute("aria-label", "Presentation");
}

function shouldPreserveReadyStage(doc: Document): boolean {
  const stage = doc.querySelector("deck-stage#deckStage, #deckStage, .deck-stage, [data-html-deck-editor-stage]");
  if (!stage) return false;
  if (stage.getAttribute("data-html-deck-editor-stage") === "preserve") return true;
  return stage.tagName.toLowerCase() !== "deck-stage" || hasAuthoredDeckStageController(doc);
}

function hasAuthoredDeckStageController(doc: Document): boolean {
  if (!doc.querySelector("deck-stage#deckStage")) return false;
  return Array.from(doc.querySelectorAll("script:not([src])")).some((script) => {
    const source = script.textContent || "";
    const targetsDeckStage = /getElementById\(["']deckStage["']\)|querySelector\(["']#deckStage["']\)/.test(source);
    const controlsDeckStage =
      /style\.transform/.test(source) ||
      /classList\.toggle\(["'](?:active|visible)["']/.test(source) ||
      /querySelectorAll\([^)]*section\.slide/.test(source);
    return targetsDeckStage && controlsDeckStage;
  });
}

function prepareAdaptableStage(doc: Document, report: DetectionReport): void {
  if (report.sourceKind === "unknown") {
    prepareSinglePageFallback(doc);
    return;
  }

  const existingStage = doc.querySelector("deck-stage#deckStage, #deckStage, .deck-stage, [data-html-deck-editor-stage]");
  const sourceSlides = selectSlideCandidates(doc, report);
  if (sourceSlides.length < 1) return;

  if (existingStage && existingStageContainsSourceSlides(existingStage, sourceSlides)) return;

  sourceSlides.forEach((source, index) => {
    clearForcedHiddenSlideState(source);
    source.classList.add("slide");
    if (index === 0 && !source.classList.contains("active") && !source.classList.contains("visible")) {
      source.classList.add("active", "visible");
    }
    if (!source.getAttribute("data-title")) {
      source.setAttribute("data-title", slideTitle(source, index));
    }
  });

  const reusableStage = findReusableStage(sourceSlides);
  if (reusableStage) {
    markPreservedStage(reusableStage, sourceSlides);
    return;
  }

  const repairableStage = findRepairableDeckStage(sourceSlides);
  if (repairableStage) {
    moveSlidesIntoStage(repairableStage, sourceSlides);
    markPreservedStage(repairableStage, sourceSlides);
    return;
  }

  wrapSlidesInPlace(doc, sourceSlides);
}

function prepareSinglePageFallback(doc: Document): void {
  const contentNodes = Array.from(doc.body.childNodes).filter((node) => {
    if (node.nodeType !== 1) return Boolean(node.textContent?.trim());
    return !(node as Element).matches("script, style, link, template, noscript");
  });

  const stage = doc.createElement("div");
  stage.id = "deckStage";
  stage.className = "deck-stage";
  stage.setAttribute("data-html-deck-editor-stage", "preserve");
  stage.setAttribute("aria-label", "Presentation");

  const slide = doc.createElement("section");
  slide.className = "slide active visible";
  slide.setAttribute("data-title", doc.title.trim() || "Page 1");

  const insertionPoint = contentNodes[0] || doc.body.firstChild;
  if (insertionPoint) doc.body.insertBefore(stage, insertionPoint);
  else doc.body.appendChild(stage);
  contentNodes.forEach((node) => slide.appendChild(node));
  stage.appendChild(slide);
}

function findReusableStage(sourceSlides: Element[]): Element | null {
  const parent = sourceSlides[0]?.parentElement;
  if (!parent || !sourceSlides.every((slide) => slide.parentElement === parent)) return null;
  if (parent === parent.ownerDocument.body || parent === parent.ownerDocument.documentElement) return null;

  const selector = [
    "#deck",
    ".deck",
    ".slides",
    "#slides",
    "main",
    "[role='main']",
    "[data-deck]",
    "[data-slides]",
    "#webslides",
    "#presentation",
    ".presentation",
    "#impress",
    ".impress"
  ].join(", ");
  if (parent.matches(selector)) return parent;

  const elementChildren = Array.from(parent.children);
  const slideSet = new Set(sourceSlides);
  const onlySlides = elementChildren.length === sourceSlides.length && elementChildren.every((child) => slideSet.has(child));
  return onlySlides ? parent : null;
}

function findRepairableDeckStage(sourceSlides: Element[]): Element | null {
  const slideSet = new Set(sourceSlides);
  const parents = Array.from(new Set(sourceSlides.map((slide) => slide.parentElement).filter(Boolean))) as Element[];
  const firstParent = sourceSlides[0]?.parentElement;
  const candidates = parents
    .filter((parent) => parent.matches(explicitDeckParentSelector))
    .sort((a, b) => (a === firstParent ? -1 : 0) - (b === firstParent ? -1 : 0));

  return candidates.find((parent) => {
    const directSlideCount = Array.from(parent.children).filter((child) => slideSet.has(child)).length;
    return directSlideCount >= 1 && (parent === firstParent || directSlideCount >= Math.ceil(sourceSlides.length / 2));
  }) || null;
}

function moveSlidesIntoStage(stage: Element, sourceSlides: Element[]): void {
  const marker = stage.ownerDocument.createTextNode("");
  const firstExistingSlide = sourceSlides.find((slide) => slide.parentElement === stage);
  if (firstExistingSlide) {
    stage.insertBefore(marker, firstExistingSlide);
  } else {
    stage.appendChild(marker);
  }

  const fragment = stage.ownerDocument.createDocumentFragment();
  sourceSlides.forEach((source) => {
    fragment.appendChild(source);
  });
  marker.parentNode?.replaceChild(fragment, marker);
}

function markPreservedStage(stage: Element, sourceSlides: Element[]): void {
  stage.setAttribute("data-html-deck-editor-stage", "preserve");
  if (shouldUseHorizontalNavigation(stage, sourceSlides)) {
    stage.setAttribute("data-html-deck-editor-navigation", "horizontal");
  }
  if (!stage.id) stage.id = "deckStage";
  if (!stage.getAttribute("aria-label")) stage.setAttribute("aria-label", "Presentation");
}

function shouldUseHorizontalNavigation(stage: Element, sourceSlides: Element[]): boolean {
  if (stage.matches(explicitDeckParentSelector)) return true;
  const elementChildren = Array.from(stage.children);
  const slideSet = new Set(sourceSlides);
  return elementChildren.length === sourceSlides.length && elementChildren.every((child) => slideSet.has(child));
}

function wrapSlidesInPlace(doc: Document, sourceSlides: Element[]): void {
  const stage = doc.createElement("div");
  stage.id = "deckStage";
  stage.className = "deck-stage";
  stage.setAttribute("data-html-deck-editor-stage", "preserve");
  stage.setAttribute("data-html-deck-editor-navigation", "horizontal");
  stage.setAttribute("aria-label", "Presentation");

  const firstSlide = sourceSlides[0];
  firstSlide.parentNode?.insertBefore(stage, firstSlide);
  sourceSlides.forEach((source, index) => {
    if (index === 0) {
      source.classList.add("active", "visible");
    } else {
      source.classList.remove("active", "visible");
    }
    stage.appendChild(source);
  });
}

function selectSlideCandidates(doc: Document, report: DetectionReport): Element[] {
  if (report.sourceKind === "reveal") return selectRevealSlides(doc);
  if (report.sourceKind === "impress") return directChildren(doc.querySelector("#impress, .impress"), ".step");
  if (report.sourceKind === "section-slide") return selectTopLevelSlides(doc);
  const explicitSlides = selectExplicitContainerSlides(doc);
  if (explicitSlides.length >= 2) return explicitSlides;
  return Array.from(doc.body.querySelectorAll("main > section, body > section")).filter(hasEnoughText);
}

function selectRevealSlides(doc: Document): Element[] {
  const topLevel = directChildren(doc.querySelector(".reveal .slides"), "section");
  return topLevel.flatMap((section) => {
    const nested = directChildren(section, "section");
    if (!nested.length || hasOwnRevealContent(section)) return [section];
    return nested;
  });
}

function hasOwnRevealContent(section: Element): boolean {
  return Array.from(section.childNodes).some((node) => {
    if (node.nodeType === Node.TEXT_NODE) return Boolean(node.textContent?.trim());
    return node.nodeType === Node.ELEMENT_NODE && !(node as Element).matches("section, script, template");
  });
}

function selectTopLevelSlides(doc: Document): Element[] {
  return topLevelElements(Array.from(doc.body.querySelectorAll("section.slide, .slide")));
}

function selectExplicitContainerSlides(doc: Document): Element[] {
  const parents = Array.from(doc.body.querySelectorAll(explicitDeckParentSelector));
  for (const parent of parents) {
    const slides = directChildren(parent, explicitDeckSlideSelector).filter(hasEnoughText);
    if (slides.length >= 1) return slides;
  }
  return [];
}

function topLevelElements(elements: Element[]): Element[] {
  return elements.filter((element) => !elements.some((other) => other !== element && other.contains(element)));
}

function directChildren(parent: Element | null, selector: string): Element[] {
  if (!parent) return [];
  return Array.from(parent.children).filter((child) => child.matches(selector));
}

function slideElementsInStage(stage: Element): Element[] {
  const directSlides = directChildren(stage, ".slide");
  return directSlides.length ? directSlides : topLevelElements(Array.from(stage.querySelectorAll(".slide")));
}

function existingStageContainsSourceSlides(stage: Element, sourceSlides: Element[]): boolean {
  const stageSlides = slideElementsInStage(stage);
  if (stageSlides.length < 1 || stageSlides.length !== sourceSlides.length) return false;
  const sourceSlideSet = new Set(sourceSlides);
  return stageSlides.every((slide) => sourceSlideSet.has(slide));
}

function clearForcedHiddenSlideState(source: Element): void {
  source.removeAttribute("hidden");
  if (source.getAttribute("aria-hidden") === "true") source.removeAttribute("aria-hidden");
  forcedHiddenSlideClasses.forEach((className) => source.classList.remove(className));
  if (!(source instanceof HTMLElement)) return;
  if (source.style.display === "none") source.style.removeProperty("display");
  if (source.style.visibility === "hidden") source.style.removeProperty("visibility");
  if (Number.parseFloat(source.style.opacity || "") === 0) source.style.removeProperty("opacity");
}

function hasEnoughText(section: Element): boolean {
  const text = (section.textContent || "").trim();
  return text.length > 10;
}

function slideTitle(source: Element, index: number): string {
  const heading = source.querySelector("h1, h2, h3, [data-title]");
  const text = heading?.textContent?.trim();
  return text || `Slide ${index + 1}`;
}

function neutralizeSourceFramework(doc: Document, report: DetectionReport): void {
  if (report.sourceKind === "reveal") neutralizeReveal(doc);
  if (report.sourceKind === "impress") neutralizeImpress(doc);
}

function neutralizeReveal(doc: Document): void {
  doc.querySelectorAll(".reveal").forEach((element) => element.classList.remove("reveal"));
  doc.querySelectorAll(".slides").forEach((element) => element.classList.remove("slides"));
  doc.querySelectorAll(".slide").forEach((element) => {
    element.classList.remove("present", "past", "future");
    element.removeAttribute("aria-hidden");
    if (element instanceof HTMLElement) {
      ["display", "visibility", "opacity", "transform", "top", "left"].forEach((property) => element.style.removeProperty(property));
    }
  });
  removeFrameworkScripts(doc, /(?:^|\/)reveal(?:\.min)?\.js(?:[?#]|$)/i, /\bReveal\s*\.\s*(?:initialize|configure|sync|layout)\s*(?=\()/g);
}

function neutralizeImpress(doc: Document): void {
  const stage = doc.querySelector("#impress, .impress, [data-html-deck-editor-stage]");
  if (stage) {
    stage.id = "deckStage";
    stage.classList.remove("impress");
  }
  doc.querySelectorAll(".step").forEach((element) => {
    element.classList.remove("step", "past", "present", "future");
    ["data-x", "data-y", "data-z", "data-rotate", "data-rotate-x", "data-rotate-y", "data-rotate-z", "data-scale"].forEach((name) => element.removeAttribute(name));
    if (element instanceof HTMLElement) {
      ["position", "transform", "transform-origin", "top", "left"].forEach((property) => element.style.removeProperty(property));
    }
  });
  removeFrameworkScripts(doc, /(?:^|\/)impress(?:\.min)?\.js(?:[?#]|$)/i, /\bimpress\s*\(\s*\)\s*\.\s*init\s*(?=\()/g);
}

function removeFrameworkScripts(doc: Document, sourcePattern: RegExp, inlinePattern: RegExp): void {
  doc.querySelectorAll("script[src]").forEach((script) => {
    if (sourcePattern.test(script.getAttribute("src") || "")) script.remove();
  });
  doc.querySelectorAll("script:not([src])").forEach((script) => {
    const source = script.textContent || "";
    const rewritten = source.replace(inlinePattern, "(() => undefined)");
    if (rewritten !== source) script.textContent = rewritten;
  });
}

function ensureRuntimeLinks(doc: Document, upgradeExistingEditor: boolean): void {
  removeOwnedRuntime(doc, upgradeExistingEditor);

  const pickerCss = doc.createElement("link");
  pickerCss.rel = "stylesheet";
  pickerCss.href = "runtime/vanilla-picker.css";
  pickerCss.setAttribute(marker, RUNTIME_VERSION);
  doc.head.appendChild(pickerCss);

  const css = doc.createElement("link");
  css.rel = "stylesheet";
  css.href = "runtime/html-deck-editor.css";
  css.setAttribute(marker, RUNTIME_VERSION);
  doc.head.appendChild(css);

  if (!doc.querySelector("deck-stage[data-html-deck-editor-stage='preserve']")) {
    const deckStage = doc.createElement("script");
    deckStage.src = "runtime/deck-stage.js";
    deckStage.setAttribute(marker, RUNTIME_VERSION);
    doc.body.appendChild(deckStage);
  }

  const picker = doc.createElement("script");
  picker.src = "runtime/vanilla-picker.js";
  picker.setAttribute(marker, RUNTIME_VERSION);
  doc.body.appendChild(picker);

  ["html-to-image.js", "jspdf.umd.min.js", "jszip.min.js"].forEach((filename) => {
    const script = doc.createElement("script");
    script.src = `runtime/${filename}`;
    script.setAttribute(marker, RUNTIME_VERSION);
    doc.body.appendChild(script);
  });

  const editor = doc.createElement("script");
  editor.src = "runtime/html-deck-editor.js";
  editor.setAttribute(marker, RUNTIME_VERSION);
  doc.body.appendChild(editor);
}

function ensureRuntimeMount(doc: Document): void {
  const script = doc.createElement("script");
  script.setAttribute(marker, RUNTIME_VERSION);
  script.textContent = `
    (function () {
      function mountHtmlDeckEditor() {
        if (!document.getElementById("deckStage") && !document.querySelector("[data-html-deck-editor-stage], .deck-stage, #deck")) return;
        if (!window.HtmlDeckEditor || window.__htmlDeckEditorMounted) return;
        try {
          window.editor = window.HtmlDeckEditor.mount();
          window.__htmlDeckEditorMounted = true;
        } catch (error) {
          console.error("HtmlDeckEditor failed to mount.", error);
        }
      }
      if (document.readyState === "loading") {
        window.addEventListener("DOMContentLoaded", mountHtmlDeckEditor, { once: true });
      } else {
        mountHtmlDeckEditor();
      }
      window.addEventListener("load", mountHtmlDeckEditor, { once: true });
    })();
  `;
  doc.body.appendChild(script);
}

function injectExportAssetManifest(html: string, files: VirtualFile[], indexPath: string): { html: string; warnings: string[] } {
  const doc = new DOMParser().parseFromString(html, "text/html");
  const collected = collectExportAssets(doc, files, indexPath);
  if (!collected.assets.length) return { html, warnings: collected.warnings };
  doc.getElementById("html-deck-editor-export-assets")?.remove();
  const script = doc.createElement("script");
  script.id = "html-deck-editor-export-assets";
  script.type = "application/json";
  script.setAttribute(marker, RUNTIME_VERSION);
  script.textContent = JSON.stringify({ assets: collected.assets }).replace(/</g, "\\u003c");
  doc.head.appendChild(script);
  return { html: serializeHtmlDocument(doc, html), warnings: collected.warnings };
}

function collectExportAssets(
  doc: Document,
  files: VirtualFile[],
  indexPath: string
): { assets: Array<{ path: string; keys: string[]; dataUrl: string }>; warnings: string[] } {
  const indexDir = indexPath.includes("/") ? indexPath.split("/").slice(0, -1).join("/") : "";
  const references = referencedAssetPaths(doc, indexPath);
  const imageFiles = files.filter((file) =>
    file.path !== indexPath && imageMimeForPath(file.path) && references.has(normalizeReferencedPath(file.path))
  );
  const selected: VirtualFile[] = [];
  const oversized: string[] = [];
  const overTotal: string[] = [];
  let totalBytes = 0;
  imageFiles.forEach((file) => {
    const size = file.data.byteLength;
    if (size > LIMITS.maxInlineImageBytes) {
      oversized.push(file.path);
      return;
    }
    if (totalBytes + size > LIMITS.maxInlineImageTotalBytes) {
      overTotal.push(file.path);
      return;
    }
    selected.push(file);
    totalBytes += size;
  });

  const baseCounts = new Map<string, number>();
  selected.forEach((file) => {
    const base = file.path.split("/").pop() || file.path;
    baseCounts.set(base, (baseCounts.get(base) || 0) + 1);
  });

  const assets = selected.map((file) => {
    const relativePath = relativeAssetPath(file.path, indexDir);
    const base = file.path.split("/").pop() || file.path;
    const encodedPath = encodeURI(relativePath);
    const keys = new Set([file.path, relativePath, `./${relativePath}`, encodedPath, `./${encodedPath}`]);
    if (baseCounts.get(base) === 1) keys.add(base);
    return {
      path: relativePath,
      keys: Array.from(keys).filter(Boolean),
      dataUrl: `data:${imageMimeForPath(file.path)};base64,${bytesToBase64(file.data)}`
    };
  });
  const warnings: string[] = [];
  if (oversized.length) {
    warnings.push(`以下图片超过单文件内联上限，已保留文件路径：${oversized.join("、")}。单独保存 HTML 时请同时保留这些图片。`);
  }
  if (overTotal.length) {
    warnings.push(`图片内联总量已达到上限，以下图片仅保留文件路径：${overTotal.join("、")}。单独保存 HTML 时请同时保留这些图片。`);
  }
  return { assets, warnings };
}

function referencedAssetPaths(doc: Document, indexPath: string): Set<string> {
  const references = new Set<string>();
  const add = (value: string | null) => {
    const path = referencedVirtualPath(value || "", indexPath);
    if (path) references.add(path);
  };
  doc.querySelectorAll("[src], [poster], object[data], image[href], image[xlink\\:href], link[rel~='icon'][href]").forEach((element) => {
    add(element.getAttribute("src"));
    add(element.getAttribute("poster"));
    add(element.getAttribute("data"));
    add(element.getAttribute("href"));
    add(element.getAttribute("xlink:href"));
  });
  doc.querySelectorAll("[srcset]").forEach((element) => {
    (element.getAttribute("srcset") || "").split(",").forEach((candidate) => add(candidate.trim().split(/\s+/)[0] || ""));
  });
  doc.querySelectorAll("[style], style").forEach((element) => {
    const css = element.matches("style") ? element.textContent || "" : element.getAttribute("style") || "";
    for (const match of css.matchAll(/url\((['"]?)(.*?)\1\)/gi)) add(match[2] || "");
  });
  return references;
}

function referencedVirtualPath(value: string, indexPath: string): string {
  const raw = value.trim();
  if (!raw || raw.startsWith("#") || /^(?:[a-z][a-z0-9+.-]*:|\/\/)/i.test(raw)) return "";
  const clean = raw.split(/[?#]/)[0];
  if (!clean) return "";
  let decoded = clean;
  try {
    decoded = decodeURIComponent(clean);
  } catch {
    // Keep the literal path when malformed percent escapes are present.
  }
  const base = decoded.startsWith("/") ? "" : virtualDirname(indexPath);
  return normalizeReferencedPath(`${base ? `${base}/` : ""}${decoded.replace(/^\/+/, "")}`);
}

function normalizeReferencedPath(path: string): string {
  const parts: string[] = [];
  path.replace(/\\/g, "/").split("/").forEach((part) => {
    if (!part || part === ".") return;
    if (part === "..") parts.pop();
    else parts.push(part);
  });
  return parts.join("/");
}

function relativeAssetPath(path: string, indexDir: string): string {
  if (indexDir && path.startsWith(`${indexDir}/`)) return path.slice(indexDir.length + 1);
  return path;
}

function imageMimeForPath(path: string): string {
  const clean = path.split(/[?#]/)[0].toLowerCase();
  if (/\.jpe?g$/.test(clean)) return "image/jpeg";
  if (/\.png$/.test(clean)) return "image/png";
  if (/\.webp$/.test(clean)) return "image/webp";
  if (/\.gif$/.test(clean)) return "image/gif";
  if (/\.svg$/.test(clean)) return "image/svg+xml";
  return "";
}

function bytesToBase64(data: Uint8Array): string {
  let binary = "";
  const chunkSize = 0x8000;
  for (let offset = 0; offset < data.length; offset += chunkSize) {
    const chunk = data.subarray(offset, offset + chunkSize);
    binary += String.fromCharCode(...chunk);
  }
  return btoa(binary);
}

function removeOwnedRuntime(doc: Document, upgradeExistingEditor: boolean): void {
  const selectors = [`[${marker}]`];
  if (upgradeExistingEditor) selectors.push(
    'script[src*="editor-runtime"]',
    'link[href*="editor-runtime"]',
    'script[src*="html-deck-editor"]',
    'link[href*="html-deck-editor"]',
    'script[src*="runtime/vanilla-picker"]',
    'link[href*="runtime/vanilla-picker"]',
    'script[src*="runtime/html-to-image"]',
    'script[src*="runtime/jspdf"]',
    'script[src*="runtime/jszip"]'
  );
  doc.querySelectorAll(selectors.join(", ")).forEach((node) => {
    node.parentNode?.removeChild(node);
  });
}

function removeLegacyEditorArtifacts(doc: Document, options: { upgradeExistingEditor: boolean }): void {
  doc.querySelectorAll("[data-html-deck-editor-ui]").forEach((node) => node.remove());
  if (!options.upgradeExistingEditor) return;

  doc.querySelectorAll(legacyEditorShellSelectors.join(", ")).forEach((node) => {
    if (node instanceof Element && shouldRemoveEditorShell(node)) {
      node.parentNode?.removeChild(node);
    }
  });

  doc.querySelectorAll(legacyEditorFloatingSelectors.join(", ")).forEach((node) => {
    if (node instanceof HTMLElement && !isInsideDeckContent(node) && isLegacyEditorFloatingControl(node)) {
      node.parentNode?.removeChild(node);
    }
  });

  doc.querySelectorAll(legacyEditorRootSelectors.join(", ")).forEach((node) => {
    if (
      node instanceof HTMLElement &&
      !isInsideDeckContent(node) &&
      (options.upgradeExistingEditor || isLegacyEditorRoot(node))
    ) {
      node.parentNode?.removeChild(node);
    }
  });

  doc.querySelectorAll("button, a").forEach((node) => {
    if (node instanceof HTMLElement && !isInsideDeckContent(node) && isLegacyEditorControl(node)) {
      node.parentNode?.removeChild(node);
    }
  });

  doc.querySelectorAll("script:not([src])").forEach((node) => {
    const cleaned = cleanupLegacyEditorScript(node.textContent || "");
    if (cleaned === null) {
      node.parentNode?.removeChild(node);
    } else if (cleaned !== node.textContent) {
      node.textContent = cleaned;
    }
  });

  doc.body.classList.remove("editing", "editor-on", "dragging-file", "html-deck-editor-exporting");
  if (options.upgradeExistingEditor) {
    doc.querySelectorAll(".editor-selected").forEach((node) => node.classList.remove("editor-selected"));
  }
}

function cleanupLegacyEditorScript(source: string): string | null {
  const hasPresentationController = /class\s+SlidePresentation\b|new\s+SlidePresentation\s*\(/.test(source);
  const hasLegacyInlineEditor = /class\s+InlineDeckEditor\b|new\s+InlineDeckEditor\s*\(/.test(source);

  if (hasPresentationController && hasLegacyInlineEditor) {
    return source.replace(
      /\bnew\s+InlineDeckEditor\s*\(\s*\)\s*;?/g,
      "/* html-deck-editor: legacy InlineDeckEditor disabled */"
    );
  }

  if (hasLegacyInlineEditor) return null;

  if (/FrontendSlidesEditor\.mount\s*\(|HtmlDeckEditor\.mount\s*\(/.test(source)) return null;

  const targetsLegacyEditorChrome =
    /getElementById\(["'](?:editToggle|editExport|editorShell)["']\)/.test(source) ||
    /querySelector\(["']\.(?:edit-hotzone|edit-toggle|edit-export|editor-shell)["']\)/.test(source);
  if (targetsLegacyEditorChrome && !hasPresentationController) return null;

  return source;
}

function isInsideDeckContent(element: Element): boolean {
  return Boolean(element.closest("deck-stage, #deckStage, .deck-stage, .slide"));
}

function shouldRemoveEditorShell(element: Element): boolean {
  return isOwnedEditorElement(element) && !isInsideDeckContent(element);
}

function isOwnedEditorElement(element: Element): boolean {
  if (element.hasAttribute("data-html-deck-editor-ui")) return true;
  return [
    "editorShell",
    "shapeMenu",
    "editorFrame",
    "editorToast",
    "editorGuideV",
    "editorGuideH",
    "editToggle",
    "editExport"
  ].includes(element.id);
}

function isLegacyEditorFloatingControl(element: HTMLElement): boolean {
  if (isOwnedEditorElement(element)) return true;
  if (element.classList.contains("edit-hotzone")) {
    return !element.textContent?.trim() && element.children.length === 0;
  }
  return isLegacyEditorControl(element);
}

function isLegacyEditorRoot(element: HTMLElement): boolean {
  if (isOwnedEditorElement(element)) return true;
  if (element.querySelector("[data-html-deck-editor-ui], #editToggle, #editExport, #editorFrame, #editorToast, #shapeMenu")) return true;
  return Boolean(
    element.querySelector("#saveBtn, #exitEditBtn, #slideRail, #selectionName, #textInput, #imageDropZone") &&
    /editor|visual-editor/i.test(`${element.id} ${element.className}`)
  );
}

function isLegacyEditorControl(element: HTMLElement): boolean {
  const text = (element.textContent || "").replace(/\s+/g, " ").trim().toUpperCase();
  const label = [
    element.id,
    element.className,
    element.getAttribute("title"),
    element.getAttribute("aria-label")
  ].join(" ");
  const editorishLabel = /edit|editor|编辑|save[-_\s]?html|html[-_\s]?save/i.test(label);

  return (
    ((text === "DONE" || text === "EDIT" || text === "SAVE HTML" || text === "保存 HTML") && editorishLabel) ||
    /edit mode|编辑模式|toggle edit mode/i.test(label) ||
    /save[-_\s]?html|html[-_\s]?save/i.test(label)
  );
}

function isLegacyRuntimeFile(path: string): boolean {
  const normalized = path.replace(/\\/g, "/").toLowerCase();
  return (
    /(^|\/)editor-runtime\.(css|js)(\.map)?$/.test(normalized) ||
    /(^|\/)visual-editor\/editor-runtime\.(css|js)(\.map)?$/.test(normalized)
  );
}

function safeName(name: string): string {
  return name.normalize("NFKC").replace(/[^\p{L}\p{N}._-]+/gu, "-").replace(/^-+|-+$/g, "") || "html-deck";
}

function stableBytes(data: Uint8Array): Uint8Array {
  return new Uint8Array(data);
}
