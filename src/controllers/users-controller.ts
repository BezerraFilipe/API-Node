import {IncomingMessage, ServerResponse} from "http"
import { serviceListUsers } from "../services/list-users-service"
import { serviceFilterUsers } from "../services/filter-users-service";
import { responseModel } from "../models/models";

export const  getListUsers = async (req: IncomingMessage, res: ServerResponse)=>{

    const content: responseModel = await serviceListUsers();
    
    res.writeHead(content.statusCode,{'Content-Type': "application/json"})
    res.write(JSON.stringify(content.body))
    res.end()

}

export const  getFilterUsers = async (req: IncomingMessage, res: ServerResponse)=>{

    

    const content: responseModel = await serviceFilterUsers(req.url);
    
    res.writeHead(content.statusCode,{'Content-Type': "application/json"})
    res.write(JSON.stringify(content.body))
    res.end()
    


}