import http from "../../shared/http/http-common";

export const getAllAuthor = async () => {
    try{
        const response = await http.get<any[]>("authors")
        return response.data;
    } catch (error) {
        console.log(error)
        return [];
    }
}