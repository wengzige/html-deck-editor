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
    window.getSelection()?.removeAllRanges();
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
    (window as any).editor?.destroy?.();
    window.getSelection()?.removeAllRanges();
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

  it("applies font size to selected text without replacing surrounding inline HTML", () => {
    document.body.innerHTML = `
      <div id="deckStage" class="deck-stage">
        <section class="slide active">
          <h1 id="title" style="font-size:96px">基于MaxEnt模型的<span style="font-style:italic">气候适宜性</span>评价</h1>
        </section>
      </div>
    `;
    const title = document.getElementById("title") as HTMLElement;
    title.getBoundingClientRect = () => rect({ left: 100, top: 100, width: 1100, height: 210 });

    installRuntime();
    const editor = (window as any).FrontendSlidesEditor.mount();
    editor.toggleEditMode(true);
    editor.select(title);

    const textNode = title.firstChild as Text;
    const range = document.createRange();
    range.setStart(textNode, 2);
    range.setEnd(textNode, 3);
    const selection = window.getSelection() as Selection;
    selection.removeAllRanges();
    selection.addRange(range);
    document.dispatchEvent(new Event("selectionchange"));

    const fontSize = document.getElementById("fontSizeInput") as HTMLInputElement;
    fontSize.value = "42";
    fontSize.dispatchEvent(new Event("change", { bubbles: true }));

    expect(title.innerHTML).toContain('<span style="font-size: 42px;">M</span>');
    expect(title.innerHTML).toContain('<span style="font-style:italic">气候适宜性</span>');
    expect(title.textContent).toBe("基于MaxEnt模型的气候适宜性评价");
  });

  it("does not remove user slide content with editor-like class names when exporting", () => {
    document.body.innerHTML = `
      <div id="deckStage" class="deck-stage">
        <section class="slide active">
          <h1 id="title">One slide</h1>
          <div class="editor-panel" data-keep="panel">Business panel</div>
          <div class="editor-frame" data-keep="frame">Business frame</div>
          <div class="editor-guide" data-keep="guide">Business guide</div>
          <button class="edit-toggle" data-keep="toggle">Open settings</button>
        </section>
      </div>
    `;

    installRuntime();
    const editor = (window as any).FrontendSlidesEditor.mount();
    editor.toggleEditMode(true);

    const html = editor.buildExportHtml();

    expect(html).toContain('class="editor-panel" data-keep="panel"');
    expect(html).toContain('class="editor-frame" data-keep="frame"');
    expect(html).toContain('class="editor-guide" data-keep="guide"');
    expect(html).toContain('class="edit-toggle" data-keep="toggle"');
    expect(html).not.toContain('id="editorShell"');
    expect(html).not.toContain('data-html-deck-editor-ui');
  });

  it("keeps editor panel scroll and keyboard events from reaching slide navigation handlers", () => {
    document.body.innerHTML = `
      <div id="deckStage" class="deck-stage">
        <section class="slide active"><h1 id="title">One slide</h1></section>
        <section class="slide"><h1>Two slide</h1></section>
      </div>
    `;

    installRuntime();
    const editor = (window as any).FrontendSlidesEditor.mount();
    editor.toggleEditMode(true);

    const wheelSpy = vi.fn();
    const keySpy = vi.fn();
    window.addEventListener("wheel", wheelSpy);
    window.addEventListener("keydown", keySpy);

    const panel = document.querySelector(".editor-panel") as HTMLElement;
    panel.dispatchEvent(new WheelEvent("wheel", { bubbles: true, deltaY: 120 }));

    const text = document.getElementById("textInput") as HTMLTextAreaElement;
    text.dispatchEvent(new KeyboardEvent("keydown", { bubbles: true, key: "ArrowDown" }));
    text.dispatchEvent(new KeyboardEvent("keydown", { bubbles: true, key: " " }));

    expect(wheelSpy).not.toHaveBeenCalled();
    expect(keySpy).not.toHaveBeenCalled();
  });

  it("applies text styles to a selected range instead of the whole text element", () => {
    document.body.innerHTML = `
      <div id="deckStage" class="deck-stage">
        <section class="slide active">
          <h1 id="title" style="font-size:96px">甲乙丙丁</h1>
        </section>
      </div>
    `;
    const title = document.getElementById("title") as HTMLElement;
    title.getBoundingClientRect = () => rect({ left: 100, top: 100, width: 600, height: 120 });

    installRuntime();
    const editor = (window as any).FrontendSlidesEditor.mount();
    editor.toggleEditMode(true);
    editor.select(title);

    const selectCharacter = (start: number, end: number) => {
      const textNode = title.firstChild as Text;
      const range = document.createRange();
      range.setStart(textNode, start);
      range.setEnd(textNode, end);
      const selection = window.getSelection() as Selection;
      selection.removeAllRanges();
      selection.addRange(range);
      document.dispatchEvent(new Event("selectionchange"));
    };

    selectCharacter(1, 2);
    const color = document.getElementById("colorInput") as HTMLInputElement;
    color.value = "#ff0000";
    color.dispatchEvent(new Event("change", { bubbles: true }));
    expect(title.innerHTML).toContain('甲<span style="color: rgb(255, 0, 0);">乙</span>丙丁');
    expect(title.style.color).toBe("");

    const styledText = title.querySelector("span")?.firstChild as Text;
    const range = document.createRange();
    range.setStart(styledText, 0);
    range.setEnd(styledText, 1);
    const selection = window.getSelection() as Selection;
    selection.removeAllRanges();
    selection.addRange(range);
    document.dispatchEvent(new Event("selectionchange"));
    const bg = document.getElementById("bgInput") as HTMLInputElement;
    bg.value = "#00ff00";
    bg.dispatchEvent(new Event("change", { bubbles: true }));

    const span = title.querySelector("span") as HTMLElement;
    expect(span.style.color).toBe("rgb(255, 0, 0)");
    expect(span.style.backgroundColor).toBe("rgb(0, 255, 0)");
    expect(title.style.backgroundColor).toBe("");
    expect(title.textContent).toBe("甲乙丙丁");
  });

  it("applies font family and opacity to selected text ranges", () => {
    document.body.innerHTML = `
      <div id="deckStage" class="deck-stage">
        <section class="slide active">
          <h1 id="title" style="font-size:96px">甲乙丙丁</h1>
        </section>
      </div>
    `;
    const title = document.getElementById("title") as HTMLElement;
    title.getBoundingClientRect = () => rect({ left: 100, top: 100, width: 600, height: 120 });

    installRuntime();
    const editor = (window as any).FrontendSlidesEditor.mount();
    editor.toggleEditMode(true);
    editor.select(title);

    const textNode = title.firstChild as Text;
    const range = document.createRange();
    range.setStart(textNode, 2);
    range.setEnd(textNode, 3);
    const selection = window.getSelection() as Selection;
    selection.removeAllRanges();
    selection.addRange(range);
    document.dispatchEvent(new Event("selectionchange"));

    const fontFamily = document.getElementById("fontFamilyInput") as HTMLSelectElement;
    fontFamily.value = '"SFMono-Regular", Consolas, "Liberation Mono", Menlo, monospace';
    fontFamily.dispatchEvent(new Event("change", { bubbles: true }));

    const styledText = title.querySelector("span")?.firstChild as Text;
    const opacityRange = document.createRange();
    opacityRange.setStart(styledText, 0);
    opacityRange.setEnd(styledText, 1);
    selection.removeAllRanges();
    selection.addRange(opacityRange);
    document.dispatchEvent(new Event("selectionchange"));

    const opacity = document.getElementById("opacityInput") as HTMLInputElement;
    opacity.value = "45";
    opacity.dispatchEvent(new Event("change", { bubbles: true }));

    const span = title.querySelector("span") as HTMLElement;
    expect(span.style.fontFamily).toContain("SFMono-Regular");
    expect(span.style.opacity).toBe("0.45");
    expect(title.style.fontFamily).toBe("");
    expect(title.style.opacity).toBe("");
    expect(title.textContent).toBe("甲乙丙丁");
  });

  it("applies styles to text selected in the inspector textarea", () => {
    document.body.innerHTML = `
      <div id="deckStage" class="deck-stage">
        <section class="slide active">
          <h1 id="title" style="font-size:96px">甲乙丙丁</h1>
        </section>
      </div>
    `;
    const title = document.getElementById("title") as HTMLElement;
    title.getBoundingClientRect = () => rect({ left: 100, top: 100, width: 600, height: 120 });

    installRuntime();
    const editor = (window as any).FrontendSlidesEditor.mount();
    editor.toggleEditMode(true);
    editor.select(title);

    const text = document.getElementById("textInput") as HTMLTextAreaElement;
    text.focus();
    text.setSelectionRange(2, 3);
    text.dispatchEvent(new Event("select", { bubbles: true }));

    const color = document.getElementById("colorInput") as HTMLInputElement;
    color.dispatchEvent(new Event("pointerdown", { bubbles: true }));
    color.value = "#0000ff";
    color.dispatchEvent(new Event("change", { bubbles: true }));

    const span = title.querySelector("span") as HTMLElement;
    expect(span.textContent).toBe("丙");
    expect(span.style.color).toBe("rgb(0, 0, 255)");
    expect(title.style.color).toBe("");
    expect(title.textContent).toBe("甲乙丙丁");
  });

  it("maps inspector text selection across existing inline HTML", () => {
    document.body.innerHTML = `
      <div id="deckStage" class="deck-stage">
        <section class="slide active">
          <h1 id="title" style="font-size:96px">甲<span style="font-style:italic">乙丙</span>丁</h1>
        </section>
      </div>
    `;
    const title = document.getElementById("title") as HTMLElement;
    title.getBoundingClientRect = () => rect({ left: 100, top: 100, width: 600, height: 120 });

    installRuntime();
    const editor = (window as any).FrontendSlidesEditor.mount();
    editor.toggleEditMode(true);
    editor.select(title);

    const text = document.getElementById("textInput") as HTMLTextAreaElement;
    text.focus();
    text.setSelectionRange(1, 3);
    text.dispatchEvent(new Event("select", { bubbles: true }));

    const bg = document.getElementById("bgInput") as HTMLInputElement;
    bg.dispatchEvent(new Event("pointerdown", { bubbles: true }));
    bg.value = "#ffff00";
    bg.dispatchEvent(new Event("change", { bubbles: true }));

    expect(title.innerHTML).toContain('font-style:italic');
    expect(title.querySelector("span[style*='background-color']")?.textContent).toBe("乙丙");
    expect(title.style.backgroundColor).toBe("");
    expect(title.textContent).toBe("甲乙丙丁");
  });

  it("toggles bold on a selected range from the slide", () => {
    document.body.innerHTML = `
      <div id="deckStage" class="deck-stage">
        <section class="slide active">
          <h1 id="title" style="font-size:96px;font-weight:400">甲乙丙丁</h1>
        </section>
      </div>
    `;
    const title = document.getElementById("title") as HTMLElement;
    title.getBoundingClientRect = () => rect({ left: 100, top: 100, width: 600, height: 120 });

    installRuntime();
    const editor = (window as any).FrontendSlidesEditor.mount();
    editor.toggleEditMode(true);
    editor.select(title);

    const textNode = title.firstChild as Text;
    const range = document.createRange();
    range.setStart(textNode, 0);
    range.setEnd(textNode, 1);
    const selection = window.getSelection() as Selection;
    selection.removeAllRanges();
    selection.addRange(range);
    document.dispatchEvent(new Event("selectionchange"));

    const bold = document.getElementById("fontWeightBtn") as HTMLButtonElement;
    bold.click();

    const span = title.querySelector("span") as HTMLElement;
    expect(span.textContent).toBe("甲");
    expect(span.style.fontWeight).toBe("700");
    expect(title.style.fontWeight).toBe("400");
    expect(bold.getAttribute("aria-pressed")).toBe("true");
    expect(title.textContent).toBe("甲乙丙丁");
  });

  it("toggles italic on text selected in the inspector textarea", () => {
    document.body.innerHTML = `
      <div id="deckStage" class="deck-stage">
        <section class="slide active">
          <h1 id="title" style="font-size:96px">甲乙丙丁</h1>
        </section>
      </div>
    `;
    const title = document.getElementById("title") as HTMLElement;
    title.getBoundingClientRect = () => rect({ left: 100, top: 100, width: 600, height: 120 });

    installRuntime();
    const editor = (window as any).FrontendSlidesEditor.mount();
    editor.toggleEditMode(true);
    editor.select(title);

    const text = document.getElementById("textInput") as HTMLTextAreaElement;
    text.focus();
    text.setSelectionRange(3, 4);
    text.dispatchEvent(new Event("select", { bubbles: true }));

    const italic = document.getElementById("fontStyleBtn") as HTMLButtonElement;
    italic.dispatchEvent(new Event("pointerdown", { bubbles: true }));
    italic.click();

    const span = title.querySelector("span") as HTMLElement;
    expect(span.textContent).toBe("丁");
    expect(span.style.fontStyle).toBe("italic");
    expect(title.style.fontStyle).toBe("");
    expect(italic.getAttribute("aria-pressed")).toBe("true");
    expect(title.textContent).toBe("甲乙丙丁");
  });

});
