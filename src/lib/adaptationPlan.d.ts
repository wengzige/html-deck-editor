export type AdaptationSlide = {
  selector: string;
  title?: string;
};

export type AdaptationPlan = {
  stageSelector?: string;
  slides?: AdaptationSlide[];
  editableTextSelectors?: string[];
  editableMediaSelectors?: string[];
  editableBoxSelectors?: string[];
  ignoreSelectors?: string[];
  warnings?: string[];
};

export type ValidatedAdaptationPlan = {
  stageSelector: string | null;
  slides: Array<{ selector: string; title: string }>;
  editableTextSelectors: string[];
  editableMediaSelectors: string[];
  editableBoxSelectors: string[];
  ignoreSelectors: string[];
  warnings: string[];
};

export type AdaptationPreview = {
  slideCount: number;
  textCount: number;
  mediaCount: number;
  boxCount: number;
  warnings: string[];
};

export type AdaptationResult = {
  plan: ValidatedAdaptationPlan;
  preview: AdaptationPreview;
};

export type AdaptationOptions = {
  sourceLabel?: string;
};

export type AdaptationSummary = {
  title: string;
  candidateCount: number;
  candidates: Array<{
    selector: string;
    tag: string;
    id?: string;
    className?: string;
    role?: string;
    text?: string;
    media?: string;
  }>;
};

export function buildAdaptationSummary(doc: Document): AdaptationSummary;
export function parseAdaptationPlanText(raw: string, options?: AdaptationOptions): AdaptationPlan;
export function inspectAdaptationPlan(doc: Document, plan: AdaptationPlan, options?: AdaptationOptions): AdaptationResult;
export function applyAdaptationPlan(doc: Document, plan: AdaptationPlan, options?: AdaptationOptions): AdaptationResult;
export function validateAdaptationPlan(doc: Document, plan: AdaptationPlan, options?: AdaptationOptions): ValidatedAdaptationPlan;
export function selectorForElement(element: Element): string;
export function cssEscape(value: unknown, cssApi?: { escape(value: string): string }): string;
