export interface ITraining {
  id: number;
  userId: number;
  age: number;
  sex: "Masculino" | "Feminino";
  weightKg: number;
  heightCm: number;
  hipCircumference: number;
  activityLevel: "Sedentário" | "Leve" | "Intermediário" | "Moderado" | "Ativo" | "Muito ativo";
  objective: "Perda de peso" | "Hipertrofia" | "Manter massa muscular" | "Manter vida saúdavel" | "Melhorar desempenho esportivo" | "Reeducação alimentar" | "Melhorar saúde metabólica";
  trainingPlace: "Academia (musculação)" | "Casa" | "Parque" | "Corrida de rua ou esteira" | "Artes marciais" | "Cross training / funcional"
  | "Ciclismo" | "Natação" | "Esportes coletivos (futebol, basquete, etc.)",
  budGetLevel: "Baixo" | "Médio" | "Alto";
  healthConditions:
  "Nenhuma" | "Diabetes" | "Hipertensão" | "Intolerância à lactose" | "Doença celíaca (sem glúten)" |
  "Obesidade" | "Colesterol alto" | "Problemas articulares";
  plan: string;
  createAt: Date;
  updateAt: Date;
}

export interface ITrainingRepository {
  createTraining(data: Omit<ITraining, "id" | "createAt" | "updateAt">): Promise<ITraining>;
  getLatestTrainingByUser(userId: number): Promise<ITraining | null>;
}