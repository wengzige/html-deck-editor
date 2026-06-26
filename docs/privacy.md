# Privacy

Anchor Deck is designed as a local-first browser tool.

## Default File Handling

- Files are read with the browser File API.
- ZIP files are decompressed in browser memory.
- Converted files are generated as local downloads.
- The app does not require an account.
- The app does not need a backend for the normal conversion flow.

## AI Smart Adapt

AI Smart Adapt only runs after the user configures an API provider or proxy.

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

## for-ai.md

The editor can export `for-ai.md` as a local Markdown file for external AI agents. This file may include the current HTML and any user-written AI comments. It is downloaded locally; sharing it with another AI tool is controlled by the user.

## Hosting

The public demo is intended to be hosted as static files. If analytics, hosted processing, cloud previews, accounts, or server-side AI calls are added later, this page should be updated before release.
