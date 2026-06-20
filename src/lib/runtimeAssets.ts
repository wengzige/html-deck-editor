import deckStage from "../runtime/deck-stage.js?raw";
import editorBase from "../runtime/html-deck-editor-base.js?raw";
import editorWrapper from "../runtime/html-deck-editor-wrapper.js?raw";
import editorCss from "../runtime/html-deck-editor.css?raw";

export const RUNTIME_VERSION = "0.1.3";

export const runtimeAssets = {
  "runtime/deck-stage.js": deckStage,
  "runtime/html-deck-editor.js": `${editorBase}\n\n${editorWrapper}\n`,
  "runtime/html-deck-editor.css": editorCss
};
