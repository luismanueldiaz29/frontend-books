import axios from "axios";
import { AuthorModel } from "../models/author";

export const saveAuthor = async (req : AuthorModel) => {
    try{
        const response = axios.post('http://localhost:9060/api/authors', req)
        return response;
    } catch (error) {
        console.log(error)
        return [];
    }
}