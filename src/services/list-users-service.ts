import { dataUsers } from "../data/users-data"
import { responseModel } from "../models/models";

export const serviceListUsers = async (): Promise<responseModel> =>{

    let responseFormat: responseModel = {
        statusCode: 0,
        body: []
    }

    const data = await dataUsers();
    
    responseFormat = {
        statusCode : data.length !== 0 ? 200 : 204,
        body : data
    }
    
    return responseFormat;
    
}