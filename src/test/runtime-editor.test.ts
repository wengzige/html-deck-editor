import { afterEach, beforeEach, describe, expect, it, vi } from "vitest";
import editorRuntime from "../runtime/html-deck-editor-base.js?raw";

type RectInput = {
  left: number;
  top: number;
  width: number;
  height: number;
};

function rect({ left, top, width, height }: RectInput): DOMRect {
  return {
    x: left,
    y: top,
    left,
    top,
    width,
    height,
    right: left + width,
    bottom: top + height,
    toJSON: () => ({ left, top, width, height })
  } as DOMRect;
}

function installRuntime(): void {
  window.eval(editorRuntime);
}

const originalGetBoundingClientRect = Element.prototype.getBoundingClientRect;

describe("editor runtime", () => {
  beforeEach(() => {
    document.body.innerHTML = "";
    document.head.innerHTML = "";
    const storage = new Map<string, string>();
    vi.stubGlobal("localStorage", {
      getItem: vi.fn((key: string) => storage.get(key) || null),
      setItem: vi.fn((key: string, value: string) => storage.set(key, String(value))),
      removeItem: vi.fn((key: string) => storage.delete(key)),
      clear: vi.fn(() => storage.clear())
    });
    delete (window as any).FrontendSlidesEditor;
    delete (window as any).editor;
    Object.defineProperty(window, "innerWidth", { value: 1440, configurable: true });
    Object.defineProperty(window, "innerHeight", { value: 900, configurable: true });
  });

  afterEach(() => {
    Element.prototype.getBoundingClientRect = originalGetBoundingClientRect;
    vi.unstubAllGlobals();
  });

  it("recognizes large heading text with inline emphasis as one editable text target", () => {
    document.body.innerHTML = `
      <div id="deckStage" class="deck-stage">
        <section class="slide active">
          <h1 id="title" style="font-size:96px">基于MaxEnt模型的<span style="font-style:italic">气候适宜性</span>评价</h1>
          <div id="subtitle" style="font-size:28px">明显的大号说明文字</div>
        </section>
        <section class="slide"><h2>Second slide</h2></section>
      </div>
    `;
    const title = document.getElementById("title") as HTMLElement;
    const subtitle = document.getElementById("subtitle") as HTMLElement;
    const inline = title.querySelector("span") as HTMLElement;
    title.getBoundingClientRect = () => rect({ left: 100, top: 100, width: 1100, height: 210 });
    subtitle.getBoundingClientRect = () => rect({ left: 120, top: 340, width: 420, height: 44 });
    inline.getBoundingClientRect = () => rect({ left: 520, top: 160, width: 360, height: 92 });

    installRuntime();
    (window as any).FrontendSlidesEditor.mount();

    expect(title.dataset.editorKind).toBe("text");
    expect(inline.dataset.editorKind).toBeUndefined();
    expect(subtitle.dataset.editorKind).toBe("text");
  });

  it("moves preserved HTML slides into the editor safe area instead of leaving panels over the canvas", () => {
    document.body.innerHTML = `
      <div id="deck" data-html-deck-editor-stage="preserve" data-html-deck-editor-navigation="horizontal">
        <section class="slide active"><h1>One</h1></section>
        <section class="slide"><h1>Two</h1></section>
      </div>
    `;

    Element.prototype.getBoundingClientRect = function getBoundingClientRect() {
      const element = this as HTMLElement;
      if (element.classList.contains("editor-toolbar")) return rect({ left: 12, top: 12, width: 1416, height: 52 });
      if (element.classList.contains("editor-slides")) return rect({ left: 12, top: 76, width: 242, height: 810 });
      if (element.classList.contains("editor-panel")) return rect({ left: 1086, top: 76, width: 342, height: 810 });
      if (element.classList.contains("slide")) return rect({ left: 0, top: 0, width: 1440, height: 900 });
      if (element.id === "deck") return rect({ left: 0, top: 0, width: 14400, height: 900 });
      return rect({ left: 0, top: 0, width: 100, height: 40 });
    };

    installRuntime();
    const editor = (window as any).FrontendSlidesEditor.mount();
    editor.toggleEditMode(true);

    const slide = document.querySelector(".slide") as HTMLElement;
    const x = Number.parseFloat(slide.style.getPropertyValue("--html-deck-editor-slide-x"));
    const y = Number.parseFloat(slide.style.getPropertyValue("--html-deck-editor-slide-y"));
    const scale = Number.parseFloat(slide.style.getPropertyValue("--html-deck-editor-slide-scale"));

    expect(x).toBeGreaterThanOrEqual(266);
    expect(y).toBeGreaterThanOrEqual(76);
    expect(scale).toBeLessThan(1);
  });
});
