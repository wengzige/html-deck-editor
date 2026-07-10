import { afterEach, describe, expect, it, vi } from "vitest";
import { applyAiAdaptationPlanToHtml, buildHtmlAdaptationSummary, createAiAdaptationPreview, parseAiAdaptationPlan, previewAiAdaptationPlan } from "../lib/aiAdapter";
import { defaultAiConfig } from "../lib/aiConfig";
import { textToBytes } from "../lib/text";
import type { LoadedInput, VirtualFile } from "../types/deck";

function complexHtml(): string {
  return `
    <main id="presentation">
      <section id="cover"><h1>One</h1><p>Enough text for the first slide.</p><img id="hero" src="hero.png"></section>
      <section id="details"><h2>Two</h2><p id="body">Enough text for the second slide.</p><div id="metric" class="kpi-card">42%</div></section>
    </main>
    <script>window.keepMe = true;</script>
  `;
}

function reportLikeHtml(): string {
  return `
    <html lang="zh-Hant">
      <head>
        <title>AI 模型檢測報告</title>
        <style>body { max-width: 960px; margin-inline: auto; padding: 24px; }.mono { font-family: ui-monospace, monospace; }</style>
      </head>
      <body>
        <main id="report">
          <section><h1>AI 模型身份驗證</h1><p>未知代理，缺少特徵 header / id / body 標記。</p></section>
          <section><h2>信心度</h2><p class="mono">0% confidence score across checks.</p></section>
          <section><h2>測試摘要</h2><p>Capability, refusal, formatting, latency and token checks are reported here.</p></section>
          <section><h2>能力矩陣</h2><svg viewBox="0 0 100 20"><rect width="80" height="20"></rect></svg></section>
        </main>
      </body>
    </html>
  `;
}

