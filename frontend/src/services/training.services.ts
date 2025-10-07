import axios from "axios";

export interface ITrainingRequestData {
    age: number;
    sex: string;
    weightKg: number;
    heightCm: number;
    activityLevel: string;
    objective: string;
    trainingPlace: string;
    frequency: string;
}

export async function generateTraining(data: ITrainingRequestData, token?: string, signal?: AbortSignal) {
    const response = await axios.post(`http://localhost:3000/users/training`, data, {
        headers: {
            "Content-Type": "application/json",
            Authorization: token ? `Bearer ${token}` : ""
        },
        signal
    });
    return response.data;
}