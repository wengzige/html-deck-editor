import type { VirtualFile } from "../types/deck";

export const LIMITS = {
  maxZipBytes: 100 * 1024 * 1024,
  maxFileCount: 1000,
  maxTotalBytes: 300 * 1024 * 1024,
  maxInlineImageBytes: 10 * 1024 * 1024,
  maxInlineImageTotalBytes: 40 * 1024 * 1024
};

const IGNORED_IMPORT_DIRECTORY_NAMES = new Set([
  ".git",
  ".hg",
  ".svn",
  "__macosx",
  "node_modules",
  ".next",
  ".nuxt",
  ".turbo",
  ".cache",
  "coverage"
]);

const IGNORED_IMPORT_FILE_NAMES = new Set([
  ".ds_store",
  "thumbs.db"
]);

const SENSITIVE_NAME_PATTERNS = [
  /^\.env(?:\.|$)/i,
  /^id_rsa$/i,
  /^id_ed25519$/i,
  /\.pem$/i,
  /\.key$/i,
  /\.p12$/i,
  /^(?:token|secret)(?:\.[^.]+)?$/i
];

export function normalizePath(path: string): string | null {
  const normalized = path.replaceAll("\\", "/").replace(/^\/+/, "");
  if (!normalized || normalized.includes("\0") || /^[a-z]:\//i.test(normalized)) return null;
  const parts: string[] = [];
  for (const part of normalized.split("/")) {
    if (part === ".") continue;
    if (part === ".." || part === "") return null;
    parts.push(part);
  }
  return parts.join("/") || null;
}

export function isSensitivePath(path: string): boolean {
  const normalized = path.toLowerCase();
  const baseName = normalized.split("/").pop() || normalized;
  return SENSITIVE_NAME_PATTERNS.some((pattern) => pattern.test(baseName));
}

export function isIgnoredImportPath(path: string): boolean {
  const normalized = path.toLowerCase();
  const parts = normalized.split("/");
  const baseName = parts[parts.length - 1] || normalized;
  return parts.some((part) => IGNORED_IMPORT_DIRECTORY_NAMES.has(part)) ||
    IGNORED_IMPORT_FILE_NAMES.has(baseName) ||
    baseName.startsWith("._");
}

export function collectionLimitErrors(fileCount: number, totalBytes: number): string[] {
  const errors: string[] = [];
  if (fileCount > LIMITS.maxFileCount) {
    errors.push(`文件太多了：最多支持 ${LIMITS.maxFileCount} 个文件。请只选择 HTML 导出目录，或先打成 ZIP 再导入。`);
  }
  if (totalBytes > LIMITS.maxTotalBytes) {
    errors.push("文件总体积太大了：浏览器本地处理最多支持约 300MB。");
  }
  return errors;
}

export function enforceCollectionLimits(files: VirtualFile[]): string[] {
  return collectionLimitErrors(files.length, files.reduce((sum, file) => sum + file.size, 0));
}

export function withoutSensitiveFiles(files: VirtualFile[]): { files: VirtualFile[]; skipped: string[] } {
  const kept: VirtualFile[] = [];
  const skipped: string[] = [];
  for (const file of files) {
    if (isSensitivePath(file.path)) {
      skipped.push(file.path);
    } else {
      kept.push(file);
    }
  }
  return { files: kept, skipped };
}

export function toBytes(buffer: ArrayBuffer): Uint8Array {
  return new Uint8Array(buffer);
}
