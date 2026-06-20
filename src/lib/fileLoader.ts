import JSZip from "jszip";
import type { LoadedInput, VirtualFile } from "../types/deck";
import { LIMITS, enforceCollectionLimits, normalizePath, toBytes, withoutSensitiveFiles } from "./safety";

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

export async function loadZip(file: File, onProgress?: LoadProgressCallback): Promise<LoadResult> {
  if (file.size > LIMITS.maxZipBytes) {
    return {
      input: null,
      warnings: [],
      errors: ["ZIP 太大了：第一版最多支持约 100MB。"]
    };
  }

  onProgress?.({ stage: "read", percent: 0, detail: `正在打开 ${file.name}` });
  const zip = await JSZip.loadAsync(file);
  onProgress?.({ stage: "read", percent: 100, detail: "ZIP 已打开，正在读取里面的文件。" });

  const files: VirtualFile[] = [];
  const warnings: string[] = [];
  const entries = Object.entries(zip.files).filter(([, entry]) => !entry.dir);

  for (const [index, [path, entry]] of entries.entries()) {
    const safePath = normalizePath(path);
    if (!safePath) {
      warnings.push(`跳过了不安全路径：${path}`);
      onProgress?.({ stage: "collect", percent: ((index + 1) / entries.length) * 100, detail: `跳过 ${path}` });
      continue;
    }
    const data = await entry.async("uint8array", (metadata) => {
      const percent = ((index + metadata.percent / 100) / entries.length) * 100;
      onProgress?.({ stage: "collect", percent, detail: safePath });
    });
    files.push({ path: safePath, name: safePath.split("/").pop() || safePath, data, size: data.byteLength });
    onProgress?.({ stage: "collect", percent: ((index + 1) / entries.length) * 100, detail: safePath });
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
  const fileArray = Array.from(files);

  for (const [index, file] of fileArray.entries()) {
    const relativePath = file.webkitRelativePath || file.name;
    onProgress?.({ stage: "collect", percent: (index / fileArray.length) * 100, detail: relativePath });
    const virtualFile = await readFile(file, relativePath);
    if (virtualFile) {
      virtualFiles.push(virtualFile);
    } else {
      warnings.push(`跳过了不安全路径：${relativePath}`);
    }
    onProgress?.({ stage: "collect", percent: ((index + 1) / fileArray.length) * 100, detail: relativePath });
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
