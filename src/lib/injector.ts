import JSZip from "jszip";
import type { ConvertResult, DetectionReport, LoadedInput, VirtualFile } from "../types/deck";
import { detectDeck, findIndexFile } from "./detector";
import { runtimeAssets, RUNTIME_VERSION } from "./runtimeAssets";
import { bytesToText, textToBytes } from "./text";

const marker = "data-html-deck-editor-runtime";

export async function convertInput(input: LoadedInput, inputWarnings: string[] = []): Promise<ConvertResult> {
  const report = detectDeck(input);
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

  const sourceHtml = bytesToText(indexFile.data);
  const rewrittenHtml = rewriteHtml(sourceHtml, report);
  const zip = new JSZip();
  const indexDir = indexFile.path.includes("/") ? indexFile.path.split("/").slice(0, -1).join("/") : "";
  const runtimePrefix = indexDir ? `${indexDir}/runtime/` : "runtime/";

  for (const file of input.files) {
    if (file.path === indexFile.path) {
      zip.file(file.path, rewrittenHtml);
    } else {
      zip.file(file.path, file.data);
    }
  }

  for (const [path, content] of Object.entries(runtimeAssets)) {
    const name = path.replace("runtime/", "");
    zip.file(`${runtimePrefix}${name}`, content);
  }

  const blob = await zip.generateAsync({ type: "blob", compression: "DEFLATE" });

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
  doc.querySelectorAll(`[${marker}], script[src*="editor-runtime"], link[href*="editor-runtime"]`).forEach((node) => {
    node.parentNode?.removeChild(node);
  });
}

function safeName(name: string): string {
  return name.replace(/[^a-z0-9._-]+/gi, "-").replace(/^-+|-+$/g, "") || "html-deck";
}
