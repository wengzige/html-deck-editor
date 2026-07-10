import JSZip from "jszip";
import { describe, expect, it } from "vitest";
import { detectDeck } from "../lib/detector";
import { convertInput } from "../lib/injector";
import { bytesToText, textToBytes } from "../lib/text";
import type { LoadedInput } from "../types/deck";

function joinBytes(...parts: Uint8Array[]): Uint8Array {
  const result = new Uint8Array(parts.reduce((sum, part) => sum + part.byteLength, 0));
  let offset = 0;
  parts.forEach((part) => {
    result.set(part, offset);
    offset += part.byteLength;
  });
  return result;
}

function gbkDeckBytes(): Uint8Array {
  const prefix = textToBytes("<!doctype html><html><head><meta http-equiv=\"Content-Type\" content=\"text/html; charset=gbk\"><meta charset=\"gbk\"></head><body><main><section><h1>");
  const chinese = new Uint8Array([0xd6, 0xd0, 0xce, 0xc4, 0xd1, 0xdd, 0xca, 0xbe]);
  const suffix = textToBytes("</h1><p>Enough text for page one.</p></section><section><h1>Two</h1><p>Enough text for page two.</p></section></main></body></html>");
  return joinBytes(prefix, chinese, suffix);
}

describe("HTML text decoding", () => {
  it("uses a declared GBK charset when strict UTF-8 decoding fails", () => {
    expect(bytesToText(gbkDeckBytes())).toContain("中文演示");
  });

  it("gives a UTF-8 BOM priority over a conflicting meta charset", () => {
    const source = textToBytes("<meta charset=\"gbk\"><p>中文</p>");
    const bytes = joinBytes(new Uint8Array([0xef, 0xbb, 0xbf]), source);

    expect(bytesToText(bytes)).toContain("中文");
  });

  it("converts legacy encoded HTML to UTF-8 with one matching declaration", async () => {
    const bytes = gbkDeckBytes();
    const input: LoadedInput = {
      kind: "html",
      name: "中文演示",
      files: [{ path: "index.html", name: "index.html", data: bytes, size: bytes.byteLength }]
    };

    expect(detectDeck(input).status).toBe("adaptable");
    const result = await convertInput(input);
    const zip = await JSZip.loadAsync(result.blob!);
    const html = await zip.file("index.html")!.async("string");
    const doc = new DOMParser().parseFromString(html, "text/html");

    expect(html).toContain("中文演示");
    expect(Array.from(doc.querySelectorAll("meta[charset]")).map((meta) => meta.getAttribute("charset"))).toEqual(["utf-8"]);
    expect(html.toLowerCase()).not.toContain("charset=gbk");
    expect(result.outputName).toBe("中文演示-editable.zip");
  });
});
