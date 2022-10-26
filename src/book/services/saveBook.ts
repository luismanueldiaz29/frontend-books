import { BookModel } from '../models/book';
import axios from 'axios';
import { environment } from '../../shared/environment';

export const saveBook= async (req : BookModel) => {
    try{
        //const response = await http.post<BookModel[]>("books", req)
        const response = axios.post(environment.API_URL+'/books', req)
        return response;
    } catch (error) {
        console.log(error)
        return [];
    }
}