import { cssEscape, selectorForElement } from "./selectorContract.js";

export { cssEscape, selectorForElement };

const unsafeTargetSelector = "script, style, template, meta, link, title, head";
const maxSummaryCandidates = 180;
const maxTextLength = 80;

export function buildAdaptationSummary(doc) {
  const candidates = collectCandidateSummaries(doc);
  return {
    title: doc.title?.trim() || "Untitled",
    candidateCount: candidates.length,
    candidates
  };
}

export function parseAdaptationPlanText(raw, options = {}) {
  const sourceLabel = options.sourceLabel || "AI";
  if (typeof raw !== "string" || !raw.trim()) {
    throw new Error(`${sourceLabel} 适配结果为空，请重新生成。`);
  }
  const jsonText = extractJsonText(raw);
  let parsed;
  try {
    parsed = JSON.parse(jsonText);
  } catch {
    throw new Error(`${sourceLabel} 返回的适配 JSON 不完整或已被截断，请减少输入内容后重新生成。`);
  }
  if (!parsed || typeof parsed !== "object" || Array.isArray(parsed)) {
    throw new Error(`${sourceLabel} 适配结果不是有效 JSON 对象。`);
  }
  return parsed;
}

export function inspectAdaptationPlan(doc, plan, options = {}) {
  const resolved = resolveAdaptationPlan(doc, plan, options);
  return {
    plan: resolved.plan,
    preview: previewForResolution(resolved)
  };
}

export function applyAdaptationPlan(doc, plan, options = {}) {
  const resolved = resolveAdaptationPlan(doc, plan, options);
  applyResolvedPlan(doc, resolved);
  return {
    plan: resolved.plan,
    preview: previewForResolution(resolved)
  };
}

export function validateAdaptationPlan(doc, plan, options = {}) {
  return resolveAdaptationPlan(doc, plan, options).plan;
}

function resolveAdaptationPlan(doc, plan, options) {
  const sourceLabel = options.sourceLabel || "AI";
  const input = plan && typeof plan === "object" && !Array.isArray(plan) ? plan : {};
  const warnings = normalizeStringList(input.warnings);
  const ignored = validSelectorResolution(doc, normalizeStringList(input.ignoreSelectors), {
    label: "忽略区域",
    warnings,
    allowMultiple: true
  });
  const stageCandidate = firstValidElementSelector(doc, input.stageSelector, warnings, "舞台容器", ignored.elements);
  const slides = topLevelSlideCandidates(
    dropStageContainerFromSlides(
      validSlides(doc, Array.isArray(input.slides) ? input.slides : [], warnings, ignored.elements),
      stageCandidate,
      warnings
    ),
    warnings,
    sourceLabel
  );

  if (slides.length < 1) {
    throw new Error(`${sourceLabel} 适配计划没有识别出至少 1 页。`);
  }

  const stage = validStageCandidate(stageCandidate, slides, warnings);
  const text = validSelectorResolution(doc, normalizeStringList(input.editableTextSelectors), {
    label: "文本元素",
    warnings,
    ignoredElements: ignored.elements,
    allowMultiple: true
  });
  const media = validSelectorResolution(doc, normalizeStringList(input.editableMediaSelectors), {
    label: "媒体元素",
    warnings,
    ignoredElements: ignored.elements,
    allowMultiple: true
  });
  const boxes = validSelectorResolution(doc, normalizeStringList(input.editableBoxSelectors), {
    label: "视觉块",
    warnings,
    ignoredElements: ignored.elements,
    allowMultiple: true
  });

  return {
    plan: {
      stageSelector: stage?.selector || null,
      slides: slides.map(({ selector, title }) => ({ selector, title })),
      editableTextSelectors: text.selectors,
      editableMediaSelectors: media.selectors,
      editableBoxSelectors: boxes.selectors,
      ignoreSelectors: ignored.selectors,
      warnings
    },
    references: {
      stage: stage?.element || null,
      slides: slides.map((slide) => slide.element),
      text: text.elements,
      media: media.elements,
      boxes: boxes.elements
    }
  };
}

