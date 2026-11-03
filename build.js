// Run:  node build.js
// 1) Olympiad-Practice.html -> ONE self-contained file to copy to the iPad (questions + icon inlined)
// 2) index.html             -> the GitHub Pages version (uses sw.js + manifest so "Add to Home Screen" works offline)
const fs = require("fs"), path = require("path");
const dir = __dirname, read = f => fs.readFileSync(path.join(dir, f));
let html = read("app.html").toString();
html = html.replace(/<script src="(questions-grade\d+\.js)"><\/script>/g, (m, f) =>
  "<script>\n" + read(f).toString().replace(/<\/script/gi, "<\/script") + "\n</script>");

const single = html.replace('href="icon-180.png"', 'href="data:image/png;base64,' + read("icon-180.png").toString("base64") + '"')
                   .replace(/<link rel="manifest"[^>]*>\n?/, "");
fs.writeFileSync(path.join(dir, "Olympiad-Practice.html"), single);
fs.writeFileSync(path.join(dir, "index.html"), html);
console.log("Built Olympiad-Practice.html (" + Math.round(single.length / 1024) + " KB) and index.html");
