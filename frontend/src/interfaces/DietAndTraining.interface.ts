export interface IDietAndTrainingData {
  age: number;
  sex: "Masculino" | "Feminino";
  weight_kg: number;
  height_cm: number;
  hip_circumference: number;
  activity_level:
  | "Sedentário"
  | "Leve"
  | "Intermediário"
  | "Moderado"
  | "Ativo"
  | "Muito ativo";
  objective: "Perda de peso" | "Hipertrofia" | "Manter massa muscular" | "Manter vida saúdavel" | "Melhorar desempenho esportivo" | "Reeducação alimentar" | "Melhorar saúde metabólica";
  training_place: "Academia (musculação)" | "Casa" | "Parque" | "Corrida de rua ou esteira" | "Artes marciais"
  | "Cross training / funcional" | "Ciclismo" | "Natação" | "Esportes coletivos (futebol, basquete, etc.)";
  budGet_level: "Baixo" | "Médio" | "Alto";
  health_conditions:
  "Nenhuma" | "Diabetes" | "Hipertensão" | "Intolerância à lactose" | "Doença celíaca (sem glúten)" |
  "Obesidade" | "Colesterol alto" | "Problemas articulares";
}
