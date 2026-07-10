import { afterEach, beforeEach, describe, expect, it, vi } from "vitest";
import editorRuntime from "../runtime/html-deck-editor-base.js?raw";
import editorCss from "../runtime/html-deck-editor.css?raw";
import deckStageRuntime from "../runtime/deck-stage.js?raw";

function installRuntime(): void {
  const style = document.createElement("style");
  style.textContent = editorCss;
  document.head.appendChild(style);
  window.eval(editorRuntime);
}

function installDeck(): HTMLElement {
  document.body.innerHTML = `
    <div id="deckStage" class="deck-stage">
      <section class="slide active">
        <h1 id="title" data-editable>Lifecycle test</h1>
      </section>
      <section class="slide"><p>Second page</p></section>
    </div>
  `;
  return document.getElementById("deckStage") as HTMLElement;
}

describe("editor mount and destroy lifecycle", () => {
  beforeEach(() => {
    document.head.innerHTML = "";
    document.body.innerHTML = "";
    document.body.className = "";
    vi.stubGlobal("localStorage", {
      getItem: vi.fn(() => null),
      setItem: vi.fn(),
      removeItem: vi.fn(),
      clear: vi.fn()
    });
    delete (window as any).FrontendSlidesEditor;
    delete (window as any).editor;
    delete (window as any).presentation;
    delete (window as any).__playSlide;
    installDeck();
    installRuntime();
  });

  afterEach(() => {
    (window as any).editor?.destroy?.();
    document.body.className = "";
    vi.restoreAllMocks();
    vi.unstubAllGlobals();
  });

  it("does not retain window resize listeners across remounts", () => {
    const originalAdd = window.addEventListener.bind(window);
    const originalRemove = window.removeEventListener.bind(window);
    const addedResizeListeners: EventListenerOrEventListenerObject[] = [];
    const removedResizeListeners = new Set<EventListenerOrEventListenerObject>();

    vi.spyOn(window, "addEventListener").mockImplementation((type, listener, options) => {
      if (type === "resize") addedResizeListeners.push(listener);
      originalAdd(type, listener, options);
    });
    vi.spyOn(window, "removeEventListener").mockImplementation((type, listener, options) => {
      if (type === "resize") removedResizeListeners.add(listener);
      originalRemove(type, listener, options);
    });

    try {
      for (let index = 0; index < 10; index += 1) {
        const editor = (window as any).FrontendSlidesEditor.mount();
        editor.destroy();
        expect(addedResizeListeners.filter((listener) => !removedResizeListeners.has(listener))).toHaveLength(0);
      }
    } finally {
      addedResizeListeners.forEach((listener) => originalRemove("resize", listener));
    }
  });

  it("binds editable elements to the new instance after remount", () => {
    const first = (window as any).FrontendSlidesEditor.mount();
    first.toggleEditMode(true);
    const title = document.getElementById("title") as HTMLElement;
    expect(title.dataset.editorBound).toBe("true");
    first.destroy();

    const second = (window as any).FrontendSlidesEditor.mount();
    second.toggleEditMode(true);
    const saveDraft = vi.spyOn(second, "saveDraft");
    title.dispatchEvent(new Event("input", { bubbles: true }));

    expect(saveDraft).toHaveBeenCalled();
  });

  it("restores body state and authored stage transform when destroyed", () => {
    const stage = document.getElementById("deckStage") as HTMLElement;
    stage.style.transform = "rotate(1deg)";
    stage.style.transformOrigin = "center center";
    const originalTransform = stage.style.transform;
    const originalTransformOrigin = stage.style.transformOrigin;
    const editor = (window as any).FrontendSlidesEditor.mount();
    editor.toggleEditMode(true);

    editor.destroy();

    expect(document.body.classList.contains("editing")).toBe(false);
    expect(document.body.classList.contains("editor-on")).toBe(false);
    expect(stage.style.transform).toBe(originalTransform);
    expect(stage.style.transformOrigin).toBe(originalTransformOrigin);
    expect(stage.dataset.scale).toBeUndefined();
    expect(stage.dataset.offsetX).toBeUndefined();
    expect(stage.dataset.offsetY).toBeUndefined();
  });

  it("restores authored hidden state after editing a native deck-stage slide", () => {
    if (!customElements.get("deck-stage")) window.eval(deckStageRuntime);
    history.replaceState(null, "", "#1");
    document.body.innerHTML = `
      <deck-stage id="deckStage" width="1920" height="1080" data-html-deck-editor-stage="preserve" style="transform:translateX(6px)">
        <section>Visible</section>
        <section hidden aria-hidden="true" class="is-hidden" style="display:none;visibility:hidden;opacity:0">Hidden</section>
      </deck-stage>
    `;
    const stage = document.getElementById("deckStage") as any;
    stage.refreshSlides();
    const hidden = stage.children[1] as HTMLElement;
    const editor = (window as any).FrontendSlidesEditor.mount();
    editor.toggleEditMode(true);

    (editor.controls.slideRail.querySelector('[data-slide-index="1"]') as HTMLButtonElement).click();
    expect({ stageIndex: stage.index, currentSlide: editor.presentation.currentSlide, editorActive: editor.isActive }).toEqual({
      stageIndex: 1,
      currentSlide: 1,
      editorActive: true
    });
    expect(hidden.hasAttribute("hidden")).toBe(false);
    expect(hidden.hasAttribute("data-html-deck-editor-hidden-state")).toBe(true);

    editor.toggleEditMode(false);
    expect(stage.style.transform).toBe("translateX(6px)");
    expect(hidden.hasAttribute("hidden")).toBe(true);
    expect(hidden.getAttribute("aria-hidden")).toBe("true");
    expect(hidden.classList.contains("is-hidden")).toBe(true);
    expect(hidden.style.display).toBe("none");
    expect(hidden.style.visibility).toBe("hidden");
    expect(hidden.style.opacity).toBe("0");
    expect(hidden.hasAttribute("data-html-deck-editor-hidden-state")).toBe(false);

    editor.presentation.showSlide(1);
    expect(hidden.hasAttribute("hidden")).toBe(true);
    expect(hidden.hasAttribute("data-html-deck-editor-hidden-state")).toBe(false);
  });
});
