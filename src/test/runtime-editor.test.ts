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

function installFontLibraryIndexedDbStub(): Map<string, any> {
  const records = new Map<string, any>();
  let storeCreated = false;
  const requestWithResult = (result: any): any => {
    const request: any = {};
    queueMicrotask(() => {
      request.result = result;
      request.onsuccess?.({ target: request });
    });
    return request;
  };
  const database: any = {
    objectStoreNames: { contains: () => storeCreated },
    createObjectStore: () => { storeCreated = true; },
    transaction: () => ({
      objectStore: () => ({
        getAll: () => requestWithResult(Array.from(records.values())),
        put: (record: any) => {
          records.set(record.family, structuredClone(record));
          return requestWithResult(record.family);
        }
      })
    }),
    close: vi.fn()
  };
  vi.stubGlobal("indexedDB", {
    open: vi.fn(() => {
      const request: any = {};
      queueMicrotask(() => {
        request.result = database;
        if (!storeCreated) request.onupgradeneeded?.({ target: request });
        request.onsuccess?.({ target: request });
      });
      return request;
    })
  });
  return records;
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
    vi.useRealTimers();
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

  it("keeps editor motion visible on active-only imported slides", () => {
    document.body.innerHTML = `
      <div id="slidesWrapper" data-html-deck-editor-stage="preserve">
        <div class="slide active" data-html-deck-editor-current>
          <div id="box" data-editable-box style="background:#fff">Motion box</div>
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

    const anim = document.getElementById("animSelect") as HTMLSelectElement;
    anim.value = "rise";
    anim.dispatchEvent(new Event("change", { bubbles: true }));

    document.body.classList.remove("editing", "editor-on");
    box.classList.remove("editor-motion-preview", "editor-motion-running");
    slide.classList.remove("visible");
    slide.classList.add("active");

    expect(box.dataset.editAnim).toBe("rise");
    expect(box.classList.contains("editor-anim-rise")).toBe(true);
  });

  it("applies entrance changes to an imported animation wrapper around selected text", () => {
    document.body.innerHTML = `
      <div id="slidesWrapper" data-html-deck-editor-stage="preserve">
        <div class="slide active" data-html-deck-editor-current>
          <div id="wrapper" data-anim="line" style="opacity:0">
            <h2 id="headline">Animated title</h2>
          </div>
        </div>
      </div>
    `;
    const slide = document.querySelector(".slide") as HTMLElement;
    const wrapper = document.getElementById("wrapper") as HTMLElement;
    const headline = document.getElementById("headline") as HTMLElement;
    slide.getBoundingClientRect = () => rect({ left: 0, top: 0, width: 1440, height: 900 });
    wrapper.getBoundingClientRect = () => rect({ left: 120, top: 140, width: 720, height: 120 });
    headline.getBoundingClientRect = () => rect({ left: 120, top: 140, width: 720, height: 96 });

    installRuntime();
    const editor = (window as any).FrontendSlidesEditor.mount();
    editor.toggleEditMode(true);
    editor.select(headline);

    const anim = document.getElementById("animSelect") as HTMLSelectElement;
    anim.value = "left";
    anim.dispatchEvent(new Event("change", { bubbles: true }));

    expect(headline.dataset.editAnim).toBeUndefined();
    expect(wrapper.dataset.editAnim).toBe("left");
    expect(wrapper.classList.contains("editor-anim-left")).toBe(true);
    expect((document.getElementById("motionStatus") as HTMLElement).textContent).toContain("左侧滑入");

    const delay = document.getElementById("delayInput") as HTMLInputElement;
    delay.value = "350";
    delay.dispatchEvent(new Event("change", { bubbles: true }));
    expect(wrapper.dataset.editDelay).toBe("350");

    const savedStage = document.createElement("div");
    savedStage.innerHTML = editor.serialize().stage;
    expect((savedStage.querySelector("#wrapper") as HTMLElement).dataset.editAnim).toBe("left");
    expect((savedStage.querySelector("#headline") as HTMLElement).dataset.editAnim).toBeUndefined();
    expect(savedStage.querySelector("[data-html-deck-editor-motion-hold]")).toBeNull();

    (document.getElementById("restoreMotionBtn") as HTMLButtonElement).click();
    expect(wrapper.dataset.editAnim).toBeUndefined();
    expect(wrapper.classList.contains("editor-anim-left")).toBe(false);
    expect(wrapper.dataset.anim).toBe("line");
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

  it("supports expanded font choices, text color presets, and background custom colors", () => {
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
    const yahei = Array.from(fontFamily.options).find((option) => option.textContent === "微软雅黑");
    expect(yahei).toBeTruthy();
    fontFamily.value = yahei!.value;
    fontFamily.dispatchEvent(new Event("change", { bubbles: true }));
    expect(title.style.fontFamily).toContain("Microsoft YaHei");

    expect(document.querySelectorAll("[data-color-value]").length).toBeGreaterThan(20);
    chooseTextColor("#ff3d8b");
    expect(title.style.color).toBe("rgb(255, 61, 139)");
    expect((document.getElementById("colorPalette") as HTMLDivElement).hidden).toBe(true);

    pickers[1].onDone(pickerColor("#123456"));
    expect(title.style.backgroundColor).toBe("rgb(18, 52, 86)");
    expect((document.getElementById("bgInput") as HTMLButtonElement).dataset.value).toBe("#123456");
  });

  it("groups common, online, and imported fonts and deduplicates online font links", async () => {
    document.body.innerHTML = `
      <div id="deckStage" class="deck-stage">
        <section class="slide active"><h1 id="title" data-editable>字体测试</h1></section>
      </div>
    `;
    installRuntime();
    const editor = (window as any).FrontendSlidesEditor.mount();
    const title = document.getElementById("title") as HTMLElement;
    editor.toggleEditMode(true);
    editor.select(title);

    const select = document.getElementById("fontFamilyInput") as HTMLSelectElement;
    expect(Array.from(select.querySelectorAll("optgroup")).map((group) => group.label)).toEqual([
      "本机常用字体",
      "联网字体 · 需联网",
      "已导入字体"
    ]);
    expect(select.textContent).toContain("中文仿宋");
    expect(select.textContent).toContain("苹方");
    expect(select.textContent).toContain("微软雅黑");
    expect(select.textContent).toContain("思源黑体 · Fontsource / OFL 1.1");
    expect(select.textContent).not.toContain("输入其他字体名");
    expect((document.getElementById("fontFamilyCustomInput") as HTMLInputElement | null)).toBeNull();
    expect((document.getElementById("importedFontGroup") as HTMLOptGroupElement).hidden).toBe(true);

    select.value = '"Noto Sans SC", sans-serif';
    select.dispatchEvent(new Event("change", { bubbles: true }));
    const link = document.querySelector('link[data-html-deck-editor-online-font="noto-sans-sc"]') as HTMLLinkElement;
    expect(link.href).toContain("@fontsource/noto-sans-sc@5.2.9/400.css");
    link.dispatchEvent(new Event("load"));
    await Promise.resolve();
    select.dispatchEvent(new Event("change", { bubbles: true }));
    expect(document.querySelectorAll('link[data-html-deck-editor-online-font="noto-sans-sc"]')).toHaveLength(1);
    expect(title.style.fontFamily).toContain("Noto Sans SC");
  });

  it("validates and embeds imported font files, then restores their option on remount", async () => {
    const fontLibrary = installFontLibraryIndexedDbStub();
    document.body.innerHTML = `
      <div id="deckStage" class="deck-stage">
        <section class="slide active"><h1 id="title" data-editable>导入字体</h1></section>
      </div>
    `;
    installRuntime();
    const editor = (window as any).FrontendSlidesEditor.mount();
    const title = document.getElementById("title") as HTMLElement;
    editor.toggleEditMode(true);
    editor.select(title);

    expect(() => editor.validateFontFile({ name: "bad.zip", size: 10 })).toThrow("仅支持");
    expect(() => editor.validateFontFile({ name: "large.ttf", size: 20 * 1024 * 1024 + 1 })).toThrow("20MB");

    const file = new File([new Uint8Array([0, 1, 2, 3])], "演示字体.woff2", { type: "font/woff2" });
    const input = { files: [file], value: "selected" };
    await editor.handleFontImport({ currentTarget: input });

    const style = document.querySelector("style[data-html-deck-editor-font]") as HTMLStyleElement;
    expect(style.textContent).toContain("data:font/woff2;base64");
    expect(title.style.fontFamily).toContain("HtmlDeckImported_");
    expect((document.getElementById("fontImportStatus") as HTMLElement).textContent).toContain("浏览器字体库");
    expect(editor.buildExportHtml()).toContain("data-html-deck-editor-font=\"imported\"");
    expect((document.getElementById("importedFontGroup") as HTMLOptGroupElement).hidden).toBe(false);
    expect(fontLibrary.size).toBe(1);

    editor.destroy();
    document.querySelectorAll("[data-html-deck-editor-ui]").forEach((node) => node.remove());
    document.querySelectorAll("style[data-html-deck-editor-font]").forEach((node) => node.remove());
    const remounted = (window as any).FrontendSlidesEditor.mount();
    await remounted.fontLibraryReady;
    expect(remounted.controls.importedFontGroup.querySelectorAll("option")).toHaveLength(1);
    expect(remounted.controls.importedFontGroup.textContent).toContain("演示字体");
    expect(document.querySelector("style[data-html-deck-editor-font]")?.textContent).toContain("data:font/woff2;base64");
  });

  it("keeps all six batch-export captures free of editor selection state", async () => {
    document.title = "六页导出";
    document.body.innerHTML = `
      <div id="deckStage" class="deck-stage">
        ${Array.from({ length: 6 }, (_, index) => `<section class="slide${index === 0 ? " active" : ""}"><h1 data-editable>Page ${index + 1}</h1></section>`).join("")}
      </div>
    `;
    installRuntime();
    const editor = (window as any).FrontendSlidesEditor.mount();
    const firstTitle = document.querySelector("h1") as HTMLElement;
    editor.toggleEditMode(true);
    editor.select(firstTitle);

    const reapplyHostEditingState = () => {
      document.body.classList.add("editing", "editor-on");
      document.querySelectorAll("h1").forEach((title) => title.classList.add("editor-selected"));
    };
    document.addEventListener("slidechange", reapplyHostEditingState);

    const toCanvas = vi.fn(async (slide: HTMLElement) => {
      expect(document.body.classList.contains("editing")).toBe(false);
      expect(document.body.classList.contains("editor-on")).toBe(false);
      expect(slide.querySelector(".editor-selected")).toBeNull();
      return {
        width: 3840,
        height: 2160,
        toBlob: (callback: (blob: Blob) => void) => callback(new Blob([slide.textContent || ""])),
        toDataURL: () => "data:image/png;base64,AA=="
      };
    });
    vi.stubGlobal("htmlToImage", { toCanvas });
    class ZipStub {
      file(): void {}
      async generateAsync(): Promise<Blob> { return new Blob(["zip"]); }
    }
    vi.stubGlobal("JSZip", ZipStub);
    vi.stubGlobal("requestAnimationFrame", (callback: FrameRequestCallback) => { callback(0); return 1; });
    vi.spyOn(editor, "downloadBlob").mockImplementation(() => undefined);

    try {
      editor.openExportModal();
      editor.selectExportPages("all");
      (editor.controls.exportModal.querySelector("input[value='png']") as HTMLInputElement).checked = true;
      await editor.exportSelectedPages();
      expect(toCanvas).toHaveBeenCalledTimes(6);
    } finally {
      document.removeEventListener("slidechange", reapplyHostEditingState);
    }
  });

  it("lists only top-level slides and supports current, all, and empty export selections", () => {
    document.body.innerHTML = `
      <div id="deckStage" class="deck-stage">
        <section class="slide active" data-title="首页"><div class="slide">嵌套伪页面</div></section>
        <section class="slide" data-title="结尾"></section>
      </div>
    `;
    installRuntime();
    const editor = (window as any).FrontendSlidesEditor.mount();
    editor.presentation.showSlide(1);
    editor.openExportModal();

    expect(editor.controls.exportPageList.querySelectorAll("input[type='checkbox']")).toHaveLength(2);
    editor.selectExportPages("current");
    expect(editor.selectedExportPageIndexes()).toEqual([1]);
    editor.selectExportPages("all");
    expect(editor.selectedExportPageIndexes()).toEqual([0, 1]);
    editor.selectExportPages("none");
    expect(editor.selectedExportPageIndexes()).toEqual([]);
    expect(editor.controls.exportStart.disabled).toBe(true);
    expect(editor.controls.exportStatus.textContent).toBe("请至少选择一页");
  });

  it("downloads a single PNG directly at 2x rendering resolution", async () => {
    document.title = "演示文稿";
    document.body.innerHTML = `<div id="deckStage" class="deck-stage"><section class="slide active"><h1 id="single-title" data-editable>一页</h1></section></div>`;
    installRuntime();
    const editor = (window as any).FrontendSlidesEditor.mount();
    const title = document.getElementById("single-title") as HTMLElement;
    editor.toggleEditMode(true);
    editor.select(title);
    const canvas = {
      width: 3840,
      height: 2160,
      toBlob: vi.fn((callback: (blob: Blob) => void) => callback(new Blob(["png"], { type: "image/png" }))),
      toDataURL: vi.fn(() => "data:image/png;base64,AA==")
    };
    const toCanvas = vi.fn(async (_slide: HTMLElement, _options: any) => canvas);
    vi.stubGlobal("htmlToImage", { toCanvas });
    vi.stubGlobal("requestAnimationFrame", (callback: FrameRequestCallback) => { callback(0); return 1; });
    const download = vi.spyOn(editor, "downloadBlob").mockImplementation(() => undefined);

    editor.openExportModal();
    (editor.controls.exportModal.querySelector("input[value='png']") as HTMLInputElement).checked = true;
    await editor.exportSelectedPages();

    expect(toCanvas).toHaveBeenCalledOnce();
    expect(toCanvas.mock.calls[0][1]).toMatchObject({ pixelRatio: 2, width: 1920, height: 1080 });
    expect(download).toHaveBeenCalledWith(expect.any(Blob), "演示文稿-page-01.png");
    expect(editor.controls.exportModal.hidden).toBe(true);
    expect(document.body.classList.contains("editing")).toBe(true);
    expect(editor.selected).toBe(title);
    expect(title.classList.contains("editor-selected")).toBe(true);
  });

  it("inlines already loaded slide images before canvas export without CORS preflight", async () => {
    document.title = "图片导出";
    document.body.innerHTML = [
      "<div id=\"deckStage\" class=\"deck-stage\">",
      "  <section class=\"slide active\">",
      "    <img id=\"hero\" src=\"assets/1.jpg\" alt=\"用户图片\">",
      "    <h1 id=\"title\">带图页面</h1>",
      "  </section>",
      "</div>"
    ].join("");
    const hero = document.getElementById("hero") as HTMLImageElement;
    const title = document.getElementById("title") as HTMLElement;
    hero.getBoundingClientRect = () => rect({ left: 80, top: 160, width: 800, height: 520 });
    title.getBoundingClientRect = () => rect({ left: 80, top: 80, width: 600, height: 80 });
    Object.defineProperty(hero, "complete", { value: true, configurable: true });
    Object.defineProperty(hero, "naturalWidth", { value: 1200, configurable: true });
    Object.defineProperty(hero, "naturalHeight", { value: 800, configurable: true });

    installRuntime();
    const editor = (window as any).FrontendSlidesEditor.mount();
    const drawImage = vi.fn();
    const getContext = vi.spyOn(HTMLCanvasElement.prototype, "getContext").mockReturnValue({ drawImage } as any);
    const toDataURL = vi.spyOn(HTMLCanvasElement.prototype, "toDataURL").mockReturnValue("data:image/jpeg;base64,INLINE");
    const captureCanvas = {
      width: 3840,
      height: 2160,
      toBlob: vi.fn((callback: (blob: Blob) => void) => callback(new Blob(["png"], { type: "image/png" }))),
      toDataURL: vi.fn(() => "data:image/png;base64,AA==")
    };
    const toCanvas = vi.fn(async (slide: HTMLElement) => {
      expect((slide.querySelector("#hero") as HTMLImageElement).getAttribute("src")).toBe("data:image/jpeg;base64,INLINE");
      return captureCanvas;
    });
    vi.stubGlobal("htmlToImage", { toCanvas });
    vi.stubGlobal("fetch", vi.fn(async () => { throw new Error("CORS"); }));
    vi.stubGlobal("requestAnimationFrame", (callback: FrameRequestCallback) => { callback(0); return 1; });
    const download = vi.spyOn(editor, "downloadBlob").mockImplementation(() => undefined);

    try {
      editor.openExportModal();
      (editor.controls.exportModal.querySelector("input[value='png']") as HTMLInputElement).checked = true;
      await editor.exportSelectedPages();

      expect(drawImage).toHaveBeenCalledWith(hero, 0, 0, 1200, 800);
      expect(window.fetch).not.toHaveBeenCalled();
      expect(download).toHaveBeenCalledWith(expect.any(Blob), "图片导出-page-01.png");
      expect(hero.getAttribute("src")).toBe("assets/1.jpg");
      expect(hero.getAttribute("srcset")).toBeNull();
    } finally {
      getContext.mockRestore();
      toDataURL.mockRestore();
    }
  });

  it("uses srcset candidates when an image has no src during export", async () => {
    document.title = "Srcset 导出";
    document.body.innerHTML = [
      "<script id=\"html-deck-editor-export-assets\" type=\"application/json\">",
      "{\"assets\":[{\"path\":\"assets/3.webp\",\"keys\":[\"assets/3.webp\",\"3.webp\"],\"dataUrl\":\"data:image/webp;base64,SRCSET\"}]}",
      "</script>",
      "<div id=\"deckStage\" class=\"deck-stage\">",
      "  <section class=\"slide active\">",
      "    <picture><source srcset=\"assets/3.webp 1x\"><img id=\"hero\" srcset=\"assets/3.webp 1x\" alt=\"srcset image\"></picture>",
      "  </section>",
      "</div>"
    ].join("");
    const hero = document.getElementById("hero") as HTMLImageElement;
    hero.getBoundingClientRect = () => rect({ left: 80, top: 160, width: 800, height: 520 });

    installRuntime();
    const editor = (window as any).FrontendSlidesEditor.mount();
    const captureCanvas = {
      width: 3840,
      height: 2160,
      toBlob: vi.fn((callback: (blob: Blob) => void) => callback(new Blob(["png"], { type: "image/png" }))),
      toDataURL: vi.fn(() => "data:image/png;base64,AA==")
    };
    vi.stubGlobal("htmlToImage", {
      toCanvas: vi.fn(async () => {
        expect(hero.getAttribute("src")).toBe("data:image/webp;base64,SRCSET");
        expect(hero.getAttribute("srcset") || "").toBe("");
        expect(document.querySelector("source")?.getAttribute("srcset")).toBe("data:image/webp;base64,SRCSET");
        return captureCanvas;
      })
    });
    vi.stubGlobal("fetch", vi.fn(async () => { throw new Error("should not fetch manifest assets"); }));
    vi.stubGlobal("requestAnimationFrame", (callback: FrameRequestCallback) => { callback(0); return 1; });
    const download = vi.spyOn(editor, "downloadBlob").mockImplementation(() => undefined);

    editor.openExportModal();
    (editor.controls.exportModal.querySelector("input[value='png']") as HTMLInputElement).checked = true;
    await editor.exportSelectedPages();

    expect(window.fetch).not.toHaveBeenCalled();
    expect(download).toHaveBeenCalledWith(expect.any(Blob), "Srcset-导出-page-01.png");
    expect(hero.getAttribute("src")).toBeNull();
    expect(hero.getAttribute("srcset")).toBe("assets/3.webp 1x");
  });

  it("makes animation-hidden text ancestors visible only while exporting", async () => {
    document.title = "动画导出";
    document.body.innerHTML = [
      "<div id=\"deckStage\" class=\"deck-stage\">",
      "  <section class=\"slide active\">",
      "    <div id=\"wrapper\" data-anim=\"line\" style=\"opacity:0\">",
      "      <h1 id=\"title\" style=\"font-size:96px\">主题字</h1>",
      "    </div>",
      "  </section>",
      "</div>"
    ].join("");
    const wrapper = document.getElementById("wrapper") as HTMLElement;
    const title = document.getElementById("title") as HTMLElement;
    wrapper.getBoundingClientRect = () => rect({ left: 100, top: 120, width: 820, height: 140 });
    title.getBoundingClientRect = () => rect({ left: 100, top: 120, width: 760, height: 110 });

    installRuntime();
    const editor = (window as any).FrontendSlidesEditor.mount();
    const captureCanvas = {
      width: 3840,
      height: 2160,
      toBlob: vi.fn((callback: (blob: Blob) => void) => callback(new Blob(["png"], { type: "image/png" }))),
      toDataURL: vi.fn(() => "data:image/png;base64,AA==")
    };
    vi.stubGlobal("htmlToImage", {
      toCanvas: vi.fn(async () => {
        expect(wrapper.hasAttribute("data-html-deck-editor-export-visible")).toBe(true);
        expect(wrapper.style.opacity).toBe("1");
        expect(wrapper.style.getPropertyPriority("opacity")).toBe("important");
        return captureCanvas;
      })
    });
    vi.stubGlobal("requestAnimationFrame", (callback: FrameRequestCallback) => { callback(0); return 1; });
    const download = vi.spyOn(editor, "downloadBlob").mockImplementation(() => undefined);

    editor.openExportModal();
    (editor.controls.exportModal.querySelector("input[value='png']") as HTMLInputElement).checked = true;
    await editor.exportSelectedPages();

    expect(download).toHaveBeenCalledWith(expect.any(Blob), "动画导出-page-01.png");
    expect(wrapper.hasAttribute("data-html-deck-editor-export-visible")).toBe(false);
    expect(wrapper.style.opacity).toBe("0");
  });

  it("uses the export asset manifest for CSS background images", async () => {
    document.title = "背景图导出";
    document.body.innerHTML = [
      "<script id=\"html-deck-editor-export-assets\" type=\"application/json\">",
      "{\"assets\":[{\"path\":\"assets/2.webp\",\"keys\":[\"assets/2.webp\",\"2.webp\"],\"dataUrl\":\"data:image/webp;base64,WEBP\"}]}",
      "</script>",
      "<div id=\"deckStage\" class=\"deck-stage\">",
      "  <section class=\"slide active\">",
      "    <div id=\"panel\" style=\"width:640px;height:360px;background-image:url('assets/2.webp')\"></div>",
      "  </section>",
      "</div>"
    ].join("");
    const panel = document.getElementById("panel") as HTMLElement;
    panel.getBoundingClientRect = () => rect({ left: 80, top: 120, width: 640, height: 360 });

    installRuntime();
    const editor = (window as any).FrontendSlidesEditor.mount();
    const captureCanvas = {
      width: 3840,
      height: 2160,
      toBlob: vi.fn((callback: (blob: Blob) => void) => callback(new Blob(["png"], { type: "image/png" }))),
      toDataURL: vi.fn(() => "data:image/png;base64,AA==")
    };
    vi.stubGlobal("htmlToImage", {
      toCanvas: vi.fn(async () => {
        expect(panel.getAttribute("style")).toContain("data:image/webp;base64,WEBP");
        return captureCanvas;
      })
    });
    vi.stubGlobal("fetch", vi.fn(async () => { throw new Error("should not fetch manifest assets"); }));
    vi.stubGlobal("requestAnimationFrame", (callback: FrameRequestCallback) => { callback(0); return 1; });
    const download = vi.spyOn(editor, "downloadBlob").mockImplementation(() => undefined);

    editor.openExportModal();
    (editor.controls.exportModal.querySelector("input[value='png']") as HTMLInputElement).checked = true;
    await editor.exportSelectedPages();

    expect(window.fetch).not.toHaveBeenCalled();
    expect(download).toHaveBeenCalledWith(expect.any(Blob), "背景图导出-page-01.png");
    expect(panel.getAttribute("style")).toContain("assets/2.webp");
    expect(panel.getAttribute("style")).not.toContain("data:image/webp;base64,WEBP");
  });

  it("uses the export asset manifest for video poster images", async () => {
    document.title = "视频封面导出";
    document.body.innerHTML = [
      "<script id=\"html-deck-editor-export-assets\" type=\"application/json\">",
      "{\"assets\":[{\"path\":\"assets/poster.jpg\",\"keys\":[\"assets/poster.jpg\",\"poster.jpg\"],\"dataUrl\":\"data:image/jpeg;base64,POSTER\"}]}",
      "</script>",
      "<div id=\"deckStage\" class=\"deck-stage\">",
      "  <section class=\"slide active\">",
      "    <video id=\"video\" poster=\"assets/poster.jpg\"></video>",
      "  </section>",
      "</div>"
    ].join("");
    const video = document.getElementById("video") as HTMLVideoElement;
    video.getBoundingClientRect = () => rect({ left: 80, top: 120, width: 640, height: 360 });

    installRuntime();
    const editor = (window as any).FrontendSlidesEditor.mount();
    const captureCanvas = {
      width: 3840,
      height: 2160,
      toBlob: vi.fn((callback: (blob: Blob) => void) => callback(new Blob(["png"], { type: "image/png" }))),
      toDataURL: vi.fn(() => "data:image/png;base64,AA==")
    };
    vi.stubGlobal("htmlToImage", {
      toCanvas: vi.fn(async () => {
        expect(video.getAttribute("poster")).toBe("data:image/jpeg;base64,POSTER");
        return captureCanvas;
      })
    });
    vi.stubGlobal("fetch", vi.fn(async () => { throw new Error("should not fetch manifest assets"); }));
    vi.stubGlobal("requestAnimationFrame", (callback: FrameRequestCallback) => { callback(0); return 1; });
    const download = vi.spyOn(editor, "downloadBlob").mockImplementation(() => undefined);

    editor.openExportModal();
    (editor.controls.exportModal.querySelector("input[value='png']") as HTMLInputElement).checked = true;
    await editor.exportSelectedPages();

    expect(window.fetch).not.toHaveBeenCalled();
    expect(download).toHaveBeenCalledWith(expect.any(Blob), "视频封面导出-page-01.png");
    expect(video.getAttribute("poster")).toBe("assets/poster.jpg");
  });

  it("uses the export asset manifest for pseudo-element background images", async () => {
    document.title = "伪元素图导出";
    document.body.innerHTML = [
      "<script id=\"html-deck-editor-export-assets\" type=\"application/json\">",
      "{\"assets\":[{\"path\":\"assets/pseudo.png\",\"keys\":[\"assets/pseudo.png\",\"pseudo.png\"],\"dataUrl\":\"data:image/png;base64,PSEUDO\"}]}",
      "</script>",
      "<div id=\"deckStage\" class=\"deck-stage\">",
      "  <section class=\"slide active\">",
      "    <div id=\"badge\">Badge</div>",
      "  </section>",
      "</div>"
    ].join("");
    const badge = document.getElementById("badge") as HTMLElement;
    badge.getBoundingClientRect = () => rect({ left: 80, top: 120, width: 240, height: 80 });

    installRuntime();
    const editor = (window as any).FrontendSlidesEditor.mount();
    const style = document.createElement("style");
    style.textContent = "#badge::before{content:'';background-image:url('assets/pseudo.png')}";
    document.head.appendChild(style);
    const originalGetComputedStyle = window.getComputedStyle;
    vi.spyOn(window, "getComputedStyle").mockImplementation((element: Element, pseudo?: string | null) => {
      if (element === badge && pseudo === "::before") {
        return {
          backgroundImage: "url(\"assets/pseudo.png\")",
          maskImage: "none",
          webkitMaskImage: "none"
        } as CSSStyleDeclaration;
      }
      return originalGetComputedStyle(element, pseudo);
    });
    const captureCanvas = {
      width: 3840,
      height: 2160,
      toBlob: vi.fn((callback: (blob: Blob) => void) => callback(new Blob(["png"], { type: "image/png" }))),
      toDataURL: vi.fn(() => "data:image/png;base64,AA==")
    };
    vi.stubGlobal("htmlToImage", {
      toCanvas: vi.fn(async () => {
        expect(badge.getAttribute("data-html-deck-editor-export-pseudo")).toBeTruthy();
        expect(document.querySelector("style[data-html-deck-editor-export-pseudo-style]")?.textContent).toContain("data:image/png;base64,PSEUDO");
        return captureCanvas;
      })
    });
    vi.stubGlobal("fetch", vi.fn(async () => { throw new Error("should not fetch manifest assets"); }));
    vi.stubGlobal("requestAnimationFrame", (callback: FrameRequestCallback) => { callback(0); return 1; });
    const download = vi.spyOn(editor, "downloadBlob").mockImplementation(() => undefined);

    editor.openExportModal();
    (editor.controls.exportModal.querySelector("input[value='png']") as HTMLInputElement).checked = true;
    await editor.exportSelectedPages();

    expect(window.fetch).not.toHaveBeenCalled();
    expect(download).toHaveBeenCalledWith(expect.any(Blob), "伪元素图导出-page-01.png");
    expect(badge.hasAttribute("data-html-deck-editor-export-pseudo")).toBe(false);
    expect(document.querySelector("style[data-html-deck-editor-export-pseudo-style]")).toBeNull();
  });

  it("packages selected JPG pages in original order with quality 0.92", async () => {
    document.title = "选页测试";
    document.body.innerHTML = `
      <div id="deckStage" class="deck-stage">
        <section class="slide active"><h1>One</h1></section>
        <section class="slide"><h1>Two</h1></section>
        <section class="slide"><h1>Three</h1></section>
      </div>
    `;
    installRuntime();
    const editor = (window as any).FrontendSlidesEditor.mount();
    const rendered: string[] = [];
    const quality: number[] = [];
    vi.stubGlobal("htmlToImage", {
      toCanvas: vi.fn(async (slide: HTMLElement) => {
        rendered.push(slide.textContent?.trim() || "");
        return {
          width: 3840,
          height: 2160,
          toBlob: (callback: (blob: Blob) => void, _mime: string, value: number) => { quality.push(value); callback(new Blob([slide.textContent || ""])); },
          toDataURL: () => "data:image/jpeg;base64,AA=="
        };
      })
    });
    const zipFiles: string[] = [];
    class ZipStub {
      file(name: string): void { zipFiles.push(name); }
      async generateAsync(): Promise<Blob> { return new Blob(["zip"]); }
    }
    vi.stubGlobal("JSZip", ZipStub);
    vi.stubGlobal("requestAnimationFrame", (callback: FrameRequestCallback) => { callback(0); return 1; });
    const download = vi.spyOn(editor, "downloadBlob").mockImplementation(() => undefined);

    editor.openExportModal();
    editor.selectExportPages("none");
    const choices = editor.controls.exportPageList.querySelectorAll("input[type='checkbox']") as NodeListOf<HTMLInputElement>;
    choices[2].checked = true;
    choices[0].checked = true;
    editor.updateExportSelectionStatus();
    (editor.controls.exportModal.querySelector("input[value='jpg']") as HTMLInputElement).checked = true;
    await editor.exportSelectedPages();

    expect(rendered).toEqual(["One", "Three"]);
    expect(quality).toEqual([0.92, 0.92]);
    expect(zipFiles).toEqual(["选页测试-page-01.jpg", "选页测试-page-03.jpg"]);
    expect(download).toHaveBeenCalledWith(expect.any(Blob), "选页测试-jpg.zip");
  });

  it("creates one PDF page per selected slide with matching order and size", async () => {
    document.title = "PDF 测试";
    document.body.innerHTML = `
      <div id="deckStage" class="deck-stage">
        <section class="slide active"><h1>A</h1></section>
        <section class="slide"><h1>B</h1></section>
        <section class="slide"><h1>C</h1></section>
      </div>
    `;
    installRuntime();
    const editor = (window as any).FrontendSlidesEditor.mount();
    const rendered: string[] = [];
    vi.stubGlobal("htmlToImage", {
      toCanvas: vi.fn(async (slide: HTMLElement) => {
        rendered.push(slide.textContent?.trim() || "");
        return { width: 3840, height: 2160, toBlob: vi.fn(), toDataURL: vi.fn(() => "data:image/jpeg;base64,AA==") };
      })
    });
    const addPage = vi.fn();
    const addImage = vi.fn();
    const output = vi.fn(() => new Blob(["pdf"], { type: "application/pdf" }));
    const constructorOptions: any[] = [];
    class PdfStub {
      constructor(options: any) { constructorOptions.push(options); }
      addPage = addPage;
      addImage = addImage;
      output = output;
    }
    vi.stubGlobal("jspdf", { jsPDF: PdfStub });
    vi.stubGlobal("requestAnimationFrame", (callback: FrameRequestCallback) => { callback(0); return 1; });
    const download = vi.spyOn(editor, "downloadBlob").mockImplementation(() => undefined);

    editor.openExportModal();
    editor.selectExportPages("none");
    const choices = editor.controls.exportPageList.querySelectorAll("input[type='checkbox']") as NodeListOf<HTMLInputElement>;
    choices[2].checked = true;
    choices[1].checked = true;
    editor.updateExportSelectionStatus();
    await editor.exportSelectedPages();

    expect(rendered).toEqual(["B", "C"]);
    expect(constructorOptions[0]).toMatchObject({ unit: "px", format: [1920, 1080], orientation: "landscape" });
    expect(addPage).toHaveBeenCalledOnce();
    expect(addImage).toHaveBeenCalledTimes(2);
    expect(download).toHaveBeenCalledWith(expect.any(Blob), "PDF-测试.pdf");
  });

  it("reports a page-specific resource failure and restores the original editing state", async () => {
    document.body.innerHTML = `
      <div id="deckStage" class="deck-stage">
        <section class="slide active"><h1 id="title">Original</h1></section>
        <section class="slide"><img src="https://assets.example.com/blocked.png" alt="blocked"></section>
      </div>
    `;
    const blocked = document.querySelector("img") as HTMLImageElement;
    Object.defineProperty(blocked, "complete", { value: true, configurable: true });
    Object.defineProperty(blocked, "naturalWidth", { value: 0, configurable: true });
    installRuntime();
    const editor = (window as any).FrontendSlidesEditor.mount();
    const title = document.getElementById("title") as HTMLElement;
    editor.toggleEditMode(true);
    editor.select(title);
    vi.stubGlobal("htmlToImage", { toCanvas: vi.fn() });
    vi.stubGlobal("fetch", vi.fn(async () => { throw new Error("CORS"); }));
    vi.stubGlobal("requestAnimationFrame", (callback: FrameRequestCallback) => { callback(0); return 1; });
    const download = vi.spyOn(editor, "downloadBlob").mockImplementation(() => undefined);

    editor.openExportModal();
    editor.selectExportPages("none");
    const choices = editor.controls.exportPageList.querySelectorAll("input[type='checkbox']") as NodeListOf<HTMLInputElement>;
    choices[1].checked = true;
    editor.updateExportSelectionStatus();
    (editor.controls.exportModal.querySelector("input[value='png']") as HTMLInputElement).checked = true;
    await editor.exportSelectedPages();

    expect(download).not.toHaveBeenCalled();
    expect(editor.controls.exportStatus.textContent).toContain("第 2 页图片加载失败");
    expect(editor.presentation.currentSlide).toBe(0);
    expect(document.body.classList.contains("editing")).toBe(true);
    expect(editor.selected).toBe(title);
    expect(editor.controls.exportModal.hidden).toBe(false);
  });

  it("stops export when a managed online font is marked as failed", async () => {
    document.body.innerHTML = `<div id="deckStage" class="deck-stage"><section class="slide active"><h1>Font</h1></section></div>`;
    installRuntime();
    const editor = (window as any).FrontendSlidesEditor.mount();
    const link = document.createElement("link");
    link.dataset.htmlDeckEditorOnlineFont = "noto-serif-sc";
    link.dataset.htmlDeckEditorFontState = "error";
    document.head.appendChild(link);
    await expect(editor.waitForExportFonts()).rejects.toThrow("思源宋体");
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

  it("keeps undo available when browser draft storage is unavailable", () => {
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
    vi.mocked(localStorage.setItem).mockImplementation(() => {
      throw new DOMException("The quota has been exceeded.", "QuotaExceededError");
    });

    title.textContent = "配额超限后的修改";
    expect(() => editor.saveDraft(false, true)).not.toThrow();
    expect(editor.undoStack).toHaveLength(2);

    expect(() => editor.undo()).not.toThrow();
    expect((document.getElementById("title") as HTMLElement).textContent).toBe("原始标题");
  });

  it("stores inline image data only once in each history snapshot", () => {
    const imageData = `data:image/png;base64,${"a".repeat(2000)}`;
    document.body.innerHTML = `
      <div id="deckStage" class="deck-stage">
        <section class="slide active">
          <img id="hero" src="${imageData}" alt="测试图片">
        </section>
      </div>
    `;
    const hero = document.getElementById("hero") as HTMLElement;
    hero.getBoundingClientRect = () => rect({ left: 100, top: 100, width: 640, height: 360 });

    installRuntime();
    const editor = (window as any).FrontendSlidesEditor.mount();
    const serialized = editor.serialize();
    const snapshot = JSON.stringify(serialized);

    expect(serialized).not.toHaveProperty("items");
    expect(snapshot.split(imageData)).toHaveLength(2);
  });

  it("exports current text and inline images even when draft storage exceeds quota", async () => {
    const imageData = `data:image/png;base64,${"b".repeat(2000)}`;
    document.body.innerHTML = `
      <div id="deckStage" class="deck-stage">
        <section class="slide active">
          <h1 id="title" style="font-size:96px">导出后的文字仍在</h1>
          <img id="hero" src="${imageData}" alt="导出图片">
        </section>
      </div>
    `;
    (document.getElementById("title") as HTMLElement).getBoundingClientRect = () => rect({ left: 100, top: 100, width: 640, height: 120 });
    (document.getElementById("hero") as HTMLElement).getBoundingClientRect = () => rect({ left: 100, top: 260, width: 640, height: 360 });

    installRuntime();
    const editor = (window as any).FrontendSlidesEditor.mount();
    vi.mocked(localStorage.setItem).mockImplementation(() => {
      throw new DOMException("The quota has been exceeded.", "QuotaExceededError");
    });
    vi.spyOn(editor, "canWriteFile").mockReturnValue(false);
    const download = vi.spyOn(editor, "downloadHtml").mockImplementation(() => undefined);

    await expect(editor.exportHtml()).resolves.toBeUndefined();
    expect(download).toHaveBeenCalledOnce();
    const html = download.mock.calls[0][0] as string;
    expect(html).toContain("导出后的文字仍在");
    expect(html).toContain(imageData);
  });

  it("handles Ctrl+S from the inspector instead of opening the browser save dialog", () => {
    document.body.innerHTML = `
      <div id="deckStage" class="deck-stage">
        <section class="slide active">
          <h1 id="title" style="font-size:96px">快捷键保存</h1>
        </section>
      </div>
    `;
    const title = document.getElementById("title") as HTMLElement;
    title.getBoundingClientRect = () => rect({ left: 100, top: 100, width: 640, height: 120 });

    installRuntime();
    const editor = (window as any).FrontendSlidesEditor.mount();
    editor.toggleEditMode(true);
    editor.select(title);
    const exportHtml = vi.spyOn(editor, "exportHtml").mockResolvedValue(undefined);
    const event = new KeyboardEvent("keydown", { key: "s", ctrlKey: true, bubbles: true, cancelable: true });

    document.getElementById("textInput")?.dispatchEvent(event);

    expect(event.defaultPrevented).toBe(true);
    expect(exportHtml).toHaveBeenCalledOnce();
  });

  it("clicks a connected download link and revokes its object URL after the click", () => {
    document.body.innerHTML = `
      <div id="deckStage" class="deck-stage">
        <section class="slide active"><h1 style="font-size:96px">下载</h1></section>
      </div>
    `;
    vi.useFakeTimers();
    const createObjectURL = vi.fn(() => "blob:test-download");
    const revokeObjectURL = vi.fn();
    vi.stubGlobal("URL", { ...URL, createObjectURL, revokeObjectURL });
    let connectedWhenClicked = false;
    vi.spyOn(HTMLAnchorElement.prototype, "click").mockImplementation(function (this: HTMLAnchorElement) {
      connectedWhenClicked = this.isConnected;
    });

    installRuntime();
    const editor = (window as any).FrontendSlidesEditor.mount();
    editor.downloadText("内容", "index.html", "text/html;charset=utf-8");

    expect(connectedWhenClicked).toBe(true);
    expect(document.querySelector('a[download="index.html"]')).toBeNull();
    expect(revokeObjectURL).not.toHaveBeenCalled();
    vi.runAllTimers();
    expect(revokeObjectURL).toHaveBeenCalledWith("blob:test-download");
  });

  it("does not treat user content with editor-like IDs as editor chrome", () => {
    document.body.innerHTML = `
      <div id="deckStage" class="deck-stage">
        <section class="slide active">
          <button id="editToggle">用户按钮</button>
          <div id="editorShell" style="font-size:96px">用户 editorShell 内容</div>
          <div id="editorFrame" style="font-size:88px">用户 editorFrame 内容</div>
          <div id="editorToast" style="font-size:82px">用户 editorToast 内容</div>
          <div id="editorGuideV" style="font-size:76px">用户 editorGuideV 内容</div>
          <div id="editorGuideH" style="font-size:70px">用户 editorGuideH 内容</div>
        </section>
      </div>
    `;
    ["editToggle", "editorShell", "editorFrame", "editorToast", "editorGuideV", "editorGuideH"].forEach((id, index) => {
      (document.getElementById(id) as HTMLElement).getBoundingClientRect = () => rect({ left: 100, top: 100 + index * 80, width: 720, height: 70 });
    });

    installRuntime();
    const editor = (window as any).FrontendSlidesEditor.mount();
    const serialized = JSON.stringify(editor.serialize());
    const html = editor.buildExportHtml();

    expect(document.querySelectorAll("#editorShell")).toHaveLength(2);
    expect((document.querySelector("#editorShell[data-html-deck-editor-ui]") as HTMLElement)).toBeTruthy();
    expect(serialized).toContain("用户 editorShell 内容");
    expect(serialized).toContain("用户 editorFrame 内容");
    expect(serialized).toContain("用户 editorToast 内容");
    expect(serialized).toContain("用户 editorGuideV 内容");
    expect(serialized).toContain("用户 editorGuideH 内容");
    expect(html).toContain("用户按钮");
    expect(html).toContain("用户 editorFrame 内容");
    expect(html).not.toContain("data-html-deck-editor-ui");
  });

  it("trims large image history snapshots by total size instead of only entry count", () => {
    const imageData = `data:image/png;base64,${"c".repeat(600_000)}`;
    document.body.innerHTML = `
      <div id="deckStage" class="deck-stage">
        <section class="slide active">
          <h1 id="title" style="font-size:96px">第 0 次</h1>
          <img id="hero" src="${imageData}" alt="大图">
        </section>
      </div>
    `;
    (document.getElementById("title") as HTMLElement).getBoundingClientRect = () => rect({ left: 100, top: 100, width: 640, height: 120 });
    (document.getElementById("hero") as HTMLElement).getBoundingClientRect = () => rect({ left: 100, top: 260, width: 640, height: 360 });

    installRuntime();
    const editor = (window as any).FrontendSlidesEditor.mount();
    editor.historyCharacterLimit = 1_400_000;
    for (let index = 1; index <= 8; index += 1) {
      (document.getElementById("title") as HTMLElement).textContent = `第 ${index} 次`;
      editor.saveDraft(false, true);
    }

    expect(editor.undoStack.length).toBeLessThan(8);
    expect(editor.undoStack.length).toBeGreaterThanOrEqual(2);
    expect(editor.historyCharacterCount()).toBeLessThanOrEqual(editor.historyCharacterLimit + editor.undoStack[0].length);
    expect(editor.historyIndex).toBe(editor.undoStack.length - 1);
  });

  it("warns when replacing an image cannot be written to browser draft storage", () => {
    document.body.innerHTML = `
      <div id="deckStage" class="deck-stage">
        <section class="slide active">
          <img id="hero" src="old.png" alt="旧图">
        </section>
      </div>
    `;
    const hero = document.getElementById("hero") as HTMLElement;
    hero.getBoundingClientRect = () => rect({ left: 100, top: 100, width: 640, height: 360 });

    installRuntime();
    const editor = (window as any).FrontendSlidesEditor.mount();
    vi.mocked(localStorage.setItem).mockImplementation(() => {
      throw new DOMException("The quota has been exceeded.", "QuotaExceededError");
    });

    editor.replaceImage(hero, `data:image/png;base64,${"d".repeat(2000)}`);

    expect(document.getElementById("editorToast")?.textContent).toContain("草稿空间不足");
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

  it("exports AI handoff markdown with pending comments without leaking anchors into normal HTML", () => {
    document.body.innerHTML = `
      <div id="deckStage" class="deck-stage">
        <section class="slide active">
          <h1 id="title" style="font-size:96px">Original title</h1>
        </section>
        <section class="slide"><h1>Second slide</h1></section>
      </div>
    `;
    const title = document.getElementById("title") as HTMLElement;
    title.getBoundingClientRect = () => rect({ left: 100, top: 120, width: 720, height: 120 });

    installRuntime();
    const editor = (window as any).FrontendSlidesEditor.mount();
    editor.toggleEditMode(true);
    editor.select(title);

    const input = document.getElementById("commentInput") as HTMLTextAreaElement;
    input.value = "把标题改得更具体，并保持可编辑文本。";
    expect(editor.syncPendingCommentForAiExport()).toBe(true);

    const anchor = title.dataset.aiAnchor;
    expect(anchor).toMatch(/^ai-s01-text-/);
    expect(title.getAttribute("data-ai-commented")).toBe("true");

    const markdown = editor.buildAiHandoffMarkdown();
    expect(markdown).toContain("保持 deck-stage 结构");
    expect(markdown).toContain("保留现有图片和其他资源路径");
    expect(markdown).toContain("不要重命名、移动或删除资源文件");
    expect(markdown).toContain("返回完整、可保存为 index.html 的 HTML");
    expect(markdown).toContain(anchor);
    expect(markdown).toContain("把标题改得更具体");
    expect(markdown).toContain("Original title");

    const html = editor.buildExportHtml();
    expect(html).not.toContain("data-ai-anchor");
    expect(html).not.toContain("data-ai-commented");
  });

  it("keeps export assets in saved HTML but strips them from AI handoff", () => {
    document.body.innerHTML = [
      "<script id=\"html-deck-editor-export-assets\" type=\"application/json\">",
      "{\"assets\":[{\"path\":\"assets/1.jpg\",\"keys\":[\"assets/1.jpg\"],\"dataUrl\":\"data:image/jpeg;base64,AI_SHOULD_NOT_SEE_THIS\"}]}",
      "</script>",
      "<div id=\"deckStage\" class=\"deck-stage\">",
      "  <section class=\"slide active\"><h1 id=\"title\" style=\"font-size:96px\">Original title</h1></section>",
      "</div>"
    ].join("");
    const title = document.getElementById("title") as HTMLElement;
    title.getBoundingClientRect = () => rect({ left: 100, top: 120, width: 720, height: 120 });

    installRuntime();
    const editor = (window as any).FrontendSlidesEditor.mount();
    const savedHtml = editor.buildExportHtml();
    const aiHtml = editor.buildAiHandoffHtml();

    expect(savedHtml).toContain("html-deck-editor-export-assets");
    expect(savedHtml).toContain("AI_SHOULD_NOT_SEE_THIS");
    expect(aiHtml).not.toContain("html-deck-editor-export-assets");
    expect(aiHtml).not.toContain("AI_SHOULD_NOT_SEE_THIS");
  });

  it("opens for-ai handoff help from the toolbar", () => {
    document.body.innerHTML = `
      <div id="deckStage" class="deck-stage">
        <section class="slide active">
          <h1 id="title" style="font-size:96px">Original title</h1>
        </section>
      </div>
    `;
    const title = document.getElementById("title") as HTMLElement;
    title.getBoundingClientRect = () => rect({ left: 100, top: 120, width: 720, height: 120 });

    installRuntime();
    const editor = (window as any).FrontendSlidesEditor.mount();
    editor.toggleEditMode(true);

    const modal = document.getElementById("aiExportHelp") as HTMLElement;
    expect(modal.hidden).toBe(true);

    (document.getElementById("aiExportHelpBtn") as HTMLButtonElement).click();
    expect(modal.hidden).toBe(false);
    expect(modal.textContent).toContain("for-ai.md 是给外部 AI");
    expect(modal.textContent).toContain("保持 deck-stage 和 slide 层级");
    expect(modal.textContent).toContain("右侧 AI 批注");
    expect(modal.textContent).toContain("不需要再补充提示");
    expect(modal.textContent).toContain("替换原项目中的同名文件");
    expect(modal.textContent).toContain("保留原来的 assets 文件夹和目录结构");
    expect(modal.textContent).not.toContain("用户自己的 API");
    expect(modal.textContent).not.toContain("这一步可以自动化");

    (document.getElementById("aiExportHelpCloseBtn") as HTMLButtonElement).click();
    expect(modal.hidden).toBe(true);
  });

  it("describes format brush and right-side AI comments in the editor help", () => {
    document.body.innerHTML = `
      <div id="deckStage" class="deck-stage">
        <section class="slide active">
          <h1 id="title" style="font-size:96px">Original title</h1>
        </section>
      </div>
    `;
    const title = document.getElementById("title") as HTMLElement;
    title.getBoundingClientRect = () => rect({ left: 100, top: 120, width: 720, height: 120 });

    installRuntime();
    const editor = (window as any).FrontendSlidesEditor.mount();
    editor.toggleEditMode(true);

    const modal = document.getElementById("editorHelp") as HTMLElement;
    (document.getElementById("helpBtn") as HTMLButtonElement).click();

    expect(modal.hidden).toBe(false);
    expect(modal.textContent).toContain("工具栏小刷子");
    expect(modal.textContent).toContain("右侧 AI 批注");
    expect(modal.textContent).not.toContain("先点“批注”");
  });

  it("uses an icon-only format brush and removes the top comment mode button", () => {
    document.body.innerHTML = `
      <div id="deckStage" class="deck-stage">
        <section class="slide active">
          <h1 id="source" style="font-size:88px;color:#ff0000;background:#d9f99d;font-weight:800">Source</h1>
          <h2 id="target" style="font-size:42px;color:#111111">Target</h2>
        </section>
      </div>
    `;
    const source = document.getElementById("source") as HTMLElement;
    const target = document.getElementById("target") as HTMLElement;
    source.getBoundingClientRect = () => rect({ left: 100, top: 120, width: 720, height: 120 });
    target.getBoundingClientRect = () => rect({ left: 100, top: 280, width: 560, height: 90 });

    installRuntime();
    const editor = (window as any).FrontendSlidesEditor.mount();
    editor.toggleEditMode(true);

    expect(document.getElementById("commentModeBtn")).toBeNull();
    const brush = document.getElementById("formatBrushBtn") as HTMLButtonElement;
    expect(brush).toBeTruthy();
    expect(brush.textContent?.trim()).toBe("");
    expect(brush.querySelector("svg")).toBeTruthy();
    expect(brush.disabled).toBe(true);

    editor.select(source);
    expect(brush.disabled).toBe(false);
    brush.click();
    expect(brush.getAttribute("aria-pressed")).toBe("true");

    target.dispatchEvent(new Event("pointerdown", { bubbles: true, cancelable: true }));
    target.dispatchEvent(new Event("click", { bubbles: true, cancelable: true }));

    expect(target.style.fontSize).toBe("88px");
    expect(target.style.color).toBe("rgb(255, 0, 0)");
    expect(target.style.backgroundColor).toBe("rgb(217, 249, 157)");
    expect(target.style.fontWeight).toBe("800");
    expect(brush.getAttribute("aria-pressed")).toBe("false");
  });

  it("applies the format brush to selected text instead of the whole text box", () => {
    document.body.innerHTML = `
      <div id="deckStage" class="deck-stage">
        <section class="slide active">
          <h1 id="source" style="font-size:48px">A<span id="sample" style="font-size:88px;color:#ff0000;background-color:#d9f99d;font-weight:800">B</span>C</h1>
          <h2 id="target" style="font-size:42px;color:#111111;background-color:#ffffff;font-weight:400">XYZ</h2>
        </section>
      </div>
    `;
    const source = document.getElementById("source") as HTMLElement;
    const sample = document.getElementById("sample") as HTMLElement;
    const target = document.getElementById("target") as HTMLElement;
    source.getBoundingClientRect = () => rect({ left: 100, top: 120, width: 720, height: 120 });
    target.getBoundingClientRect = () => rect({ left: 100, top: 280, width: 560, height: 90 });

    installRuntime();
    const editor = (window as any).FrontendSlidesEditor.mount();
    editor.toggleEditMode(true);
    const brush = document.getElementById("formatBrushBtn") as HTMLButtonElement;

    editor.select(source);
    const selectRange = (node: Text, start: number, end: number) => {
      const range = document.createRange();
      range.setStart(node, start);
      range.setEnd(node, end);
      const selection = window.getSelection() as Selection;
      selection.removeAllRanges();
      selection.addRange(range);
      document.dispatchEvent(new Event("selectionchange"));
    };
    selectRange(sample.firstChild as Text, 0, 1);
    brush.click();

    editor.select(target);
    selectRange(target.firstChild as Text, 1, 2);
    editor.applyFormatBrush(target);

    const styled = target.querySelector("span") as HTMLElement;
    expect(target.textContent).toBe("XYZ");
    expect(styled.textContent).toBe("Y");
    expect(styled.style.fontSize).toBe("88px");
    expect(styled.style.color).toBe("rgb(255, 0, 0)");
    expect(styled.style.backgroundColor).toBe("rgb(217, 249, 157)");
    expect(styled.style.fontWeight).toBe("700");
    expect(target.style.fontSize).toBe("42px");
    expect(target.style.color).toBe("rgb(17, 17, 17)");
    expect(target.style.backgroundColor).toBe("rgb(255, 255, 255)");
    expect(brush.getAttribute("aria-pressed")).toBe("false");
  });

});
