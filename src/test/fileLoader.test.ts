import { describe, expect, it } from "vitest";
import JSZip from "jszip";
import { loadFolder, loadHtml, loadZip } from "../lib/fileLoader";
import { LIMITS, normalizePath, withoutSensitiveFiles } from "../lib/safety";
import { textToBytes } from "../lib/text";
import type { VirtualFile } from "../types/deck";

function htmlDeck(): string {
  return "<main><section><h1>One</h1><p>Enough text here</p></section><section><h1>Two</h1><p>Enough text here</p></section></main>";
}

async function zipFile(name: string, entries: Record<string, string>): Promise<File> {
  const zip = new JSZip();
  Object.entries(entries).forEach(([path, content]) => {
    zip.file(path, content);
  });
  const blob = await zip.generateAsync({ type: "blob" });
  return new File([blob], name, { type: "application/zip" });
}

function browserFile(parts: string[], name: string, options?: FilePropertyBag): File {
  const data = textToBytes(parts.join(""));
  return {
    name,
    size: data.byteLength,
    type: options?.type || "",
    arrayBuffer: async () => data.buffer.slice(data.byteOffset, data.byteOffset + data.byteLength)
  } as File;
}

function folderFile(path: string, content: string): File {
  const file = browserFile([content], path.split("/").pop() || "file.html");
  Object.defineProperty(file, "webkitRelativePath", { value: path });
  return file;
}

describe("file loading", () => {
  it("loads a single HTML file as index.html and warns about missing assets", async () => {
    const result = await loadHtml(browserFile([htmlDeck()], "slides.html", { type: "text/html" }));

    expect(result.errors).toEqual([]);
    expect(result.input?.kind).toBe("html");
    expect(result.input?.files.map((file) => file.path)).toEqual(["index.html"]);
    expect(result.warnings[0]).toContain("单个 HTML");
  });

  it("loads a zip with deck files", async () => {
    const result = await loadZip(await zipFile("deck.zip", {
      "index.html": htmlDeck(),
      "assets/style.css": "body { color: black; }"
    }));

    expect(result.errors).toEqual([]);
    expect(result.input?.kind).toBe("zip");
    expect(result.input?.files.map((file) => file.path).sort()).toEqual(["assets/style.css", "index.html"]);
  });

  it("filters sensitive files inside zip uploads", async () => {
    const result = await loadZip(await zipFile("deck.zip", {
      "index.html": htmlDeck(),
      ".env": "TOKEN=value",
      "keys/private.key": "private"
    }));

    expect(result.errors).toEqual([]);
    expect(result.input?.files.map((file) => file.path)).toEqual(["index.html"]);
    expect(result.warnings).toContain("为了安全，已跳过 2 个敏感文件。");
  });

  it("returns a friendly error for invalid zip files", async () => {
    const result = await loadZip(new File(["not really a zip"], "broken.zip", { type: "application/zip" }));

    expect(result.input).toBeNull();
    expect(result.errors).toEqual(["这个文件不是有效的 ZIP 压缩包，请重新压缩后再试。"]);
  });

  it("rejects oversized zip files before reading them", async () => {
    const hugeZip = {
      name: "huge.zip",
      size: LIMITS.maxZipBytes + 1
    } as File;

    const result = await loadZip(hugeZip);

    expect(result.input).toBeNull();
    expect(result.errors[0]).toContain("ZIP 太大了");
  });

  it("loads a selected folder and strips the common root", async () => {
    const result = await loadFolder([
      folderFile("presentation/index.html", htmlDeck()),
      folderFile("presentation/assets/style.css", "body { color: black; }")
    ] as unknown as FileList);

    expect(result.errors).toEqual([]);
    expect(result.input?.kind).toBe("folder");
    expect(result.input?.files.map((file) => file.path).sort()).toEqual(["assets/style.css", "index.html"]);
  });
});

describe("path and sensitive-file safety", () => {
  it("rejects unsafe paths", () => {
    expect(normalizePath("../index.html")).toBeNull();
    expect(normalizePath("deck//index.html")).toBeNull();
    expect(normalizePath("/deck/index.html")).toBe("deck/index.html");
    expect(normalizePath("deck\\index.html")).toBe("deck/index.html");
  });

  it("filters sensitive files before conversion", () => {
    const files: VirtualFile[] = [
      { path: "index.html", name: "index.html", data: textToBytes(htmlDeck()), size: 1 },
      { path: ".env", name: ".env", data: textToBytes("SECRET=value"), size: 1 },
      { path: "keys/site.pem", name: "site.pem", data: textToBytes("private"), size: 1 }
    ];

    const result = withoutSensitiveFiles(files);

    expect(result.files.map((file) => file.path)).toEqual(["index.html"]);
    expect(result.skipped).toEqual([".env", "keys/site.pem"]);
  });
});
