import { z } from "zod";

export const dietAndTrainingPlan = z.object({
  age: z.number().positive(),
  sex: z.enum(["Masculino", "Feminino"]),
  weightKg: z.number().positive(),
  heightCm: z.number().positive(),
  hipCircumference: z.number().positive(),
  activityLevel: z.enum([
    "Sedentário",
    "Leve",
    "Intermediário",
    "Moderado",
    "Ativo",
    "Muito ativo",
  ]),
  objective: z.enum(["Perda de peso", "Hipertrofia", "Manter massa muscular",
    "Manter vida saúdavel", "Melhorar desempenho esportivo", "Reeducação alimentar", "Melhorar saúde metabólica"
  ]),
  trainingPlace: z.enum([
    "Academia (musculação)",
    "Casa",
    "Parque",
    "Corrida de rua ou esteira",
    "Artes marciais",
    "Cross training / funcional",
    "Ciclismo",
    "Natação",
    "Esportes coletivos (futebol, basquete, etc.)",
  ]),
  budGetLevel: z.enum(["Baixo", "Médio", "Alto"]),
  healthConditions: z.enum([
    "Nenhuma",
    "Diabetes",
    "Hipertensão",
    "Intolerância à lactose",
    "Doença celíaca (sem glúten)",
    "Obesidade",
    "Colesterol alto",
    "Problemas articulares",
  ]),
});