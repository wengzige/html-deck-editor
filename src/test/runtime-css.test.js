import { readFileSync } from "node:fs";
import { describe, expect, it } from "vitest";

const editorCss = readFileSync("src/runtime/html-deck-editor.css", "utf8");

describe("editor runtime css", () => {
  it("keeps custom editor motion visible on common active slide states", () => {
    const activeSlideSelector = ".slide:is(.visible, .active, [data-deck-active], [data-html-deck-editor-current])";

    expect(editorCss).toContain(`${activeSlideSelector} .editor-anim-rise`);
    expect(editorCss).toContain(`${activeSlideSelector} .edit-moved.editor-anim-rise`);
    expect(editorCss).toContain(`${activeSlideSelector} .editor-motion-parent-stable`);
  });

  it("keeps the export page picker scrollable inside the modal", () => {
    expect(editorCss).toContain(".editor-shell[data-html-deck-editor-ui] .editor-export-card");
    expect(editorCss).toContain("max-height: min(720px, calc(100dvh - 48px));");
    expect(editorCss).toContain("overflow: hidden;");
    expect(editorCss).toContain(".editor-shell[data-html-deck-editor-ui] .editor-export-pages");
    expect(editorCss).toContain("max-height: min(320px, 38dvh);");
    expect(editorCss).toContain("overscroll-behavior: contain;");
  });
});
