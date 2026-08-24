
import http from "http";
const server = http.createServer((req, res) => {
   console.log("Welcome to Node JS");
   console.log(req.url);
   console.log("request.method:");
   console.log(req.method);
   console.log("request.headers:");
   //console.log(req.headers);
   console.log("Socket Info:");
   console.log(req.socket);
   res.end("Hello ");
});
const PORT = 4444;
server.listen(PORT, () => console.log("Server is running.."));
 
 