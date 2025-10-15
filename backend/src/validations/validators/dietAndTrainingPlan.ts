import { z } from "zod";

export const dietAndTrainingPlan = z.object({
  age: z.number().positive(),
  sex: z.enum(["Masculino", "Feminino"]),
  weightKg: z.number().positive(),
  heightCm: z.number().positive(),
  activityLevel: z.enum([
    "Sedentário",
    "2x por semana",
    "3x por semana",
    "4x por semana",
    "5x por semana",
  ]),
  objective: z.enum(["Perda de peso", "Hipertrofia", "Manter massa muscular"]),
  trainingPlace: z.enum(["Academia", "Casa", "Parque"]),
  budGetLevel: z.enum(["Baixo", "Médio", "Alto"]),
  healthConditions: z.enum([
    "Nenhuma",
    "Diabetes",
    "Hipertensão",
    "Intolerância à lactose",
    "Doença celíaca (sem glúten)"
  ])
});