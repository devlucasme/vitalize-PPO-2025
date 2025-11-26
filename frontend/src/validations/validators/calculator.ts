import { z } from "zod";

export const dietTrainingCalculatorValidation = z.object({
  age: z.string().nonempty("Campo obrigatório"),
  sex: z.enum(["Masculino", "Feminino"], "Campo obrigatório"),
  weight_kg: z.string().nonempty("Campo obrigatório"),
  height_cm: z.string().nonempty("Campo obrigatório"),
  hip_circumference: z.string().nonempty("Campo obrigatório"),
  activity_level: z.enum(
    ["Sedentário", "Leve", "Intermediário" ,"Moderado", "Ativo", "Muito ativo"],
    "Campo obrigatório"
  ),
  objective: z.enum(
    ["Perda de peso", "Hipertrofia", "Manter massa muscular",  "Manter vida saúdavel", "Melhorar desempenho esportivo", "Reeducação alimentar", "Melhorar saúde metabólica"],
    "Campo obrigatório"
  ),
  training_place: z.enum([ "Academia (musculação)", "Casa", "Parque", "Corrida de rua ou esteira", "Artes marciais",
  "Cross training / funcional", "Ciclismo", "Natação", "Esportes coletivos (futebol, basquete, etc.)"], "Campo obrigatório"),
  budGet_level: z.enum(["Baixo", "Médio", "Alto"], "Campo obrigatório"),
  health_conditions: z.enum(
    ["Nenhuma", "Diabetes", "Hipertensão", "Intolerância à lactose", "Doença celíaca (sem glúten)", "Obesidade",
    "Colesterol alto", "Problemas articulares"],
    "Campo obrigatório"
  ),
});