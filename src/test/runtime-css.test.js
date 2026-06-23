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
});
