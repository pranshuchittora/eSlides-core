var link = document.createElement("link");
link.rel = "stylesheet";
link.type = "text/css";
link.href = window.location.search.match(/print-pdf/gi)
  ? "../css/print/pdf.css"
  : "../css/print/paper.css";
document.getElementsByTagName("head")[0].appendChild(link);
window.location.search.match(/pdf-download/) ? window.print() : null;

// More info about config & dependencies:
// - https://github.com/hakimel/reveal.js#configuration
// - https://github.com/hakimel/reveal.js#dependencies
Reveal.initialize({
  dependencies: [
    { src: "../plugin/markdown/marked.js" },
    { src: "../plugin/markdown/markdown.js" },
    { src: "../plugin/notes/notes.js", async: true },
    {
      src: "../plugin/highlight/highlight.js",
      async: true,
      callback: function() {
        hljs.initHighlightingOnLoad();
      }
    }
  ]
});

let url_string = window.location.href;

let url = new URL(url_string);
let module = url.searchParams.get("module");
let session = url.searchParams.get("session");
let slo = url.searchParams.get("slo");
// Validations
if (module && !Number.isInteger(parseInt(module))) alert("Invalid Module");
if (session && !Number.isInteger(parseInt(session))) alert("Invalid Session");
if (slo && !Number.isInteger(parseInt(slo))) alert("Invalid SLO");

if (module && session && slo) {
  document.getElementById("module")
    ? (document.getElementById(
        "module"
      ).dataset.markdown = `./Slides/M${module}/S${session}/SLO${slo}.md`)
    : null;
}
