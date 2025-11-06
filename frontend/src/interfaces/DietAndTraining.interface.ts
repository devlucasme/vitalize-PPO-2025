export interface IDietAndTrainingData {
  age: number;
  sex: "Masculino" | "Feminino";
  weight_kg: number;
  height_cm: number;
  activity_level:
    | "Sedentário"
    | "2x por semana"
    | "3x por semana"
    | "4x por semana"
    | "5x por semana";
  objective: "Perda de peso" | "Hipertrofia" | "Manter massa muscular";
  training_place: "Academia" | "Casa" | "Parque";
  budGet_level: "Baixo" | "Médio" | "Alto";
  health_conditions:
    | "Nenhuma"
    | "Diabetes"
    | "Hipertensão"
    | "Intolerância à lactose"
    | "Doença celíaca (sem glúten)";
}
