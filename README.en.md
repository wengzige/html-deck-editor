# Anchor Deck

**Turn HTML presentations that look good into local decks you can still edit.**

[Live demo](https://wengzige.github.io/html-deck-editor/) · [中文](README.md) · [HTML deck contract](docs/html-deck-contract.md) · [Privacy](docs/privacy.md)

![License](https://img.shields.io/badge/license-MIT-0f172a) ![Local First](https://img.shields.io/badge/local--first-browser-2563eb) ![AI Adaptation](https://img.shields.io/badge/AI-smart%20adaptation-14b8a6)

```text
Upload HTML / ZIP / folder
  -> Detect slides
  -> Optionally run AI Smart Adapt
  -> Download an editable ZIP
  -> Open index.html and press E to edit
```

AI can generate beautiful HTML slides quickly, but editing them afterwards is usually painful. Anchor Deck focuses on that last mile: upload, adapt, download, and keep editing in the browser.

> New: AI Smart Adapt helps complex HTML decks become easier for the existing editor to understand and edit.

![Anchor Deck main interface](docs/images/anchor-deck-main.png)

## Highlights

- **Local first**: files are read, rewritten, and packaged in your browser by default.
- **One-click editable ZIP**: upload HTML / ZIP / folder, download a new editable deck.
- **AI Smart Adapt**: use your own API key to identify slides, text, media, and visual blocks in complex HTML.
- **Preserve assets**: keep original CSS, JavaScript, images, fonts, and relative paths as much as possible.
- **Static output**: the result is still plain HTML that you can save, share, or host.
- **BYOK AI**: bring your own key for OpenAI-compatible APIs, Claude / Anthropic, DeepSeek, Zhipu, OpenRouter, and relays.
- **for-ai.md handoff**: add element-level notes in the editor and export a Markdown handoff for external AI agents.
- **Font library and imports**: use common Chinese font stacks, optional online open fonts, or imported WOFF2 / WOFF / TTF / OTF files.
- **PDF and image export**: select any pages and export PDF, PNG, or JPG; multiple images are packed into a ZIP.

## Major Update: AI Smart Adapt

Many HTML decks do not have a clean slide structure. Slide boundaries can be ambiguous, text may be mixed with decorative layers, and images, SVG, or Canvas elements may be hard for an editor to select. Before conversion, click **AI Smart Adapt** to let AI understand the HTML structure, then let the local converter write the editor markers.

![AI adaptation confirmation dialog](docs/images/ai-adapt-confirm.png)

AI Smart Adapt helps with:

- Detecting slide pages, order, and page titles.
- Finding editable text, media elements, and visual blocks.
- Adding `.slide` / `data-title` to pages and `data-editable` to text.
- Adding media editing markers to images, videos, SVG, Canvas, and similar elements.
- Skipping navigation, buttons, decorative layers, and other areas that should not be edited.
- Reporting risks such as uncertain page count, order, or media detection.
- Showing an AI structure preview before the editable ZIP is generated.

The AI is used to understand complex HTML; the local converter validates selectors, writes markers, preserves assets, and packages the result. This can significantly improve adaptation success for complex decks. For very messy structures or screenshot-only slides, still review the preview before downloading.

## AI Handoff: for-ai.md

Converted decks can keep working with external AI agents. Enter edit mode, select a text block, image, or visual element, write notes in the right-side **AI comment** panel, then click **Export for-ai.md**.

The generated Markdown includes:

- The current editable HTML structure.
- User comments attached to specific elements.
- Element anchors, slide numbers, target labels, and content snippets.
- Instructions for AI, such as preserving the `deck-stage` / `.slide` hierarchy, editable text, and asset paths.

`for-ai.md` is useful for Codex, Claude, ChatGPT, or another agent that should make small, targeted changes to the HTML. Exporting it does not save the HTML and does not leak comment markers into the normal exported page.

## Fonts And PDF / Image Export

After entering edit mode and selecting text, the font menu is split into:

- **Common system fonts**: Chinese sans, Song, FangSong, Kai, PingFang, Microsoft YaHei, plus common Latin and monospace stacks.
- **Online fonts**: Noto Sans SC, Noto Serif SC, LXGW WenKai, and ZCOOL XiaoWei. Selecting one contacts a pinned jsDelivr CDN URL; licensing follows OFL 1.1 and each font project's notice.
- **Imported fonts**: WOFF2, WOFF, TTF, and OTF up to 20MB per file. The font is embedded in HTML as a Data URL. Click **Save HTML** before refreshing or the font must be imported again.

Use **Export PDF / Images** in the toolbar to choose the current page, all pages, no pages, or individual pages. A PDF contains one slide per page. A single PNG or JPG downloads directly; multiple images are placed in a ZIP. Images render at 2x resolution and JPG quality is 0.92. Export waits for fonts and resources. If a cross-origin image cannot be read, the editor reports the exact slide and stops instead of silently producing a file with missing artwork.

## Who It Is For

Anchor Deck is useful when:

- You generated HTML slides with an AI agent and still need manual edits.
- You have HTML slides that non-technical teammates need to adjust.
- You want to deliver an editable static HTML deck instead of a one-off webpage.
- You are building an AI PPT / HTML deck workflow and need an editable landing point.

## Use Online

Open:

[https://wengzige.github.io/html-deck-editor/](https://wengzige.github.io/html-deck-editor/)

Recommended inputs:

| Input | Notes |
| --- | --- |
| ZIP | Best option. Include `index.html`, images, CSS, JS, and other assets |
| Folder | A complete local HTML deck project that contains `index.html` |
| Single HTML | Works best for simple self-contained decks |

After conversion:

1. Download the editable ZIP.
2. Unzip it.
3. Open `index.html`.
4. Press `E` to enter edit mode.
5. Edit text, images, and layout.
6. Save or download the modified HTML.

## AI API Setup

AI Smart Adapt uses BYOK: bring your own API key and configure it once in the page.

![AI settings modal with provider presets](docs/images/ai-settings.png)

- Provider: OpenAI-compatible, OpenAI, Claude / Anthropic, DeepSeek, Qwen / DashScope, Kimi, Zhipu, MiniMax, SiliconFlow, OpenRouter, or custom relay.
- API Base URL, API Path, Model, and Stream can all be edited.
- Optional Proxy URL is available for APIs that do not allow direct browser CORS requests.
- API keys are not stored long-term by default. You can choose session-only storage or local browser storage.

If a provider or relay does not allow direct browser requests, use a browser-compatible relay or your own proxy URL.

## HTML That Edits Well

HTML is easier to adapt when it has:

- Multiple `section` slides.
- Reveal.js-like presentation structure.
- A fixed stage such as `<deck-stage id="deckStage">`.
- Real HTML text for titles, body copy, numbers, labels, and notes.
- Images, charts, shapes, and visual blocks split into separate elements.
- Relative asset paths inside the project folder.

Less suitable inputs:

- `.pptx`, `.pdf`, `.key`.
- React, Vue, Next, or other source projects that need a build step.
- Ordinary long webpages or web apps.
- Screenshot-only slides with no editable HTML content.

## Prompt For AI-Generated HTML

If you want AI-generated HTML to work better with Anchor Deck, copy this prompt:

```text
Create a complete static HTML presentation for the topic: "replace with your topic".

Structure requirements:
- Output a complete index.html that can open directly in a browser.
- Use a fixed 16:9 canvas, preferably 1920x1080.
- Use one top-level presentation stage, preferably:
  <deck-stage id="deckStage" width="1920" height="1080">
    <section class="slide active visible" data-title="Cover">...</section>
    <section class="slide" data-title="Second slide">...</section>
  </deck-stage>
- If not using deck-stage, use one explicit outer container:
  <div id="deck" data-deck data-design-width="1920" data-design-height="1080">...</div>
- Every slide must be a direct child of the stage: <section class="slide">.
- Do not use .slide on cards, image frames, animation blocks, list items, or any element inside a slide.
- Do not nest section.slide inside another slide.
- All HTML tags must be closed correctly.

Editability requirements:
- Titles, body copy, numbers, chart labels, and footers must be real HTML text.
- Keep important text, images, charts, and shapes as separate elements so they can be selected and moved.
- Use relative paths for images, videos, fonts, and scripts, preferably under assets/.
- Do not depend on login state, backend APIs, or critical remote assets.
- You may use small amounts of vanilla JavaScript for navigation or animation, but do not delete or regenerate slide DOM in scripts.
```

Short version:

```text
Create a complete static HTML presentation. It must have exactly one <deck-stage id="deckStage" width="1920" height="1080"> or <div id="deck" data-deck> stage. Every page must be a direct child <section class="slide" data-title="...">. Do not use .slide inside a page or outside the stage. Close all tags correctly. Keep text as real HTML text, use relative assets under assets/, and do not generate a long webpage, web app, or project that needs a build step.
```

## Privacy And Security

- Files are processed locally in the browser by default.
- The project does not include the author's API key.
- AI Adapt only calls the provider or proxy configured by the user.
- API keys are not stored long-term by default.
- AI Adapt sends the necessary HTML structure summary, not image binaries or the full resource package by default.
- The editor contacts the external jsDelivr CDN only after the user selects an online font. Imported fonts and PDF/image rendering stay in the browser.

## Open Source Scope

This repository publishes the core converter, file detection, packaging logic, and the browser editor runtime injected into converted decks. The hosted website shell source is not currently open-sourced on the `main` branch; GitHub Pages publishes the built static site.

## Development

```bash
npm install
npm test
npm run typecheck
```

Code layout:

```text
src/lib/        File loading, detection, HTML rewriting, AI adaptation, and packaging
src/runtime/    Browser editor runtime injected into converted decks
src/types/      Core type definitions
src/test/       Conversion, detection, AI config, file loading, and runtime tests
docs/           HTML deck contract and public documentation
```

## License

Anchor Deck is licensed under the [MIT License](LICENSE). Any copy, modification, distribution, sublicense, or sale of this project must keep the copyright notice and license text.

This license applies to the source code, documentation, and examples published in this repository. It does not grant rights to source code for the hosted website shell that is not published on the `main` branch, and it does not permit removing attribution, obscuring this project's provenance, or misrepresenting authorship.

This project reuses ideas and runtime code derived from `frontend-slides`; attribution and license notices are preserved in [NOTICE.md](NOTICE.md). Third-party components remain under their own licenses.
