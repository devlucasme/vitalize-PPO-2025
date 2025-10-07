import axios from "axios";

export interface IDietRequestData {
    age: number;
    sex: string;
    weightKg: number;
    heightCm: number;
    activityLevel: string;
    objective: string;
    trainingPlace: string;
    frequency: string;
}

export async function generateDiet(data: IDietRequestData, token?: string, signal?: AbortSignal) {
    const response = await axios.post(`http://localhost:3000/users/diet`, data, {
        headers: {
            "Content-Type": "application/json",
            Authorization: token ? `Bearer ${token}` : ""
        },
        signal
    });
    return response.data;
}