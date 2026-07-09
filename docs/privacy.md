# Privacy

Anchor Deck is designed as a local-first browser tool.

## Default File Handling

- Files are read with the browser File API.
- ZIP files are decompressed in browser memory.
- Converted files are generated as local downloads.
- The app does not require an account.
- The app does not need a backend for the normal conversion flow.

## AI Smart Adapt In Web Mode

In the standalone web page, AI Smart Adapt only runs after the user configures an API provider or proxy.

When AI Smart Adapt is used:

- The request is sent to the provider or proxy configured by the user.
- The app sends a compact HTML structure summary for adaptation.
- The app does not send image binaries or the full resource package by default.
- The app does not include the project author's API key.
- API keys are not stored long-term by default.

Users can choose one of these API key storage modes:

- Do not save.
- Save for the current browser session.
- Save in the current browser's local storage.

Local storage means the key stays in that browser profile until it is cleared. Use this mode only on a trusted device.

## AI Smart Adapt In MCP Mode

When Anchor Deck MCP is used from Codex or Claude, the web page does not ask for an API key. The MCP tools send a compact HTML structure summary to the host AI client as tool output. Codex or Claude generates the JSON adaptation plan, then MCP applies that plan locally and creates a backup before saving.

## for-ai.md

The editor can export `for-ai.md` as a local Markdown file for external AI agents. This file may include the current HTML and any user-written AI comments. It is downloaded locally; sharing it with another AI tool is controlled by the user.

## Fonts And Document Export

- System fonts do not make network requests.
- Selecting an online font requests a pinned stylesheet and font files from jsDelivr. The selected CDN link remains in saved HTML, so reopening that file may contact the CDN again.
- Imported WOFF2, WOFF, TTF, and OTF files are read locally and embedded into saved HTML as Data URLs. They are not uploaded by Anchor Deck.
- PDF, PNG, JPG, and ZIP outputs are rendered and generated in the browser. Anchor Deck does not upload the rendered pages.
- Users are responsible for checking the license of fonts they import or redistribute.

## Hosting

The public demo is intended to be hosted as static files. If analytics, hosted processing, cloud previews, accounts, or server-side AI calls are added later, this page should be updated before release.
