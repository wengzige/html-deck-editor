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
  let skippedIgnored = 0;
  let skippedSensitive = 0;

  for (const [path, entry] of entries) {
    const safePath = normalizePath(path);
    if (!safePath) {
      warnings.push(`跳过了不安全路径：${path}`);
      continue;
    }
    if (isIgnoredImportPath(safePath)) {
      skippedIgnored += 1;
      continue;
    }
    if (isSensitivePath(safePath)) {
      skippedSensitive += 1;
      continue;
    }
    readableEntries.push([safePath, entry]);
    totalBytes += zipEntrySize(entry);
  }

  if (skippedIgnored > 0) warnings.push(`已跳过 ${skippedIgnored} 个依赖、缓存或系统文件。`);
  if (skippedSensitive > 0) warnings.push(`为了安全，已跳过 ${skippedSensitive} 个敏感文件。`);

  const limitErrors = collectionLimitErrors(readableEntries.length, totalBytes);
  if (limitErrors.length) {
    return { input: null, warnings, errors: limitErrors };
  }

  for (const [index, [safePath, entry]] of readableEntries.entries()) {
    const data = await entry.async("uint8array", (metadata) => {
      const percent = ((index + metadata.percent / 100) / readableEntries.length) * 100;
      onProgress?.({ stage: "collect", percent, detail: safePath });
    });
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
  let skippedIgnored = 0;
  let skippedSensitive = 0;

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
      skippedIgnored += 1;
      continue;
    }
    if (isSensitivePath(safePath)) {
      skippedSensitive += 1;
      continue;
    }

    readableFiles.push({ file, path: safePath });
    totalBytes += file.size || 0;
    const limitErrors = collectionLimitErrors(readableFiles.length, totalBytes);
    if (limitErrors.length) {
      if (skippedIgnored > 0) warnings.push(`已跳过 ${skippedIgnored} 个依赖、缓存或系统文件。`);
      if (skippedSensitive > 0) warnings.push(`为了安全，已跳过 ${skippedSensitive} 个敏感文件。`);
      return { input: null, warnings, errors: limitErrors };
    }
  }

  if (skippedIgnored > 0) warnings.push(`已跳过 ${skippedIgnored} 个依赖、缓存或系统文件。`);
  if (skippedSensitive > 0) warnings.push(`为了安全，已跳过 ${skippedSensitive} 个敏感文件。`);

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
  }

  return {
    input: { ...input, files: filtered.files },
    warnings: allWarnings,
    errors: limitErrors
  };
}
