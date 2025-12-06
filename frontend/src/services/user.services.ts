import { $axios } from "./api";

export async function getUserProfile(token: string) {
    const response = await $axios.get(`/users/profile`, {
        headers: {
            Authorization: `Bearer ${token}`,
        }
    });
    return response.data;
}