import { afterEach, beforeEach, describe, expect, it, vi } from "vitest";
import editorRuntime from "../runtime/html-deck-editor-base.js?raw";
import editorCss from "../runtime/html-deck-editor.css?raw";

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
  const style = document.createElement("style");
  style.textContent = editorCss;
  document.head.appendChild(style);
  window.eval(editorRuntime);
}

function installPickerStub(): any[] {
  const instances: any[] = [];
  class PickerStub {
    options: any;
    color = "";
    destroyed = false;
    onChange?: (color: any) => void;
    onDone?: (color: any) => void;

    constructor(options: any) {
      this.options = options;
      instances.push(this);
      const root = document.createElement("div");
      root.className = "picker_wrapper layout_default";
      options.parent.appendChild(root);
    }

    setColor(color: string): void {
      this.color = color;
    }

    show(): boolean {
      return true;
    }

    destroy(): void {
      this.destroyed = true;
    }
  }
  vi.stubGlobal("Picker", PickerStub);
  return instances;
}

function pickerColor(hex: string): any {
  return { hex, rgbString: hex, rgbaString: hex };
}

function chooseBackground(value: string): void {
  const bg = document.getElementById("bgInput") as HTMLButtonElement;
  bg.click();
  const choice = document.querySelector(`[data-bg-value="${value}"]`) as HTMLButtonElement;
  expect(choice).toBeTruthy();
  choice.click();
}

