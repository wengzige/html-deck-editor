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

  it("reconnects without duplicating shadow DOM or event handlers", () => {
    document.body.innerHTML = `
      <deck-stage id="deckStage">
        <section>A</section>
        <section>B</section>
        <section>C</section>
      </deck-stage>
    `;
    const stage = document.getElementById("deckStage") as any;
    stage.refreshSlides();
    stage.goTo(1);
    const root = stage.shadowRoot as ShadowRoot;
    const slot = root.querySelector("slot");
    const next = root.querySelector(".next") as HTMLButtonElement;
    stage._flashOverlay();

    stage.remove();

    expect(stage._hideTimer).toBeNull();
    expect(root.querySelector(".overlay")?.hasAttribute("data-visible")).toBe(false);
    document.body.appendChild(stage);

    expect(root.querySelectorAll("style")).toHaveLength(1);
    expect(root.querySelectorAll(".stage")).toHaveLength(1);
    expect(root.querySelectorAll("slot")).toHaveLength(1);
    expect(root.querySelectorAll(".overlay")).toHaveLength(1);
    expect(root.querySelector("slot")).toBe(slot);
    expect(root.querySelector(".next")).toBe(next);

    next.click();
    expect(stage.index).toBe(2);
  });

  it("ignores prevented keyboard events and interactive controls", () => {
    document.body.innerHTML = `
      <deck-stage id="deckStage">
        <section>
          <input id="input">
          <textarea id="textarea"></textarea>
          <select id="select"><option>A</option></select>
          <button id="button" type="button">Action</button>
          <div id="roleButton" role="button" tabindex="0">Role button</div>
          <div id="editable" contenteditable="true">Editable</div>
        </section>
        <section>B</section>
      </deck-stage>
    `;
    const stage = document.getElementById("deckStage") as any;
    stage.refreshSlides();
    const prevented = new KeyboardEvent("keydown", { key: "ArrowRight", bubbles: true, cancelable: true });
    prevented.preventDefault();
    window.dispatchEvent(prevented);
    expect(stage.index).toBe(0);

    const targets = ["input", "textarea", "select", "button", "roleButton", "editable"];
    targets.forEach((id) => {
      document.getElementById(id)?.dispatchEvent(new KeyboardEvent("keydown", {
        key: " ",
        bubbles: true,
        composed: true,
        cancelable: true
      }));
      expect(stage.index).toBe(0);
    });

    const next = stage.shadowRoot.querySelector(".next") as HTMLButtonElement;
    next.dispatchEvent(new KeyboardEvent("keydown", {
      key: " ",
      bubbles: true,
      composed: true,
      cancelable: true
    }));
    expect(stage.index).toBe(0);
    next.click();
    expect(stage.index).toBe(1);
  });

  it("does not reset or jump slides from editor keys and tap zones", () => {
    document.body.innerHTML = `
      <deck-stage id="deckStage">
        <section>A</section>
        <section>B</section>
        <section>C</section>
      </deck-stage>
    `;
    const stage = document.getElementById("deckStage") as any;
    stage.refreshSlides();
    document.body.classList.add("editing");

    [" ", "Spacebar", "R", "2"].forEach((key) => {
      window.dispatchEvent(new KeyboardEvent("keydown", { key, bubbles: true, cancelable: true }));
      expect(stage.index).toBe(0);
    });
    (stage.shadowRoot.querySelector(".tapzone--fwd") as HTMLElement).click();
    expect(stage.index).toBe(0);
  });

  it("preserves non-page hashes while continuing to synchronize numeric hashes", () => {
    history.replaceState(null, "", "#section-details");
    document.body.innerHTML = `
      <deck-stage id="deckStage">
        <section>A</section>
        <section>B</section>
      </deck-stage>
    `;
    const stage = document.getElementById("deckStage") as any;
    stage.refreshSlides();
    stage.goTo(1);
    expect(location.hash).toBe("#section-details");

    history.replaceState(null, "", "#1");
    stage.goTo(1);
    expect(location.hash).toBe("#2");
    stage.goTo(0);
    expect(location.hash).toBe("#1");
  });

  it("isolates print page rules per instance and removes only disconnected styles", () => {
    document.body.innerHTML = `
      <deck-stage id="first" width="1000" height="500"><section>A</section></deck-stage>
      <deck-stage id="second" width="1600" height="900"><section>B</section></deck-stage>
    `;
    const first = document.getElementById("first") as HTMLElement;
    const second = document.getElementById("second") as HTMLElement;
    const firstPage = first.getAttribute("data-deck-print-page");
    const secondPage = second.getAttribute("data-deck-print-page");
    const firstStyle = document.head.querySelector(`[data-deck-stage-print-style="${firstPage}"]`);
    const secondStyle = document.head.querySelector(`[data-deck-stage-print-style="${secondPage}"]`);

    expect(firstPage).toBeTruthy();
    expect(secondPage).toBeTruthy();
    expect(firstPage).not.toBe(secondPage);
    expect(firstStyle?.textContent).toContain("size: 1000px 500px");
    expect(secondStyle?.textContent).toContain("size: 1600px 900px");
    expect(document.getElementById("deck-stage-print-page")).toBeNull();

    first.remove();
    expect(firstStyle?.isConnected).toBe(false);
    expect(secondStyle?.isConnected).toBe(true);
  });
});
