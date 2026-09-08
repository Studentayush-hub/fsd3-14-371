import http from "http";
//import * as teams from 'teams.js';
import { getAllTeams } from './teams.js';

const PORT = 5000;
const sendJson = (res, statusCode, data) => {
    res.writeHead(statusCode, { 'Content-Type': 'application/json' });
    res.end(data === "undefined" ? "" : JSON.stringify(data));
};
const parseJSONBody = (req) => {
    return new Promise((resolve, reject) => {
        let body = '';
        req.on('data', (chunk) => {
            body += chunk.toString();
        });
        req.on('end', () => {
            try {
                resolve(JSON.parse(body));
            } catch (error) {
                reject(error);
            }
        });
    });
};
const server = http.createServer((req, res) => {});



server.on("request", (req, res) => {
   
    res.end("<h1> SIH Internal<h1>");
});

server.listen(PORT,() =>{
    console.log(`Server is running on port ${PORT}`);
});