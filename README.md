# HTML Deck Editor

把 AI 生成的 HTML 汇报页，变成可以继续手动编辑的 HTML 演示稿。

HTML Deck Editor 是一个本地优先的转换工具：上传 HTML、ZIP 或包含 `index.html` 的文件夹，它会识别演示稿结构，注入浏览器编辑器运行时，然后下载新的可编辑 ZIP。

在线使用：

```text
https://wengzige.github.io/html-deck-editor/
```

文件处理都发生在浏览器本地，不需要账号、后端或上传服务器。

## 为什么用它

AI agent 很适合快速生成汇报类 HTML，例如项目汇报、产品方案、课程讲义、路演稿、复盘报告。但生成后的 HTML 往往有一个问题：能看，难改。

这个项目解决的是最后一公里：

- 给 HTML 演示稿加入可视化编辑能力
- 保留 ZIP 或文件夹中的图片、样式和脚本资源
- 支持已带编辑器的文件升级到新版运行时
- 下载后仍然是普通静态 HTML，方便保存、转发和托管

## 适合处理什么

推荐上传：

- ZIP：包含 `index.html`、图片、CSS、JS 等资源
- 文件夹：本地已有完整 HTML 演示项目，里面包含 `index.html`
- 单个 HTML：没有外部资源依赖的简单演示稿

更容易成功的 HTML 通常是：

- 多个 `section` 页面
- Reveal.js 演示结构
- 固定舞台结构，例如 `<deck-stage id="deckStage">`
- AI 生成的汇报、路演、课程、方案类页面

暂不适合：

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
