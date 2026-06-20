import JSZip from "jszip";
import type { ConvertResult, DetectionReport, LoadedInput, VirtualFile } from "../types/deck";
import { detectDeck, findIndexFile } from "./detector";
import { runtimeAssets, RUNTIME_VERSION } from "./runtimeAssets";
import { bytesToText, textToBytes } from "./text";

const marker = "data-html-deck-editor-runtime";

const legacyEditorShellSelectors = [
  "[data-html-deck-editor-ui]",
  "#editorShell",
  ".editor-shell",
  "#shapeMenu",
  ".shape-menu",
  "#editorFrame",
  ".editor-frame",
  "#editorToast",
  ".editor-toast",
  "#editorGuideV",
  "#editorGuideH",
  ".editor-guide"
];

const legacyEditorFloatingSelectors = [
  "#editToggle",
  "#editExport",
  ".edit-toggle",
  ".edit-export",
  ".edit-hotzone"
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
  removeLegacyEditorArtifacts(doc);

  if (report.status === "adaptable") {
    wrapAsDeckStage(doc, report);
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

function wrapAsDeckStage(doc: Document, report: DetectionReport): void {
  const existingStage = doc.querySelector("deck-stage#deckStage, #deckStage, .deck-stage");
  if (existingStage) return;

  const sourceSlides = selectSlideCandidates(doc, report);
  if (sourceSlides.length < 2) return;

  const stage = doc.createElement("deck-stage");
  stage.id = "deckStage";
  stage.setAttribute("width", "1920");
  stage.setAttribute("height", "1080");
  stage.setAttribute("aria-label", "Presentation");

  sourceSlides.forEach((source, index) => {
    const slide = doc.createElement("section");
    slide.className = index === 0 ? "slide active visible" : "slide";
    slide.setAttribute("data-title", slideTitle(source, index));
    slide.innerHTML = `<div class="html-deck-editor-slide-content">${source.innerHTML}</div>`;
    stage.appendChild(slide);
  });

  doc.body.innerHTML = "";
  doc.body.appendChild(stage);
  const style = doc.createElement("style");
  style.setAttribute("data-html-deck-editor-generated", "layout");
  style.textContent = `
    html, body { margin: 0; min-height: 100%; background: #f6f7f9; color: #111827; }
    deck-stage { position: fixed; inset: 0; display: block; background: #fff; }
    .slide { box-sizing: border-box; width: 1920px; height: 1080px; padding: 88px; background: #fff; overflow: hidden; }
    .html-deck-editor-slide-content { width: 100%; height: 100%; }
    .html-deck-editor-slide-content img, .html-deck-editor-slide-content video { max-width: 100%; height: auto; }
  `;
  doc.head.appendChild(style);
}

function selectSlideCandidates(doc: Document, report: DetectionReport): Element[] {
  if (report.sourceKind === "reveal") return Array.from(doc.querySelectorAll(".reveal .slides section"));
  if (report.sourceKind === "section-slide") return Array.from(doc.querySelectorAll("section.slide, .slide"));
  return Array.from(doc.body.querySelectorAll("main > section, body > section")).filter((section) => {
    const text = (section.textContent || "").trim();
    return text.length > 10;
  });
}

function slideTitle(source: Element, index: number): string {
  const heading = source.querySelector("h1, h2, h3, [data-title]");
  const text = heading?.textContent?.trim();
  return text || `Slide ${index + 1}`;
}

function ensureRuntimeLinks(doc: Document): void {
  removeOwnedRuntime(doc);

  const css = doc.createElement("link");
  css.rel = "stylesheet";
  css.href = "runtime/html-deck-editor.css";
  css.setAttribute(marker, RUNTIME_VERSION);
  doc.head.appendChild(css);

  const deckStage = doc.createElement("script");
  deckStage.src = "runtime/deck-stage.js";
  deckStage.setAttribute(marker, RUNTIME_VERSION);
  doc.body.appendChild(deckStage);

  const editor = doc.createElement("script");
  editor.src = "runtime/html-deck-editor.js";
  editor.setAttribute(marker, RUNTIME_VERSION);
  doc.body.appendChild(editor);
}

function ensureRuntimeMount(doc: Document): void {
  const script = doc.createElement("script");
  script.setAttribute(marker, RUNTIME_VERSION);
  script.textContent = `
    window.addEventListener("DOMContentLoaded", function () {
      if (!document.getElementById("deckStage") && !document.querySelector(".deck-stage")) return;
      if (window.HtmlDeckEditor && !window.editor) {
        window.editor = window.HtmlDeckEditor.mount();
      }
    });
  `;
  doc.body.appendChild(script);
}

function removeOwnedRuntime(doc: Document): void {
  doc.querySelectorAll([
    `[${marker}]`,
    'script[src*="editor-runtime"]',
    'link[href*="editor-runtime"]',
    'script[src*="html-deck-editor"]',
    'link[href*="html-deck-editor"]'
  ].join(", ")).forEach((node) => {
    node.parentNode?.removeChild(node);
  });
}

function removeLegacyEditorArtifacts(doc: Document): void {
  doc.querySelectorAll(legacyEditorShellSelectors.join(", ")).forEach((node) => {
    if (node instanceof Element && shouldRemoveEditorShell(node)) {
      node.parentNode?.removeChild(node);
    }
  });

  doc.querySelectorAll(legacyEditorFloatingSelectors.join(", ")).forEach((node) => {
    if (node instanceof Element && !isInsideDeckContent(node)) {
      node.parentNode?.removeChild(node);
    }
  });

  doc.querySelectorAll(legacyEditorRootSelectors.join(", ")).forEach((node) => {
    if (node instanceof Element && !isInsideDeckContent(node)) {
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
  return element.hasAttribute("data-html-deck-editor-ui") || !isInsideDeckContent(element);
}

function isLegacyEditorControl(element: HTMLElement): boolean {
  const text = (element.textContent || "").replace(/\s+/g, " ").trim().toUpperCase();
  const label = [
    element.id,
    element.className,
    element.getAttribute("title"),
    element.getAttribute("aria-label")
  ].join(" ");

  return (
    text === "DONE" ||
    text === "EDIT" ||
    text === "SAVE HTML" ||
    text === "保存 HTML" ||
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
