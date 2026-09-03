import http from 'http';
import { createReadStream } from 'fs';

const server = http.createServer((req, res) => {
    console.log("method:", req.method);
    if (req.url === '/' && req.method === 'GET') {
        res.end("<h1>Product details</h1>");
    }
    else if(req.url === '/product' && req.method === 'GET') {
        res.writeHead(200, { "Content-Type": "text/json" });
                const stream = createReadStream("./data/product.json", { encoding: "utf-8" });
                stream.pipe(res);

    }

    else{
        res.statusCode = 404;
        res.end("not found");
    }
});

server.listen(3001, () => {
    console.log('prg 10 is running at port http://localhost:3001');
});