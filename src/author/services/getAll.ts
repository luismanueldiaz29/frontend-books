import { environment } from "../../shared/environment";
import http from "../../shared/http/http-common";

export const getAllAuthor = async () => {
    try{
        const response = await http.get<any[]>(environment.API_URL+"/authors")
        return response.data;
    } catch (error) {
        console.log(error)
        return [];
    }
}