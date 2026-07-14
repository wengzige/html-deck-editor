<p align="center">
  <img src="https://cdn.jsdelivr.net/gh/wengzige/html-deck-editor@main/docs/images/readme/anchor-deck-icon.png" alt="帆页 Anchor Deck 图标" width="112" height="112">
</p>

<h1 align="center">帆页 Anchor Deck</h1>

<p align="center"><strong>让每一页，重新可编辑。</strong></p>

<p align="center">把 AI 生成的一次性 HTML 演示稿，变成可以继续修改、协作和交付的 deck。</p>

<p align="center">
  <a href="https://anchordeck.dpdns.org/"><strong>立即进入在线工作台 →</strong></a>
  &nbsp;&nbsp;·&nbsp;&nbsp;
  <a href="https://wengzige.github.io/html-deck-editor/">使用网页转换器</a>
  &nbsp;&nbsp;·&nbsp;&nbsp;
  <a href="README.en.md">English</a>
  &nbsp;&nbsp;·&nbsp;&nbsp;
  <a href="#anchor-deck-mcp">安装 MCP 工作区</a>
</p>

<p align="center">
  <a href="https://github.com/wengzige/html-deck-editor/releases/latest"><img src="https://img.shields.io/github/v/release/wengzige/html-deck-editor?display_name=tag&label=MCP&color=17624A" alt="最新 MCP 版本"></a>
  <img src="https://img.shields.io/badge/license-MIT-17251F" alt="MIT License">
  <img src="https://img.shields.io/badge/local--first-browser-6D7F75" alt="浏览器本地优先">
</p>

AI 很会生成漂亮的 HTML slides，但生成之后再改字、换图、挪布局，往往比重做还麻烦。帆页 Anchor Deck 接住的正是“生成之后”这一步：导入 HTML，识别页面与元素，继续编辑、批注、适配和导出。

## 在线工作台：最直接的入口

<p align="center">
  <a href="https://anchordeck.dpdns.org/"><img src="https://cdn.jsdelivr.net/gh/wengzige/html-deck-editor@main/docs/images/readme/online-workspace.png" alt="帆页 Anchor Deck 在线工作台" width="100%" loading="lazy" decoding="async"></a>
</p>

不想安装环境，也不想先研究转换流程，就从在线工作台开始：

