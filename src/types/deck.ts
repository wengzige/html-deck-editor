export type InputKind = "zip" | "html" | "folder";

export type DeckStatus = "ready" | "adaptable" | "unsupported" | "already-editable";

export type DeckSourceKind =
  | "fixed-stage"
  | "frontend-slides"
  | "reveal"
  | "section-slide"
  | "generic-section"
  | "unknown";

export type VirtualFile = {
  path: string;
  name: string;
  data: Uint8Array;
  size: number;
};

export type LoadedInput = {
  kind: InputKind;
  name: string;
  files: VirtualFile[];
};

export type DetectionReport = {
  status: DeckStatus;
  sourceKind: DeckSourceKind;
  indexPath: string | null;
  slideCount: number;
  confidence: number;
  messages: string[];
  warnings: string[];
};

export type ConvertResult = {
  report: DetectionReport;
  blob: Blob | null;
  outputName: string | null;
  filesAdded: string[];
  filesModified: string[];
  warnings: string[];
};
