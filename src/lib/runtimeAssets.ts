import deckStage from "../runtime/deck-stage.js?raw";
import editorBase from "../runtime/html-deck-editor-base.js?raw";
import editorWrapper from "../runtime/html-deck-editor-wrapper.js?raw";
import editorCss from "../runtime/html-deck-editor.css?raw";
import vanillaPickerCss from "../runtime/vendor/vanilla-picker.css?raw";
import vanillaPickerLicense from "../runtime/vendor/vanilla-picker.LICENSE.md?raw";
import vanillaPickerJs from "../runtime/vendor/vanilla-picker.js?raw";
import htmlToImageJs from "../runtime/vendor/html-to-image.js?raw";
import htmlToImageLicense from "../runtime/vendor/html-to-image.LICENSE.md?raw";
import jsPdfJs from "../runtime/vendor/jspdf.umd.min.js?raw";
import jsPdfLicense from "../runtime/vendor/jspdf.LICENSE.md?raw";
import jsZipJs from "../runtime/vendor/jszip.min.js?raw";
import jsZipLicense from "../runtime/vendor/jszip.LICENSE.md?raw";
import fontLicenses from "../runtime/vendor/FONT-LICENSES.md?raw";

export const RUNTIME_VERSION = "0.1.6";

export const runtimeAssets = {
  "runtime/deck-stage.js": deckStage,
  "runtime/vanilla-picker.js": vanillaPickerJs,
  "runtime/vanilla-picker.css": vanillaPickerCss,
  "runtime/vanilla-picker.LICENSE.md": vanillaPickerLicense,
  "runtime/html-to-image.js": htmlToImageJs,
  "runtime/html-to-image.LICENSE.md": htmlToImageLicense,
  "runtime/jspdf.umd.min.js": jsPdfJs,
  "runtime/jspdf.LICENSE.md": jsPdfLicense,
  "runtime/jszip.min.js": jsZipJs,
  "runtime/jszip.LICENSE.md": jsZipLicense,
  "runtime/FONT-LICENSES.md": fontLicenses,
  "runtime/html-deck-editor.js": `${editorBase}\n\n${editorWrapper}\n`,
  "runtime/html-deck-editor.css": editorCss
};
