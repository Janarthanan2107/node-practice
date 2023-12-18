const http = require("http");

const PORT = 5000;

const server = http.createServer((req, res) => {
    // Handle requests here

    if (req.url === "/") {
        res.writeHead(200, { "content-type": "text/html" });
        res.write("<h1>Welcome to Node.js</h1>");
        res.end(); // end of the req
    } else if (req.url === "/about") {
        res.writeHead(200, { "content-type": "text/html" });
        res.write("<h1>This is About page</h1>");
        res.end(); // end of the req
    } else if (req.url === "/contact") {
        res.writeHead(200, { "content-type": "application/json" });
        res.write("{ success: true, message: 'This is contact page' }");
        res.end(); // end of the req
    } else {
        res.writeHead(404, { "content-type": "text/html" });
        res.write(`
    <h1>Something went wrong</h1>
    <a href="/">Back to home page</a>
    `);
        res.end();
    }
});

server.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
