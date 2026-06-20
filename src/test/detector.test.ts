import { describe, expect, it } from "vitest";
import type { LoadedInput, VirtualFile } from "../types/deck";
import { detectDeck, findIndexFile } from "../lib/detector";
import { rewriteHtml } from "../lib/injector";
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
});
