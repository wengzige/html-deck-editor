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

  it("detects complex deck containers even when sections are not pre-classed as slides", () => {
    const report = detectDeck(input([
      file("index.html", "<canvas id=\"bg\"></canvas><div id=\"deck\"><section><h1>One</h1><p>Enough text here</p></section><section><h1>Two</h1><p>Enough text here</p></section></div><script>window.deckBoot = true;</script>")
    ]));
    expect(report.status).toBe("adaptable");
    expect(report.sourceKind).toBe("generic-section");
    expect(report.slideCount).toBe(2);
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
      file("index.html", "<header id=\"intro\">Keep me</header><main><section><h1>One</h1><p>Enough text here</p></section><section><h1>Two</h1><p>Enough text here</p></section></main><footer id=\"credits\">Keep me too</footer><script>window.keepMe = true;</script>")
    ]));
    const html = rewriteHtml("<header id=\"intro\">Keep me</header><main><section><h1>One</h1><p>Enough text here</p></section><section><h1>Two</h1><p>Enough text here</p></section></main><footer id=\"credits\">Keep me too</footer><script>window.keepMe = true;</script>", report);
    expect(html).toContain("data-html-deck-editor-stage=\"preserve\"");
    expect(html).toContain("id=\"intro\"");
    expect(html).toContain("id=\"credits\"");
    expect(html).toContain("window.keepMe = true;");
    expect(html).toContain("runtime/html-deck-editor.js");
    expect(html).toContain("HtmlDeckEditor.mount");
  });

  it("preserves existing slide containers instead of rebuilding the body", () => {
    const source = `
      <body class="canvas-mode">
        <script>window.__originalBoot = true;</script>
        <canvas id="bg-grid" class="bg"></canvas>
        <div id="hint">Keyboard help</div>
        <div id="deck">
          <section class="slide accent" data-layout="S01"><canvas class="ascii-bg" aria-hidden="true"></canvas><h1>One</h1></section>
          <section class="slide dark" data-layout="S02"><h1>Two</h1></section>
        </div>
        <div id="nav"></div>
        <script>
          const deck = document.getElementById('deck');
          function go(n) { deck.style.transform = 'translateX(' + (-n * 100) + 'vw)'; }
        </script>
      </body>
    `;
    const report = detectDeck(input([file("index.html", source)]));
    const html = rewriteHtml(source, report);

    expect(report.status).toBe("adaptable");
    expect(html).toContain("id=\"deck\"");
    expect(html).toContain("data-html-deck-editor-stage=\"preserve\"");
    expect(html).toContain("data-html-deck-editor-navigation=\"horizontal\"");
    expect(html).toContain("id=\"bg-grid\"");
    expect(html).toContain("id=\"hint\"");
    expect(html).toContain("id=\"nav\"");
    expect(html).toContain("window.__originalBoot = true;");
    expect(html).toContain("function go(n)");
    expect(html).toContain("data-layout=\"S01\"");
    expect(html).toContain("class=\"ascii-bg\"");
    expect(html).not.toContain("<deck-stage");
    expect(html).toContain("runtime/html-deck-editor.js");
  });

  it("adapts unclassed deck sections without dropping surrounding runtime", () => {
    const source = `
      <canvas id="bg-grid"></canvas>
      <div id="deck">
        <section data-layout="A"><h1>One</h1><p>Enough text here</p></section>
        <section data-layout="B"><h1>Two</h1><p>Enough text here</p></section>
      </div>
      <script>window.originalNavigation = true;</script>
    `;
    const report = detectDeck(input([file("index.html", source)]));
    const html = rewriteHtml(source, report);

    expect(report.status).toBe("adaptable");
    expect(html).toContain("id=\"deck\"");
    expect(html).toContain("data-html-deck-editor-stage=\"preserve\"");
    expect(html).toContain("data-html-deck-editor-navigation=\"horizontal\"");
    expect(html).toContain("class=\"slide active visible\"");
    expect(html).toContain("data-layout=\"A\"");
    expect(html).toContain("id=\"bg-grid\"");
    expect(html).toContain("window.originalNavigation = true;");
  });

  it("does not remove user content that happens to use editor-like class names", () => {
    const source = `
      <style>
        .editor-panel { display: grid; }
        .editor-toolbar { color: red; }
        .editor-frame { border: 1px solid currentColor; }
      </style>
      <div id="deck">
        <section>
          <h1>One</h1><p>Enough text here</p>
          <div class="editor-panel" data-keep="panel">Business panel</div>
          <button class="edit-toggle" data-keep="toggle">Open settings</button>
        </section>
        <section>
          <h1>Two</h1><p>Enough text here</p>
          <div class="editor-toolbar" data-keep="toolbar">Business toolbar</div>
          <div class="editor-frame" data-keep="frame">Business frame</div>
        </section>
      </div>
    `;
    const report = detectDeck(input([file("index.html", source)]));
    const html = rewriteHtml(source, report);

    expect(report.status).toBe("adaptable");
    expect(html).toContain('class="editor-panel" data-keep="panel"');
    expect(html).toContain('class="edit-toggle" data-keep="toggle"');
    expect(html).toContain('class="editor-toolbar" data-keep="toolbar"');
    expect(html).toContain('class="editor-frame" data-keep="frame"');
    expect(html).toContain(".editor-panel { display: grid; }");
  });

  it("does not remove user buttons just because their text looks editor-ish", () => {
    const source = `
      <div id="deck">
        <section>
          <h1>One</h1><p>Enough text here</p>
          <button id="workflow-done" data-keep="done">DONE</button>
        </section>
        <section>
          <h1>Two</h1><p>Enough text here</p>
          <button class="business-action" data-keep="edit">EDIT</button>
          <a href="#save" data-keep="save">SAVE HTML</a>
        </section>
      </div>
    `;
    const report = detectDeck(input([file("index.html", source)]));
    const html = rewriteHtml(source, report);

    expect(report.status).toBe("adaptable");
    expect(html).toContain('id="workflow-done" data-keep="done"');
    expect(html).toContain('class="business-action" data-keep="edit"');
    expect(html).toContain('href="#save" data-keep="save"');
  });

  it("converts a simple single-file deck into a downloadable zip blob", async () => {
    const result = await convertInput(input([
      file("index.html", "<main><section><h1>One</h1><p>Enough text here</p></section><section><h1>Two</h1><p>Enough text here</p></section></main>")
    ]));
    expect(result.blob).toBeTruthy();
    expect(result.outputName).toBe("sample-editable.zip");
    expect(result.filesAdded).toContain("runtime/html-deck-editor.js");
    expect(result.filesAdded).toContain("runtime/vanilla-picker.js");
    expect(result.filesAdded).toContain("runtime/vanilla-picker.css");
    expect(result.filesAdded).toContain("runtime/vanilla-picker.LICENSE.md");
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
    expect(zip.file("deck/runtime/vanilla-picker.LICENSE.md")).toBeTruthy();
    expect(zip.file("deck/assets/style.css")).toBeTruthy();
  });

  it("does not remove user-owned vanilla-picker assets outside the editor runtime path", () => {
    const source = `
      <head>
        <script src="https://cdn.example.com/vanilla-picker.js"></script>
        <link rel="stylesheet" href="/assets/vanilla-picker.css">
      </head>
      <main>
        <section><h1>One</h1><p>Enough text here</p></section>
        <section><h1>Two</h1><p>Enough text here</p></section>
      </main>
    `;
    const report = detectDeck(input([file("index.html", source)]));
    const html = rewriteHtml(source, report);

    expect(html).toContain("https://cdn.example.com/vanilla-picker.js");
    expect(html).toContain("/assets/vanilla-picker.css");
    expect(html).toContain('src="runtime/vanilla-picker.js"');
    expect(html).toContain('href="runtime/vanilla-picker.css"');
  });

  it("removes old editor chrome and runtime files when upgrading an editable deck", async () => {
    const result = await convertInput(input([
      file("index.html", `
        <deck-stage id="deckStage">
          <section class="slide active"><h1>One</h1></section>
          <section class="slide"><h1>Two</h1></section>
        </deck-stage>
        <button class="edit-toggle" id="editToggle" title="编辑模式 (E)">DONE</button>
        <button class="save-html">SAVE HTML</button>
        <script src="visual-editor/editor-runtime.js"></script>
        <link rel="stylesheet" href="visual-editor/editor-runtime.css">
        <style>.edit-toggle { width: 84px; }</style>
        <script>window.FrontendSlidesEditor.mount({});</script>
      `),
      file("visual-editor/editor-runtime.js", "old editor js"),
      file("visual-editor/editor-runtime.css", "old editor css"),
      file("assets/style.css", "body { color: black; }")
    ]));

    expect(result.blob).toBeTruthy();

    const zip = await JSZip.loadAsync(result.blob!);
    const html = await zip.file("index.html")!.async("string");
    expect(html).not.toContain("DONE");
    expect(html).not.toContain("SAVE HTML");
    expect(html).not.toContain("visual-editor/editor-runtime");
    expect(html).not.toContain("window.FrontendSlidesEditor.mount({});");
    expect(html).toContain("runtime/html-deck-editor.js");
    expect(zip.file("visual-editor/editor-runtime.js")).toBeNull();
    expect(zip.file("visual-editor/editor-runtime.css")).toBeNull();
    expect(zip.file("assets/style.css")).toBeTruthy();
  });

  it("keeps deck styles and presentation scripts when removing a mixed legacy editor", async () => {
    const result = await convertInput(input([
      file("index.html", `
        <style>
          .deck-stage { position: absolute; width: 1920px; height: 1080px; }
          .slide { position: absolute; inset: 0; visibility: hidden; }
          .slide.active { visibility: visible; }
          .edit-toggle { border-radius: 999px; }
          .edit-export { background: orange; }
        </style>
        <div class="deck-viewport">
          <main class="deck-stage" id="deckStage">
            <section class="slide active"><h1>One</h1></section>
            <section class="slide"><h1>Two</h1></section>
          </main>
        </div>
        <button class="edit-toggle" id="editToggle">EDIT</button>
        <button class="edit-export" id="editExport">SAVE HTML</button>
        <script>
          class SlidePresentation {
            constructor() { this.stage = document.getElementById("deckStage"); }
          }
          class InlineDeckEditor {
            constructor() { this.toggle = document.getElementById("editToggle"); }
          }
          window.addEventListener("DOMContentLoaded", () => {
            new SlidePresentation();
            new InlineDeckEditor();
          });
        </script>
      `)
    ]));

    expect(result.blob).toBeTruthy();

    const zip = await JSZip.loadAsync(result.blob!);
    const html = await zip.file("index.html")!.async("string");
    expect(html).toContain(".deck-stage { position: absolute");
    expect(html).toContain(".slide { position: absolute");
    expect(html).toContain("class SlidePresentation");
    expect(html).toContain("new SlidePresentation();");
    expect(html).toContain("legacy InlineDeckEditor disabled");
    expect(html).not.toContain("new InlineDeckEditor();");
    expect(html).not.toContain("id=\"editToggle\"");
    expect(html).not.toContain("id=\"editExport\"");
    expect(html).toContain("runtime/html-deck-editor.css");
    expect(html).toContain("runtime/html-deck-editor.js");
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
