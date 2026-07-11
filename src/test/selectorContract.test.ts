import { describe, expect, it } from "vitest";
import { selectorForElement } from "../lib/selectorContract.js";

function selectorRoundTrip(element: Element): string {
  const selector = selectorForElement(element);
  expect(element.ownerDocument.querySelectorAll(selector)).toHaveLength(1);
  expect(element.ownerDocument.querySelector(selector)).toBe(element);
  return selector;
}

describe("shared selector contract", () => {
  it("round-trips IDs that require CSS string escaping", () => {
    const values = [
      "123-title",
      "中文标题",
      "emoji-🚀",
      "space title",
      "colon:title",
      "dot.title",
      "slash/title",
      'quote"title',
      "back\\slash"
    ];

    for (const value of values) {
      const doc = document.implementation.createHTMLDocument("");
      const element = doc.createElement("h1");
      element.id = value;
      doc.body.appendChild(element);
      expect(selectorRoundTrip(element)).toContain("[id=");
    }
  });

  it("prefers stable AI and edit anchors before structural paths", () => {
    const doc = document.implementation.createHTMLDocument("");
    doc.body.innerHTML = `
      <section><p data-ai-anchor='hero:"one'>AI anchor</p></section>
      <section><p data-edit-id='layer\\one'>Edit anchor</p></section>
    `;
    const aiAnchor = doc.querySelector("[data-ai-anchor]") as Element;
    const editId = doc.querySelector("[data-edit-id]") as Element;

    expect(selectorRoundTrip(aiAnchor)).toBe('[data-ai-anchor="hero:\\"one"]');
    expect(selectorRoundTrip(editId)).toBe('[data-edit-id="layer\\\\one"]');
  });

  it("falls back through duplicate IDs and classes without selecting the wrong node", () => {
    const doc = document.implementation.createHTMLDocument("");
    doc.body.innerHTML = `
      <main>
        <section><p id="duplicate" class="9lead">First</p></section>
        <section><p id="duplicate" class="9lead">Second</p></section>
      </main>
    `;
    const targets = Array.from(doc.querySelectorAll("p"));

    const selectors = targets.map(selectorRoundTrip);
    expect(new Set(selectors).size).toBe(2);
    expect(selectors.every((selector) => selector.includes(":nth-of-type") || selector.includes("section"))).toBe(true);
  });

  it("ignores transient bridge selection classes", () => {
    const doc = document.implementation.createHTMLDocument("");
    doc.body.innerHTML = '<main><p class="codex-bridge-selected 9lead">Selected</p></main>';
    const target = doc.querySelector("p") as Element;
    const selector = selectorRoundTrip(target);

    expect(selector).not.toContain("codex-bridge-selected");
    expect(selector).toContain('[class~="9lead"]');
  });

  it("keeps anchored selectors stable when elements move", () => {
    const doc = document.implementation.createHTMLDocument("");
    doc.body.innerHTML = `
      <main><section id="one"><p data-edit-id="movable">Move me</p></section></main>
      <aside><section id="two"></section></aside>
    `;
    const target = doc.querySelector("[data-edit-id]") as Element;
    const before = selectorRoundTrip(target);
    doc.querySelector("#two")?.appendChild(target);
    const after = selectorRoundTrip(target);

    expect(after).toBe(before);
  });
});
