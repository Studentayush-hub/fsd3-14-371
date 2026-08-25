import http from 'http';
const server = http.createServer((req, res) => {
    if(req.url=="/product")
        res.end('<h1>Product Page</h1>');
    else if(req.url=='/cart')
        res.end('<h2>Cart Page</h2>');
    else if(req.url=='/product')
        res.end(`<h1>Washing Machine</h1>
                 <h2>Price: 25000</h2>
                 <p>Discount: 5%</p>
                 <a href='#'>Buy Now</a>
                 `);
    else{
        res.statusCode=404;
        res.end(`<h1>404 , Not Found</h1>
            <p> Page not found</p>
            <a href='/'>Home</a>
            `);
    }             
});
server.listen(4444, () => console.log("Server is running"));