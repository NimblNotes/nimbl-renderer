const mdRenderer = require("./index")(
  {
    isPreview: false,
    html: true,
    linkify: false,
    typographer: false,
    breaks: true,
    checkbox: true,
    anchor: true,
    toc: true,
    tocLevels: [1, 2, 3, 4],
    katex: true,
    smartarrows: true,
    alert: true,
    note: true,
    spoiler: true,
    url: true,
    video: true,
    graph: true,
    highlighter: true,
    reviewQuestion: true
  },
  "."
);

console.log(mdRenderer.render("aaa"));
