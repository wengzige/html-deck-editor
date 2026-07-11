# Anchor Deck

**Turn HTML presentations that look good into local decks you can still edit.**

[Live demo](https://wengzige.github.io/html-deck-editor/) · [中文](README.md) · [HTML deck contract](docs/html-deck-contract.md) · [Privacy](docs/privacy.md)

![License](https://img.shields.io/badge/license-MIT-0f172a) ![Local First](https://img.shields.io/badge/local--first-browser-2563eb) ![AI Adaptation](https://img.shields.io/badge/AI-smart%20adaptation-14b8a6)

AI can generate beautiful HTML slides quickly, but editing them afterwards is usually painful. Anchor Deck focuses on that last mile: upload, adapt, download, and keep editing in the browser.

Anchor Deck can be used through the web converter or the MCP workspace. Both use the same browser editor, while their entry points, AI providers, and configuration remain independent.

| Web converter | MCP workspace |
| --- | --- |
| <img src="https://cdn.jsdelivr.net/gh/wengzige/html-deck-editor@main/docs/images/readme/web-converter.jpg" alt="Web screenshot" width="100%" loading="lazy" decoding="async"> | <img src="https://cdn.jsdelivr.net/gh/wengzige/html-deck-editor@main/docs/images/readme/codex-workspace.jpg" alt="MCP screenshot" width="100%" loading="lazy" decoding="async"> |
| Upload HTML / ZIP / folder and download an editable ZIP. | Open a local workspace from Codex, Claude, or WorkBuddy and let the agent edit the current deck. |

## Two Ways To Use Anchor Deck

The two workflows can be used independently:

| Workflow | Best for | AI provider | API setup |
| --- | --- | --- | --- |
| **Web converter** | Upload HTML / ZIP / folder and download an editable ZIP | A model configured in the web page | Smart Adapt requires your API key |
| **MCP workspace** | Let Codex, Claude Code, Claude Desktop, or WorkBuddy edit a local deck | The current AI client | No web API setup |

The web converter does not depend on MCP. MCP reuses the same detection, conversion, and browser editor, then adds local workspaces and agent tools.

<a id="anchor-deck-mcp"></a>

## Anchor Deck MCP

Use **Anchor Deck MCP** when you want Codex, Claude Code, Claude Desktop, or WorkBuddy to edit the current deck directly. It is not a second editor. It connects your AI client to a local workspace: the AI can read the current deck, locate the selected element, edit text or HTML, and still reuse the original web import flow and browser editor.

<table>
  <tr>
    <td width="50%"><img src="https://cdn.jsdelivr.net/gh/wengzige/html-deck-editor@main/docs/images/readme/mcp-import.jpg" alt="Import screenshot" loading="lazy" decoding="async"></td>
    <td width="50%"><img src="https://cdn.jsdelivr.net/gh/wengzige/html-deck-editor@main/docs/images/readme/mcp-work-mode.jpg" alt="Mode screenshot" loading="lazy" decoding="async"></td>
  </tr>
  <tr>
    <td>Import ZIP / HTML files or manage local decks.</td>
    <td>In AI collaboration mode, hold Option / Alt and click an element.</td>
  </tr>
</table>

### 1. Download and install

Open [GitHub Releases](https://github.com/wengzige/html-deck-editor/releases/latest) and download the file for your system or client:

| System / client | Download |
| --- | --- |
| macOS | `anchor-deck-mcp-*-macos-universal.pkg` |
| Windows | `anchor-deck-mcp-*-windows-x64-setup.exe` |
| Claude Desktop | `anchor-deck-mcp-*-claude-desktop.mcpb` |

Each Release also includes:

- `anchor-deck-mcp-configure-macos.command` / `anchor-deck-mcp-configure-windows.ps1`: automatically configure Codex, Claude Code, or WorkBuddy.
- `anchor-deck-mcp-uninstall-macos.command` / `anchor-deck-mcp-uninstall-windows.ps1`: helper scripts for uninstalling.
- `SHA256SUMS.txt`: verify the installer or `.mcpb` download.

macOS and Windows users can run the installer directly. The installer only places the app and command-line entry on your machine; the automatic configuration script only connects MCP to Codex, Claude Code, or WorkBuddy. It is normal for configuration to succeed even if you have not opened the app first.

There are two ways to open the workspace:

- Recommended: in your AI client, say `Use Anchor Deck MCP to open the workspace`; MCP starts the local workspace and opens the browser.
- Manual: open **Anchor Deck MCP** from Applications or the Start menu. This is the same as running `anchor-deck-mcp serve --open`.

Install locations and uninstall:

- macOS app: `/Applications/Anchor Deck MCP.app`
- macOS command: `/usr/local/bin/anchor-deck-mcp`
- Windows program: `C:\Program Files\Anchor Deck MCP\anchor-deck-mcp.exe`
- Windows entry: Start menu → **Anchor Deck MCP → 打开 Anchor Deck 工作区**
- Show local install paths: run `anchor-deck-mcp where`
- macOS uninstall: run `sudo /usr/local/bin/anchor-deck-mcp uninstall --yes`, or double-click `anchor-deck-mcp-uninstall-macos.command`
- Windows uninstall: choose **卸载 Anchor Deck MCP** from the Start menu, or run `anchor-deck-mcp-uninstall-windows.ps1`
- Uninstall keeps local deck data by default. Add `--delete-data` only if you also want to remove local data.

### 2. What to do after installation

For the first use, follow this order:

1. Run the automatic configuration script to connect MCP to Codex, Claude Code, or WorkBuddy.
2. Fully quit and restart that AI client. Already-open windows, threads, or sessions usually do not hot-reload MCP tools.
3. For Codex, test from a local workspace/project conversation. Any local folder is fine. Do not use a no-project, pure chat, or cloud-style empty conversation to judge whether local MCP is installed; those conversations may not load local MCP tools.
4. In the AI client, say: `Use Anchor Deck MCP to open the workspace. I want to upload HTML.`
5. MCP starts the local workspace and tries to open the browser automatically.
6. On first launch, you will see an upload guide page. The right-side import panel opens automatically.
7. Import a ZIP or single HTML file. For a complete folder, use a ZIP or open its local path from the workspace panel.
8. After upload, the workspace list keeps both the upload guide and your deck, so you can switch between them.

If the browser does not pop up automatically, open `/Applications/Anchor Deck MCP.app` manually or run `anchor-deck-mcp serve --open` in Terminal.

Configuration scripts:

- macOS: `anchor-deck-mcp-configure-macos.command`
- Windows: `anchor-deck-mcp-configure-windows.ps1`

The script lets you choose Codex, Claude Code, or WorkBuddy. It only manages the Anchor Deck MCP entry and does not delete other MCP servers. Before modifying an existing configuration, it creates a local backup.

In Codex, the MCP server name should be `anchor_deck`. The old development name `html_deck_codex` is removed automatically so the tool list does not expose a confusing legacy entry. If the tool disappears after switching Codex providers, reinstalling Codex, or syncing configuration, run the configuration script again.

One more Codex-specific trap: `deck_state` and `open_workspace` are MCP tools, not files in your project. If the AI starts searching an empty folder for `deck_state`, the current conversation did not receive the Anchor Deck MCP tool table. Restart Codex and open a local workspace conversation instead of searching project files or manually launching the MCP stdio service.

For Claude Desktop, install the `.mcpb` directly: open `Settings → Extensions → Advanced settings → Install extension`, choose the downloaded `.mcpb`, then restart Claude Desktop.

If you cannot find the installed entry:

- macOS: open Finder → Applications → **Anchor Deck MCP**, or run `anchor-deck-mcp serve --open` in Terminal.
- Windows: open the Start menu and search **Anchor Deck MCP**, or run `& "C:\Program Files\Anchor Deck MCP\anchor-deck-mcp.exe" serve --open` in PowerShell.
- Claude Desktop: it does not appear as a system app; check Claude Desktop's extension settings.

### 3. How to invoke MCP in Codex / Claude Code / WorkBuddy / Claude Desktop

After configuration and restart, you usually do not need to type tool names manually. Ask the client in natural language and it should call Anchor Deck MCP for you.

For the first launch, say:

```text
Use Anchor Deck MCP to open the workspace. I want to upload HTML.
```

After upload and selection, say this in your client:

| Client | Suggested prompt |
| --- | --- |
| Codex App / Codex CLI | `Use Anchor Deck MCP to read the current deck state, then change the title I selected in the workspace to ...` |
| Claude Code | `Use Anchor Deck MCP to inspect the current deck selection, then change the selected title to ...` |
| WorkBuddy | `Use Anchor Deck MCP to inspect the currently selected element and change its text to ...` |
| Claude Desktop | `Use Anchor Deck MCP to read the current deck and update the selected element to ...` |

If the AI does not call MCP automatically, be more explicit:

```text
Please use Anchor Deck MCP. First open the local workspace; if no deck has been imported, let me upload HTML. After I import a deck and select an element, call deck_state to read the current workspace and selected element, then edit that selected element.
```

Common tool names include `deck_state`, `list_elements`, `get_html`, `replace_text`, `set_attribute`, `replace_outer_html`, and `save_full_html`. Most users do not need to name these tools manually; use them only when the client does not choose the MCP tools by itself.

In AI collaboration mode, hold `Option` on macOS or `Alt` on Windows, then click an element in the deck. When the pink outline appears, return to your current AI client and describe the change.

### 4. Confirm it is working

<details>
<summary>Open install checks and troubleshooting</summary>

- Run `anchor-deck-mcp version` and confirm it prints a version.
- Run `anchor-deck-mcp where` and confirm it shows the app, command, local data directory, and uninstall command.
- Codex: after restarting Codex, run `codex mcp list` and confirm it shows `anchor_deck`. On macOS, if `codex` is not on PATH, run `/Applications/Codex.app/Contents/Resources/codex mcp list`. If Terminal shows `anchor_deck` but the current Codex thread still says Anchor Deck MCP is unavailable, fully quit and reopen Codex, then test in a local workspace/project conversation. No-project, pure chat, or cloud-style empty conversations may not load local MCP tools and should not be used as the install check. If you only see `node_repl`, `next_ai_drawio`, or the old `html_deck_codex`, Anchor Deck is not mounted correctly; run the configuration script again.
- Claude Code: run `claude mcp get anchor-deck` and confirm the command points to `anchor-deck-mcp`.
- WorkBuddy: confirm the project directory contains `workbuddy.mcp.json` with `anchor-deck`.
- Say `Use Anchor Deck MCP to open the workspace`; the browser should open the upload guide automatically.
- After uploading HTML, the workspace list should show both the upload guide and your deck.
- Select an element in the workspace, then confirm the AI can read the current deck state and change the selected text.

If these checks pass, the MCP service, original browser editor, and local workspace are connected. Decks, selection state, and backups are stored locally by default. The MCP executable does not require users to install Node.js or Python.

#### If Codex still does not show Anchor Deck MCP after restart

First check `codex mcp list`:

- If it does not show `anchor_deck`, configuration did not finish correctly. Run the automatic configuration script again.
- If it shows `anchor_deck enabled`, but the current conversation only has tools such as `node_repl`, `computer_use`, or `codex_app` and no `anchor_deck` / `deck_state`, then **this Codex conversation did not inject user-level MCP tools**. This is not an installer failure and it does not mean a project file is missing.

For the second case:

1. Try a local workspace/project conversation. Do not use a no-project, pure chat, or cloud-style empty conversation.
2. If Anchor Deck still does not appear after fully quitting Codex with `Cmd + Q`, this Codex surface currently cannot use this MCP. Do not keep searching the project for `deck_state`; it is a tool, not a file.
3. You can still open the workspace manually with `anchor-deck-mcp serve --open`, or by opening `/Applications/Anchor Deck MCP.app`. This lets you upload and edit in the browser, but it cannot make the current Codex conversation suddenly gain the `deck_state` tool.
4. If you need AI to call MCP tools, use a client that does load local MCP, such as Claude Code, WorkBuddy, or Claude Desktop; or try Codex again after a Codex update/fix.

If Codex configuration fails with `EACCES: permission denied, copyfile ~/.codex/config.toml`, the Codex config file is usually owned by root because a previous command was run with `sudo`. Open Terminal and run:

```bash
sudo chown "$USER":staff "$HOME/.codex" "$HOME/.codex/config.toml"
chmod 700 "$HOME/.codex"
chmod 600 "$HOME/.codex/config.toml"
```

Then run the configuration script again.

</details>

<a id="ai-smart-adapt"></a>

## AI Smart Adapt

Many HTML decks do not have a clean slide structure. Slide boundaries can be ambiguous, text may be mixed with decorative layers, and images, SVG, or Canvas elements may be hard for an editor to select. Before conversion, click **AI Smart Adapt** to let AI understand the HTML structure, then let the local converter write the editor markers.

<table>
  <tr>
    <td width="50%"><img src="https://cdn.jsdelivr.net/gh/wengzige/html-deck-editor@main/docs/images/readme/ai-adapt-confirm.jpg" alt="Adapt screenshot" loading="lazy" decoding="async"></td>
    <td width="50%"><img src="https://cdn.jsdelivr.net/gh/wengzige/html-deck-editor@main/docs/images/readme/ai-settings.jpg" alt="Settings screenshot" loading="lazy" decoding="async"></td>
  </tr>
  <tr>
    <td>Web mode: run Smart Adapt and review the structure plan.</td>
    <td>Web mode: bring your own API key. MCP mode does not need web API setup.</td>
  </tr>
</table>

AI Smart Adapt helps with:

- Detecting slide pages, order, and page titles.
- Finding editable text, media elements, and visual blocks.
- Adding `.slide` / `data-title` to pages and `data-editable` to text.
- Adding media editing markers to images, videos, SVG, Canvas, and similar elements.
- Skipping navigation, buttons, decorative layers, and other areas that should not be edited.
- Reporting risks such as uncertain page count, order, or media detection.
- Showing an AI structure preview before the editable ZIP is generated.

The AI is used to understand complex HTML; the local converter validates selectors, writes markers, preserves assets, and packages the result. This can significantly improve adaptation success for complex decks. For very messy structures or screenshot-only slides, still review the preview before downloading.

If you are using Anchor Deck MCP from Codex, Claude, or WorkBuddy, you do not need to configure the web API. Ask the host AI to call `prepare_ai_adaptation`, generate the structure plan itself, then call `apply_ai_adaptation` to write the markers locally.

### Web usage steps

1. Open the live page or local page.
2. Upload HTML / ZIP / folder.
3. If the detection result says the structure is complex, click **AI Smart Adapt**.
4. Configure your own API key.
5. Review the AI structure preview.
6. Confirm to generate the editable ZIP.

### MCP usage steps

1. Open the MCP workspace and import the HTML.
2. Click **复制智能适配指令** in the import panel, then paste and send the copied prompt in your current AI client.
3. The AI reads the summary, generates a JSON plan, and asks MCP to apply it locally.
4. Review page count, order, and editable areas in the workspace.

### Web AI API Setup

Web AI Smart Adapt uses BYOK: bring your own API key and configure it once in the page.

- Provider: OpenAI-compatible, OpenAI, Claude / Anthropic, DeepSeek, Qwen / DashScope, Kimi, Zhipu, MiniMax, SiliconFlow, OpenRouter, or custom relay.
- API Base URL, API Path, Model, and Stream can all be edited.
- Optional Proxy URL is available for APIs that do not allow direct browser CORS requests.
- API keys are not stored long-term by default. You can choose session-only storage or local browser storage.

If a provider or relay does not allow direct browser requests, use a browser-compatible relay or your own proxy URL.

In MCP mode, the connected AI client is already the agent, so the web page does not ask for an API key.

## Other Highlights

- **Local first**: files are read, rewritten, and packaged in your browser by default.
- **One-click editable ZIP**: upload HTML / ZIP / folder, download a new editable deck.
- **AI Smart Adapt**: use your own API key in web mode, or let the connected AI client generate the adaptation plan in MCP mode.
- **Preserve assets**: keep original CSS, JavaScript, images, fonts, and relative paths as much as possible.
- **Static output**: the result is still plain HTML that you can save, share, or host.
- **BYOK AI / MCP agent**: bring your own key on the web page; use the host agent when connected through MCP.
- **for-ai.md handoff**: add element-level notes in the editor and export a Markdown handoff for external AI agents.
- **Font library and imports**: use common Chinese font stacks, optional online open fonts, or imported WOFF2 / WOFF / TTF / OTF files.
- **PDF and image export**: select any pages and export PDF, PNG, or JPG; multiple images are packed into a ZIP.

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

<details>
<summary>Open the full prompt</summary>

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

</details>

## Privacy And Security

- Files are processed locally in the browser by default.
- The project does not include the author's API key.
- Web AI Adapt only calls the provider or proxy configured by the user.
- MCP AI Adapt does not require a web API key; the connected AI client reads the structure summary, generates a plan, and MCP applies it locally.
- API keys are not stored long-term by default.
- AI Adapt sends the necessary HTML structure summary, not image binaries or the full resource package by default.
- The editor contacts the external jsDelivr CDN only after the user selects an online font. Imported fonts and PDF/image rendering stay in the browser.

## Open Source Scope

This repository open-sources and maintains Anchor Deck's core converter, file detection, packaging logic, the browser editor runtime injected into converted decks, and the accompanying documentation and examples.

## Development

```bash
npm ci
npm test
npm run typecheck
npm run test:final-samples
```

`test:final-samples` covers Reveal, Impress, regular fixed stages, and content recovery after a host rebuilds the DOM. Public CI runs the full tests and type checks on Linux and Windows.

Code layout:

```text
src/lib/        File loading, detection, HTML rewriting, AI adaptation, and packaging
src/runtime/    Browser editor runtime injected into converted decks
src/types/      Core type definitions
src/test/       Conversion, detection, AI config, file loading, and runtime tests
docs/           HTML deck contract and public documentation
```

`src/runtime/` is the single source of truth for the editor. The web converter injects it through `src/lib/runtimeAssets.ts`; the local MCP adapter may consume the same runtime, but `src/` must never depend on MCP. When maintaining the local `mcp/` repository, run this after editor changes:

```bash
npm --prefix mcp run check:boundary
```

Editor recognition is exposed through a stable public API. External adapters should not call private `DeckEditor` methods:

```js
window.HtmlDeckEditor.recognition = {
  prepare,
  elements,
  kindFor,
  labelFor,
  getEditableTarget
};
```

## Acknowledgements

Thanks to [@yellowstar686](https://github.com/yellowstar686) for providing workflow ideas and prototype exploration during the early Anchor Deck MCP stage, helping confirm that this direction was viable. The current MCP workspace continues from that foundation with Anchor Deck editor integration, installation and configuration, cross-platform packaging, and interaction polish.

## License

Anchor Deck is licensed under the [MIT License](LICENSE). Any copy, modification, distribution, sublicense, or sale of this project must keep the copyright notice and license text.

This license applies to the source code, documentation, and examples published in this repository. It does not permit removing attribution, obscuring this project's provenance, or misrepresenting authorship.

This project reuses ideas and runtime code derived from `frontend-slides`; attribution and license notices are preserved in [NOTICE.md](NOTICE.md). Third-party components remain under their own licenses.
