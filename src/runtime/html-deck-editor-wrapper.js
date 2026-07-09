(function () {
  function mount(options) {
    if (!window.FrontendSlidesEditor || typeof window.FrontendSlidesEditor.mount !== "function") {
      throw new Error("HtmlDeckEditor runtime could not find the editor base runtime.");
    }
    return window.FrontendSlidesEditor.mount(options || {});
  }

  window.HtmlDeckEditor = {
    mount: mount,
    version: "0.1.0"
  };
})();