function collectCandidateSummaries(doc) {
  const selector = [
    "main", "section", "article", "aside", "header", "footer", "nav", "div", "figure",
    "h1", "h2", "h3", "h4", "p", "li", "blockquote", "img", "picture", "video",
    "canvas", "svg", "iframe", "[data-slide]", "[data-page]", "[data-deck]", "[data-slides]"
  ].join(", ");
  return Array.from(doc.body?.querySelectorAll(selector) || [])
    .filter((element) => !isUnsafeTarget(element))
    .filter((element) => !isEditorRuntimeNode(element))
    .filter((element) => isUsefulSummaryCandidate(element))
    .slice(0, maxSummaryCandidates)
    .map((element) => summarizeElement(element));
}

function summarizeElement(element) {
  const summary = {
    selector: selectorForElement(element),
    tag: element.tagName.toLowerCase()
  };
  const id = element.getAttribute("id");
  const className = element.getAttribute("class");
  const role = element.getAttribute("role");
  if (id) summary.id = id;
  if (className) summary.className = compactWhitespace(className).slice(0, 120);
  if (role) summary.role = role;
  if (isMediaElement(element)) summary.media = mediaDescription(element);
  else {
    const text = compactWhitespace(element.textContent || "");
    if (text) summary.text = text.slice(0, maxTextLength);
  }
  return summary;
}

function isUsefulSummaryCandidate(element) {
  if (isMediaElement(element)) return true;
  if (element.matches("main, section, article, aside, header, footer, nav, [data-slide], [data-page], [data-deck], [data-slides]")) return true;
  if (element.matches("h1, h2, h3, h4, p, li, blockquote")) return Boolean(compactWhitespace(element.textContent || ""));
  const idClass = `${element.getAttribute("id") || ""} ${element.getAttribute("class") || ""}`;
  if (/deck|slide|page|screen|card|panel|hero|section|content|chart|metric|kpi|visual|media|image/i.test(idClass)) return true;
  const text = compactWhitespace(element.textContent || "");
  return text.length >= 16 && text.length <= 260 && element.children.length <= 6;
}

function applyResolvedPlan(doc, resolved) {
  const { stage, slides, text, media, boxes } = resolved.references;
  const targetStage = ensureSlidesInStage(doc, stage, slides);
  slides.forEach((slide, index) => {
    clearHiddenState(slide);
    slide.classList.add("slide");
    slide.classList.toggle("active", index === 0);
    slide.classList.toggle("visible", index === 0);
    slide.toggleAttribute("data-deck-active", index === 0);
    const title = resolved.plan.slides[index]?.title || slideTitle(slide, index);
    if (title && !slide.getAttribute("data-title")) slide.setAttribute("data-title", title.slice(0, 80));
  });
  markElements(text, "data-editable");
  markElements(media, "data-editable-media");
  markElements(boxes, "data-editable-box");
  return targetStage;
}

function ensureSlidesInStage(doc, stage, slides) {
  const sharedParent = slides[0]?.parentElement;
  const existingStage = stage || (
    sharedParent && sharedParent !== doc.body && slides.every((slide) => slide.parentElement === sharedParent)
      ? sharedParent
      : null
  );
  const targetStage = existingStage || createStageBeforeFirstSlide(doc, slides[0]);
  if (!targetStage.id) targetStage.id = "deckStage";
  targetStage.setAttribute("data-html-deck-editor-stage", "preserve");
  targetStage.setAttribute("data-html-deck-editor-navigation", "horizontal");
  if (!targetStage.getAttribute("aria-label")) targetStage.setAttribute("aria-label", "Presentation");
  slides.forEach((slide) => {
    if (slide.parentElement !== targetStage) targetStage.appendChild(slide);
  });
  return targetStage;
}

function createStageBeforeFirstSlide(doc, firstSlide) {
  const stage = doc.createElement("div");
  stage.id = "deckStage";
  stage.className = "deck-stage";
  if (firstSlide?.parentNode) firstSlide.parentNode.insertBefore(stage, firstSlide);
  else doc.body.appendChild(stage);
  return stage;
}

