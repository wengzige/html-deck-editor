import { beforeAll, beforeEach, describe, expect, it } from "vitest";
import deckStageRuntime from "../runtime/deck-stage.js?raw";

describe("deck-stage editor APIs", () => {
  beforeAll(() => {
    window.eval(deckStageRuntime);
  });

  beforeEach(() => {
    document.body.innerHTML = "";
    document.head.innerHTML = "";
    history.replaceState(null, "", "#1");
  });

  it("refreshes reordered slides while preserving the active element identity", () => {
    document.body.innerHTML = `
      <deck-stage id="deckStage" width="1000" height="500">
        <section class="slide" data-label="A">A</section>
        <section class="slide" data-label="B">B</section>
        <section class="slide" data-label="C">C</section>
      </deck-stage>
    `;
    const stage = document.getElementById("deckStage") as any;
    stage.refreshSlides();
    stage.goTo(1);
    const active = stage.children[1] as HTMLElement;
    stage.appendChild(stage.children[0]);

    stage.refreshSlides(active);

    expect(stage.index).toBe(0);
    expect(stage.length).toBe(3);
    expect(Array.from(stage.children).map((slide: any) => slide.dataset.deckSlide)).toEqual(["0", "1", "2"]);
    expect(Array.from(stage.children).map((slide: any) => slide.dataset.screenLabel)).toEqual(["01 B", "02 C", "03 A"]);
    expect(active.hasAttribute("data-deck-active")).toBe(true);
    expect(location.hash).toBe("#1");
  });

  it("applies a transient clamped editor view to the inner canvas", () => {
    document.body.innerHTML = `
      <deck-stage id="deckStage" width="1000" height="500">
        <section class="slide">A</section>
      </deck-stage>
    `;
    const stage = document.getElementById("deckStage") as any;
    const stageBox = stage.shadowRoot.querySelector(".stage") as HTMLElement;
    stageBox.getBoundingClientRect = () => new DOMRect(0, 0, 1200, 700);

    stage.setEditorView({ zoom: 9, offsetX: 24, offsetY: -16 });

    const canvas = stage.shadowRoot.querySelector(".canvas") as HTMLElement;
    expect(canvas.style.transform).toBe("translate(24px, -16px) scale(2.4)");
    stage.setEditorView({ zoom: 0.1, offsetX: 0, offsetY: 0 });
    expect(canvas.style.transform).toBe("translate(0px, 0px) scale(0.6)");
  });
});
