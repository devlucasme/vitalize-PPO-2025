import { z } from "zod";

export const dietTrainingCalculatorValidation = z.object({
  age: z.string().nonempty("Campo obrigatório"),
  sex: z.enum(["Masculino", "Feminino"], "Campo obrigatório"),
  weight_kg: z.string().nonempty("Campo obrigatório"),
  height_cm: z.string().nonempty("Campo obrigatório"),
  activity_level: z.enum(
    ["Sedentário", "2x por semana", "3x por semana", "4x por semana", "5x por semana"],
    "Campo obrigatório"
  ),
  objective: z.enum(
    ["Perda de peso", "Hipertrofia", "Manter massa muscular"],
    "Campo obrigatório"
  ),
  training_place: z.enum(["Academia", "Casa", "Parque"], "Campo obrigatório"),
  budGet_level: z.enum(["Baixo", "Médio", "Alto"], "Campo obrigatório"),
  health_conditions: z.enum(
    ["Nenhuma", "Diabetes", "Hipertensão", "Intolerância à lactose", "Doença celíaca (sem glúten)"],
    "Campo obrigatório"
  ),
});