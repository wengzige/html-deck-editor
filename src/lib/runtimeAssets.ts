import deckStage from "../runtime/deck-stage.js?raw";
import editorBase from "../runtime/html-deck-editor-base.js?raw";
import editorWrapper from "../runtime/html-deck-editor-wrapper.js?raw";
import editorCss from "../runtime/html-deck-editor.css?raw";
import vanillaPickerCss from "../runtime/vendor/vanilla-picker.css?raw";
import vanillaPickerLicense from "../runtime/vendor/vanilla-picker.LICENSE.md?raw";
import vanillaPickerJs from "../runtime/vendor/vanilla-picker.js?raw";

export const RUNTIME_VERSION = "0.1.5";

export const runtimeAssets = {
  "runtime/deck-stage.js": deckStage,
  "runtime/vanilla-picker.js": vanillaPickerJs,
  "runtime/vanilla-picker.css": vanillaPickerCss,
  "runtime/vanilla-picker.LICENSE.md": vanillaPickerLicense,
  "runtime/html-deck-editor.js": `${editorBase}\n\n${editorWrapper}\n`,
  "runtime/html-deck-editor.css": editorCss
};
