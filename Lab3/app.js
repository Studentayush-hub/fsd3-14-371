import http from "http";
const server = http.createServer(); 
server.on("request", (req, res) => {
   
    res.end("<h1> SIH Internal<h1>");
});

server.listen(5000,() =>{
    console.log("Server is running");
});