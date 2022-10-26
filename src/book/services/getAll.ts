import { environment } from "../../shared/environment";
import http from "../../shared/http/http-common";

export const getAllBook = async () => {
    try{
        const response = await http.get<any[]>(environment.API_URL+"/books")
        return response.data;
    } catch (error) {
        console.log(error)
        return [];
    }
}