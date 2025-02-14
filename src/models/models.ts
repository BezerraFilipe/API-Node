export interface User{
    name : string;
    age : number;
    id : number;
    hobbies : string[]
}

export interface responseModel{
    statusCode: number;
    body: User[]
}