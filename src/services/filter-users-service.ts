import { dataUsers } from "../data/users-data"
import { responseModel } from "../models/models";

export const serviceFilterUsers = async (reqUrl: string | undefined): Promise<responseModel> =>{

    let responseFormat: responseModel = {
        statusCode : 0,
        body : []
    };

    const queryString = reqUrl?.split("?h=")[1] ?? '';
    const data = await dataUsers(queryString);
    
    responseFormat.statusCode = data.length !== 0 ? 200 : 204;
    responseFormat.body = data;
    return responseFormat;
}