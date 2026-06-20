import JSZip from "jszip";
import type { LoadedInput, VirtualFile } from "../types/deck";
import { LIMITS, enforceCollectionLimits, normalizePath, toBytes, withoutSensitiveFiles } from "./safety";

export type LoadResult = {
  input: LoadedInput | null;
  warnings: string[];
  errors: string[];
};

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

export async function loadZip(file: File): Promise<LoadResult> {
  if (file.size > LIMITS.maxZipBytes) {
    return {
      input: null,
      warnings: [],
      errors: ["ZIP 太大了：第一版最多支持约 100MB。"]
    };
  }

  const zip = await JSZip.loadAsync(file);
  const files: VirtualFile[] = [];
  const warnings: string[] = [];

  for (const [path, entry] of Object.entries(zip.files)) {
    if (entry.dir) continue;
    const safePath = normalizePath(path);
    if (!safePath) {
      warnings.push(`跳过了不安全路径：${path}`);
      continue;
    }
    const data = await entry.async("uint8array");
    files.push({ path: safePath, name: safePath.split("/").pop() || safePath, data, size: data.byteLength });
  }

  return finalizeInput({ kind: "zip", name: baseName(file.name), files }, warnings);
}

export async function loadHtml(file: File): Promise<LoadResult> {
  const virtualFile = await readFile(file, "index.html");
  if (!virtualFile) {
    return { input: null, warnings: [], errors: ["这个 HTML 文件名无法安全读取。"] };
  }
  return finalizeInput({ kind: "html", name: baseName(file.name), files: [virtualFile] }, [
    "你选择的是单个 HTML。如果它引用了本地图片、CSS 或 JS，建议选择整个文件夹或 ZIP，避免资源丢失。"
  ]);
}

export async function loadFolder(files: FileList): Promise<LoadResult> {
  const virtualFiles: VirtualFile[] = [];
  const warnings: string[] = [];

  for (const file of Array.from(files)) {
    const relativePath = file.webkitRelativePath || file.name;
    const virtualFile = await readFile(file, relativePath);
    if (virtualFile) {
      virtualFiles.push(virtualFile);
    } else {
      warnings.push(`跳过了不安全路径：${relativePath}`);
    }
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