function markElements(elements, attribute) {
  elements.forEach((element) => element.setAttribute(attribute, ""));
}

function validSlides(doc, slides, warnings, ignoredElements) {
  const seen = new Set();
  const valid = [];
  slides.forEach((slide, index) => {
    const selector = typeof slide?.selector === "string" ? slide.selector.trim() : "";
    if (!selector) {
      warnings.push(`第 ${index + 1} 页缺少 selector，已跳过。`);
      return;
    }
    const matches = safeQuerySelectorAll(doc, selector, warnings, `第 ${index + 1} 页`)
      .filter((element) => !isUnsafeTarget(element) && !isEditorRuntimeNode(element));
    if (matches.length !== 1 || isInsideAny(matches[0], ignoredElements)) {
      warnings.push(`第 ${index + 1} 页 selector 无法唯一匹配，或位于忽略区域，已跳过。`);
      return;
    }
    if (isDocumentContainer(matches[0])) {
      warnings.push(`第 ${index + 1} 页 selector 指向整个文档容器，已跳过。`);
      return;
    }
    if (seen.has(matches[0])) {
      warnings.push(`第 ${index + 1} 页与前面页面重复，已跳过。`);
      return;
    }
    seen.add(matches[0]);
    valid.push({
      selector,
      title: compactWhitespace(slide.title || matches[0].querySelector("h1, h2, h3")?.textContent || `Slide ${valid.length + 1}`),
      element: matches[0]
    });
  });
  return valid;
}

function dropStageContainerFromSlides(slides, stageCandidate, warnings) {
  if (!stageCandidate) return slides;
  const stageSlide = slides.find((slide) => slide.element === stageCandidate.element);
  if (!stageSlide) return slides;
  const nestedSlides = slides.filter((slide) => slide !== stageSlide && stageCandidate.element.contains(slide.element));
  if (nestedSlides.length < 1) return slides;
  warnings.push(`页面 selector 指向舞台容器，已跳过：${stageSlide.selector}`);
  return slides.filter((slide) => slide !== stageSlide);
}

function topLevelSlideCandidates(slides, warnings, sourceLabel) {
  const topLevel = slides.filter((slide) => !slides.some((other) => other !== slide && other.element.contains(slide.element)));
  if (topLevel.length !== slides.length) warnings.push(`${sourceLabel} 适配计划包含嵌套页面 selector，已只保留最外层页面。`);
  return topLevel;
}

function validStageCandidate(candidate, slides, warnings) {
  if (!candidate) return null;
  if (slides.some((slide) => candidate.element === slide.element || slide.element.contains(candidate.element))) {
    warnings.push("舞台容器 selector 指向了页面或页面内部元素，已忽略。");
    return null;
  }
  if (!slides.every((slide) => candidate.element.contains(slide.element))) {
    warnings.push("舞台容器必须是所有页面的共同祖先，当前 selector 已忽略。");
    return null;
  }
  return candidate;
}

function validSelectorResolution(doc, selectors, options) {
  const validSelectors = [];
  const elements = [];
  const seenSelectors = new Set();
  const seenElements = new Set();
  selectors.forEach((selector) => {
    const trimmed = selector.trim();
    if (!trimmed || seenSelectors.has(trimmed)) return;
    const matches = safeQuerySelectorAll(doc, trimmed, options.warnings, options.label)
      .filter((element) => !isUnsafeTarget(element))
      .filter((element) => !isEditorRuntimeNode(element))
      .filter((element) => !isInsideAny(element, options.ignoredElements || []));
    if (matches.length === 0) {
      options.warnings.push(`${options.label} selector 未匹配到可用元素：${trimmed}`);
      return;
    }
    if (!options.allowMultiple && matches.length > 1) {
      options.warnings.push(`${options.label} selector 匹配过多元素：${trimmed}`);
      return;
    }
    seenSelectors.add(trimmed);
    validSelectors.push(trimmed);
    matches.forEach((element) => {
      if (!seenElements.has(element)) {
        seenElements.add(element);
        elements.push(element);
      }
    });
  });
  return { selectors: validSelectors, elements };
}

