export const decoder = new TextDecoder("utf-8", { fatal: false });
export const encoder = new TextEncoder();

const charsetAliases: Record<string, string> = {
  utf8: "utf-8",
  gb2312: "gb18030",
  "x-gbk": "gb18030"
};

export function bytesToText(data: Uint8Array): string {
  const bom = byteOrderMark(data);
  if (bom) return new TextDecoder(bom.encoding).decode(data.subarray(bom.length));

  try {
    return new TextDecoder("utf-8", { fatal: true }).decode(data);
  } catch {
    const declared = declaredCharset(data);
    if (declared) {
      try {
        return new TextDecoder(charsetAliases[declared] || declared).decode(data);
      } catch {
        // Fall through to replacement-based UTF-8 decoding for unsupported labels.
      }
    }
    return decoder.decode(data);
  }
}

export function textToBytes(text: string): Uint8Array {
  return encoder.encode(text);
}

function byteOrderMark(data: Uint8Array): { encoding: string; length: number } | null {
  if (data[0] === 0xef && data[1] === 0xbb && data[2] === 0xbf) return { encoding: "utf-8", length: 3 };
  if (data[0] === 0xff && data[1] === 0xfe) return { encoding: "utf-16le", length: 2 };
  if (data[0] === 0xfe && data[1] === 0xff) return { encoding: "utf-16be", length: 2 };
  return null;
}

function declaredCharset(data: Uint8Array): string {
  const preview = Array.from(data.subarray(0, 4096), (byte) => String.fromCharCode(byte)).join("");
  const metaTags = preview.match(/<meta\b[^>]*>/gi) || [];
  for (const tag of metaTags) {
    const match = tag.match(/charset\s*=\s*["']?\s*([a-z0-9._:-]+)/i);
    if (match?.[1]) return match[1].toLowerCase();
  }
  return "";
}
