const defaultIgnoredClassNames = new Set(["codex-bridge-selected"]);

export function selectorForElement(element) {
  if (!element || element.nodeType !== 1 || !element.ownerDocument) {
    throw new TypeError("selectorForElement requires a connected DOM element");
  }

  const doc = element.ownerDocument;
  const id = element.getAttribute("id");
  if (id) {
    const selector = idSelector(id, doc.defaultView?.CSS);
    if (uniquelySelects(doc, selector, element)) return selector;
  }

  for (const attribute of ["data-ai-anchor", "data-edit-id"]) {
    const value = element.getAttribute(attribute);
    if (!value) continue;
    const selector = `[${attribute}="${cssString(value)}"]`;
    if (uniquelySelects(doc, selector, element)) return selector;
  }

  const parts = [];
  let current = element;
  while (current && current.nodeType === 1 && current !== doc.documentElement) {
    const tag = current.tagName.toLowerCase();
    if (tag === "body") {
      parts.unshift("body");
    } else {
      let part = tag;
      const className = Array.from(current.classList || []).find((item) => (
        item && !defaultIgnoredClassNames.has(item)
      ));
      if (className) {
        part += isCssIdentifier(className)
          ? `.${cssEscape(className, doc.defaultView?.CSS)}`
          : `[class~="${cssString(className)}"]`;
      }
      const siblings = Array.from(current.parentElement?.children || []).filter((sibling) => (
        sibling.tagName === current.tagName
      ));
      if (siblings.length > 1) part += `:nth-of-type(${siblings.indexOf(current) + 1})`;
      parts.unshift(part);
    }

    const selector = parts.join(" > ");
    if (uniquelySelects(doc, selector, element)) return selector;
    if (tag === "body") break;
    current = current.parentElement;
  }

  return parts.join(" > ");
}

export function cssEscape(value, cssApi = globalThis.CSS) {
  if (cssApi && typeof cssApi.escape === "function") return cssApi.escape(String(value));
  const string = String(value);
  const length = string.length;
  const firstCodeUnit = string.charCodeAt(0);
  let result = "";
  for (let index = 0; index < length; index += 1) {
    const codeUnit = string.charCodeAt(index);
    if (codeUnit === 0x0000) {
      result += "\uFFFD";
      continue;
    }
    if (
      (codeUnit >= 0x0001 && codeUnit <= 0x001f) ||
      codeUnit === 0x007f ||
      (index === 0 && codeUnit >= 0x0030 && codeUnit <= 0x0039) ||
      (index === 1 && codeUnit >= 0x0030 && codeUnit <= 0x0039 && firstCodeUnit === 0x002d)
    ) {
      result += `\\${codeUnit.toString(16)} `;
      continue;
    }
    if (index === 0 && codeUnit === 0x002d && length === 1) {
      result += `\\${string.charAt(index)}`;
      continue;
    }
    if (
      codeUnit >= 0x0080 ||
      codeUnit === 0x002d ||
      codeUnit === 0x005f ||
      (codeUnit >= 0x0030 && codeUnit <= 0x0039) ||
      (codeUnit >= 0x0041 && codeUnit <= 0x005a) ||
      (codeUnit >= 0x0061 && codeUnit <= 0x007a)
    ) {
      result += string.charAt(index);
      continue;
    }
    result += `\\${string.charAt(index)}`;
  }
  return result;
}

function idSelector(id, cssApi) {
  return isCssIdentifier(id) ? `#${cssEscape(id, cssApi)}` : `[id="${cssString(id)}"]`;
}

function isCssIdentifier(value) {
  return /^-?[_a-zA-Z][-_a-zA-Z0-9]*$/.test(String(value));
}

function cssString(value) {
  let result = "";
  for (const character of String(value)) {
    const codePoint = character.codePointAt(0);
    if (codePoint === 0x0000) {
      result += "\uFFFD";
    } else if (character === "\\" || character === '"') {
      result += `\\${character}`;
    } else if ((codePoint >= 0x0001 && codePoint <= 0x001f) || codePoint === 0x007f) {
      result += `\\${codePoint.toString(16)} `;
    } else {
      result += character;
    }
  }
  return result;
}

function uniquelySelects(doc, selector, element) {
  if (!selector) return false;
  try {
    const matches = doc.querySelectorAll(selector);
    return matches.length === 1 && matches[0] === element;
  } catch {
    return false;
  }
}
