import axios from "axios";

export interface ITrainingRequestData {
    age: number;
    sex: "Masculino" | "Feminino";
    weightKg: number;
    heightCm: number;
    hipCircumference: number;
    activityLevel: "Sedentário" | "Leve" | "Intermediário" | "Moderado" | "Ativo" | "Muito ativo";
    objective: "Perda de peso" | "Hipertrofia" | "Manter massa muscular" | "Manter vida saúdavel" | "Melhorar desempenho esportivo" | "Reeducação alimentar" | "Melhorar saúde metabólica";
    trainingPlace: "Academia (musculação)" | "Casa" | "Parque" | "Corrida de rua ou esteira" | "Artes marciais"
    | "Cross training / funcional" | "Ciclismo" | "Natação" | "Esportes coletivos (futebol, basquete, etc.)";
    budGetLevel: "Baixo" | "Médio" | "Alto";
    healthConditions:
    "Nenhuma" | "Diabetes" | "Hipertensão" | "Intolerância à lactose" | "Doença celíaca (sem glúten)" |
    "Obesidade" | "Colesterol alto" | "Problemas articulares";
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