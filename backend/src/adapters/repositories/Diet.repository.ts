import { prisma } from "../../database/prismaClient";
import type { IDiet, IDietRepository } from "../../interfaces/diet.interface";

export class DietRepository implements IDietRepository {
  async createDiet(data: Omit<IDiet, "id" | "createAt" | "updateAt">): Promise<IDiet> {

    await prisma.diet.deleteMany({
      where: { userId: data.userId },
    });

    const createdDiet = await prisma.diet.create({ data });

    return {
      id: createdDiet.id,
      userId: createdDiet.userId,
      age: createdDiet.age,
      sex: createdDiet.sex as "Masculino" | "Feminino",
      weightKg: createdDiet.weightKg,
      heightCm: createdDiet.heightCm,
      hipCircumference: createdDiet.hipCircumference,
      activityLevel: createdDiet.activityLevel as
        | "Sedentário"
        | "Leve"
        | "Intermediário"
        | "Moderado"
        | "Ativo"
        | "Muito ativo",
      objective: createdDiet.objective as
        | "Perda de peso"
        | "Hipertrofia"
        | "Manter massa muscular"
        | "Manter vida saúdavel"
        | "Melhorar desempenho esportivo"
        | "Reeducação alimentar"
        | "Melhorar saúde metabólica",
      trainingPlace: createdDiet.trainingPlace as "Academia (musculação)" | "Casa" | "Parque" | "Corrida de rua ou esteira" | "Artes marciais" |
        "Cross training / funcional" | "Ciclismo" | "Natação" | "Esportes coletivos (futebol, basquete, etc.)",
      budGetLevel: createdDiet.budGetLevel as "Baixo" | "Médio" | "Alto",
      healthConditions: createdDiet.healthConditions as ("Nenhuma" | "Diabetes" | "Hipertensão" | "Intolerância à lactose" | "Doença celíaca (sem glúten)"),
      plan: createdDiet.plan,
      createAt: createdDiet.createAt,
      updateAt: createdDiet.updateAt,
    };
  }

  async getLatestDietByUser(userId: number): Promise<IDiet | null> {

    const latestDiet = await prisma.diet.findFirst({
      where: { userId },
      orderBy: { updateAt: "desc" },
    });

    if (!latestDiet) return null;

    return {
      id: latestDiet.id,
      userId: latestDiet.userId,
      age: latestDiet.age,
      sex: latestDiet.sex as "Masculino" | "Feminino",
      weightKg: latestDiet.weightKg,
      heightCm: latestDiet.heightCm,
      hipCircumference: latestDiet.hipCircumference,
      activityLevel: latestDiet.activityLevel as
        | "Sedentário"
        | "Leve"
        | "Intermediário"
        | "Moderado"
        | "Ativo"
        | "Muito ativo",
      objective: latestDiet.objective as
        | "Perda de peso"
        | "Hipertrofia"
        | "Manter massa muscular"
        | "Manter vida saúdavel"
        | "Melhorar desempenho esportivo"
        | "Reeducação alimentar"
        | "Melhorar saúde metabólica",
      trainingPlace: latestDiet.trainingPlace as "Academia (musculação)" | "Casa" | "Parque" | "Corrida de rua ou esteira" | "Artes marciais" |
        "Cross training / funcional" | "Ciclismo" | "Natação" | "Esportes coletivos (futebol, basquete, etc.)",
      budGetLevel: latestDiet.budGetLevel as "Baixo" | "Médio" | "Alto", // novo campo
      healthConditions: latestDiet.healthConditions as "Nenhuma" | "Diabetes" | "Hipertensão" | "Intolerância à lactose" | "Doença celíaca (sem glúten)" |
      "Obesidade" | "Colesterol alto" | "Problemas articulares",
      plan: latestDiet.plan,
      createAt: latestDiet.createAt,
      updateAt: latestDiet.updateAt,
    };
  }
}