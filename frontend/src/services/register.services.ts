import axios from "axios";
import type { RegisterValidationType } from "../validations/protocols/register";

export async function registerUser(data: RegisterValidationType) {
    try {
        const response = await axios.post(`http://localhost:3000/users/register`, data);
        return response.data;
    } catch (err: any) {
        err.response?.message || { message: "Erro ao cadastrar" }
    }
}