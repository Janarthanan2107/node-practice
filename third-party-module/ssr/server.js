const http = require("http");
const { readFileSync } = require("fs");
const PORT = 5000;

const indexContent = readFileSync("./googleClone/index.html", {
    encoding: "utf-8",
});
const cssContent = readFileSync("./googleClone/style/style.css", {
    encoding: "utf-8",
});

const server = http.createServer((req, res) => {

    if (req.url === "/") {
        res.writeHead(200, { "Content-Type": "text/html" });
        res.write(indexContent);
        res.end();
    } else if (req.url === "/style/style.css") {
        res.writeHead(200, { "Content-Type": "text/css" });
        res.write(cssContent);
        res.end();
    } else {
        res.writeHead(404, { "Content-Type": "text/html" });
        res.write(`
        <h2>Something went wrong</h2>
        <a href="/">Back to home page</a>
        `);
        res.end();
    }
});

server.listen(PORT, () => {
    console.log(`Server is running in: http://localhost:${PORT}`);
});