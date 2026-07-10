import { afterEach, beforeEach, describe, expect, it, vi } from "vitest";
import editorRuntime from "../runtime/html-deck-editor-base.js?raw";
import editorCss from "../runtime/html-deck-editor.css?raw";

const NEW_SRC = "data:image/png;base64,ZmFrZS1uZXctaW1hZ2U=";

function installRuntime(): void {
  const style = document.createElement("style");
  style.textContent = editorCss;
  document.head.appendChild(style);
  window.eval(editorRuntime);
}

describe("repro: replaced image survives slide navigation", () => {
  let storage: Map<string, string>;
  let quotaExceeded: boolean;

  beforeEach(() => {
    window.getSelection()?.removeAllRanges();
    document.body.innerHTML = "";
    document.head.innerHTML = "";
    storage = new Map<string, string>();
    quotaExceeded = false;
    vi.stubGlobal("localStorage", {
      getItem: vi.fn((key: string) => storage.get(key) || null),
      setItem: vi.fn((key: string, value: string) => {
        if (quotaExceeded) throw new DOMException("quota", "QuotaExceededError");
        storage.set(key, String(value));
      }),
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
    vi.unstubAllGlobals();
  });

  function mountDeck(): any {
    document.body.innerHTML = `
      <div id="deckStage" class="deck-stage">
        <section class="slide active" data-title="P1">
          <img id="img1" src="assets/a.png" alt="one" data-editable-media>
          <h1>Page one</h1>
        </section>
        <section class="slide" data-title="P2">
          <img id="img2" src="assets/b.png" alt="two" data-editable-media>
          <h1>Page two</h1>
        </section>
      </div>
    `;
    installRuntime();
    const editor = (window as any).FrontendSlidesEditor.mount();
    editor.toggleEditMode(true);
    return editor;
  }

  it("keeps a replaced image after navigating away and back", () => {
    const editor = mountDeck();
    const img1 = document.getElementById("img1") as HTMLImageElement;
    editor.select(img1.closest("[data-editable-media]") || img1);
    editor.replaceImage(img1, NEW_SRC);

    editor.presentation.showSlide(1);
    editor.presentation.showSlide(0);

    expect((document.getElementById("img1") as HTMLImageElement).getAttribute("src")).toBe(NEW_SRC);
  });

  it("keeps independent replacements on two slides", () => {
    const editor = mountDeck();
    const img1 = document.getElementById("img1") as HTMLImageElement;
    editor.replaceImage(img1, NEW_SRC);
    editor.presentation.showSlide(1);
    const img2 = document.getElementById("img2") as HTMLImageElement;
    editor.replaceImage(img2, "data:image/png;base64,c2Vjb25k");
    editor.presentation.showSlide(0);

    expect((document.getElementById("img1") as HTMLImageElement).getAttribute("src")).toBe(NEW_SRC);
  });

  it("stores draft freshness metadata under a title-independent key", () => {
    document.title = "Original title";
    const editor = mountDeck();
    editor.saveDraft(false);
    const draft = JSON.parse(storage.get(editor.storageKey) || "{}");

    expect(editor.storageKey).not.toContain("Original title");
    expect(editor.legacyStorageKeys.some((key: string) => key.includes("Original title"))).toBe(true);
    expect(draft.savedAt).toEqual(expect.any(Number));
    expect(draft.sourceFingerprint).toMatch(/^fnv1a-/);
  });

  it("keeps the replacement when undo follows batched position changes and slide navigation", () => {
    const editor = mountDeck();
    const img1 = document.getElementById("img1") as HTMLImageElement;
    editor.replaceImage(img1, NEW_SRC);
    editor.select(img1);
    const historyBeforeNudge = editor.undoStack.length;
    for (let index = 0; index < 20; index += 1) {
      document.dispatchEvent(new KeyboardEvent("keydown", { bubbles: true, key: "ArrowRight" }));
    }

    expect(editor.undoStack).toHaveLength(historyBeforeNudge);
    window.dispatchEvent(new KeyboardEvent("keyup", { bubbles: true, key: "ArrowRight" }));
    expect(editor.undoStack).toHaveLength(historyBeforeNudge + 1);

    editor.presentation.showSlide(1);
    editor.undo();
    editor.presentation.showSlide(0);

    expect((document.getElementById("img1") as HTMLImageElement).getAttribute("src")).toBe(NEW_SRC);
  });

  it("does not restore a stale draft after image persistence exceeds quota", () => {
    const editor = mountDeck();
    editor.saveDraft(false);
    const img1 = document.getElementById("img1") as HTMLImageElement;
    quotaExceeded = true;
    editor.replaceImage(img1, NEW_SRC);
    quotaExceeded = false;

    (window as any).editor?.destroy?.();
    document.body.innerHTML = document.body.innerHTML;
    const remounted = (window as any).FrontendSlidesEditor.mount();

    expect((document.getElementById("img1") as HTMLImageElement).getAttribute("src")).toBe(NEW_SRC);
    remounted.destroy?.();
  });

  it("does not let an older browser draft overwrite externally updated HTML", () => {
    const editor = mountDeck();
    editor.saveDraft(false);
    editor.destroy();
    const title = document.querySelector("#deckStage .slide h1") as HTMLElement;
    title.textContent = "Externally updated page";

    const remounted = (window as any).FrontendSlidesEditor.mount();

    expect((document.querySelector("#deckStage .slide h1") as HTMLElement).textContent).toBe("Externally updated page");
    expect(document.getElementById("editorConfirm")?.hidden).toBe(false);
    expect(storage.has(remounted.storageKey)).toBe(true);
    remounted.runConfirmedAction();
    expect((document.querySelector("#deckStage .slide h1") as HTMLElement).textContent).toBe("Page one");
    remounted.destroy?.();
  });

  it("keeps the draft storage warning visible until persistence recovers", () => {
    vi.useFakeTimers();
    try {
      const editor = mountDeck();
      quotaExceeded = true;
      editor.replaceImage(document.getElementById("img1") as HTMLImageElement, NEW_SRC);

      vi.advanceTimersByTime(5_000);

      expect(document.getElementById("editorToast")?.classList.contains("show")).toBe(true);
      expect(document.getElementById("editorToast")?.textContent).toContain("草稿空间不足");

      quotaExceeded = false;
      editor.saveDraft(false);
      expect(document.getElementById("editorToast")?.classList.contains("show")).toBe(false);
    } finally {
      vi.useRealTimers();
    }
  });

  it("replays the replacement after a host slide player rebuilds the DOM", () => {
    document.body.innerHTML = `
      <div id="deckStage" class="deck-stage" data-html-deck-editor-stage="preserve">
        <section class="slide active" data-title="P1"><img id="img1" src="assets/a.png"></section>
        <section class="slide" data-title="P2"><img id="img2" src="assets/b.png"></section>
      </div>
    `;
    const stage = document.getElementById("deckStage") as HTMLElement;
    const original = Array.from(stage.querySelectorAll(".slide")).map((slide) => slide.innerHTML);
    (window as any).__playSlide = (index: number) => {
      const slides = Array.from(stage.querySelectorAll(".slide"));
      slides.forEach((slide, slideIndex) => {
        slide.classList.toggle("active", slideIndex === index);
        slide.innerHTML = original[slideIndex];
      });
    };
    installRuntime();
    const editor = (window as any).FrontendSlidesEditor.mount();
    editor.toggleEditMode(true);
    const img1 = document.getElementById("img1") as HTMLImageElement;
    editor.replaceImage(img1, NEW_SRC);

    editor.presentation.showSlide(1);
    editor.presentation.showSlide(0);

    expect((document.getElementById("img1") as HTMLImageElement).getAttribute("src")).toBe(NEW_SRC);
  });

  it("replays patches when the host calls __playSlide directly", async () => {
    document.body.innerHTML = `
      <div id="deckStage" class="deck-stage" data-html-deck-editor-stage="preserve">
        <section class="slide active" data-title="P1"><h1 id="title" data-editable>Original</h1></section>
        <section class="slide" data-title="P2"><p>Page two</p></section>
      </div>
    `;
    const stage = document.getElementById("deckStage") as HTMLElement;
    const original = Array.from(stage.querySelectorAll(".slide")).map((slide) => slide.innerHTML);
    (window as any).__playSlide = (index: number) => {
      stage.querySelectorAll(".slide").forEach((slide, slideIndex) => {
        slide.classList.toggle("active", slideIndex === index);
        slide.innerHTML = original[slideIndex];
      });
    };
    installRuntime();
    const editor = (window as any).FrontendSlidesEditor.mount();
    editor.toggleEditMode(true);
    const title = document.getElementById("title") as HTMLElement;
    editor.select(title);
    title.textContent = "Direct host replay";
    title.dispatchEvent(new Event("input", { bubbles: true }));
    const firstSlide = stage.querySelector(".slide") as HTMLElement;
    firstSlide.classList.add("visible");
    firstSlide.setAttribute("data-deck-active", "");

    (window as any).__playSlide(1);
    await new Promise((resolve) => window.setTimeout(resolve, 0));
    expect(editor.presentation.currentSlide).toBe(1);
    (window as any).__playSlide(0);
    await new Promise((resolve) => window.setTimeout(resolve, 0));

    expect(document.getElementById("title")?.textContent).toBe("Direct host replay");
  });

  it("replays edited text and newly added images after a host rebuild", () => {
    document.body.innerHTML = `
      <div id="deckStage" class="deck-stage" data-html-deck-editor-stage="preserve">
        <section class="slide active" data-title="P1"><h1 id="title" data-editable>Original</h1></section>
        <section class="slide" data-title="P2"><p>Page two</p></section>
      </div>
    `;
    const stage = document.getElementById("deckStage") as HTMLElement;
    const original = Array.from(stage.querySelectorAll(".slide")).map((slide) => slide.innerHTML);
    (window as any).__playSlide = (index: number) => {
      const slides = Array.from(stage.querySelectorAll(".slide"));
      slides.forEach((slide, slideIndex) => {
        slide.classList.toggle("active", slideIndex === index);
        slide.innerHTML = original[slideIndex];
      });
    };
    installRuntime();
    const editor = (window as any).FrontendSlidesEditor.mount();
    editor.toggleEditMode(true);
    const title = document.getElementById("title") as HTMLElement;
    editor.select(title);
    title.textContent = "Edited text";
    title.dispatchEvent(new Event("input", { bubbles: true }));
    editor.addImage(NEW_SRC);

    editor.presentation.showSlide(1);
    editor.presentation.showSlide(0);

    expect(document.getElementById("title")?.textContent).toBe("Edited text");
    expect(stage.querySelector(`.image-layer img[src="${NEW_SRC}"]`)).toBeTruthy();
  });
});
