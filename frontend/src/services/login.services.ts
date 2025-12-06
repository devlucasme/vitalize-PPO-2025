import { $axios } from "./api";
import type { LoginValidationType } from "../validations/protocols/login";

export async function loginUser(data: LoginValidationType) {
    try {
        const response = await $axios.post(`/users/login`, data);
        return response.data;
    } catch (err: any) {
        throw err.response?.data || { message: "Erro ao fazer login" };
    }
}