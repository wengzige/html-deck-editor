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

  it("parses fenced JSON adaptation plans", () => {
    const plan = parseAiAdaptationPlan("```json\n{\"slides\":[{\"selector\":\"#a\"},{\"selector\":\"#b\"}]}\n```");

    expect(plan.slides?.[0].selector).toBe("#a");
  });

  it("rejects plans without at least two valid slides", () => {
    expect(() => previewAiAdaptationPlan(complexHtml(), {
      slides: [{ selector: "#cover" }]
    })).toThrow("至少 2 页");
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
});

function file(path: string, text: string): VirtualFile {
  const data = textToBytes(text);
  return { path, name: path.split("/").pop() || path, data, size: data.byteLength };
}

function input(files: VirtualFile[]): LoadedInput {
  return { kind: "zip", name: "sample", files };
}
