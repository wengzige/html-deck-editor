import JSZip from "jszip";
import type { ConvertResult, DetectionReport, LoadedInput, VirtualFile } from "../types/deck";
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

export type ConvertProgressEvent = {
  stage: "detect" | "rewrite" | "runtime" | "zip";
  percent: number;
  detail: string;
};

type ConvertProgressCallback = (event: ConvertProgressEvent) => void;

export async function convertInput(
  input: LoadedInput,
  inputWarnings: string[] = [],
  onProgress?: ConvertProgressCallback
): Promise<ConvertResult> {
  onProgress?.({ stage: "detect", percent: 0, detail: "正在检查是不是 HTML 演示稿。" });
  const report = detectDeck(input);
  onProgress?.({ stage: "detect", percent: 100, detail: report.messages[0] || "检测完成。" });
  if (report.status === "unsupported" || !report.indexPath) {
    return {
      report,
      blob: null,
      outputName: null,
      filesAdded: [],
      filesModified: [],
      warnings: [...inputWarnings, ...report.warnings]
    };
  }

  const indexFile = findIndexFile(input.files);
  if (!indexFile) {
    return {
      report,
      blob: null,
      outputName: null,
      filesAdded: [],
      filesModified: [],
      warnings: [...inputWarnings, "没有找到可转换的 HTML 文件。"]
    };
  }

  onProgress?.({ stage: "rewrite", percent: 0, detail: `正在改写 ${indexFile.path}` });
  const sourceHtml = bytesToText(indexFile.data);
  const rewrittenHtml = rewriteHtml(sourceHtml, report);
  onProgress?.({ stage: "rewrite", percent: 100, detail: "HTML 已加入编辑器入口。" });

  const zip = new JSZip();
  const indexDir = indexFile.path.includes("/") ? indexFile.path.split("/").slice(0, -1).join("/") : "";
  const runtimePrefix = indexDir ? `${indexDir}/runtime/` : "runtime/";

  onProgress?.({ stage: "runtime", percent: 0, detail: "正在整理原文件和编辑器文件。" });
  for (const file of input.files) {
    if (file.path === indexFile.path) {
      zip.file(file.path, rewrittenHtml);
    } else if (isLegacyRuntimeFile(file.path)) {
      continue;
    } else {
      zip.file(file.path, stableBytes(file.data));
    }
  }
  onProgress?.({ stage: "runtime", percent: 55, detail: `已放入 ${input.files.length} 个原文件。` });

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
    warnings: [...inputWarnings, ...report.warnings]
  };
}

export function rewriteHtml(html: string, report: DetectionReport): string {
  const doc = new DOMParser().parseFromString(html, "text/html");
  ensureTitle(doc);
  removeLegacyEditorArtifacts(doc, { upgradeExistingEditor: report.status === "already-editable" });

  if (report.status === "adaptable") {
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

function prepareAdaptableStage(doc: Document, report: DetectionReport): void {
  const existingStage = doc.querySelector("deck-stage#deckStage, #deckStage, .deck-stage, [data-html-deck-editor-stage]");
  if (existingStage) return;

  const sourceSlides = selectSlideCandidates(doc, report);
  if (sourceSlides.length < 2) return;

  sourceSlides.forEach((source, index) => {
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
    "main",
    "[role='main']",
    "[data-deck]",
    "[data-slides]"
  ].join(", ");
  if (parent.matches(selector)) return parent;

  const elementChildren = Array.from(parent.children);
  const slideSet = new Set(sourceSlides);
  const onlySlides = elementChildren.length === sourceSlides.length && elementChildren.every((child) => slideSet.has(child));
  return onlySlides ? parent : null;
}

function findRepairableDeckStage(sourceSlides: Element[]): Element | null {
  const explicitDeckSelector = "#deck, .deck, .slides, [data-deck], [data-slides]";
  const slideSet = new Set(sourceSlides);
  const parents = Array.from(new Set(sourceSlides.map((slide) => slide.parentElement).filter(Boolean))) as Element[];
  const firstParent = sourceSlides[0]?.parentElement;
  const candidates = parents
    .filter((parent) => parent.matches(explicitDeckSelector))
    .sort((a, b) => (a === firstParent ? -1 : 0) - (b === firstParent ? -1 : 0));

  return candidates.find((parent) => {
    const directSlideCount = Array.from(parent.children).filter((child) => slideSet.has(child)).length;
    return directSlideCount >= 2 && (parent === firstParent || directSlideCount >= Math.ceil(sourceSlides.length / 2));
  }) || null;
}

function moveSlidesIntoStage(stage: Element, sourceSlides: Element[]): void {
  sourceSlides.forEach((source) => {
    stage.appendChild(source);
  });
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
  if (stage.matches("#deck, .deck, [data-deck]")) return true;
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
  if (report.sourceKind === "reveal") return Array.from(doc.querySelectorAll(".reveal .slides section"));
  if (report.sourceKind === "section-slide") return Array.from(doc.querySelectorAll("section.slide, .slide"));
  const containerSections = Array.from(doc.body.querySelectorAll([
    "#deck > section",
    ".deck > section",
    ".slides > section",
    "[data-deck] > section",
    "[data-slides] > section"
  ].join(", "))).filter(hasEnoughText);
  if (containerSections.length >= 2) return containerSections;
  return Array.from(doc.body.querySelectorAll("main > section, body > section")).filter(hasEnoughText);
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

  const deckStage = doc.createElement("script");
  deckStage.src = "runtime/deck-stage.js";
  deckStage.setAttribute(marker, RUNTIME_VERSION);
  doc.body.appendChild(deckStage);

  const picker = doc.createElement("script");
  picker.src = "runtime/vanilla-picker.js";
  picker.setAttribute(marker, RUNTIME_VERSION);
  doc.body.appendChild(picker);

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

function removeOwnedRuntime(doc: Document): void {
  doc.querySelectorAll([
    `[${marker}]`,
    'script[src*="editor-runtime"]',
    'link[href*="editor-runtime"]',
    'script[src*="html-deck-editor"]',
    'link[href*="html-deck-editor"]',
    'script[src*="runtime/vanilla-picker"]',
    'link[href*="runtime/vanilla-picker"]'
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