1. [打开在线工作台](https://anchordeck.dpdns.org/)并登录。
2. 导入单个 HTML / HTM 演示稿。
3. 直接修改文字、图片和布局，或使用 AI 智能适配与 AI 助手。
4. 保存到账户、同步当前修改，或导出 HTML、PDF 和图片。

在线工作台把项目、编辑器和 AI 放在同一个入口里，适合需要持续修改、跨浏览器继续处理、使用平台额度或保存自己 API 配置的用户。

> 当前在线工作台面向横屏 PC，导入格式为单个 HTML / HTM。修改需要主动保存；暂不提供实时自动保存、历史版本或分享链接。ZIP 和完整文件夹请使用网页转换器或 MCP 工作区。

**[打开在线工作台 →](https://anchordeck.dpdns.org/)**

## 也可以选择本地优先

在线工作台不是唯一入口。需要处理完整资源包，或希望让当前 AI 客户端直接修改本机文件时，可以选择下面两条路线：

| 网页转换器 | MCP 工作区 |
| --- | --- |
| <img src="https://cdn.jsdelivr.net/gh/wengzige/html-deck-editor@main/docs/images/readme/web-converter.jpg" alt="网页转换器截图" width="100%" loading="lazy" decoding="async"> | <img src="https://cdn.jsdelivr.net/gh/wengzige/html-deck-editor@main/docs/images/readme/codex-workspace.jpg" alt="MCP 工作区截图" width="100%" loading="lazy" decoding="async"> |
| 上传 HTML / ZIP / 文件夹，在浏览器里生成可编辑 ZIP。 | 在 Codex、Claude 或 WorkBuddy 中打开本地工作区，让 AI 修改当前 deck。 |

## 三种入口，一套编辑体验

| 入口 | 最适合 | 文件位置 | AI 来源 | 是否需要网页 API Key |
| --- | --- | --- | --- | --- |
| **在线工作台** | 想直接开始，并把项目保存在账户中继续处理 | 浏览器与账户项目 | 平台 AI 或自己的 API | 使用平台 AI 时不需要 |
| **网页转换器** | 转换 HTML / ZIP / 文件夹，并下载可编辑 ZIP | 默认在浏览器本地处理 | 你选择的模型 | AI 智能适配需要 |
| **MCP 工作区** | 让 AI 客户端直接操作本机 deck | 本机工作区 | Codex、Claude、WorkBuddy 等当前客户端 | 不需要 |

三种入口复用同一套 HTML 检测、转换和浏览器编辑器，不是三套互不兼容的产品。可以先在线开始，再导出到本地；也可以始终只使用网页转换器或 MCP。

## 为什么值得用

- **生成后还能继续改**：文字、图片、布局、颜色、形状和页面都可以继续调整。
- **复杂 HTML 也能先理解再转换**：AI 智能适配识别页面、文本、媒体和视觉块，再由本地转换器校验并写入结构标记。
- **不锁死文件格式**：输出仍然是普通 HTML，可以保存、托管、转发，也可以继续交给其他 AI。
- **保留完整资源**：尽量保留原始 CSS、JavaScript、图片、字体和相对路径。
- **编辑与 AI 协作在同一个 deck 上发生**：手动选中元素、写批注，再让 AI 继续完成局部修改。
- **交付方式完整**：保存 HTML，或按页导出 PDF、PNG、JPG；多页图片自动打包 ZIP。

## 网页转换器快速开始

打开：[https://wengzige.github.io/html-deck-editor/](https://wengzige.github.io/html-deck-editor/)

| 输入 | 说明 |
| --- | --- |
| ZIP | 最推荐。包含 `index.html`、图片、CSS、JavaScript 等完整资源 |
| 文件夹 | 包含 `index.html` 的完整 HTML 演示项目 |
| 单个 HTML | 适合没有外部资源依赖的简单演示稿 |

1. 上传 HTML / ZIP / 文件夹。
2. 需要时运行 **AI 智能适配** 并检查结构预览。
3. 生成并下载可编辑 ZIP。
4. 解压后打开 `index.html`，按 `E` 进入编辑模式。
5. 修改内容，然后保存 HTML 或导出 PDF / 图片。

<a id="anchor-deck-mcp"></a>

## Anchor Deck MCP：让 AI 直接修改本地 deck

Anchor Deck MCP 把 Codex、Claude Code、Claude Desktop 或 WorkBuddy 接到本地工作区。AI 可以读取当前 deck、定位选中元素并修改文字或 HTML；编辑器仍然是同一套 Anchor Deck runtime。

<table>
  <tr>
    <td width="50%"><img src="https://cdn.jsdelivr.net/gh/wengzige/html-deck-editor@main/docs/images/readme/mcp-import.jpg" alt="MCP 导入截图" loading="lazy" decoding="async"></td>
    <td width="50%"><img src="https://cdn.jsdelivr.net/gh/wengzige/html-deck-editor@main/docs/images/readme/mcp-work-mode.jpg" alt="MCP 协作模式截图" loading="lazy" decoding="async"></td>
  </tr>
  <tr>
    <td>导入 ZIP、HTML，或管理本地 deck。</td>
    <td>在 AI 协作模式里按住 Option / Alt 选择元素。</td>
  </tr>
</table>

### macOS 推荐安装

```bash
brew install wengzige/tap/anchor-deck-mcp
anchor-deck-mcp version
```

安装后，根据正在使用的 AI 客户端选择一条配置命令：

```bash
# Codex App / CLI
anchor-deck-mcp configure codex

# Claude Code
anchor-deck-mcp configure claude-code

# WorkBuddy（把路径换成自己的项目文件夹）
anchor-deck-mcp configure workbuddy --project "/完整/项目路径"
```

配置完成后，完全退出并重新打开 AI 客户端，然后新建一个本地工作区对话并发送：

```text
用 Anchor Deck MCP 打开工作区，我要上传 HTML。
```

也可以从终端手动打开：

```bash
anchor-deck-mcp serve --open
```

<details>
<summary><strong>第一次使用 Homebrew</strong></summary>

1. 打开 Finder → **应用程序 → 实用工具 → 终端**。
2. 运行 `brew --version`。如果能看到版本号，直接安装 Anchor Deck MCP。
3. 如果提示 `command not found: brew`，按照 [Homebrew 官网](https://brew.sh/zh-cn/) 的说明安装 Homebrew，并完成终端显示的 **Next steps**。
4. 重新打开终端，再运行 `brew install wengzige/tap/anchor-deck-mcp`。

常用维护命令：

```bash
# 升级
brew update && brew upgrade anchor-deck-mcp

# 卸载程序和 MCP 配置，默认保留本地 deck
anchor-deck-mcp uninstall --yes
```

</details>

### 其他安装方式

- **macOS `.pkg`**：从 [GitHub Releases](https://github.com/wengzige/html-deck-editor/releases/latest) 下载 `anchor-deck-mcp-*-macos-universal.pkg`。安装包目前没有 Apple Developer ID 签名和公证，请只从本项目 Release 下载并用 `SHA256SUMS.txt` 核验。
- **Windows**：下载 `anchor-deck-mcp-*-windows-x64-setup.exe`，安装后运行 Release 中的 `anchor-deck-mcp-configure-windows.ps1`。
- **Claude Desktop**：下载 `anchor-deck-mcp-*-claude-desktop.mcpb`，进入 `设置 → 扩展 → 高级设置 → 安装扩展`，安装后重启 Claude Desktop。

### 日常使用

- 打开工作区：`用 Anchor Deck MCP 打开工作区。`
- 修改元素：选中后说 `用 Anchor Deck MCP 把我选中的标题改成……`
- 协作模式选择：macOS 按住 `⌥ Option`，Windows 按住 `Alt`，再点击元素。
- 精确改字：直接拖选文字，再告诉 AI 修改内容。
- 智能适配：点击 **复制智能适配指令**，回到当前 AI 客户端粘贴并发送。

| 客户端 | 连接方式 | 验证方法 |
| --- | --- | --- |
| Codex App / CLI | `anchor-deck-mcp configure codex` | `codex mcp list` 显示 `anchor_deck` |
| Claude Code | `anchor-deck-mcp configure claude-code` | `claude mcp get anchor-deck` 返回服务配置 |
| WorkBuddy | `anchor-deck-mcp configure workbuddy --project ...` | `workbuddy.mcp.json` 包含 `anchor-deck` |
| Claude Desktop | 直接安装 `.mcpb` | 扩展设置中显示 Anchor Deck MCP |

<details>
<summary><strong>MCP 安装检查与常见问题</strong></summary>

- `anchor-deck-mcp version`：检查当前版本。
- `anchor-deck-mcp where`：查看 App、命令行入口、本地数据目录和卸载命令。
- 看不到 MCP：重新运行对应的 `configure` 命令，然后完全重启客户端。
- 终端能看到 MCP，但当前 Codex 对话没有工具：新建本地工作区/项目对话。
- 只能打开网页、不能调用工具：说明当前 AI 会话没有加载 MCP；手动启动 App 不会改变该会话的工具列表。

如果 Codex 配置出现 `EACCES: permission denied, copyfile ~/.codex/config.toml`，通常是配置文件所有者不正确。确认原因后修复文件所有权，再重新运行 `anchor-deck-mcp configure codex`。

</details>

<a id="ai-smart-adapt"></a>

## AI 智能适配

有些 HTML deck 没有清晰的页边界，文本、装饰层和媒体也混在一起。AI 智能适配先理解这份 HTML，再由本地转换器写入编辑器所需的结构标记。

<table>
  <tr>
    <td width="50%"><img src="https://cdn.jsdelivr.net/gh/wengzige/html-deck-editor@main/docs/images/readme/ai-adapt-confirm.jpg" alt="AI 智能适配预览" loading="lazy" decoding="async"></td>
    <td width="50%"><img src="https://cdn.jsdelivr.net/gh/wengzige/html-deck-editor@main/docs/images/readme/ai-settings.jpg" alt="网页转换器 AI 设置" loading="lazy" decoding="async"></td>
  </tr>
  <tr>
    <td>先预览页面和元素识别结果，再确认写入。</td>
    <td>网页转换器使用自己的 API；MCP 使用当前 AI 客户端。</td>
  </tr>
</table>

它主要完成：

- 识别幻灯片页面、顺序和页面标题。
- 找出可编辑文本、媒体元素和视觉块。
- 为页面补 `.slide` / `data-title`，为文本补 `data-editable`。
- 为图片、视频、SVG、Canvas 等补媒体编辑标记。
- 跳过导航、按钮和装饰层，并提示需要人工复核的风险。

| 模式 | 谁分析 HTML | 怎么启动 |
| --- | --- | --- |
| 在线工作台 | 平台 AI 或账户中保存的自有 API | 启动 **AI 智能适配**，或在编辑器中使用 **AI 助手** |
| 网页转换器 | 你配置的 API | 点击 **AI 智能适配** |
| MCP 工作区 | 当前 AI 客户端 | 复制智能适配指令并发送给 AI |

网页转换器支持 OpenAI-compatible、OpenAI、Claude / Anthropic、DeepSeek、通义千问、Kimi、智谱、MiniMax、硅基流动、OpenRouter 和自定义兼容接口。API Key 默认不长期保存；不允许浏览器 CORS 直连的接口需要更换服务或使用自己的代理。

## 编辑、协作与交付

### 给 AI 的修改交接：`for-ai.md`

在编辑模式里选中文字、图片或视觉块，在右侧 **AI 批注** 写下修改意见，再点击 **导出 for-ai.md**。文件会包含元素 anchor、所在页面、内容片段和你的修改要求，适合继续交给 Codex、Claude、ChatGPT 或其他 agent 做小范围修改。

导出 `for-ai.md` 不会保存 HTML，也不会把批注标记混进正常导出的页面。

### 字体与 PDF / 图片导出

- **本机常用字体**：黑体、宋体、仿宋、楷体、苹方、微软雅黑，以及常用英文和等宽字体栈。
- **联网字体**：思源黑体、思源宋体、霞鹜文楷、站酷小薇体；选择后会访问固定版本的 jsDelivr CDN。
- **导入字体**：支持 WOFF2、WOFF、TTF、OTF，单个文件不超过 20MB，并以 Data URL 嵌入 HTML。
- **导出**：支持当前页或多页 PDF、PNG、JPG；多页图片自动生成 ZIP。

## 什么 HTML 更容易编辑

效果更好的输入通常具备：

- 明确的多页结构，例如多个 `section`、Reveal.js，或固定的 `<deck-stage>`。
- 标题、正文、数字和标签是真实 HTML 文本。
- 图片、图表和形状拆成独立元素。
- CSS、JavaScript、图片和字体使用相对路径放在项目目录中。

暂不适合直接上传：

- `.pptx`、`.pdf`、`.key`。
- React、Vue、Next 等需要构建的源码工程。
- 普通长网页、Web App。
- 只有整页截图、没有可编辑 HTML 内容的演示稿。

## 给 AI 的生成提示词

<details>
<summary><strong>展开适合 Anchor Deck 的 HTML 生成提示词</strong></summary>

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
- 每一页必须是舞台的直接子元素 <section class="slide">。
- 不要把 .slide 用在卡片、图片框、动效块、列表项或任何页内元素上。
- 不要在 slide 里面再嵌套 section.slide。
- HTML 标签必须完整闭合。

可编辑性要求：
- 标题、正文、数字、图表标签、页脚等必须是真实 HTML 文本。
- 重要文字、图片、图表、形状尽量拆成独立元素。
- 图片、视频、字体、脚本等资源使用相对路径，统一放在 assets/ 目录。
- 不要依赖登录态、后端接口或必须联网加载的核心资源。
- 可以使用少量原生 JavaScript 做翻页或动画，但不要在脚本里删除或重新生成 slide DOM。
```

</details>

## 隐私与安全

- **网页转换器**：文件默认只在浏览器本地读取、改写和打包。
- **在线工作台**：登录、账户项目、平台 AI 和主动保存需要服务器处理；未登录项目只保存在当前浏览器。
- **MCP 工作区**：文件保留在本机，当前 AI 客户端读取结构摘要并生成修改计划。
- 项目不会内置作者 API Key。
- 在线工作台可以使用平台 AI，也可以保存自己的 API 配置；页面不会返回密钥明文。
- 网页转换器只会在你配置并主动使用 AI 时调用所选服务商或代理。
- AI 适配默认发送必要的 HTML 结构摘要，不发送图片二进制或完整资源包。
- 只有主动选择联网字体时，页面才会访问外部字体 CDN。

详细说明见 [隐私说明](docs/privacy.md)。

## 开源范围与本地开发

本仓库开源并维护 HTML 文件检测、转换、打包逻辑，注入演示稿的浏览器编辑器 runtime，以及配套文档和示例。在线工作台的账户、同步和平台服务不在本仓库的开源范围内。

```bash
npm ci
npm test
npm run typecheck
npm run test:final-samples
```

<details>
<summary><strong>代码结构与适配器边界</strong></summary>

```text
src/lib/        文件读取、检测、HTML 改写、AI 适配和打包逻辑
src/runtime/    注入到演示稿中的浏览器编辑器运行时
src/types/      核心类型定义
src/test/       转换、检测、AI 配置、文件读取和运行时测试
docs/           HTML deck 结构契约和隐私说明
```

网页转换器通过 `src/lib/runtimeAssets.ts` 注入 `src/runtime/` 中的编辑器。外部适配器应复用公开接口，不应调用 `DeckEditor` 私有方法。HTML 结构要求见 [结构契约](docs/html-deck-contract.md)。

</details>

## 致谢

感谢 [@yellowstar686](https://github.com/yellowstar686) 在 Anchor Deck MCP 早期阶段提供工作流思路和原型探索，帮助确认这条方向的可行性。

项目复用了 `frontend-slides` 的编辑器 runtime 思路和部分代码，相关署名与许可见 [NOTICE.md](NOTICE.md)。

## License

Anchor Deck 采用 [MIT License](LICENSE) 开源。本许可适用于本仓库中公开的源码、文档和示例；第三方组件继续遵循各自许可。

[English](README.en.md) · [结构契约](docs/html-deck-contract.md) · [隐私说明](docs/privacy.md) · [GitHub Releases](https://github.com/wengzige/html-deck-editor/releases/latest)
