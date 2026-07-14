<p align="center">
  <img src="docs/brand/anchor-deck-icon.svg" alt="帆页 Anchor Deck 图标" width="112" height="112">
</p>

<h1 align="center">帆页 Anchor Deck</h1>

<p align="center"><strong>让每一页，重新可编辑。</strong></p>

Turn AI-generated HTML presentations into editable decks.

[在线工作台](https://anchordeck.dpdns.org/) · [网页转换器](https://wengzige.github.io/html-deck-editor/) · [English](README.en.md) · [品牌规范](docs/brand/README.md) · [结构契约](docs/html-deck-contract.md) · [隐私说明](docs/privacy.md)

![License](https://img.shields.io/badge/license-MIT-0f172a) ![Local First](https://img.shields.io/badge/local--first-browser-2563eb) ![AI Adaptation](https://img.shields.io/badge/AI-smart%20adaptation-14b8a6)

AI 很会生成漂亮的 HTML slides，但后续改字、换图、挪布局通常很痛苦。帆页 Anchor Deck 解决的就是这一步：上传、适配、编辑和保存，让一次性 HTML 可以继续修改。

帆页围绕同一套 HTML 检测、转换和浏览器编辑器，提供在线工作台、网页转换器和 MCP 工作区三种入口。在线工作台适合直接续做账户项目；网页转换器和 MCP 则保留本地优先的工作流：

| 网页转换 | MCP 工作区 |
| --- | --- |
| <img src="https://cdn.jsdelivr.net/gh/wengzige/html-deck-editor@main/docs/images/readme/web-converter.jpg" alt="网页转换截图" width="100%" loading="lazy" decoding="async"> | <img src="https://cdn.jsdelivr.net/gh/wengzige/html-deck-editor@main/docs/images/readme/codex-workspace.jpg" alt="MCP 工作区截图" width="100%" loading="lazy" decoding="async"> |
| 上传 HTML / ZIP / 文件夹，生成可编辑 ZIP。 | 在 Codex、Claude 或 WorkBuddy 里打开本地工作区，直接让 AI 修改当前 deck。 |

## 三种使用方式

| 方式 | 适合场景 | AI 来源 | API 配置 |
| --- | --- | --- | --- |
| **在线工作台** | 在线打开单个 HTML，在账户项目中继续编辑并按需同步 | 平台 AI 或自己的 API | 平台 AI 可直接使用账户额度；自己的配置加密保存到账户 |
| **网页转换** | 上传 HTML / ZIP / 文件夹，生成可编辑 ZIP | 网页调用你选择的模型 | AI 智能适配需要自己的 API Key |
| **MCP 工作区** | 让 Codex、Claude Code、Claude Desktop 或 WorkBuddy 直接修改本地 deck | 当前 AI 客户端 | 不需要在网页配置 API |

三种入口可以单独使用，但不是三套编辑器。在线工作台在公共编辑核心之上增加账户项目、跨浏览器同步、平台额度和 AI 助手；网页转换器专注浏览器本地转换；MCP 工作区再接入本机文件与当前 AI 客户端。

<a id="anchor-deck-mcp"></a>

## Anchor Deck MCP

Anchor Deck MCP 不是第二套编辑器。它把 AI 客户端接到本地工作区，让 AI 读取当前 deck、定位选中元素并修改文字或 HTML。

<table>
  <tr>
    <td width="50%"><img src="https://cdn.jsdelivr.net/gh/wengzige/html-deck-editor@main/docs/images/readme/mcp-import.jpg" alt="导入截图" loading="lazy" decoding="async"></td>
    <td width="50%"><img src="https://cdn.jsdelivr.net/gh/wengzige/html-deck-editor@main/docs/images/readme/mcp-work-mode.jpg" alt="模式截图" loading="lazy" decoding="async"></td>
  </tr>
  <tr>
    <td>导入 ZIP、HTML，或管理本地 deck。</td>
    <td>在 AI 协作模式里按住 Option / Alt 选择元素。</td>
  </tr>
</table>

### 安装

#### macOS（推荐：Homebrew）

Homebrew 是 macOS 常用的软件安装工具。用它安装后，升级和卸载都只需要一条命令，也不需要打开未签名的 `.pkg`。

1. 打开 Finder → **应用程序 → 实用工具 → 终端**。
2. 输入 `brew --version` 并按回车。如果能看到版本号，直接进行下一步。
3. 如果提示 `command not found: brew`，复制 [Homebrew 官网](https://brew.sh/zh-cn/) 提供的这条命令到终端：

```bash
/bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"
```

安装过程中可能会要求输入 Mac 登录密码；输入时终端不会显示字符，这是正常的，输入完成后按回车。安装结束后，按照终端里 **Next steps** 的提示执行命令，再重新打开终端。
4. 复制下面这一整行到终端并按回车：

```bash
brew install wengzige/tap/anchor-deck-mcp
```

5. 安装完成后检查版本：

```bash
anchor-deck-mcp version
```

6. 根据正在使用的 AI 客户端，选择一条配置命令：

```bash
# Codex App / CLI
anchor-deck-mcp configure codex

# Claude Code
anchor-deck-mcp configure claude-code

# WorkBuddy（把路径换成自己的项目文件夹）
anchor-deck-mcp configure workbuddy --project "/完整/项目路径"
```

配置完成后，必须完全退出并重新打开对应的 AI 客户端。Homebrew 版不会在“应用程序”里增加图标，这是正常的；平时直接让 AI 打开工作区，或在终端运行：

```bash
anchor-deck-mcp serve --open
```

常用维护命令：

```bash
# 升级
brew update && brew upgrade anchor-deck-mcp

# 卸载程序和 MCP 配置，默认保留本地 deck
anchor-deck-mcp uninstall --yes
```

#### macOS 备用：未签名 `.pkg`

如果不想安装 Homebrew，可以从 [GitHub Releases](https://github.com/wengzige/html-deck-editor/releases/latest) 下载 `anchor-deck-mcp-*-macos-universal.pkg`。这个备用安装包目前没有 Apple Developer ID 签名和公证，因此 macOS 可能显示“Apple 无法验证是否包含恶意软件”。请只从本项目的 GitHub Releases 下载，并用同一 Release 中的 `SHA256SUMS.txt` 核验文件。

确认来源无误后：先尝试打开一次安装包，再进入 **系统设置 → 隐私与安全性 → 安全性 → 仍要打开**。安装后可从 `/Applications/Anchor Deck MCP.app` 启动，并使用 Release 中的 `anchor-deck-mcp-configure-macos.command` 完成客户端配置。

#### Windows

从 [GitHub Releases](https://github.com/wengzige/html-deck-editor/releases/latest) 下载 `anchor-deck-mcp-*-windows-x64-setup.exe`。安装后从开始菜单打开 **Anchor Deck MCP**，再运行 `anchor-deck-mcp-configure-windows.ps1` 配置 AI 客户端。

#### Claude Desktop

下载 `anchor-deck-mcp-*-claude-desktop.mcpb`，打开 `设置 → 扩展 → 高级设置 → 安装扩展`，选择文件后重启 Claude Desktop。

### 首次使用

1. 如果还没有配置，运行上面的 Homebrew 配置命令或 Release 中的自动配置脚本，把 MCP 接到 Codex、Claude Code 或 WorkBuddy。
2. 完全退出并重启对应的 AI 客户端。已打开的会话通常不会热更新 MCP 工具。
3. Codex 用户新建一个本地工作区/项目对话；无项目的纯聊天可能不会加载本机 MCP。
4. 发送：

```text
用 Anchor Deck MCP 打开工作区，我要上传 HTML。
```

5. 在右侧工作区导入 ZIP 或单个 HTML。完整文件夹建议先压缩为 ZIP，也可以切到“打开”并填写本机路径。
6. 导入后可在工作区下拉框中切换引导页和演示稿。

浏览器没有自动打开时，运行 `anchor-deck-mcp serve --open`；使用备用 `.pkg` 安装的用户也可以手动启动 App。

### 日常使用

- 打开工作区：`用 Anchor Deck MCP 打开工作区。`
- 修改元素：选中后说 `用 Anchor Deck MCP 把我选中的标题改成……`
- 协作模式选择：macOS 按住 `⌥ Option`，Windows 按住 `Alt`，再点击元素。
- 精确改字：直接拖选文字，再告诉 AI 修改内容。
- 智能适配：在工作区导入区域点击 **复制智能适配指令**，回到当前 AI 客户端输入框粘贴并发送。MCP 模式不需要网页 API Key。

大多数时候不需要输入工具名。客户端没有自动调用 MCP 时再明确说明：

```text
请使用 Anchor Deck MCP，先读取当前 deck 状态和选中元素，再执行修改。
```

同一套工作流适用于下列客户端：

| 客户端 | 连接方式 | 验证方法 |
| --- | --- | --- |
| Codex App / CLI | `anchor-deck-mcp configure codex` | `codex mcp list` 显示 `anchor_deck` |
| Claude Code | `anchor-deck-mcp configure claude-code` | `claude mcp get anchor-deck` 返回服务配置 |
| WorkBuddy | `anchor-deck-mcp configure workbuddy --project ...` | 项目中的 `workbuddy.mcp.json` 包含 `anchor-deck` |
| Claude Desktop | 直接安装 `.mcpb` | 扩展设置中显示 Anchor Deck MCP |

### 验证与排错

<details>
<summary>展开安装检查和常见问题</summary>

- 运行 `anchor-deck-mcp version`，能看到版本号。
- 运行 `anchor-deck-mcp where`，能看到 App、命令行入口、本地数据目录和卸载命令。
- Codex 运行 `codex mcp list`，应看到 `anchor_deck`。
- Claude Code 运行 `claude mcp get anchor-deck`，应返回 Anchor Deck MCP 配置。
- WorkBuddy 项目的 `workbuddy.mcp.json` 中应包含 `anchor-deck`。
- Claude Desktop 的扩展设置中应显示 Anchor Deck MCP。
- 看不到 MCP：重新运行配置脚本，然后完全重启客户端。
- 终端能看到 MCP，但当前 Codex 对话没有工具：新建本地工作区/项目对话。`deck_state`、`open_workspace` 是 MCP 工具，不是项目文件。
- 只能打开网页、不能调用工具：说明当前 AI 会话没有加载 MCP；手动启动 App 不会改变该会话的工具列表。

如果配置 Codex 时出现 `EACCES: permission denied, copyfile ~/.codex/config.toml`，通常是之前误用 `sudo` 导致 Codex 配置文件变成 root 所有。打开终端运行：

```bash
sudo chown "$USER":staff "$HOME/.codex" "$HOME/.codex/config.toml"
chmod 700 "$HOME/.codex"
chmod 600 "$HOME/.codex/config.toml"
```

然后重新运行对应的 `anchor-deck-mcp configure ...` 命令；备用安装包用户也可以重新运行自动配置脚本。

</details>

<a id="ai-smart-adapt"></a>

## AI 智能适配

很多 HTML deck 并不是标准幻灯片结构：页边界不清晰，文本和装饰层混在一起，图片、SVG、Canvas 不容易被编辑器选中。现在可以在转换前点击 **AI 智能适配**，让 AI 先帮助 Anchor Deck 理解这份 HTML，再由本地转换器写入编辑器需要的结构标记。

<table>
  <tr>
    <td width="50%"><img src="https://cdn.jsdelivr.net/gh/wengzige/html-deck-editor@main/docs/images/readme/ai-adapt-confirm.jpg" alt="适配截图" loading="lazy" decoding="async"></td>
    <td width="50%"><img src="https://cdn.jsdelivr.net/gh/wengzige/html-deck-editor@main/docs/images/readme/ai-settings.jpg" alt="设置截图" loading="lazy" decoding="async"></td>
  </tr>
  <tr>
    <td>网页模式：点击 AI 智能适配，先预览结构计划。</td>
    <td>网页模式：使用自己的 API Key；MCP 模式不需要网页 API 配置。</td>
  </tr>
</table>

AI 智能适配主要完成：

- 识别幻灯片页面、顺序和页面标题。
- 找出可编辑文本、媒体元素和视觉块。
- 给页面补 `.slide` / `data-title`，给文本补 `data-editable`。
- 给图片、视频、SVG、Canvas 等补媒体编辑标记。
- 跳过导航、按钮和装饰层，并提示需要复核的风险。

这套流程把 AI 用在“理解复杂 HTML”上，再由本地转换器校验 selector、写入标记、保留资源并完成打包。它能显著提升复杂 HTML 的适配成功率；遇到结构特别混乱或只有整页截图的文件时，仍建议在预览里复核页数、顺序和可编辑区域。

三种入口的 AI 来源不同：

| 模式 | 谁分析 HTML | 怎么启动 |
| --- | --- | --- |
| 在线工作台 | 平台 AI 或账户中加密保存的自有 API | 从工作区启动 **AI 智能适配**，或在编辑器中打开 **AI 助手** |
| 网页 | 你配置的 API | 点击 **AI 智能适配** |
| MCP | 当前 AI 客户端（Codex / Claude / WorkBuddy） | 点击 **复制智能适配指令**，粘贴到 AI 输入框并发送 |

### 在线工作台使用步骤

1. 打开[在线工作台](https://anchordeck.dpdns.org/)，登录后导入单个 HTML / HTM。
2. 在设置中选择平台 AI 或自己的 API；平台 AI 按成功调用扣除账户额度，失败自动退款。
3. 需要优化复杂结构时启动 **AI 智能适配** 并先核对预览；进入编辑器后也可以用 **AI 助手** 做小范围修改。
4. 完成一轮修改后点击 **保存到账户** 或 **同步当前修改**；编辑过程不是实时自动保存，重要项目请同时导出本地 HTML。

### 网页转换器使用步骤

1. 打开在线页面或本地页面。
2. 上传 HTML / ZIP / 文件夹。
3. 点击 **AI 智能适配**。
4. 配置你自己的 API Key。
5. 查看 AI 结构优化预览。
6. 确认后生成可编辑 ZIP。

### MCP 使用步骤

1. 打开 MCP 工作区并导入 HTML。
2. 点击 **复制智能适配指令**，回到当前 AI 客户端粘贴并发送。
3. AI 调用 `prepare_ai_adaptation` 读取摘要，生成计划，再调用 `apply_ai_adaptation` 写入本地 HTML。
4. 打开工作区复核页数、顺序和可编辑区域。

### 网页转换器 AI API 配置

网页模式采用 BYOK（Bring Your Own Key）：

- Provider：OpenAI-compatible、OpenAI、Claude / Anthropic、DeepSeek、通义千问、Kimi、智谱、MiniMax、硅基流动、OpenRouter、自定义中转站。
- API Base URL、API Path、Model、Stream 都可以手动修改。
- 支持可选 Proxy URL，用于处理不允许浏览器直连的接口。
- API Key 默认不长期保存；可选择仅本次会话保存或保存到当前浏览器本机。

不支持浏览器 CORS 直连时，需要更换接口或填写自己的代理地址。MCP 模式由宿主 AI 完成分析，不使用这套网页 API 配置。

## 其他功能亮点

- **网页转换本地优先**：文件默认只在浏览器里读取、改写和打包。
- **一键转可编辑**：上传 HTML / ZIP / 文件夹，下载新的可编辑 ZIP。
- **AI 智能适配**：复杂 HTML 可以先用 AI 识别页面、文本、图片和视觉块，再生成更适合编辑器的结构。
- **在线账户工作区**：在线版支持账户项目、跨浏览器读取最近一次同步版本、平台 AI 额度或自有 API，并继续复用同一套编辑器。
- **保留原资源**：尽量保留原始 CSS、JS、图片、字体和相对路径。
- **静态文件输出**：生成结果仍然是普通 HTML，可保存、转发、托管。
- **灵活的 AI 来源**：在线版可选平台额度或自有 API，网页转换器使用自己的 API Key，MCP 则由当前 AI 客户端生成适配计划。
- **for-ai.md 交接**：在编辑器里给元素写批注，一键导出给外部 AI 的修改上下文。
- **字体库与字体导入**：内置常用中文字体栈，可选联网开源字体，也可导入 WOFF2 / WOFF / TTF / OTF。
- **PDF / 图片导出**：自由勾选页面，导出 PDF、PNG 或 JPG；多页图片自动打包 ZIP。

## 给 AI 的修改交接：for-ai.md

转换后的 deck 里也可以继续和外部 AI 协作。进入编辑模式后，选中页面里的文字、图片或视觉块，在右侧 **AI 批注** 写下修改意见，然后点击 **导出 for-ai.md**。

这个文件会包含：

- 当前 HTML 的可编辑结构。
- 用户写在具体元素上的批注。
- 元素 anchor、所在页面、目标描述和内容片段。
- 给 AI 的修改要求，例如保持 `deck-stage` / `.slide` 层级、保留可编辑文本和资源路径。

`for-ai.md` 适合发给 Codex、Claude、ChatGPT 或其他 agent，让它们按批注继续小范围修改 HTML。导出它不会保存 HTML，也不会把批注标记混进正常导出的页面。

## 字体与 PDF / 图片导出

进入编辑模式并选中文字后，右侧字体菜单分为：

- **本机常用字体**：黑体、宋体、仿宋、楷体、苹方、微软雅黑，以及常用英文和等宽字体栈。
- **联网字体**：思源黑体、思源宋体、霞鹜文楷、站酷小薇体。选择后会访问固定版本的 jsDelivr CDN；字体授权以 OFL 1.1 和各字体项目说明为准。
- **已导入字体**：支持 WOFF2、WOFF、TTF、OTF，单个文件不超过 20MB。字体以 Data URL 嵌入 HTML；刷新前请先点 **保存 HTML**，否则需要重新导入。

工具栏的 **导出 PDF / 图片** 可以选择当前页、全选、取消全选或逐页勾选。PDF 一页对应一张幻灯片；PNG / JPG 单页直接下载，多页自动生成 ZIP。图片按 2 倍分辨率渲染，JPG 质量为 0.92。导出前会等待字体和页面资源；如果某一页的跨域图片无法读取，会提示具体页码并停止导出，避免生成缺图文件。

## 适合谁

Anchor Deck 适合这些场景：

- 你用 AI agent 生成了一份 HTML 汇报页，但后面还想手动微调。
- 你有一套 HTML slides，需要交给非技术同事改文字、图片和布局。
- 你想把静态 HTML 演示稿做成可编辑交付物，而不是一次性页面。
- 你正在做 AI PPT / HTML deck 工作流，需要一个“生成后可编辑”的落地点。

## 在线工作台与网页转换器

### 在线工作台

[https://anchordeck.dpdns.org/](https://anchordeck.dpdns.org/)

当前在线版面向横屏 PC，支持导入单个 HTML / HTM，完成编辑、批注、智能适配、AI 辅助、账户保存和导出。登录后的账户项目可在不同浏览器间读取最近一次成功同步的版本；当前修改需要主动点击保存，尚不提供实时自动保存、历史版本或分享链接。ZIP 和文件夹请继续使用下面的网页转换器或 MCP 工作区。

### 网页转换器

打开：

[https://wengzige.github.io/html-deck-editor/](https://wengzige.github.io/html-deck-editor/)

推荐上传：

| 输入 | 说明 |
| --- | --- |
| ZIP | 最推荐。包含 `index.html`、图片、CSS、JS 等完整资源 |
| 文件夹 | 本地完整 HTML 演示项目，里面包含 `index.html` |
| 单个 HTML | 没有外部资源依赖的简单演示稿 |

转换后：

1. 下载可编辑 ZIP。
2. 解压。
3. 打开 `index.html`。
4. 按 `E` 进入编辑模式。
5. 修改文字、图片和布局。
6. 保存或下载修改后的 HTML。

## 什么 HTML 更容易编辑

更容易被识别和编辑的 HTML 通常有这些特征：

- 多个 `section` 页面。
- Reveal.js 演示结构。
- 固定舞台结构，例如 `<deck-stage id="deckStage">`。
- 标题、正文、数字、标签是真实 HTML 文本。
- 图片、图表、形状拆成独立元素。
- 资源用相对路径放在项目目录里。

不太适合直接上传：

- `.pptx`、`.pdf`、`.key`。
- React、Vue、Next 等需要构建的源码工程。
- 普通长网页或 Web App。
- 只有整页截图、没有可编辑 HTML 内容的演示稿。

## 给 AI 的生成提示词

如果你希望 AI 生成的 HTML 更适合后续用 Anchor Deck 编辑，可以直接复制这段：

<details>
<summary>展开完整提示词</summary>

```text
请生成一份适合后续用 Anchor Deck 编辑的静态 HTML 演示稿，主题是「这里填写主题」。

结构要求：
- 输出完整 index.html，可以直接在浏览器打开。
- 使用 16:9 固定画布，推荐 1920x1080。
- 只使用一个顶层演示舞台，优先使用：
  <deck-stage id="deckStage" width="1920" height="1080">
    <section class="slide active visible" data-title="封面">...</section>
    <section class="slide" data-title="第二页">...</section>
  </deck-stage>
- 如果不用 deck-stage，也必须使用一个明确的外层容器，例如：
  <div id="deck" data-deck data-design-width="1920" data-design-height="1080">...</div>
- 每一页必须是舞台的直接子元素：<section class="slide">。
- 不要把 .slide 用在卡片、图片框、动效块、列表项或任何页内元素上。
- 不要在 slide 里面再嵌套 section.slide。
- HTML 标签必须完整闭合。

可编辑性要求：
- 标题、正文、数字、图表标签、页脚等必须是真实 HTML 文本。
- 重要文字、图片、图表、形状尽量拆成独立元素，便于选中和移动。
- 图片、视频、字体、脚本等资源使用相对路径，统一放在 assets/ 目录。
- 不要依赖登录态、后端接口或必须联网加载的核心资源。
- 可以使用少量原生 JavaScript 做翻页或动画，但不要在脚本里删除或重新生成 slide DOM。
```

短版：

```text
请生成一个完整静态 HTML 演示稿。必须只有一个 <deck-stage id="deckStage" width="1920" height="1080"> 或 <div id="deck" data-deck> 舞台；每页必须是舞台的直接子元素 <section class="slide" data-title="...">；不要在页内任何元素使用 .slide；不要让任何 section.slide 出现在舞台外；标签必须完整闭合。所有文字保留为真实 HTML 文本，图片和资源放 assets/ 相对路径，不要生成长网页、Web App 或需要构建的项目。
```

</details>

## 隐私与安全

- 使用网页转换器时，文件默认只在浏览器本地处理。
- 使用在线工作台时，登录、账户项目、平台 AI 和主动保存需要由服务器处理；未登录项目只保存在当前浏览器。兼容性改进的数据范围和开关会在在线版设置中明确显示。
- 项目不会内置作者 API Key。
- 在线工作台可以使用平台 AI，也可以把自己的 API 配置加密保存到账户；页面不会返回密钥明文。
- 网页模式的 AI 适配只在用户配置 API 后才会调用用户选择的服务商或代理。
- MCP 模式不要求网页 API Key；当前 AI 客户端读取结构摘要、生成计划，MCP 在本机应用计划。
- API Key 默认不长期保存。
- AI 调用只发送必要的 HTML 结构摘要，不默认发送图片二进制或完整资源包。
- 只有用户主动选择联网字体时，页面才会访问外部 jsDelivr CDN；本地导入字体和 PDF / 图片导出都在浏览器内完成。

## 开源范围

本仓库开源并维护 Anchor Deck 的核心转换器、文件检测、打包逻辑、注入到演示稿中的浏览器编辑器 runtime，以及配套文档和示例。

## 本地开发

```bash
npm ci
npm test
npm run typecheck
npm run test:final-samples
```

`test:final-samples` 覆盖 Reveal、Impress、普通固定舞台，以及宿主重建 DOM 后的内容恢复。公开 CI 会在 Linux 和 Windows 上执行完整测试与类型检查。

代码结构：

```text
src/lib/        文件读取、检测、HTML 改写、AI 适配和打包逻辑
src/runtime/    注入到演示稿中的浏览器编辑器运行时
src/types/      核心类型定义
src/test/       转换、检测、AI 配置、文件读取和运行时测试
docs/           HTML deck 结构契约
```

编辑器只有一个上游：`src/runtime/`。网页转换通过 `src/lib/runtimeAssets.ts` 注入这套 runtime；本地 MCP 适配器只读取并复用它，核心 `src/` 不得反向依赖 MCP。维护本地 `mcp/` 时，修改编辑器后还应运行：

```bash
npm --prefix mcp run check:boundary
```

编辑器识别能力通过稳定的公共 API 暴露，外部适配器不应调用 `DeckEditor` 私有方法：

```js
window.HtmlDeckEditor.recognition = {
  prepare,
  elements,
  kindFor,
  labelFor,
  getEditableTarget
};
```

## 致谢

感谢 [@yellowstar686](https://github.com/yellowstar686) 在 Anchor Deck MCP 早期阶段提供工作流思路和原型探索，帮助确认了这条方向的可行性。当前 MCP 工作区在此基础上继续完成了与 Anchor Deck 编辑器的集成、安装配置、跨平台打包和交互打磨。

## License

Anchor Deck 采用 [MIT License](LICENSE) 开源。使用、复制、修改、分发、再授权或销售本项目的副本时，必须保留版权声明和许可文本。

本许可适用于本仓库中公开的源码、文档和示例；使用时不得移除作者署名、隐瞒本项目来源或冒充原作者。

这个项目复用了 `frontend-slides` 的编辑器 runtime 思路和部分代码，已在 [NOTICE.md](NOTICE.md) 保留署名和许可说明。第三方组件仍遵循各自许可。
