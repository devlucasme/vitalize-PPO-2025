import { $axios } from "./api";
import type { RegisterValidationType } from "../validations/protocols/register";

export async function registerUser(data: RegisterValidationType) {
    try {
        const response = await $axios.post(`/users/register`, data);
        return response.data;
    } catch (err: any) {
        err.response?.message || { message: "Erro ao cadastrar" }
    }
}