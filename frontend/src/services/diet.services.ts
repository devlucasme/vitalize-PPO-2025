import axios from "axios";

export interface IDietRequestData {
  age: number;
  sex: "Masculino" | "Feminino";
  weightKg: number;
  heightCm: number;
  activityLevel: "Sedentário" | "2x por semana" | "3x por semana" | "4x por semana" | "5x por semana";
  objective: "Perda de peso" | "Hipertrofia" | "Manter massa muscular";
  trainingPlace: "Academia" | "Casa" | "Parque";
  budGetLevel: "Baixo" | "Médio" | "Alto";
  healthConditions:
  | "Nenhuma"
  | "Diabetes"
  | "Hipertensão"
  | "Intolerância à lactose"
  | "Doença celíaca (sem glúten)";
}

export async function generateDiet(
  data: IDietRequestData,
  token?: string,
  signal?: AbortSignal
) {
  const response = await axios.post(`http://localhost:3000/users/diet`, data, {
    headers: {
      "Content-Type": "application/json",
      Authorization: token ? `Bearer ${token}` : ""
    },
    signal
  });

  return response.data;
}