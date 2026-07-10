import { describe, expect, it } from "vitest";
import JSZip from "jszip";
import type { LoadedInput, VirtualFile } from "../types/deck";
import { detectDeck, findIndexFile } from "../lib/detector";
import { convertInput, rewriteHtml } from "../lib/injector";
import { LIMITS } from "../lib/safety";
import { textToBytes } from "../lib/text";

function file(path: string, text: string): VirtualFile {
  const data = textToBytes(text);
  return { path, name: path.split("/").pop() || path, data, size: data.byteLength };
}

function input(files: VirtualFile[]): LoadedInput {
  return { kind: "zip", name: "sample", files };
}

function reportLikeHtml(): string {
  return `
    <html lang="zh-Hant">
      <head>
        <title>AI 模型檢測報告</title>
        <style>
          body { max-width: 960px; margin-inline: auto; padding: 24px; font-size: 13px; }
          .mono { font-family: ui-monospace, monospace; }
        </style>
      </head>
      <body>
        <main id="report">
          <section><h1>AI 模型身份驗證</h1><p>未知代理，缺少特徵 header / id / body 標記。</p></section>
          <section><h2>信心度</h2><p class="mono">0% confidence score across checks.</p></section>
          <section><h2>測試摘要</h2><p>Capability, refusal, formatting, latency and token checks are reported here.</p></section>
          <section><h2>能力矩陣</h2><svg viewBox="0 0 100 20"><rect width="80" height="20"></rect></svg></section>
          <section><h2>詳細樣本</h2><p class="mono">cap_tower_of_hanoi, cap_letter_count, v3e_fmt_bullets.</p></section>
        </main>
      </body>
    </html>
  `;
}