function chooseTextColor(value: string): void {
  const color = document.getElementById("colorButton") as HTMLButtonElement;
  color.click();
  const choice = document.querySelector(`[data-color-value="${value}"]`) as HTMLButtonElement;
  expect(choice).toBeTruthy();
  choice.click();
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
    delete (window as any).__currentSlideIndex;
    delete (window as any).__playSlide;
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

  it("selects the whole heading when clicking inline highlighted text inside it", () => {
    document.body.innerHTML = `
      <div id="deckStage" class="deck-stage">
        <section class="slide active">
          <h2 id="headline" style="font-size:92px;line-height:1.08">烤烟种植的<mark id="highlight">气候适宜性</mark><br>直接决定烟叶品质与产量</h2>
        </section>
      </div>
    `;
    const headline = document.getElementById("headline") as HTMLElement;
    const highlight = document.getElementById("highlight") as HTMLElement;
    headline.getBoundingClientRect = () => rect({ left: 120, top: 100, width: 1040, height: 230 });
    highlight.getBoundingClientRect = () => rect({ left: 520, top: 116, width: 360, height: 92 });

    installRuntime();
    const editor = (window as any).FrontendSlidesEditor.mount();
    editor.toggleEditMode(true);

    expect(headline.dataset.editorKind).toBe("text");
    expect(highlight.dataset.editorKind).toBeUndefined();

    highlight.dispatchEvent(new Event("pointerdown", { bubbles: true }));
    highlight.click();

    expect(editor.selected).toBe(headline);
    expect(headline.classList.contains("editor-selected")).toBe(true);
    expect(highlight.classList.contains("editor-selected")).toBe(false);
  });

  it("recognizes semantic headings inside animated wrapper divs without selecting the wrapper text block", () => {
    document.body.innerHTML = `
      <style>
        body.motion-ready [data-anim="line"] { opacity: 0; transform: translateY(10px); }
      </style>
      <div id="deckStage" class="deck-stage">
        <section class="slide active">
          <div id="wrapper" data-anim="line" style="display:flex;flex-direction:column;gap:12px;opacity:0">
            <div class="t-cat">WHY THIS MATTERS</div>
            <h2 id="headline" style="font-size:82px;line-height:1.05">复杂 HTML 的大标题</h2>
          </div>
        </section>
      </div>
    `;
    document.body.classList.add("motion-ready");
    const wrapper = document.getElementById("wrapper") as HTMLElement;
    const headline = document.getElementById("headline") as HTMLElement;
    wrapper.getBoundingClientRect = () => rect({ left: 100, top: 100, width: 980, height: 180 });
    headline.getBoundingClientRect = () => rect({ left: 100, top: 148, width: 900, height: 108 });

    installRuntime();
    (window as any).FrontendSlidesEditor.mount();

    expect(headline.dataset.editorKind).toBe("text");
    expect(wrapper.dataset.editorKind).toBeUndefined();
  });

  it("keeps decorative background motion running while holding text animation wrappers for editing", () => {
    document.body.innerHTML = `
      <div id="deckStage" class="deck-stage">
        <section class="slide active">
          <div id="background" class="reveal" data-anim="background" data-editable-box style="background:#111;animation:drift 8s linear infinite"></div>
          <div id="wrapper" data-anim="line" style="opacity:0">
            <h2 id="headline" style="font-size:82px">Animated title</h2>
          </div>
        </section>
      </div>
    `;
    const background = document.getElementById("background") as HTMLElement;
    const wrapper = document.getElementById("wrapper") as HTMLElement;
    const headline = document.getElementById("headline") as HTMLElement;
    background.getBoundingClientRect = () => rect({ left: 0, top: 0, width: 1440, height: 900 });
    wrapper.getBoundingClientRect = () => rect({ left: 100, top: 100, width: 900, height: 120 });
    headline.getBoundingClientRect = () => rect({ left: 100, top: 112, width: 720, height: 92 });

    installRuntime();
    const editor = (window as any).FrontendSlidesEditor.mount();
    editor.toggleEditMode(true);

    expect(background.dataset.editorKind).toBe("box");
    expect(headline.dataset.editorKind).toBe("text");
    expect(background.hasAttribute("data-html-deck-editor-motion-hold")).toBe(false);
    expect(background.style.getPropertyValue("--html-deck-editor-edit-opacity")).toBe("");
    expect(wrapper.hasAttribute("data-html-deck-editor-motion-hold")).toBe(true);
    expect(wrapper.style.getPropertyValue("--html-deck-editor-edit-opacity")).toBe("1");
  });

  it("recognizes compact eyebrow labels as editable text without marking their layout wrapper", () => {
    document.body.innerHTML = `
      <div id="deckStage" class="deck-stage">
        <section class="slide active">
          <div id="chrome" style="display:flex;justify-content:space-between">
            <div id="crumb" class="l" style="font-size:11px;letter-spacing:.16em;text-transform:uppercase">气候因子分析 · FACTOR CONTRIBUTION</div>
            <div id="page" class="r" style="font-size:11px;letter-spacing:.16em">05 / 15</div>
          </div>
          <div id="titleBlock" data-anim="line" style="display:flex;flex-direction:column;gap:10px">
            <div id="tag" class="t-cat accent" style="font-size:11px;letter-spacing:.18em;text-transform:uppercase">PERCENT CONTRIBUTION</div>
            <h2 id="headline" style="font-size:74px">气候因子贡献率排名</h2>
          </div>
        </section>
      </div>
    `;
    const chrome = document.getElementById("chrome") as HTMLElement;
    const crumb = document.getElementById("crumb") as HTMLElement;
    const page = document.getElementById("page") as HTMLElement;
    const titleBlock = document.getElementById("titleBlock") as HTMLElement;
    const tag = document.getElementById("tag") as HTMLElement;
    const headline = document.getElementById("headline") as HTMLElement;
    chrome.getBoundingClientRect = () => rect({ left: 80, top: 44, width: 1280, height: 18 });
    crumb.getBoundingClientRect = () => rect({ left: 80, top: 44, width: 330, height: 16 });
    page.getBoundingClientRect = () => rect({ left: 1300, top: 44, width: 60, height: 16 });
    titleBlock.getBoundingClientRect = () => rect({ left: 80, top: 110, width: 900, height: 120 });
    tag.getBoundingClientRect = () => rect({ left: 80, top: 110, width: 210, height: 16 });
    headline.getBoundingClientRect = () => rect({ left: 80, top: 136, width: 820, height: 82 });

    installRuntime();
    (window as any).FrontendSlidesEditor.mount();

    expect(crumb.dataset.editorKind).toBe("text");
    expect(page.dataset.editorKind).toBe("text");
    expect(tag.dataset.editorKind).toBe("text");
    expect(headline.dataset.editorKind).toBe("text");
    expect(chrome.dataset.editorKind).toBeUndefined();
    expect(titleBlock.dataset.editorKind).toBeUndefined();
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

    const stage = document.getElementById("deck") as HTMLElement;
    const x = Number.parseFloat(stage.style.getPropertyValue("--html-deck-editor-stage-x"));
    const y = Number.parseFloat(stage.style.getPropertyValue("--html-deck-editor-stage-y"));
    const scale = Number.parseFloat(stage.style.getPropertyValue("--html-deck-editor-stage-scale"));

    expect(x).toBeGreaterThanOrEqual(266);
    expect(y).toBeGreaterThanOrEqual(76);
    expect(scale).toBeLessThan(1);
    expect(document.querySelector(".slide")?.hasAttribute("data-html-deck-editor-current")).toBe(true);
    expect(document.querySelector(".slide")?.hasAttribute("data-html-deck-editor-page")).toBe(true);
  });

  it("lays out preserved native deck-stage tags without requiring the web component API", () => {
    document.body.innerHTML = `
      <deck-stage id="deckStage" width="1920" height="1080" data-html-deck-editor-stage="preserve">
        <section class="slide active visible"><h1>One</h1></section>
        <section class="slide"><h1>Two</h1></section>
      </deck-stage>
    `;

    Element.prototype.getBoundingClientRect = function getBoundingClientRect() {
      const element = this as HTMLElement;
      if (element.classList.contains("editor-toolbar")) return rect({ left: 12, top: 12, width: 1416, height: 52 });
      if (element.classList.contains("editor-slides")) return rect({ left: 12, top: 76, width: 242, height: 810 });
      if (element.classList.contains("editor-panel")) return rect({ left: 1086, top: 76, width: 342, height: 810 });
      if (element.id === "deckStage") return rect({ left: 0, top: 0, width: 1920, height: 1080 });
      if (element.classList.contains("slide")) return rect({ left: 0, top: 0, width: 1920, height: 1080 });
      return rect({ left: 0, top: 0, width: 100, height: 40 });
    };

    installRuntime();
    const editor = (window as any).FrontendSlidesEditor.mount();
    editor.toggleEditMode(true);

    const stage = document.getElementById("deckStage") as HTMLElement;
    const scale = Number.parseFloat(stage.style.getPropertyValue("--html-deck-editor-stage-scale"));

    expect(typeof (stage as any).fit).toBe("undefined");
    expect(scale).toBeGreaterThan(0);
    expect(scale).toBeLessThan(1);
  });

  it("keeps preserved horizontal slides addressable in edit mode without removing later pages", () => {
    document.body.innerHTML = `
      <div id="deck" data-html-deck-editor-stage="preserve" data-html-deck-editor-navigation="horizontal" style="transform:translateX(-200vw)">
        <section class="slide"><h1>One</h1></section>
        <section class="slide"><h1>Two</h1></section>
        <section class="slide"><h1>Three</h1><div class="row-fill" style="opacity:0;transform:translateY(30px)">Shown while editing</div></section>
      </div>
    `;
    (window as any).__currentSlideIndex = 2;
    const playSlide = vi.fn();
    (window as any).__playSlide = playSlide;
    const sourceSlides = Array.from(document.querySelectorAll(".slide")) as HTMLElement[];
    sourceSlides.forEach((slide, index) => {
      Object.defineProperty(slide, "offsetLeft", { value: index * 1440, configurable: true });
    });

    Element.prototype.getBoundingClientRect = function getBoundingClientRect() {
      const element = this as HTMLElement;
      if (element.classList.contains("editor-toolbar")) return rect({ left: 12, top: 12, width: 1416, height: 52 });
      if (element.classList.contains("editor-slides")) return rect({ left: 12, top: 76, width: 242, height: 810 });
      if (element.classList.contains("editor-panel")) return rect({ left: 1086, top: 76, width: 342, height: 810 });
      if (element.classList.contains("slide")) return rect({ left: 0, top: 0, width: 1440, height: 900 });
      if (element.id === "deck") return rect({ left: 0, top: 0, width: 4320, height: 900 });
      return rect({ left: 0, top: 0, width: 100, height: 40 });
    };

    installRuntime();
    const editor = (window as any).FrontendSlidesEditor.mount();
    editor.toggleEditMode(true);

    const slides = Array.from(document.querySelectorAll(".slide")) as HTMLElement[];
    expect(slides).toHaveLength(3);
    expect(slides[2].hasAttribute("data-html-deck-editor-current")).toBe(true);
    expect((document.getElementById("deck") as HTMLElement).style.getPropertyValue("--html-deck-editor-current-slide")).toBe("2");
    expect((document.getElementById("deck") as HTMLElement).style.getPropertyValue("--html-deck-editor-slide-offset-x")).toBe("2880px");
    expect((document.querySelector(".row-fill") as HTMLElement).style.getPropertyValue("--html-deck-editor-edit-opacity")).toBe("1");

    editor.presentation.showSlide(1);
    expect(slides[1].hasAttribute("data-html-deck-editor-current")).toBe(true);
    expect((document.getElementById("deck") as HTMLElement).style.transform).toBe("translateX(-1440px)");
    expect((document.getElementById("deck") as HTMLElement).style.getPropertyValue("--html-deck-editor-slide-offset-x")).toBe("1440px");
    expect(playSlide).toHaveBeenCalledWith(1);
  });

  it("reveals slides that were originally hidden when navigating in the editor", () => {
    document.body.innerHTML = `
      <div id="deck" data-html-deck-editor-stage="preserve" data-html-deck-editor-navigation="horizontal">
        <section class="slide active"><h1>One</h1></section>
        <section class="slide hidden opacity-0 invisible" hidden style="display:none;visibility:hidden;opacity:0">
          <h1>Two</h1>
        </section>
      </div>
    `;
    const sourceSlides = Array.from(document.querySelectorAll(".slide")) as HTMLElement[];
    sourceSlides.forEach((slide, index) => {
      Object.defineProperty(slide, "offsetLeft", { value: index * 1440, configurable: true });
    });

    installRuntime();
    const editor = (window as any).FrontendSlidesEditor.mount();
    editor.toggleEditMode(true);
    editor.presentation.showSlide(1);

    expect(sourceSlides[1].hasAttribute("hidden")).toBe(false);
    expect(sourceSlides[1].classList.contains("hidden")).toBe(false);
    expect(sourceSlides[1].classList.contains("opacity-0")).toBe(false);
    expect(sourceSlides[1].classList.contains("invisible")).toBe(false);
    expect(sourceSlides[1].style.display).toBe("");
    expect(sourceSlides[1].style.visibility).toBe("");
    expect(sourceSlides[1].style.opacity).toBe("");
    expect(sourceSlides[1].hasAttribute("data-html-deck-editor-current")).toBe(true);
  });

  it("binds editable text after navigating to a slide that was originally hidden", () => {
    document.body.innerHTML = `
      <div id="deck" data-html-deck-editor-stage="preserve" data-html-deck-editor-navigation="horizontal">
        <section class="slide active"><h1>One</h1></section>
        <section class="slide hidden opacity-0 invisible" hidden style="display:none;visibility:hidden;opacity:0">
          <h1 id="hiddenTitle">Hidden title</h1>
        </section>
      </div>
    `;
    const sourceSlides = Array.from(document.querySelectorAll(".slide")) as HTMLElement[];
    sourceSlides.forEach((slide, index) => {
      Object.defineProperty(slide, "offsetLeft", { value: index * 1440, configurable: true });
    });
    const hiddenTitle = document.getElementById("hiddenTitle") as HTMLElement;
    hiddenTitle.getBoundingClientRect = () => {
      const hiddenSlide = sourceSlides[1];
      if (
        hiddenSlide.hasAttribute("hidden") ||
        hiddenSlide.classList.contains("hidden") ||
        hiddenSlide.style.display === "none"
      ) {
        return rect({ left: 0, top: 0, width: 0, height: 0 });
      }
      return rect({ left: 100, top: 100, width: 620, height: 110 });
    };

    installRuntime();
    const editor = (window as any).FrontendSlidesEditor.mount();
    editor.toggleEditMode(true);

    expect(hiddenTitle.dataset.editorKind).toBeUndefined();

    editor.presentation.showSlide(1);
    hiddenTitle.click();

    expect(hiddenTitle.dataset.editorKind).toBe("text");
    expect(editor.selected).toBe(hiddenTitle);
    expect(hiddenTitle.classList.contains("editor-selected")).toBe(true);
  });

  it("reveals CSS-animated text that starts transparent in imported decks", () => {
    document.body.innerHTML = `
      <style>
        .slide-title {
          opacity: 0;
          animation: fadeUp 0.7s 0.3s both;
        }
        @keyframes fadeUp {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
      </style>
      <div id="slidesWrapper" data-html-deck-editor-stage="preserve" data-html-deck-editor-navigation="horizontal">
        <div class="slide active"><h1 id="title" class="slide-title">Animated title</h1></div>
        <div class="slide"><h1>Second slide</h1></div>
      </div>
    `;
    const title = document.getElementById("title") as HTMLElement;
    title.getBoundingClientRect = () => rect({ left: 120, top: 140, width: 720, height: 96 });

    installRuntime();
    const editor = (window as any).FrontendSlidesEditor.mount();
    editor.toggleEditMode(true);

    expect(title.dataset.editorKind).toBe("text");
    expect(title.hasAttribute("data-html-deck-editor-motion-hold")).toBe(true);
    expect(title.style.getPropertyValue("--html-deck-editor-edit-opacity")).toBe("1");
  });

  it("reveals CSS-animated ancestors that hide editable slide text", () => {
    document.body.innerHTML = `
      <style>
        .card {
          opacity: 0;
          animation: fadeUp 0.7s 0.3s both;
        }
        @keyframes fadeUp {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
      </style>
      <div id="slidesWrapper" data-html-deck-editor-stage="preserve" data-html-deck-editor-navigation="horizontal">
        <div class="slide active">
          <div id="card" class="card" style="transform: translateX(-50%);"><h2 id="title">Card title</h2></div>
        </div>
        <div class="slide"><h1>Second slide</h1></div>
      </div>
    `;
    const card = document.getElementById("card") as HTMLElement;
    const title = document.getElementById("title") as HTMLElement;
    card.getBoundingClientRect = () => rect({ left: 100, top: 100, width: 520, height: 180 });
    title.getBoundingClientRect = () => rect({ left: 128, top: 128, width: 360, height: 58 });

    installRuntime();
    const editor = (window as any).FrontendSlidesEditor.mount();
    editor.toggleEditMode(true);

    expect(title.dataset.editorKind).toBe("text");
    expect(card.hasAttribute("data-html-deck-editor-motion-hold")).toBe(true);
    expect(card.style.getPropertyValue("--html-deck-editor-edit-opacity")).toBe("1");
    expect(getComputedStyle(card).transform).toContain("translateX");
  });

  it("uses actual slide offsets for preserved horizontal decks that are not one viewport wide", () => {
    document.body.innerHTML = `
      <div id="deck" data-html-deck-editor-stage="preserve" data-html-deck-editor-navigation="horizontal" style="transform:translateX(-1800px)">
        <section class="slide"><h1>One</h1></section>
        <section class="slide"><h1>Two</h1></section>
        <section class="slide"><h1>Three</h1></section>
      </div>
    `;
    const sourceSlides = Array.from(document.querySelectorAll(".slide")) as HTMLElement[];
    sourceSlides.forEach((slide, index) => {
      Object.defineProperty(slide, "offsetLeft", { value: index * 900, configurable: true });
    });

    Element.prototype.getBoundingClientRect = function getBoundingClientRect() {
      const element = this as HTMLElement;
      if (element.classList.contains("editor-toolbar")) return rect({ left: 12, top: 12, width: 1416, height: 52 });
      if (element.classList.contains("editor-slides")) return rect({ left: 12, top: 76, width: 242, height: 810 });
      if (element.classList.contains("editor-panel")) return rect({ left: 1086, top: 76, width: 342, height: 810 });
      if (element.classList.contains("slide")) return rect({ left: 0, top: 0, width: 900, height: 540 });
      if (element.id === "deck") return rect({ left: 0, top: 0, width: 2700, height: 540 });
      return rect({ left: 0, top: 0, width: 100, height: 40 });
    };

    installRuntime();
    const editor = (window as any).FrontendSlidesEditor.mount();
    editor.toggleEditMode(true);

    const deck = document.getElementById("deck") as HTMLElement;
    expect(sourceSlides[2].hasAttribute("data-html-deck-editor-current")).toBe(true);
    expect(deck.style.getPropertyValue("--html-deck-editor-slide-offset-x")).toBe("1800px");

    editor.presentation.showSlide(1);
    expect(deck.style.transform).toBe("translateX(-900px)");
    expect(deck.style.getPropertyValue("--html-deck-editor-slide-offset-x")).toBe("900px");
  });

  it("does not horizontally offset overlay-style imported slides in edit mode", () => {
    document.body.innerHTML = `
      <style>
        #slidesWrapper { position: relative; width: 100vw; height: 100vh; }
        #slidesWrapper > .slide {
          position: absolute;
          inset: 0;
          opacity: 0;
          pointer-events: none;
        }
        #slidesWrapper > .slide.active {
          opacity: 1;
          pointer-events: auto;
        }
      </style>
      <div id="slidesWrapper" data-html-deck-editor-stage="preserve" data-html-deck-editor-navigation="horizontal">
        <div class="slide active"><h1>One</h1></div>
        <div class="slide"><h1>Two</h1></div>
        <div class="slide"><h1>Three</h1></div>
      </div>
    `;
    const sourceSlides = Array.from(document.querySelectorAll("#slidesWrapper > .slide")) as HTMLElement[];
    sourceSlides.forEach((slide) => {
      Object.defineProperty(slide, "offsetLeft", { value: 0, configurable: true });
      Object.defineProperty(slide, "offsetTop", { value: 0, configurable: true });
    });

    installRuntime();
    const editor = (window as any).FrontendSlidesEditor.mount();
    editor.toggleEditMode(true);
    editor.presentation.showSlide(1);

    const stage = document.getElementById("slidesWrapper") as HTMLElement;
    expect(sourceSlides[1].hasAttribute("data-html-deck-editor-current")).toBe(true);
    expect(stage.style.transform).toBe("");
    expect(stage.style.getPropertyValue("--html-deck-editor-slide-offset-x")).toBe("0px");
    expect(sourceSlides[1].classList.contains("active")).toBe(true);
  });

  it("keeps moved CSS-animated imported boxes visible after layout edits", () => {
    document.body.innerHTML = `
      <style>
        .vocab-item {
          opacity: 0;
          animation: fadeUp 0.7s 0.3s both;
        }
        @keyframes fadeUp {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
      </style>
      <div id="slidesWrapper" data-html-deck-editor-stage="preserve">
        <div class="slide active" data-html-deck-editor-current>
          <div id="box" class="vocab-item" data-editable-box>
            <span>→ "均匀分开"</span>
            <strong>水平等间距分布</strong>
          </div>
        </div>
      </div>
    `;
    const slide = document.querySelector(".slide") as HTMLElement;
    const box = document.getElementById("box") as HTMLElement;
    slide.getBoundingClientRect = () => rect({ left: 0, top: 0, width: 1440, height: 900 });
    box.getBoundingClientRect = () => rect({ left: 180, top: 220, width: 480, height: 160 });

    installRuntime();
    const editor = (window as any).FrontendSlidesEditor.mount();
    editor.toggleEditMode(true);
    editor.select(box);

    const x = document.getElementById("xInput") as HTMLInputElement;
    x.value = "240";
    x.dispatchEvent(new Event("change", { bubbles: true }));

    expect(box.classList.contains("edit-moved")).toBe(true);
    expect(box.hasAttribute("data-html-deck-editor-motion-hold")).toBe(true);
    expect(box.style.getPropertyValue("--html-deck-editor-edit-opacity")).toBe("1");

    editor.toggleEditMode(false);

    expect(document.body.classList.contains("editing")).toBe(false);
    expect(box.classList.contains("html-deck-editor-edit-visible")).toBe(true);
    expect(box.style.getPropertyValue("--html-deck-editor-edit-opacity")).toBe("1");
    expect(getComputedStyle(box).opacity).toBe("1");
  });

  it("keeps preserved host navigation in sync after exiting edit mode", () => {
    document.body.innerHTML = `
      <button id="prevBtn" type="button">Prev</button>
      <button id="nextBtn" type="button">Next</button>
      <div class="nav-dot active"></div>
      <div class="nav-dot"></div>
      <div class="nav-dot"></div>
      <div id="slidesWrapper" data-html-deck-editor-stage="preserve">
        <div class="slide active"><h1>One</h1></div>
        <div class="slide"><h1>Two</h1></div>
        <div class="slide"><h1>Three</h1></div>
      </div>
    `;
    const slides = Array.from(document.querySelectorAll(".slide")) as HTMLElement[];
    let staleHostCurrent = 0;
    document.getElementById("nextBtn")?.addEventListener("click", () => {
      slides[staleHostCurrent].classList.remove("active");
      staleHostCurrent += 1;
      slides[staleHostCurrent]?.classList.add("active");
    });

    installRuntime();
    const editor = (window as any).FrontendSlidesEditor.mount();
    editor.toggleEditMode(true);
    editor.presentation.showSlide(1);
    editor.toggleEditMode(false);

    expect((window as any).__currentSlideIndex).toBe(1);
    expect((document.getElementById("slidesWrapper") as HTMLElement).dataset.htmlDeckEditorCurrentSlide).toBe("1");

    document.getElementById("nextBtn")?.click();

    expect(staleHostCurrent).toBe(0);
    expect(slides.map((slide) => slide.classList.contains("active"))).toEqual([false, false, true]);
    expect((window as any).__currentSlideIndex).toBe(2);
    expect(Array.from(document.querySelectorAll(".nav-dot")).map((dot) => dot.classList.contains("active"))).toEqual([false, false, true]);
  });

  it("uses only direct stage slides for preserved deck navigation", () => {
    document.body.innerHTML = `
      <div id="deck" data-html-deck-editor-stage="preserve" data-html-deck-editor-navigation="horizontal" style="transform:translate3d(-1800px, 0px, 0px)">
        <section class="slide"><h1>One</h1><div id="nestedCard" class="slide">Nested card</div></section>
        <section class="slide"><h1>Two</h1></section>
        <section class="slide"><h1>Three</h1></section>
      </div>
    `;
    const sourceSlides = Array.from(document.querySelectorAll("#deck > .slide")) as HTMLElement[];
    sourceSlides.forEach((slide, index) => {
      Object.defineProperty(slide, "offsetLeft", { value: index * 900, configurable: true });
    });

    Element.prototype.getBoundingClientRect = function getBoundingClientRect() {
      const element = this as HTMLElement;
      if (element.classList.contains("editor-toolbar")) return rect({ left: 12, top: 12, width: 1416, height: 52 });
      if (element.classList.contains("editor-slides")) return rect({ left: 12, top: 76, width: 242, height: 810 });
      if (element.classList.contains("editor-panel")) return rect({ left: 1086, top: 76, width: 342, height: 810 });
      if (element.id === "nestedCard") return rect({ left: 30, top: 30, width: 180, height: 80 });
      if (element.classList.contains("slide")) return rect({ left: 0, top: 0, width: 900, height: 540 });
      if (element.id === "deck") return rect({ left: 0, top: 0, width: 2700, height: 540 });
      return rect({ left: 0, top: 0, width: 100, height: 40 });
    };

    installRuntime();
    const editor = (window as any).FrontendSlidesEditor.mount();
    editor.toggleEditMode(true);

    const deck = document.getElementById("deck") as HTMLElement;
    const nestedCard = document.getElementById("nestedCard") as HTMLElement;
    expect(editor.presentation.slides).toHaveLength(3);
    expect(editor.presentation.slides).not.toContain(nestedCard);
    expect(sourceSlides[2].hasAttribute("data-html-deck-editor-current")).toBe(true);
    expect(deck.style.getPropertyValue("--html-deck-editor-slide-offset-x")).toBe("1800px");
  });

  it("uses top-level nested wrapper slides without treating slide-like cards as pages", () => {
    document.body.innerHTML = `
      <div id="deck" data-html-deck-editor-stage="preserve" data-html-deck-editor-navigation="horizontal" style="transform:translateX(-900px)">
        <div class="slides">
          <section class="slide"><h1>One</h1></section>
          <section class="slide"><h1>Two</h1><div id="nestedCard" class="slide"><p id="cardText" data-editable>Nested card text</p></div></section>
        </div>
      </div>
    `;
    const sourceSlides = Array.from(document.querySelectorAll("#deck .slides > .slide")) as HTMLElement[];
    sourceSlides.forEach((slide, index) => {
      Object.defineProperty(slide, "offsetLeft", { value: index * 900, configurable: true });
    });
    Element.prototype.getBoundingClientRect = function getBoundingClientRect() {
      const element = this as HTMLElement;
      if (element.matches("#deck .slides > .slide")) return rect({ left: 0, top: 0, width: 900, height: 540 });
      if (element.id === "cardText") return rect({ left: 48, top: 52, width: 120, height: 18 });
      return rect({ left: 0, top: 0, width: 100, height: 40 });
    };

    installRuntime();
    const editor = (window as any).FrontendSlidesEditor.mount();
    editor.toggleEditMode(true);

    const nestedCard = document.getElementById("nestedCard") as HTMLElement;
    const cardText = document.getElementById("cardText") as HTMLElement;
    expect(editor.presentation.slides).toHaveLength(2);
    expect(editor.presentation.slides).not.toContain(nestedCard);
    expect(sourceSlides[0].hasAttribute("data-html-deck-editor-page")).toBe(true);
    expect(sourceSlides[1].hasAttribute("data-html-deck-editor-page")).toBe(true);
    expect(nestedCard.hasAttribute("data-html-deck-editor-page")).toBe(false);
    expect(sourceSlides[1].hasAttribute("data-html-deck-editor-current")).toBe(true);
    expect(editor.pickNearbyEditableTarget({ clientX: 50, clientY: 54 })).toBe(cardText);

    const html = editor.buildExportHtml();
    expect(html).not.toContain("data-html-deck-editor-page");
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

  it("does not export editor current-slide markers or stage safe-area variables", () => {
    document.body.innerHTML = `
      <div id="deck" data-html-deck-editor-stage="preserve" data-html-deck-editor-navigation="horizontal">
        <section class="slide active"><h1>One slide</h1></section>
        <section class="slide"><h1>Two slide</h1></section>
      </div>
    `;

    installRuntime();
    const editor = (window as any).FrontendSlidesEditor.mount();
    editor.toggleEditMode(true);

    const html = editor.buildExportHtml();

    expect(html).not.toContain("data-html-deck-editor-current");
    expect(html).not.toContain("--html-deck-editor-stage-x");
    expect(html).not.toContain("--html-deck-editor-current-slide");
  });

  it("exports preserved horizontal decks from a clean first-slide position", () => {
    document.body.innerHTML = `
      <div id="deck" data-html-deck-editor-stage="preserve" data-html-deck-editor-navigation="horizontal">
        <section class="slide active visible" data-deck-active><h1>One slide</h1></section>
        <section class="slide"><h1>Two slide</h1></section>
        <section class="slide"><h1>Three slide</h1></section>
      </div>
    `;
    const sourceSlides = Array.from(document.querySelectorAll(".slide")) as HTMLElement[];
    sourceSlides.forEach((slide, index) => {
      Object.defineProperty(slide, "offsetLeft", { value: index * 900, configurable: true });
    });

    installRuntime();
    const editor = (window as any).FrontendSlidesEditor.mount();
    editor.presentation.showSlide(2);

    const html = editor.buildExportHtml();
    const doc = new DOMParser().parseFromString(html, "text/html");
    const deck = doc.getElementById("deck") as HTMLElement;
    const slides = Array.from(doc.querySelectorAll("#deck > .slide")) as HTMLElement[];

    expect(deck.getAttribute("style") || "").not.toContain("transform");
    expect(slides[0].classList.contains("active")).toBe(true);
    expect(slides[0].classList.contains("visible")).toBe(true);
    expect(slides[0].hasAttribute("data-deck-active")).toBe(true);
    expect(slides[2].classList.contains("active")).toBe(false);
    expect(slides[2].classList.contains("visible")).toBe(false);
    expect(slides[2].hasAttribute("data-deck-active")).toBe(false);
  });

  it("selects directly clicked editable text on the slide", () => {
    document.body.innerHTML = `
      <div id="deckStage" class="deck-stage">
        <section class="slide active"><h1 id="title" style="font-size:96px">Huge title</h1></section>
      </div>
    `;
    const title = document.getElementById("title") as HTMLElement;
    title.getBoundingClientRect = () => rect({ left: 100, top: 100, width: 760, height: 120 });

    installRuntime();
    const editor = (window as any).FrontendSlidesEditor.mount();
    editor.toggleEditMode(true);
    const event = new Event("pointerdown", { bubbles: true }) as Event & { clientX: number; clientY: number };
    event.clientX = 120;
    event.clientY = 120;
    title.dispatchEvent(event);

    expect(editor.selected).toBe(title);
    expect((document.getElementById("bgInput") as HTMLButtonElement).disabled).toBe(false);
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

  it("keeps delete keys inside the inspector textarea editable", () => {
    document.body.innerHTML = `
      <div id="deckStage" class="deck-stage">
        <section class="slide active"><h1 id="title">HTML 能否取代 PPT?</h1></section>
      </div>
    `;

    installRuntime();
    const editor = (window as any).FrontendSlidesEditor.mount();
    editor.toggleEditMode(true);
    editor.select(document.getElementById("title") as HTMLElement);

    const keySpy = vi.fn();
    window.addEventListener("keydown", keySpy);

    const text = document.getElementById("textInput") as HTMLTextAreaElement;
    text.focus();
    const backspace = new KeyboardEvent("keydown", { bubbles: true, cancelable: true, key: "Backspace" });
    const del = new KeyboardEvent("keydown", { bubbles: true, cancelable: true, key: "Delete" });

    text.dispatchEvent(backspace);
    text.dispatchEvent(del);

    expect(backspace.defaultPrevented).toBe(false);
    expect(del.defaultPrevented).toBe(false);
    expect(keySpy).not.toHaveBeenCalled();
  });

  it("blocks host deck shortcuts from reaching window while edit mode is active", () => {
    document.body.innerHTML = `
      <div id="deckStage" class="deck-stage">
        <section class="slide active"><h1 id="title">One slide</h1></section>
        <section class="slide"><h1>Two slide</h1></section>
      </div>
    `;

    installRuntime();
    const editor = (window as any).FrontendSlidesEditor.mount();
    editor.toggleEditMode(true);

    const keySpy = vi.fn();
    window.addEventListener("keydown", keySpy);

    document.dispatchEvent(new KeyboardEvent("keydown", { bubbles: true, key: "Escape" }));
    document.dispatchEvent(new KeyboardEvent("keydown", { bubbles: true, key: "ArrowRight" }));
    document.dispatchEvent(new KeyboardEvent("keydown", { bubbles: true, key: "PageDown" }));
    document.dispatchEvent(new KeyboardEvent("keydown", { bubbles: true, key: "b" }));

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
    const color = document.getElementById("colorButton") as HTMLButtonElement;
    color.dataset.value = "#ff0000";
    editor.applyInspectorValue("color", { recordHistory: true });
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
    chooseBackground("#d9f99d");

    const span = title.querySelector("span") as HTMLElement;
    expect(span.style.color).toBe("rgb(255, 0, 0)");
    expect(span.style.backgroundColor).toBe("rgb(217, 249, 157)");
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

  it("supports expanded font choices, custom fonts, text color presets, and background custom colors", () => {
    document.body.innerHTML = `
      <div id="deckStage" class="deck-stage">
        <section class="slide active">
          <h1 id="title" style="font-size:96px">甲乙丙丁</h1>
        </section>
      </div>
    `;
    const title = document.getElementById("title") as HTMLElement;
    title.getBoundingClientRect = () => rect({ left: 100, top: 100, width: 600, height: 120 });

    const pickers = installPickerStub();
    installRuntime();
    const editor = (window as any).FrontendSlidesEditor.mount();
    editor.toggleEditMode(true);
    editor.select(title);

    const fontFamily = document.getElementById("fontFamilyInput") as HTMLSelectElement;
    expect(fontFamily.options.length).toBeGreaterThan(10);
    fontFamily.value = "__custom__";
    fontFamily.dispatchEvent(new Event("change", { bubbles: true }));
    const customFont = document.getElementById("fontFamilyCustomInput") as HTMLInputElement;
    expect(customFont.disabled).toBe(false);
    customFont.value = '"LXGW WenKai", serif';
    customFont.dispatchEvent(new Event("change", { bubbles: true }));
    expect(title.style.fontFamily).toContain("LXGW WenKai");

    expect(document.querySelectorAll("[data-color-value]").length).toBeGreaterThan(20);
    chooseTextColor("#ff3d8b");
    expect(title.style.color).toBe("rgb(255, 61, 139)");
    expect((document.getElementById("colorPalette") as HTMLDivElement).hidden).toBe(true);

    pickers[1].onDone(pickerColor("#123456"));
    expect(title.style.backgroundColor).toBe("rgb(18, 52, 86)");
    expect((document.getElementById("bgInput") as HTMLButtonElement).dataset.value).toBe("#123456");
  });

  it("renders picker controls and high-contrast edit outlines", () => {
    document.body.innerHTML = `
      <div id="deckStage" class="deck-stage">
        <section class="slide active">
          <h1 id="title" style="font-size:96px">甲乙丙丁</h1>
        </section>
      </div>
    `;
    const title = document.getElementById("title") as HTMLElement;
    title.getBoundingClientRect = () => rect({ left: 100, top: 100, width: 600, height: 120 });

    const pickers = installPickerStub();
    installRuntime();
    const editor = (window as any).FrontendSlidesEditor.mount();
    editor.toggleEditMode(true);
    editor.select(title);

    expect(pickers).toHaveLength(2);
    expect(document.getElementById("colorEyedropperBtn")).toBeTruthy();
    expect(document.getElementById("bgEyedropperBtn")).toBeTruthy();
    expect(document.querySelectorAll(".picker_wrapper")).toHaveLength(2);
    expect((document.getElementById("colorPalette") as HTMLDivElement).hidden).toBe(true);
    expect((document.getElementById("bgPalette") as HTMLDivElement).hidden).toBe(true);
    expect(document.getElementById("colorPresetGrid")?.children.length).toBeGreaterThan(20);

    (document.getElementById("colorButton") as HTMLButtonElement).click();
    expect((document.getElementById("colorPalette") as HTMLDivElement).hidden).toBe(false);

    (document.getElementById("bgInput") as HTMLButtonElement).click();
    expect((document.getElementById("colorPalette") as HTMLDivElement).hidden).toBe(true);
    expect((document.getElementById("bgPalette") as HTMLDivElement).hidden).toBe(false);
    expect(document.querySelector("[data-color-value]")?.className).toContain("color-preset");
    expect(document.querySelector("[data-bg-value]")?.className).toContain("color-preset");
  });

  it("uses the native eyedropper from the picker panels", async () => {
    document.body.innerHTML = `
      <div id="deckStage" class="deck-stage">
        <section class="slide active">
          <h1 id="title" style="font-size:96px">甲乙丙丁</h1>
        </section>
      </div>
    `;
    const title = document.getElementById("title") as HTMLElement;
    title.getBoundingClientRect = () => rect({ left: 100, top: 100, width: 600, height: 120 });
    const open = vi.fn()
      .mockResolvedValueOnce({ sRGBHex: "#abcdef" })
      .mockResolvedValueOnce({ sRGBHex: "#123456" });
    const eyedropper = vi.fn().mockImplementation(() => ({ open }));
    vi.stubGlobal("EyeDropper", eyedropper);
    installPickerStub();

    installRuntime();
    const editor = (window as any).FrontendSlidesEditor.mount();
    editor.toggleEditMode(true);
    editor.select(title);

    (document.getElementById("colorEyedropperBtn") as HTMLButtonElement).click();
    await Promise.resolve();
    await Promise.resolve();
    expect(title.style.color).toBe("rgb(171, 205, 239)");

    (document.getElementById("bgEyedropperBtn") as HTMLButtonElement).click();
    await Promise.resolve();
    await Promise.resolve();
    expect(title.style.backgroundColor).toBe("rgb(18, 52, 86)");
  });

  it("applies custom colors through the open-source picker", () => {
    document.body.innerHTML = `
      <div id="deckStage" class="deck-stage">
        <section class="slide active">
          <h1 id="title" style="font-size:96px">甲乙丙丁</h1>
        </section>
      </div>
    `;
    const title = document.getElementById("title") as HTMLElement;
    title.getBoundingClientRect = () => rect({ left: 100, top: 100, width: 600, height: 120 });

    const pickers = installPickerStub();
    installRuntime();
    const editor = (window as any).FrontendSlidesEditor.mount();
    editor.toggleEditMode(true);
    editor.select(title);

    pickers[0].onDone(pickerColor("#abcdef"));
    expect(title.style.color).toBe("rgb(171, 205, 239)");
    expect((document.getElementById("colorButton") as HTMLButtonElement).dataset.value).toBe("#abcdef");

    pickers[1].onDone(pickerColor("#abcdef"));
    expect(title.style.backgroundColor).toBe("rgb(171, 205, 239)");
    expect((document.getElementById("bgInput") as HTMLButtonElement).dataset.value).toBe("#abcdef");
  });

  it("applies live picker colors without closing the palette", () => {
    document.body.innerHTML = `
      <div id="deckStage" class="deck-stage">
        <section class="slide active">
          <h1 id="title" style="font-size:96px">甲乙丙丁</h1>
        </section>
      </div>
    `;
    const title = document.getElementById("title") as HTMLElement;
    title.getBoundingClientRect = () => rect({ left: 100, top: 100, width: 600, height: 120 });

    const pickers = installPickerStub();
    installRuntime();
    const editor = (window as any).FrontendSlidesEditor.mount();
    editor.toggleEditMode(true);
    editor.select(title);

    (document.getElementById("colorButton") as HTMLButtonElement).click();
    pickers[0].onChange(pickerColor("#13579b"));
    expect(title.style.color).toBe("rgb(19, 87, 155)");
    expect((document.getElementById("colorPalette") as HTMLDivElement).hidden).toBe(false);

    (document.getElementById("bgInput") as HTMLButtonElement).click();
    pickers[1].onChange(pickerColor("#2468ac"));
    expect(title.style.backgroundColor).toBe("rgb(36, 104, 172)");
    expect((document.getElementById("bgPalette") as HTMLDivElement).hidden).toBe(false);
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

    const color = document.getElementById("colorButton") as HTMLButtonElement;
    color.dispatchEvent(new Event("pointerdown", { bubbles: true }));
    color.dataset.value = "#0000ff";
    editor.applyInspectorValue("color", { recordHistory: true });

    const span = title.querySelector("span") as HTMLElement;
    expect(span.textContent).toBe("丙");
    expect(span.style.color).toBe("rgb(0, 0, 255)");
    expect(title.style.color).toBe("");
    expect(title.textContent).toBe("甲乙丙丁");
  });

  it("preserves styled child wrappers when editing inspector text", () => {
    document.body.innerHTML = `
      <div id="deckStage" class="deck-stage">
        <section class="slide active">
          <div id="headline" data-editable style="font-size:96px">
            <span class="plain">HTML 能否</span>
            <span class="highlight" style="display:inline-block;background-color:rgb(255, 211, 49);box-shadow:12px 12px 0 #111">取代 PPT?</span>
          </div>
        </section>
      </div>
    `;
    const headline = document.getElementById("headline") as HTMLElement;
    headline.getBoundingClientRect = () => rect({ left: 100, top: 100, width: 900, height: 220 });

    installRuntime();
    const editor = (window as any).FrontendSlidesEditor.mount();
    editor.toggleEditMode(true);
    editor.select(headline);

    const text = document.getElementById("textInput") as HTMLTextAreaElement;
    text.value = "HTML 能不能\n取代 PPT?";
    text.dispatchEvent(new Event("input", { bubbles: true }));

    const highlight = headline.querySelector(".highlight") as HTMLElement;
    expect(highlight).toBeTruthy();
    expect(highlight.textContent).toBe("取代 PPT?");
    expect(highlight.style.backgroundColor).toBe("rgb(255, 211, 49)");
    expect(highlight.style.boxShadow).toBe("12px 12px 0 #111");
    expect(headline.querySelector(".plain")?.textContent?.trim()).toBe("HTML 能不能");
  });

  it("undoes live inspector text edits before the input change event commits", () => {
    document.body.innerHTML = `
      <div id="deckStage" class="deck-stage">
        <section class="slide active">
          <h1 id="title" style="font-size:96px">原始标题</h1>
        </section>
      </div>
    `;
    const title = document.getElementById("title") as HTMLElement;
    title.getBoundingClientRect = () => rect({ left: 100, top: 100, width: 640, height: 120 });

    installRuntime();
    const editor = (window as any).FrontendSlidesEditor.mount();
    editor.toggleEditMode(true);
    editor.select(title);

    const text = document.getElementById("textInput") as HTMLTextAreaElement;
    const undo = document.getElementById("undoBtn") as HTMLButtonElement;
    const redo = document.getElementById("redoBtn") as HTMLButtonElement;

    expect(undo.disabled).toBe(true);

    text.value = "实时修改";
    text.dispatchEvent(new Event("input", { bubbles: true }));

    expect((document.getElementById("title") as HTMLElement).textContent).toBe("实时修改");
    expect(undo.disabled).toBe(false);

    undo.click();
    expect((document.getElementById("title") as HTMLElement).textContent).toBe("原始标题");
    expect(redo.disabled).toBe(false);

    redo.click();
    expect((document.getElementById("title") as HTMLElement).textContent).toBe("实时修改");
  });

  it("drops stale redo history after a live edit from an undone state", () => {
    document.body.innerHTML = `
      <div id="deckStage" class="deck-stage">
        <section class="slide active">
          <h1 id="title" style="font-size:96px">原始标题</h1>
        </section>
      </div>
    `;
    const title = document.getElementById("title") as HTMLElement;
    title.getBoundingClientRect = () => rect({ left: 100, top: 100, width: 640, height: 120 });

    installRuntime();
    const editor = (window as any).FrontendSlidesEditor.mount();
    editor.toggleEditMode(true);
    editor.select(title);

    const text = document.getElementById("textInput") as HTMLTextAreaElement;
    const redo = document.getElementById("redoBtn") as HTMLButtonElement;

    text.value = "第一次修改";
    text.dispatchEvent(new Event("change", { bubbles: true }));
    editor.undo();
    expect((document.getElementById("title") as HTMLElement).textContent).toBe("原始标题");

    const restoredTitle = document.getElementById("title") as HTMLElement;
    editor.select(restoredTitle);
    text.value = "第二次修改";
    text.dispatchEvent(new Event("input", { bubbles: true }));

    expect(redo.disabled).toBe(true);

    editor.redo();
    expect((document.getElementById("title") as HTMLElement).textContent).toBe("第二次修改");

    editor.undo();
    expect((document.getElementById("title") as HTMLElement).textContent).toBe("原始标题");
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

    chooseBackground("#fff2b8");

    expect(title.innerHTML).toContain('font-style:italic');
    expect(title.querySelector("span[style*='background-color']")?.textContent).toBe("乙丙");
    expect(title.style.backgroundColor).toBe("");
    expect(title.textContent).toBe("甲乙丙丁");
  });

  it("clears only the selected middle text background using the no-background palette cell", () => {
    document.body.innerHTML = `
      <div id="deckStage" class="deck-stage">
        <section class="slide active">
          <h1 id="title" style="font-size:96px"><span style="background-color: rgb(255, 242, 184);">甲乙丙丁</span></h1>
        </section>
      </div>
    `;
    const title = document.getElementById("title") as HTMLElement;
    title.getBoundingClientRect = () => rect({ left: 100, top: 100, width: 600, height: 120 });

    installRuntime();
    const editor = (window as any).FrontendSlidesEditor.mount();
    editor.toggleEditMode(true);
    editor.select(title);

    const styledText = title.querySelector("span")?.firstChild as Text;
    const range = document.createRange();
    range.setStart(styledText, 1);
    range.setEnd(styledText, 3);
    const selection = window.getSelection() as Selection;
    selection.removeAllRanges();
    selection.addRange(range);
    document.dispatchEvent(new Event("selectionchange"));

    chooseBackground("");

    const spans = Array.from(title.querySelectorAll("span")) as HTMLElement[];
    expect(spans.map((span) => span.textContent).join("")).toBe("甲乙丙丁");
    expect(spans.some((span) => span.textContent === "乙丙" && !span.style.backgroundColor)).toBe(true);
    expect(spans.some((span) => span.textContent === "甲" && span.style.backgroundColor)).toBe(true);
    expect(spans.some((span) => span.textContent === "丁" && span.style.backgroundColor)).toBe(true);
  });

  it("reads italic and background state from the actual slide text selection", () => {
    document.body.innerHTML = `
      <div id="deckStage" class="deck-stage">
        <section class="slide active">
          <h1 id="title" style="font-size:96px">甲<span style="font-style:italic;background-color: rgb(217, 249, 157);">乙丙</span>丁</h1>
        </section>
      </div>
    `;
    const title = document.getElementById("title") as HTMLElement;
    title.getBoundingClientRect = () => rect({ left: 100, top: 100, width: 600, height: 120 });

    installRuntime();
    const editor = (window as any).FrontendSlidesEditor.mount();
    editor.toggleEditMode(true);
    editor.select(title);

    const italic = document.getElementById("fontStyleBtn") as HTMLButtonElement;
    const bg = document.getElementById("bgInput") as HTMLButtonElement;
    const selection = window.getSelection() as Selection;
    const selectRange = (node: Text, start: number, end: number) => {
      const range = document.createRange();
      range.setStart(node, start);
      range.setEnd(node, end);
      selection.removeAllRanges();
      selection.addRange(range);
      document.dispatchEvent(new Event("selectionchange"));
    };

    selectRange(title.lastChild as Text, 0, 1);
    expect(italic.getAttribute("aria-pressed")).toBe("false");
    expect(bg.dataset.value).toBe("");
    expect(document.getElementById("bgInputText")?.textContent).toBe("无背景");

    selectRange(title.querySelector("span")?.firstChild as Text, 0, 2);
    expect(italic.getAttribute("aria-pressed")).toBe("true");
    expect(bg.dataset.value).toBe("#d9f99d");
    expect(document.getElementById("bgInputText")?.textContent).toBe("浅绿");
  });

  it("reads inline background state from text selected in the inspector textarea", () => {
    document.body.innerHTML = `
      <div id="deckStage" class="deck-stage">
        <section class="slide active">
          <h1 id="title" style="font-size:96px">甲<span style="background-color: rgb(255, 242, 184);">乙丙</span>丁</h1>
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

    expect((document.getElementById("bgInput") as HTMLButtonElement).dataset.value).toBe("#fff2b8");
    expect(document.getElementById("bgInputText")?.textContent).toBe("浅黄");
  });

  it("reads inline background inherited from a selected text parent", () => {
    document.body.innerHTML = `
      <div id="deckStage" class="deck-stage">
        <section class="slide active">
          <h1 id="title" style="font-size:96px">甲<span style="background-color: rgb(191, 219, 254);"><em>乙丙</em></span>丁</h1>
        </section>
      </div>
    `;
    const title = document.getElementById("title") as HTMLElement;
    title.getBoundingClientRect = () => rect({ left: 100, top: 100, width: 600, height: 120 });

    installRuntime();
    const editor = (window as any).FrontendSlidesEditor.mount();
    editor.toggleEditMode(true);
    editor.select(title);

    const textNode = title.querySelector("em")?.firstChild as Text;
    const range = document.createRange();
    range.setStart(textNode, 0);
    range.setEnd(textNode, 2);
    const selection = window.getSelection() as Selection;
    selection.removeAllRanges();
    selection.addRange(range);
    document.dispatchEvent(new Event("selectionchange"));

    expect((document.getElementById("bgInput") as HTMLButtonElement).dataset.value).toBe("#bfdbfe");
    expect(document.getElementById("bgInputText")?.textContent).toBe("浅蓝");
  });

  it("opens the background palette when clicking the button text or swatch", () => {
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

    const palette = document.getElementById("bgPalette") as HTMLDivElement;
    const text = document.getElementById("bgInputText") as HTMLSpanElement;
    const swatch = document.getElementById("bgSwatch") as HTMLSpanElement;

    text.dispatchEvent(new Event("pointerdown", { bubbles: true }));
    text.click();
    expect(palette.hidden).toBe(false);

    swatch.dispatchEvent(new Event("pointerdown", { bubbles: true }));
    swatch.click();
    expect(palette.hidden).toBe(true);
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

  it("keeps manually edited layout values for flow text instead of syncing back to its original CSS layout", () => {
    document.body.innerHTML = `
      <div id="deckStage" class="deck-stage">
        <section class="slide active">
          <div style="display:grid;place-items:start">
            <h1 id="title" style="font-size:96px">Flow layout title</h1>
          </div>
        </section>
      </div>
    `;
    const slide = document.querySelector(".slide") as HTMLElement;
    const title = document.getElementById("title") as HTMLElement;
    slide.getBoundingClientRect = () => rect({ left: 0, top: 0, width: 1440, height: 900 });
    title.getBoundingClientRect = () => rect({ left: 100, top: 120, width: 600, height: 120 });

    installRuntime();
    const editor = (window as any).FrontendSlidesEditor.mount();
    editor.toggleEditMode(true);
    editor.select(title);

    const x = document.getElementById("xInput") as HTMLInputElement;
    const width = document.getElementById("widthInput") as HTMLInputElement;
    expect(x.value).toBe("100");
    expect(width.value).toBe("600");

    x.value = "240";
    width.value = "420";
    x.dispatchEvent(new Event("change", { bubbles: true }));
    width.dispatchEvent(new Event("change", { bubbles: true }));
    editor.updateInspector();

    expect(title.classList.contains("edit-moved")).toBe(true);
    expect(title.dataset.editStageX).toBe("240");
    expect(title.dataset.editStageWidth).toBe("420");
    expect(x.value).toBe("240");
    expect(width.value).toBe("420");
  });

  it("keeps layout edits on animated text elements while editing mode freezes original motion", () => {
    document.body.innerHTML = `
      <div id="deckStage" class="deck-stage">
        <section class="slide active" data-html-deck-editor-current>
          <h1 id="title" data-anim="title" style="font-size:96px">Animated title</h1>
        </section>
      </div>
    `;
    const slide = document.querySelector(".slide") as HTMLElement;
    const title = document.getElementById("title") as HTMLElement;
    slide.getBoundingClientRect = () => rect({ left: 0, top: 0, width: 1440, height: 900 });
    title.getBoundingClientRect = () => rect({ left: 60, top: 90, width: 680, height: 120 });

    installRuntime();
    const editor = (window as any).FrontendSlidesEditor.mount();
    editor.toggleEditMode(true);
    editor.select(title);

    const x = document.getElementById("xInput") as HTMLInputElement;
    const width = document.getElementById("widthInput") as HTMLInputElement;
    x.value = "120";
    x.dispatchEvent(new Event("input", { bubbles: true }));
    width.focus();
    editor.updateInspector();

    expect(title.classList.contains("edit-moved")).toBe(true);
    expect(title.dataset.editStageX).toBe("120");
    expect(x.value).toBe("120");
    expect(getComputedStyle(title).transform).not.toBe("none");
  });

});
