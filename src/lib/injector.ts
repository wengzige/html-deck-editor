import JSZip from "jszip";
import type { ConvertResult, DetectionReport, LoadedInput, VirtualFile } from "../types/deck";
import { applyAiAdaptationPlanToHtml, type AiAdaptationPlan } from "./aiAdapter";
import { detectDeck, findIndexFile } from "./detector";
import { runtimeAssets, RUNTIME_VERSION } from "./runtimeAssets";
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
};

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
  const report = detectDeck(workingInput);
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
  const rewrittenHtml = injectExportAssetManifest(rewriteHtml(sourceHtml, report), workingInput.files, indexFile.path);
  onProgress?.({ stage: "rewrite", percent: 100, detail: "HTML 已加入编辑器入口。" });

  const zip = new JSZip();
  const indexDir = indexFile.path.includes("/") ? indexFile.path.split("/").slice(0, -1).join("/") : "";
  const runtimePrefix = indexDir ? `${indexDir}/runtime/` : "runtime/";

  onProgress?.({ stage: "runtime", percent: 0, detail: "正在整理原文件和编辑器文件。" });
  for (const file of workingInput.files) {
    if (file.path === indexFile.path) {
      zip.file(file.path, rewrittenHtml);
    } else if (isLegacyRuntimeFile(file.path)) {
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

export function rewriteHtml(html: string, report: DetectionReport): string {
  const doc = new DOMParser().parseFromString(html, "text/html");
  ensureTitle(doc);
  removeLegacyEditorArtifacts(doc, { upgradeExistingEditor: report.status === "already-editable" });

  if ((report.status === "ready" || report.status === "already-editable") && hasAuthoredDeckStageController(doc)) {
    prepareReadyStage(doc);
  } else if (report.status === "adaptable") {
    prepareAdaptableStage(doc, report);
  }

  ensureRuntimeLinks(doc);
  ensureRuntimeMount(doc);
  return `<!doctype html>\n${doc.documentElement.outerHTML}`;
}

function ensureTitle(doc: Document): void {
  if (!doc.querySelector("title")) {
    const title = doc.createElement("title");
    title.textContent = "Editable HTML Deck";
    doc.head.appendChild(title);
  }
}

function prepareReadyStage(doc: Document): void {
  const stage = doc.querySelector("deck-stage#deckStage, #deckStage, .deck-stage, [data-html-deck-editor-stage]");
  if (!stage || slideElementsInStage(stage).length < 2) return;
  stage.setAttribute("data-html-deck-editor-stage", "preserve");
  if (!stage.id) stage.id = "deckStage";
  if (!stage.getAttribute("aria-label")) stage.setAttribute("aria-label", "Presentation");
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
  const existingStage = doc.querySelector("deck-stage#deckStage, #deckStage, .deck-stage, [data-html-deck-editor-stage]");
  const sourceSlides = selectSlideCandidates(doc, report);
  if (sourceSlides.length < 2) return;

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

function findReusableStage(sourceSlides: Element[]): Element | null {
  const parent = sourceSlides[0]?.parentElement;
  if (!parent || !sourceSlides.every((slide) => slide.parentElement === parent)) return null;

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
    return directSlideCount >= 2 && (parent === firstParent || directSlideCount >= Math.ceil(sourceSlides.length / 2));
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
  if (report.sourceKind === "reveal") return directChildren(doc.querySelector(".reveal .slides"), "section");
  if (report.sourceKind === "section-slide") return selectTopLevelSlides(doc);
  const explicitSlides = selectExplicitContainerSlides(doc);
  if (explicitSlides.length >= 2) return explicitSlides;
  return Array.from(doc.body.querySelectorAll("main > section, body > section")).filter(hasEnoughText);
}

function selectTopLevelSlides(doc: Document): Element[] {
  return topLevelElements(Array.from(doc.body.querySelectorAll("section.slide, .slide")));
}

function selectExplicitContainerSlides(doc: Document): Element[] {
  const parents = Array.from(doc.body.querySelectorAll(explicitDeckParentSelector));
  for (const parent of parents) {
    const slides = directChildren(parent, explicitDeckSlideSelector).filter(hasEnoughText);
    if (slides.length >= 2) return slides;
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
  if (stageSlides.length < 2 || stageSlides.length !== sourceSlides.length) return false;
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

function ensureRuntimeLinks(doc: Document): void {
  removeOwnedRuntime(doc);

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

function injectExportAssetManifest(html: string, files: VirtualFile[], indexPath: string): string {
  const assets = collectExportAssets(files, indexPath);
  if (!assets.length) return html;
  const doc = new DOMParser().parseFromString(html, "text/html");
  doc.getElementById("html-deck-editor-export-assets")?.remove();
  const script = doc.createElement("script");
  script.id = "html-deck-editor-export-assets";
  script.type = "application/json";
  script.setAttribute(marker, RUNTIME_VERSION);
  script.textContent = JSON.stringify({ assets }).replace(/</g, "\\u003c");
  doc.head.appendChild(script);
  return `<!doctype html>\n${doc.documentElement.outerHTML}`;
}

function collectExportAssets(files: VirtualFile[], indexPath: string): Array<{ path: string; keys: string[]; dataUrl: string }> {
  const indexDir = indexPath.includes("/") ? indexPath.split("/").slice(0, -1).join("/") : "";
  const imageFiles = files.filter((file) => file.path !== indexPath && imageMimeForPath(file.path));
  const baseCounts = new Map<string, number>();
  imageFiles.forEach((file) => {
    const base = file.path.split("/").pop() || file.path;
    baseCounts.set(base, (baseCounts.get(base) || 0) + 1);
  });

  return imageFiles.map((file) => {
    const relativePath = relativeAssetPath(file.path, indexDir);
    const base = file.path.split("/").pop() || file.path;
    const keys = new Set([file.path, relativePath, `./${relativePath}`]);
    if (baseCounts.get(base) === 1) keys.add(base);
    return {
      path: relativePath,
      keys: Array.from(keys).filter(Boolean),
      dataUrl: `data:${imageMimeForPath(file.path)};base64,${bytesToBase64(file.data)}`
    };
  });
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

function removeOwnedRuntime(doc: Document): void {
  doc.querySelectorAll([
    `[${marker}]`,
    'script[src*="editor-runtime"]',
    'link[href*="editor-runtime"]',
    'script[src*="html-deck-editor"]',
    'link[href*="html-deck-editor"]',
    'script[src*="runtime/vanilla-picker"]',
    'link[href*="runtime/vanilla-picker"]',
    'script[src*="runtime/html-to-image"]',
    'script[src*="runtime/jspdf"]',
    'script[src*="runtime/jszip"]'
  ].join(", ")).forEach((node) => {
    node.parentNode?.removeChild(node);
  });
}

function removeLegacyEditorArtifacts(doc: Document, options: { upgradeExistingEditor: boolean }): void {
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

  doc.body.classList.remove("editing", "editor-on", "dragging-file");
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
  return name.replace(/[^a-z0-9._-]+/gi, "-").replace(/^-+|-+$/g, "") || "html-deck";
}

function stableBytes(data: Uint8Array): Uint8Array {
  return new Uint8Array(data);
}
