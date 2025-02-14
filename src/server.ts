import * as http from "http";

import { getFilterUsers, getListUsers } from "./controllers/users-controller";

const port =process.env.PORT;

const server = http.createServer( async (req: http.IncomingMessage, res: http.ServerResponse) => {

    const baseUrl = req.url?.split("?")[0] ?? "";

    if (req.method === "GET" && baseUrl === "/api/list") {
        await getListUsers(req, res);
    }

    if (req.method === "GET" && baseUrl === "/api/user"){
        await getFilterUsers(req, res);
    }

});

server.listen(port, ()=>{
    console.log(`servidor iniciado na porta ${port}` )
    });