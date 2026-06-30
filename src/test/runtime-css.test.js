import { readFileSync } from "node:fs";
import { describe, expect, it } from "vitest";

const editorCss = readFileSync("src/runtime/html-deck-editor.css", "utf8");

describe("editor runtime css", () => {
  it("keeps custom editor motion visible on common active slide states", () => {
    const activeSlideSelector = ".slide:is(.visible, .active, [data-deck-active], [data-html-deck-editor-current])";

    expect(editorCss).toContain(`${activeSlideSelector} .editor-anim-rise`);
    expect(editorCss).toContain(`${activeSlideSelector} .edit-moved.editor-anim-rise`);
    expect(editorCss).toContain(`${activeSlideSelector} .editor-motion-parent-stable`);
    expect(editorCss).toContain("[data-html-deck-editor-motion-hold]:not(.editor-motion-preview):not(.editor-motion-running)");
  });

  it("keeps the export page picker scrollable inside the modal", () => {
    expect(editorCss).toContain(".editor-shell[data-html-deck-editor-ui] .editor-export-card");
    expect(editorCss).toContain("max-height: min(720px, calc(100dvh - 48px));");
    expect(editorCss).toContain("overflow: hidden;");
    expect(editorCss).toContain(".editor-shell[data-html-deck-editor-ui] .editor-export-pages");
    expect(editorCss).toContain("max-height: min(320px, 38dvh);");
    expect(editorCss).toContain("overscroll-behavior: contain;");
  });

  it("keeps edit outlines normally but disables every editing-only rule during export", () => {
    expect(editorCss).toContain("body.editing:not(.html-deck-editor-exporting) [data-editable]");
    expect(editorCss).toContain("outline: 1px dashed rgba(31, 43, 224, 0.92);");
    const unguardedEditingSelectors = editorCss.match(/body\.editing(?!:not\(\.html-deck-editor-exporting\))/g) || [];
    expect(unguardedEditingSelectors).toEqual([]);
  });
});
