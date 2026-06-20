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
runtime/html-deck-editor.css
runtime/html-deck-editor.js
```

The page mounts the runtime with:

```js
window.HtmlDeckEditor.mount();
```
