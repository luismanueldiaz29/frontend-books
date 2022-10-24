import http from "../../shared/http/http-common";

export const getAllBook = async () => {
    try{
        const response = await http.get<any[]>("books")
        return response.data;
    } catch (error) {
        console.log(error)
        return [];
    }
}