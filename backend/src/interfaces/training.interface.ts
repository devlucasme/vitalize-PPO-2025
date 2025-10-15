export interface ITraining {
  id: number;
  userId: number;
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
  plan: string;
  createAt: Date;
  updateAt: Date;
}

export interface ITrainingRepository {
  createTraining(data: Omit<ITraining, "id" | "createAt" | "updateAt">): Promise<ITraining>;
  getLatestTrainingByUser(userId: number): Promise<ITraining | null>;
}