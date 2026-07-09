# HTML Deck Contract

The editor runtime is built for fixed-stage HTML presentations.

The preferred structure is:

```html
<deck-stage id="deckStage" width="1920" height="1080">
  <section class="slide active visible">...</section>
  <section class="slide">...</section>
</deck-stage>
```

The converter can wrap simple section-based presentations into this structure. It should not claim to edit arbitrary websites.

Runtime files added by the converter:

```text
runtime/deck-stage.js
runtime/vanilla-picker.js
runtime/vanilla-picker.css
runtime/html-to-image.js
runtime/jspdf.umd.min.js
runtime/jszip.min.js
runtime/html-deck-editor.css
runtime/html-deck-editor.js
runtime/*.LICENSE.md
runtime/FONT-LICENSES.md
```

The page mounts the runtime with:

```js
window.HtmlDeckEditor.mount();
```

`convertInput` and `window.HtmlDeckEditor.mount()` remain the stable integration points. Runtime 0.1.6 adds managed fonts and page-selectable PDF/PNG/JPG export without changing the stage hierarchy. Only the top-level slide set recognized by the runtime is listed for export; slide-like elements nested inside a page are ignored.

Imported fonts are stored in document-level managed `@font-face` styles. Online fonts are stored as managed stylesheet links. Both survive **Save HTML** and are restored when that HTML is reopened.