function longFormDocumentHtml(): string {
  const paragraph = [
    "This operational handbook describes a full browser-based workflow with setup notes, screenshots, tables, validation steps, and follow-up actions.",
    "The page is meant to be read vertically from top to bottom, and each section depends on the previous section rather than acting as an independent slide.",
    "The content has enough prose that splitting every section into a separate presentation page would make the generated deck harder to review."
  ].join(" ");

  return `
    <html>
      <head>
        <title>Operations Handbook</title>
        <style>
          body { max-width: 920px; margin: 0 auto; padding: 28px; line-height: 1.65; }
          .content-page { display: block; }
        </style>
      </head>
      <body>
        <main class="content-page">
          <section><h1>Workflow Overview</h1><p>${paragraph}</p><ul><li>Prepare files</li><li>Check assets</li></ul></section>
          <section><h2>Input Requirements</h2><p>${paragraph}</p><table><tr><td>HTML</td><td>Required</td></tr></table></section>
          <section><h2>Validation Notes</h2><p>${paragraph}</p><p>${paragraph}</p></section>
          <section><h2>Output Checklist</h2><p>${paragraph}</p><details><summary>Details</summary><p>${paragraph}</p></details></section>
        </main>
      </body>
    </html>
  `;
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

  it("detects explicit single-slide fixed-stage decks", () => {
    const report = detectDeck(input([
      file("index.html", "<div id=\"deckStage\" class=\"deck-stage\"><section class=\"slide active\"><h1>Only page</h1></section></div>")
    ]));

    expect(report.status).toBe("ready");
    expect(report.slideCount).toBe(1);
  });

  it("preserves authored deck-stage controllers instead of upgrading them to the web component", () => {
    const source = `
      <style>
        deck-stage#deckStage { position: absolute; width: 1920px; height: 1080px; transform-origin: 0 0; }
        #deckStage > .slide { position: absolute; inset: 0; visibility: hidden; }
        #deckStage > .slide.active, #deckStage > .slide.visible { visibility: visible; }
      </style>
      <deck-stage id="deckStage" width="1920" height="1080">
        <section class="slide active visible"><h1>One</h1></section>
        <section class="slide"><h1>Two</h1></section>
      </deck-stage>
      <script>
        const stage = document.getElementById("deckStage");
        function fit() { stage.style.transform = "translate(0px, 0px) scale(0.5)"; }
        window.addEventListener("resize", fit);
      </script>
    `;
    const report = detectDeck(input([file("index.html", source)]));
    const html = rewriteHtml(source, report);

    expect(report.status).toBe("ready");
    expect(html).toContain('data-html-deck-editor-stage="preserve"');
    expect(html).toContain('function fit()');
    expect(html).toContain('runtime/html-deck-editor.js');
    expect(html).not.toContain('src="runtime/deck-stage.js"');
  });

  it("keeps deck-stage runtime for plain fixed-stage decks without authored controllers", () => {
    const source = `
      <deck-stage id="deckStage" width="1920" height="1080">
        <section class="slide active"><h1>One</h1></section>
        <section class="slide"><h1>Two</h1></section>
      </deck-stage>
    `;
    const report = detectDeck(input([file("index.html", source)]));
    const html = rewriteHtml(source, report);

    expect(report.status).toBe("ready");
    expect(html).not.toContain('data-html-deck-editor-stage="preserve"');
    expect(html).toContain('src="runtime/deck-stage.js"');
    expect(html).toContain('src="runtime/html-deck-editor.js"');
  });

  it("repairs already-editable authored deck-stage controllers without reinjecting deck-stage", () => {
    const source = `
      <deck-stage id="deckStage" width="1920" height="1080">
        <section class="slide active visible"><h1>One</h1></section>
        <section class="slide"><h1>Two</h1></section>
      </deck-stage>
      <script>
        const stage = document.getElementById("deckStage");
        const slides = Array.from(stage.querySelectorAll(":scope > section.slide"));
        function show(index) {
          slides.forEach((item, itemIndex) => {
            item.classList.toggle("active", itemIndex === index);
            item.classList.toggle("visible", itemIndex === index);
          });
          stage.style.transform = "translate(0px, 0px) scale(0.5)";
        }
      </script>
      <script data-html-deck-editor-runtime="0.1.4">window.HtmlDeckEditor.mount();</script>
      <script src="runtime/deck-stage.js" data-html-deck-editor-runtime="0.1.4"></script>
    `;
    const report = detectDeck(input([file("index.html", source)]));
    const html = rewriteHtml(source, report);

    expect(report.status).toBe("already-editable");
    expect(html).toContain('data-html-deck-editor-stage="preserve"');
    expect(html).toContain('function show(index)');
    expect(html).not.toContain('src="runtime/deck-stage.js"');
  });

  it("keeps prompt-constrained #deck slides on the preserved adaptable path", () => {
    const source = `
      <div id="deck" data-deck data-design-width="1920" data-design-height="1080">
        <section class="slide active visible" data-title="封面">
          <h1>Prompt friendly deck</h1>
          <p>Enough editable text for the first slide.</p>
        </section>
        <section class="slide" data-title="第二页">
          <h2>Second page</h2>
          <p>Enough editable text for the second slide.</p>
        </section>
        <section class="slide" data-title="第三页">
          <h2>Third page</h2>
          <p>Enough editable text for the third slide.</p>
        </section>
      </div>
    `;
    const report = detectDeck(input([file("index.html", source)]));
    const html = rewriteHtml(source, report);
    const doc = new DOMParser().parseFromString(html, "text/html");
    const deck = doc.querySelector("#deck");

    expect(report.status).toBe("adaptable");
    expect(report.slideCount).toBe(3);
    expect(deck?.getAttribute("data-html-deck-editor-stage")).toBe("preserve");
    expect(deck?.getAttribute("data-html-deck-editor-navigation")).toBe("horizontal");
    expect(doc.querySelectorAll("#deck > .slide")).toHaveLength(3);
    expect(doc.querySelectorAll("body > section.slide, body > .slide")).toHaveLength(0);
    expect(doc.querySelectorAll("#deck .slide .slide")).toHaveLength(0);
    expect(html).toContain('src="runtime/html-deck-editor.js"');
  });

  it("keeps frontend-slides skill decks on the web-component runtime path", () => {
    const source = `
      <html>
        <head>
          <link rel="stylesheet" href="visual-editor/editor-runtime.css">
        </head>
        <body>
          <deck-stage id="deckStage" width="1920" height="1080">
            <section class="slide active" data-label="Cover">
              <h1>Frontend Slides output</h1>
              <p>Enough editable text for the first page.</p>
            </section>
            <section class="slide" data-label="Details">
              <h2>Details</h2>
              <p>Enough editable text for the second page.</p>
            </section>
          </deck-stage>
          <script src="deck-stage.js"></script>
          <script src="visual-editor/editor-runtime.js"></script>
          <script>
            class DeckStagePresentationAdapter {
              constructor(stage) {
                this.stage = stage;
              }
              setEditorInsets(insets) {
                if (this.stage && typeof this.stage.setEditorInsets === "function") {
                  this.stage.setEditorInsets(insets);
                }
              }
            }
            window.presentation = new DeckStagePresentationAdapter(document.getElementById("deckStage"));
            window.editor = window.FrontendSlidesEditor.mount({ presentation: window.presentation });
          </script>
        </body>
      </html>
    `;
    const report = detectDeck(input([file("index.html", source)]));
    const html = rewriteHtml(source, report);

    expect(report.status).toBe("already-editable");
    expect(report.slideCount).toBe(2);
    expect(html).not.toContain('data-html-deck-editor-stage="preserve"');
    expect(html).toContain('src="deck-stage.js"');
    expect(html).toContain('src="runtime/deck-stage.js"');
    expect(html).toContain('src="runtime/html-deck-editor.js"');
    expect(html).not.toContain("visual-editor/editor-runtime");
    expect(html).not.toContain("FrontendSlidesEditor.mount({ presentation: window.presentation })");
  });

  it("ignores nested slide-like content inside fixed-stage pages", () => {
    const report = detectDeck(input([
      file("index.html", "<deck-stage id=\"deckStage\"><section class=\"slide active\"><div class=\"slide\">Nested card</div></section><section class=\"slide\"></section></deck-stage>")
    ]));
    expect(report.status).toBe("ready");
    expect(report.slideCount).toBe(2);
  });

  it("detects fixed-stage decks with a nested slide wrapper", () => {
    const report = detectDeck(input([
      file("index.html", "<div id=\"deckStage\"><div class=\"slides\"><section class=\"slide active\"></section><section class=\"slide\"></section></div></div>")
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

  it("detects WebSlides and Bespoke style presentation containers", () => {
    const webslides = detectDeck(input([
      file("index.html", "<article id=\"webslides\"><section><h1>One</h1><p>Enough text here</p></section><section><h1>Two</h1><p>Enough text here</p></section></article>")
    ]));
    const bespoke = detectDeck(input([
      file("index.html", "<article id=\"presentation\"><section><h1>One</h1><p>Enough text here</p></section><section><h1>Two</h1><p>Enough text here</p></section></article>")
    ]));

    expect(webslides.status).toBe("adaptable");
    expect(webslides.slideCount).toBe(2);
    expect(bespoke.status).toBe("adaptable");
    expect(bespoke.slideCount).toBe(2);
  });

  it("detects impress.js step decks", () => {
    const report = detectDeck(input([
      file("index.html", "<div id=\"impress\"><div class=\"step\" data-x=\"0\"><h1>One</h1><p>Enough text here</p></div><div class=\"step\" data-x=\"1000\"><h1>Two</h1><p>Enough text here</p></div></div>")
    ]));

    expect(report.status).toBe("adaptable");
    expect(report.sourceKind).toBe("impress");
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

  it("detects single-page Reveal decks", () => {
    const report = detectDeck(input([
      file("index.html", "<div class=\"reveal\"><div class=\"slides\"><section><h1>Only page</h1></section></div></div>")
    ]));

    expect(report.status).toBe("adaptable");
    expect(report.sourceKind).toBe("reveal");
    expect(report.slideCount).toBe(1);
  });

  it("flattens standard Reveal vertical stacks into navigable pages", () => {
    const report = detectDeck(input([
      file("index.html", `
        <div class="reveal"><div class="slides">
          <section><h1>Horizontal</h1></section>
          <section>
            <section><h1>Vertical A</h1></section>
            <section><h1>Vertical B</h1></section>
          </section>
        </div></div>
      `)
    ]));

    expect(report.sourceKind).toBe("reveal");
    expect(report.slideCount).toBe(3);
  });

  it("does not treat Bootstrap carousel widgets as slide decks", () => {
    const report = detectDeck(input([
      file("index.html", `
        <main>
          <div class="carousel slide" data-bs-ride="carousel">
            <div class="carousel-inner"><div class="carousel-item active">Product image</div></div>
          </div>
          <article><h1>Storefront</h1><p>This is an ordinary commerce page with a carousel widget.</p></article>
        </main>
      `)
    ]));

    expect(report.status).toBe("unsupported");
  });

  it("does not infer an installed editor from ordinary page text", () => {
    const report = detectDeck(input([
      file("index.html", `
        <div id="deckStage" class="deck-stage">
          <section class="slide"><h1>HtmlDeckEditor migration notes</h1></section>
        </div>
      `)
    ]));

    expect(report.status).toBe("ready");
  });

  it("does not count nested slide-like elements as pages", () => {
    const report = detectDeck(input([
      file("index.html", `
        <div id="deck">
          <section class="slide"><h1>One</h1><div class="slide">Nested card, not a page</div></section>
          <section class="slide"><h1>Two</h1></section>
        </div>
      `)
    ]));
    expect(report.status).toBe("adaptable");
    expect(report.sourceKind).toBe("section-slide");
    expect(report.slideCount).toBe(2);
  });

  it("counts only top-level Reveal sections as pages", () => {
    const report = detectDeck(input([
      file("index.html", `
        <div class="reveal"><div class="slides">
          <section><h1>One</h1><section><h2>Nested reveal step</h2></section></section>
          <section><h1>Two</h1></section>
        </div></div>
      `)
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

  it("does not treat ordinary article lists as presentation decks", () => {
    const report = detectDeck(input([
      file("index.html", "<main><article><h1>Post one</h1><p>Enough text here for a normal article list.</p></article><article><h1>Post two</h1><p>Enough text here for a normal article list.</p></article></main>")
    ]));

    expect(report.status).toBe("unsupported");
  });

  it("treats dense detection reports as single-page adaptable documents", () => {
    const report = detectDeck(input([
      file("index.html", reportLikeHtml())
    ]));

    expect(report.status).toBe("adaptable");
    expect(report.sourceKind).toBe("unknown");
    expect(report.slideCount).toBe(1);
    expect(report.confidence).toBeLessThan(0.5);
    expect(report.messages.join(" ")).toContain("文档/报告");
    expect(report.warnings.join(" ")).toContain("1 页保留原布局");
    expect(report.warnings.join(" ")).toContain("AI 智能适配");
  });

  it("treats dense long-form HTML documents as single-page adaptable pages", () => {
    const report = detectDeck(input([
      file("index.html", longFormDocumentHtml())
    ]));

    expect(report.status).toBe("adaptable");
    expect(report.sourceKind).toBe("unknown");
    expect(report.slideCount).toBe(1);
    expect(report.messages.join(" ")).toContain("文档/报告");
  });

  it("keeps explicit presentation containers as multi-section decks", () => {
    const report = detectDeck(input([
      file("index.html", `
        <main id="presentation">
          <section><h1>One</h1><p>Enough presentation text for page one.</p></section>
          <section><h1>Two</h1><p>Enough presentation text for page two.</p></section>
          <section><h1>Three</h1><p>Enough presentation text for page three.</p></section>
          <section><h1>Four</h1><p>Enough presentation text for page four.</p></section>
        </main>
      `)
    ]));

    expect(report.status).toBe("adaptable");
    expect(report.sourceKind).toBe("generic-section");
    expect(report.slideCount).toBe(4);
  });

  it("keeps report-themed content as slides when presentation semantics are explicit", () => {
    const report = detectDeck(input([
      file("index.html", `
        <main id="presentation">
          <section><h1>Audit overview</h1><p>Report findings and confidence metrics for the first presentation page.</p></section>
          <section><h2>Assessment</h2><p>Detailed scorecard and review findings for the second presentation page.</p></section>
          <section><h2>Appendix</h2><p>Benchmark evidence and audit notes for the third presentation page.</p></section>
        </main>
      `)
    ]));

    expect(report.status).toBe("adaptable");
    expect(report.sourceKind).not.toBe("unknown");
    expect(report.slideCount).toBe(3);
  });
});

describe("runtime injection", () => {
  it("neutralizes Reveal initialization while preserving unrelated scripts", () => {
    const source = `
      <div class="reveal"><div class="slides">
        <section><h1>One</h1></section>
        <section><h1>Two</h1></section>
      </div></div>
      <script src="vendor/reveal.js"></script>
      <script>window.beforeReveal = true; Reveal.initialize({ hash: true, plugins: [] }); window.keepBusinessLogic = true;</script>
    `;
    const report = detectDeck(input([file("index.html", source)]));
    const html = rewriteHtml(source, report);
    const doc = new DOMParser().parseFromString(html, "text/html");

    expect(doc.querySelectorAll("#deckStage > .slide")).toHaveLength(2);
    expect(doc.querySelector(".reveal, .slides")).toBeNull();
    expect(html).not.toContain("vendor/reveal.js");
    expect(html).not.toContain("Reveal.initialize");
    expect(html).toContain("window.beforeReveal = true");
    expect(html).toContain("window.keepBusinessLogic = true");
  });

  it("removes emptied Reveal vertical-stack wrappers after flattening", () => {
    const source = `
      <div class="reveal"><div class="slides">
        <section><h1>Horizontal</h1></section>
        <section>
          <section><h1>Vertical A</h1></section>
          <section><h1>Vertical B</h1></section>
        </section>
      </div></div>
    `;
    const report = detectDeck(input([file("index.html", source)]));
    const html = rewriteHtml(source, report);
    const doc = new DOMParser().parseFromString(html, "text/html");
    const directSections = Array.from(doc.querySelectorAll("#deckStage > section"));

    expect(directSections).toHaveLength(3);
    expect(directSections.every((section) => section.classList.contains("slide"))).toBe(true);
    expect(directSections.map((section) => section.textContent?.trim())).toEqual([
      "Horizontal",
      "Vertical A",
      "Vertical B"
    ]);
  });

  it("neutralizes Impress positioning and initialization", () => {
    const source = `
      <div id="impress">
        <div class="step feature" data-x="0" data-y="100" style="transform: translate3d(0, 100px, 0)"><h1>One</h1><p>Enough text here</p></div>
        <div class="step" data-x="1000"><h1>Two</h1><p>Enough text here</p></div>
      </div>
      <script src="vendor/impress.js"></script>
      <script>impress().init();</script>
      <script>window.keepBusinessLogic = true;</script>
    `;
    const report = detectDeck(input([file("index.html", source)]));
    const html = rewriteHtml(source, report);
    const doc = new DOMParser().parseFromString(html, "text/html");
    const stage = doc.getElementById("deckStage") as HTMLElement;
    const slides = Array.from(stage.children) as HTMLElement[];

    expect(report.sourceKind).toBe("impress");
    expect(slides).toHaveLength(2);
    expect(slides.every((slide) => slide.classList.contains("slide") && !slide.classList.contains("step"))).toBe(true);
    expect(slides[0].classList.contains("active")).toBe(true);
    expect(slides.every((slide) => !slide.hasAttribute("data-x") && !slide.hasAttribute("data-y"))).toBe(true);
    expect(slides[0].style.transform).toBe("");
    expect(html).not.toContain("vendor/impress.js");
    expect(html).not.toContain("impress().init");
    expect(html).toContain("window.keepBusinessLogic = true");
  });

  it("resolves authored resources before removing base href", () => {
    const source = `
      <html><head>
        <base href="assets/sub/">
        <link rel="stylesheet" href="../deck.css">
        <script src="app.js"></script>
      </head><body><main>
        <section><h1>One</h1><p>Enough text here</p><img src="../hero.png"></section>
        <section><h1>Two</h1><p>Enough text here</p></section>
      </main></body></html>
    `;
    const report = detectDeck(input([file("index.html", source)]));
    const html = rewriteHtml(source, report);
    const doc = new DOMParser().parseFromString(html, "text/html");

    expect(doc.querySelector("base")).toBeNull();
    expect(doc.querySelector("img")?.getAttribute("src")).toBe("assets/hero.png");
    expect(doc.querySelector('script[src="assets/sub/app.js"]')).toBeTruthy();
    expect(doc.querySelector('link[href="assets/deck.css"]')).toBeTruthy();
    expect(doc.querySelector('script[src="runtime/html-deck-editor.js"]')).toBeTruthy();
  });

  it("preserves ordinary controls and business scripts that only look editor-related", () => {
    const source = `
      <button id="editToggle">编辑模式</button>
      <main><section><h1>One</h1><p>Enough text here</p></section><section><h1>Two</h1><p>Enough text here</p></section></main>
      <script>document.getElementById("editToggle").addEventListener("click", () => window.businessMode = true);</script>
    `;
    const report = detectDeck(input([file("index.html", source)]));
    const html = rewriteHtml(source, report);

    expect(report.status).toBe("adaptable");
    expect(html).toContain('id="editToggle"');
    expect(html).toContain("window.businessMode = true");
  });

  it("preserves an authored doctype and upgrades missing declarations to UTF-8", () => {
    const source = '<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01//EN"><html><body><main><section><h1>One</h1><p>Enough text</p></section><section><h1>Two</h1><p>Enough text</p></section></main></body></html>';
    const report = detectDeck(input([file("index.html", source)]));
    const html = rewriteHtml(source, report);

    expect(html.startsWith('<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01//EN">')).toBe(true);
    expect(html).toContain('<meta charset="utf-8">');
  });

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

  it("wraps body-level slide pages instead of turning body into the editor stage", () => {
    const source = `
      <section class="slide active"><h1>One</h1><p>Enough text here</p></section>
      <section class="slide"><h1>Two</h1><p>Enough text here</p></section>
    `;
    const report = detectDeck(input([file("index.html", source)]));
    const html = rewriteHtml(source, report);
    const doc = new DOMParser().parseFromString(html, "text/html");
    const stage = doc.getElementById("deckStage") as HTMLElement;

    expect(report.status).toBe("adaptable");
    expect(doc.body.id).not.toBe("deckStage");
    expect(doc.body.getAttribute("data-html-deck-editor-stage")).toBeNull();
    expect(stage).toBeTruthy();
    expect(stage.getAttribute("data-html-deck-editor-stage")).toBe("preserve");
    expect(stage.querySelectorAll(":scope > section.slide")).toHaveLength(2);
    expect(doc.body.querySelectorAll(":scope > section.slide")).toHaveLength(0);
  });

  it("injects the editor into a single-page rendered HTML shell", () => {
    const source = `
      <html lang="zh-CN">
        <head>
          <title>OpenMCIA E2E Preview</title>
          <style>
            html, body { margin: 0; padding: 0; background: #111827; }
            body { min-height: 100vh; display: flex; align-items: center; justify-content: center; padding: 24px; }
            .slide-html-shell { width: 1000px; height: 562.5px; position: relative; overflow: hidden; background: #fff; }
          </style>
        </head>
        <body>
          <div id="deckStage" class="deck-stage" aria-label="Presentation">
            <section class="slide active visible" data-title="OpenMCIA E2E Preview">
              <div class="slide-html-shell"><h1>什么是力与运动？</h1></div>
            </section>
          </div>
        </body>
      </html>
    `;
    const report = detectDeck(input([file("index.html", source)]));
    const html = rewriteHtml(source, report);
    const doc = new DOMParser().parseFromString(html, "text/html");

    expect(report.status).toBe("ready");
    expect(report.slideCount).toBe(1);
    expect(doc.querySelector("#deckStage")?.getAttribute("data-html-deck-editor-stage")).toBe("preserve");
    expect(doc.querySelectorAll("#deckStage > .slide")).toHaveLength(1);
    expect(html).toContain("runtime/html-deck-editor.js");
    expect(html).toContain("HtmlDeckEditor.mount");
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

  it("does not treat an incidental deck-stage page as the whole editor stage", () => {
    const source = `
      <main>
        <section class="deck-stage"><h1>One</h1><p>Enough text here</p></section>
        <section class="deck-stage hidden" hidden style="display: none; visibility: hidden; opacity: 0;">
          <h1>Two</h1><p>Enough text here</p>
        </section>
      </main>
    `;
    const report = detectDeck(input([file("index.html", source)]));
    const html = rewriteHtml(source, report);
    const doc = new DOMParser().parseFromString(html, "text/html");
    const stage = doc.getElementById("deckStage") as HTMLElement;
    const directSlides = Array.from(stage.children).filter((child) => child.classList.contains("slide"));

    expect(report.status).toBe("adaptable");
    expect(stage.tagName.toLowerCase()).toBe("main");
    expect(stage.getAttribute("data-html-deck-editor-stage")).toBe("preserve");
    expect(directSlides).toHaveLength(2);
    expect(directSlides[1].hasAttribute("hidden")).toBe(false);
    expect(directSlides[1].classList.contains("hidden")).toBe(false);
    expect((directSlides[1] as HTMLElement).style.display).toBe("");
    expect((directSlides[1] as HTMLElement).style.visibility).toBe("");
    expect((directSlides[1] as HTMLElement).style.opacity).toBe("");
  });

  it("adapts public framework containers while neutralizing their navigation state", () => {
    const source = `
      <div class="fallback-message">Keep fallback</div>
      <div id="impress" data-width="1920" data-height="1080">
        <div id="intro" class="step" data-x="0" data-y="0"><h1>One</h1><p>Enough text here</p></div>
        <div id="detail" class="step" data-x="1000" data-y="0"><h1>Two</h1><p>Enough text here</p></div>
      </div>
      <script>impress().init();</script>
    `;
    const report = detectDeck(input([file("index.html", source)]));
    const html = rewriteHtml(source, report);
    const doc = new DOMParser().parseFromString(html, "text/html");
    const stage = doc.getElementById("deckStage") as HTMLElement;
    const slides = Array.from(stage.children).filter((child) => child.classList.contains("slide")) as HTMLElement[];

    expect(report.status).toBe("adaptable");
    expect(stage.getAttribute("data-html-deck-editor-stage")).toBe("preserve");
    expect(stage.getAttribute("data-width")).toBe("1920");
    expect(slides).toHaveLength(2);
    expect(slides[0].classList.contains("step")).toBe(false);
    expect(slides[1].getAttribute("data-x")).toBeNull();
    expect(doc.querySelector(".fallback-message")).toBeTruthy();
    expect(html).not.toContain("impress().init();");
  });

  it("repairs escaped slides back into an explicit deck container", () => {
    const source = `
      <div id="deck">
        <div id="chrome">Deck chrome</div>
        <section class="slide"><h1>One</h1></section>
        <section class="slide"><h1>Two</h1></section>
        <div id="tail">Deck tail</div>
      </div>
      <section class="slide"><h1>Three</h1></section>
      <script>const deck = document.getElementById("deck");</script>
    `;
    const report = detectDeck(input([file("index.html", source)]));
    const html = rewriteHtml(source, report);
    const doc = new DOMParser().parseFromString(html, "text/html");
    const stage = doc.getElementById("deck") as HTMLElement;
    const directSlides = Array.from(stage.children).filter((child) => child.classList.contains("slide"));

    expect(report.status).toBe("adaptable");
    expect(stage.getAttribute("data-html-deck-editor-stage")).toBe("preserve");
    expect(stage.getAttribute("data-html-deck-editor-navigation")).toBe("horizontal");
    expect(directSlides).toHaveLength(3);
    expect(Array.from(stage.children).map((child) => child.id || child.tagName.toLowerCase())).toEqual([
      "chrome",
      "section",
      "section",
      "section",
      "tail"
    ]);
    expect(doc.body.querySelectorAll("body > section.slide")).toHaveLength(0);
    expect(doc.getElementById("deckStage")).toBeNull();
    expect(html).toContain("const deck = document.getElementById(\"deck\");");
  });

  it("keeps nested slide-like content inside its parent page", () => {
    const source = `
      <div id="deck">
        <section class="slide"><h1>One</h1><div class="slide" data-card="nested">Nested card</div></section>
        <section class="slide"><h1>Two</h1></section>
      </div>
    `;
    const report = detectDeck(input([file("index.html", source)]));
    const html = rewriteHtml(source, report);
    const doc = new DOMParser().parseFromString(html, "text/html");
    const stage = doc.getElementById("deck") as HTMLElement;
    const directSlides = Array.from(stage.children).filter((child) => child.classList.contains("slide"));
    const nestedCard = doc.querySelector("[data-card='nested']") as HTMLElement;

    expect(directSlides).toHaveLength(2);
    expect(nestedCard.closest("section.slide")).toBe(directSlides[0]);
    expect(nestedCard.parentElement).toBe(directSlides[0]);
  });

  it("keeps nested Reveal sections inside their top-level page", () => {
    const source = `
      <div class="reveal"><div class="slides">
        <section><h1>One</h1><section data-step="nested"><h2>Nested step</h2></section></section>
        <section><h1>Two</h1></section>
      </div></div>
    `;
    const report = detectDeck(input([file("index.html", source)]));
    const html = rewriteHtml(source, report);
    const doc = new DOMParser().parseFromString(html, "text/html");
    const stage = doc.getElementById("deckStage") as HTMLElement;
    const directSlides = Array.from(stage.children).filter((child) => child.classList.contains("slide"));
    const nestedStep = doc.querySelector("[data-step='nested']") as HTMLElement;

    expect(directSlides).toHaveLength(2);
    expect(nestedStep.closest(".slide")).toBe(directSlides[0]);
    expect(nestedStep.parentElement).toBe(directSlides[0]);
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

  it("mounts the editor even when the user page already defines window.editor", () => {
    const source = `
      <main>
        <section><h1>One</h1><p>Enough text here</p></section>
        <section><h1>Two</h1><p>Enough text here</p></section>
      </main>
      <script>window.editor = { source: "user-app" };</script>
    `;
    const report = detectDeck(input([file("index.html", source)]));
    const html = rewriteHtml(source, report);

    expect(html).toContain("window.__htmlDeckEditorMounted");
    expect(html).toContain("window.editor = window.HtmlDeckEditor.mount();");
    expect(html).not.toContain("!window.editor");
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
    expect(result.filesAdded).toContain("runtime/html-to-image.js");
    expect(result.filesAdded).toContain("runtime/html-to-image.LICENSE.md");
    expect(result.filesAdded).toContain("runtime/jspdf.umd.min.js");
    expect(result.filesAdded).toContain("runtime/jspdf.LICENSE.md");
    expect(result.filesAdded).toContain("runtime/jszip.min.js");
    expect(result.filesAdded).toContain("runtime/jszip.LICENSE.md");
    expect(result.filesAdded).toContain("runtime/FONT-LICENSES.md");
    expect(result.filesModified).toEqual(["index.html"]);

    const zip = await JSZip.loadAsync(result.blob!);
    const html = await zip.file("index.html")!.async("string");
    expect(html).toContain('src="runtime/html-to-image.js"');
    expect(html).toContain('src="runtime/jspdf.umd.min.js"');
    expect(html).toContain('src="runtime/jszip.min.js"');
    expect(html).toContain('data-html-deck-editor-runtime="0.1.8"');
  });

  it("adds local image assets to the export manifest", async () => {
    const result = await convertInput(input([
      file("deck/index.html", "<main><section><h1>One</h1><p>Enough text here</p><img src=\"assets/1.jpg\"></section><section><h1>Two</h1><p>Enough text here</p></section></main>"),
      file("deck/assets/1.jpg", "fake jpeg")
    ]));

    expect(result.blob).toBeTruthy();
    const zip = await JSZip.loadAsync(result.blob!);
    const html = await zip.file("deck/index.html")!.async("string");
    expect(html).toContain('id="html-deck-editor-export-assets"');
    expect(html).toContain('"path":"assets/1.jpg"');
    expect(html).toContain('"deck/assets/1.jpg"');
    expect(html).toContain("data:image/jpeg;base64");
  });

  it("only inlines image assets referenced by HTML, CSS, or srcset", async () => {
    const result = await convertInput(input([
      file("deck/index.html", `
        <style>.slide { background-image: url("assets/bg.png"); }</style>
        <main>
          <section><h1>One</h1><p>Enough text here</p><img src="assets/used.png"></section>
          <section><h1>Two</h1><p>Enough text here</p><picture><source srcset="assets/set%20image.png 1x"><img alt="set"></picture></section>
        </main>
      `),
      file("deck/assets/used.png", "used"),
      file("deck/assets/bg.png", "background"),
      file("deck/assets/set image.png", "srcset"),
      file("deck/assets/unused.png", "unused")
    ]));

    const zip = await JSZip.loadAsync(result.blob!);
    const html = await zip.file("deck/index.html")!.async("string");
    const doc = new DOMParser().parseFromString(html, "text/html");
    const manifest = JSON.parse(doc.getElementById("html-deck-editor-export-assets")?.textContent || "{}");

    expect(manifest.assets.map((asset: { path: string }) => asset.path).sort()).toEqual([
      "assets/bg.png",
      "assets/set image.png",
      "assets/used.png"
    ]);
    expect(html).not.toContain('"path":"assets/unused.png"');
  });

  it("keeps oversized referenced images as files and reports the inline limit", async () => {
    const previous = LIMITS.maxInlineImageBytes;
    LIMITS.maxInlineImageBytes = 4;
    try {
      const result = await convertInput(input([
        file("index.html", "<main><section><h1>One</h1><p>Enough text</p><img src=\"assets/large.png\"></section><section><h1>Two</h1><p>Enough text</p></section></main>"),
        file("assets/large.png", "12345")
      ]));
      const zip = await JSZip.loadAsync(result.blob!);
      const html = await zip.file("index.html")!.async("string");

      expect(zip.file("assets/large.png")).toBeTruthy();
      expect(html).not.toContain('"path":"assets/large.png"');
      expect(result.warnings.join(" ")).toContain("assets/large.png");
      expect(result.warnings.join(" ")).toContain("内联上限");
    } finally {
      LIMITS.maxInlineImageBytes = previous;
    }
  });

  it("stops adding manifest images when the inline total would be exceeded", async () => {
    const previousFile = LIMITS.maxInlineImageBytes;
    const previousTotal = LIMITS.maxInlineImageTotalBytes;
    LIMITS.maxInlineImageBytes = 10;
    LIMITS.maxInlineImageTotalBytes = 6;
    try {
      const result = await convertInput(input([
        file("index.html", "<main><section><h1>One</h1><p>Enough text</p><img src=\"assets/a.png\"><img src=\"assets/b.png\"></section><section><h1>Two</h1><p>Enough text</p></section></main>"),
        file("assets/a.png", "1234"),
        file("assets/b.png", "5678")
      ]));
      const zip = await JSZip.loadAsync(result.blob!);
      const html = await zip.file("index.html")!.async("string");
      const doc = new DOMParser().parseFromString(html, "text/html");
      const manifest = JSON.parse(doc.getElementById("html-deck-editor-export-assets")?.textContent || "{}");

      expect(manifest.assets).toHaveLength(1);
      expect(result.warnings.join(" ")).toContain("内联总量");
    } finally {
      LIMITS.maxInlineImageBytes = previousFile;
      LIMITS.maxInlineImageTotalBytes = previousTotal;
    }
  });

  it("uses an AI adaptation plan before normal runtime injection", async () => {
    const result = await convertInput(input([
      file("index.html", `
        <main id="presentation">
          <article id="one"><h1>One</h1><p>Enough text here</p></article>
          <article id="two"><h1>Two</h1><p>Enough text here</p></article>
        </main>
      `)
    ]), [], undefined, {
      aiAdaptationPlan: {
        stageSelector: "#presentation",
        slides: [{ selector: "#one" }, { selector: "#two" }],
        editableTextSelectors: ["#one h1", "#two h1"]
      }
    });

    expect(result.blob).toBeTruthy();
    const zip = await JSZip.loadAsync(result.blob!);
    const html = await zip.file("index.html")!.async("string");
    expect(html).toContain('id="presentation" data-html-deck-editor-stage="preserve"');
    expect(html).toContain('id="one" class="slide active visible"');
    expect(html).toContain('data-editable=""');
    expect(html).toContain("runtime/html-deck-editor.js");
  });

  it("uses a single-slide AI adaptation plan before normal runtime injection", async () => {
    const result = await convertInput(input([
      file("index.html", `
        <main id="presentation">
          <article id="only"><h1>Only</h1><p>Enough text here for one slide.</p></article>
        </main>
      `)
    ]), [], undefined, {
      aiAdaptationPlan: {
        stageSelector: "#presentation",
        slides: [{ selector: "#only", title: "Only" }],
        editableTextSelectors: ["#only h1"]
      }
    });

    expect(result.blob).toBeTruthy();
    expect(result.report.slideCount).toBe(1);
    const zip = await JSZip.loadAsync(result.blob!);
    const html = await zip.file("index.html")!.async("string");
    expect(html).toContain('id="presentation" data-html-deck-editor-stage="preserve"');
    expect(html).toContain('id="only" class="slide active visible"');
    expect(html).toContain('data-editable=""');
    expect(html).toContain("runtime/html-deck-editor.js");
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
    expect(zip.file("deck/runtime/html-to-image.LICENSE.md")).toBeTruthy();
    expect(zip.file("deck/runtime/jspdf.LICENSE.md")).toBeTruthy();
    expect(zip.file("deck/runtime/jszip.LICENSE.md")).toBeTruthy();
    expect(zip.file("deck/assets/style.css")).toBeTruthy();
  });

  it("reports AI friendliness warnings for fragile slide inputs", () => {
    const report = detectDeck(input([
      file("index.html", `
        <deck-stage id="deckStage">
          <section class="slide active"><img src="assets/missing.png" alt="flattened slide"></section>
          <section class="slide"><div class="slide"><h2>Nested slide</h2></div></section>
        </deck-stage>
        <script>
          document.getElementById("deckStage").innerHTML = '<section class="slide">Dynamic</section>';
        </script>
      `)
    ]));

    expect(report.status).toBe("ready");
    expect(report.warnings.some((warning) => warning.includes("嵌套结构"))).toBe(true);
    expect(report.warnings.some((warning) => warning.includes("单张图片"))).toBe(true);
    expect(report.warnings.some((warning) => warning.includes("动态生成 slide"))).toBe(true);
    expect(report.warnings.some((warning) => warning.includes("assets/missing.png"))).toBe(true);
  });

  it("checks srcset and percent-encoded local resource paths", () => {
    const missing = detectDeck(input([
      file("index.html", `
        <div id="deckStage" class="deck-stage">
          <section class="slide"><img srcset="assets/missing%20image.png 1x" alt="missing"></section>
        </div>
      `)
    ]));
    const present = detectDeck(input([
      file("index.html", `
        <div id="deckStage" class="deck-stage">
          <section class="slide"><img srcset="assets/hero%20image.png 1x" alt="present"></section>
        </div>
      `),
      file("assets/hero image.png", "image")
    ]));

    expect(missing.warnings.join(" ")).toContain("assets/missing image.png");
    expect(present.warnings.join(" ")).not.toContain("找不到");
  });

  it("uses base href when checking bundled local resources", () => {
    const report = detectDeck(input([
      file("index.html", `
        <base href="assets/">
        <div id="deckStage" class="deck-stage">
          <section class="slide"><img src="hero.png" alt="present"></section>
        </div>
      `),
      file("assets/hero.png", "image")
    ]));

    expect(report.warnings.join(" ")).not.toContain("找不到");
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
        <html><body class="editing editor-on html-deck-editor-exporting">
          <deck-stage id="deckStage">
            <section class="slide active"><h1 class="editor-selected">One</h1></section>
            <section class="slide"><h1>Two</h1></section>
          </deck-stage>
          <button class="edit-toggle" id="editToggle" title="编辑模式 (E)">DONE</button>
          <button class="save-html">SAVE HTML</button>
          <script src="visual-editor/editor-runtime.js"></script>
          <link rel="stylesheet" href="visual-editor/editor-runtime.css">
          <style>.edit-toggle { width: 84px; }</style>
          <script>window.FrontendSlidesEditor.mount({});</script>
        </body></html>
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
    const converted = new DOMParser().parseFromString(html, "text/html");
    expect(converted.body.classList.contains("editing")).toBe(false);
    expect(converted.body.classList.contains("editor-on")).toBe(false);
    expect(converted.body.classList.contains("html-deck-editor-exporting")).toBe(false);
    expect(converted.querySelector(".editor-selected")).toBeNull();
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

  it("allows an explicit local single-page fallback without AI", async () => {
    const result = await convertInput(input([
      file("index.html", `
        <html>
          <head><title>Local fallback</title></head>
          <body>
            <article><h1>Blog</h1><p>Just one normal page.</p></article>
            <script>window.keepOriginalScript = true;</script>
          </body>
        </html>
      `)
    ]), [], undefined, { allowSinglePageFallback: true });

    expect(result.blob).toBeTruthy();
    expect(result.report.status).toBe("adaptable");
    expect(result.report.sourceKind).toBe("unknown");
    expect(result.report.slideCount).toBe(1);
    expect(result.warnings).toContain("普通检测没有识别出分页，已按你的选择把整个页面作为 1 页进行本地转换，请在编辑器中复核布局。");

    const zip = await JSZip.loadAsync(result.blob!);
    const html = await zip.file("index.html")!.async("string");
    const doc = new DOMParser().parseFromString(html, "text/html");
    const stage = doc.querySelector("#deckStage[data-html-deck-editor-stage='preserve']");
    const slide = stage?.querySelector(":scope > .slide.active.visible");
    expect(slide?.querySelector("article h1")?.textContent).toBe("Blog");
    expect(stage?.querySelector("script")).toBeNull();
    expect(doc.body.querySelector(":scope > script")?.textContent).toContain("keepOriginalScript");
    expect(html).toContain("runtime/html-deck-editor.js");
  });

  it("keeps report-like HTML as one local page by default", async () => {
    const result = await convertInput(input([
      file("index.html", reportLikeHtml())
    ]));

    expect(result.blob).toBeTruthy();
    expect(result.report.status).toBe("adaptable");
    expect(result.report.sourceKind).toBe("unknown");
    expect(result.report.slideCount).toBe(1);

    const zip = await JSZip.loadAsync(result.blob!);
    const html = await zip.file("index.html")!.async("string");
    const doc = new DOMParser().parseFromString(html, "text/html");
    expect(doc.querySelectorAll("#deckStage > .slide")).toHaveLength(1);
    expect(doc.querySelector("#deckStage > .slide")?.textContent).toContain("AI 模型身份驗證");
  });
});
