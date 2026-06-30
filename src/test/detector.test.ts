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

  it("adapts public framework deck containers without dropping source attributes", () => {
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
    const stage = doc.getElementById("impress") as HTMLElement;
    const slides = Array.from(stage.children).filter((child) => child.classList.contains("slide")) as HTMLElement[];

    expect(report.status).toBe("adaptable");
    expect(stage.getAttribute("data-html-deck-editor-stage")).toBe("preserve");
    expect(slides).toHaveLength(2);
    expect(slides[0].classList.contains("step")).toBe(true);
    expect(slides[1].getAttribute("data-x")).toBe("1000");
    expect(doc.querySelector(".fallback-message")).toBeTruthy();
    expect(html).toContain("impress().init();");
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
    const stage = doc.querySelector(".slides") as HTMLElement;
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
    expect(html).toContain('data-html-deck-editor-runtime="0.1.7"');
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
