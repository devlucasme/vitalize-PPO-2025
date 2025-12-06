import { $axios } from "./api";

export interface IDietRequestData {
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

export async function generateDiet(
  data: IDietRequestData,
  token?: string,
  signal?: AbortSignal
) {
  const response = await $axios.post(`/users/diet`, data, {
    headers: {
      "Content-Type": "application/json",
      Authorization: token ? `Bearer ${token}` : ""
    },
    signal
  });

  return response.data;
}