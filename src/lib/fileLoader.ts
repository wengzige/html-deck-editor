import JSZip from "jszip";
import type { LoadedInput, VirtualFile } from "../types/deck";
import {
  LIMITS,
  collectionLimitErrors,
  enforceCollectionLimits,
  isIgnoredImportPath,
  isSensitivePath,
  normalizePath,
  toBytes,
  withoutSensitiveFiles
} from "./safety";

export type LoadResult = {
  input: LoadedInput | null;
  warnings: string[];
  errors: string[];
};

export type LoadProgressEvent = {
  stage: "read" | "collect";
  percent: number;
  detail: string;
};

type LoadProgressCallback = (event: LoadProgressEvent) => void;

type ZipStreamHelper = {
  on(event: "data", callback: (chunk: Uint8Array, metadata: { percent: number }) => void): ZipStreamHelper;
  on(event: "end", callback: () => void): ZipStreamHelper;
  on(event: "error", callback: (error: Error) => void): ZipStreamHelper;
  pause(): ZipStreamHelper;
  resume(): ZipStreamHelper;
};

class ZipActualSizeError extends Error {}

function baseName(name: string): string {
  return name.replace(/\.[^.]+$/, "") || "deck";
}

async function readFile(file: File, path = file.name): Promise<VirtualFile | null> {
  const safePath = normalizePath(path);
  if (!safePath) return null;
  const data = toBytes(await file.arrayBuffer());
  return {
    path: safePath,
    name: file.name,
    data,
    size: data.byteLength
  };
}

function zipEntrySize(entry: unknown): number {
  const data = (entry as { _data?: { uncompressedSize?: unknown } })?._data;
  const size = Number(data?.uncompressedSize);
  return Number.isFinite(size) && size > 0 ? size : 0;
}

async function readZipEntry(
  entry: JSZip.JSZipObject,
  onBytes: (size: number) => void,
  onProgress: (percent: number) => void
): Promise<Uint8Array> {
  const internalStream = (entry as unknown as { internalStream?: (type: string) => ZipStreamHelper }).internalStream;
  if (typeof internalStream !== "function") {
    const data = await entry.async("uint8array", (metadata) => onProgress(metadata.percent));
    onBytes(data.byteLength);
    return data;
  }

  return new Promise<Uint8Array>((resolve, reject) => {
    const chunks: Uint8Array[] = [];
    let byteLength = 0;
    let settled = false;
    const stream = internalStream.call(entry, "uint8array");
    stream
      .on("data", (chunk, metadata) => {
        if (settled) return;
        const bytes = chunk instanceof Uint8Array ? chunk : new Uint8Array(chunk);
        try {
          onBytes(bytes.byteLength);
        } catch (error) {
          settled = true;
          stream.pause();
          reject(error);
          return;
        }
        chunks.push(new Uint8Array(bytes));
        byteLength += bytes.byteLength;
        onProgress(metadata.percent);
      })
      .on("error", (error) => {
        if (settled) return;
        settled = true;
        reject(error);
      })
      .on("end", () => {
        if (settled) return;
        settled = true;
        const output = new Uint8Array(byteLength);
        let offset = 0;
        chunks.forEach((chunk) => {
          output.set(chunk, offset);
          offset += chunk.byteLength;
        });
        resolve(output);
      })
      .resume();
  });
}

export async function loadZip(file: File, onProgress?: LoadProgressCallback): Promise<LoadResult> {
  if (file.size > LIMITS.maxZipBytes) {
    return {
      input: null,
      warnings: [],
      errors: ["ZIP 太大了：第一版最多支持约 100MB。"]
    };
  }

  onProgress?.({ stage: "read", percent: 0, detail: `正在打开 ${file.name}` });
  let zip: JSZip;
  try {
    zip = await JSZip.loadAsync(file);
  } catch {
    return {
      input: null,
      warnings: [],
      errors: ["这个文件不是有效的 ZIP 压缩包，请重新压缩后再试。"]
    };
  }
  onProgress?.({ stage: "read", percent: 100, detail: "ZIP 已打开，正在读取里面的文件。" });

  const files: VirtualFile[] = [];
  const warnings: string[] = [];
  const entries = Object.entries(zip.files).filter(([, entry]) => !entry.dir);
  const readableEntries: Array<[string, (typeof entries)[number][1]]> = [];
  let totalBytes = 0;
  const skippedIgnored: string[] = [];
  const skippedSensitive: string[] = [];

  for (const [path, entry] of entries) {
    const safePath = normalizePath(path);
    if (!safePath) {
      warnings.push(`跳过了不安全路径：${path}`);
      continue;
    }
    if (isIgnoredImportPath(safePath)) {
      skippedIgnored.push(safePath);
      continue;
    }
    if (isSensitivePath(safePath)) {
      skippedSensitive.push(safePath);
      continue;
    }
    readableEntries.push([safePath, entry]);
    totalBytes += zipEntrySize(entry);
  }

  appendSkippedFileWarnings(warnings, skippedIgnored, skippedSensitive);

  const limitErrors = collectionLimitErrors(readableEntries.length, totalBytes);
  if (limitErrors.length) {
    return { input: null, warnings, errors: limitErrors };
  }

  let actualTotalBytes = 0;
  for (const [index, [safePath, entry]] of readableEntries.entries()) {
    let data: Uint8Array;
    try {
      data = await readZipEntry(entry, (size) => {
        actualTotalBytes += size;
        if (actualTotalBytes > LIMITS.maxTotalBytes) {
          throw new ZipActualSizeError("ZIP 解压后的实际体积超过约 300MB，已停止读取，避免占用过多内存。");
        }
      }, (entryPercent) => {
        const percent = ((index + entryPercent / 100) / readableEntries.length) * 100;
        onProgress?.({ stage: "collect", percent, detail: safePath });
      });
    } catch (error) {
      return {
        input: null,
        warnings,
        errors: [error instanceof ZipActualSizeError
          ? error.message
          : `无法解压 ${safePath}：条目可能已损坏或加密，请重新压缩后再试。`]
      };
    }
    files.push({ path: safePath, name: safePath.split("/").pop() || safePath, data, size: data.byteLength });
    onProgress?.({ stage: "collect", percent: ((index + 1) / readableEntries.length) * 100, detail: safePath });
  }

  return finalizeInput({ kind: "zip", name: baseName(file.name), files }, warnings);
}