describe("AI adaptation", () => {
  afterEach(() => {
    vi.unstubAllGlobals();
  });

  it("builds a compact structure summary without embedding binary assets", () => {
    const summary = buildHtmlAdaptationSummary(complexHtml());

    expect(summary).toContain("#presentation");
    expect(summary).toContain("#cover");
    expect(summary).toContain("hero.png");
    expect(summary).not.toContain("data:image");
  });

  it("builds valid fallback selectors for digit-prefixed IDs and classes", () => {
    const summary = buildHtmlAdaptationSummary('<main><h1 id="123-title">Title</h1><p class="9lead">Body</p></main>');

    expect(summary).toContain('[id=\\"123-title\\"]');
    expect(summary).toContain('[class~=\\"9lead\\"]');
  });

  it("parses fenced JSON adaptation plans", () => {
    const plan = parseAiAdaptationPlan("```json\n{\"slides\":[{\"selector\":\"#a\"},{\"selector\":\"#b\"}]}\n```");

    expect(plan.slides?.[0].selector).toBe("#a");
  });

  it("accepts a valid single-slide adaptation plan", () => {
    const result = previewAiAdaptationPlan(complexHtml(), {
      slides: [{ selector: "#cover" }]
    });

    expect(result.preview.slideCount).toBe(1);
  });

  it("rejects plans without any valid slides", () => {
    expect(() => previewAiAdaptationPlan(complexHtml(), {
      slides: []
    })).toThrow("至少 1 页");
  });

  it("applies small DOM markers while preserving user scripts", () => {
    const result = applyAiAdaptationPlanToHtml(complexHtml(), {
      stageSelector: "#presentation",
      slides: [
        { selector: "#cover", title: "Cover" },
        { selector: "#details", title: "Details" }
      ],
      editableTextSelectors: ["#cover h1", "#body"],
      editableMediaSelectors: ["#hero"],
      editableBoxSelectors: ["#metric"],
      warnings: ["第二页图表需要人工复核"]
    });

    expect(result.preview.slideCount).toBe(2);
    expect(result.preview.textCount).toBe(2);
    expect(result.preview.mediaCount).toBe(1);
    expect(result.preview.boxCount).toBe(1);
    expect(result.html).toContain('id="presentation" data-html-deck-editor-stage="preserve"');
    expect(result.html).toContain('id="cover" class="slide active visible"');
    expect(result.html).toContain('id="hero" src="hero.png" data-editable-media=""');
    expect(result.html).toContain('id="metric" class="kpi-card" data-editable-box=""');
    expect(result.html).toContain("window.keepMe = true;");
  });

  it("skips a stage container when AI also returns it as a slide", () => {
    const result = previewAiAdaptationPlan(complexHtml(), {
      stageSelector: "#presentation",
      slides: [
        { selector: "#presentation" },
        { selector: "#cover" },
        { selector: "#details" }
      ]
    });

    expect(result.plan.stageSelector).toBe("#presentation");
    expect(result.plan.slides.map((slide) => slide.selector)).toEqual(["#cover", "#details"]);
    expect(result.preview.warnings.join(" ")).toContain("舞台容器");
  });

  it("ignores a stage selector inside a slide before applying DOM changes", () => {
    const result = applyAiAdaptationPlanToHtml(`
      <main>
        <section id="one"><h1>One</h1><p>Enough text here.</p><div id="inner-stage">Inner</div></section>
        <section id="two"><h1>Two</h1><p>Enough text here.</p></section>
      </main>
    `, {
      stageSelector: "#inner-stage",
      slides: [{ selector: "#one" }, { selector: "#two" }]
    });

    expect(result.plan.stageSelector).toBeNull();
    expect(result.preview.slideCount).toBe(2);
    expect(result.preview.warnings.join(" ")).toContain("舞台容器");
    expect(result.html).toContain('id="deckStage" data-html-deck-editor-stage="preserve"');
  });

  it("keeps a real slide when AI incorrectly also uses it as the stage", () => {
    const result = applyAiAdaptationPlanToHtml(`
      <main>
        <article id="one"><h1>One</h1><p>Enough text here.</p></article>
        <article id="two"><h1>Two</h1><p>Enough text here.</p></article>
      </main>
    `, {
      stageSelector: "#one",
      slides: [{ selector: "#one" }, { selector: "#two" }]
    });

    expect(result.plan.stageSelector).toBeNull();
    expect(result.plan.slides.map((slide) => slide.selector)).toEqual(["#one", "#two"]);
    expect(result.preview.warnings.join(" ")).toContain("舞台容器");
  });

  it("keeps only top-level AI slide selectors", () => {
    const result = applyAiAdaptationPlanToHtml(`
      <main id="presentation">
        <section id="one"><h1>One</h1><p>Enough text here.</p><div id="nested">Nested panel</div></section>
        <section id="two"><h1>Two</h1><p>Enough text here.</p></section>
      </main>
    `, {
      stageSelector: "#presentation",
      slides: [{ selector: "#one" }, { selector: "#nested" }, { selector: "#two" }]
    });

    expect(result.plan.slides.map((slide) => slide.selector)).toEqual(["#one", "#two"]);
    expect(result.preview.warnings.join(" ")).toContain("嵌套页面");
    expect(result.html).toContain('id="nested"');
  });

  it("skips document containers returned as AI slide selectors", () => {
    const result = applyAiAdaptationPlanToHtml(`
      <main id="presentation">
        <section id="one"><h1>One</h1><p>Enough text here.</p></section>
        <section id="two"><h1>Two</h1><p>Enough text here.</p></section>
      </main>
    `, {
      stageSelector: "body",
      slides: [{ selector: "body" }, { selector: "html" }, { selector: "#one" }, { selector: "#two" }]
    });

    expect(result.plan.stageSelector).toBeNull();
    expect(result.plan.slides.map((slide) => slide.selector)).toEqual(["#one", "#two"]);
    expect(result.preview.warnings.join(" ")).toContain("整个文档容器");
  });

  it("skips invalid and ignored selectors instead of applying them", () => {
    const result = applyAiAdaptationPlanToHtml(complexHtml(), {
      stageSelector: "#presentation",
      slides: [{ selector: "#cover" }, { selector: "#details" }],
      ignoreSelectors: ["#details"],
      editableTextSelectors: ["#body", "script", "???"]
    });

    expect(result.preview.textCount).toBe(0);
    expect(result.preview.warnings.join(" ")).toContain("selector");
    expect(result.html).not.toContain('id="body" data-editable');
  });

  it("keeps editable targets bound to the original nodes when moving slides", () => {
    const result = applyAiAdaptationPlanToHtml(`
      <body>
        <section><h1>First</h1></section>
        <aside><section><p>Second target</p></section></aside>
      </body>
    `, {
      slides: [
        { selector: "body > section" },
        { selector: "aside > section" }
      ],
      editableTextSelectors: ["aside > section > p"]
    });
    const doc = new DOMParser().parseFromString(result.html, "text/html");

    expect(doc.querySelector("aside > section")).toBeNull();
    expect(doc.querySelector("p")?.getAttribute("data-editable")).toBe("");
  });

  it("requires the stage to contain every selected slide", () => {
    const result = previewAiAdaptationPlan(`
      <main><section id="one"></section><section id="two"></section></main>
      <footer id="wrong-stage"></footer>
    `, {
      stageSelector: "#wrong-stage",
      slides: [{ selector: "#one" }, { selector: "#two" }]
    });

    expect(result.plan.stageSelector).toBeNull();
    expect(result.preview.warnings.join(" ")).toContain("共同祖先");
  });

  it("never applies editable markers inside a partially matched ignore region", () => {
    const result = applyAiAdaptationPlanToHtml(`
      <main>
        <section id="page"><div class="skip"><p id="ignored">Ignore me</p></div><p id="kept">Keep me</p></section>
      </main>
    `, {
      stageSelector: "main",
      slides: [{ selector: "#page" }],
      editableTextSelectors: ["p"],
      ignoreSelectors: [".skip"]
    });
    const doc = new DOMParser().parseFromString(result.html, "text/html");

    expect(doc.querySelector("#ignored")?.hasAttribute("data-editable")).toBe(false);
    expect(doc.querySelector("#kept")?.getAttribute("data-editable")).toBe("");
    expect(result.preview.textCount).toBe(1);
  });

  it("clears forced hidden state from every resolved slide", () => {
    const result = applyAiAdaptationPlanToHtml(`
      <main>
        <section id="one" hidden aria-hidden="true" style="display:none;visibility:hidden;opacity:0"><h1>One</h1></section>
        <section id="two"><h1>Two</h1></section>
      </main>
    `, {
      stageSelector: "main",
      slides: [{ selector: "#one" }, { selector: "#two" }]
    });
    const slide = new DOMParser().parseFromString(result.html, "text/html").querySelector("#one") as HTMLElement;

    expect(slide.hasAttribute("hidden")).toBe(false);
    expect(slide.hasAttribute("aria-hidden")).toBe(false);
    expect(slide.style.display).toBe("");
    expect(slide.style.visibility).toBe("");
    expect(slide.style.opacity).toBe("");
  });

  it("turns truncated AI JSON into a readable retry message", () => {
    expect(() => parseAiAdaptationPlan('{"slides":[{"selector":"#one"}]')).toThrow("不完整或已被截断");
  });

  it("creates a preview through the one-step AI workflow", async () => {
    vi.stubGlobal("fetch", vi.fn(async () => new Response(JSON.stringify({
      choices: [{
        message: {
          content: JSON.stringify({
            stageSelector: "#presentation",
            slides: [{ selector: "#cover" }, { selector: "#details" }],
            editableTextSelectors: ["#cover h1", "#body"]
          })
        }
      }]
    }))));

    const result = await createAiAdaptationPreview(input([file("index.html", complexHtml())]), {
      ...defaultAiConfig,
      baseUrl: "https://api.example.com",
      apiKey: "sk-test",
      model: "test-model",
      stream: false
    });

    expect(result.preview.slideCount).toBe(2);
    expect(result.preview.textCount).toBe(2);
  });

  it("does not call the upstream API for locally unsupported HTML", async () => {
    const fetchMock = vi.fn(async () => new Response("{}"));
    vi.stubGlobal("fetch", fetchMock);

    await expect(createAiAdaptationPreview(input([
      file("index.html", "<article><h1>Blog</h1><p>Just one normal page.</p></article>")
    ]), {
      ...defaultAiConfig,
      baseUrl: "https://api.example.com",
      apiKey: "sk-test",
      model: "test-model",
      stream: false
    })).rejects.toThrow("不会调用上游 API");

    expect(fetchMock).not.toHaveBeenCalled();
  });

  it("allows user-selected AI adaptation for report-like HTML", async () => {
    const fetchMock = vi.fn(async () => new Response(JSON.stringify({
      choices: [{
        message: {
          content: JSON.stringify({
            slides: [{ selector: "#report", title: "Report" }],
            editableTextSelectors: ["#report h1", "#report h2"]
          })
        }
      }]
    })));
    vi.stubGlobal("fetch", fetchMock);

    const result = await createAiAdaptationPreview(input([
      file("index.html", reportLikeHtml())
    ]), {
      ...defaultAiConfig,
      baseUrl: "https://api.example.com",
      apiKey: "sk-test",
      model: "test-model",
      stream: false
    });

    expect(fetchMock).toHaveBeenCalledOnce();
    expect(result.preview.slideCount).toBe(1);
  });
});

function file(path: string, text: string): VirtualFile {
  const data = textToBytes(text);
  return { path, name: path.split("/").pop() || path, data, size: data.byteLength };
}

function input(files: VirtualFile[]): LoadedInput {
  return { kind: "zip", name: "sample", files };
}