function firstValidElementSelector(doc, selector, warnings, label, ignoredElements) {
  if (typeof selector !== "string" || !selector.trim()) return null;
  const trimmed = selector.trim();
  const matches = safeQuerySelectorAll(doc, trimmed, warnings, label)
    .filter((element) => !isUnsafeTarget(element) && !isEditorRuntimeNode(element));
  if (matches.length !== 1 || isInsideAny(matches[0], ignoredElements)) {
    warnings.push(`${label} selector 无法唯一匹配，或位于忽略区域，已忽略。`);
    return null;
  }
  if (isDocumentContainer(matches[0])) {
    warnings.push(`${label} selector 指向整个文档容器，已忽略。`);
    return null;
  }
  return { selector: trimmed, element: matches[0] };
}

function previewForResolution(resolved) {
  return {
    slideCount: resolved.references.slides.length,
    textCount: resolved.references.text.length,
    mediaCount: resolved.references.media.length,
    boxCount: resolved.references.boxes.length,
    warnings: resolved.plan.warnings
  };
}

function safeQuerySelectorAll(doc, selector, warnings = [], label = "selector") {
  try {
    return Array.from(doc.querySelectorAll(selector));
  } catch {
    warnings.push(`${label} selector 语法无效：${selector}`);
    return [];
  }
}

function isUnsafeTarget(element) {
  return Boolean(element.closest(unsafeTargetSelector));
}

function isEditorRuntimeNode(element) {
  return Boolean(
    element.closest?.("[data-html-deck-editor-ui], .codex-workspace-panel") ||
    element.matches?.("[data-codex-bridge], [data-codex-workspace-ui], [data-codex-editor-runtime], [data-codex-recognition-runtime], [data-html-deck-editor-runtime]")
  );
}

function isDocumentContainer(element) {
  return element === element.ownerDocument.body || element === element.ownerDocument.documentElement;
}

function isInsideAny(element, ancestors = []) {
  return ancestors.some((ancestor) => ancestor === element || ancestor.contains(element));
}

function isMediaElement(element) {
  return element.matches("img, picture, video, canvas, svg, iframe, object, embed");
}

function mediaDescription(element) {
  if (element.matches("img")) return `img ${element.getAttribute("src") || element.getAttribute("alt") || ""}`.trim();
  if (element.matches("video")) return `video ${element.getAttribute("src") || ""}`.trim();
  if (element.matches("iframe")) return `iframe ${element.getAttribute("src") || ""}`.trim();
  return element.tagName.toLowerCase();
}

function clearHiddenState(element) {
  element.removeAttribute("hidden");
  if (element.getAttribute("aria-hidden") === "true") element.removeAttribute("aria-hidden");
  if (element.style) {
    if (element.style.display === "none") element.style.removeProperty("display");
    if (element.style.visibility === "hidden") element.style.removeProperty("visibility");
    if (Number.parseFloat(element.style.opacity || "") === 0) element.style.removeProperty("opacity");
  }
}

function slideTitle(element, index) {
  return compactWhitespace(element.querySelector("h1, h2, h3, [data-title]")?.textContent || "") || `Slide ${index + 1}`;
}

function extractJsonText(raw) {
  const fenced = raw.match(/```(?:json)?\s*([\s\S]*?)```/i);
  if (fenced) return fenced[1].trim();
  const start = raw.indexOf("{");
  const end = raw.lastIndexOf("}");
  if (start >= 0 && end > start) return raw.slice(start, end + 1);
  return raw.trim();
}

function normalizeStringList(value) {
  return Array.isArray(value)
    ? value.filter((item) => typeof item === "string").map((item) => item.trim()).filter(Boolean)
    : [];
}

function compactWhitespace(value) {
  return String(value || "").replace(/\s+/g, " ").trim();
}
