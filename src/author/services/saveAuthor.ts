import { json } from "stream/consumers";
import http from "../../shared/http/http-common";
import { AuthorModel } from "../models/author";

export const saveAuthor = async (req : AuthorModel) => {
    try{
        console.log(req)
        const response = await http.post<AuthorModel[]>("authors", req)
        return response.data;
    } catch (error) {
        console.log(error)
        return [];
    }
}