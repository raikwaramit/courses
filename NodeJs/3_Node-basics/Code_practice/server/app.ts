const http = require("http");

// function reListener(req, res) {
//     return
// }

// http.createServer(reListener)

const server = http.createServer((req, res) => {
    console.log(req.url, req.headers, req.method);
    // process.exit()
    // routing
    const url = req.url;
    if (url === '/') {
        res.setHeader("Content-type", "text/html");
        res.write("<html>");
        res.write("<body>Hello</body>");
        res.write("<html>");
        res.end();
    }

    if (url === '/home') {
        res.setHeader("Content-type", "text/html");
        res.write("<html>");
        res.write("<body>Home</body>");
        res.write("<html>");
        res.end();
    }
})

server.listen(3001);