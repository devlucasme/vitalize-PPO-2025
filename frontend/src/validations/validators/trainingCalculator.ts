import { z } from "zod";

export const trainingCalculatorValidation = z.object({
  training_place: z.enum(
    ["Academia", "Casa", "Parque"],
    "Campo obrigatório"
  ),
  experience: z.enum(
    ["Iniciante", "Intermediário", "Avançado"],
    "Campo obrigatório"
  ),
  frequency: z.enum(
    ["2x por semana", "3x por semana", "4x por semana", "5x por semana"],
    "Campo obrigatório"
  ),
  training_goal: z.enum(
    ["Hipertrofia", "Resistência", "Emagrecimento"],
    "Campo obrigatório"
  ),
});