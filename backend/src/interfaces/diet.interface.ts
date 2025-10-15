export interface IDiet {
  id: number;
  userId: number;
  age: number;
  sex: "Masculino" | "Feminino";
  weightKg: number;
  heightCm: number;
  activityLevel:
  | "Sedentário"
  | "2x por semana"
  | "3x por semana"
  | "4x por semana"
  | "5x por semana";
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

export interface IDietRepository {
  createDiet(data: Omit<IDiet, "id" | "createAt" | "updateAt">): Promise<IDiet>;
  getLatestDietByUser(userId: number): Promise<IDiet | null>;
}