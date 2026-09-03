import http from 'http';

const server = http.createServer((req, res) => {
    if (req.url === '/' && req.method === 'GET') {
        res.end("Home page");
    }
    else if (req.url === '/product' && req.method === 'GET') {
        const products = [
            { id: 1, name: 'mobile', price: 2000 },
            { id: 2, name: 'duster', price: 10 },
            

        ];
        res.end(JSON.stringify(products));

    }

    else if (req.url === '/product' && req.method === 'GET') {
        res.end(" Show Product ");
    }
    else if (req.url === '/product' && req.method === 'POST') {
        //retrieve data from client
        let body;
        req.on('data', (chunk) => {
            body = chunk;
        });
        req.on('end', () => {
            const product = JSON.parse(body);
        });

        
        //add data to database
        res.writeHead(201, { 'Content-Type': 'application/json' });

        //send back the status
        res.end(JSON.stringify({ msg: 'product added', product, }));
        //res.end("add product");
    }
    else if (req.url === '/product' && req.method === 'PUT') {
        res.end("Update Product");
    }
    else if (req.url === '/product' && req.method === 'DELETE') {
        res.end("Remove Product");
    }
    else{
        res.statusCode = 404;
        res.end("not found");
    }
});

server.listen(3000, () => {
    console.log("prg 11 is running on port 3000");
});