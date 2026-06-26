# Anchor Deck

把 AI 生成的 HTML 汇报页，变成可以继续手动编辑的 HTML 演示稿。

Anchor Deck 是一个本地优先的 HTML 演示稿转换工具：上传 HTML、ZIP 或包含 `index.html` 的文件夹，它会识别演示稿结构，加入浏览器编辑器运行时，然后下载新的可编辑 ZIP。

在线使用：

[https://wengzige.github.io/html-deck-editor/](https://wengzige.github.io/html-deck-editor/)

文件处理都发生在浏览器本地，不需要账号、后端或上传服务器。

## 开源范围

本仓库公开的是 Anchor Deck 的核心转换器、文件检测、打包逻辑，以及注入到演示稿中的浏览器编辑器 runtime。线上网站的页面外壳源码目前不随 `main` 分支开源；GitHub Pages 只发布构建后的静态产物。

## 为什么用它

AI agent 很适合快速生成汇报类 HTML，例如项目汇报、产品方案、课程讲义、路演稿、复盘报告。但生成后的 HTML 往往有一个问题：能看，难改。

这个项目解决的是最后一公里：

- 给 HTML 演示稿加入可视化编辑能力
- 保留 ZIP 或文件夹中的图片、样式和脚本资源
- 支持已带编辑器的文件升级到新版运行时
- 下载后仍然是普通静态 HTML，方便保存、转发和托管

## 用 AI 生成 HTML 演示稿

你可以先用 ChatGPT、Claude、Codex，或 [`zarazhangrui/frontend-slides`](https://github.com/zarazhangrui/frontend-slides) 这类 HTML slides skill 生成静态演示稿，再上传到 Anchor Deck 继续编辑。

工具会尽量兼容常见的 `section`、Reveal.js、固定舞台等演示结构，也会处理一些旧编辑器或复杂 HTML 的升级问题。下面的强约束提示词建议直接复制给 AI，用它生成的 HTML 更容易被稳定识别、转换和继续编辑。

给 AI 的推荐强约束提示词：

```text
请生成一份适合后续用 Anchor Deck 编辑的静态 HTML 演示稿，主题是「这里填写主题」。

必须满足以下结构约束：
- 输出一个完整的 index.html，可以直接在浏览器打开。
- 只使用一个顶层演示舞台，优先使用：
  <deck-stage id="deckStage" width="1920" height="1080">
    <section class="slide active visible" data-title="封面">...</section>
    <section class="slide" data-title="第二页">...</section>
  </deck-stage>
- 如果不用 deck-stage，也必须使用一个明确的外层容器，例如：
  <div id="deck" data-deck data-design-width="1920" data-design-height="1080">...</div>
- 每一页必须是这个舞台的直接子元素：<section class="slide">。
- 所有页面都必须放在同一个舞台里，不允许有 section.slide 或 .slide 跑到舞台外面。
- 不要把 .slide 用在卡片、图片框、动效块、列表项或任何页内元素上；页内元素请用 .card、.panel、.block、.figure、.layer 等类名。
- 不要在 slide 里面再嵌套 section.slide；如果需要分步内容，用 div、article、aside、figure、ul/li。
- HTML 标签必须完整闭合，尤其是 deckStage/#deck 和每一个 section.slide。
- 不要生成普通长网页、滚动网页、Web App、路由页面或需要构建的 React/Vue/Next 项目。

排版和可编辑性约束：
- 画布按 16:9 设计，推荐 1920x1080；每页自己负责背景和布局。
- 标题、正文、数字、图表标签、页脚等必须是真实 HTML 文本，不要把整页做成一张截图。
- 重要文字、图片、图表、形状尽量拆成独立元素，便于编辑器选中和移动。
- 图片、视频、字体、脚本等资源使用相对路径，统一放在 assets/ 目录；不要依赖登录态、后端接口或必须联网加载的核心资源。
- CSS 尽量写在 style 标签或相对路径 CSS 文件里，不要使用会隐藏非当前页内容的全局规则覆盖所有 .slide。
- 可以使用少量原生 JavaScript 做翻页或动画，但不要在脚本里重排、删除或重新生成 slide DOM。
- 如需动画，给页内元素加 data-anim、data-animate、data-order 等属性，不要依赖动画初始态让内容永久 opacity:0。

输出前自检：
- 页面数量 = 舞台直接子级 section.slide 的数量。
- document.querySelectorAll("#deckStage > .slide, #deck > .slide").length 应等于实际页数。
- document.querySelectorAll("body > section.slide, body > .slide").length 应为 0。
- 除页面本身外，页面内部不应再出现 class="slide"。
```

如果只想给 AI 一个更短的约束版本，可以使用：

```text
请生成一个完整静态 HTML 演示稿。必须只有一个 <deck-stage id="deckStage" width="1920" height="1080"> 或 <div id="deck" data-deck> 舞台；每页必须是舞台的直接子元素 <section class="slide" data-title="...">；不要在页内任何元素使用 .slide；不要让任何 section.slide 出现在舞台外；标签必须完整闭合。所有文字保留为真实 HTML 文本，图片和资源放 assets/ 相对路径，不要生成长网页、Web App 或需要构建的项目。
```

## 适合处理什么

推荐上传：

- ZIP：包含 `index.html`、图片、CSS、JS 等资源
- 文件夹：本地已有完整 HTML 演示项目，里面包含 `index.html`
- 单个 HTML：没有外部资源依赖的简单演示稿

更容易被识别和编辑的 HTML 通常是：

- 多个 `section` 页面
- Reveal.js 演示结构
- 固定舞台结构，例如 `<deck-stage id="deckStage">`
- AI 生成的汇报、路演、课程、方案类页面

不太适合直接上传：

- `.pptx`、`.pdf`、`.key`
- React、Vue、Next 等需要构建的源码工程
- 普通长网页或 Web App
- 只有截图、没有可编辑 HTML 内容的演示稿

## 转换后的 ZIP 怎么用

1. 下载可编辑 ZIP。
2. 解压 ZIP。
3. 打开里面的 `index.html`。
4. 按 `E` 进入编辑模式。
5. 修改文字、图片和布局。
6. 保存或下载修改后的 HTML。

## 代码结构

```text
src/lib/        文件读取、检测、HTML 改写和打包逻辑
src/runtime/    注入到演示稿中的浏览器编辑器运行时
src/types/      核心类型定义
src/test/       转换、检测、文件读取和运行时测试
docs/           HTML deck 结构契约
```

## 本地开发

```bash
npm install
npm test
npm run typecheck
```

## License

MIT. 这个项目复用了 `frontend-slides` 的编辑器 runtime 思路和部分代码，署名见 [NOTICE.md](NOTICE.md)。
