import { BookModel } from '../models/book';
import axios from 'axios';

export const saveBook= async (req : BookModel) => {
    try{
        //const response = await http.post<BookModel[]>("books", req)
        const response = axios.post('http://localhost:9060/api/books', req)
        return response;
    } catch (error) {
        console.log(error)
        return [];
    }
}