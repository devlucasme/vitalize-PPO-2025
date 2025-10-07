import axios from "axios";
import type { LoginValidationType } from "../validations/protocols/login";

export async function loginUser(data: LoginValidationType) {
    try {
        const response = await axios.post(`http://localhost:3000/users/login`, data);
        return response.data;
    } catch (err: any) {
        throw err.response?.data || { message: "Erro ao fazer login" };
    }
}