/* Frontend Slides Visual Deck Editor runtime. Source baseline: 1ba9bf0. */
(function () {
  const FONT_BODY_STACK = 'system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif';
  const FONT_CJK_SERIF_STACK = '"Noto Serif SC", "Songti SC", SimSun, serif';
  const FONT_LATIN_SERIF_STACK = 'Georgia, "Times New Roman", Times, serif';
  const FONT_MONO_STACK = '"SFMono-Regular", Consolas, "Liberation Mono", Menlo, monospace';
  const FONT_HEITI_STACK = '"PingFang SC", "Microsoft YaHei", "Noto Sans SC", sans-serif';
  const FONT_SONGTI_STACK = '"Songti SC", STSong, SimSun, serif';
  const FONT_FANGSONG_STACK = 'FangSong, STFangsong, "FangSong_GB2312", serif';
  const FONT_KAITI_STACK = '"Kaiti SC", STKaiti, KaiTi, serif';
  const FONT_PINGFANG_STACK = '"PingFang SC", "Helvetica Neue", Arial, sans-serif';
  const FONT_YAHEI_STACK = '"Microsoft YaHei", "Noto Sans SC", Arial, sans-serif';
  const FONT_DISPLAY_STACK = '"DIN Alternate", "Arial Narrow", Impact, sans-serif';
  const MAX_IMPORTED_FONT_BYTES = 20 * 1024 * 1024;
  const IMPORTED_FONT_STYLE_SELECTOR = "style[data-html-deck-editor-font]";
  const ONLINE_FONTS = [
    { id: "noto-sans-sc", label: "思源黑体", family: "Noto Sans SC", value: '"Noto Sans SC", sans-serif', cssUrl: "https://cdn.jsdelivr.net/npm/@fontsource/noto-sans-sc@5.2.9/400.css", source: "Fontsource / OFL 1.1" },
    { id: "noto-serif-sc", label: "思源宋体", family: "Noto Serif SC", value: '"Noto Serif SC", serif', cssUrl: "https://cdn.jsdelivr.net/npm/@fontsource/noto-serif-sc@5.2.9/400.css", source: "Fontsource / OFL 1.1" },
    { id: "lxgw-wenkai", label: "霞鹜文楷", family: "LXGW WenKai", value: '"LXGW WenKai", "Kaiti SC", serif', cssUrl: "https://cdn.jsdelivr.net/npm/lxgw-wenkai-webfont@1.7.0/lxgwwenkai-regular.css", source: "LXGW WenKai / OFL 1.1" },
    { id: "zcool-xiaowei", label: "站酷小薇体", family: "ZCOOL XiaoWei", value: '"ZCOOL XiaoWei", "Noto Serif SC", serif', cssUrl: "https://cdn.jsdelivr.net/npm/@fontsource/zcool-xiaowei@5.2.8/400.css", source: "Fontsource / OFL 1.1" }
  ];
  const TEXT_COLOR_PALETTE = [
    "#111111", "#444444", "#737373", "#a3a3a3", "#d4d4d4", "#ffffff",
    "#b42318", "#ef4444", "#f97316", "#f59e0b", "#eab308", "#84cc16",
    "#16a34a", "#14b8a6", "#06b6d4", "#0ea5e9", "#2563eb", "#1f2be0",
    "#7c3aed", "#a855f7", "#d946ef", "#ff3d8b", "#f43f5e", "#7f1d1d",
    "#78350f", "#365314", "#064e3b", "#0f172a", "#312e81", "#581c87"
  ];
  const BACKGROUND_COLOR_PALETTE = [
    { value: "", label: "无背景" },
    { value: "#ffffff", label: "白色" },
    { value: "#f7f7f5", label: "浅灰" },
    { value: "#e5e7eb", label: "灰色" },
    { value: "#d4d4d4", label: "中灰" },
    { value: "#111111", label: "黑色" },
    { value: "#fff2b8", label: "浅黄" },
    { value: "#fde68a", label: "暖黄" },
    { value: "#ffd6e7", label: "浅粉" },
    { value: "#fecdd3", label: "玫瑰粉" },
    { value: "#d9f99d", label: "浅绿" },
    { value: "#bbf7d0", label: "薄荷绿" },
    { value: "#99f6e4", label: "青绿" },
    { value: "#bfdbfe", label: "浅蓝" },
    { value: "#bae6fd", label: "天蓝" },
    { value: "#c4b5fd", label: "浅紫" },
    { value: "#fed7aa", label: "浅橙" },
    { value: "#fca5a5", label: "浅红" },
    { value: "#ff3d8b", label: "洋红" },
    { value: "#f97316", label: "橙色" },
    { value: "#eab308", label: "黄色" },
    { value: "#22c55e", label: "绿色" },
    { value: "#14b8a6", label: "青色" },
    { value: "#0ea5e9", label: "亮蓝" },
    { value: "#1f2be0", label: "蓝色" },
    { value: "#7c3aed", label: "紫色" },
    { value: "#0f172a", label: "深蓝灰" }
  ];
  const FORCED_HIDDEN_SLIDE_CLASSES = ["hidden", "is-hidden", "d-none", "invisible", "opacity-0"];

  const EDITOR_HTML = `
<div class="edit-hotzone" data-html-deck-editor-ui aria-hidden="true"></div>
  <button class="edit-toggle" id="editToggle" data-html-deck-editor-ui title="Edit mode (E)" aria-label="Toggle edit mode">E</button>
  <div class="editor-shell" id="editorShell" data-html-deck-editor-ui aria-label="演示编辑器">
    <div class="editor-toolbar" role="toolbar" aria-label="编辑工具">
      <button class="editor-button" id="helpBtn" type="button">编辑器功能介绍</button>
      <button class="editor-button editor-icon-button" id="undoBtn" type="button" title="撤回 (Cmd/Ctrl+Z)" aria-label="撤回" disabled>↶</button>
      <button class="editor-button editor-icon-button" id="redoBtn" type="button" title="重做 (Cmd/Ctrl+Shift+Z)" aria-label="重做" disabled>↷</button>
      <button class="editor-button editor-icon-button format-brush-button" id="formatBrushBtn" type="button" title="格式刷" aria-label="格式刷" aria-pressed="false" disabled>
        <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false">
          <path d="M14.5 4.8 19.2 9.5l-8.4 8.4H6.1v-4.7l8.4-8.4Z"></path>
          <path d="M13.2 6.1 17.9 10.8"></path>
          <path d="M5.6 18.4c-1.5 0-2.6.9-2.6 2.1 1.6.5 3.5.2 4.7-1"></path>
        </svg>
      </button>
      <button class="editor-button" id="addTextBtn" type="button">添加文字框</button>
      <button class="editor-button" id="addImageBtn" type="button">添加图片</button>
      <div class="shape-picker-wrap">
        <button class="editor-button" id="addShapeBtn" type="button" aria-haspopup="menu" aria-expanded="false">添加形状</button>
      </div>
      <div class="toolbar-action-group ai-export-group">
        <button class="editor-button" id="aiExportBtn" type="button" title="下载给 AI 的批注文件，不会保存 HTML">导出 for-ai.md</button>
        <button class="toolbar-help-button" id="aiExportHelpBtn" type="button" title="for-ai.md 使用说明" aria-label="for-ai.md 使用说明">?</button>
      </div>
      <button class="editor-button" id="exportBtn" type="button">导出 PDF / 图片</button>
      <button class="editor-button primary" id="saveBtn" type="button" title="覆盖当前 index.html；不支持覆盖时下载替换文件">保存 HTML</button>
      <button class="editor-button danger" id="exitEditBtn" type="button">退出编辑</button>
    </div>
    <div class="editor-help-modal" id="editorHelp" role="dialog" aria-modal="true" aria-labelledby="editorHelpTitle" hidden>
      <div class="editor-help-card">
        <div class="editor-help-header">
          <h2 class="editor-help-title" id="editorHelpTitle">编辑器使用介绍</h2>
          <button class="editor-help-close" id="helpCloseBtn" type="button" aria-label="关闭">×</button>
        </div>
        <div class="editor-help-body">
          <section class="editor-help-section">
            <h3>打开和选择</h3>
            <p>按 E 或点左上角按钮进入编辑。点选画面里的文字、图片、背景图或视觉块后，右侧面板会显示可编辑属性。</p>
          </section>
          <section class="editor-help-section">
            <h3>内容和图片</h3>
            <ul>
              <li>文字在右侧 Content 区修改，双击文字会自动聚焦到文字输入框。</li>
              <li>拖入图片到画面可新增图片；选中图片后拖入或选择文件会替换它。</li>
              <li>未标记的普通 HTML 也会自动识别常见文本、图片、背景图、SVG/canvas 和有边框/背景的视觉块。</li>
            </ul>
          </section>
          <section class="editor-help-section">
            <h3>布局和样式</h3>
            <p>拖动选框移动元素，拖右下角改变尺寸；右侧 Layout 可以精确输入位置和大小。选中元素或文字片段后点工具栏小刷子，可以把样式刷到另一个元素或另一段文字。</p>
          </section>
          <section class="editor-help-section">
            <h3>字体和导出</h3>
            <ul>
              <li>字体菜单提供本机常用字体、需联网的开源字体和已导入字体；本地字体支持 WOFF2、WOFF、TTF、OTF，单文件不超过 20MB。</li>
              <li>导入字体后请点“保存 HTML”，否则刷新页面后需要重新导入；联网字体会访问外部 CDN。</li>
              <li>“导出 PDF / 图片”可逐页勾选。单页图片直接下载，多页图片打包 ZIP；资源读取失败时会提示具体页码并停止导出。</li>
            </ul>
          </section>
          <section class="editor-help-section">
            <h3>动效和保存</h3>
            <ul>
              <li>Motion 区可以设置入场方式、出现顺序、延迟和时长，并支持预览当前元素或重播本页。</li>
              <li>选中元素后可拖动、缩放，点选框右上角 × 或按 Delete/Backspace 删除；撤回用 ↶ 或 Cmd/Ctrl+Z，重做用 ↷ 或 Cmd/Ctrl+Shift+Z。</li>
              <li>保存 HTML 会优先覆盖你授权的 index.html；浏览器不支持覆盖时会下载新的 index.html，请用它替换原项目目录里的同名文件，保留 runtime 和资源目录。</li>
              <li>选中元素后可在右侧 AI 批注里写修改意见；导出 for-ai.md 会带给 AI，保存 HTML 不会写入批注标记。</li>
            </ul>
          </section>
        </div>
      </div>
    </div>
    <div class="editor-help-modal" id="aiExportHelp" role="dialog" aria-modal="true" aria-labelledby="aiExportHelpTitle" hidden>
      <div class="editor-help-card">
        <div class="editor-help-header">
          <h2 class="editor-help-title" id="aiExportHelpTitle">for-ai.md 使用说明</h2>
          <button class="editor-help-close" id="aiExportHelpCloseBtn" type="button" aria-label="关闭">×</button>
        </div>
        <div class="editor-help-body">
          <section class="editor-help-section">
            <h3>它是什么</h3>
            <p>for-ai.md 是给外部 AI 读取的交接文件。它不会保存 HTML，也不会改写当前页面。</p>
          </section>
          <section class="editor-help-section">
            <h3>里面有什么</h3>
            <ul>
              <li>当前 HTML，其中被批注的元素会带稳定 anchor，方便 AI 定位。</li>
              <li>你在编辑器里写的批注，包括目标元素、所在页和修改意见。</li>
              <li>给 AI 的结构要求，比如保持 deck-stage 和 slide 层级，不要把内容改成截图。</li>
            </ul>
          </section>
          <section class="editor-help-section">
            <h3>怎么用</h3>
            <ul>
              <li>先选中画面里的文字、图片或块，在右侧 AI 批注里写清楚想让 AI 怎么改。</li>
              <li>点“导出 for-ai.md”，把下载的文件内容发给你使用的 AI。</li>
              <li>AI 会按文件里的要求保留现有图片和资源路径，并返回完整的 index.html；不需要再补充提示。</li>
              <li>收到 index.html 后，用它替换原项目中的同名文件，并保留原来的 assets 文件夹和目录结构，否则图片可能无法显示。</li>
              <li>“保存 HTML”只保存当前页面，不会把批注或 anchor 写进正式 HTML。</li>
            </ul>
          </section>
        </div>
      </div>
    </div>
    <div class="editor-help-modal" id="resetHelp" role="dialog" aria-modal="true" aria-labelledby="resetHelpTitle" hidden>
      <div class="editor-help-card">
        <div class="editor-help-header">
          <h2 class="editor-help-title" id="resetHelpTitle">重置编辑说明</h2>
          <button class="editor-help-close" id="resetHelpCloseBtn" type="button" aria-label="关闭">×</button>
        </div>
        <div class="editor-help-body">
          <section class="editor-help-section">
            <h3>它会清除什么</h3>
            <p>重置编辑只清除当前浏览器为这份 HTML 自动保存的本地草稿，也就是 localStorage 里的编辑记录和旧版草稿记录。</p>
          </section>
          <section class="editor-help-section">
            <h3>它不会清除什么</h3>
            <p>重置本身不会删除或改写任何 HTML 文件，包括你刚保存或覆盖过的 index.html；它只动当前浏览器里的草稿记录。</p>
          </section>
          <section class="editor-help-section">
            <h3>和保存的关系</h3>
            <p>“保存 HTML”会把当前画面写入你授权的 HTML 文件；如果浏览器不支持覆盖写入，就下载新的 index.html，请把它放回原项目目录替换旧文件，不要脱离 runtime 和资源目录单独打开。“重置编辑”只是清掉当前浏览器的自动草稿。刷新后页面会重新读取 HTML 文件本身，不再叠加草稿；如果这个文件之前已经被覆盖保存过，刷新后看到的仍然是已保存后的内容。如果刷新前又点保存 HTML，保存的仍然是当前屏幕上的内容。</p>
          </section>
        </div>
      </div>
    </div>
    <div class="editor-help-modal" id="editorConfirm" role="dialog" aria-modal="true" aria-labelledby="editorConfirmTitle" hidden>
      <div class="editor-help-card">
        <div class="editor-help-header">
          <h2 class="editor-help-title" id="editorConfirmTitle">确认操作</h2>
          <button class="editor-help-close" id="editorConfirmCloseBtn" type="button" aria-label="关闭">×</button>
        </div>
        <div class="editor-help-body">
          <p class="editor-confirm-message" id="editorConfirmMessage"></p>
          <div class="editor-confirm-actions">
            <button class="editor-button" id="editorConfirmCancelBtn" type="button">取消</button>
            <button class="editor-button danger" id="editorConfirmOkBtn" type="button">确认</button>
          </div>
        </div>
      </div>
    </div>
    <div class="editor-help-modal editor-export-modal" id="exportModal" role="dialog" aria-modal="true" aria-labelledby="exportTitle" hidden>
      <div class="editor-help-card editor-export-card">
        <div class="editor-help-header">
          <div>
            <h2 class="editor-help-title" id="exportTitle">导出 PDF / 图片</h2>
            <p class="editor-export-intro">按原页面顺序导出；图片为 2 倍分辨率，多页图片会自动打包 ZIP。</p>
          </div>
          <button class="editor-help-close" id="exportCloseBtn" type="button" aria-label="关闭">×</button>
        </div>
        <div class="editor-help-body editor-export-body">
          <fieldset class="editor-export-format">
            <legend>格式</legend>
            <label><input type="radio" name="editorExportFormat" value="pdf" checked> PDF</label>
            <label><input type="radio" name="editorExportFormat" value="png"> PNG</label>
            <label><input type="radio" name="editorExportFormat" value="jpg"> JPG</label>
          </fieldset>
          <div class="editor-export-page-header">
            <strong>页面</strong>
            <div class="editor-export-page-actions">
              <button class="editor-button" id="exportCurrentBtn" type="button">当前页</button>
              <button class="editor-button" id="exportAllBtn" type="button">全选</button>
              <button class="editor-button" id="exportNoneBtn" type="button">取消全选</button>
            </div>
          </div>
          <div class="editor-export-pages" id="exportPageList" aria-label="选择导出页面"></div>
          <p class="editor-export-status" id="exportStatus" aria-live="polite">已选择全部页面</p>
          <div class="editor-export-actions">
            <button class="editor-button" id="exportCancelBtn" type="button">取消</button>
            <button class="editor-button primary" id="exportStartBtn" type="button">开始导出</button>
          </div>
        </div>
      </div>
    </div>
    <div class="shape-menu" id="shapeMenu" role="menu" hidden>
      <button class="shape-choice" type="button" data-shape-choice="rect">矩形</button>
      <button class="shape-choice" type="button" data-shape-choice="roundRect">圆角矩形</button>
      <button class="shape-choice" type="button" data-shape-choice="circle">圆形</button>
      <button class="shape-choice" type="button" data-shape-choice="triangle">三角形</button>
      <button class="shape-choice" type="button" data-shape-choice="line">直线</button>
      <button class="shape-choice" type="button" data-shape-choice="arrow">箭头</button>
    </div>
    <aside class="editor-slides" aria-label="幻灯片列表">
      <p class="editor-title">Slides</p>
      <div class="slide-rail-list" id="slideRail"></div>
    </aside>
    <aside class="editor-panel" aria-label="属性面板">
      <section class="inspector-section">
        <p class="editor-title">Selection</p>
        <div class="selection-name" id="selectionName">未选中元素</div>
        <div class="drop-zone" id="imageDropZone">拖图片到这里，或拖到画面里<br>可替换选中图片，也可新增图片</div>
      </section>
      <section class="inspector-section comment-section">
        <p class="editor-title">AI 批注</p>
        <div class="comment-target" id="commentTargetStatus">未选中元素</div>
        <label class="field-label" for="commentInput">批注</label>
        <textarea class="editor-textarea comment-input" id="commentInput" placeholder="写给 AI 的修改意见" disabled></textarea>
        <p class="field-help comment-help">仅用于 for-ai.md；保存 HTML 会自动去掉批注标记。</p>
        <div class="inspector-actions">
          <button class="editor-button" id="saveCommentBtn" type="button" disabled>保存批注</button>
          <button class="editor-button" id="clearCommentBtn" type="button" disabled>清除批注</button>
        </div>
        <div class="comment-list" id="commentList"></div>
      </section>
      <section class="inspector-section">
        <p class="editor-title">Content</p>
        <label class="field-label" for="textInput">文字</label>
        <p class="field-help">在画面或这里选中文字后，可以只改选中文字的样式。</p>
        <textarea class="editor-textarea" id="textInput" disabled></textarea>
        <label class="field-label" for="imageInput">图片文件</label>
        <div class="file-picker-row">
          <button class="editor-button" id="imagePickBtn" type="button" disabled>选择图片</button>
          <span class="file-name" id="imageFileName">未选择图片</span>
          <input class="file-input-hidden" id="imageInput" type="file" accept="image/*" disabled tabindex="-1">
        </div>
        <label class="field-label" for="shapeInput">形状类型</label>
        <select class="editor-select" id="shapeInput" disabled>
          <option value="rect">矩形</option>
          <option value="roundRect">圆角矩形</option>
          <option value="circle">圆形</option>
          <option value="triangle">三角形</option>
          <option value="line">直线</option>
          <option value="arrow">箭头</option>
        </select>
      </section>
      <section class="inspector-section">
        <p class="editor-title">Style</p>
        <label class="field-label" for="fontFamilyInput">字体</label>
        <select class="editor-select" id="fontFamilyInput" disabled>
          <option value="">跟随原样式</option>
          <optgroup label="本机常用字体">
            <option value='${FONT_BODY_STACK}'>正文无衬线</option>
            <option value='${FONT_HEITI_STACK}'>中文黑体</option>
            <option value='${FONT_SONGTI_STACK}'>中文宋体</option>
            <option value='${FONT_FANGSONG_STACK}'>中文仿宋</option>
            <option value='${FONT_KAITI_STACK}'>中文楷体</option>
            <option value='${FONT_PINGFANG_STACK}'>苹方</option>
            <option value='${FONT_YAHEI_STACK}'>微软雅黑</option>
            <option value='${FONT_CJK_SERIF_STACK}'>中文标题衬线</option>
            <option value='${FONT_LATIN_SERIF_STACK}'>英文衬线</option>
            <option value='Inter, Arial, Helvetica, sans-serif'>Inter / Arial</option>
            <option value='Aptos, Calibri, Arial, sans-serif'>Aptos / Calibri</option>
            <option value='Arial, Helvetica, sans-serif'>Arial</option>
            <option value='"Times New Roman", Times, serif'>Times New Roman</option>
            <option value='${FONT_DISPLAY_STACK}'>窄体展示</option>
            <option value='${FONT_MONO_STACK}'>等宽代码</option>
          </optgroup>
          <optgroup label="联网字体 · 需联网">
            ${ONLINE_FONTS.map((font) => `<option value='${font.value}' data-online-font="${font.id}">${font.label} · ${font.source}</option>`).join("")}
          </optgroup>
          <optgroup label="已导入字体" id="importedFontGroup" hidden></optgroup>
        </select>
        <div class="font-import-row">
          <button class="editor-button" id="fontImportBtn" type="button">导入字体文件</button>
          <input class="file-input-hidden" id="fontImportInput" type="file" accept=".woff2,.woff,.ttf,.otf,font/woff2,font/woff,font/ttf,font/otf,application/font-woff,application/x-font-ttf,application/x-font-opentype" tabindex="-1">
          <span class="font-import-limit">WOFF2 / WOFF / TTF / OTF，≤ 20MB</span>
        </div>
        <p class="field-help font-import-status" id="fontImportStatus">需要更多字体请点“导入字体文件”；联网字体会访问外部 CDN，导入后点“保存 HTML”才会写入文件。</p>
        <div class="field-grid">
          <label><span class="field-label">字号</span><input class="editor-field" id="fontSizeInput" type="number" min="8" max="220" disabled></label>
          <div class="color-field">
            <span class="field-label" id="colorInputLabel">颜色</span>
            <button class="editor-field color-picker-button" id="colorButton" type="button" aria-haspopup="menu" aria-expanded="false" aria-labelledby="colorInputLabel colorInputText" disabled>
              <span class="color-swatch no-color" id="colorSwatch" aria-hidden="true"></span>
              <span id="colorInputText">未选中</span>
            </button>
            <div class="color-popover" id="colorPalette" role="menu" hidden>
              <div class="color-preset-grid" id="colorPresetGrid" aria-label="文字颜色预设"></div>
              <div class="color-picker-host" id="colorPickerHost" aria-label="自定义文字颜色"></div>
              <div class="color-picker-actions">
                <button class="editor-button color-eyedropper-button" id="colorEyedropperBtn" type="button" title="吸管取文字色" aria-label="吸管取文字色" disabled><span aria-hidden="true">⌖</span><span>吸管取文字色</span></button>
              </div>
            </div>
          </div>
        </div>
        <div class="text-style-controls" aria-label="文字样式">
          <button class="editor-button text-style-button" id="fontWeightBtn" type="button" title="粗体" aria-label="粗体" aria-pressed="false" disabled><strong>B</strong></button>
          <button class="editor-button text-style-button text-style-italic" id="fontStyleBtn" type="button" title="斜体" aria-label="斜体" aria-pressed="false" disabled><span aria-hidden="true">I</span></button>
        </div>
        <div class="field-grid">
          <div class="background-field">
            <span class="field-label" id="bgInputLabel">背景</span>
            <button class="editor-field color-picker-button" id="bgInput" type="button" aria-haspopup="menu" aria-expanded="false" aria-labelledby="bgInputLabel bgInputText" disabled>
              <span class="color-swatch no-color" id="bgSwatch" aria-hidden="true"></span>
              <span id="bgInputText">无背景</span>
            </button>
            <div class="color-popover bg-palette" id="bgPalette" role="menu" hidden>
              <div class="color-preset-grid" id="bgPresetGrid" aria-label="背景颜色预设"></div>
              <div class="color-picker-host" id="bgPickerHost" aria-label="自定义背景色"></div>
              <div class="color-picker-actions">
                <button class="editor-button color-eyedropper-button" id="bgEyedropperBtn" type="button" title="吸管取背景色" aria-label="吸管取背景色" disabled><span aria-hidden="true">⌖</span><span>吸管取背景色</span></button>
              </div>
            </div>
          </div>
          <label><span class="field-label">透明</span><input class="editor-field" id="opacityInput" type="number" min="0" max="100" step="5" disabled></label>
        </div>
      </section>
      <section class="inspector-section">
        <p class="editor-title">Layout</p>
        <div class="field-grid">
          <label><span class="field-label">X</span><input class="editor-field" id="xInput" type="number" min="-1920" max="1920" disabled></label>
          <label><span class="field-label">Y</span><input class="editor-field" id="yInput" type="number" min="-1080" max="1080" disabled></label>
        </div>
        <div class="field-grid">
          <label><span class="field-label">宽</span><input class="editor-field" id="widthInput" type="number" min="10" max="1920" disabled></label>
          <label><span class="field-label">高</span><input class="editor-field" id="heightInput" type="number" min="10" max="1080" disabled></label>
        </div>
        <div class="inspector-actions">
          <button class="editor-button" id="bringForwardBtn" type="button" disabled>上移层级</button>
          <button class="editor-button" id="sendBackwardBtn" type="button" disabled>下移层级</button>
        </div>
      </section>
      <section class="inspector-section">
        <p class="editor-title">Motion</p>
        <p class="motion-status" id="motionStatus">未选中元素</p>
        <label class="field-label" for="animSelect">入场方式</label>
        <select class="editor-select" id="animSelect" disabled>
          <option value="">跟随原始</option>
          <option value="none">无</option>
          <option value="fade">淡入</option>
          <option value="rise">上浮</option>
          <option value="drop">下落</option>
          <option value="left">左侧滑入</option>
          <option value="right">右侧滑入</option>
          <option value="scale">缩放入场</option>
          <option value="zoom">缩小落定</option>
          <option value="pop">弹出</option>
          <option value="rotate">旋入</option>
          <option value="blur">模糊显现</option>
          <option value="flip">翻转入场</option>
        </select>
        <div class="field-grid">
          <label><span class="field-label">顺序</span><input class="editor-field" id="motionOrderInput" type="number" min="1" max="99" step="1" disabled></label>
          <label><span class="field-label">延迟 ms</span><input class="editor-field" id="delayInput" type="number" min="0" max="20000" step="50" disabled></label>
        </div>
        <div class="field-grid">
          <label><span class="field-label">时长 ms</span><input class="editor-field" id="durationInput" type="number" min="100" max="10000" step="50" disabled></label>
        </div>
        <div class="inspector-actions">
          <button class="editor-button" id="previewMotionBtn" type="button" disabled>预览当前</button>
          <button class="editor-button" id="previewSlideMotionBtn" type="button">重播本页</button>
        </div>
        <div class="inspector-actions">
          <button class="editor-button" id="restoreMotionBtn" type="button" disabled>恢复原始</button>
        </div>
      </section>
      <section class="inspector-section">
        <div class="inspector-actions">
          <button class="editor-button danger" id="deleteBtn" type="button" disabled>删除</button>
          <div class="reset-action-group">
            <button class="editor-button" id="resetBtn" type="button">重置编辑</button>
            <button class="reset-help-button" id="resetHelpBtn" type="button" title="重置编辑说明" aria-label="重置编辑说明">?</button>
          </div>
        </div>
      </section>
    </aside>
    <div class="editor-guide vertical" id="editorGuideV" data-html-deck-editor-ui aria-hidden="true"></div>
    <div class="editor-guide horizontal" id="editorGuideH" data-html-deck-editor-ui aria-hidden="true"></div>
    <div class="editor-frame" id="editorFrame" data-html-deck-editor-ui aria-hidden="true">
      <div class="frame-move" id="frameMove">拖动</div>
      <button class="frame-delete" id="frameDelete" type="button" title="删除选中元素 (Delete)" aria-label="删除选中元素">×</button>
      <div class="frame-resize" id="frameResize"></div>
    </div>
    <div class="editor-toast" id="editorToast" data-html-deck-editor-ui role="status" aria-live="polite"></div>
  </div>
`;

  function editorUiElement(id) {
    return document.querySelector(`#${id}[data-html-deck-editor-ui]`);
  }

  function editorRootExists() {
    return Boolean(editorUiElement("editorShell") && editorUiElement("editToggle"));
  }

  function ensureEditorDom() {
    if (editorRootExists()) return;
    document.body.insertAdjacentHTML("beforeend", EDITOR_HTML);
  }

  function getStage() {
    return document.getElementById("deckStage") || document.querySelector("[data-html-deck-editor-stage], .deck-stage, #deck");
  }

  function isDeckStageElement(element) {
    return element && element.tagName && element.tagName.toLowerCase() === "deck-stage";
  }

  function stageSlides(stage) {
    const directSlides = Array.from(stage?.children || []).filter((child) => child.classList?.contains("slide"));
    if (directSlides.length) return directSlides;
    return topLevelElements(Array.from(stage?.querySelectorAll?.(".slide") || []));
  }

  function topLevelElements(elements) {
    return elements.filter((element) => !elements.some((other) => other !== element && other.contains(element)));
  }

  function clearForcedHiddenSlideState(slide) {
    if (!slide) return;
    slide.removeAttribute("hidden");
    if (slide.getAttribute("aria-hidden") === "true") slide.removeAttribute("aria-hidden");
    FORCED_HIDDEN_SLIDE_CLASSES.forEach((className) => slide.classList.remove(className));
    if (slide.style) {
      if (slide.style.display === "none") slide.style.removeProperty("display");
      if (slide.style.visibility === "hidden") slide.style.removeProperty("visibility");
      if (Number.parseFloat(slide.style.opacity || "") === 0) slide.style.removeProperty("opacity");
    }
  }

  function normalizeSlideIndex(index, slides) {
    const count = slides?.length || 0;
    if (!count) return 0;
    const number = Number(index);
    if (!Number.isFinite(number)) return 0;
    return Math.max(0, Math.min(count - 1, Math.round(number)));
  }

  function slideOffsetX(stage, slides, index) {
    const current = normalizeSlideIndex(index, slides);
    const slide = slides?.[current];
    if (!stage || !slide) return 0;
    const offsetLeft = Number(slide.offsetLeft);
    if (Number.isFinite(offsetLeft) && (offsetLeft !== 0 || current === 0)) {
      return Math.max(0, offsetLeft);
    }
    const slideWidth = elementDesignSize(slide, stageDesignSize(stage)).width;
    return Math.max(0, slideWidth * current);
  }

  function slideIndexFromOffsetX(offsetX, slides, stage) {
    if (!slides?.length) return -1;
    const target = Math.abs(Number(offsetX) || 0);
    let bestIndex = 0;
    let bestDistance = Infinity;
    slides.forEach((slide, index) => {
      const distance = Math.abs(slideOffsetX(stage, slides, index) - target);
      if (distance < bestDistance) {
        bestDistance = distance;
        bestIndex = index;
      }
    });
    return normalizeSlideIndex(bestIndex, slides);
  }

  function currentSlideFromStageTransform(stage, slides) {
    if (!stage || !slides?.length) return -1;
    const transform = stage.style?.transform || getComputedStyle(stage).transform || "";
    const pxOffset = translatePxFromTransform(transform);
    if (Number.isFinite(pxOffset)) return slideIndexFromOffsetX(pxOffset, slides, stage);
    const vwMatch = transform.match(/translate(?:3d|X)?\(\s*(-?\d+(?:\.\d+)?)vw\s*/i);
    if (!vwMatch) return -1;
    return normalizeSlideIndex(Math.abs(Number.parseFloat(vwMatch[1])) / 100, slides);
  }

  function translatePxFromTransform(transform) {
    const translateMatch = transform.match(/translate(?:3d|X)?\(\s*(-?\d+(?:\.\d+)?)px\s*/i);
    if (translateMatch) return Number.parseFloat(translateMatch[1]);
    const matrixMatch = transform.match(/^matrix\(([^)]+)\)$/i);
    if (matrixMatch) {
      const parts = matrixMatch[1].split(",").map((part) => Number.parseFloat(part.trim()));
      if (parts.length >= 6) return parts[4];
    }
    const matrix3dMatch = transform.match(/^matrix3d\(([^)]+)\)$/i);
    if (matrix3dMatch) {
      const parts = matrix3dMatch[1].split(",").map((part) => Number.parseFloat(part.trim()));
      if (parts.length >= 16) return parts[12];
    }
    return NaN;
  }

  function computeHostCurrentSlide(slides, stage) {
    const stageIndex = Number(stage?.dataset?.htmlDeckEditorCurrentSlide);
    if (Number.isFinite(stageIndex)) return normalizeSlideIndex(stageIndex, slides);
    const hostIndex = Number(window.__currentSlideIndex);
    if (Number.isFinite(hostIndex)) return normalizeSlideIndex(hostIndex, slides);
    const transformIndex = currentSlideFromStageTransform(stage, slides);
    return transformIndex >= 0 ? transformIndex : -1;
  }

  function computeCurrentSlide(slides, stage) {
    const markedIndex = slides.findIndex((slide) => slide.hasAttribute("data-html-deck-editor-current"));
    if (markedIndex >= 0) return markedIndex;
    const activeIndex = slides.findIndex((slide) => slide.classList.contains("active") || slide.classList.contains("visible") || slide.hasAttribute("data-deck-active"));
    if (activeIndex >= 0) return activeIndex;
    const hostIndex = computeHostCurrentSlide(slides, stage);
    return hostIndex >= 0 ? hostIndex : 0;
  }

  function markEditorCurrentSlide(slides, index) {
    const current = normalizeSlideIndex(index, slides);
    slides.forEach((slide, i) => {
      slide.setAttribute("data-html-deck-editor-page", "");
      if (i === current) clearForcedHiddenSlideState(slide);
      slide.toggleAttribute("data-html-deck-editor-current", i === current);
    });
    return current;
  }

  function syncHostCurrentSlide(stage, index) {
    window.__currentSlideIndex = index;
    if (stage) {
      const slides = stageSlides(stage);
      const isHorizontal = usesHorizontalSlideOffset(stage, slides);
      stage.dataset.htmlDeckEditorCurrentSlide = String(index);
      stage.style.setProperty("--html-deck-editor-current-slide", String(index));
      stage.style.setProperty("--html-deck-editor-slide-offset-x", `${isHorizontal ? slideOffsetX(stage, slides, index) : 0}px`);
    }
  }

  function showPreservedSlide(stage, index, options = {}) {
    const slides = stageSlides(stage);
    const current = normalizeSlideIndex(index, slides);
    slides.forEach((slide, i) => {
      const isCurrent = i === current;
      if (isCurrent) clearForcedHiddenSlideState(slide);
      slide.classList.remove("exit");
      slide.classList.toggle("active", isCurrent);
      slide.classList.toggle("visible", isCurrent);
      slide.toggleAttribute("data-deck-active", isCurrent);
      slide.toggleAttribute("data-html-deck-editor-current", isCurrent);
      slide.setAttribute("data-html-deck-editor-page", "");
    });
    syncHostCurrentSlide(stage, current);
    syncPreservedHostControls(current, slides.length);
    if (options.dispatch !== false) {
      document.dispatchEvent(new CustomEvent("slidechange", { detail: { index: current } }));
    }
    return current;
  }

  function syncPreservedHostControls(index, total) {
    const currentText = String(index + 1).padStart(2, "0");
    const totalText = String(total).padStart(2, "0");
    document.querySelectorAll(".nav-dot").forEach((dot, i) => {
      dot.classList.toggle("active", i === index);
    });
    ["navCounter", "slideNum"].forEach((id) => {
      const node = document.getElementById(id);
      if (node) node.textContent = `${currentText} / ${totalText}`;
    });
    const progress = document.getElementById("progress");
    if (progress) progress.style.width = `${((index + 1) / Math.max(1, total)) * 100}%`;
  }

  function installPreservedDeckNavigationBridge(stage, presentation) {
    if (!stage || stage.getAttribute("data-html-deck-editor-stage") !== "preserve") return;
    if (stage.dataset.htmlDeckEditorNavBridge === "true") return;
    stage.dataset.htmlDeckEditorNavBridge = "true";
    const play = (index, options = {}) => {
      presentation.slides = stageSlides(stage);
      presentation.currentSlide = showPreservedSlide(stage, index, options);
      presentation.scaleStage?.();
      return presentation.currentSlide;
    };
    if (typeof window.__playSlide !== "function") {
      window.__playSlide = (index) => play(index);
      window.__playSlide.__htmlDeckEditorBridge = true;
    }
    document.addEventListener("click", (event) => {
      if (!stage.isConnected) return;
      if (document.body.classList.contains("editing")) return;
      const target = event.target?.closest?.("#prevBtn, #nextBtn, .nav-dot, [data-slide-index], [data-slide]");
      if (!target || target.closest?.("[data-html-deck-editor-ui], #editorShell")) return;
      const slides = stageSlides(stage);
      if (!slides.length) return;
      const hostIndex = computeHostCurrentSlide(slides, stage);
      const current = hostIndex >= 0 ? hostIndex : computeCurrentSlide(slides, stage);
      let next = NaN;
      if (target.id === "prevBtn") next = current - 1;
      if (target.id === "nextBtn") next = current + 1;
      if (target.classList.contains("nav-dot")) next = Array.from(document.querySelectorAll(".nav-dot")).indexOf(target);
      if (!Number.isFinite(next)) {
        const raw = target.getAttribute("data-slide-index") || target.getAttribute("data-slide");
        next = Number.parseInt(raw, 10);
      }
      if (!Number.isFinite(next) || next < 0 || next >= slides.length) return;
      event.preventDefault();
      event.stopImmediatePropagation();
      play(next);
    }, true);
    document.addEventListener("keydown", (event) => {
      if (!stage.isConnected) return;
      if (document.body.classList.contains("editing")) return;
      if (event.defaultPrevented || ["INPUT", "TEXTAREA", "SELECT"].includes(event.target?.tagName) || event.target?.isContentEditable) return;
      const slides = stageSlides(stage);
      if (!slides.length) return;
      const hostIndex = computeHostCurrentSlide(slides, stage);
      const current = hostIndex >= 0 ? hostIndex : computeCurrentSlide(slides, stage);
      const key = event.key;
      const delta = key === "ArrowRight" || key === "ArrowDown" || key === " " || key === "Spacebar"
        ? 1
        : key === "ArrowLeft" || key === "ArrowUp"
          ? -1
          : 0;
      if (!delta) return;
      const next = current + delta;
      if (next < 0 || next >= slides.length) return;
      event.preventDefault();
      event.stopImmediatePropagation();
      play(next);
    }, true);
  }

  function usesHorizontalSlideOffset(stage, slides = stageSlides(stage)) {
    if (stage?.getAttribute?.("data-html-deck-editor-navigation") !== "horizontal") return false;
    if (!slides || slides.length < 2) return true;
    const firstLeft = Number(slides[0].offsetLeft) || 0;
    const firstTop = Number(slides[0].offsetTop) || 0;
    const overlaySlides = slides.every((slide) => {
      const style = getComputedStyle(slide);
      const isOverlayPositioned = style.position === "absolute" || style.position === "fixed";
      const sameOrigin = (Number(slide.offsetLeft) || 0) === firstLeft && (Number(slide.offsetTop) || 0) === firstTop;
      return isOverlayPositioned && sameOrigin;
    });
    return !overlaySlides;
  }

  function zeroInsets() {
    return { left: 0, right: 0, top: 0, bottom: 0 };
  }

  function normalizeInsets(insets) {
    const source = insets || zeroInsets();
    return {
      left: Math.max(0, Number(source.left) || 0),
      right: Math.max(0, Number(source.right) || 0),
      top: Math.max(0, Number(source.top) || 0),
      bottom: Math.max(0, Number(source.bottom) || 0)
    };
  }

  function safeAreaFromInsets(insets) {
    const safeInsets = normalizeInsets(insets);
    const width = Math.max(320, window.innerWidth - safeInsets.left - safeInsets.right);
    const height = Math.max(240, window.innerHeight - safeInsets.top - safeInsets.bottom);
    return { ...safeInsets, width, height };
  }

  function elementDesignSize(element, fallback = { width: 1920, height: 1080 }) {
    if (!element) return fallback;
    const attrWidth = Number.parseFloat(element.getAttribute?.("width") || element.dataset?.designWidth || "");
    const attrHeight = Number.parseFloat(element.getAttribute?.("height") || element.dataset?.designHeight || "");
    const rect = element.getBoundingClientRect?.();
    const width = attrWidth || element.offsetWidth || rect?.width || fallback.width;
    const height = attrHeight || element.offsetHeight || rect?.height || fallback.height;
    return {
      width: Math.max(1, width),
      height: Math.max(1, height)
    };
  }

  function stageDesignSize(stage) {
    const slides = stageSlides(stage);
    const slide = slides.find((item) => (
      item.hasAttribute("data-html-deck-editor-current") ||
      item.classList.contains("active") ||
      item.classList.contains("visible") ||
      item.hasAttribute("data-deck-active")
    )) || slides[0];
    if (isDeckStageElement(stage)) {
      return elementDesignSize(stage, { width: 1920, height: 1080 });
    }
    if (stage?.getAttribute?.("data-html-deck-editor-stage") === "preserve") {
      return elementDesignSize(slide || stage, { width: window.innerWidth || 1920, height: window.innerHeight || 1080 });
    }
    return elementDesignSize(stage || slide, { width: 1920, height: 1080 });
  }

  function stageFitTransform(size, insets) {
    const safe = safeAreaFromInsets(insets);
    const scale = Math.max(0.05, Math.min(safe.width / size.width, safe.height / size.height));
    return {
      x: Math.round(safe.left + (safe.width - size.width * scale) / 2),
      y: Math.round(safe.top + (safe.height - size.height * scale) / 2),
      scale
    };
  }

  function clearPreservedStageSafeLayout(stage) {
    if (!stage) return;
    stage.style.removeProperty("--html-deck-editor-stage-x");
    stage.style.removeProperty("--html-deck-editor-stage-y");
    stage.style.removeProperty("--html-deck-editor-stage-scale");
    stage.style.removeProperty("--html-deck-editor-current-slide");
    stage.style.removeProperty("--html-deck-editor-slide-offset-x");
    stage.querySelectorAll("[data-html-deck-editor-current], [data-html-deck-editor-page]").forEach((slide) => {
      slide.removeAttribute("data-html-deck-editor-current");
      slide.removeAttribute("data-html-deck-editor-page");
    });
  }

  function resetPreservedStageForExport(stage) {
    if (!stage || stage.getAttribute("data-html-deck-editor-stage") !== "preserve") return;
    if (stage.getAttribute("data-html-deck-editor-navigation") !== "horizontal") return;
    stage.style.removeProperty("transform");
    const slides = stageSlides(stage);
    slides.forEach((slide, index) => {
      const isFirst = index === 0;
      if (isFirst) clearForcedHiddenSlideState(slide);
      slide.classList.toggle("active", isFirst);
      slide.classList.toggle("visible", isFirst);
      slide.toggleAttribute("data-deck-active", isFirst);
    });
  }

  function layoutPreservedStageForEditor(stage, insets) {
    if (!stage || stage.getAttribute("data-html-deck-editor-stage") !== "preserve") return false;
    const safeInsets = normalizeInsets(insets);
    const editing = safeInsets.left || safeInsets.right || safeInsets.top || safeInsets.bottom;
    if (!editing) {
      clearPreservedStageSafeLayout(stage);
      return true;
    }

    const size = stageDesignSize(stage);
    const transform = stageFitTransform(size, safeInsets);
    stage.style.setProperty("--html-deck-editor-stage-x", `${transform.x}px`);
    stage.style.setProperty("--html-deck-editor-stage-y", `${transform.y}px`);
    stage.style.setProperty("--html-deck-editor-stage-scale", String(transform.scale));
    return true;
  }

  function defaultScaleStage(stage, insets = zeroInsets()) {
    if (!stage || stage.getAttribute("data-html-deck-editor-stage") === "preserve") return;
    const size = stageDesignSize(stage);
    const transform = stageFitTransform(size, insets);
    stage.style.transform = `translate(${transform.x}px, ${transform.y}px) scale(${transform.scale})`;
    stage.style.transformOrigin = "top left";
    stage.dataset.scale = String(transform.scale);
    stage.dataset.offsetX = String(transform.x);
    stage.dataset.offsetY = String(transform.y);
  }

  function normalizePresentation(input) {
    const stage = getStage();
    if (!stage) throw new Error("FrontendSlidesEditor requires #deckStage or .deck-stage");
    const presentation = input || {};
    if (!presentation.stage || !presentation.stage.isConnected || presentation.stage !== stage) {
      presentation.stage = stage;
      delete presentation.showSlide;
      delete presentation.scaleStage;
      delete presentation.setEditorInsets;
      presentation.currentSlide = computeCurrentSlide(stageSlides(stage), stage);
    }
    presentation.slides = stageSlides(stage);
    if (!Number.isFinite(presentation.currentSlide)) presentation.currentSlide = computeCurrentSlide(presentation.slides, stage);
    presentation.currentSlide = markEditorCurrentSlide(presentation.slides, presentation.currentSlide);
    syncHostCurrentSlide(stage, presentation.currentSlide);
    presentation.editorInsets = normalizeInsets(presentation.editorInsets);
    installPreservedDeckNavigationBridge(stage, presentation);

    const originalShowSlide = typeof presentation.showSlide === "function" ? presentation.showSlide.bind(presentation) : null;
    presentation.showSlide = function showSlide(index) {
      this.slides = stageSlides(stage);
      const requestedSlide = normalizeSlideIndex(index, this.slides);
      if (originalShowSlide) {
        originalShowSlide(requestedSlide);
        this.slides = stageSlides(stage);
        const hostIndex = computeHostCurrentSlide(this.slides, stage);
        this.currentSlide = markEditorCurrentSlide(this.slides, hostIndex >= 0 ? hostIndex : requestedSlide);
      } else {
        this.currentSlide = showPreservedSlide(stage, requestedSlide, { dispatch: false });
        if (usesHorizontalSlideOffset(stage, this.slides)) {
          stage.style.transform = `translateX(${-slideOffsetX(stage, this.slides, this.currentSlide)}px)`;
          stage.style.setProperty("--html-deck-editor-current-slide", String(this.currentSlide));
        }
      }
      syncHostCurrentSlide(stage, this.currentSlide);
      if (typeof window.__playSlide === "function" && !window.__playSlide.__htmlDeckEditorBridge) {
        try {
          window.__playSlide(this.currentSlide);
        } catch (error) {
          console.warn("HtmlDeckEditor could not sync the host slide player.", error);
        }
      }
      this.scaleStage?.();
      document.dispatchEvent(new CustomEvent("slidechange", { detail: { index: this.currentSlide } }));
    };

    const originalScaleStage = typeof presentation.scaleStage === "function" ? presentation.scaleStage.bind(presentation) : null;
    presentation.scaleStage = () => {
      originalScaleStage?.();
      if (isDeckStageElement(stage) && typeof stage.fit === "function") {
        stage.fit?.();
        return;
      }
      if (!layoutPreservedStageForEditor(stage, presentation.editorInsets)) {
        defaultScaleStage(stage, presentation.editorInsets);
      }
    };
    window.addEventListener("resize", presentation.scaleStage);

    const originalSetEditorInsets = typeof presentation.setEditorInsets === "function" ? presentation.setEditorInsets.bind(presentation) : null;
    presentation.setEditorInsets = (insets) => {
      presentation.editorInsets = normalizeInsets(insets);
      if (typeof stage.setEditorInsets === "function") {
        stage.setEditorInsets(presentation.editorInsets);
      } else {
        originalSetEditorInsets?.(presentation.editorInsets);
      }
    };

    if (typeof presentation.injectChrome !== "function") presentation.injectChrome = () => {};
    return presentation;
  }

    class DeckEditor {
      constructor(presentation) {
        this.presentation = presentation;
        this.storageKey = this.makeStorageKey();
        this.legacyStorageKeys = [];
        this.isActive = false;
        this.selected = null;
        this.hideTimeout = null;
        this.dragState = null;
        this.fileDragDepth = 0;
        this.undoStack = [];
        this.historyIndex = -1;
        this.isRestoringHistory = false;
        this.hasPendingHistoryChange = false;
        this.historyLimit = 40;
        this.historyCharacterLimit = 8_000_000;
        this.lastInsert = { x: 720, y: 300 };
        this.snapThreshold = 12;
        this.motionFrameRaf = null;
        this.motionCleanupTimers = new WeakMap();
        this.motionStableBoxes = new WeakMap();
        this.motionStableAncestors = new WeakMap();
        this.motionAncestorCounts = new WeakMap();
        this.textSelectionRange = null;
        this.textSelectionElement = null;
        this.layoutRefreshTimers = [];
        this.globalListenerController = typeof AbortController !== "undefined" ? new AbortController() : null;
        this.globalListeners = [];
        this.lastSlideReplay = { index: -1, at: 0 };
        this.motionHold = false;
        this.pendingConfirm = null;
        this.colorPickers = {};
        this.deleteConfirmKey = `${this.storageKey}:delete-confirm-seen`;
        this.fileHandle = null;
        this.comments = {};
        this.commentMode = false;
        this.commentInputAnchor = "";
        this.formatBrush = null;
        this.isExporting = false;
        this.exportAssetMap = this.loadExportAssetMap();
        this.exportAssetEntries = Array.from(this.exportAssetMap.entries());
        this.exportPseudoCounter = 0;
        this.exportPseudoImageSelectors = this.collectPseudoImageSelectors();
        this.importedFontCounter = 0;
        this.onlineFontPromises = new Map();
        this.toggle = editorUiElement("editToggle");
        this.hotzone = document.querySelector(".edit-hotzone[data-html-deck-editor-ui]");
        this.shell = editorUiElement("editorShell");
        this.stage = presentation.stage || getStage();
        this.frame = this.control("editorFrame");
        this.frameMove = this.control("frameMove");
        this.frameDelete = this.control("frameDelete");
        this.frameResize = this.control("frameResize");
        this.guideV = this.ensureOverlayElement("editorGuideV", "editor-guide vertical");
        this.guideH = this.ensureOverlayElement("editorGuideH", "editor-guide horizontal");
        this.toast = this.control("editorToast");
        this.attachFrame();
        this.controls = {
          slideRail: this.control("slideRail"),
          help: this.control("helpBtn"),
          helpModal: this.control("editorHelp"),
          helpClose: this.control("helpCloseBtn"),
          aiExportHelp: this.control("aiExportHelpBtn"),
          aiExportHelpModal: this.control("aiExportHelp"),
          aiExportHelpClose: this.control("aiExportHelpCloseBtn"),
          resetHelp: this.control("resetHelpBtn"),
          resetHelpModal: this.control("resetHelp"),
          resetHelpClose: this.control("resetHelpCloseBtn"),
          confirmModal: this.control("editorConfirm"),
          confirmTitle: this.control("editorConfirmTitle"),
          confirmMessage: this.control("editorConfirmMessage"),
          confirmClose: this.control("editorConfirmCloseBtn"),
          confirmCancel: this.control("editorConfirmCancelBtn"),
          confirmOk: this.control("editorConfirmOkBtn"),
          undo: this.control("undoBtn"),
          redo: this.control("redoBtn"),
          formatBrush: this.control("formatBrushBtn"),
          addText: this.control("addTextBtn"),
          addImage: this.control("addImageBtn"),
          addShape: this.control("addShapeBtn"),
          shapeMenu: this.control("shapeMenu"),
          aiExport: this.control("aiExportBtn"),
          export: this.control("exportBtn"),
          exportModal: this.control("exportModal"),
          exportClose: this.control("exportCloseBtn"),
          exportCancel: this.control("exportCancelBtn"),
          exportStart: this.control("exportStartBtn"),
          exportCurrent: this.control("exportCurrentBtn"),
          exportAll: this.control("exportAllBtn"),
          exportNone: this.control("exportNoneBtn"),
          exportPageList: this.control("exportPageList"),
          exportStatus: this.control("exportStatus"),
          save: this.control("saveBtn"),
          exit: this.control("exitEditBtn"),
          selectionName: this.control("selectionName"),
          commentTarget: this.control("commentTargetStatus"),
          commentInput: this.control("commentInput"),
          saveComment: this.control("saveCommentBtn"),
          clearComment: this.control("clearCommentBtn"),
          commentList: this.control("commentList"),
          dropZone: this.control("imageDropZone"),
          imagePick: this.control("imagePickBtn"),
          imageName: this.control("imageFileName"),
          text: this.control("textInput"),
          image: this.control("imageInput"),
          shape: this.control("shapeInput"),
          fontFamily: this.control("fontFamilyInput"),
          importedFontGroup: this.control("importedFontGroup"),
          fontImport: this.control("fontImportBtn"),
          fontImportInput: this.control("fontImportInput"),
          fontImportStatus: this.control("fontImportStatus"),
          fontSize: this.control("fontSizeInput"),
          fontWeight: this.control("fontWeightBtn"),
          fontStyle: this.control("fontStyleBtn"),
          colorButton: this.control("colorButton"),
          colorPalette: this.control("colorPalette"),
          colorPresetGrid: this.control("colorPresetGrid"),
          colorPickerHost: this.control("colorPickerHost"),
          colorEyedropper: this.control("colorEyedropperBtn"),
          colorSwatch: this.control("colorSwatch"),
          colorText: this.control("colorInputText"),
          bg: this.control("bgInput"),
          bgPickerHost: this.control("bgPickerHost"),
          bgEyedropper: this.control("bgEyedropperBtn"),
          bgSwatch: this.control("bgSwatch"),
          bgText: this.control("bgInputText"),
          bgPalette: this.control("bgPalette"),
          bgPresetGrid: this.control("bgPresetGrid"),
          opacity: this.control("opacityInput"),
          x: this.control("xInput"),
          y: this.control("yInput"),
          width: this.control("widthInput"),
          height: this.control("heightInput"),
          bringForward: this.control("bringForwardBtn"),
          sendBackward: this.control("sendBackwardBtn"),
          motionStatus: this.control("motionStatus"),
          anim: this.control("animSelect"),
          order: this.control("motionOrderInput"),
          delay: this.control("delayInput"),
          duration: this.control("durationInput"),
          previewMotion: this.control("previewMotionBtn"),
          previewSlideMotion: this.control("previewSlideMotionBtn"),
          restoreMotion: this.control("restoreMotionBtn"),
          delete: this.control("deleteBtn"),
          reset: this.control("resetBtn")
        };
        [this.controls.colorPalette, this.controls.bgPalette].forEach((palette) => {
          if (palette && palette.parentElement !== this.shell) this.shell.appendChild(palette);
        });
        this.prepareEditableElements();
        this.prepareEditableIds();
        this.restoreManagedFonts();
        this.renderTextColorPalette();
        this.renderBackgroundPalette();
        this.initColorPickers();
        this.restore();
        this.syncCommentMarkers();
        this.renderComments();
        this.pushHistory();
        this.renderSlideRail();
        this.bindControls();
        this.bindEditableEvents();
        this.updateInspector();
        this.hideDeckResetControl();
        requestAnimationFrame(() => {
          this.hideDeckResetControl();
          this.replayActiveSlideMotion(false);
        });
      }

      hideDeckResetControl() {
        const roots = [document, this.stage?.shadowRoot].filter(Boolean);
        roots.forEach((root) => {
          root.querySelectorAll?.(".deck-controls .reset, .overlay .btn.reset").forEach((button) => {
            const divider = button.previousElementSibling;
            if (divider?.classList.contains("divider")) divider.hidden = true;
            button.hidden = true;
            button.setAttribute("aria-hidden", "true");
            button.tabIndex = -1;
          });
        });
      }

      attachFrame() {
        this.stage.querySelectorAll("[data-html-deck-editor-ui]").forEach((node) => {
          if (node !== this.frame && node !== this.guideV && node !== this.guideH) node.remove();
        });
        this.frame.classList.remove("active");
        this.frame.removeAttribute("style");
        this.hideGuides();
        this.shell.appendChild(this.guideV);
        this.shell.appendChild(this.guideH);
        this.shell.appendChild(this.frame);
      }

      ensureOverlayElement(id, className) {
        let element = this.control(id) || document.querySelector(`#${id}[data-html-deck-editor-ui]`);
        if (!element) {
          element = document.createElement("div");
          element.id = id;
          element.setAttribute("aria-hidden", "true");
        }
        element.className = className;
        element.setAttribute("data-html-deck-editor-ui", "");
        return element;
      }

      isEditorUiElement(target) {
        return Boolean(target?.closest?.("[data-html-deck-editor-ui]"));
      }

      control(id) {
        return this.shell?.querySelector?.(`#${id}`) || null;
      }

      makeStorageKey() {
        return `frontend-slides:${location.pathname}:${document.title}:visual-edits:v1`;
      }

      loadExportAssetMap() {
        const map = new Map();
        const script = document.getElementById("html-deck-editor-export-assets");
        if (!script?.textContent) return map;
        try {
          const data = JSON.parse(script.textContent);
          const assets = Array.isArray(data?.assets) ? data.assets : [];
          assets.forEach((asset) => {
            if (!asset?.dataUrl) return;
            const keys = Array.isArray(asset.keys) && asset.keys.length ? asset.keys : [asset.path];
            keys.forEach((key) => {
              const normalized = this.normalizeExportAssetKey(key);
              if (normalized) map.set(normalized, asset.dataUrl);
            });
          });
        } catch (error) {
          console.warn("HtmlDeckEditor could not read export assets.", error);
        }
        return map;
      }

      normalizeExportAssetKey(value) {
        const text = String(value || "").split(/[?#]/)[0].trim().replaceAll("\\", "/");
        if (!text) return "";
        let normalized = text.replace(/^\.\//, "").replace(/^\/+/g, "");
        try {
          normalized = decodeURIComponent(normalized);
        } catch (error) {
          // Keep the original if the path contains malformed escapes.
        }
        return normalized;
      }

      exportAssetDataUrl(source) {
        const keys = [source];
        try {
          const url = new URL(source, document.baseURI);
          keys.push(url.pathname);
        } catch (error) {
          // Non-URL values are matched as plain paths below.
        }
        for (const key of keys) {
          const normalized = this.normalizeExportAssetKey(key);
          const exact = this.exportAssetMap.get(normalized);
          if (exact) return exact;
          const suffixMatch = this.exportAssetEntries.find(([assetKey]) => normalized.endsWith(`/${assetKey}`));
          if (suffixMatch) return suffixMatch[1];
        }
        return "";
      }

      collectPseudoImageSelectors() {
        const selectors = [];
        const visitRules = (rules) => {
          Array.from(rules || []).forEach((rule) => {
            let nestedRules = null;
            try {
              nestedRules = rule.cssRules || null;
            } catch (error) {
              nestedRules = null;
            }
            if (nestedRules) {
              try {
                visitRules(nestedRules);
              } catch (error) {
                // Cross-origin stylesheets can refuse rule reads; skip them.
              }
              return;
            }
            const selectorText = rule.selectorText || "";
            if (!/::(?:before|after)/i.test(selectorText)) return;
            const text = rule.cssText || "";
            const style = rule.style;
            const hasImage = /url\(/i.test(text) || ["backgroundImage", "maskImage", "webkitMaskImage"].some((name) => /url\(/i.test(style?.[name] || ""));
            if (!hasImage) return;
            selectorText.split(",").forEach((selector) => {
              const match = selector.match(/::(before|after)/i);
              if (!match) return;
              const base = selector.slice(0, match.index).trim() || "*";
              selectors.push({ selector: base, pseudo: `::${match[1].toLowerCase()}` });
            });
          });
        };
        Array.from(document.styleSheets || []).forEach((sheet) => {
          try {
            visitRules(sheet.cssRules);
          } catch (error) {
            // Cross-origin stylesheets can refuse rule reads; skip them.
          }
        });
        return selectors;
      }

      pseudoImageTargetsFor(element) {
        if (!this.exportPseudoImageSelectors.length) return [];
        return this.exportPseudoImageSelectors.filter((entry) => {
          try {
            return element.matches(entry.selector);
          } catch (error) {
            return false;
          }
        });
      }

      getEditableElements() {
        return Array.from(new Set(this.stage.querySelectorAll("[data-editable], [data-editable-media], [data-editable-box], [data-editor-kind], .editor-layer")));
      }

      closestSlide(element) {
        if (!element || !this.stage.contains(element)) return null;
        const slides = this.presentation?.slides?.length ? this.presentation.slides : stageSlides(this.stage);
        return slides.find((slide) => slide === element || slide.contains(element)) || null;
      }

      prepareEditableElements() {
        this.stage.querySelectorAll("[data-editor-auto], [data-editor-kind], [data-editor-small]").forEach((element) => {
          delete element.dataset.editorAuto;
          delete element.dataset.editorKind;
          delete element.dataset.editorSmall;
        });
        this.withEditVisibleElements(() => {
        const candidates = Array.from(this.stage.querySelectorAll(".slide *")).filter((element) => !this.shouldIgnoreEditorCandidate(element));
        candidates.forEach((element) => {
          const explicitKind = this.explicitEditorKind(element);
          if (explicitKind) this.markEditorKind(element, explicitKind, false);
        });
        candidates.forEach((element) => {
          if (element.dataset.editorKind) return;
          const kind = this.inferEditorKind(element, { includeBoxes: false });
          if (kind) this.markEditorKind(element, kind, true);
        });
        candidates.slice().reverse().forEach((element) => {
          if (element.dataset.editorKind) return;
          const kind = this.inferEditorKind(element, { onlyBoxes: true });
          if (kind) this.markEditorKind(element, kind, true);
        });
        this.pruneCompositeAutoContainers();
        });
      }

      originalMotionSelector() {
        return [
          "[data-anim]",
          ".row-fill",
          ".tl-node",
          ".stack-block",
          ".bar-tower",
          ".sub-card",
          ".col",
          ".vrule",
          ".kpi-cell",
          ".card-fill",
          ".card-accent",
          ".card-ink"
        ].join(", ");
      }

      shouldHoldMotionNode(element) {
        if (!element?.matches) return false;
        if (element.matches(this.originalMotionSelector())) return true;
        const style = getComputedStyle(element);
        const hasCssAnimation = (style.animationName || "")
          .split(",")
          .some((name) => name.trim() && name.trim() !== "none");
        const opacity = Number.parseFloat(style.opacity || "1");
        return hasCssAnimation || opacity <= 0.01 || element.style?.opacity === "0";
      }

      motionHoldTargetsFor(element, slide) {
        const targets = [];
        let node = element;
        while (node && node !== slide) {
          if (this.shouldHoldMotionNode(node)) targets.push(node);
          node = node.parentElement;
        }
        return targets;
      }

      holdMotionNodeForEditing(node) {
        node.classList.add("html-deck-editor-edit-visible");
        node.setAttribute("data-html-deck-editor-motion-hold", "");
        node.style.setProperty("--html-deck-editor-edit-opacity", "1");
      }

      withEditVisibleElements(callback) {
        const selector = this.originalMotionSelector();
        const changed = [];
        this.stage.querySelectorAll(selector).forEach((element) => {
          changed.push({ element, opacity: element.style.getPropertyValue("--html-deck-editor-edit-opacity") });
          element.style.setProperty("--html-deck-editor-edit-opacity", "1");
        });
        try {
          callback();
        } finally {
          changed.forEach(({ element, opacity }) => {
            if (opacity) {
              element.style.setProperty("--html-deck-editor-edit-opacity", opacity);
            } else {
              element.style.removeProperty("--html-deck-editor-edit-opacity");
            }
          });
        }
      }

      markEditorKind(element, kind, automatic) {
        element.dataset.editorKind = kind;
        if (automatic) element.dataset.editorAuto = "true";
        if (this.isSmallEditableElement(element)) {
          element.dataset.editorSmall = "true";
        } else {
          delete element.dataset.editorSmall;
        }
      }

      shouldIgnoreEditorCandidate(element) {
        if (this.isEditorUiElement(element)) return true;
        if (element.closest("[data-generated-chrome]")) return true;
        if (element.matches("script, style, template, meta, link, br, wbr, defs, clipPath, mask, pattern, linearGradient, radialGradient, stop, source, track")) return true;
        if (this.isSvgDefinitionElement(element)) return true;
        if (element.matches(".deck-progress, .deck-count, .deck-controls, .edit-hotzone[data-html-deck-editor-ui], .edit-toggle[data-html-deck-editor-ui]")) return true;
        return false;
      }

      explicitEditorKind(element) {
        if (element.classList.contains("text-layer")) return "text";
        if (element.classList.contains("image-layer")) return "media";
        if (element.classList.contains("shape-layer")) return "box";
        if (element.classList.contains("editor-layer")) return "";
        if (element.matches("[data-editable-media]")) return "media";
        if (element.matches("[data-editable-box]")) return "box";
        if (element.matches("[data-editable]")) return "text";
        return "";
      }

      inferEditorKind(element, options = {}) {
        const onlyBoxes = options.onlyBoxes === true;
        const includeBoxes = options.includeBoxes !== false;
        if (!onlyBoxes && this.isSvgTextCandidate(element)) return "text";
        if (!onlyBoxes && (element.matches(this.mediaSelector()) || this.isBackgroundMediaCandidate(element) || this.isMediaWrapperCandidate(element))) return "media";
        if (!onlyBoxes && this.isTextCandidate(element)) return "text";
        if (includeBoxes && this.isVisualBoxCandidate(element)) return "box";
        return "";
      }

      mediaSelector() {
        return "img, picture, video, canvas, svg, iframe, object, embed";
      }

      isTextCandidate(element) {
        if (this.isSvgTextCandidate(element)) return true;
        if (!this.hasVisibleText(element)) return false;
        const rect = this.elementClientRect(element);
        if (rect.width < 2 || rect.height < 2) return false;
        if (element.querySelector(this.mediaSelector())) return false;
        const textContainerTags = "h1,h2,h3,h4,h5,h6,p,li,blockquote,figcaption,caption,td,th,button,a,label";
        if (element.matches(textContainerTags)) return !this.hasNestedTextContainerChild(element);
        if (this.isInlineTextChild(element)) return !this.hasReadableTextAncestor(element) && this.isVisuallyObviousTextBlock(element, rect);
        return this.isVisuallyObviousTextBlock(element, rect);
      }

      hasVisibleText(element) {
        return Boolean(element.textContent && element.textContent.replace(/\s+/g, "").length);
      }

      hasDirectText(element) {
        return Array.from(element.childNodes).some((node) => node.nodeType === Node.TEXT_NODE && node.textContent.trim());
      }

      hasTextBlockChild(element) {
        return Array.from(element.children).some((child) => {
          if (this.isInlineTextChild(child)) return false;
          return this.hasVisibleText(child);
        });
      }

      hasNestedTextContainerChild(element) {
        return Array.from(element.children).some((child) => {
          if (this.isInlineTextChild(child)) return false;
          if (child.matches?.("h1,h2,h3,h4,h5,h6,p,li,blockquote,figcaption,caption,td,th,button,a,label,[data-editor-kind='text'],[data-editable]")) return true;
          return false;
        });
      }

      isInlineTextChild(element) {
        if (element.matches("span,small,strong,em,b,i,code,mark,sup,sub,u,s,time,var,kbd,abbr,cite,q")) return true;
        const display = getComputedStyle(element).display;
        return display.startsWith("inline");
      }

      hasReadableTextAncestor(element) {
        const ancestor = element.parentElement?.closest("h1,h2,h3,h4,h5,h6,p,li,blockquote,figcaption,caption,td,th,button,a,label,[data-editor-kind='text'],[data-editable]");
        return Boolean(ancestor && this.stage.contains(ancestor) && this.closestSlide(ancestor) === this.closestSlide(element));
      }

      isVisuallyObviousTextBlock(element, rect = this.elementClientRect(element)) {
        if (element.matches("main, article, nav, header, footer, form, ul, ol, table, tbody, thead, tr, section, .slide")) return false;
        if (!this.hasDirectText(element) && !this.hasOnlyInlineTextChildren(element)) return false;
        if (this.hasNestedTextContainerChild(element)) return false;
        if (this.isBroadLayoutContainer(element)) return false;
        const style = getComputedStyle(element);
        const fontSize = Number.parseFloat(style.fontSize) || 0;
        const display = style.display;
        const singlePurpose = this.hasOnlyInlineTextChildren(element);
        const compactTextBlock = rect.width <= window.innerWidth * 0.92 && rect.height <= window.innerHeight * 0.45;
        const textLength = (element.textContent || "").replace(/\s+/g, "").length;
        const text = (element.textContent || "").replace(/\s+/g, " ").trim();
        const prominentText = fontSize >= 18 || rect.height >= 34 || (fontSize >= 14 && textLength <= 120);
        const shortLabel = this.isShortLabelTextCandidate(element, rect, style, text);
        return singlePurpose && compactTextBlock && (prominentText || shortLabel) && !["grid", "table", "contents"].includes(display);
      }

      isShortLabelTextCandidate(element, rect, style, text) {
        if (!text || text.length > 96) return false;
        if (rect.width < 18 || rect.height < 8) return false;
        if (rect.height > Math.max(34, window.innerHeight * 0.08)) return false;
        const fontSize = Number.parseFloat(style.fontSize) || 0;
        if (fontSize < 9) return false;
        const letterSpacing = Number.parseFloat(style.letterSpacing) || 0;
        const words = text.match(/[A-Za-z]{2,}/g) || [];
        const uppercaseWords = words.filter((word) => word === word.toUpperCase());
        const uppercaseRatio = words.length ? uppercaseWords.length / words.length : 0;
        const hasCjk = /[\u3400-\u9fff]/.test(text);
        const hasLabelSeparator = /[·•|/:[\]（）()_-]/.test(text);
        const classHint = /\b(t-cat|t-meta|label|caption|eyebrow|kicker|row-lbl|row-val|unit|lbl|note)\b/i.test(element.className || "");
        return letterSpacing >= 0.8 || uppercaseRatio >= 0.5 || (hasCjk && words.length > 0) || hasLabelSeparator || classHint;
      }

      hasOnlyInlineTextChildren(element) {
        return Array.from(element.children).every((child) => this.isInlineTextChild(child) || !this.hasVisibleText(child));
      }

      isVisualBoxCandidate(element) {
        if (this.isSvgGraphicCandidate(element)) return true;
        if (this.hasReadableTextAncestor(element) && this.hasVisibleText(element) && !element.querySelector(this.mediaSelector())) return false;
        if (this.hasNestedTextContainerChild(element) && !element.querySelector(this.mediaSelector())) return false;
        const rect = this.elementClientRect(element);
        if (rect.width > 1700 && rect.height > 850) return false;
        if (element.matches("main, article, nav, header, footer, form, ul, ol, table, tbody, thead, tr, section.slide")) return false;
        if (this.isBroadLayoutContainer(element)) return false;
        if (this.hasCompositeEditableChildren(element)) return false;
        const style = getComputedStyle(element);
        const borderWidth = ["Top", "Right", "Bottom", "Left"].some((side) => Number.parseFloat(style[`border${side}Width`]) > 0);
        const hasBackground = style.backgroundImage !== "none" || !["rgba(0, 0, 0, 0)", "transparent"].includes(style.backgroundColor);
        const hasShape = style.clipPath !== "none" || style.boxShadow !== "none";
        const hasMedia = Boolean(element.querySelector(this.mediaSelector()));
        const hasPaint = borderWidth || hasBackground || hasShape || hasMedia;
        if (!this.hasEditableBoxSize(rect, hasPaint)) return false;
        return hasPaint;
      }

      hasEditableBoxSize(rect, hasPaint) {
        if (!hasPaint) return false;
        if (rect.width >= 24 && rect.height >= 18) return true;
        const dotLike = rect.width >= 4 && rect.height >= 4;
        const lineLike = (rect.width >= 16 && rect.height >= 1) || (rect.height >= 16 && rect.width >= 1);
        return dotLike || lineLike;
      }

      isSmallEditableElement(element) {
        const rect = this.elementClientRect(element);
        if (!rect.width && !rect.height) return false;
        return rect.width < 28 || rect.height < 28;
      }

      isSvgElement(element) {
        return typeof SVGElement !== "undefined" && element instanceof SVGElement;
      }

      svgTagName(element) {
        return element?.tagName ? element.tagName.toLowerCase() : "";
      }

      isSvgDefinitionElement(element) {
        if (!this.isSvgElement(element)) return false;
        const tag = this.svgTagName(element);
        return [
          "defs",
          "clippath",
          "mask",
          "pattern",
          "lineargradient",
          "radialgradient",
          "stop",
          "filter",
          "fegaussianblur",
          "fecolormatrix",
          "feblend",
          "feoffset",
          "feflood",
          "femerge",
          "femergenode",
          "metadata",
          "title",
          "desc",
          "style",
          "script"
        ].includes(tag);
      }

      isSvgTextCandidate(element) {
        if (!this.isSvgElement(element)) return false;
        const tag = this.svgTagName(element);
        if (!["text", "tspan"].includes(tag)) return false;
        if (!this.hasVisibleText(element)) return false;
        return this.hasVisibleSvgPaint(element);
      }

      isSvgGraphicCandidate(element) {
        if (!this.isSvgElement(element)) return false;
        const tag = this.svgTagName(element);
        if (tag === "svg" || this.isSvgDefinitionElement(element)) return false;
        if (!["path", "rect", "circle", "ellipse", "line", "polyline", "polygon", "use"].includes(tag)) return false;
        if (!this.hasVisibleSvgPaint(element)) return false;
        const rect = this.elementClientRect(element);
        const paintedLine = (rect.width >= 2 && rect.height >= 0.5) || (rect.height >= 2 && rect.width >= 0.5);
        const paintedDot = rect.width >= 2 && rect.height >= 2;
        return paintedLine || paintedDot;
      }

      hasVisibleSvgPaint(element) {
        const style = getComputedStyle(element);
        if (style.display === "none" || style.visibility === "hidden" || Number.parseFloat(style.opacity || "1") === 0) return false;
        const fill = element.getAttribute("fill") || style.fill;
        const stroke = element.getAttribute("stroke") || style.stroke;
        const tag = this.svgTagName(element);
        const hasFill = this.isVisiblePaint(fill);
        const hasStroke = this.isVisiblePaint(stroke);
        if (tag === "line") return hasStroke;
        return hasFill || hasStroke || this.svgTagName(element) === "text" || this.svgTagName(element) === "tspan";
      }

      elementClientRect(element) {
        const rect = element.getBoundingClientRect();
        if ((rect.width > 0 && rect.height > 0) || !this.isSvgElement(element) || this.svgTagName(element) === "svg") return rect;
        const svg = element.ownerSVGElement;
        if (!svg || typeof element.getBBox !== "function") return rect;
        try {
          const box = element.getBBox();
          const svgRect = svg.getBoundingClientRect();
          const viewBox = svg.viewBox && svg.viewBox.baseVal;
          const scaleX = viewBox && viewBox.width ? svgRect.width / viewBox.width : 1;
          const scaleY = viewBox && viewBox.height ? svgRect.height / viewBox.height : 1;
          const computed = getComputedStyle(element);
          const stroke = Number.parseFloat(computed.strokeWidth || element.getAttribute("stroke-width") || "0") || 0;
          const rawWidth = Math.max(0, box.width * scaleX);
          const rawHeight = Math.max(0, box.height * scaleY);
          const width = Math.max(rect.width, rawWidth, stroke * scaleX);
          const height = Math.max(rect.height, rawHeight, stroke * scaleY);
          const left = svgRect.left + (box.x - (viewBox?.x || 0)) * scaleX - Math.max(0, width - rawWidth) / 2;
          const top = svgRect.top + (box.y - (viewBox?.y || 0)) * scaleY - Math.max(0, height - rawHeight) / 2;
          return {
            x: left,
            y: top,
            left,
            top,
            width,
            height,
            right: left + width,
            bottom: top + height
          };
        } catch (error) {
          return rect;
        }
      }

      distanceToRect(clientX, clientY, rect) {
        const dx = clientX < rect.left ? rect.left - clientX : clientX > rect.right ? clientX - rect.right : 0;
        const dy = clientY < rect.top ? rect.top - clientY : clientY > rect.bottom ? clientY - rect.bottom : 0;
        return Math.hypot(dx, dy);
      }

      hitSlopForRect(rect) {
        const minSide = Math.min(rect.width, rect.height);
        const maxSide = Math.max(rect.width, rect.height);
        if (minSide <= 10 || maxSide <= 28) return 16;
        if (minSide <= 22) return 10;
        return 0;
      }

      pickNearbyEditableTarget(event) {
        const active = this.activeSlide();
        if (!active) return null;
        const slideRect = active.getBoundingClientRect();
        if (
          event.clientX < slideRect.left ||
          event.clientX > slideRect.right ||
          event.clientY < slideRect.top ||
          event.clientY > slideRect.bottom
        ) {
          return null;
        }
        let best = null;
        this.getEditableElements().forEach((candidate, index) => {
          if (this.closestSlide(candidate) !== active) return;
          if (this.isEditorUiElement(candidate)) return;
          const rect = this.elementClientRect(candidate);
          if (rect.width <= 0 && rect.height <= 0) return;
          const slop = this.hitSlopForRect(rect);
          if (!slop) return;
          const expanded = {
            left: rect.left - slop,
            right: rect.right + slop,
            top: rect.top - slop,
            bottom: rect.bottom + slop
          };
          if (
            event.clientX < expanded.left ||
            event.clientX > expanded.right ||
            event.clientY < expanded.top ||
            event.clientY > expanded.bottom
          ) {
            return;
          }
          const distance = this.distanceToRect(event.clientX, event.clientY, rect);
          const area = Math.max(1, rect.width * rect.height);
          const score = distance + Math.min(12, area / 800) - index * 0.0001;
          if (!best || score < best.score) best = { candidate, score };
        });
        return best ? best.candidate : null;
      }

      isDraggableEditable(element) {
        return Boolean(
          element &&
          (element.classList.contains("editor-layer") ||
            element.matches("[data-editable-media], [data-editable-box], [data-editor-kind='media'], [data-editor-kind='box']"))
        );
      }

      hasCssBackgroundImage(element) {
        const style = getComputedStyle(element);
        return style.backgroundImage && style.backgroundImage !== "none";
      }

      isBackgroundMediaCandidate(element) {
        if (!this.hasCssBackgroundImage(element)) return false;
        const rect = this.elementClientRect(element);
        if (rect.width < 96 || rect.height < 72) return false;
        if (element.matches("main, article, nav, header, footer, section.slide")) return false;
        return !this.isBroadLayoutContainer(element);
      }

      isMediaWrapperCandidate(element) {
        if (element.matches("main, article, nav, header, footer, ul, ol, table, section.slide")) return false;
        const rect = this.elementClientRect(element);
        if (rect.width < 96 || rect.height < 72) return false;
        if (rect.width > 1700 && rect.height > 850) return false;
        if (this.isBroadLayoutContainer(element)) return false;
        const media = Array.from(element.querySelectorAll(this.mediaSelector())).filter((node) => !this.shouldIgnoreEditorCandidate(node));
        if (media.length !== 1) return false;
        if (this.hasDirectText(element)) return false;
        return this.boundsMostlyMatch(element, media[0]);
      }

      boundsMostlyMatch(container, child) {
        const outer = this.elementClientRect(container);
        const inner = this.elementClientRect(child);
        if (outer.width <= 0 || outer.height <= 0 || inner.width <= 0 || inner.height <= 0) return false;
        const areaRatio = (inner.width * inner.height) / (outer.width * outer.height);
        if (areaRatio < 0.55) return false;
        const slackX = Math.max(24, outer.width * 0.2);
        const slackY = Math.max(24, outer.height * 0.2);
        return (
          Math.abs(inner.left - outer.left) <= slackX &&
          Math.abs(inner.top - outer.top) <= slackY &&
          Math.abs(inner.right - outer.right) <= slackX &&
          Math.abs(inner.bottom - outer.bottom) <= slackY
        );
      }

      hasCompositeEditableChildren(element) {
        const rect = this.elementClientRect(element);
        const children = Array.from(element.querySelectorAll("[data-editor-kind]")).filter((child) => {
          if (child === element || this.closestSlide(child) !== this.closestSlide(element)) return false;
          return this.isSubstantialDescendant(child, rect);
        });
        if (children.length > 1) return true;
        return children.length === 1 && this.isLayoutOnlyContainer(element);
      }

      pruneCompositeAutoContainers() {
        this.stage.querySelectorAll("[data-editor-auto='true'][data-editor-kind]").forEach((element) => {
          if (!this.hasCompositeEditableChildren(element)) return;
          delete element.dataset.editorAuto;
          delete element.dataset.editorKind;
          delete element.dataset.editorSmall;
        });
      }

      isSubstantialDescendant(child, parentRect) {
        const rect = this.elementClientRect(child);
        if (rect.width < 18 || rect.height < 14) return false;
        const parentArea = Math.max(1, parentRect.width * parentRect.height);
        const childArea = rect.width * rect.height;
        if (childArea / parentArea > 0.88) return false;
        return true;
      }

      isLayoutOnlyContainer(element) {
        const style = getComputedStyle(element);
        const hasTransparentBackground = style.backgroundImage === "none" && ["rgba(0, 0, 0, 0)", "transparent"].includes(style.backgroundColor);
        const hasPlainLine = style.boxShadow === "none" && style.clipPath === "none";
        if (!hasTransparentBackground || !hasPlainLine) return false;
        const borderWidth = ["Top", "Right", "Bottom", "Left"].reduce((total, side) => total + (Number.parseFloat(style[`border${side}Width`]) || 0), 0);
        return ["block", "flex", "grid"].includes(style.display) && borderWidth <= 4;
      }

      isBroadLayoutContainer(element) {
        const style = getComputedStyle(element);
        if (!["grid", "flex"].includes(style.display)) return false;
        const substantialChildren = Array.from(element.children).filter((child) => {
          const rect = this.elementClientRect(child);
          return rect.width >= 36 && rect.height >= 24 && this.hasVisibleText(child);
        });
        return substantialChildren.length > 2;
      }

      prepareEditableIds() {
        this.getEditableElements().forEach((element, index) => {
          if (!element.dataset.editId) element.dataset.editId = `edit-${index}`;
        });
      }

      bindControls() {
        this.controls.help.addEventListener("click", () => this.openHelp());
        this.controls.helpClose.addEventListener("click", () => this.closeHelp());
        this.controls.helpModal.addEventListener("click", (event) => {
          if (event.target === this.controls.helpModal) this.closeHelp();
        });
        this.controls.aiExportHelp.addEventListener("click", () => this.openAiExportHelp());
        this.controls.aiExportHelpClose.addEventListener("click", () => this.closeAiExportHelp());
        this.controls.aiExportHelpModal.addEventListener("click", (event) => {
          if (event.target === this.controls.aiExportHelpModal) this.closeAiExportHelp();
        });
        this.controls.resetHelp.addEventListener("click", () => this.openResetHelp());
        this.controls.resetHelpClose.addEventListener("click", () => this.closeResetHelp());
        this.controls.resetHelpModal.addEventListener("click", (event) => {
          if (event.target === this.controls.resetHelpModal) this.closeResetHelp();
        });
        this.controls.confirmClose.addEventListener("click", () => this.closeConfirm());
        this.controls.confirmCancel.addEventListener("click", () => this.closeConfirm());
        this.controls.confirmModal.addEventListener("click", (event) => {
          if (event.target === this.controls.confirmModal) this.closeConfirm();
        });
        this.controls.confirmOk.addEventListener("click", () => this.runConfirmedAction());
        this.toggle.addEventListener("click", () => this.toggleEditMode());
        this.hotzone.addEventListener("mouseenter", () => this.showButtons());
        this.hotzone.addEventListener("mouseleave", () => this.scheduleHide());
        this.hotzone.addEventListener("click", () => this.toggleEditMode());
        this.toggle.addEventListener("mouseenter", () => this.showButtons());
        this.toggle.addEventListener("mouseleave", () => this.scheduleHide());

        this.controls.undo.addEventListener("click", () => this.undo());
        this.controls.redo.addEventListener("click", () => this.redo());
        this.controls.formatBrush.addEventListener("click", () => this.toggleFormatBrush());
        this.controls.addText.addEventListener("click", () => this.addText());
        this.controls.addImage.addEventListener("click", () => {
          this.openImagePicker();
        });
        this.controls.imagePick.addEventListener("click", () => this.openImagePicker());
        this.controls.addShape.addEventListener("click", () => this.toggleShapeMenu());
        this.controls.shapeMenu.querySelectorAll("[data-shape-choice]").forEach((button) => {
          button.addEventListener("click", () => {
            this.addShape(button.dataset.shapeChoice || "rect");
            this.closeShapeMenu();
          });
        });
        this.controls.aiExport.addEventListener("click", () => this.exportForAi());
        this.controls.export.addEventListener("click", () => this.openExportModal());
        this.controls.exportClose.addEventListener("click", () => this.closeExportModal());
        this.controls.exportCancel.addEventListener("click", () => this.closeExportModal());
        this.controls.exportModal.addEventListener("click", (event) => {
          if (event.target === this.controls.exportModal) this.closeExportModal();
        });
        this.controls.exportCurrent.addEventListener("click", () => this.selectExportPages("current"));
        this.controls.exportAll.addEventListener("click", () => this.selectExportPages("all"));
        this.controls.exportNone.addEventListener("click", () => this.selectExportPages("none"));
        this.controls.exportStart.addEventListener("click", () => this.exportSelectedPages());
        this.controls.saveComment.addEventListener("click", () => this.saveCommentForSelected());
        this.controls.clearComment.addEventListener("click", () => this.clearCommentForSelected());
        this.controls.save.addEventListener("click", () => this.exportHtml());
        this.controls.exit.addEventListener("click", () => this.toggleEditMode(false));
        this.controls.reset.addEventListener("click", () => this.confirmResetDraft());
        this.controls.image.addEventListener("change", (event) => this.handleFileInput(event));
        this.controls.delete.addEventListener("click", () => this.confirmDeleteSelected());
        this.controls.bringForward.addEventListener("click", () => this.bumpZIndex(1));
        this.controls.sendBackward.addEventListener("click", () => this.bumpZIndex(-1));
        this.controls.previewMotion.addEventListener("click", () => this.previewMotion());
        this.controls.previewSlideMotion.addEventListener("click", () => this.replayActiveSlideMotion());
        this.controls.restoreMotion.addEventListener("click", () => this.restoreOriginalMotion(this.selected, true));
        [this.controls.formatBrush, this.controls.fontFamily, this.controls.fontSize, this.controls.fontWeight, this.controls.fontStyle, this.controls.colorButton, this.controls.colorEyedropper, this.controls.bg, this.controls.bgEyedropper, this.controls.opacity].filter(Boolean).forEach((control) => {
          control.addEventListener("pointerdown", () => this.captureTextSelection());
          control.addEventListener("focus", () => this.captureTextSelection());
        });
        ["select", "keyup", "pointerup", "mouseup"].forEach((type) => {
          this.controls.text.addEventListener(type, () => this.captureTextSelection());
        });
        this.controls.colorButton.addEventListener("pointerdown", (event) => {
          if (this.controls.colorButton.disabled) return;
          event.preventDefault();
          event.stopPropagation();
          this.captureTextSelection();
        });
        this.controls.colorButton.addEventListener("click", (event) => {
          event.preventDefault();
          event.stopPropagation();
          if (this.controls.colorButton.disabled) return;
          this.captureTextSelection();
          this.toggleTextColorPalette();
        });
        this.controls.bg.addEventListener("pointerdown", (event) => {
          if (this.controls.bg.disabled) return;
          event.preventDefault();
          event.stopPropagation();
          this.captureTextSelection();
        });
        this.controls.bg.addEventListener("click", (event) => {
          event.preventDefault();
          event.stopPropagation();
          if (this.controls.bg.disabled) return;
          this.captureTextSelection();
          this.toggleBackgroundPalette();
        });
        this.controls.colorEyedropper.addEventListener("click", (event) => {
          event.preventDefault();
          event.stopPropagation();
          this.pickTextColor();
        });
        this.controls.bgEyedropper.addEventListener("click", (event) => {
          event.preventDefault();
          event.stopPropagation();
          this.pickBackgroundColor();
        });
        this.controls.fontFamily.addEventListener("change", () => {
          const onlineFontId = this.controls.fontFamily.selectedOptions?.[0]?.dataset?.onlineFont;
          if (onlineFontId) {
            this.ensureOnlineFont(onlineFontId).catch((error) => {
              this.controls.fontImportStatus.textContent = error.message;
              this.toastMessage(error.message);
            });
          }
        });
        this.controls.fontImport.addEventListener("click", () => this.controls.fontImportInput.click());
        this.controls.fontImportInput.addEventListener("change", (event) => this.handleFontImport(event));
        const liveInspectorControls = new Set(["text", "fontSize", "opacity", "x", "y", "width", "height", "order", "delay", "duration"]);
        ["text", "shape", "fontFamily", "fontSize", "bg", "opacity", "x", "y", "width", "height", "anim", "order", "delay", "duration"].forEach((name) => {
          const control = this.controls[name];
          if (liveInspectorControls.has(name)) {
            control.addEventListener("input", () => this.applyInspectorValue(name, { recordHistory: false, refreshInspector: false, live: true }));
          }
          control.addEventListener("change", () => this.applyInspectorValue(name, { recordHistory: true }));
        });
        this.controls.fontWeight.addEventListener("click", () => this.toggleTextStyle("font-weight"));
        this.controls.fontStyle.addEventListener("click", () => this.toggleTextStyle("font-style"));

        this.addGlobalListener(document, "wheel", (event) => this.stopEditorUiEventLeak(event), { capture: true, passive: false });
        this.addGlobalListener(document, "touchstart", (event) => this.stopEditorUiEventLeak(event), { capture: true, passive: true });
        this.addGlobalListener(document, "touchmove", (event) => this.stopEditorUiEventLeak(event), { capture: true, passive: true });
        this.addGlobalListener(document, "touchend", (event) => this.stopEditorUiEventLeak(event), true);
        this.addGlobalListener(document, "keydown", (event) => this.stopEditorUiShortcutLeak(event), true);
        this.addGlobalListener(document, "keydown", (event) => this.handleKeydown(event));
        this.addGlobalListener(document, "selectionchange", () => this.captureTextSelection());
        this.addGlobalListener(document, "slidechange", (event) => this.handleSlideChange(event));
        this.addGlobalListener(document, "click", (event) => {
          if (!event.target.closest(".shape-picker-wrap") && !event.target.closest("#shapeMenu")) this.closeShapeMenu();
          if (!event.target.closest("#colorButton") && !event.target.closest("#colorPalette")) this.closeTextColorPalette();
          if (!event.target.closest("#bgInput") && !event.target.closest("#bgPalette")) this.closeBackgroundPalette();
        });
        this.addGlobalListener(document, "pointerdown", (event) => this.handleDocumentPointerDown(event), true);
        this.addGlobalListener(document, "pointermove", (event) => this.handlePointerMove(event));
        this.addGlobalListener(document, "pointerup", () => this.finishPointerAction());
        this.addGlobalListener(document, "pointercancel", () => this.finishPointerAction());
        this.addGlobalListener(window, "blur", () => this.finishPointerAction());

        this.frameMove.addEventListener("pointerdown", (event) => this.startPointerAction(event, "move"));
        this.frameDelete.addEventListener("pointerdown", (event) => {
          event.preventDefault();
          event.stopPropagation();
        });
        this.frameDelete.addEventListener("click", (event) => {
          event.preventDefault();
          event.stopPropagation();
          this.confirmDeleteSelected();
        });
        this.frameResize.addEventListener("pointerdown", (event) => this.startPointerAction(event, "resize"));

        this.addGlobalListener(window, "dragenter", (event) => this.handleDragEnter(event));
        this.addGlobalListener(window, "dragover", (event) => this.handleDrag(event));
        this.controls.dropZone.addEventListener("dragenter", (event) => this.handleDrag(event));
        this.controls.dropZone.addEventListener("dragover", (event) => this.handleDrag(event));
        this.addGlobalListener(window, "dragleave", (event) => this.clearDrag(event));
        this.addGlobalListener(window, "drop", (event) => this.handleDrop(event));
        this.addGlobalListener(window, "resize", () => {
          this.applyEditorLayout();
          this.updateFrame();
          if (!this.controls.shapeMenu.hidden) this.positionShapeMenu();
          if (!this.controls.colorPalette.hidden) this.positionTextColorPalette();
          if (!this.controls.bgPalette.hidden) this.positionBackgroundPalette();
        });
      }

      addGlobalListener(target, type, handler, options) {
        this.globalListeners.push({ target, type, handler, options });
        if (this.globalListenerController) {
          const listenerOptions = typeof options === "boolean" ? { capture: options } : { ...(options || {}) };
          listenerOptions.signal = this.globalListenerController.signal;
          target.addEventListener(type, handler, listenerOptions);
          return;
        }
        target.addEventListener(type, handler, options);
      }

      destroy() {
        this.globalListenerController?.abort();
        this.globalListeners.forEach(({ target, type, handler, options }) => {
          target.removeEventListener(type, handler, options);
        });
        this.globalListeners = [];
        this.clearTextSelection();
        this.layoutRefreshTimers.forEach((timer) => window.clearTimeout(timer));
        this.layoutRefreshTimers = [];
        this.stopMotionFrameTracking();
        window.clearTimeout(this.motionPreviewTimer);
        window.clearTimeout(this.hideTimeout);
        window.clearTimeout(this.toastTimer);
        window.clearTimeout(this.textFocusTimer);
        Object.values(this.colorPickers || {}).forEach((picker) => picker?.destroy?.());
        this.colorPickers = {};
        if (window.editor === this) delete window.editor;
      }

      bindEditableEvents() {
        this.getEditableElements().forEach((element) => this.bindElement(element));
      }

      refreshEditableElements() {
        this.prepareEditableElements();
        this.prepareEditableIds();
        this.bindEditableEvents();
      }

      bindElement(element) {
        if (element.dataset.editorBound) return;
        element.dataset.editorBound = "true";
        element.addEventListener("pointerdown", (event) => {
          if (!this.isActive) return;
          const target = this.getEditableTarget(event.target) || element;
          if (this.formatBrush) {
            if (this.isTextElement(target)) {
              this.select(target);
              return;
            }
            event.preventDefault();
            event.stopPropagation();
            this.applyFormatBrush(target);
            return;
          }
          if (this.commentMode) {
            event.preventDefault();
            event.stopPropagation();
            this.selectForComment(target);
            return;
          }
          if (this.isTextElement(target)) {
            this.select(target);
            this.clearTextSelection();
            return;
          }
          const canDragBody = this.isDraggableEditable(target);
          if (!canDragBody) return;
          event.preventDefault();
          event.stopPropagation();
          this.select(target);
          this.startPointerAction(event, "move");
        });
        element.addEventListener("click", (event) => {
          if (!this.isActive) return;
          const target = this.getEditableTarget(event.target) || element;
          event.stopPropagation();
          if (this.formatBrush) {
            event.preventDefault();
            this.applyFormatBrush(target);
            return;
          }
          if (this.commentMode) {
            event.preventDefault();
            this.selectForComment(target);
            return;
          }
          this.select(target);
          if (this.isTextElement(target)) {
            this.captureTextSelection();
            return;
          }
          event.preventDefault();
        });
        element.addEventListener("dblclick", (event) => {
          if (!this.isActive) return;
          const target = this.getEditableTarget(event.target) || element;
          event.stopPropagation();
          if (this.formatBrush) {
            event.preventDefault();
            this.applyFormatBrush(target);
            return;
          }
          if (this.commentMode) {
            event.preventDefault();
            this.selectForComment(target);
            return;
          }
          this.select(target);
          if (this.isTextElement(target)) {
            this.focusTextLayer(target);
          }
        });
        element.addEventListener("input", () => {
          if (!this.isActive) return;
          this.saveDraft(false);
          this.updateInspector();
          this.updateFrame();
        });
      }

      renderSlideRail() {
        this.controls.slideRail.innerHTML = "";
        this.presentation.slides.forEach((slide, index) => {
          const button = document.createElement("button");
          button.type = "button";
          button.className = `slide-chip${index === this.presentation.currentSlide ? " active" : ""}`;
          const title = slide.dataset.title || slide.getAttribute("aria-label") || `Slide ${index + 1}`;
          const number = document.createElement("span");
          number.className = "slide-chip-num";
          number.textContent = String(index + 1).padStart(2, "0");
          const label = document.createElement("span");
          label.className = "slide-chip-title";
          label.textContent = title;
          button.append(number, label);
          button.addEventListener("click", () => {
            this.presentation.showSlide(index);
            this.renderSlideRail();
            this.clearSelection();
          });
          this.controls.slideRail.appendChild(button);
        });
      }

      handleKeydown(event) {
        const formTarget = this.isFormTarget(event.target);
        if (event.key === "Escape" && !this.controls.exportModal.hidden) {
          event.preventDefault();
          event.stopPropagation();
          this.closeExportModal();
          return;
        }
        if (event.key === "Escape" && !this.controls.confirmModal.hidden) {
          event.preventDefault();
          event.stopPropagation();
          this.closeConfirm();
          return;
        }
        if (event.key === "Escape" && !this.controls.resetHelpModal.hidden) {
          event.preventDefault();
          event.stopPropagation();
          this.closeResetHelp();
          return;
        }
        if (event.key === "Escape" && !this.controls.aiExportHelpModal.hidden) {
          event.preventDefault();
          event.stopPropagation();
          this.closeAiExportHelp();
          return;
        }
        if (event.key === "Escape" && !this.controls.helpModal.hidden) {
          event.preventDefault();
          event.stopPropagation();
          this.closeHelp();
          return;
        }
        if (event.key === "Escape" && !this.controls.shapeMenu.hidden) {
          event.preventDefault();
          event.stopPropagation();
          this.closeShapeMenu();
          return;
        }
        if (event.key === "Escape" && this.formatBrush) {
          event.preventDefault();
          event.stopPropagation();
          this.cancelFormatBrush();
          return;
        }
        if ((event.metaKey || event.ctrlKey) && event.key.toLowerCase() === "z" && this.isActive && event.shiftKey && !formTarget) {
          event.preventDefault();
          event.stopPropagation();
          this.redo();
          return;
        }
        if ((event.ctrlKey && !event.metaKey) && event.key.toLowerCase() === "y" && this.isActive && !formTarget) {
          event.preventDefault();
          event.stopPropagation();
          this.redo();
          return;
        }
        if ((event.metaKey || event.ctrlKey) && event.key.toLowerCase() === "z" && this.isActive && !event.shiftKey && !formTarget) {
          event.preventDefault();
          event.stopPropagation();
          this.undo();
          return;
        }
        if ((event.key === "e" || event.key === "E") && !formTarget) {
          event.preventDefault();
          event.stopPropagation();
          this.toggleEditMode();
        }
        if ((event.metaKey || event.ctrlKey) && event.key.toLowerCase() === "s") {
          event.preventDefault();
          event.stopPropagation();
          this.exportHtml();
        }
        if (!this.isActive || formTarget) return;
        if (event.key === "Delete" || event.key === "Backspace") {
          if (this.validTextSelectionRange(this.selected)) {
            event.preventDefault();
            event.stopPropagation();
            return;
          }
          event.preventDefault();
          event.stopPropagation();
          this.confirmDeleteSelected();
        }
        if (this.selected && ["ArrowUp", "ArrowDown", "ArrowLeft", "ArrowRight"].includes(event.key)) {
          event.preventDefault();
          event.stopPropagation();
          const step = event.shiftKey ? 10 : 1;
          this.clearElementMotionState(this.selected);
          const box = this.getStableStageBox(this.selected);
          const dx = event.key === "ArrowLeft" ? -step : event.key === "ArrowRight" ? step : 0;
          const dy = event.key === "ArrowUp" ? -step : event.key === "ArrowDown" ? step : 0;
          this.setStagePosition(this.selected, box.x + dx, box.y + dy, box.width, box.height);
          this.updateInspector();
          this.saveDraft(false, true);
        }
        if (this.isHostDeckShortcut(event)) {
          event.preventDefault();
          event.stopPropagation();
        }
      }

      openHelp() {
        this.controls.helpModal.hidden = false;
      }

      closeHelp() {
        this.controls.helpModal.hidden = true;
      }

      openAiExportHelp() {
        this.controls.aiExportHelpModal.hidden = false;
      }

      closeAiExportHelp() {
        this.controls.aiExportHelpModal.hidden = true;
      }

      openResetHelp() {
        this.controls.resetHelpModal.hidden = false;
      }

      closeResetHelp() {
        this.controls.resetHelpModal.hidden = true;
      }

      openConfirm({ title, message, okText, action }) {
        this.pendingConfirm = action;
        this.controls.confirmTitle.textContent = title;
        this.controls.confirmMessage.textContent = message;
        this.controls.confirmOk.textContent = okText;
        this.controls.confirmModal.hidden = false;
        this.controls.confirmCancel.focus({ preventScroll: true });
      }

      closeConfirm() {
        this.pendingConfirm = null;
        this.controls.confirmModal.hidden = true;
      }

      runConfirmedAction() {
        const action = this.pendingConfirm;
        this.closeConfirm();
        if (typeof action === "function") action();
      }

      isFormTarget(target) {
        return target && (["INPUT", "TEXTAREA", "SELECT"].includes(target.tagName) || target.isContentEditable);
      }

      stopEditorUiEventLeak(event) {
        if (!this.isActive || !this.isEditorUiElement(event.target)) return;
        event.stopPropagation();
      }

      isHostDeckShortcut(event) {
        const key = event.key;
        if (["Escape", " ", "Spacebar", "ArrowUp", "ArrowDown", "ArrowLeft", "ArrowRight", "PageUp", "PageDown", "Home", "End"].includes(key)) return true;
        return key?.toLowerCase?.() === "b" && !event.metaKey && !event.ctrlKey && !event.altKey;
      }

      stopEditorUiShortcutLeak(event) {
        if (!this.isActive) return;
        if (!this.isEditorUiElement(event.target)) {
          if (!this.isFormTarget(event.target) && this.isHostDeckShortcut(event)) {
            this.handleKeydown(event);
            event.stopImmediatePropagation();
          }
          return;
        }
        const key = event.key;
        if ((event.metaKey || event.ctrlKey) && key.toLowerCase() === "s") {
          this.handleKeydown(event);
          event.stopImmediatePropagation();
          return;
        }
        const navigationKeys = [
          "Escape",
          " ",
          "Spacebar",
          "ArrowUp",
          "ArrowDown",
          "ArrowLeft",
          "ArrowRight",
          "PageUp",
          "PageDown",
          "Home",
          "End"
        ];
        if (navigationKeys.includes(key) || key === "Backspace" || key === "Delete" || key.length === 1 || event.metaKey || event.ctrlKey || event.altKey) {
          event.stopPropagation();
        }
      }

      showButtons() {
        window.clearTimeout(this.hideTimeout);
        this.toggle.classList.add("show");
      }

      scheduleHide() {
        this.hideTimeout = window.setTimeout(() => {
          if (!this.isActive) {
            this.toggle.classList.remove("show");
          }
        }, 400);
      }

      editorInsets() {
        if (!this.isActive) return zeroInsets();
        const gutter = window.innerWidth <= 960 ? 8 : 12;
        const insets = {
          left: gutter,
          right: gutter,
          top: gutter,
          bottom: gutter
        };
        [
          this.controls.help?.closest(".editor-toolbar"),
          document.querySelector(".editor-slides"),
          document.querySelector(".editor-panel")
        ].forEach((element) => {
          if (!element || element.hidden) return;
          const style = getComputedStyle(element);
          if (style.display === "none" || style.visibility === "hidden") return;
          const rect = element.getBoundingClientRect();
          if (rect.width <= 0 || rect.height <= 0) return;
          const verticalCoverage = rect.height / Math.max(1, window.innerHeight);
          const horizontalCoverage = rect.width / Math.max(1, window.innerWidth);
          if (rect.left <= gutter * 2 && verticalCoverage > 0.45) {
            insets.left = Math.max(insets.left, rect.right + gutter);
          }
          if (window.innerWidth - rect.right <= gutter * 2 && verticalCoverage > 0.45) {
            insets.right = Math.max(insets.right, window.innerWidth - rect.left + gutter);
          }
          if (rect.top <= gutter * 2 && horizontalCoverage > 0.45) {
            insets.top = Math.max(insets.top, rect.bottom + gutter);
          }
          if (window.innerHeight - rect.bottom <= gutter * 2 && horizontalCoverage > 0.45) {
            insets.bottom = Math.max(insets.bottom, window.innerHeight - rect.top + gutter);
          }
        });
        return normalizeInsets(insets);
      }

      applyEditorLayout() {
        this.syncCurrentSlideFromHost();
        this.presentation.setEditorInsets?.(this.editorInsets());
        this.presentation.scaleStage?.();
      }

      syncCurrentSlideFromHost() {
        if (!this.stage || this.stage.getAttribute("data-html-deck-editor-stage") !== "preserve") return;
        this.presentation.slides = stageSlides(this.stage);
        const hostIndex = computeHostCurrentSlide(this.presentation.slides, this.stage);
        const next = hostIndex >= 0 ? hostIndex : this.presentation.currentSlide;
        this.presentation.currentSlide = markEditorCurrentSlide(this.presentation.slides, next);
        syncHostCurrentSlide(this.stage, this.presentation.currentSlide);
        this.revealActiveSlideForEditing(this.presentation.currentSlide);
      }

      revealActiveSlideForEditing(index = this.presentation.currentSlide) {
        if (!this.isActive) return;
        const slide = this.presentation.slides[index];
        if (!slide) return;
        this.stage.querySelectorAll("[data-html-deck-editor-motion-hold]").forEach((node) => {
          node.removeAttribute("data-html-deck-editor-motion-hold");
          node.style.removeProperty("--html-deck-editor-edit-opacity");
        });
        const editableElements = this.getEditableElements().filter((element) => (
          this.closestSlide(element) === slide && (this.isTextElement(element) || element.classList.contains("edit-moved"))
        ));
        const motionTargets = new Set();
        editableElements.forEach((element) => {
          this.motionHoldTargetsFor(element, slide).forEach((node) => motionTargets.add(node));
        });
        motionTargets.forEach((node) => {
          this.holdMotionNodeForEditing(node);
        });
      }

      refreshEditorLayoutSoon() {
        const refresh = () => {
          this.applyEditorLayout();
          this.updateFrame();
        };
        this.layoutRefreshTimers.forEach((timer) => window.clearTimeout(timer));
        this.layoutRefreshTimers = [];
        refresh();
        requestAnimationFrame(refresh);
        this.layoutRefreshTimers.push(window.setTimeout(refresh, 80));
        this.layoutRefreshTimers.push(window.setTimeout(refresh, 220));
      }

      toggleEditMode(force) {
        this.isActive = typeof force === "boolean" ? force : !this.isActive;
        document.body.classList.toggle("editing", this.isActive);
        document.body.classList.toggle("editor-on", this.isActive);
        this.toggle.classList.toggle("active", this.isActive);
        this.showButtons();
        if (this.isActive) {
          this.syncCurrentSlideFromHost();
          this.refreshEditableElements();
          this.revealActiveSlideForEditing(this.presentation.currentSlide);
          this.motionHold = false;
          window.clearTimeout(this.motionPreviewTimer);
          this.motionPreviewTimer = null;
          this.stopMotionFrameTracking();
          const slide = this.activeSlide();
          if (slide) this.clearMotionRunState(slide);
        }
        this.getEditableElements().forEach((element) => {
          element.removeAttribute("contenteditable");
        });
        if (!this.isActive) this.clearTextSelection();
        this.hideDeckResetControl();
        this.attachFrame();
        this.refreshEditorLayoutSoon();
        this.updateFrame();
        if (!this.isActive) {
          this.cancelFormatBrush(false);
          this.toggleCommentMode(false);
          this.hideGuides();
          this.saveDraft(false);
          this.clearSelection();
          this.motionHold = false;
          window.clearTimeout(this.motionPreviewTimer);
          this.motionPreviewTimer = null;
          requestAnimationFrame(() => this.replayActiveSlideMotion(false));
        }
        this.renderSlideRail();
      }

      handleDocumentPointerDown(event) {
        if (!this.isActive) return;
        if (this.isEditorUiElement(event.target)) return;
        const directTarget = this.getEditableTarget(event.target);
        if (directTarget) {
          if (this.formatBrush) {
            if (this.isTextElement(directTarget)) {
              this.select(directTarget);
              return;
            }
            event.preventDefault();
            event.stopPropagation();
            this.applyFormatBrush(directTarget);
            return;
          }
          if (this.commentMode) {
            event.preventDefault();
            event.stopPropagation();
            this.selectForComment(directTarget);
            return;
          }
          this.select(directTarget);
          return;
        }
        const nearbyTarget = this.pickNearbyEditableTarget(event);
        if (nearbyTarget) {
          event.preventDefault();
          event.stopPropagation();
          if (this.formatBrush) {
            this.applyFormatBrush(nearbyTarget);
            return;
          }
          if (this.commentMode) {
            this.selectForComment(nearbyTarget);
            return;
          }
          this.select(nearbyTarget);
          if (this.isDraggableEditable(nearbyTarget)) this.startPointerAction(event, "move");
          return;
        }
        this.clearSelection();
      }

      getEditableTarget(target) {
        let element = target && target.closest("[data-editable], [data-editable-media], [data-editable-box], [data-editor-kind], .editor-layer");
        if (!element || !this.stage.contains(element)) return null;
        if (this.isEditorUiElement(element)) return null;
        element = this.preferExplicitEditableAncestor(element);
        return this.closestSlide(element) ? element : null;
      }

      preferExplicitEditableAncestor(element) {
        if (!element || element.classList.contains("editor-layer")) return element;
        if (element.dataset.editorAuto !== "true") return element;
        const textParent = this.preferredTextContainerAncestor(element);
        if (textParent) return textParent;
        const explicitParent = element.parentElement?.closest("[data-editable], [data-editable-media], [data-editable-box], .editor-layer");
        if (explicitParent && this.stage.contains(explicitParent) && this.closestSlide(explicitParent) === this.closestSlide(element)) {
          return explicitParent;
        }
        const mediaParent = element.parentElement?.closest("[data-editor-auto='true'][data-editor-kind='media']");
        if (
          mediaParent &&
          mediaParent !== element &&
          this.stage.contains(mediaParent) &&
          this.closestSlide(mediaParent) === this.closestSlide(element) &&
          this.isMediaWrapperCandidate(mediaParent)
        ) {
          return mediaParent;
        }
        return element;
      }

      preferredTextContainerAncestor(element) {
        if (!this.isInlineTextChild(element) && element.dataset.editorKind === "text") return null;
        const parent = element.parentElement?.closest("h1,h2,h3,h4,h5,h6,p,li,blockquote,figcaption,caption,td,th,button,a,label,[data-editable],[data-editor-auto='true'][data-editor-kind='text']");
        if (
          parent &&
          parent !== element &&
          this.stage.contains(parent) &&
          this.closestSlide(parent) === this.closestSlide(element) &&
          (parent.matches("[data-editable],[data-editor-kind='text']") || this.isTextCandidate(parent))
        ) {
          return parent;
        }
        return null;
      }

      select(element) {
        if (this.selected === element) {
          this.reconcileStoredStagePosition(element, { mode: "sync" });
          this.updateFrame();
          this.updateCommentPanel();
          return;
        }
        this.clearSelection(false);
        this.selected = element;
        this.reconcileStoredStagePosition(element, { mode: "sync" });
        element.classList.add("editor-selected");
        this.updateFrame();
        this.updateInspector();
      }

      clearSelection(update = true) {
        this.stopMotionFrameTracking();
        if (this.selected) this.selected.classList.remove("editor-selected");
        this.selected = null;
        this.clearTextSelection();
        this.frame.classList.remove("active");
        if (update) this.updateInspector();
      }

      updateInspector() {
        const element = this.selected;
        const motionElement = this.motionTargetFor(element);
        const hasSelection = Boolean(element);
        const canUseImage = hasSelection && this.isImageElement(element);
        const canDelete = this.canDeleteElement(element);
        const textCapable = hasSelection && this.isTextElement(element);
        const shapeCapable = hasSelection && element.classList.contains("shape-layer");

        this.controls.selectionName.textContent = hasSelection ? this.getSelectionLabel(element) : "未选中元素";
        this.controls.text.disabled = !textCapable;
        this.controls.image.disabled = false;
        this.controls.shape.disabled = !shapeCapable;
        this.controls.fontFamily.disabled = !textCapable;
        this.controls.fontSize.disabled = !textCapable;
        this.controls.fontWeight.disabled = !textCapable;
        this.controls.fontStyle.disabled = !textCapable;
        this.controls.colorButton.disabled = !hasSelection;
        this.controls.colorEyedropper.disabled = !hasSelection;
        this.controls.bg.disabled = !hasSelection;
        this.controls.bgEyedropper.disabled = !hasSelection;
        this.controls.opacity.disabled = !hasSelection;
        this.controls.x.disabled = !hasSelection;
        this.controls.y.disabled = !hasSelection;
        this.controls.width.disabled = !hasSelection;
        this.controls.height.disabled = !hasSelection;
        this.controls.bringForward.disabled = !hasSelection;
        this.controls.sendBackward.disabled = !hasSelection;
        this.controls.anim.disabled = !hasSelection;
        this.controls.order.disabled = !hasSelection || !this.usesCustomMotion(motionElement);
        this.controls.delay.disabled = !hasSelection || !this.usesCustomMotion(motionElement);
        this.controls.duration.disabled = !hasSelection || !this.usesCustomMotion(motionElement);
        this.controls.previewMotion.disabled = !hasSelection;
        this.controls.restoreMotion.disabled = !hasSelection || !this.hasStoredOriginalMotion(motionElement);
        this.controls.delete.disabled = !canDelete;
        this.controls.formatBrush.disabled = !hasSelection && !this.formatBrush;
        this.controls.image.disabled = false;
        this.controls.imagePick.disabled = false;
        this.controls.imagePick.textContent = canUseImage ? "替换图片" : "选择图片";
        this.controls.imageName.textContent = canUseImage ? "将替换选中图片" : "未选择图片";
        this.updateCommentPanel();

        if (!hasSelection) {
          this.controls.text.value = "";
          this.controls.image.value = "";
          this.controls.shape.value = "rect";
          ["fontFamily", "fontSize", "opacity", "x", "y", "width", "height", "anim", "order", "delay", "duration"].forEach((name) => {
            this.controls[name].value = "";
          });
          this.updateBackgroundPickerState("");
          this.updateTextColorState("");
          this.updateTextStyleButtons(null);
          this.controls.motionStatus.textContent = "未选中元素";
          return;
        }

        this.reconcileStoredStagePosition(element, { mode: "sync" });
        const computed = window.getComputedStyle(element);
        const box = this.getStableStageBox(element);
        this.controls.text.value = textCapable ? this.getEditableText(element) : "";
        this.controls.shape.value = shapeCapable ? (element.dataset.shape || "rect") : "rect";
        this.updateFontFamilyControls(textCapable ? computed.fontFamily : "");
        this.controls.fontSize.value = Math.round(Number.parseFloat(computed.fontSize)) || "";
        this.updateTextColorState(this.toHex(this.editableTextColor(element, computed)));
        this.updateBackgroundPickerState(this.editableSurfaceColor(element, computed));
        this.controls.opacity.value = Math.round((Number.parseFloat(computed.opacity) || 1) * 100);
        this.updateTextStyleButtons(textCapable ? computed : null);
        this.controls.x.value = Math.round(box.x);
        this.controls.y.value = Math.round(box.y);
        this.controls.width.value = Math.round(box.width);
        this.controls.height.value = Math.round(box.height);
        this.controls.anim.value = this.getMotionSelectValue(motionElement);
        this.controls.order.value = motionElement.dataset.editOrder || "";
        this.controls.delay.value = Number.parseInt(motionElement.dataset.editDelay || "0", 10);
        this.controls.duration.value = Number.parseInt(motionElement.dataset.editDuration || "640", 10);
        this.controls.order.disabled = !this.usesCustomMotion(motionElement);
        this.controls.delay.disabled = !this.usesCustomMotion(motionElement);
        this.controls.duration.disabled = !this.usesCustomMotion(motionElement);
        this.controls.restoreMotion.disabled = !this.hasStoredOriginalMotion(motionElement);
        this.controls.motionStatus.textContent = this.getMotionStatus(motionElement);
        this.controls.image.value = "";
      }

      toggleFormatBrush() {
        if (this.formatBrush) {
          this.cancelFormatBrush();
          return;
        }
        if (!this.selected) {
          this.toastMessage("先选中要复制样式的元素");
          return;
        }
        this.formatBrush = this.captureFormatBrush(this.selected);
        this.setFormatBrushButtonState(true);
        this.toastMessage("已复制样式，点击目标元素应用");
      }

      cancelFormatBrush(showToast = true) {
        if (!this.formatBrush) return;
        this.formatBrush = null;
        this.setFormatBrushButtonState(false);
        if (showToast) this.toastMessage("已取消格式刷");
      }

      setFormatBrushButtonState(active) {
        document.body.classList.toggle("format-brushing", active);
        this.controls.formatBrush.classList.toggle("active", active);
        this.controls.formatBrush.setAttribute("aria-pressed", active ? "true" : "false");
        this.controls.formatBrush.disabled = !active && !this.selected;
      }

      captureFormatBrush(element) {
        this.captureTextSelection({ syncInspector: false });
        const range = this.isTextElement(element) ? this.validTextSelectionRange(element) : null;
        const computed = window.getComputedStyle(element);
        const text = range ? this.captureTextRangeFormat(range, element) : (this.isTextElement(element) ? {
          color: this.editableTextColor(element, computed),
          fontFamily: computed.fontFamily,
          fontSize: computed.fontSize,
          fontStyle: computed.fontStyle,
          fontWeight: computed.fontWeight,
          letterSpacing: computed.letterSpacing,
          lineHeight: computed.lineHeight,
          textAlign: computed.textAlign,
          opacity: computed.opacity,
          backgroundColor: this.editableSurfaceColor(element, computed)
        } : null);
        return {
          text,
          surface: {
            backgroundColor: this.editableSurfaceColor(element, computed),
            borderColor: computed.borderColor,
            borderRadius: computed.borderRadius,
            borderStyle: computed.borderStyle,
            borderWidth: computed.borderWidth,
            boxShadow: computed.boxShadow,
            opacity: computed.opacity
          },
          shape: element.classList.contains("shape-layer") ? (element.dataset.shape || "rect") : ""
        };
      }

      captureTextRangeFormat(range, element) {
        const summary = this.selectedTextStyleSummary(range, element);
        return {
          color: summary.color,
          fontFamily: summary.fontFamilyRaw || summary.fontFamily,
          fontSize: summary.fontSize ? `${summary.fontSize}px` : "",
          fontStyle: summary.fontStyle,
          fontWeight: summary.fontWeight,
          letterSpacing: "",
          lineHeight: "",
          textAlign: "",
          opacity: summary.opacity ? String((Number.parseInt(summary.opacity, 10) || 100) / 100) : "",
          backgroundColor: summary.backgroundColor
        };
      }

      applyFormatBrush(element) {
        if (!element || !this.formatBrush) return;
        const brush = this.formatBrush;
        this.select(element);
        if (brush.text && this.isTextElement(element)) {
          this.captureTextSelection({ syncInspector: false });
          if (this.validTextSelectionRange(element)) {
            if (this.applyTextFormatBrushToSelection(element, brush.text)) {
              this.finishFormatBrush("已应用到文字片段");
              return;
            }
          }
          this.applyTextFormatBrushToElement(element, brush.text);
        }
        const surface = brush.surface || {};
        if (this.isVisiblePaint(surface.backgroundColor)) {
          this.setEditableSurfaceColor(element, surface.backgroundColor);
        } else {
          this.clearEditableSurfaceColor(element);
        }
        ["borderColor", "borderRadius", "borderStyle", "borderWidth", "boxShadow", "opacity"].forEach((property) => {
          const value = surface[property];
          if (value) element.style.setProperty(this.camelToKebab(property), value);
        });
        if (brush.shape && element.classList.contains("shape-layer")) this.applyShape(element, brush.shape);
        this.finishFormatBrush("已应用格式");
      }

      finishFormatBrush(message) {
        this.formatBrush = null;
        this.setFormatBrushButtonState(false);
        this.updateFrame();
        this.updateInspector();
        this.saveDraft(false, true);
        this.toastMessage(message);
      }

      applyTextFormatBrushToSelection(element, text) {
        const applied = this.applyInlineTextStyles(element, this.textFormatEntries(text));
        if (applied) this.syncInlineSelectionInspector();
        return applied;
      }

      applyTextFormatBrushToElement(element, text) {
        this.textFormatEntries(text).forEach(([property, value]) => {
          if (value) element.style.setProperty(property, value);
        });
        if (text.textAlign) element.style.textAlign = text.textAlign;
        if (text.lineHeight) element.style.lineHeight = text.lineHeight;
      }

      textFormatEntries(text) {
        return [
          ["font-family", text.fontFamily],
          ["font-size", text.fontSize],
          ["font-style", text.fontStyle],
          ["font-weight", text.fontWeight],
          ["letter-spacing", text.letterSpacing],
          ["color", text.color],
          ["background-color", text.backgroundColor],
          ["opacity", text.opacity]
        ];
      }

      camelToKebab(value) {
        return String(value).replace(/[A-Z]/g, (match) => `-${match.toLowerCase()}`);
      }

      toggleCommentMode(force) {
        const next = typeof force === "boolean" ? force : !this.commentMode;
        this.commentMode = next;
        document.body.classList.toggle("commenting", next);
        if (next && this.selected) this.focusCommentInput();
      }

      selectForComment(element) {
        if (!element) return;
        this.select(element);
        this.ensureAiAnchor(element);
        this.updateCommentPanel();
        this.focusCommentInput();
      }

      focusCommentInput() {
        if (!this.selected || !this.controls.commentInput || this.controls.commentInput.disabled) return;
        const section = this.controls.commentInput.closest(".inspector-section");
        if (section) section.scrollIntoView({ block: "nearest" });
        this.controls.commentInput.focus({ preventScroll: true });
      }

      updateCommentPanel() {
        const element = this.selected;
        const hasSelection = Boolean(element);
        const anchor = hasSelection ? (element.dataset.aiAnchor || "") : "";
        const elementKey = hasSelection ? (anchor || element.dataset.editId || "") : "";
        const comment = anchor ? this.comments[anchor] : null;
        const slideNumber = hasSelection ? this.slideNumberForElement(element) : null;
        const targetLabel = hasSelection ? this.getSelectionLabel(element).replace("：", " ") : "";
        this.controls.commentTarget.textContent = hasSelection
          ? `目标：${slideNumber ? `Slide ${String(slideNumber).padStart(2, "0")} · ` : ""}${targetLabel}`
          : "目标：未选中元素";
        this.controls.commentInput.disabled = !hasSelection;
        this.controls.saveComment.disabled = !hasSelection;
        this.controls.clearComment.disabled = !comment;
        this.controls.saveComment.textContent = comment ? "更新批注" : "保存批注";
        if (!hasSelection) {
          if (document.activeElement !== this.controls.commentInput) this.controls.commentInput.value = "";
          this.commentInputAnchor = "";
          return;
        }
        if (this.commentInputAnchor !== elementKey || document.activeElement !== this.controls.commentInput) {
          this.controls.commentInput.value = comment?.text || "";
          this.commentInputAnchor = elementKey;
        }
      }

      ensureAiAnchor(element) {
        if (!element) return "";
        const current = element.dataset.aiAnchor;
        if (current && this.findElementByAiAnchor(current) === element) return current;
        const used = new Set(this.getEditableElements().filter((candidate) => candidate !== element).map((candidate) => candidate.dataset.aiAnchor).filter(Boolean));
        const slideNumber = this.slideNumberForElement(element) || 0;
        const slide = this.closestSlide(element);
        const peers = this.getEditableElements().filter((candidate) => this.closestSlide(candidate) === slide);
        const order = Math.max(1, peers.indexOf(element) + 1);
        const kind = this.aiAnchorKind(element);
        const base = `ai-s${String(slideNumber).padStart(2, "0")}-${kind}-${String(order).padStart(2, "0")}`;
        let anchor = base;
        let suffix = 2;
        while (used.has(anchor)) {
          anchor = `${base}-${suffix}`;
          suffix += 1;
        }
        element.dataset.aiAnchor = anchor;
        return anchor;
      }

      aiAnchorKind(element) {
        if (this.isImageElement(element)) return "image";
        if (element.classList.contains("shape-layer")) return "shape";
        if (this.isTextElement(element)) return "text";
        return "block";
      }

      findElementByAiAnchor(anchor) {
        if (!anchor) return null;
        return this.getEditableElements().find((element) => element.dataset.aiAnchor === anchor) || null;
      }

      slideNumberForElement(element) {
        const slide = this.closestSlide(element);
        const index = slide ? this.presentation.slides.indexOf(slide) : -1;
        return index >= 0 ? index + 1 : null;
      }

      saveCommentForSelected(options = {}) {
        if (!this.selected) return false;
        const text = (this.controls.commentInput.value || "").trim();
        const anchor = this.ensureAiAnchor(this.selected);
        if (!text) {
          return this.clearCommentForSelected(options);
        }
        this.comments[anchor] = {
          anchor,
          text,
          label: this.getSelectionLabel(this.selected),
          slide: this.slideNumberForElement(this.selected),
          snippet: this.commentSnippet(this.selected),
          updatedAt: new Date().toISOString()
        };
        this.selected.setAttribute("data-ai-commented", "true");
        this.commentInputAnchor = anchor;
        this.renderComments();
        this.updateCommentPanel();
        this.saveDraft(false, options.recordHistory !== false);
        if (!options.silent) this.toastMessage("批注已保存到本地草稿");
        return true;
      }

      clearCommentForSelected(options = {}) {
        if (!this.selected) return false;
        const anchor = this.selected.dataset.aiAnchor;
        if (anchor) delete this.comments[anchor];
        this.selected.removeAttribute("data-ai-commented");
        this.controls.commentInput.value = "";
        this.renderComments();
        this.updateCommentPanel();
        this.saveDraft(false, options.recordHistory !== false);
        if (!options.silent) this.toastMessage("批注已从本地草稿清除");
        return true;
      }

      removeCommentsForElement(element) {
        const anchor = element?.dataset.aiAnchor;
        if (!anchor) return;
        delete this.comments[anchor];
        this.renderComments();
      }

      commentSnippet(element) {
        if (!element) return "";
        const image = element.tagName === "IMG" ? element : element.querySelector?.("img");
        if (image) {
          const imageText = image.getAttribute("alt") || image.getAttribute("src") || "";
          return this.truncateText(imageText, 96);
        }
        const text = this.isTextElement(element) ? this.getEditableText(element) : element.textContent;
        return this.truncateText(text || "", 96);
      }

      truncateText(text, length) {
        const normalized = String(text || "").replace(/\s+/g, " ").trim();
        if (normalized.length <= length) return normalized;
        return `${normalized.slice(0, Math.max(0, length - 1))}…`;
      }

      syncCommentMarkers() {
        this.stage.querySelectorAll("[data-ai-commented]").forEach((element) => element.removeAttribute("data-ai-commented"));
        Object.keys(this.comments).forEach((anchor) => {
          const element = this.findElementByAiAnchor(anchor);
          if (element) element.setAttribute("data-ai-commented", "true");
        });
      }

      renderComments() {
        if (!this.controls.commentList) return;
        this.controls.commentList.innerHTML = "";
        const comments = this.sortedComments();
        if (!comments.length) {
          const empty = document.createElement("p");
          empty.className = "comment-empty";
          empty.textContent = "暂无批注";
          this.controls.commentList.appendChild(empty);
          return;
        }
        comments.forEach((comment) => {
          const element = this.findElementByAiAnchor(comment.anchor);
          const card = document.createElement("button");
          card.type = "button";
          card.className = "comment-card";
          const label = document.createElement("span");
          label.className = "comment-card-label";
          const slideNumber = element ? this.slideNumberForElement(element) : comment.slide;
          label.textContent = `${slideNumber ? `Slide ${String(slideNumber).padStart(2, "0")} · ` : ""}${element ? this.getSelectionLabel(element) : comment.label || comment.anchor}`;
          const text = document.createElement("span");
          text.className = "comment-card-text";
          text.textContent = this.truncateText(comment.text, 88);
          card.append(label, text);
          card.addEventListener("click", () => this.revealCommentTarget(comment.anchor));
          this.controls.commentList.appendChild(card);
        });
      }

      revealCommentTarget(anchor) {
        const element = this.findElementByAiAnchor(anchor);
        if (!element) {
          this.toastMessage("批注目标已不在当前页面");
          return;
        }
        const slide = this.closestSlide(element);
        const index = slide ? this.presentation.slides.indexOf(slide) : -1;
        if (index >= 0 && index !== this.presentation.currentSlide) {
          this.presentation.showSlide(index);
          this.renderSlideRail();
        }
        this.select(element);
        this.focusCommentInput();
      }

      sortedComments() {
        return Object.values(this.comments)
          .filter((comment) => comment && comment.anchor && comment.text)
          .sort((a, b) => (Number(a.slide) || 9999) - (Number(b.slide) || 9999) || String(a.anchor).localeCompare(String(b.anchor)));
      }

      normalizeComments(raw) {
        const values = Array.isArray(raw) ? raw : Object.values(raw || {});
        return values.reduce((comments, item) => {
          const anchor = String(item?.anchor || "").trim();
          const text = String(item?.text || "").trim();
          if (!anchor || !text) return comments;
          comments[anchor] = {
            anchor,
            text,
            label: String(item?.label || ""),
            slide: Number.isFinite(Number(item?.slide)) ? Number(item.slide) : null,
            snippet: String(item?.snippet || ""),
            updatedAt: String(item?.updatedAt || "")
          };
          return comments;
        }, {});
      }

      focusTextEditor() {
        const section = this.controls.text.closest(".inspector-section");
        if (section) {
          section.scrollIntoView({ block: "nearest" });
          section.classList.add("edit-attention");
          window.clearTimeout(this.textFocusTimer);
          this.textFocusTimer = window.setTimeout(() => section.classList.remove("edit-attention"), 900);
        }
        this.controls.text.focus({ preventScroll: true });
        this.controls.text.select();
      }

      focusTextLayer(element) {
        if (!element || this.isSvgElement(element)) {
          this.focusTextEditor();
          return;
        }
        if (!element.hasAttribute("tabindex")) element.tabIndex = -1;
        element.focus({ preventScroll: true });
      }

      clearTextSelection() {
        this.textSelectionRange = null;
        this.textSelectionElement = null;
      }

      captureInspectorTextSelection(options = {}) {
        const input = this.controls.text;
        if (!input || document.activeElement !== input || input.disabled) return false;
        if (!this.selected || !this.isTextElement(this.selected) || this.isSvgElement(this.selected)) return false;
        const start = Math.min(input.selectionStart || 0, input.selectionEnd || 0);
        const end = Math.max(input.selectionStart || 0, input.selectionEnd || 0);
        if (start === end) {
          this.clearTextSelection();
          return true;
        }
        const range = this.textRangeFromOffsets(this.selected, start, end);
        if (!range) {
          this.clearTextSelection();
          return true;
        }
        this.textSelectionRange = range;
        this.textSelectionElement = this.selected;
        if (options.syncInspector !== false) this.syncInlineSelectionInspector();
        return true;
      }

      textRangeFromOffsets(element, start, end) {
        const walker = document.createTreeWalker(element, NodeFilter.SHOW_TEXT);
        const textNodes = [];
        let node = walker.nextNode();
        while (node) {
          textNodes.push(node);
          node = walker.nextNode();
        }
        if (!textNodes.length) return null;
        const totalLength = textNodes.reduce((total, textNode) => total + textNode.textContent.length, 0);
        const safeStart = Math.max(0, Math.min(totalLength, start));
        const safeEnd = Math.max(0, Math.min(totalLength, end));
        if (safeStart === safeEnd) return null;
        const startPoint = this.textPointAtOffset(textNodes, safeStart);
        const endPoint = this.textPointAtOffset(textNodes, safeEnd);
        if (!startPoint || !endPoint) return null;
        const range = document.createRange();
        range.setStart(startPoint.node, startPoint.offset);
        range.setEnd(endPoint.node, endPoint.offset);
        return range;
      }

      textPointAtOffset(textNodes, offset) {
        let remaining = offset;
        for (const node of textNodes) {
          const length = node.textContent.length;
          if (remaining <= length) return { node, offset: remaining };
          remaining -= length;
        }
        const last = textNodes[textNodes.length - 1];
        return last ? { node: last, offset: last.textContent.length } : null;
      }

      selectionBelongsToElement(range, element) {
        if (!range || !element) return false;
        const belongs = (node) => {
          const parent = node?.parentElement || node?.parentNode;
          const target = node?.nodeType === Node.ELEMENT_NODE ? node : parent;
          return Boolean(target && (target === element || element.contains(target)));
        };
        return belongs(range.startContainer) && belongs(range.endContainer);
      }

      isInspectorFocused() {
        return Boolean(document.activeElement?.closest?.("[data-html-deck-editor-ui].editor-shell, #editorShell"));
      }

      captureTextSelection(options = {}) {
        if (!this.isActive || !this.selected || !this.isTextElement(this.selected) || this.isSvgElement(this.selected)) return;
        if (this.captureInspectorTextSelection(options)) return;
        const selection = window.getSelection?.();
        if (!selection || selection.rangeCount === 0) return;
        const range = selection.getRangeAt(0);
        if (range.collapsed) {
          if (!this.isInspectorFocused()) this.clearTextSelection();
          return;
        }
        if (!this.selectionBelongsToElement(range, this.selected)) {
          if (!this.isInspectorFocused()) this.clearTextSelection();
          return;
        }
        this.textSelectionRange = range.cloneRange();
        this.textSelectionElement = this.selected;
        if (options.syncInspector !== false) this.syncInlineSelectionInspector();
      }

      validTextSelectionRange(element) {
        const range = this.textSelectionRange;
        if (!range || range.collapsed || this.textSelectionElement !== element) return null;
        if (!element?.isConnected || !this.selectionBelongsToElement(range, element)) {
          this.clearTextSelection();
          return null;
        }
        return range.cloneRange();
      }

      rangeStyleElement(range, element) {
        const node = range?.startContainer;
        const parent = node?.parentElement || node?.parentNode;
        const target = node?.nodeType === Node.ELEMENT_NODE ? node : parent;
        if (!target || !element.contains(target)) return element;
        return target;
      }

      textNodesInRange(range, element) {
        if (!range || !element) return [];
        const walker = document.createTreeWalker(element, NodeFilter.SHOW_TEXT, {
          acceptNode: (node) => {
            if (!node.textContent) return NodeFilter.FILTER_REJECT;
            if (!node.textContent.trim()) return NodeFilter.FILTER_REJECT;
            return range.intersectsNode(node) ? NodeFilter.FILTER_ACCEPT : NodeFilter.FILTER_REJECT;
          }
        });
        const nodes = [];
        let node = walker.nextNode();
        while (node) {
          const start = node === range.startContainer ? range.startOffset : 0;
          const end = node === range.endContainer ? range.endOffset : node.textContent.length;
          if (end > start && node.textContent.slice(start, end).trim()) nodes.push(node);
          node = walker.nextNode();
        }
        return nodes;
      }

      selectedTextStyleSummary(range, element) {
        const textNodes = this.textNodesInRange(range, element);
        const targets = textNodes.map((node) => node.parentElement).filter(Boolean);
        if (!targets.length) targets.push(this.rangeStyleElement(range, element));
        const styles = targets.map((target) => getComputedStyle(target));
        const first = styles[0] || getComputedStyle(element);
        const same = (mapper) => {
          const value = mapper(first);
          return styles.every((style) => mapper(style) === value) ? value : "";
        };
        const backgrounds = targets.map((target) => this.nearestTextBackgroundColor(target, element));
        const visibleBackgrounds = backgrounds.filter(Boolean);
        const backgroundColor = visibleBackgrounds.length && visibleBackgrounds.every((value) => value === visibleBackgrounds[0])
          ? visibleBackgrounds[0]
          : (backgrounds.every((value) => value === backgrounds[0]) ? backgrounds[0] : "");
        return {
          fontFamily: same((style) => this.matchFontFamilyValue(style.fontFamily)),
          fontFamilyRaw: same((style) => style.fontFamily),
          fontSize: same((style) => String(Math.round(Number.parseFloat(style.fontSize)) || "")),
          color: same((style) => this.toHex(style.color)),
          backgroundColor,
          opacity: same((style) => String(Math.round((Number.parseFloat(style.opacity) || 1) * 100))),
          fontWeight: styles.length > 0 && styles.every((style) => this.isBoldWeight(style.fontWeight)) ? "700" : "400",
          fontStyle: styles.length > 0 && styles.every((style) => this.isItalicStyle(style.fontStyle)) ? "italic" : "normal"
        };
      }

      nearestTextBackgroundColor(target, root) {
        let element = target;
        while (element && root.contains(element)) {
          const value = this.visibleColorValue(getComputedStyle(element).backgroundColor);
          if (value) return value;
          if (element === root) break;
          element = element.parentElement;
        }
        return "";
      }

      syncInlineSelectionInspector() {
        const range = this.validTextSelectionRange(this.selected);
        if (!range || !this.controls.fontSize || this.controls.fontSize.disabled) return;
        const summary = this.selectedTextStyleSummary(range, this.selected);
        this.updateFontFamilyControls(summary.fontFamilyRaw || summary.fontFamily);
        this.controls.fontSize.value = summary.fontSize;
        if (summary.color) this.updateTextColorState(summary.color);
        this.updateBackgroundPickerState(summary.backgroundColor);
        this.controls.opacity.value = summary.opacity;
        this.updateTextStyleButtons(summary);
      }

      updateTextStyleButtons(computed) {
        this.controls.fontWeight.setAttribute("aria-pressed", computed && this.isBoldWeight(computed.fontWeight) ? "true" : "false");
        this.controls.fontStyle.setAttribute("aria-pressed", computed && this.isItalicStyle(computed.fontStyle) ? "true" : "false");
      }

      isBoldWeight(value) {
        const weight = String(value || "").trim().toLowerCase();
        if (weight === "bold" || weight === "bolder") return true;
        return (Number.parseInt(weight, 10) || 0) >= 600;
      }

      isItalicStyle(value) {
        const style = String(value || "").trim().toLowerCase();
        return style === "italic" || style.startsWith("oblique");
      }

      applyInlineTextStyle(element, property, value) {
        const range = this.validTextSelectionRange(element);
        if (!range) return false;
        if (value === "") return this.clearInlineSelectionStyle(element, property);
        const styleTarget = this.inlineStyleTargetForRange(range, element);
        if (styleTarget) {
          styleTarget.style.setProperty(property, value);
          this.select(element);
          this.restoreRangeAround(styleTarget);
          this.normalizeInlineTextStyles(element);
          this.textSelectionRange = this.currentSelectionRangeFor(element);
          this.textSelectionElement = element;
          return true;
        }
        let wrapper = document.createElement("span");
        wrapper.style.setProperty(property, value);
        const fragment = range.extractContents();
        if (!fragment.textContent || !fragment.textContent.trim()) {
          range.insertNode(fragment);
          return false;
        }
        wrapper.appendChild(fragment);
        range.insertNode(wrapper);
        this.unwrapNestedMatchingSpans(wrapper, property, value);
        wrapper = this.mergeAdjacentInlineSpans(wrapper, property);
        this.select(element);
        this.restoreRangeAround(wrapper);
        this.normalizeInlineTextStyles(element);
        this.textSelectionRange = this.currentSelectionRangeFor(element);
        this.textSelectionElement = element;
        return true;
      }

      applyInlineTextStyles(element, entries) {
        const range = this.validTextSelectionRange(element);
        const styles = entries.filter((entry) => entry[1]);
        if (!range || !styles.length) return false;
        let styleTarget = this.inlineStyleTargetForRange(range, element);
        if (styleTarget) {
          styles.forEach(([property, value]) => styleTarget.style.setProperty(property, value));
        } else {
          styleTarget = document.createElement("span");
          styles.forEach(([property, value]) => styleTarget.style.setProperty(property, value));
          const fragment = range.extractContents();
          if (!fragment.textContent || !fragment.textContent.trim()) {
            range.insertNode(fragment);
            return false;
          }
          styleTarget.appendChild(fragment);
          range.insertNode(styleTarget);
        }
        this.select(element);
        this.restoreRangeAround(styleTarget);
        this.normalizeInlineTextStyles(element);
        this.textSelectionRange = this.currentSelectionRangeFor(element);
        this.textSelectionElement = element;
        return true;
      }

      splitSimpleInlineTextStyle(range, element, property) {
        if (!range || range.startContainer !== range.endContainer || range.startContainer.nodeType !== Node.TEXT_NODE) return null;
        const textNode = range.startContainer;
        const parent = textNode.parentElement;
        if (!parent || parent === element || !element.contains(parent)) return null;
        if (!parent.style || !parent.style.getPropertyValue(property)) return null;
        const text = textNode.textContent || "";
        const before = text.slice(0, range.startOffset);
        const middle = text.slice(range.startOffset, range.endOffset);
        const after = text.slice(range.endOffset);
        if (!middle) return null;
        const reference = parent;
        if (before) {
          const beforeSpan = reference.cloneNode(false);
          beforeSpan.textContent = before;
          reference.parentNode.insertBefore(beforeSpan, reference);
        }
        const middleSpan = reference.cloneNode(false);
        middleSpan.style.removeProperty(property);
        if (!middleSpan.getAttribute("style")) middleSpan.removeAttribute("style");
        middleSpan.textContent = middle;
        reference.parentNode.insertBefore(middleSpan, reference);
        if (after) {
          const afterSpan = reference.cloneNode(false);
          afterSpan.textContent = after;
          reference.parentNode.insertBefore(afterSpan, reference);
        }
        reference.remove();
        return middleSpan;
      }

      clearInlineSelectionStyle(element, property) {
        const range = this.validTextSelectionRange(element);
        if (!range) return false;
        const splitTarget = this.splitSimpleInlineTextStyle(range, element, property);
        if (splitTarget) {
          this.select(element);
          this.restoreRangeAround(splitTarget);
          this.normalizeInlineTextStyles(element);
          this.textSelectionRange = this.currentSelectionRangeFor(element);
          this.textSelectionElement = element;
          return true;
        }
        const styleTarget = this.inlineStyleTargetForRange(range, element);
        if (styleTarget) {
          styleTarget.style.removeProperty(property);
          if (!styleTarget.getAttribute("style")) styleTarget.removeAttribute("style");
          this.select(element);
          this.restoreRangeAround(styleTarget);
          this.normalizeInlineTextStyles(element);
          this.textSelectionRange = this.currentSelectionRangeFor(element);
          this.textSelectionElement = element;
          return true;
        }
        let wrapper = document.createElement("span");
        const fragment = range.extractContents();
        if (!fragment.textContent || !fragment.textContent.trim()) {
          range.insertNode(fragment);
          return false;
        }
        wrapper.appendChild(fragment);
        wrapper.querySelectorAll("[style]").forEach((node) => {
          node.style.removeProperty(property);
          if (!node.getAttribute("style")) node.removeAttribute("style");
        });
        range.insertNode(wrapper);
        wrapper = this.mergeAdjacentInlineSpans(wrapper, property);
        this.select(element);
        this.restoreRangeAround(wrapper);
        this.normalizeInlineTextStyles(element);
        this.textSelectionRange = this.currentSelectionRangeFor(element);
        this.textSelectionElement = element;
        return true;
      }

      inlineStyleTargetForRange(range, element) {
        if (!range || range.startContainer !== range.endContainer || range.startContainer.nodeType !== Node.TEXT_NODE) return null;
        const textNode = range.startContainer;
        const parent = textNode.parentElement;
        if (!parent || parent === element || !element.contains(parent)) return null;
        if (range.startOffset !== 0 || range.endOffset !== textNode.textContent.length) return null;
        const hasOtherVisibleText = Array.from(parent.childNodes).some((node) => node !== textNode && node.textContent && node.textContent.trim());
        return hasOtherVisibleText ? null : parent;
      }

      currentSelectionRangeFor(element) {
        const selection = window.getSelection?.();
        if (!selection || selection.rangeCount === 0) return null;
        const range = selection.getRangeAt(0);
        return this.selectionBelongsToElement(range, element) ? range.cloneRange() : null;
      }

      restoreRangeAround(element) {
        const selection = window.getSelection?.();
        if (!selection || !element?.isConnected) return;
        const range = document.createRange();
        range.selectNodeContents(element);
        selection.removeAllRanges();
        selection.addRange(range);
      }

      unwrapNestedMatchingSpans(root, property, value) {
        root.querySelectorAll("span[style]").forEach((span) => {
          if (span.style.getPropertyValue(property) !== value) return;
          if (span.style.length !== 1) return;
          while (span.firstChild) span.parentNode.insertBefore(span.firstChild, span);
          span.remove();
        });
      }

      mergeAdjacentInlineSpans(span, property) {
        if (!span?.parentNode) return span;
        let current = span;
        const sameStyle = (candidate) =>
          candidate &&
          candidate.nodeType === Node.ELEMENT_NODE &&
          candidate.tagName === "SPAN" &&
          candidate.getAttribute("style") === current.getAttribute("style") &&
          candidate.style.getPropertyValue(property) === current.style.getPropertyValue(property);
        while (sameStyle(current.previousSibling)) {
          const previous = current.previousSibling;
          while (current.firstChild) previous.appendChild(current.firstChild);
          current.remove();
          current = previous;
        }
        while (sameStyle(current.nextSibling)) {
          const next = current.nextSibling;
          while (next.firstChild) current.appendChild(next.firstChild);
          next.remove();
        }
        return current;
      }

      normalizeInlineTextStyles(element) {
        element.normalize();
        element.querySelectorAll("span").forEach((span) => {
          if (span.textContent) return;
          span.remove();
        });
      }

      applyInlineSelectionStyle(element, property, value, options = {}) {
        this.captureTextSelection({ syncInspector: false });
        if (options.live && this.validTextSelectionRange(element) && !this.isSvgElement(element)) return true;
        if (!options.live && this.validTextSelectionRange(element) && !this.isSvgElement(element)) {
          if (this.applyInlineTextStyle(element, property, value)) {
            this.updateFrame();
            const recordHistory = options.recordHistory !== false;
            this.saveDraft(false, recordHistory);
            if (!recordHistory) this.markPendingHistoryChange();
            return true;
          }
        }
        return false;
      }

      toggleTextStyle(property) {
        const element = this.selected;
        if (!element || !this.isTextElement(element)) return;
        this.captureTextSelection({ syncInspector: false });
        const range = this.validTextSelectionRange(element);
        const computed = range ? this.selectedTextStyleSummary(range, element) : getComputedStyle(element);
        const value = property === "font-weight"
          ? (this.isBoldWeight(computed.fontWeight) ? "400" : "700")
          : (this.isItalicStyle(computed.fontStyle) ? "normal" : "italic");
        if (this.applyInlineSelectionStyle(element, property, value)) {
          this.syncInlineSelectionInspector();
          return;
        }
        element.style.setProperty(property, value);
        this.updateFrame();
        this.updateInspector();
        this.saveDraft(false, true);
      }

      applyInspectorValue(name, options = {}) {
        const element = this.selected;
        if (!element) return;
        const recordHistory = options.recordHistory !== false;
        const refreshInspector = options.refreshInspector !== false;
        const live = options.live === true;
        if (name === "text") {
          this.setEditableText(element, this.controls.text.value);
        }
        if (name === "shape" && element.classList.contains("shape-layer")) {
          this.applyShape(element, this.controls.shape.value);
        }
        if (name === "fontFamily" && this.isTextElement(element)) {
          const value = this.currentFontFamilyValue();
          if (value && this.applyInlineSelectionStyle(element, "font-family", value, { live, recordHistory })) return;
          if (value) {
            element.style.fontFamily = value;
          } else {
            element.style.removeProperty("font-family");
          }
        }
        if (name === "fontSize" && this.isTextElement(element)) {
          const value = this.controls.fontSize.value;
          if (value === "") {
            element.style.removeProperty("font-size");
          } else {
            const size = this.clampNumber(value, 16, 8, 220);
            if (this.applyInlineSelectionStyle(element, "font-size", `${size}px`, { live, recordHistory })) {
              if (!live) this.controls.fontSize.value = String(size);
              return;
            }
            element.style.fontSize = `${size}px`;
            if (recordHistory) this.controls.fontSize.value = String(size);
          }
        }
        if (name === "color") {
          const value = this.controls.colorButton.dataset.value || "";
          if (this.isTextElement(element) && value && this.applyInlineSelectionStyle(element, "color", value, { live, recordHistory })) return;
          this.setEditableTextColor(element, value);
          this.updateTextColorState(value);
        }
        if (name === "bg") {
          const value = this.controls.bg.dataset.value || "";
          if (this.isTextElement(element) && this.applyInlineSelectionStyle(element, "background-color", value, { live, recordHistory })) {
            this.updateBackgroundPickerState(value);
            return;
          }
          if (value) {
            this.setEditableSurfaceColor(element, value);
          } else {
            this.clearEditableSurfaceColor(element);
          }
          this.updateBackgroundPickerState(value);
        }
        if (name === "opacity") {
          const value = this.controls.opacity.value;
          if (value === "") {
            element.style.removeProperty("opacity");
          } else {
            const opacity = this.clampNumber(value, 100, 0, 100);
            if (this.isTextElement(element) && this.applyInlineSelectionStyle(element, "opacity", String(opacity / 100), { live, recordHistory })) {
              if (!live) this.controls.opacity.value = String(opacity);
              return;
            }
            element.style.opacity = String(opacity / 100);
            if (recordHistory) this.controls.opacity.value = String(opacity);
          }
        }
        if (["x", "y", "width", "height"].includes(name)) {
          this.clearElementMotionState(element);
          this.reconcileStoredStagePosition(element, { mode: "sync" });
          const box = this.getStableStageBox(element);
          const numberOrFallback = (value, fallback) => {
            if (value === "") return fallback;
            const number = Number(value);
            return Number.isFinite(number) ? number : fallback;
          };
          const x = numberOrFallback(this.controls.x.value, box.x);
          const y = numberOrFallback(this.controls.y.value, box.y);
          const width = Math.max(10, numberOrFallback(this.controls.width.value, box.width));
          const height = Math.max(10, numberOrFallback(this.controls.height.value, box.height));
          this.setStagePosition(element, x, y, width, height);
        }
        if (name === "anim") {
          const motionElement = this.motionTargetFor(element);
          this.rememberMotionStableBox(motionElement, this.reconcileStoredStagePosition(motionElement, { mode: "sync" }) || this.getStableStageBox(motionElement));
          this.applyAnimation(motionElement, this.controls.anim.value, true);
          this.syncMotionControls(motionElement);
          this.saveDraft(false, recordHistory);
          return;
        }
        if (name === "order") {
          const motionElement = this.motionTargetFor(element);
          if (!this.usesCustomMotion(motionElement)) return;
          const order = this.setMotionOrder(motionElement, this.controls.order.value, true);
          this.controls.order.value = order;
          this.scheduleMotionPreview();
        }
        if (name === "delay") {
          const motionElement = this.motionTargetFor(element);
          if (!this.usesCustomMotion(motionElement)) return;
          const delay = this.clampNumber(this.controls.delay.value, 0, 0, 20000);
          motionElement.dataset.editDelay = String(delay);
          motionElement.style.setProperty("--edit-delay", `${motionElement.dataset.editDelay}ms`);
          this.controls.delay.value = String(delay);
          this.scheduleMotionPreview();
        }
        if (name === "duration") {
          const motionElement = this.motionTargetFor(element);
          if (!this.usesCustomMotion(motionElement)) return;
          const duration = this.clampNumber(this.controls.duration.value, 640, 100, 10000);
          motionElement.dataset.editDuration = String(duration);
          motionElement.style.setProperty("--edit-duration", `${motionElement.dataset.editDuration}ms`);
          this.controls.duration.value = String(duration);
          this.scheduleMotionPreview();
        }
        this.updateFrame();
        if (refreshInspector) this.updateInspector();
        this.saveDraft(false, recordHistory);
        if (!recordHistory) this.markPendingHistoryChange();
      }

      getSelectionLabel(element) {
        if (this.isImageElement(element)) return "图片";
        if (element.classList.contains("shape-layer")) return `形状：${this.shapeLabel(element.dataset.shape || "rect")}`;
        if (element.classList.contains("text-layer")) return "文字层";
        if (this.isTextElement(element)) return `文字：${element.tagName.toLowerCase()}`;
        if (element.matches("[data-editable-box], [data-editor-kind='box']")) return `视觉块：${element.tagName.toLowerCase()}`;
        return element.tagName.toLowerCase();
      }

      isImageElement(element) {
        return Boolean(element && (element.tagName === "IMG" || element.classList.contains("image-layer") || element.matches("[data-editable-media], [data-editor-kind='media']") || element.querySelector?.("img")));
      }

      isTextElement(element) {
        return element && element.matches("[data-editable], [data-editor-kind='text'], .text-layer");
      }

      getEditableText(element) {
        if (!element) return "";
        return this.isSvgElement(element) ? element.textContent : element.innerText;
      }

      setEditableText(element, value) {
        if (!element) return;
        if (this.isSvgElement(element)) {
          element.textContent = value;
          return;
        }
        if (this.setStructuredEditableText(element, value)) return;
        element.innerText = value;
      }

      setStructuredEditableText(element, value) {
        const textNodes = this.editableTextNodes(element);
        if (!textNodes.length) return false;
        const next = String(value ?? "").replace(/\r\n?/g, "\n");
        if (textNodes.length === 1) {
          textNodes[0].textContent = next;
          return true;
        }
        const lines = next.split("\n");
        if (lines.length === textNodes.length) {
          textNodes.forEach((node, index) => {
            node.textContent = lines[index];
          });
          return true;
        }
        const oldLengths = textNodes.map((node) => (node.textContent || "").length);
        const oldTotal = oldLengths.reduce((total, length) => total + length, 0);
        if (!oldTotal) {
          textNodes[0].textContent = next;
          textNodes.slice(1).forEach((node) => {
            node.textContent = "";
          });
          return true;
        }
        let oldCursor = 0;
        let nextCursor = 0;
        textNodes.forEach((node, index) => {
          oldCursor += oldLengths[index];
          const nextBoundary = index === textNodes.length - 1
            ? next.length
            : Math.round((oldCursor / oldTotal) * next.length);
          node.textContent = next.slice(nextCursor, nextBoundary);
          nextCursor = nextBoundary;
        });
        return true;
      }

      editableTextNodes(element) {
        const walker = document.createTreeWalker(element, NodeFilter.SHOW_TEXT, {
          acceptNode: (node) => {
            if (!node.textContent || !node.textContent.trim()) return NodeFilter.FILTER_REJECT;
            const parent = node.parentElement;
            if (!parent || parent.closest("[data-html-deck-editor-ui], script, style, template")) return NodeFilter.FILTER_REJECT;
            return NodeFilter.FILTER_ACCEPT;
          }
        });
        const nodes = [];
        let node = walker.nextNode();
        while (node) {
          nodes.push(node);
          node = walker.nextNode();
        }
        return nodes;
      }

      editableTextColor(element, computed = getComputedStyle(element)) {
        if (this.isSvgElement(element)) {
          const fill = computed.fill || element.getAttribute("fill");
          return this.isVisiblePaint(fill) ? fill : computed.color;
        }
        return computed.color;
      }

      editableSurfaceColor(element, computed = getComputedStyle(element)) {
        if (this.isSvgElement(element)) {
          const fill = computed.fill || element.getAttribute("fill");
          if (this.isVisiblePaint(fill)) return fill;
          const stroke = computed.stroke || element.getAttribute("stroke");
          if (this.isVisiblePaint(stroke)) return stroke;
        }
        return computed.backgroundColor;
      }

      setEditableTextColor(element, value) {
        if (this.isSvgElement(element)) {
          element.style.fill = value;
        } else {
          element.style.color = value;
        }
      }

      setEditableSurfaceColor(element, value) {
        if (!this.isSvgElement(element)) {
          element.style.backgroundColor = value;
          return;
        }
        const tag = this.svgTagName(element);
        if (["line", "polyline"].includes(tag)) {
          element.style.stroke = value;
          return;
        }
        const computed = getComputedStyle(element);
        if (this.isVisiblePaint(computed.stroke) && !this.isVisiblePaint(computed.fill)) {
          element.style.stroke = value;
        } else {
          element.style.fill = value;
        }
      }

      clearEditableSurfaceColor(element) {
        if (!this.isSvgElement(element)) {
          element.style.removeProperty("background-color");
          return;
        }
        const tag = this.svgTagName(element);
        if (["line", "polyline"].includes(tag)) {
          element.style.removeProperty("stroke");
          return;
        }
        const computed = getComputedStyle(element);
        if (this.isVisiblePaint(computed.stroke) && !this.isVisiblePaint(computed.fill)) {
          element.style.removeProperty("stroke");
        } else {
          element.style.removeProperty("fill");
        }
      }

      isVisiblePaint(value) {
        const paint = String(value || "").trim().toLowerCase();
        return Boolean(paint && paint !== "none" && paint !== "transparent" && paint !== "rgba(0, 0, 0, 0)");
      }

      visibleColorValue(value) {
        if (!this.isVisiblePaint(value)) return "";
        return this.toHex(value);
      }

      updateFontFamilyControls(value) {
        const normalized = this.matchFontFamilyValue(value);
        this.controls.fontFamily.value = normalized || "";
      }

      currentFontFamilyValue() {
        return this.controls.fontFamily.value;
      }

      restoreManagedFonts() {
        document.querySelectorAll(IMPORTED_FONT_STYLE_SELECTOR).forEach((style) => {
          const family = style.dataset.fontFamily || "";
          if (!family) return;
          this.registerImportedFontOption(family, style.dataset.fontLabel || family);
        });
        document.querySelectorAll("link[data-html-deck-editor-online-font]").forEach((link) => {
          const id = link.dataset.htmlDeckEditorOnlineFont;
          if (id && ONLINE_FONTS.some((font) => font.id === id)) this.trackOnlineFontLink(link, id).catch(() => {});
        });
      }

      registerImportedFontOption(family, label) {
        if (!this.controls.importedFontGroup || !family) return "";
        const value = `"${family}", sans-serif`;
        const existing = Array.from(this.controls.importedFontGroup.querySelectorAll("option")).find((option) => option.value === value);
        if (existing) return existing.value;
        const option = document.createElement("option");
        option.value = value;
        option.dataset.importedFont = family;
        option.textContent = label;
        this.controls.importedFontGroup.appendChild(option);
        this.controls.importedFontGroup.hidden = false;
        return value;
      }

      async handleFontImport(event) {
        const input = event.currentTarget;
        const file = input.files?.[0];
        input.value = "";
        if (!file) return;
        try {
          const extension = this.validateFontFile(file);
          const dataUrl = await this.readFileAsDataUrl(file);
          const family = `HtmlDeckImported_${Date.now().toString(36)}_${++this.importedFontCounter}`;
          const label = file.name.replace(/\.[^.]+$/, "") || "导入字体";
          const safeFamily = family.replace(/["\\\r\n]/g, "");
          const style = document.createElement("style");
          style.dataset.htmlDeckEditorFont = "imported";
          style.dataset.fontFamily = safeFamily;
          style.dataset.fontLabel = label.slice(0, 120);
          style.dataset.fontFile = file.name.slice(0, 180);
          style.textContent = `@font-face { font-family: "${safeFamily}"; src: url("${dataUrl}") format("${this.fontFormatForExtension(extension)}"); font-style: normal; font-weight: 400; font-display: swap; }`;
          document.head.appendChild(style);
          const value = this.registerImportedFontOption(safeFamily, label);
          this.controls.fontFamily.value = value;
          if (this.selected && this.isTextElement(this.selected)) this.applyInspectorValue("fontFamily", { recordHistory: true });
          this.controls.fontImportStatus.textContent = `已导入“${label}”。刷新前请点“保存 HTML”，否则需要重新导入。`;
          this.toastMessage(`已导入字体：${label}`);
        } catch (error) {
          const message = error?.message || "字体导入失败";
          this.controls.fontImportStatus.textContent = message;
          this.toastMessage(message);
        }
      }

      validateFontFile(file) {
        const extension = (file.name.match(/\.([^.]+)$/)?.[1] || "").toLowerCase();
        if (!["woff2", "woff", "ttf", "otf"].includes(extension)) {
          throw new Error("仅支持 WOFF2、WOFF、TTF、OTF 字体文件");
        }
        if (!file.size) throw new Error("字体文件为空");
        if (file.size > MAX_IMPORTED_FONT_BYTES) throw new Error("字体文件不能超过 20MB");
        return extension;
      }

      fontFormatForExtension(extension) {
        return ({ woff2: "woff2", woff: "woff", ttf: "truetype", otf: "opentype" })[extension] || extension;
      }

      readFileAsDataUrl(file) {
        return new Promise((resolve, reject) => {
          const reader = new FileReader();
          reader.addEventListener("load", () => resolve(String(reader.result || "")), { once: true });
          reader.addEventListener("error", () => reject(new Error("无法读取字体文件")), { once: true });
          reader.readAsDataURL(file);
        });
      }

      ensureOnlineFont(id) {
        const font = ONLINE_FONTS.find((item) => item.id === id);
        if (!font) return Promise.reject(new Error("未找到联网字体"));
        if (this.onlineFontPromises.has(id)) return this.onlineFontPromises.get(id);
        let link = document.querySelector(`link[data-html-deck-editor-online-font="${id}"]`);
        let created = false;
        if (!link) {
          link = document.createElement("link");
          link.rel = "stylesheet";
          link.href = font.cssUrl;
          link.dataset.htmlDeckEditorOnlineFont = id;
          link.dataset.htmlDeckEditorFontSource = font.source;
          created = true;
        }
        const promise = this.trackOnlineFontLink(link, id);
        if (created) document.head.appendChild(link);
        return promise;
      }

      trackOnlineFontLink(link, id) {
        if (this.onlineFontPromises.has(id)) return this.onlineFontPromises.get(id);
        const font = ONLINE_FONTS.find((item) => item.id === id);
        if (!font) return Promise.reject(new Error("未找到联网字体"));
        const promise = new Promise((resolve, reject) => {
          let timer = null;
          const finish = async () => {
            window.clearTimeout(timer);
            link.dataset.htmlDeckEditorFontState = "loaded";
            this.controls.fontImportStatus.textContent = `${font.label}已加载；来源：${font.source}。`;
            try {
              await document.fonts?.load?.(`16px "${font.family}"`);
            } catch (error) {
              // The stylesheet loaded; browsers without FontFaceSet still render normally.
            }
            resolve(font);
          };
          const fail = () => {
            window.clearTimeout(timer);
            link.dataset.htmlDeckEditorFontState = "error";
            this.onlineFontPromises.delete(id);
            reject(new Error(`联网字体“${font.label}”加载失败，请检查网络后重试`));
          };
          if (link.dataset.htmlDeckEditorFontState === "loaded" || link.sheet) {
            finish();
            return;
          }
          link.addEventListener("load", finish, { once: true });
          link.addEventListener("error", fail, { once: true });
          timer = window.setTimeout(fail, 15000);
        });
        this.onlineFontPromises.set(id, promise);
        return promise;
      }

      renderTextColorPalette() {
        const palette = this.controls.colorPresetGrid;
        if (!palette) return;
        palette.innerHTML = "";
        TEXT_COLOR_PALETTE.forEach((value) => {
          const button = document.createElement("button");
          button.type = "button";
          button.className = "color-preset";
          button.dataset.colorValue = value;
          button.title = value;
          button.setAttribute("aria-label", `文字颜色 ${value}`);
          button.style.setProperty("--choice-color", value);
          button.addEventListener("click", (event) => {
            event.preventDefault();
            event.stopPropagation();
            this.applyTextColor(value, { recordHistory: true });
          });
          palette.appendChild(button);
        });
      }

      initColorPickers() {
        this.colorPickers = {};
        this.initColorPicker("text", this.controls.colorPickerHost, "#111111");
        this.initColorPicker("background", this.controls.bgPickerHost, "#fff2b8");
      }

      initColorPicker(kind, host, defaultColor) {
        if (!host) return;
        host.innerHTML = "";
        if (typeof window.Picker !== "function") {
          const message = document.createElement("p");
          message.className = "color-picker-missing";
          message.textContent = "取色器资源未加载";
          host.appendChild(message);
          return;
        }
        const picker = new window.Picker({
          parent: host,
          popup: false,
          alpha: false,
          editor: true,
          editorFormat: "hex",
          cancelButton: false,
          color: defaultColor
        });
        picker.onChange = (color) => {
          const value = this.pickerColorValue(color);
          if (!value) return;
          this.captureTextSelection({ syncInspector: false });
          if (kind === "background") {
            this.applyBackgroundChoice(value, { closePalette: false, recordHistory: false });
          } else {
            this.applyTextColor(value, { closePalette: false, recordHistory: false });
          }
        };
        picker.onDone = (color) => {
          const value = this.pickerColorValue(color);
          if (!value) return;
          this.captureTextSelection({ syncInspector: false });
          if (kind === "background") {
            this.applyBackgroundChoice(value, { closePalette: false, recordHistory: true });
          } else {
            this.applyTextColor(value, { closePalette: false, recordHistory: true });
          }
        };
        this.colorPickers[kind] = picker;
        picker.show?.();
      }

      pickerColorValue(color) {
        if (!color) return "";
        return this.toHex(color.hex || color.rgbaString || color.rgbString || "");
      }

      setPickerColor(kind, value) {
        const picker = this.colorPickers?.[kind];
        const normalized = this.visibleColorValue(value) || this.toHex(value || "");
        if (!picker || !normalized) return;
        try {
          picker.setColor(normalized, true);
        } catch (error) {
          // Ignore invalid picker sync values; controls still show the normalized state.
        }
      }

      updateTextColorState(value) {
        const normalized = value ? this.toHex(value) : "";
        this.controls.colorButton.dataset.value = normalized;
        if (this.controls.colorSwatch) {
          this.controls.colorSwatch.classList.toggle("no-color", !normalized);
          if (normalized) {
            this.controls.colorSwatch.style.backgroundColor = normalized;
          } else {
            this.controls.colorSwatch.style.removeProperty("background-color");
          }
        }
        if (this.controls.colorText) {
          this.controls.colorText.textContent = normalized || "未选中";
        }
        this.updateTextColorPaletteState(normalized);
        this.setPickerColor("text", normalized);
      }

      updateTextColorPaletteState(value) {
        const normalized = this.visibleColorValue(value) || this.toHex(value || "");
        this.controls.colorPalette?.querySelectorAll("[data-color-value]").forEach((button) => {
          button.setAttribute("aria-checked", String((button.dataset.colorValue || "").toLowerCase() === normalized.toLowerCase()));
        });
      }

      applyTextColor(value, options = {}) {
        if (!this.selected || !value) return;
        this.controls.colorButton.dataset.value = value;
        this.applyInspectorValue("color", { recordHistory: options.recordHistory !== false });
        this.updateTextColorState(value);
        if (options.closePalette !== false) this.closeTextColorPalette();
      }

      async pickColorWithEyeDropper() {
        if (typeof window.EyeDropper !== "function") {
          this.toastMessage("当前浏览器不支持吸管取色");
          return "";
        }
        try {
          const result = await new window.EyeDropper().open();
          return this.toHex(result?.sRGBHex || "");
        } catch (error) {
          return "";
        }
      }

      async pickTextColor() {
        if (!this.selected || this.controls.colorEyedropper.disabled) return;
        this.captureTextSelection({ syncInspector: false });
        const value = await this.pickColorWithEyeDropper();
        if (value) this.applyTextColor(value, { closePalette: false, recordHistory: true });
      }

      async pickBackgroundColor() {
        if (!this.selected || this.controls.bgEyedropper.disabled) return;
        this.captureTextSelection({ syncInspector: false });
        const value = await this.pickColorWithEyeDropper();
        if (value) this.applyBackgroundChoice(value, { closePalette: false, recordHistory: true });
      }

      clampNumber(value, fallback, min, max) {
        const number = Number(value);
        const safe = Number.isFinite(number) ? number : fallback;
        return Math.round(Math.max(min, Math.min(max, safe)));
      }

      matchFontFamilyValue(value) {
        const normalized = (value || "").toLowerCase();
        const imported = Array.from(this.controls.importedFontGroup?.querySelectorAll("option") || []).find((option) => {
          const family = (option.dataset.importedFont || "").toLowerCase();
          return family && normalized.includes(family);
        });
        if (imported) return imported.value;
        const online = ONLINE_FONTS.find((font) => (
          document.querySelector(`link[data-html-deck-editor-online-font="${font.id}"]`) && normalized.includes(font.family.toLowerCase())
        ));
        if (online) return online.value;
        const presets = [
          { value: FONT_BODY_STACK, tokens: ["hanken grotesk", "system-ui", "-apple-system", "segoe ui"] },
          { value: FONT_HEITI_STACK, tokens: ["pingfang sc", "microsoft yahei", "noto sans sc"] },
          { value: FONT_CJK_SERIF_STACK, tokens: ["noto serif sc", "songti sc", "simsun"] },
          { value: FONT_SONGTI_STACK, tokens: ["songti sc", "stsong", "simsun"] },
          { value: FONT_FANGSONG_STACK, tokens: ["fangsong", "stfangsong"] },
          { value: FONT_KAITI_STACK, tokens: ["kaiti sc", "stkaiti", "kaiti"] },
          { value: FONT_LATIN_SERIF_STACK, tokens: ["newsreader", "georgia", "times new roman"] },
          { value: "Inter, Arial, Helvetica, sans-serif", tokens: ["inter"] },
          { value: "Aptos, Calibri, Arial, sans-serif", tokens: ["aptos", "calibri"] },
          { value: "Arial, Helvetica, sans-serif", tokens: ["arial, helvetica"] },
          { value: FONT_DISPLAY_STACK, tokens: ["din alternate", "arial narrow", "impact"] },
          { value: FONT_MONO_STACK, tokens: ["dm mono", "ui-monospace", "sfmono-regular", "consolas", "menlo"] }
        ];
        const match = presets.find((preset) => preset.tokens.some((token) => normalized.includes(token)));
        return match ? match.value : "";
      }

      openImagePicker() {
        this.controls.image.disabled = false;
        this.controls.image.click();
      }

      toggleShapeMenu() {
        const willOpen = this.controls.shapeMenu.hidden;
        this.controls.shapeMenu.hidden = !willOpen;
        this.controls.addShape.setAttribute("aria-expanded", String(willOpen));
        if (willOpen) this.positionShapeMenu();
      }

      closeShapeMenu() {
        this.controls.shapeMenu.hidden = true;
        this.controls.addShape.setAttribute("aria-expanded", "false");
      }

      renderBackgroundPalette() {
        const palette = this.controls.bgPresetGrid;
        if (!palette) return;
        palette.innerHTML = "";
        BACKGROUND_COLOR_PALETTE.forEach((choice) => {
          const button = document.createElement("button");
          button.type = "button";
          button.className = `color-preset${choice.value ? "" : " no-color"}`;
          button.setAttribute("role", "menuitemradio");
          button.setAttribute("aria-checked", "false");
          button.dataset.bgValue = choice.value;
          button.title = choice.label;
          button.setAttribute("aria-label", choice.label);
          if (choice.value) button.style.setProperty("--choice-color", choice.value);
          button.addEventListener("click", (event) => {
            event.preventDefault();
            event.stopPropagation();
            this.applyBackgroundChoice(choice.value);
          });
          palette.appendChild(button);
        });
        this.updateBackgroundPickerState("");
      }

      toggleTextColorPalette() {
        if (this.controls.colorButton.disabled) return;
        const willOpen = this.controls.colorPalette.hidden;
        if (willOpen) this.closeBackgroundPalette();
        this.controls.colorPalette.hidden = !willOpen;
        this.controls.colorButton.setAttribute("aria-expanded", String(willOpen));
        if (willOpen) this.positionTextColorPalette();
      }

      closeTextColorPalette() {
        if (!this.controls.colorPalette || this.controls.colorPalette.hidden) return;
        this.controls.colorPalette.hidden = true;
        this.controls.colorButton.setAttribute("aria-expanded", "false");
      }

      positionTextColorPalette() {
        this.positionColorPalette(this.controls.colorButton, this.controls.colorPalette, "--color-palette-left", "--color-palette-top");
      }

      toggleBackgroundPalette() {
        if (this.controls.bg.disabled) return;
        const willOpen = this.controls.bgPalette.hidden;
        if (willOpen) this.closeTextColorPalette();
        this.controls.bgPalette.hidden = !willOpen;
        this.controls.bg.setAttribute("aria-expanded", String(willOpen));
        if (willOpen) this.positionBackgroundPalette();
      }

      closeBackgroundPalette() {
        if (!this.controls.bgPalette || this.controls.bgPalette.hidden) return;
        this.controls.bgPalette.hidden = true;
        this.controls.bg.setAttribute("aria-expanded", "false");
      }

      positionBackgroundPalette() {
        this.positionColorPalette(this.controls.bg, this.controls.bgPalette, "--bg-palette-left", "--bg-palette-top");
      }

      positionColorPalette(buttonControl, palette, leftVar, topVar) {
        const button = buttonControl.getBoundingClientRect();
        const width = palette.offsetWidth || 246;
        const height = palette.offsetHeight || 238;
        const gutter = 10;
        const left = Math.max(gutter, Math.min(window.innerWidth - width - gutter, button.left));
        const preferredTop = button.bottom + 8;
        const top = Math.max(gutter, Math.min(window.innerHeight - height - gutter, preferredTop));
        palette.style.setProperty(leftVar, `${Math.round(left)}px`);
        palette.style.setProperty(topVar, `${Math.round(top)}px`);
      }

      applyBackgroundChoice(value, options = {}) {
        if (!this.selected) return;
        this.controls.bg.dataset.value = value;
        this.applyInspectorValue("bg", { recordHistory: options.recordHistory !== false });
        if (options.closePalette !== false) this.closeBackgroundPalette();
      }

      updateBackgroundPickerState(value) {
        const normalized = this.visibleColorValue(value);
        this.controls.bg.dataset.value = normalized;
        if (this.controls.bgSwatch) {
          this.controls.bgSwatch.classList.toggle("no-color", !normalized);
          if (normalized) {
            this.controls.bgSwatch.style.backgroundColor = normalized;
          } else {
            this.controls.bgSwatch.style.removeProperty("background-color");
          }
        }
        if (this.controls.bgText) {
          const choice = BACKGROUND_COLOR_PALETTE.find((item) => item.value.toLowerCase() === normalized.toLowerCase());
          this.controls.bgText.textContent = choice?.label || normalized || "无背景";
        }
        this.controls.bgPalette?.querySelectorAll("[data-bg-value]").forEach((button) => {
          button.setAttribute("aria-checked", String((button.dataset.bgValue || "") === normalized));
        });
        this.setPickerColor("background", normalized);
      }

      positionShapeMenu() {
        const button = this.controls.addShape.getBoundingClientRect();
        const menu = this.controls.shapeMenu;
        const menuWidth = menu.offsetWidth || 184;
        const menuHeight = menu.offsetHeight || 180;
        const compactEditor = window.innerWidth <= 960;
        const gutter = compactEditor ? 12 : 10;
        const center = compactEditor ? window.innerWidth / 2 : button.left + button.width / 2;
        const left = Math.max(gutter + menuWidth / 2, Math.min(window.innerWidth - gutter - menuWidth / 2, center));
        const preferredTop = compactEditor ? 60 : button.bottom + 8;
        const top = Math.max(gutter, Math.min(window.innerHeight - gutter - menuHeight, preferredTop));
        menu.style.setProperty("--shape-menu-left", `${Math.round(left)}px`);
        menu.style.setProperty("--shape-menu-top", `${Math.round(top)}px`);
      }

      activeSlide() {
        return this.presentation.slides[this.presentation.currentSlide];
      }

      activeSlideDesignSize(slide = this.activeSlide()) {
        if (isDeckStageElement(this.stage)) {
          return {
            width: Math.max(1, Number(this.stage.getAttribute("width")) || this.stage.designWidth || 1920),
            height: Math.max(1, Number(this.stage.getAttribute("height")) || this.stage.designHeight || 1080)
          };
        }
        return elementDesignSize(slide || this.stage, stageDesignSize(this.stage));
      }

      nextInsertPoint(width = 320, height = 180) {
        const slide = this.activeSlide().getBoundingClientRect();
        const size = this.activeSlideDesignSize();
        const panel = document.querySelector(".editor-panel").getBoundingClientRect();
        const rail = document.querySelector(".editor-slides").getBoundingClientRect();
        const compactEditor = window.innerWidth <= 960;
        const visibleLeft = compactEditor ? slide.left : Math.max(slide.left, rail.right + 18);
        const visibleRight = compactEditor ? slide.right : Math.min(slide.right, panel.left - 18);
        const visibleTop = compactEditor ? Math.max(slide.top, rail.bottom + 16) : Math.max(slide.top, 92);
        const visibleBottom = compactEditor ? Math.min(slide.bottom, panel.top - 16) : Math.min(slide.bottom, window.innerHeight - 22);
        const scale = slide.width / size.width;
        if (visibleRight > visibleLeft + 40 && visibleBottom > visibleTop + 40) {
          return {
            x: Math.max(0, Math.min(size.width - width, ((visibleLeft + visibleRight) / 2 - slide.left) / scale - width / 2)),
            y: Math.max(0, Math.min(size.height - height, ((visibleTop + visibleBottom) / 2 - slide.top) / scale - height / 2))
          };
        }
        return {
          x: Math.max(0, Math.min(size.width - width, this.lastInsert.x)),
          y: Math.max(0, Math.min(size.height - height, this.lastInsert.y))
        };
      }

      stagePointFromClient(clientX, clientY) {
        const rect = this.activeSlide().getBoundingClientRect();
        const size = this.activeSlideDesignSize();
        const scale = rect.width / size.width;
        return {
          x: (clientX - rect.left) / scale,
          y: (clientY - rect.top) / scale,
          scale
        };
      }

      getStageBox(element) {
        const active = this.activeSlide();
        const stageRect = active.getBoundingClientRect();
        const size = this.activeSlideDesignSize(active);
        const rect = this.elementClientRect(element);
        const scale = stageRect.width / size.width;
        return {
          x: (rect.left - stageRect.left) / scale,
          y: (rect.top - stageRect.top) / scale,
          width: rect.width / scale,
          height: rect.height / scale
        };
      }

      clientBoxFromStageBox(box) {
        const active = this.activeSlide();
        const slideRect = active.getBoundingClientRect();
        const size = this.activeSlideDesignSize(active);
        const scale = slideRect.width / size.width;
        return {
          x: slideRect.left + box.x * scale,
          y: slideRect.top + box.y * scale,
          width: box.width * scale,
          height: box.height * scale,
          scale
        };
      }

      isElementMotionRunning(element) {
        return Boolean(element && (element.classList.contains("editor-motion-preview") || element.classList.contains("editor-motion-running")));
      }

      rememberMotionStableBox(element, box = this.getStageBox(element)) {
        if (!element || !box) return box;
        const stableBox = {
          x: box.x,
          y: box.y,
          width: box.width,
          height: box.height
        };
        this.motionStableBoxes.set(element, stableBox);
        return stableBox;
      }

      readStoredStageBox(element) {
        if (!element) return null;
        const x = Number.parseFloat(element.dataset.editStageX);
        const y = Number.parseFloat(element.dataset.editStageY);
        const width = Number.parseFloat(element.dataset.editStageWidth);
        const height = Number.parseFloat(element.dataset.editStageHeight);
        if (![x, y, width, height].every(Number.isFinite)) return null;
        return { x, y, width, height };
      }

      storeStageBox(element, box) {
        if (!element || !box) return;
        element.dataset.editStageX = String(Math.round(box.x));
        element.dataset.editStageY = String(Math.round(box.y));
        element.dataset.editStageWidth = String(Math.round(box.width));
        element.dataset.editStageHeight = String(Math.round(box.height));
      }

      isUsableStageBox(box) {
        return Boolean(
          box &&
          [box.x, box.y, box.width, box.height].every(Number.isFinite) &&
          box.width > 0 &&
          box.height > 0
        );
      }

      getStableStageBox(element) {
        const storedBox = this.readStoredStageBox(element);
        if (storedBox) {
          this.rememberMotionStableBox(element, storedBox);
          return storedBox;
        }
        if (this.isElementMotionRunning(element)) {
          const stableBox = this.motionStableBoxes.get(element);
          if (stableBox) return { ...stableBox };
        }
        return this.rememberMotionStableBox(element);
      }

      getFrameStageBox(element) {
        if (!element) return null;
        if (this.isElementMotionRunning(element)) return this.getStableStageBox(element);
        const liveBox = this.getStageBox(element);
        return this.isUsableStageBox(liveBox) ? liveBox : this.getStableStageBox(element);
      }

      reconcileStoredStagePosition(element, options = {}) {
        const storedBox = this.readStoredStageBox(element);
        if (!element || this.isElementMotionRunning(element)) return storedBox;
        const liveBox = this.getStageBox(element);
        if (!this.isUsableStageBox(liveBox)) return storedBox;
        if (options.mode === "sync") {
          if (storedBox && element.classList.contains("edit-moved")) {
            return this.rememberMotionStableBox(element, storedBox);
          }
          this.storeStageBox(element, liveBox);
          return this.rememberMotionStableBox(element, liveBox);
        }
        if (!storedBox || !element.classList.contains("edit-moved")) return storedBox || this.rememberMotionStableBox(element, liveBox);
        const dx = Math.round(storedBox.x - liveBox.x);
        const dy = Math.round(storedBox.y - liveBox.y);
        if (Math.abs(dx) <= 1 && Math.abs(dy) <= 1) return storedBox;
        const currentX = Number.parseFloat(element.style.getPropertyValue("--edit-x")) || 0;
        const currentY = Number.parseFloat(element.style.getPropertyValue("--edit-y")) || 0;
        element.style.setProperty("--edit-x", `${Math.round(currentX + dx)}px`);
        element.style.setProperty("--edit-y", `${Math.round(currentY + dy)}px`);
        return this.rememberMotionStableBox(element, storedBox);
      }

      clampStageBox(box, keepVisible = 24) {
        const size = this.activeSlideDesignSize();
        const width = Math.max(10, Math.min(size.width, box.width || 10));
        const height = Math.max(10, Math.min(size.height, box.height || 10));
        const visibleX = Math.min(keepVisible, width);
        const visibleY = Math.min(keepVisible, height);
        return {
          x: Math.max(-width + visibleX, Math.min(size.width - visibleX, box.x)),
          y: Math.max(-height + visibleY, Math.min(size.height - visibleY, box.y)),
          width,
          height
        };
      }

      clampInsertPoint(x, y, width, height) {
        const box = this.clampStageBox({ x, y, width, height }, Math.min(24, width, height));
        return { x: box.x, y: box.y };
      }

      rememberBaseTransform(element) {
        if (element.classList.contains("edit-moved")) return;
        const computed = getComputedStyle(element);
        const inlineTransform = element.style.transform && element.style.transform.trim();
        const motionTransform = element.matches(`.reveal, .reveal-left, .reveal-scale, ${this.editorMotionClasses().map((className) => `.${className}`).join(", ")}`) || computed.animationName !== "none";
        const computedTransform = motionTransform ? "" : computed.transform;
        const baseTransform = inlineTransform && inlineTransform !== "none"
          ? inlineTransform
          : computedTransform && computedTransform !== "none"
            ? computedTransform
            : "";
        if (baseTransform) {
          element.style.setProperty("--edit-base-transform", baseTransform);
        } else {
          element.style.removeProperty("--edit-base-transform");
        }
      }

      setStagePosition(element, x, y, width, height) {
        if (!element.classList.contains("editor-layer")) {
          const shouldKeepVisible = this.shouldHoldMotionNode(element);
          this.rememberBaseTransform(element);
          const safe = this.clampStageBox({ x, y, width, height });
          const box = this.getStableStageBox(element);
          const dx = Math.round(safe.x - box.x);
          const dy = Math.round(safe.y - box.y);
          const scaleX = safe.width > 0 && box.width > 0 ? safe.width / box.width : 1;
          const scaleY = safe.height > 0 && box.height > 0 ? safe.height / box.height : 1;
          if (dx || dy) {
            const currentX = Number.parseFloat(element.style.getPropertyValue("--edit-x")) || 0;
            const currentY = Number.parseFloat(element.style.getPropertyValue("--edit-y")) || 0;
            element.classList.add("edit-moved");
            element.style.setProperty("--edit-x", `${Math.round(currentX + dx)}px`);
            element.style.setProperty("--edit-y", `${Math.round(currentY + dy)}px`);
          }
          if (Math.abs(scaleX - 1) > 0.01 || Math.abs(scaleY - 1) > 0.01) {
            const currentScaleX = Number.parseFloat(element.style.getPropertyValue("--edit-scale-x")) || 1;
            const currentScaleY = Number.parseFloat(element.style.getPropertyValue("--edit-scale-y")) || 1;
            element.classList.add("edit-moved");
            element.style.setProperty("--edit-scale-x", `${Math.max(0.05, currentScaleX * scaleX).toFixed(3)}`);
            element.style.setProperty("--edit-scale-y", `${Math.max(0.05, currentScaleY * scaleY).toFixed(3)}`);
          }
          if (shouldKeepVisible && element.classList.contains("edit-moved")) {
            this.holdMotionNodeForEditing(element);
            element.style.setProperty("opacity", "1", "important");
          }
          this.storeStageBox(element, safe);
          this.rememberMotionStableBox(element, safe);
          return;
        }
        const slide = this.closestSlide(element);
        if (!slide) return;
        const slideBox = slide.getBoundingClientRect();
        const size = this.activeSlideDesignSize(slide);
        const parent = element.offsetParent || slide;
        const parentBox = parent.getBoundingClientRect();
        const scale = slideBox.width / size.width;
        const left = (parentBox.left - slideBox.left) / scale;
        const top = (parentBox.top - slideBox.top) / scale;
        const safeWidth = Math.min(size.width, Math.max(10, width));
        const safeHeight = Math.min(size.height, Math.max(10, height));
        const safeX = Math.max(0, Math.min(size.width - safeWidth, x));
        const safeY = Math.max(0, Math.min(size.height - safeHeight, y));
        element.style.position = "absolute";
        element.style.left = `${Math.round(safeX - left)}px`;
        element.style.top = `${Math.round(safeY - top)}px`;
        element.style.width = `${Math.round(safeWidth)}px`;
        element.style.height = `${Math.round(safeHeight)}px`;
        element.style.margin = "0";
        element.classList.remove("edit-moved");
        element.style.removeProperty("--edit-x");
        element.style.removeProperty("--edit-y");
        element.style.removeProperty("--edit-scale");
        element.style.removeProperty("--edit-scale-x");
        element.style.removeProperty("--edit-scale-y");
        element.style.removeProperty("--edit-base-transform");
        this.storeStageBox(element, { x: safeX, y: safeY, width: safeWidth, height: safeHeight });
        this.rememberMotionStableBox(element, { x: safeX, y: safeY, width: safeWidth, height: safeHeight });
      }

      updateFrame() {
        if (!this.selected || !this.isActive || !this.closestSlide(this.selected)) {
          this.frame.classList.remove("active");
          return;
        }
        const box = this.getFrameStageBox(this.selected);
        const clientBox = this.clientBoxFromStageBox(box);
        this.frame.style.left = `${clientBox.x}px`;
        this.frame.style.top = `${clientBox.y}px`;
        this.frame.style.width = `${clientBox.width}px`;
        this.frame.style.height = `${clientBox.height}px`;
        this.frame.dataset.smallSelection = String(box.width < 28 || box.height < 28);
        this.frame.classList.add("active");
      }

      stopMotionFrameTracking() {
        if (!this.motionFrameRaf) return;
        window.cancelAnimationFrame(this.motionFrameRaf);
        this.motionFrameRaf = null;
      }

      clearMotionCleanupTimer(element) {
        const timer = this.motionCleanupTimers.get(element);
        if (!timer) return;
        window.clearTimeout(timer);
        this.motionCleanupTimers.delete(element);
      }

      clearMotionParentStability(root) {
        if (!root) return;
        root.querySelectorAll(".editor-motion-parent-stable").forEach((node) => node.classList.remove("editor-motion-parent-stable"));
        this.motionStableAncestors = new WeakMap();
        this.motionAncestorCounts = new WeakMap();
      }

      clearElementMotionState(element) {
        if (!element) return;
        this.clearMotionCleanupTimer(element);
        this.releaseMotionAncestors(element);
        element.classList.remove("editor-motion-preview", "editor-motion-running");
        if (!element.dataset.editAnim) this.editorMotionClasses().forEach((className) => element.classList.remove(className));
        if (this.selected === element) this.stopMotionFrameTracking();
      }

      handleSlideChange(event) {
        if (this.motionHold || this.dragState) return;
        const index = Number.isFinite(event?.detail?.index) ? event.detail.index : this.presentation.currentSlide;
        const now = performance.now();
        if (this.lastSlideReplay.index === index && now - this.lastSlideReplay.at < 90) return;
        this.lastSlideReplay = { index, at: now };
        this.stopMotionFrameTracking();
        const slide = this.presentation.slides[index];
        if (this.isActive) {
          this.refreshEditableElements();
          this.revealActiveSlideForEditing(index);
          this.renderSlideRail();
        }
        if (this.isActive && this.selected && slide && this.closestSlide(this.selected) !== slide) {
          this.clearSelection();
        }
        if (!document.body.classList.contains("html-deck-editor-exporting")) {
          requestAnimationFrame(() => this.replayActiveSlideMotion(false));
        }
      }

      trackFrameDuringMotion(element, totalMs) {
        this.stopMotionFrameTracking();
        if (!element || !this.isActive || this.selected !== element) return;
        const endAt = performance.now() + Math.max(160, totalMs);
        const tick = () => {
          if (!this.isActive || this.selected !== element || !element.isConnected) {
            this.motionFrameRaf = null;
            this.updateFrame();
            return;
          }
          if (performance.now() < endAt) {
            this.motionFrameRaf = window.requestAnimationFrame(tick);
          } else {
            this.motionFrameRaf = null;
            this.updateFrame();
          }
        };
        this.motionFrameRaf = window.requestAnimationFrame(tick);
      }

      cssTimeListToMs(value) {
        return String(value || "0s").split(",").map((item) => {
          const time = item.trim();
          const number = Number.parseFloat(time);
          if (!Number.isFinite(number)) return 0;
          return time.endsWith("ms") ? number : number * 1000;
        });
      }

      motionFrameTrackDuration(element, fallback = 900) {
        const computed = window.getComputedStyle(element);
        const durations = [
          ...this.cssTimeListToMs(computed.transitionDuration),
          ...this.cssTimeListToMs(computed.animationDuration)
        ];
        const delays = [
          ...this.cssTimeListToMs(computed.transitionDelay),
          ...this.cssTimeListToMs(computed.animationDelay)
        ];
        const max = durations.reduce((total, duration, index) => {
          const delay = delays[index % Math.max(1, delays.length)] || 0;
          return Math.max(total, duration + delay);
        }, 0);
        return Math.max(fallback, max + 160);
      }

      getSnapTargets(element) {
        const active = this.activeSlide();
        const size = this.activeSlideDesignSize(active);
        const targets = {
          x: [
            { value: 0, bias: -6 },
            { value: size.width / 2, bias: -8 },
            { value: size.width, bias: -6 }
          ],
          y: [
            { value: 0, bias: -6 },
            { value: size.height / 2, bias: -8 },
            { value: size.height, bias: -6 }
          ]
        };
        this.getEditableElements().forEach((candidate) => {
          if (candidate === element || this.closestSlide(candidate) !== active) return;
          if (element.contains(candidate) || candidate.contains(element)) return;
          if (candidate.closest(".editor-frame") || candidate.closest(".editor-guide")) return;
          const box = this.getStageBox(candidate);
          if (box.width <= 0 || box.height <= 0) return;
          const bias = this.getSnapTargetBias(candidate);
          targets.x.push(
            { value: box.x, bias },
            { value: box.x + box.width / 2, bias },
            { value: box.x + box.width, bias }
          );
          targets.y.push(
            { value: box.y, bias },
            { value: box.y + box.height / 2, bias },
            { value: box.y + box.height, bias }
          );
        });
        return targets;
      }

      getSnapTargetBias(element) {
        if (this.isNestedSnapTarget(element)) return 4;
        if (element.matches("[data-editable-media], [data-editable-box], [data-editor-kind='media'], [data-editor-kind='box'], .editor-layer")) return 0;
        return 1;
      }

      isNestedSnapTarget(element) {
        const parentEditable = element.parentElement?.closest("[data-editable], [data-editable-media], [data-editable-box], [data-editor-kind], .editor-layer");
        return Boolean(parentEditable && parentEditable !== element && this.stage.contains(parentEditable));
      }

      snapBox(box, mode) {
        const next = { ...box };
        const targets = this.getSnapTargets(this.selected);
        const guides = { x: null, y: null };
        const threshold = this.snapThreshold;
        const best = {
          x: { score: Infinity, delta: 0, guide: null },
          y: { score: Infinity, delta: 0, guide: null }
        };

        const testAxis = (axis, sources) => {
          targets[axis].forEach((target) => {
            sources.forEach((source) => {
              const distance = Math.abs(source.value - target.value);
              const score = distance + target.bias;
              if (distance <= threshold && score < best[axis].score) {
                best[axis] = { score, delta: target.value - source.value, guide: target.value };
              }
            });
          });
        };

        if (mode === "move") {
          testAxis("x", [
            { value: next.x },
            { value: next.x + next.width / 2 },
            { value: next.x + next.width }
          ]);
          testAxis("y", [
            { value: next.y },
            { value: next.y + next.height / 2 },
            { value: next.y + next.height }
          ]);
          if (best.x.guide !== null) {
            next.x += best.x.delta;
            guides.x = best.x.guide;
          }
          if (best.y.guide !== null) {
            next.y += best.y.delta;
            guides.y = best.y.guide;
          }
        } else {
          testAxis("x", [{ value: next.x + next.width }]);
          testAxis("y", [{ value: next.y + next.height }]);
          if (best.x.guide !== null) {
            next.width = Math.max(24, next.width + best.x.delta);
            guides.x = best.x.guide;
          }
          if (best.y.guide !== null) {
            next.height = Math.max(24, next.height + best.y.delta);
            guides.y = best.y.guide;
          }
        }

        return { box: next, guides };
      }

      showGuides(guides) {
        const active = this.activeSlide();
        const slideRect = active.getBoundingClientRect();
        const size = this.activeSlideDesignSize(active);
        const scale = slideRect.width / size.width;
        if (guides.x !== null) {
          this.guideV.style.left = `${slideRect.left + guides.x * scale}px`;
          this.guideV.style.top = `${slideRect.top}px`;
          this.guideV.style.height = `${size.height * scale}px`;
          this.guideV.classList.add("active");
        } else {
          this.guideV.classList.remove("active");
        }
        if (guides.y !== null) {
          this.guideH.style.left = `${slideRect.left}px`;
          this.guideH.style.top = `${slideRect.top + guides.y * scale}px`;
          this.guideH.style.width = `${size.width * scale}px`;
          this.guideH.classList.add("active");
        } else {
          this.guideH.classList.remove("active");
        }
      }

      hideGuides() {
        this.guideV.classList.remove("active");
        this.guideH.classList.remove("active");
      }

      startPointerAction(event, mode) {
        if (!this.selected) return;
        event.preventDefault();
        event.stopPropagation();
        this.motionHold = true;
        window.clearTimeout(this.motionPreviewTimer);
        this.motionPreviewTimer = null;
        const slide = this.activeSlide();
        if (slide) this.clearMotionRunState(slide);
        const box = this.getStableStageBox(this.selected);
        const point = this.stagePointFromClient(event.clientX, event.clientY);
        this.dragState = {
          mode,
          startX: point.x,
          startY: point.y,
          box
        };
        if (event.target.setPointerCapture && event.pointerId !== undefined) {
          event.target.setPointerCapture(event.pointerId);
        }
      }

      handlePointerMove(event) {
        if (!this.dragState || !this.selected) return;
        if (event.pointerType === "mouse" && event.buttons === 0) {
          this.finishPointerAction();
          return;
        }
        const point = this.stagePointFromClient(event.clientX, event.clientY);
        const dx = point.x - this.dragState.startX;
        const dy = point.y - this.dragState.startY;
        const next = { ...this.dragState.box };
        if (this.dragState.mode === "move") {
          next.x += dx;
          next.y += dy;
        } else {
          next.width = Math.max(24, next.width + dx);
          next.height = Math.max(24, next.height + dy);
        }
        const snapped = this.snapBox(next, this.dragState.mode);
        const safe = this.clampStageBox(snapped.box);
        this.setStagePosition(this.selected, safe.x, safe.y, safe.width, safe.height);
        this.showGuides(snapped.guides);
        this.updateFrame();
        this.updateInspector();
      }

      finishPointerAction() {
        if (!this.dragState) return;
        const element = this.selected;
        this.dragState = null;
        this.hideGuides();
        this.motionHold = false;
        if (element) {
          this.reconcileStoredStagePosition(element, { mode: "sync" });
          this.updateFrame();
          this.updateInspector();
        }
        this.saveDraft(false, true);
      }

      addText() {
        const layer = document.createElement("div");
        const point = this.nextInsertPoint(460, 110);
        layer.className = "editor-layer text-layer editor-anim-rise";
        layer.dataset.editable = "";
        layer.dataset.editId = `layer-${Date.now()}`;
        layer.dataset.editAnim = "rise";
        layer.dataset.editDelay = "0";
        layer.dataset.editDuration = "640";
        layer.style.left = `${Math.round(point.x)}px`;
        layer.style.top = `${Math.round(point.y)}px`;
        layer.style.setProperty("--edit-delay", "0ms");
        layer.style.setProperty("--edit-duration", "640ms");
        layer.textContent = "双击编辑文字";
        this.activeSlide().appendChild(layer);
        this.bindElement(layer);
        this.select(layer);
        this.saveDraft();
      }

      addShape(shape = "rect") {
        const layer = document.createElement("div");
        const point = this.nextInsertPoint(280, 180);
        layer.className = "editor-layer shape-layer editor-anim-scale";
        layer.dataset.editId = `shape-${Date.now()}`;
        layer.dataset.editAnim = "scale";
        layer.dataset.editDelay = "0";
        layer.dataset.editDuration = "640";
        this.applyShape(layer, shape);
        layer.style.left = `${Math.round(point.x)}px`;
        layer.style.top = `${Math.round(point.y)}px`;
        layer.style.setProperty("--edit-delay", "0ms");
        layer.style.setProperty("--edit-duration", "640ms");
        this.activeSlide().appendChild(layer);
        this.bindElement(layer);
        this.select(layer);
        this.saveDraft();
      }

      addImage(dataUrl, x = this.lastInsert.x, y = this.lastInsert.y) {
        const point = arguments.length > 1 ? this.clampInsertPoint(x, y, 520, 320) : this.nextInsertPoint(520, 320);
        const wrapper = document.createElement("div");
        wrapper.className = "editor-layer image-layer editor-anim-scale";
        wrapper.dataset.editId = `image-${Date.now()}`;
        wrapper.dataset.editAnim = "scale";
        wrapper.dataset.editDelay = "0";
        wrapper.dataset.editDuration = "640";
        wrapper.style.left = `${Math.round(point.x)}px`;
        wrapper.style.top = `${Math.round(point.y)}px`;
        wrapper.style.setProperty("--edit-delay", "0ms");
        wrapper.style.setProperty("--edit-duration", "640ms");
        const image = document.createElement("img");
        image.src = dataUrl;
        image.alt = "用户添加的图片";
        wrapper.appendChild(image);
        this.activeSlide().appendChild(wrapper);
        this.bindElement(wrapper);
        this.select(wrapper);
        this.lastInsert = point;
        const stored = this.saveDraft(false);
        this.toastMessage(stored ? "图片已添加" : "图片已添加，但浏览器草稿空间不足；请立即保存 HTML");
      }

      applyShape(element, value) {
        element.dataset.shape = value || "rect";
        if (element.dataset.shape === "line") {
          element.style.height = `${Math.max(8, Number.parseInt(element.style.height || "14", 10) || 14)}px`;
        }
        if (!element.style.backgroundColor) element.style.backgroundColor = "rgba(31, 43, 224, 0.16)";
        this.updateInspector();
        this.updateFrame();
      }

      shapeLabel(value) {
        return {
          rect: "矩形",
          roundRect: "圆角矩形",
          circle: "圆形",
          triangle: "三角形",
          line: "直线",
          arrow: "箭头"
        }[value] || "矩形";
      }

      handleFileInput(event) {
        const file = event.target.files && event.target.files[0];
        if (!file) return;
        this.controls.imageName.textContent = file.name;
        this.readImageFile(file, (dataUrl) => {
          if (this.selected && this.isImageElement(this.selected)) {
            this.replaceImage(this.selected, dataUrl);
          } else {
            this.addImage(dataUrl);
          }
          this.controls.image.value = "";
          this.updateInspector();
        });
      }

      hasDraggedImage(event) {
        return Array.from(event.dataTransfer?.items || []).some((item) => item.type.startsWith("image/"));
      }

      handleDragEnter(event) {
        if (!this.isActive || !this.hasDraggedImage(event)) return;
        this.fileDragDepth += 1;
        this.handleDrag(event);
      }

      handleDrag(event) {
        if (!this.isActive) return;
        if (!this.hasDraggedImage(event)) return;
        event.preventDefault();
        document.body.classList.add("dragging-file");
        this.controls.dropZone.classList.add("dragging");
      }

      resetFileDragState() {
        this.fileDragDepth = 0;
        document.body.classList.remove("dragging-file");
        this.controls.dropZone.classList.remove("dragging");
      }

      clearDrag(event) {
        if (event.type === "drop") {
          this.resetFileDragState();
          return;
        }
        this.fileDragDepth = Math.max(0, this.fileDragDepth - 1);
        if (this.fileDragDepth > 0) return;
        this.resetFileDragState();
      }

      handleDrop(event) {
        if (!this.isActive) return;
        const files = Array.from(event.dataTransfer?.files || []);
        if (!files.length) return;
        event.preventDefault();
        this.resetFileDragState();
        const file = files.find((item) => item.type.startsWith("image/"));
        if (!file) {
          this.toastMessage("请拖入图片文件");
          return;
        }
        const isDropZone = Boolean(event.target.closest?.(".drop-zone"));
        const isStageDrop = event.target === this.stage || this.stage.contains(event.target);
        if (!isDropZone && !isStageDrop) {
          this.toastMessage("把图片拖到画布或图片区来添加");
          return;
        }
        let point = this.nextInsertPoint(520, 320);
        if (isStageDrop) {
          const rawPoint = this.stagePointFromClient(event.clientX, event.clientY);
          point = this.clampInsertPoint(rawPoint.x, rawPoint.y, 520, 320);
        }
        this.lastInsert = { x: point.x, y: point.y };
        const target = this.getEditableTarget(event.target);
        this.readImageFile(file, (dataUrl) => {
          if (target && this.isImageElement(target)) {
            this.replaceImage(target, dataUrl);
            this.select(target);
          } else if (this.selected && this.isImageElement(this.selected) && isDropZone) {
            this.replaceImage(this.selected, dataUrl);
          } else {
            this.addImage(dataUrl, point.x, point.y);
          }
        });
      }

      readImageFile(file, callback) {
        const reader = new FileReader();
        reader.addEventListener("load", () => callback(reader.result));
        reader.readAsDataURL(file);
      }

      replaceImage(element, dataUrl) {
        const image = element.tagName === "IMG" ? element : element.querySelector("img");
        if (image) {
          image.src = dataUrl;
          image.dataset.inlineImage = "true";
        } else {
          element.style.backgroundImage = `url("${dataUrl}")`;
          element.style.backgroundSize = "cover";
          element.style.backgroundPosition = "center";
          element.style.backgroundRepeat = "no-repeat";
          element.dataset.inlineImage = "true";
        }
        const stored = this.saveDraft(false);
        this.updateInspector();
        this.toastMessage(stored ? "图片已替换" : "图片已替换，但浏览器草稿空间不足；请立即保存 HTML");
      }

      motionClasses() {
        return ["reveal", "reveal-left", "reveal-scale"];
      }

      editorMotionClasses() {
        return ["editor-anim-none", "editor-anim-fade", "editor-anim-rise", "editor-anim-drop", "editor-anim-left", "editor-anim-right", "editor-anim-scale", "editor-anim-zoom", "editor-anim-pop", "editor-anim-rotate", "editor-anim-blur", "editor-anim-flip"];
      }

      motionTargetFor(element) {
        if (!element) return null;
        const slide = this.closestSlide(element);
        if (!slide) return element;
        const ownsMotion = (node) => Boolean(
          node.dataset.editAnim ||
          this.editorMotionClasses().some((className) => node.classList.contains(className)) ||
          this.motionClasses().some((className) => node.classList.contains(className)) ||
          this.shouldHoldMotionNode(node)
        );
        if (ownsMotion(element)) return element;
        let node = element.parentElement;
        while (node && node !== slide) {
          if (ownsMotion(node)) return node;
          node = node.parentElement;
        }
        return element;
      }

      ensureOriginalMotion(element) {
        if (!element || element.dataset.originalMotionClasses !== undefined) return;
        element.dataset.originalMotionClasses = this.motionClasses().filter((className) => element.classList.contains(className)).join(" ");
      }

      hasStoredOriginalMotion(element) {
        return Boolean(element && element.dataset.originalMotionClasses !== undefined);
      }

      originalMotionValue(element) {
        const classes = (element?.dataset.originalMotionClasses || "").split(/\s+/).filter(Boolean);
        if (classes.includes("reveal-left")) return "left";
        if (classes.includes("reveal-scale")) return "scale";
        if (classes.includes("reveal")) return "rise";
        return "";
      }

      currentMotionValue(element) {
        if (!element) return "";
        const custom = element.dataset.editAnim;
        if (custom) return custom;
        if (element.classList.contains("editor-anim-none")) return "none";
        if (element.classList.contains("editor-anim-fade")) return "fade";
        if (element.classList.contains("editor-anim-rise")) return "rise";
        if (element.classList.contains("editor-anim-drop")) return "drop";
        if (element.classList.contains("editor-anim-left")) return "left";
        if (element.classList.contains("editor-anim-right")) return "right";
        if (element.classList.contains("editor-anim-scale")) return "scale";
        if (element.classList.contains("editor-anim-zoom")) return "zoom";
        if (element.classList.contains("editor-anim-pop")) return "pop";
        if (element.classList.contains("editor-anim-rotate")) return "rotate";
        if (element.classList.contains("editor-anim-blur")) return "blur";
        if (element.classList.contains("editor-anim-flip")) return "flip";
        if (element.classList.contains("reveal-left")) return "left";
        if (element.classList.contains("reveal-scale")) return "scale";
        if (element.classList.contains("reveal")) return "rise";
        return "";
      }

      getMotionSelectValue(element) {
        return element?.dataset.editAnim || "";
      }

      usesCustomMotion(element) {
        return Boolean(element && element.dataset.editAnim && element.dataset.editAnim !== "none");
      }

      syncMotionControls(element) {
        const motionElement = this.motionTargetFor(element);
        if (!motionElement) return;
        this.controls.anim.value = this.getMotionSelectValue(motionElement);
        this.controls.order.value = motionElement.dataset.editOrder || "";
        this.controls.delay.value = Number.parseInt(motionElement.dataset.editDelay || "0", 10);
        this.controls.duration.value = Number.parseInt(motionElement.dataset.editDuration || "640", 10);
        this.controls.order.disabled = !this.usesCustomMotion(motionElement);
        this.controls.delay.disabled = !this.usesCustomMotion(motionElement);
        this.controls.duration.disabled = !this.usesCustomMotion(motionElement);
        this.controls.restoreMotion.disabled = !this.hasStoredOriginalMotion(motionElement);
        this.controls.motionStatus.textContent = this.getMotionStatus(motionElement);
      }

      motionLabel(value) {
        return {
          none: "无动效",
          fade: "淡入",
          rise: "上浮入场",
          drop: "下落入场",
          left: "左侧滑入",
          right: "右侧滑入",
          scale: "缩放入场",
          zoom: "缩小落定",
          pop: "弹出入场",
          rotate: "旋入",
          blur: "模糊显现",
          flip: "翻转入场"
        }[value] || "无原始动效";
      }

      getMotionStatus(element) {
        const custom = element.dataset.editAnim;
        if (custom) {
          if (custom === "none") return "自定义：无动效";
          const order = element.dataset.editOrder ? `，本页第 ${element.dataset.editOrder} 个出现` : "";
          return `自定义：${this.motionLabel(custom)}${order}，延迟 ${element.dataset.editDelay || 0}ms，时长 ${element.dataset.editDuration || 640}ms`;
        }
        return `原始：${this.motionLabel(this.currentMotionValue(element))}`;
      }

      motionDelayForOrder(order) {
        return Math.max(0, (Math.max(1, order) - 1) * 180);
      }

      normalizeMotionOrder(value, fallback = 1) {
        const number = Number.parseInt(value, 10);
        const safe = Number.isFinite(number) ? number : fallback;
        return Math.max(1, Math.min(99, safe));
      }

      nextMotionOrder(element) {
        const slide = this.closestSlide(element);
        if (!slide) return 1;
        const orders = Array.from(slide.querySelectorAll("[data-edit-anim]"))
          .filter((node) => node !== element && node.dataset.editAnim && node.dataset.editAnim !== "none")
          .map((node) => this.normalizeMotionOrder(node.dataset.editOrder, 0));
        return orders.length ? Math.max(...orders) + 1 : 1;
      }

      setMotionOrder(element, value, updateDelay = false) {
        const order = this.normalizeMotionOrder(value, this.nextMotionOrder(element));
        element.dataset.editOrder = String(order);
        element.style.setProperty("--edit-order", String(order));
        if (updateDelay) {
          const delay = this.motionDelayForOrder(order);
          element.dataset.editDelay = String(delay);
          element.style.setProperty("--edit-delay", `${delay}ms`);
          this.controls.delay.value = delay;
        }
        return order;
      }

      applyAnimation(element, value, preview = false) {
        if (!element) return;
        const stableBox = this.reconcileStoredStagePosition(element, { mode: "sync" }) || this.getStableStageBox(element);
        this.clearElementMotionState(element);
        this.rememberMotionStableBox(element, stableBox);
        this.ensureOriginalMotion(element);
        this.editorMotionClasses().forEach((className) => {
          element.classList.remove(className);
        });
        this.motionClasses().forEach((className) => element.classList.remove(className));

        if (!value) {
          this.restoreOriginalMotion(element, false);
          if (preview) this.previewMotion(element);
          return;
        }

        element.dataset.editAnim = value;
        if (value === "none") {
          element.classList.add("editor-anim-none");
          delete element.dataset.editOrder;
          delete element.dataset.editDelay;
          delete element.dataset.editDuration;
          element.style.removeProperty("--edit-order");
          element.style.removeProperty("--edit-delay");
          element.style.removeProperty("--edit-duration");
          this.toastMessage("已关闭选中元素动效");
          return;
        }

        const hasSavedDelay = element.dataset.editDelay !== undefined;
        const order = this.setMotionOrder(element, element.dataset.editOrder || this.nextMotionOrder(element), false);
        const delay = hasSavedDelay
          ? Math.max(0, Number(element.dataset.editDelay) || 0)
          : this.motionDelayForOrder(order);
        const duration = Math.max(100, Number(this.controls.duration.value) || Number(element.dataset.editDuration) || 640);
        element.dataset.editDelay = String(delay);
        element.dataset.editDuration = String(duration);
        element.classList.add(`editor-anim-${value}`);
        element.style.setProperty("--edit-delay", `${delay}ms`);
        element.style.setProperty("--edit-duration", `${duration}ms`);
        if (preview) this.previewMotion(element);
      }

      restoreOriginalMotion(element, shouldSave = true) {
        const motionElement = this.motionTargetFor(element);
        if (!motionElement) return;
        const original = (motionElement.dataset.originalMotionClasses || "").split(/\s+/).filter(Boolean);
        this.clearMotionCleanupTimer(motionElement);
        motionElement.classList.remove("editor-motion-preview", "editor-motion-running");
        this.editorMotionClasses().forEach((className) => motionElement.classList.remove(className));
        this.motionClasses().forEach((className) => motionElement.classList.remove(className));
        original.forEach((className) => motionElement.classList.add(className));
        delete motionElement.dataset.editAnim;
        delete motionElement.dataset.editOrder;
        delete motionElement.dataset.editDelay;
        delete motionElement.dataset.editDuration;
        delete motionElement.dataset.originalMotionClasses;
        motionElement.style.removeProperty("--edit-order");
        motionElement.style.removeProperty("--edit-delay");
        motionElement.style.removeProperty("--edit-duration");
        this.updateInspector();
        if (shouldSave) {
          this.saveDraft();
          this.previewMotion(motionElement);
        }
      }

      scheduleMotionPreview() {
        window.clearTimeout(this.motionPreviewTimer);
        this.motionPreviewTimer = window.setTimeout(() => this.previewMotion(), 180);
      }

      playableMotionTargets(slide) {
        if (!slide) return [];
        const selector = [
          "[data-edit-anim]",
          ...this.editorMotionClasses().map((className) => `.${className}`),
          ...this.motionClasses().map((className) => `.${className}`)
        ].join(", ");
        return Array.from(new Set(slide.querySelectorAll(selector))).filter((element) => {
          const value = this.currentMotionValue(element);
          return value && value !== "none";
        });
      }

      clearMotionRunState(root) {
        root.querySelectorAll(".editor-motion-preview, .editor-motion-running").forEach((node) => {
          this.clearElementMotionState(node);
        });
        this.clearMotionParentStability(root);
      }

      motionDurationForElement(element) {
        return Math.max(100, Number(element.dataset.editDuration) || Number(this.controls.duration.value) || 640);
      }

      motionDelayForElement(element) {
        return Math.max(0, Number(element.dataset.editDelay) || Number(this.controls.delay.value) || 0);
      }

      stabilizeMotionAncestors(element) {
        const slide = this.closestSlide(element);
        if (!element || !slide) return;
        this.releaseMotionAncestors(element);
        const ancestors = [];
        let node = element.parentElement;
        while (node && node !== slide) {
          if (this.motionClasses().some((className) => node.classList.contains(className))) {
            const count = this.motionAncestorCounts.get(node) || 0;
            this.motionAncestorCounts.set(node, count + 1);
            node.classList.add("editor-motion-parent-stable");
            ancestors.push(node);
          }
          node = node.parentElement;
        }
        if (ancestors.length) this.motionStableAncestors.set(element, ancestors);
      }

      releaseMotionAncestors(element) {
        const ancestors = this.motionStableAncestors.get(element);
        if (!ancestors) return;
        ancestors.forEach((node) => {
          const next = Math.max(0, (this.motionAncestorCounts.get(node) || 0) - 1);
          if (next) {
            this.motionAncestorCounts.set(node, next);
          } else {
            this.motionAncestorCounts.delete(node);
            node.classList.remove("editor-motion-parent-stable");
          }
        });
        this.motionStableAncestors.delete(element);
      }

      usesEditorMotionPlayback(element, className = "") {
        return Boolean(
          element &&
          (
            className === "editor-motion-preview" ||
            element.dataset.editAnim ||
            element.classList.contains("edit-moved") ||
            this.editorMotionClasses().some((motionClass) => element.classList.contains(motionClass))
          )
        );
      }

      restartElementMotion(element, className = "editor-motion-running") {
        if (!element) return;
        const value = this.currentMotionValue(element);
        if (!value || value === "none") {
          return false;
        }
        this.reconcileStoredStagePosition(element);
        this.rememberMotionStableBox(element, this.getStableStageBox(element));
        const previewClass = `editor-anim-${value}`;
        const hadClass = element.classList.contains(previewClass);
        const usesEditorMotion = this.usesEditorMotionPlayback(element, className);
        const duration = this.motionDurationForElement(element);
        const delay = this.motionDelayForElement(element);
        this.clearMotionCleanupTimer(element);
        if (usesEditorMotion) {
          element.style.setProperty("--edit-delay", `${delay}ms`);
          element.style.setProperty("--edit-duration", `${duration}ms`);
        }
        element.classList.remove("editor-motion-preview", "editor-motion-running");
        void element.offsetWidth;
        if (usesEditorMotion) {
          this.stabilizeMotionAncestors(element);
          element.classList.add(previewClass);
        }
        element.classList.add(className);
        this.trackFrameDuringMotion(element, delay + duration + 160);
        const cleanupTimer = window.setTimeout(() => {
          element.classList.remove(className);
          if (!hadClass && !element.dataset.editAnim) element.classList.remove(previewClass);
          this.releaseMotionAncestors(element);
          this.motionCleanupTimers.delete(element);
        }, delay + duration + 120);
        this.motionCleanupTimers.set(element, cleanupTimer);
        return true;
      }

      restartLegacySlideMotion(slide) {
        const hasLegacyMotion = this.motionClasses().some((className) => slide.querySelector(`.${className}`));
        if (!hasLegacyMotion) return;
        slide.classList.remove("visible");
        void slide.offsetWidth;
        slide.classList.add("visible");
      }

      previewMotion(element = this.selected) {
        if (!this.restartElementMotion(this.motionTargetFor(element), "editor-motion-preview")) {
          this.toastMessage("当前元素没有可预览的入场动效");
        }
      }

      replayActiveSlideMotion(showToast = true) {
        const slide = this.presentation.slides[this.presentation.currentSlide];
        if (!slide) return;
        this.clearMotionRunState(slide);
        const targets = this.playableMotionTargets(slide);
        targets.forEach((element) => {
          if (this.usesEditorMotionPlayback(element, "editor-motion-running")) this.stabilizeMotionAncestors(element);
        });
        void slide.offsetWidth;
        this.restartLegacySlideMotion(slide);
        targets.forEach((element) => this.restartElementMotion(element));
        if (showToast) this.toastMessage("已重播本页动效");
      }

      bumpZIndex(delta) {
        if (!this.selected) return;
        const current = Number.parseInt(window.getComputedStyle(this.selected).zIndex, 10);
        const next = Number.isFinite(current) ? current + delta : 20 + delta;
        this.selected.style.zIndex = String(Math.max(1, next));
        this.saveDraft();
      }

      canDeleteElement(element) {
        return Boolean(
          element &&
          element.isConnected &&
          this.stage.contains(element) &&
          this.closestSlide(element) &&
          !element.matches(".slide, .deck-stage, #deckStage, .editor-frame, .editor-guide, .editor-shell")
        );
      }

      confirmDeleteSelected() {
        if (!this.canDeleteElement(this.selected)) return;
        if (this.hasSeenDeleteConfirm()) {
          this.deleteSelected();
          return;
        }
        this.openConfirm({
          title: "确认删除",
          message: "删除后会从当前页面移除这个选中元素，并写入本地草稿。后续删除不再弹窗；你仍然可以立刻用撤回恢复。",
          okText: "删除",
          action: () => {
            this.markDeleteConfirmSeen();
            this.deleteSelected();
          }
        });
      }

      hasSeenDeleteConfirm() {
        return this.readStoredValue(this.deleteConfirmKey) === "true";
      }

      markDeleteConfirmSeen() {
        this.writeStoredValue(this.deleteConfirmKey, "true");
      }

      deleteSelected() {
        if (!this.canDeleteElement(this.selected)) return;
        const element = this.selected;
        this.removeCommentsForElement(element);
        element.remove();
        this.clearSelection();
        this.saveDraft();
      }

      cleanEditorArtifacts(root) {
        root.querySelectorAll("[data-html-deck-editor-ui]").forEach((node) => node.remove());
        root.querySelectorAll(".editor-selected").forEach((node) => node.classList.remove("editor-selected"));
        root.querySelectorAll(".editor-motion-parent-stable").forEach((node) => node.classList.remove("editor-motion-parent-stable"));
        root.querySelectorAll(".html-deck-editor-edit-visible").forEach((node) => node.classList.remove("html-deck-editor-edit-visible"));
        root.querySelectorAll(".editor-motion-preview, .editor-motion-running").forEach((node) => {
          node.classList.remove("editor-motion-preview", "editor-motion-running");
          if (!node.dataset.editAnim) this.editorMotionClasses().forEach((className) => node.classList.remove(className));
        });
        root.querySelectorAll("[contenteditable]").forEach((node) => node.removeAttribute("contenteditable"));
        root.querySelectorAll("[data-ai-commented]").forEach((node) => node.removeAttribute("data-ai-commented"));
        root.querySelectorAll("[data-editor-bound]").forEach((node) => delete node.dataset.editorBound);
        root.querySelectorAll("[data-html-deck-editor-motion-hold], [data-html-deck-editor-export-visible]").forEach((node) => {
          node.removeAttribute("data-html-deck-editor-motion-hold");
          node.removeAttribute("data-html-deck-editor-export-visible");
          node.style.removeProperty("--html-deck-editor-edit-opacity");
        });
        root.querySelectorAll("[data-editor-auto], [data-editor-kind], [data-editor-small]").forEach((node) => {
          delete node.dataset.editorAuto;
          delete node.dataset.editorKind;
          delete node.dataset.editorSmall;
        });
        root.querySelectorAll("[data-html-deck-editor-current], [data-html-deck-editor-page]").forEach((node) => {
          node.removeAttribute("data-html-deck-editor-current");
          node.removeAttribute("data-html-deck-editor-page");
        });
        root.querySelectorAll("[data-html-deck-editor-stage='preserve']").forEach((node) => {
          delete node.dataset.htmlDeckEditorCurrentSlide;
          node.style.removeProperty("--html-deck-editor-stage-x");
          node.style.removeProperty("--html-deck-editor-stage-y");
          node.style.removeProperty("--html-deck-editor-stage-scale");
          node.style.removeProperty("--html-deck-editor-current-slide");
          node.style.removeProperty("--html-deck-editor-slide-offset-x");
        });
      }

      serialize() {
        const stageClone = this.stage.cloneNode(true);
        this.cleanEditorArtifacts(stageClone);
        return { stage: stageClone.innerHTML, comments: this.normalizeComments(this.comments) };
      }

      saveDraft(showToast = true, recordHistory = true) {
        const data = this.serialize();
        const snapshot = JSON.stringify(data);
        if (recordHistory) {
          this.hasPendingHistoryChange = false;
          this.pushHistory(snapshot);
        }
        const stored = this.writeStoredValue(this.storageKey, snapshot);
        if (showToast) {
          this.toastMessage(stored
            ? "已保存到本地草稿；点“保存 HTML”才会写入文件"
            : "浏览器草稿空间不足；撤回仍可用，请尽快保存 HTML");
        }
        return stored;
      }

      restore() {
        const raw = this.readStoredDraft();
        if (!raw) return;
        try {
          const data = JSON.parse(raw);
          if (data.stage) this.restoreSnapshot(data);
          this.writeStoredValue(this.storageKey, raw);
        } catch (error) {
          this.removeStoredValue(this.storageKey);
        }
      }

      readStoredDraft() {
        const current = this.readStoredValue(this.storageKey);
        if (current) return current;
        for (const key of this.legacyStorageKeys) {
          const legacy = this.readStoredValue(key);
          if (legacy) return legacy;
        }
        return "";
      }

      readStoredValue(key) {
        try {
          return localStorage.getItem(key);
        } catch (error) {
          return null;
        }
      }

      writeStoredValue(key, value) {
        try {
          localStorage.setItem(key, value);
          return true;
        } catch (error) {
          return false;
        }
      }

      removeStoredValue(key) {
        try {
          localStorage.removeItem(key);
          return true;
        } catch (error) {
          return false;
        }
      }

      resetDraft() {
        this.removeStoredValue(this.storageKey);
        this.removeStoredValue(this.deleteConfirmKey);
        this.legacyStorageKeys.forEach((key) => this.removeStoredValue(key));
        this.toastMessage("本地草稿已清除，刷新后读取 HTML 文件本身");
      }

      confirmResetDraft() {
        this.openConfirm({
          title: "确认重置编辑",
          message: "这只会清除当前浏览器里的自动保存草稿和旧版草稿记录，不会删除或改写 HTML 文件。刷新后会重新读取文件本身；如果文件已经被覆盖保存过，看到的仍然是保存后的内容。",
          okText: "重置",
          action: () => this.resetDraft()
        });
      }

      pushHistory(data = this.serialize()) {
        if (this.isRestoringHistory) return;
        const snapshot = typeof data === "string" ? data : JSON.stringify(data);
        if (this.undoStack[this.historyIndex] === snapshot) {
          this.updateHistoryButtons();
          return;
        }
        if (this.historyIndex < this.undoStack.length - 1) {
          this.undoStack = this.undoStack.slice(0, this.historyIndex + 1);
        }
        this.undoStack.push(snapshot);
        this.trimHistoryStack();
        this.historyIndex = this.undoStack.length - 1;
        this.updateHistoryButtons();
      }

      trimHistoryStack() {
        while (this.undoStack.length > this.historyLimit) this.undoStack.shift();
        while (this.undoStack.length > 2 && this.historyCharacterCount() > this.historyCharacterLimit) {
          this.undoStack.shift();
        }
      }

      historyCharacterCount() {
        return this.undoStack.reduce((total, snapshot) => total + snapshot.length, 0);
      }

      markPendingHistoryChange() {
        if (this.isRestoringHistory) return;
        this.hasPendingHistoryChange = true;
        this.updateHistoryButtons();
      }

      commitPendingHistoryChange() {
        if (!this.hasPendingHistoryChange) return;
        this.hasPendingHistoryChange = false;
        this.pushHistory();
      }

      undo() {
        this.commitPendingHistoryChange();
        if (this.historyIndex <= 0) return;
        this.historyIndex -= 1;
        const snapshot = this.undoStack[this.historyIndex];
        this.isRestoringHistory = true;
        try {
          this.restoreSnapshot(JSON.parse(snapshot));
          this.writeStoredValue(this.storageKey, snapshot);
        } finally {
          this.isRestoringHistory = false;
          this.updateHistoryButtons();
        }
        this.toastMessage("已撤回");
      }

      redo() {
        this.commitPendingHistoryChange();
        if (this.historyIndex >= this.undoStack.length - 1) return;
        this.historyIndex += 1;
        const snapshot = this.undoStack[this.historyIndex];
        this.isRestoringHistory = true;
        try {
          this.restoreSnapshot(JSON.parse(snapshot));
          this.writeStoredValue(this.storageKey, snapshot);
        } finally {
          this.isRestoringHistory = false;
          this.updateHistoryButtons();
        }
        this.toastMessage("已重做");
      }

      updateHistoryButtons() {
        this.controls.undo.disabled = !this.hasPendingHistoryChange && this.historyIndex <= 0;
        this.controls.redo.disabled = this.hasPendingHistoryChange || this.historyIndex >= this.undoStack.length - 1;
      }

      restoreSnapshot(data) {
        this.hasPendingHistoryChange = false;
        this.comments = this.normalizeComments(data.comments);
        this.stage.innerHTML = data.stage;
        this.cleanEditorArtifacts(this.stage);
        this.attachFrame();
        this.selected = null;
        this.presentation.slides = stageSlides(this.stage);
        this.presentation.injectChrome?.();
        this.hideDeckResetControl();
        this.prepareEditableElements();
        this.prepareEditableIds();
        this.bindEditableEvents();
        const page = Number.parseInt(window.location.hash.replace("#", ""), 10);
        this.presentation.showSlide(Number.isFinite(page) ? page - 1 : this.presentation.currentSlide);
        this.renderSlideRail();
        this.syncCommentMarkers();
        this.renderComments();
        this.updateInspector();
      }

      cleanCloneForExport(clone, options = {}) {
        const preserveAiAnchors = options.preserveAiAnchors === true;
        if (options.stripExportAssets === true) clone.querySelector("#html-deck-editor-export-assets")?.remove();
        clone.querySelectorAll("[data-generated-chrome], [data-html-deck-editor-ui]").forEach((node) => node.remove());
        clone.querySelectorAll(".editor-selected").forEach((node) => node.classList.remove("editor-selected"));
        clone.querySelectorAll(".editor-motion-parent-stable").forEach((node) => node.classList.remove("editor-motion-parent-stable"));
        clone.querySelectorAll("[contenteditable]").forEach((node) => node.removeAttribute("contenteditable"));
        clone.querySelectorAll("[data-ai-commented]").forEach((node) => node.removeAttribute("data-ai-commented"));
        if (!preserveAiAnchors) clone.querySelectorAll("[data-ai-anchor]").forEach((node) => node.removeAttribute("data-ai-anchor"));
        clone.querySelectorAll("[data-editor-bound], [data-edit-id], [data-inline-image], [data-original-motion-classes]").forEach((node) => {
          delete node.dataset.editorBound;
          delete node.dataset.editId;
          delete node.dataset.inlineImage;
          delete node.dataset.originalMotionClasses;
        });
        clone.querySelectorAll("[data-html-deck-editor-motion-hold], [data-html-deck-editor-export-visible]").forEach((node) => {
          node.removeAttribute("data-html-deck-editor-motion-hold");
          node.removeAttribute("data-html-deck-editor-export-visible");
          node.style.removeProperty("--html-deck-editor-edit-opacity");
        });
        clone.querySelectorAll(".html-deck-editor-edit-visible").forEach((node) => node.classList.remove("html-deck-editor-edit-visible"));
        clone.querySelectorAll("[data-editor-auto], [data-editor-kind], [data-editor-small]").forEach((node) => {
          delete node.dataset.editorAuto;
          delete node.dataset.editorKind;
          delete node.dataset.editorSmall;
        });
        clone.querySelectorAll("[data-html-deck-editor-current], [data-html-deck-editor-page]").forEach((node) => {
          node.removeAttribute("data-html-deck-editor-current");
          node.removeAttribute("data-html-deck-editor-page");
        });
        clone.querySelectorAll(".editor-motion-preview, .editor-motion-running").forEach((node) => {
          node.classList.remove("editor-motion-preview", "editor-motion-running");
          if (!node.dataset.editAnim) this.editorMotionClasses().forEach((className) => node.classList.remove(className));
        });
        clone.querySelectorAll("[data-html-deck-editor-stage='preserve']").forEach((node) => {
          resetPreservedStageForExport(node);
          delete node.dataset.htmlDeckEditorCurrentSlide;
          node.style.removeProperty("--html-deck-editor-stage-x");
          node.style.removeProperty("--html-deck-editor-stage-y");
          node.style.removeProperty("--html-deck-editor-stage-scale");
          node.style.removeProperty("--html-deck-editor-current-slide");
          node.style.removeProperty("--html-deck-editor-slide-offset-x");
        });
        clone.querySelectorAll("[style]").forEach((node) => {
          node.style.removeProperty("--html-deck-editor-slide-x");
          node.style.removeProperty("--html-deck-editor-slide-y");
          node.style.removeProperty("--html-deck-editor-slide-scale");
          node.style.removeProperty("--html-deck-editor-stage-x");
          node.style.removeProperty("--html-deck-editor-stage-y");
          node.style.removeProperty("--html-deck-editor-stage-scale");
          node.style.removeProperty("--html-deck-editor-current-slide");
          node.style.removeProperty("--html-deck-editor-slide-offset-x");
          node.style.removeProperty("--html-deck-editor-edit-opacity");
          node.style.removeProperty("--deck-stage-inset-left");
          node.style.removeProperty("--deck-stage-inset-right");
          node.style.removeProperty("--deck-stage-inset-top");
          node.style.removeProperty("--deck-stage-inset-bottom");
        });
        const body = clone.querySelector("body");
        if (body) body.classList.remove("editing", "editor-on", "dragging-file", "commenting");
      }

      buildExportHtml() {
        const clone = document.documentElement.cloneNode(true);
        this.cleanCloneForExport(clone);
        return "<!doctype html>\n" + clone.outerHTML;
      }

      buildAiHandoffHtml() {
        const clone = document.documentElement.cloneNode(true);
        this.cleanCloneForExport(clone, { preserveAiAnchors: true, stripExportAssets: true });
        return "<!doctype html>\n" + clone.outerHTML;
      }

      buildAiHandoffPayload() {
        return {
          html: this.buildAiHandoffHtml(),
          instructions: [
            "根据用户批注修改当前 HTML。",
            "保持 deck-stage 结构；每一页 slide 仍应是 deck-stage 的直接子元素。",
            "保留可编辑 HTML，不要把整页或整块内容改成截图。",
            "保留现有图片和其他资源路径；不要重命名、移动或删除资源文件，除非用户批注明确要求。",
            "完成修改后直接返回完整、可保存为 index.html 的 HTML，不要只返回代码片段或修改建议。",
            "尽量保留 data-ai-anchor；若删除被批注元素，请在回复中说明。"
          ],
          comments: this.sortedComments().map((comment) => {
            const element = this.findElementByAiAnchor(comment.anchor);
            return {
              anchor: comment.anchor,
              slide: element ? this.slideNumberForElement(element) : comment.slide,
              target: element ? this.getSelectionLabel(element) : comment.label,
              snippet: element ? this.commentSnippet(element) : comment.snippet,
              text: comment.text
            };
          })
        };
      }

      buildAiHandoffMarkdown() {
        const payload = this.buildAiHandoffPayload();
        const instructions = payload.instructions.map((item, index) => `${index + 1}. ${item}`).join("\n");
        const comments = payload.comments.length
          ? payload.comments.map((comment, index) => this.formatAiComment(comment, index)).join("\n\n")
          : "暂无批注。";
        return `# for-ai\n\n## 修改要求\n${instructions}\n\n## 用户批注\n${comments}\n\n## 当前 HTML\n\n\`\`\`\`html\n${payload.html}\n\`\`\`\`\n`;
      }

      formatAiComment(comment, index) {
        const slide = comment.slide ? `Slide ${String(comment.slide).padStart(2, "0")}` : "未知页";
        const lines = [
          `${index + 1}. anchor: \`${comment.anchor}\``,
          `   slide: ${slide}`,
          `   target: ${comment.target || "未知元素"}`,
          `   note: ${this.escapeMarkdown(comment.text)}`
        ];
        if (comment.snippet) lines.push(`   snippet: ${this.escapeMarkdown(comment.snippet)}`);
        return lines.join("\n");
      }

      escapeMarkdown(text) {
        return String(text || "").replace(/\s+/g, " ").trim().replace(/`/g, "\\`");
      }

      syncPendingCommentForAiExport() {
        if (!this.selected || !this.controls.commentInput || this.controls.commentInput.disabled) return false;
        const text = (this.controls.commentInput.value || "").trim();
        const anchor = this.selected.dataset.aiAnchor || "";
        const savedText = anchor ? (this.comments[anchor]?.text || "") : "";
        if (text === savedText) return false;
        if (text) return this.saveCommentForSelected({ silent: true, recordHistory: false });
        if (anchor && savedText) return this.clearCommentForSelected({ silent: true, recordHistory: false });
        return false;
      }

      exportForAi() {
        const syncedComment = this.syncPendingCommentForAiExport();
        this.saveDraft(false, false);
        this.downloadText(this.buildAiHandoffMarkdown(), "for-ai.md", "text/markdown;charset=utf-8");
        this.toastMessage(syncedComment ? "已保存当前批注并下载 for-ai.md，HTML 未改动" : "已下载 for-ai.md，HTML 未改动");
      }

      openExportModal() {
        this.presentation.slides = stageSlides(this.stage);
        this.renderExportPageList();
        this.controls.exportModal.hidden = false;
        this.controls.exportStatus.textContent = `已选择全部 ${this.presentation.slides.length} 页`;
        this.controls.exportStart.disabled = this.presentation.slides.length === 0;
      }

      closeExportModal() {
        if (this.isExporting) return;
        this.controls.exportModal.hidden = true;
      }

      renderExportPageList() {
        this.controls.exportPageList.innerHTML = "";
        this.presentation.slides.forEach((slide, index) => {
          const label = document.createElement("label");
          label.className = "editor-export-page";
          const checkbox = document.createElement("input");
          checkbox.type = "checkbox";
          checkbox.value = String(index);
          checkbox.checked = true;
          checkbox.addEventListener("change", () => this.updateExportSelectionStatus());
          const number = document.createElement("span");
          number.className = "editor-export-page-number";
          number.textContent = String(index + 1).padStart(2, "0");
          const title = document.createElement("span");
          title.className = "editor-export-page-title";
          title.textContent = this.exportSlideTitle(slide, index);
          label.append(checkbox, number, title);
          this.controls.exportPageList.appendChild(label);
        });
      }

      exportSlideTitle(slide, index) {
        return slide?.dataset?.title || slide?.getAttribute?.("aria-label") || slide?.querySelector?.("h1, h2, h3, [data-title]")?.textContent?.trim() || `Slide ${index + 1}`;
      }

      selectExportPages(mode) {
        const current = normalizeSlideIndex(this.presentation.currentSlide, this.presentation.slides);
        this.controls.exportPageList.querySelectorAll("input[type='checkbox']").forEach((input) => {
          input.checked = mode === "all" || (mode === "current" && Number(input.value) === current);
        });
        this.updateExportSelectionStatus();
      }

      selectedExportPageIndexes() {
        return Array.from(this.controls.exportPageList.querySelectorAll("input[type='checkbox']:checked"))
          .map((input) => Number(input.value))
          .filter((index) => Number.isInteger(index) && index >= 0 && index < this.presentation.slides.length)
          .sort((a, b) => a - b);
      }

      updateExportSelectionStatus() {
        const count = this.selectedExportPageIndexes().length;
        this.controls.exportStart.disabled = count === 0 || this.isExporting;
        this.controls.exportStatus.textContent = count ? `已选择 ${count} 页` : "请至少选择一页";
      }

      selectedExportFormat() {
        return this.controls.exportModal.querySelector("input[name='editorExportFormat']:checked")?.value || "pdf";
      }

      setExportBusy(busy) {
        this.isExporting = busy;
        [this.controls.exportClose, this.controls.exportCancel, this.controls.exportCurrent, this.controls.exportAll, this.controls.exportNone]
          .forEach((control) => { control.disabled = busy; });
        this.controls.exportModal.querySelectorAll("input").forEach((input) => { input.disabled = busy; });
        this.controls.exportStart.disabled = busy || this.selectedExportPageIndexes().length === 0;
        this.controls.exportStart.textContent = busy ? "正在导出…" : "开始导出";
      }

      async exportSelectedPages() {
        if (this.isExporting) return;
        const indexes = this.selectedExportPageIndexes();
        if (!indexes.length) {
          this.updateExportSelectionStatus();
          return;
        }
        const format = this.selectedExportFormat();
        let exportState = null;
        let succeeded = false;
        this.setExportBusy(true);
        try {
          this.assertExportDependencies(format, indexes.length);
          exportState = this.beginExportState();
          await this.waitForExportFonts();
          const captures = [];
          for (let position = 0; position < indexes.length; position += 1) {
            const index = indexes[position];
            this.controls.exportStatus.textContent = `正在渲染第 ${index + 1} 页（${position + 1} / ${indexes.length}）`;
            this.presentation.showSlide(index);
            this.refreshEditableElements();
            await this.waitForAnimationFrames(2);
            const slide = this.presentation.slides[index];
            captures.push(await this.captureExportSlide(slide, index));
          }
          this.controls.exportStatus.textContent = "正在生成下载文件…";
          if (format === "pdf") {
            await this.exportCapturesAsPdf(captures);
          } else {
            await this.exportCapturesAsImages(captures, format);
          }
          succeeded = true;
          this.controls.exportStatus.textContent = `已导出 ${captures.length} 页`;
          this.toastMessage(`已导出 ${captures.length} 页 ${format.toUpperCase()}`);
        } catch (error) {
          const message = error?.message || "导出失败";
          this.controls.exportStatus.textContent = message;
          this.toastMessage(message);
        } finally {
          if (exportState) await this.restoreExportState(exportState);
          this.setExportBusy(false);
          if (succeeded) this.closeExportModal();
        }
      }

      assertExportDependencies(format, pageCount = 1) {
        if (!window.htmlToImage?.toCanvas) throw new Error("图片渲染组件未加载，请刷新页面后重试");
        if (format === "pdf" && !window.jspdf?.jsPDF) throw new Error("PDF 组件未加载，请刷新页面后重试");
        if (format !== "pdf" && pageCount > 1 && !window.JSZip) throw new Error("ZIP 组件未加载，请刷新页面后重试");
      }

      beginExportState() {
        const state = {
          currentSlide: this.presentation.currentSlide,
          selected: this.selected,
          bodyEditing: document.body.classList.contains("editing"),
          bodyEditorOn: document.body.classList.contains("editor-on"),
          editorInsets: { ...(this.presentation.editorInsets || zeroInsets()) }
        };
        this.selected?.classList.remove("editor-selected");
        this.selected = null;
        this.frame.classList.remove("active");
        document.body.classList.add("html-deck-editor-exporting");
        document.body.classList.remove("editing", "editor-on");
        this.exportPseudoImageSelectors = this.collectPseudoImageSelectors();
        this.presentation.setEditorInsets?.(zeroInsets());
        return state;
      }

      async restoreExportState(state) {
        this.presentation.showSlide(state.currentSlide);
        this.presentation.setEditorInsets?.(state.editorInsets);
        document.body.classList.remove("html-deck-editor-exporting");
        document.body.classList.toggle("editing", state.bodyEditing);
        document.body.classList.toggle("editor-on", state.bodyEditorOn);
        this.renderSlideRail();
        await this.waitForAnimationFrames(1);
        if (state.selected?.isConnected) this.select(state.selected);
        else this.clearSelection();
      }

      async waitForExportFonts() {
        const pending = Array.from(this.onlineFontPromises.values());
        if (pending.length) await Promise.all(pending);
        const failed = document.querySelector("link[data-html-deck-editor-online-font][data-html-deck-editor-font-state='error']");
        if (failed) {
          const font = ONLINE_FONTS.find((item) => item.id === failed.dataset.htmlDeckEditorOnlineFont);
          throw new Error(`联网字体“${font?.label || "未知字体"}”加载失败，已停止导出`);
        }
        if (document.fonts?.ready) {
          await Promise.race([
            document.fonts.ready,
            new Promise((_, reject) => window.setTimeout(() => reject(new Error("字体加载超时，已停止导出")), 15000))
          ]);
        }
      }

      waitForAnimationFrames(count = 1) {
        return new Promise((resolve) => {
          const next = () => {
            if (count <= 0) {
              resolve();
              return;
            }
            count -= 1;
            requestAnimationFrame(next);
          };
          next();
        });
      }

      shortResourceUrl(value) {
        const text = String(value || "");
        return text.length > 90 ? `${text.slice(0, 87)}…` : text;
      }

      rememberAttribute(element, name, restore) {
        const hadAttribute = element.hasAttribute(name);
        const value = element.getAttribute(name);
        restore.push(() => {
          if (hadAttribute) element.setAttribute(name, value);
          else element.removeAttribute(name);
        });
      }

      rememberInlineStyle(element, property, restore) {
        const value = element.style.getPropertyValue(property);
        const priority = element.style.getPropertyPriority(property);
        restore.push(() => {
          if (value) element.style.setProperty(property, value, priority);
          else element.style.removeProperty(property);
        });
      }

      async prepareSlideForExport(slide, index) {
        const restore = [];
        const cleanup = () => {
          for (let i = restore.length - 1; i >= 0; i -= 1) restore[i]();
        };
        try {
          this.clearMotionRunState(slide);
          this.prepareExportVisibility(slide, restore);
          await this.inlineSlideResourcesForExport(slide, index, restore);
          return cleanup;
        } catch (error) {
          cleanup();
          throw error;
        }
      }

      prepareExportVisibility(slide, restore) {
        const targets = new Set();
        this.getEditableElements()
          .filter((element) => this.closestSlide(element) === slide && (this.isTextElement(element) || element.classList.contains("edit-moved")))
          .forEach((element) => {
            this.motionHoldTargetsFor(element, slide).forEach((node) => targets.add(node));
          });
        targets.forEach((node) => this.forceExportVisible(node, restore));
      }

      forceExportVisible(node, restore) {
        if (!node?.style) return;
        this.rememberAttribute(node, "data-html-deck-editor-export-visible", restore);
        ["opacity", "visibility", "filter"].forEach((property) => this.rememberInlineStyle(node, property, restore));
        node.setAttribute("data-html-deck-editor-export-visible", "");
        node.style.setProperty("opacity", "1", "important");
        node.style.setProperty("visibility", "visible", "important");
        node.style.setProperty("filter", "none", "important");
      }

      async inlineSlideResourcesForExport(slide, index, restore) {
        const cache = new Map();
        for (const image of Array.from(slide.querySelectorAll("img"))) {
          await this.inlineHtmlImageForExport(image, index, restore, cache);
        }
        for (const image of Array.from(slide.querySelectorAll("image"))) {
          await this.inlineSvgImageForExport(image, index, restore, cache);
        }
        for (const video of Array.from(slide.querySelectorAll("video[poster]"))) {
          await this.inlineVideoPosterForExport(video, index, restore, cache);
        }
        for (const element of [slide, ...slide.querySelectorAll("*")]) {
          await this.inlineCssImagesForExport(element, index, restore, cache);
          await this.inlinePseudoCssImagesForExport(element, index, restore, cache);
        }
      }

      async inlineHtmlImageForExport(image, index, restore, cache) {
        const source = this.imageExportSource(image);
        if (!source) return;
        if (this.isDataResourceUrl(source)) return;
        let dataUrl = this.exportAssetDataUrl(source);
        if (!dataUrl) {
          await this.waitForExportImageLoad(image, index, source);
          try {
            dataUrl = this.imageElementToDataUrl(image, source);
          } catch (error) {
            dataUrl = await this.exportResourceDataUrl(source, index, cache);
          }
        }
        this.rememberAttribute(image, "src", restore);
        this.rememberAttribute(image, "srcset", restore);
        image.setAttribute("src", dataUrl);
        image.removeAttribute("srcset");
        if ("src" in image) image.src = dataUrl;
        if ("srcset" in image) image.srcset = "";

        const picture = image.closest("picture");
        if (picture) {
          picture.querySelectorAll("source").forEach((sourceElement) => {
            this.rememberAttribute(sourceElement, "srcset", restore);
            sourceElement.setAttribute("srcset", dataUrl);
          });
        }
      }

      imageExportSource(image) {
        return image.currentSrc ||
          image.getAttribute("src") ||
          this.firstSrcsetSource(image.getAttribute("srcset") || "") ||
          this.firstPictureSource(image) ||
          "";
      }

      firstPictureSource(image) {
        const picture = image.closest?.("picture");
        if (!picture) return "";
        const source = Array.from(picture.querySelectorAll("source[srcset]")).find((item) => item.getAttribute("srcset"));
        return source ? this.firstSrcsetSource(source.getAttribute("srcset") || "") : "";
      }

      firstSrcsetSource(srcset) {
        const candidate = String(srcset || "").split(",").map((item) => item.trim()).find(Boolean);
        return candidate ? candidate.split(/\s+/)[0] : "";
      }

      async inlineSvgImageForExport(image, index, restore, cache) {
        const source = image.getAttribute("href") || image.getAttribute("xlink:href") || "";
        if (!source || this.isDataResourceUrl(source) || source.startsWith("#")) return;
        const dataUrl = await this.exportResourceDataUrl(source, index, cache);
        this.rememberAttribute(image, "href", restore);
        this.rememberAttribute(image, "xlink:href", restore);
        image.setAttribute("href", dataUrl);
        image.setAttribute("xlink:href", dataUrl);
      }

      async inlineVideoPosterForExport(video, index, restore, cache) {
        const source = video.getAttribute("poster") || "";
        if (!source || this.isDataResourceUrl(source)) return;
        const dataUrl = await this.exportResourceDataUrl(source, index, cache);
        this.rememberAttribute(video, "poster", restore);
        video.setAttribute("poster", dataUrl);
        if ("poster" in video) video.poster = dataUrl;
      }

      async inlineCssImagesForExport(element, index, restore, cache) {
        if (!element?.style) return;
        const computed = getComputedStyle(element);
        const properties = [
          { computed: "backgroundImage", css: "background-image" },
          { computed: "maskImage", css: "mask-image" },
          { computed: "webkitMaskImage", css: "-webkit-mask-image" }
        ];
        for (const property of properties) {
          const value = computed[property.computed] || "";
          if (!this.hasCssResourceUrl(value)) continue;
          const inlined = await this.inlineCssResourceUrls(value, index, cache);
          if (inlined === value) continue;
          this.rememberInlineStyle(element, property.css, restore);
          element.style.setProperty(property.css, inlined, "important");
        }
      }

      async inlinePseudoCssImagesForExport(element, index, restore, cache) {
        if (!element?.setAttribute) return;
        const rules = [];
        for (const { pseudo } of this.pseudoImageTargetsFor(element)) {
          const computed = getComputedStyle(element, pseudo);
          const properties = [
            { computed: "backgroundImage", css: "background-image" },
            { computed: "maskImage", css: "mask-image" },
            { computed: "webkitMaskImage", css: "-webkit-mask-image" }
          ];
          for (const property of properties) {
            const value = computed?.[property.computed] || "";
            if (!this.hasCssResourceUrl(value)) continue;
            const inlined = await this.inlineCssResourceUrls(value, index, cache);
            if (inlined !== value) rules.push({ pseudo, css: property.css, value: inlined });
          }
        }
        if (!rules.length) return;
        const id = `pseudo-${++this.exportPseudoCounter}`;
        this.rememberAttribute(element, "data-html-deck-editor-export-pseudo", restore);
        element.setAttribute("data-html-deck-editor-export-pseudo", id);
        const style = document.createElement("style");
        style.setAttribute("data-html-deck-editor-export-pseudo-style", id);
        const selector = `[data-html-deck-editor-export-pseudo="${this.escapeCssString(id)}"]`;
        style.textContent = rules.map((rule) => `${selector}${rule.pseudo}{${rule.css}: ${rule.value} !important;}`).join("\n");
        document.head.appendChild(style);
        restore.push(() => style.remove());
      }

      escapeCssString(value) {
        if (window.CSS?.escape) return window.CSS.escape(value);
        return String(value).replace(/[^a-zA-Z0-9_-]/g, "\\$&");
      }

      hasCssResourceUrl(value) {
        return /url\(/i.test(String(value || ""));
      }

      async inlineCssResourceUrls(value, index, cache) {
        const pattern = /url\((['"]?)(.*?)\1\)/g;
        let result = "";
        let lastIndex = 0;
        let changed = false;
        let match;
        while ((match = pattern.exec(value))) {
          const source = (match[2] || "").trim();
          result += value.slice(lastIndex, match.index);
          if (!source || this.isDataResourceUrl(source) || source.startsWith("#")) {
            result += match[0];
          } else {
            const dataUrl = await this.exportResourceDataUrl(source, index, cache);
            result += `url("${dataUrl}")`;
            changed = true;
          }
          lastIndex = pattern.lastIndex;
        }
        result += value.slice(lastIndex);
        return changed ? result : value;
      }

      isDataResourceUrl(source) {
        return /^data:/i.test(String(source || "").trim());
      }

      resolveExportResourceUrl(source) {
        try {
          return new URL(source, document.baseURI).href;
        } catch (error) {
          return source;
        }
      }

      async exportResourceDataUrl(source, index, cache) {
        const resolved = this.resolveExportResourceUrl(source);
        if (this.isDataResourceUrl(resolved)) return resolved;
        const assetDataUrl = this.exportAssetDataUrl(source) || this.exportAssetDataUrl(resolved);
        if (assetDataUrl) return assetDataUrl;
        if (!cache.has(resolved)) {
          const load = this.imageUrlToDataUrl(resolved)
            .catch(() => this.fetchResourceAsDataUrl(resolved))
            .catch(() => {
              throw new Error(`第 ${index + 1} 页资源无法读取：${this.shortResourceUrl(resolved)}`);
            });
          cache.set(resolved, load);
        }
        return cache.get(resolved);
      }

      async waitForExportImageLoad(image, index, source) {
        if (image.complete) {
          if (image.naturalWidth === 0) throw new Error(`第 ${index + 1} 页图片加载失败：${this.shortResourceUrl(source)}`);
          return;
        }
        await new Promise((resolve, reject) => {
          const timeout = window.setTimeout(() => {
            cleanup();
            reject(new Error(`第 ${index + 1} 页图片加载超时：${this.shortResourceUrl(source)}`));
          }, 15000);
          const cleanup = () => {
            window.clearTimeout(timeout);
            image.removeEventListener("load", onLoad);
            image.removeEventListener("error", onError);
          };
          const onLoad = () => {
            cleanup();
            if (image.naturalWidth === 0) reject(new Error(`第 ${index + 1} 页图片加载失败：${this.shortResourceUrl(source)}`));
            else resolve();
          };
          const onError = () => {
            cleanup();
            reject(new Error(`第 ${index + 1} 页图片加载失败：${this.shortResourceUrl(source)}`));
          };
          image.addEventListener("load", onLoad, { once: true });
          image.addEventListener("error", onError, { once: true });
        });
      }

      imageElementToDataUrl(image, source = "") {
        const width = image.naturalWidth || image.width || image.clientWidth;
        const height = image.naturalHeight || image.height || image.clientHeight;
        if (!width || !height) throw new Error("图片尺寸为空");
        const canvas = document.createElement("canvas");
        canvas.width = width;
        canvas.height = height;
        const context = canvas.getContext("2d");
        if (!context) throw new Error("无法读取图片像素");
        context.drawImage(image, 0, 0, width, height);
        return canvas.toDataURL(this.canvasMimeForResource(source));
      }

      canvasMimeForResource(source) {
        const path = String(source || "").split(/[?#]/)[0].toLowerCase();
        if (/\.jpe?g$/.test(path)) return "image/jpeg";
        if (/\.webp$/.test(path)) return "image/webp";
        return "image/png";
      }

      imageUrlToDataUrl(source) {
        if (typeof Image !== "function") return Promise.reject(new Error("Image unavailable"));
        return new Promise((resolve, reject) => {
          const image = new Image();
          const timeout = window.setTimeout(() => {
            cleanup();
            reject(new Error("图片加载超时"));
          }, 15000);
          const cleanup = () => {
            window.clearTimeout(timeout);
            image.onload = null;
            image.onerror = null;
          };
          image.onload = () => {
            cleanup();
            try {
              resolve(this.imageElementToDataUrl(image, source));
            } catch (error) {
              reject(error);
            }
          };
          image.onerror = () => {
            cleanup();
            reject(new Error("图片加载失败"));
          };
          if (this.shouldUseAnonymousImage(source)) image.crossOrigin = "anonymous";
          image.decoding = "async";
          image.src = source;
        });
      }

      shouldUseAnonymousImage(source) {
        try {
          const url = new URL(source, document.baseURI);
          return /^https?:$/i.test(url.protocol) && url.origin !== window.location.origin;
        } catch (error) {
          return false;
        }
      }

      async fetchResourceAsDataUrl(source) {
        if (typeof window.fetch !== "function") throw new Error("fetch unavailable");
        const url = new URL(source, document.baseURI);
        const response = await window.fetch(url.href, {
          credentials: url.origin === window.location.origin ? "same-origin" : "omit"
        });
        if (!response.ok) throw new Error(`HTTP ${response.status}`);
        return this.blobToDataUrl(await response.blob());
      }

      blobToDataUrl(blob) {
        return new Promise((resolve, reject) => {
          const reader = new FileReader();
          reader.onerror = () => reject(new Error("资源读取失败"));
          reader.onloadend = () => resolve(reader.result);
          reader.readAsDataURL(blob);
        });
      }

      exportBackgroundColor(slide) {
        const candidates = [slide, this.stage, document.body];
        for (const element of candidates) {
          const value = getComputedStyle(element).backgroundColor;
          if (value && value !== "transparent" && value !== "rgba(0, 0, 0, 0)") return value;
        }
        return "#ffffff";
      }

      async captureExportSlide(slide, index) {
        if (!slide) throw new Error(`第 ${index + 1} 页不存在`);
        const size = elementDesignSize(slide, stageDesignSize(this.stage));
        const restore = await this.prepareSlideForExport(slide, index);
        let imageError = false;
        let canvas;
        try {
          canvas = await window.htmlToImage.toCanvas(slide, {
            pixelRatio: 2,
            width: Math.round(size.width),
            height: Math.round(size.height),
            backgroundColor: this.exportBackgroundColor(slide),
            cacheBust: true,
            skipAutoScale: true,
            style: { transform: "none", transformOrigin: "top left", margin: "0" },
            filter: (node) => !(node instanceof Element && node.matches("[data-html-deck-editor-ui], .editor-frame, .editor-guide")),
            onImageErrorHandler: () => { imageError = true; }
          });
        } catch (error) {
          throw new Error(`第 ${index + 1} 页渲染失败：${error?.message || "未知错误"}`);
        } finally {
          restore();
        }
        if (imageError) throw new Error(`第 ${index + 1} 页包含无法读取的图片，已停止导出`);
        if (!canvas?.width || !canvas?.height) throw new Error(`第 ${index + 1} 页渲染结果为空`);
        return { canvas, index, width: Math.round(size.width), height: Math.round(size.height) };
      }

      async exportCapturesAsImages(captures, format) {
        const mime = format === "jpg" ? "image/jpeg" : "image/png";
        const extension = format === "jpg" ? "jpg" : "png";
        const files = [];
        for (const capture of captures) {
          const blob = await this.canvasToBlob(capture.canvas, mime, format === "jpg" ? 0.92 : undefined);
          files.push({ blob, filename: `${this.exportBaseName()}-page-${String(capture.index + 1).padStart(2, "0")}.${extension}` });
        }
        if (files.length === 1) {
          this.downloadBlob(files[0].blob, files[0].filename);
          return;
        }
        const zip = new window.JSZip();
        files.forEach((file) => zip.file(file.filename, file.blob));
        const blob = await zip.generateAsync({ type: "blob" });
        this.downloadBlob(blob, `${this.exportBaseName()}-${extension}.zip`);
      }

      async exportCapturesAsPdf(captures) {
        const jsPDF = window.jspdf.jsPDF;
        const first = captures[0];
        const pdf = new jsPDF({
          orientation: first.width >= first.height ? "landscape" : "portrait",
          unit: "px",
          format: [first.width, first.height],
          hotfixes: ["px_scaling"]
        });
        captures.forEach((capture, position) => {
          if (position > 0) pdf.addPage([capture.width, capture.height], capture.width >= capture.height ? "landscape" : "portrait");
          const dataUrl = capture.canvas.toDataURL("image/jpeg", 0.92);
          pdf.addImage(dataUrl, "JPEG", 0, 0, capture.width, capture.height, undefined, "FAST");
        });
        this.downloadBlob(pdf.output("blob"), `${this.exportBaseName()}.pdf`);
      }

      canvasToBlob(canvas, mime, quality) {
        return new Promise((resolve, reject) => {
          canvas.toBlob((blob) => {
            if (blob) resolve(blob);
            else reject(new Error("无法生成图片文件"));
          }, mime, quality);
        });
      }

      exportBaseName() {
        const title = String(document.title || "html-deck").replace(/\.[a-z0-9]+$/i, "");
        const safe = title.replace(/[\\/:*?"<>|\u0000-\u001f]+/g, "-").replace(/\s+/g, "-").replace(/^-+|-+$/g, "");
        return safe || "html-deck";
      }

      async exportHtml() {
        const html = this.buildExportHtml();
        this.saveDraft(false, false);
        if (this.canWriteFile()) {
          try {
            await this.writeHtmlFile(html);
            this.toastMessage("已覆盖保存 HTML");
            return;
          } catch (error) {
            if (error && error.name === "AbortError") {
              this.toastMessage("已取消保存");
              return;
            }
            this.fileHandle = null;
          }
        }
        this.downloadHtml(html);
        this.toastMessage("已下载 index.html；请替换原项目目录里的同名文件");
      }

      canWriteFile() {
        return window.isSecureContext && typeof window.showSaveFilePicker === "function";
      }

      async writeHtmlFile(html) {
        if (!this.fileHandle) {
          this.fileHandle = await window.showSaveFilePicker({
            suggestedName: "index.html",
            types: [
              {
                description: "HTML 文件",
                accept: { "text/html": [".html"] }
              }
            ]
          });
        }
        const writable = await this.fileHandle.createWritable();
        await writable.write(html);
        await writable.close();
      }

      downloadHtml(html) {
        this.downloadText(html, "index.html", "text/html;charset=utf-8");
      }

      downloadText(text, filename, type) {
        const blob = new Blob([text], { type });
        this.downloadBlob(blob, filename);
      }

      downloadBlob(blob, filename) {
        const link = document.createElement("a");
        const objectUrl = URL.createObjectURL(blob);
        link.href = objectUrl;
        link.download = filename;
        document.body.appendChild(link);
        link.click();
        link.remove();
        window.setTimeout(() => URL.revokeObjectURL(objectUrl), 1000);
      }

      toHex(value) {
        if (!value || value === "transparent" || value === "rgba(0, 0, 0, 0)") return "#ffffff";
        const match = value.match(/rgba?\((\d+),\s*(\d+),\s*(\d+)/);
        if (!match) return value.startsWith("#") ? value : "#111111";
        return [1, 2, 3].map((index) => Number(match[index]).toString(16).padStart(2, "0")).join("").replace(/^/, "#");
      }

      toastMessage(message) {
        this.toast.textContent = message;
        this.toast.classList.add("show");
        window.clearTimeout(this.toastTimer);
        this.toastTimer = window.setTimeout(() => this.toast.classList.remove("show"), 1400);
      }
    }

  function mount(options = {}) {
    window.editor?.destroy?.();
    ensureEditorDom();
    const presentation = normalizePresentation(options.presentation || window.presentation);
    window.presentation = presentation;
    const editor = new DeckEditor(presentation);
    window.editor = editor;
    return editor;
  }

  window.FrontendSlidesEditor = { mount, DeckEditor };
})();
