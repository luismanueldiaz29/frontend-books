import axios from "axios";
import { environment } from "../../shared/environment";
import { AuthorModel } from "../models/author";

export const saveAuthor = async (req : AuthorModel) => {
    try{
        const response = axios.post(environment.API_URL+'/authors', req)
        return response;
    } catch (error) {
        console.log(error)
        return [];
    }
}