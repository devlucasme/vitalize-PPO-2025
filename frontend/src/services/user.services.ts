import axios from "axios";

export async function getUserProfile(token: string) {
    const response = await axios.get(`http://localhost:3000/users/profile`, {
        headers: {
            Authorization: `Bearer ${token}`,
        }
    });
    return response.data;
}