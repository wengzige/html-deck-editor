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
    expect(editorCss).toContain("outline: 1px dashed rgba(23, 98, 74, 0.92);");
    const unguardedEditingSelectors = editorCss.match(/body\.editing(?!:not\(\.html-deck-editor-exporting\))/g) || [];
    expect(unguardedEditingSelectors).toEqual([]);
  });

  it("uses the shared brand palette for injected editor chrome", () => {
    expect(editorCss).toContain("background: var(--paper, #f3f0e7);");
    expect(editorCss).toContain("background: #17624a;");
    expect(editorCss).not.toContain("#1f2be0");
    expect(editorCss).not.toContain("rgba(31, 43, 224");
  });

  it("hides preserved host chrome only while the editor is active", () => {
    const rule = editorCss.match(/body\.editing:not\(\.html-deck-editor-exporting\) \[data-html-deck-editor-host-chrome\] \{[\s\S]*?\n    \}/)?.[0] || "";

    expect(rule).toContain("visibility: hidden !important;");
    expect(rule).toContain("opacity: 0 !important;");
    expect(rule).toContain("pointer-events: none !important;");
  });

  it("anchors preserved stages to the viewport before applying editor zoom", () => {
    const rule = editorCss.match(/body\.editing:not\(\.html-deck-editor-exporting\) \[data-html-deck-editor-stage="preserve"\]:not\(\[data-html-deck-editor-native-layout\]\) \{[\s\S]*?\n    \}/)?.[0] || "";

    expect(rule).toContain("position: fixed !important;");
    expect(rule).toContain("left: 0 !important;");
    expect(rule).toContain("top: 0 !important;");
    expect(rule).toContain("margin: 0 !important;");
    expect(rule).toContain("transform: translate(var(--html-deck-editor-stage-x");
    expect(rule).toContain("transition: none !important;");
  });

  it("does not apply generic stage transforms to native deck-stage layouts", () => {
    const rule = editorCss.match(/body\.editing:not\(\.html-deck-editor-exporting\) \[data-html-deck-editor-stage="preserve"\]\[data-html-deck-editor-native-layout\] \{[\s\S]*?\n    \}/)?.[0] || "";

    expect(rule).toContain("transform: none !important;");
    expect(rule).toContain("transform-origin: initial !important;");
    expect(rule).toContain("transition: none !important;");
  });

  it("keeps editor panels above the selected-element frame", () => {
    expect(editorCss).toMatch(/\.editor-panel \{[\s\S]*?z-index: 900;/);
    expect(editorCss).toMatch(/\.editor-frame \{[\s\S]*?z-index: 850;/);
  });
});
