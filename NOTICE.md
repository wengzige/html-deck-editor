# Notices

HTML Deck Editor includes editor runtime ideas and code derived from the independently maintained `frontend-slides` project.

- Source project: https://github.com/wengzige/frontend-slides
- Upstream inspiration: https://github.com/zarazhangrui/frontend-slides
- License: MIT

The derived runtime is adapted for this product's local browser-based HTML deck conversion workflow. This notice is kept to preserve attribution for the reused runtime work.

HTML Deck Editor also includes `vanilla-picker` for the runtime color picker.

- Source project: https://github.com/Sphinxxxx/vanilla-picker
- Version: 2.12.3
- License: ISC

The export runtime includes these locally bundled libraries:

- `html-to-image` 1.11.13 — MIT — https://github.com/bubkoo/html-to-image
- `jsPDF` 4.2.1 — MIT — https://github.com/parallax/jsPDF
- `JSZip` 3.10.1 — MIT or GPLv3 — https://github.com/Stuk/jszip

Their full license texts are copied into every converted deck under `runtime/*.LICENSE.md`.

The optional online font list uses pinned CDN stylesheet versions. The font files are not bundled and are requested only after the user selects an online font. Noto Sans SC, Noto Serif SC, LXGW WenKai, and ZCOOL XiaoWei are provided under the SIL Open Font License 1.1; the LXGW webfont wrapper is MIT-licensed. See `runtime/FONT-LICENSES.md` in converted decks for versions and source links. Imported font files remain subject to the license supplied by their owner.
