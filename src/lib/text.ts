export const decoder = new TextDecoder("utf-8", { fatal: false });
export const encoder = new TextEncoder();

export function bytesToText(data: Uint8Array): string {
  return decoder.decode(data);
}

export function textToBytes(text: string): Uint8Array {
  return encoder.encode(text);
}
