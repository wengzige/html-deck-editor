import type { VirtualFile } from "../types/deck";

export const LIMITS = {
  maxZipBytes: 100 * 1024 * 1024,
  maxFileCount: 1000,
  maxTotalBytes: 300 * 1024 * 1024
};

const SENSITIVE_NAME_PATTERNS = [
  /^\.env(?:\.|$)/i,
  /(?:^|\/)id_rsa$/i,
  /(?:^|\/)id_ed25519$/i,
  /\.pem$/i,
  /\.key$/i,
  /\.p12$/i,
  /token/i,
  /secret/i
];

export function normalizePath(path: string): string | null {
  const normalized = path.replaceAll("\\", "/").replace(/^\/+/, "");
  if (!normalized || normalized.includes("\0")) return null;
  if (normalized.split("/").some((part) => part === ".." || part === "")) return null;
  if (/^[a-z]:\//i.test(normalized)) return null;
  return normalized;
}

export function isSensitivePath(path: string): boolean {
  const normalized = path.toLowerCase();
  const baseName = normalized.split("/").pop() || normalized;
  return SENSITIVE_NAME_PATTERNS.some((pattern) => pattern.test(normalized) || pattern.test(baseName));
}

export function enforceCollectionLimits(files: VirtualFile[]): string[] {
  const errors: string[] = [];
  if (files.length > LIMITS.maxFileCount) {
    errors.push(`文件太多了：最多支持 ${LIMITS.maxFileCount} 个文件。`);
  }
  const total = files.reduce((sum, file) => sum + file.size, 0);
  if (total > LIMITS.maxTotalBytes) {
    errors.push("文件总体积太大了：浏览器本地处理最多支持约 300MB。");
  }
  return errors;
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
