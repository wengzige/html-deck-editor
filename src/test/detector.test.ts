import { describe, expect, it } from "vitest";
import JSZip from "jszip";
import type { LoadedInput, VirtualFile } from "../types/deck";
import { detectDeck, findIndexFile } from "../lib/detector";
import { convertInput, rewriteHtml } from "../lib/injector";
import { textToBytes } from "../lib/text";

function file(path: string, text: string): VirtualFile {
  const data = textToBytes(text);
  return { path, name: path.split("/").pop() || path, data, size: data.byteLength };
}

function input(files: VirtualFile[]): LoadedInput {
  return { kind: "zip", name: "sample", files };
}

describe("deck detection", () => {
  it("finds a root index first", () => {
    const root = file("index.html", "<html></html>");
    const nested = file("deck/index.html", "<html></html>");
    expect(findIndexFile([nested, root])).toBe(root);
  });

  it("detects fixed-stage decks", () => {
    const report = detectDeck(input([
      file("index.html", "<deck-stage id=\"deckStage\"><section class=\"slide active\"></section><section class=\"slide\"></section></deck-stage>")
    ]));
    expect(report.status).toBe("ready");
    expect(report.slideCount).toBe(2);
  });

  it("detects simple section decks as adaptable", () => {
    const report = detectDeck(input([
      file("index.html", "<main><section><h1>One</h1><p>Enough text here</p></section><section><h1>Two</h1><p>Enough text here</p></section></main>")
    ]));
    expect(report.status).toBe("adaptable");
    expect(report.sourceKind).toBe("generic-section");
  });

  it("detects Reveal.js decks as adaptable", () => {
    const report = detectDeck(input([
      file("index.html", "<div class=\"reveal\"><div class=\"slides\"><section>One</section><section>Two</section></div></div>")
    ]));
    expect(report.status).toBe("adaptable");
    expect(report.sourceKind).toBe("reveal");
    expect(report.slideCount).toBe(2);
  });

  it("detects already editable decks", () => {
    const report = detectDeck(input([
      file("index.html", "<deck-stage id=\"deckStage\"><section class=\"slide active\"></section><section class=\"slide\"></section></deck-stage><script>window.HtmlDeckEditor = {}</script>")
    ]));
    expect(report.status).toBe("already-editable");
  });

  it("rejects multiple html files when there is no clear index", () => {
    const report = detectDeck(input([
      file("one.html", "<main><section>One enough text</section><section>Two enough text</section></main>"),
      file("two.html", "<main><section>One enough text</section><section>Two enough text</section></main>")
    ]));
    expect(report.status).toBe("unsupported");
    expect(report.indexPath).toBeNull();
  });

  it("does not claim ordinary pages are editable decks", () => {
    const report = detectDeck(input([
      file("index.html", "<article><h1>Blog</h1><p>Just one normal page.</p></article>")
    ]));
    expect(report.status).toBe("unsupported");
  });
});

describe("runtime injection", () => {
  it("wraps section decks and adds runtime links", () => {
    const report = detectDeck(input([
      file("index.html", "<main><section><h1>One</h1><p>Enough text here</p></section><section><h1>Two</h1><p>Enough text here</p></section></main>")
    ]));
    const html = rewriteHtml("<main><section><h1>One</h1><p>Enough text here</p></section><section><h1>Two</h1><p>Enough text here</p></section></main>", report);
    expect(html).toContain("<deck-stage");
    expect(html).toContain("runtime/html-deck-editor.js");
    expect(html).toContain("HtmlDeckEditor.mount");
  });

  it("converts a simple single-file deck into a downloadable zip blob", async () => {
    const result = await convertInput(input([
      file("index.html", "<main><section><h1>One</h1><p>Enough text here</p></section><section><h1>Two</h1><p>Enough text here</p></section></main>")
    ]));
    expect(result.blob).toBeTruthy();
    expect(result.outputName).toBe("sample-editable.zip");
    expect(result.filesAdded).toContain("runtime/html-deck-editor.js");
    expect(result.filesModified).toEqual(["index.html"]);
  });

  it("keeps runtime files next to a nested index file", async () => {
    const result = await convertInput(input([
      file("deck/index.html", "<deck-stage id=\"deckStage\"><section class=\"slide active\"></section><section class=\"slide\"></section></deck-stage>"),
      file("deck/assets/style.css", "body { color: black; }")
    ]));

    expect(result.blob).toBeTruthy();
    expect(result.filesAdded).toContain("deck/runtime/html-deck-editor.js");
    expect(result.filesModified).toEqual(["deck/index.html"]);

    const zip = await JSZip.loadAsync(result.blob!);
    expect(zip.file("deck/index.html")).toBeTruthy();
    expect(zip.file("deck/runtime/html-deck-editor.js")).toBeTruthy();
    expect(zip.file("deck/assets/style.css")).toBeTruthy();
  });

  it("returns messages instead of a zip for unsupported inputs", async () => {
    const result = await convertInput(input([
      file("index.html", "<article><h1>Blog</h1><p>Just one normal page.</p></article>")
    ]), ["单文件资源可能丢失。"]);

    expect(result.blob).toBeNull();
    expect(result.outputName).toBeNull();
    expect(result.report.status).toBe("unsupported");
    expect(result.warnings).toContain("单文件资源可能丢失。");
  });
});
