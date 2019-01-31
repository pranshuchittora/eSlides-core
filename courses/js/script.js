var link = document.createElement("link");
link.rel = "stylesheet";
link.type = "text/css";
link.href = window.location.search.match(/print-pdf/gi)
  ? "../../../../css/print/pdf.css"
  : "../../../../css/print/paper.css";
document.getElementsByTagName("head")[0].appendChild(link);
window.location.search.match(/pdf-download/) ? window.print() : null;

// More info about config & dependencies:
// - https://github.com/hakimel/reveal.js#configuration
// - https://github.com/hakimel/reveal.js#dependencies
Reveal.initialize({
  dependencies: [
    { src: "../../../../plugin/markdown/marked.js" },
    { src: "../../../../plugin/markdown/markdown.js" },
    { src: "../../../../plugin/notes/notes.js", async: true },
    {
      src: "../../../../plugin/highlight/highlight.js",
      async: true,
      callback: function() {
        hljs.initHighlightingOnLoad();
      }
    }
  ]
});
