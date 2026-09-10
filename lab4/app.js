import http from "http";
//import * as teams from 'teams.js';
import { getAllTeams , addTeam, getTeamById } from './teams.js';
import {parse as parseUrl} from 'url';
import { parse } from "path";

const PORT = 5000;
const sendJson = (res, statusCode, data, keyword, msg) => {
    res.writeHead(statusCode, { 'Content-Type': 'application/json' });
    res.end(data === "undefined" ? "" : JSON.stringify({[keyword]: msg, data}));
};
const parseJSONBody = (req) => {
    return new Promise((resolve, reject) => {
        let body = '';
        req.on('data', (chunk) => {
            body += chunk.toString();
        });
        req.on('end', () => {
            try {
                resolve(body ? JSON.parse(body) : {});
            } catch (error) {
                reject(error);
            }
        });
    });
};
const server = http.createServer(async (req, res) => {
    const {pathname,query} = parseUrl(req.url, true);
    console.log('pathname:', pathname);
    console.log('query:', query);
    console.log('method:', req.method);

    if(pathname === 'api/v1/teams' && req.method === 'GET') {
        
        let teams = getAllTeams();
        return sendJson(res, 200, teams, "count", teams.length);
        
    } else if(pathname === 'api/v1/teams' && req.method === 'POST') {
        const { tname, tl, members } = await parseJSONBody(req);
        if(!tname || !tl || !members)
            return sendJson(res, 400,{
               error: "Team Name", "Team Leader, or Members not defined ",
        });
        const team = addTeam({tname, tl, members});
        return sendJson(res, 201, team, "Message", "Team registered successfully");
    } 
    else {
        res.statusCode = 404;
        res.end();
    }
});



server.on("request", (req, res) => {
   
    res.end("<h1> SIH Internal<h1>");
});

server.listen(PORT,() =>{
    console.log(`Server is running on port ${PORT}`);
});