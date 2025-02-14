import fs from "fs"
import path  from "path"
import { User } from "../models/models"


const pathData = path.join(__dirname, "../data/users.json")

export const dataUsers = async (hobbie ?: string): Promise<User[]> => {
    const data = fs.readFileSync(pathData, "utf-8")
    let jsonFile = JSON.parse(data)

    if(hobbie){
        jsonFile = jsonFile.filter((user: User) => user.hobbies.includes(hobbie));
    }

    return jsonFile
}