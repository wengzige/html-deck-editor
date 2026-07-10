import { afterEach, beforeEach, describe, expect, it, vi } from "vitest";
import editorRuntime from "../runtime/html-deck-editor-base.js?raw";
import editorCss from "../runtime/html-deck-editor.css?raw";

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

  it.fails("does not retain window resize listeners across remounts", () => {
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
      const first = (window as any).FrontendSlidesEditor.mount();
      first.destroy();
      expect(addedResizeListeners.filter((listener) => !removedResizeListeners.has(listener))).toHaveLength(0);

      const second = (window as any).FrontendSlidesEditor.mount();
      second.destroy();
      expect(addedResizeListeners.filter((listener) => !removedResizeListeners.has(listener))).toHaveLength(0);
    } finally {
      addedResizeListeners.forEach((listener) => originalRemove("resize", listener));
    }
  });

  it.fails("binds editable elements to the new instance after remount", () => {
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

  it.fails("restores body state and authored stage transform when destroyed", () => {
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
});