export async function loadHtml(file: File, onProgress?: LoadProgressCallback): Promise<LoadResult> {
  onProgress?.({ stage: "read", percent: 0, detail: `正在读取 ${file.name}` });
  const virtualFile = await readFile(file, "index.html");
  onProgress?.({ stage: "read", percent: 100, detail: `${file.name} 已读取。` });
  if (!virtualFile) {
    return { input: null, warnings: [], errors: ["这个 HTML 文件名无法安全读取。"] };
  }
  return finalizeInput({ kind: "html", name: baseName(file.name), files: [virtualFile] }, [
    "你选择的是单个 HTML。如果它引用了本地图片、CSS 或 JS，建议选择整个文件夹或 ZIP，避免资源丢失。"
  ]);
}

export async function loadFolder(files: FileList, onProgress?: LoadProgressCallback): Promise<LoadResult> {
  const virtualFiles: VirtualFile[] = [];
  const warnings: string[] = [];
  const readableFiles: Array<{ file: File; path: string }> = [];
  let totalBytes = 0;
  const skippedIgnored: string[] = [];
  const skippedSensitive: string[] = [];

  for (let index = 0; index < files.length; index += 1) {
    const file = files[index];
    if (!file) continue;
    const relativePath = file.webkitRelativePath || file.name;
    const safePath = normalizePath(relativePath);
    if (!safePath) {
      warnings.push(`跳过了不安全路径：${relativePath}`);
      continue;
    }
    if (isIgnoredImportPath(safePath)) {
      skippedIgnored.push(safePath);
      continue;
    }
    if (isSensitivePath(safePath)) {
      skippedSensitive.push(safePath);
      continue;
    }

    readableFiles.push({ file, path: safePath });
    totalBytes += file.size || 0;
    const limitErrors = collectionLimitErrors(readableFiles.length, totalBytes);
    if (limitErrors.length) {
      appendSkippedFileWarnings(warnings, skippedIgnored, skippedSensitive);
      return { input: null, warnings, errors: limitErrors };
    }
  }

  appendSkippedFileWarnings(warnings, skippedIgnored, skippedSensitive);

  for (const [index, { file, path }] of readableFiles.entries()) {
    onProgress?.({ stage: "collect", percent: (index / readableFiles.length) * 100, detail: path });
    const virtualFile = await readFile(file, path);
    if (virtualFile) virtualFiles.push(virtualFile);
    onProgress?.({ stage: "collect", percent: ((index + 1) / readableFiles.length) * 100, detail: path });
  }

  const folderName = virtualFiles[0]?.path.split("/")[0] || "deck-folder";
  const stripped = stripCommonRoot(virtualFiles);
  return finalizeInput({ kind: "folder", name: folderName, files: stripped }, warnings);
}

function stripCommonRoot(files: VirtualFile[]): VirtualFile[] {
  if (!files.length) return files;
  const roots = new Set(files.map((file) => file.path.split("/")[0]));
  if (roots.size !== 1) return files;
  const root = Array.from(roots)[0];
  return files.map((file) => ({
    ...file,
    path: file.path === root ? file.path : file.path.slice(root.length + 1)
  }));
}

function finalizeInput(input: LoadedInput, warnings: string[]): LoadResult {
  const limitErrors = enforceCollectionLimits(input.files);
  const filtered = withoutSensitiveFiles(input.files);
  const allWarnings = [...warnings];

  if (filtered.skipped.length > 0) {
    allWarnings.push(`为了安全，已跳过 ${filtered.skipped.length} 个敏感文件。`);
    allWarnings.push(`已跳过的敏感文件：${displayPaths(filtered.skipped)}。`);
  }

  return {
    input: { ...input, files: filtered.files },
    warnings: allWarnings,
    errors: limitErrors
  };
}

function appendSkippedFileWarnings(warnings: string[], ignored: string[], sensitive: string[]): void {
  if (ignored.length) {
    warnings.push(`已跳过 ${ignored.length} 个依赖、缓存或系统文件。`);
    warnings.push(`已跳过的依赖、缓存或系统文件：${displayPaths(ignored)}。`);
  }
  if (sensitive.length) {
    warnings.push(`为了安全，已跳过 ${sensitive.length} 个敏感文件。`);
    warnings.push(`已跳过的敏感文件：${displayPaths(sensitive)}。`);
  }
}

function displayPaths(paths: string[]): string {
  const shown = paths.slice(0, 8);
  return `${shown.join("、")}${paths.length > shown.length ? ` 等 ${paths.length} 个文件` : ""}`;
}
