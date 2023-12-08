const http = require("http");

const PORT = 5000;

const server = http.createServer((req, res) => {
    // Handle requests here

    res.writeHead(200, { "Content-Type": "application/html" });
    res.write("<h1>Welcome to About section!</h1>")
    res.end();
});

server.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
