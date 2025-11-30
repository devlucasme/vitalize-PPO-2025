import { prisma } from "../../database/prismaClient.js";
import type { ITraining, ITrainingRepository } from "../../interfaces/training.interface.js";

export class TrainingRepository implements ITrainingRepository {
  async createTraining(data: Omit<ITraining, "id" | "createAt" | "updateAt">): Promise<ITraining> {

    await prisma.training.deleteMany({
      where: { userId: data.userId },
    });

    const createdTraining = await prisma.training.create({ data });

    return {
      id: createdTraining.id,
      userId: createdTraining.userId,
      age: createdTraining.age,
      sex: createdTraining.sex as "Masculino" | "Feminino",
      weightKg: createdTraining.weightKg,
      heightCm: createdTraining.heightCm,
      hipCircumference: createdTraining.hipCircumference,
      activityLevel: createdTraining.activityLevel as
        | "Sedentário"
        | "Leve"
        | "Intermediário"
        | "Moderado"
        | "Ativo"
        | "Muito ativo",
      objective: createdTraining.objective as
        | "Perda de peso"
        | "Hipertrofia"
        | "Manter massa muscular"
        | "Manter vida saúdavel"
        | "Melhorar desempenho esportivo"
        | "Reeducação alimentar"
        | "Melhorar saúde metabólica",
      trainingPlace: createdTraining.trainingPlace as "Academia (musculação)" | "Casa" | "Parque" | "Corrida de rua ou esteira" | "Artes marciais" |
        "Cross training / funcional" | "Ciclismo" | "Natação" | "Esportes coletivos (futebol, basquete, etc.)",
      budGetLevel: createdTraining.budGetLevel as "Baixo" | "Médio" | "Alto",
      healthConditions: createdTraining.healthConditions as
        | "Nenhuma"
        | "Diabetes"
        | "Hipertensão"
        | "Intolerância à lactose"
        | "Doença celíaca (sem glúten)",
      plan: createdTraining.plan,
      createAt: createdTraining.createAt,
      updateAt: createdTraining.updateAt,
    };
  }

  async getLatestTrainingByUser(userId: number): Promise<ITraining | null> {
    const latestTraining = await prisma.training.findFirst({
      where: { userId },
      orderBy: { updateAt: "desc" },
    });

    if (!latestTraining) return null;

    return {
      id: latestTraining.id,
      userId: latestTraining.userId,
      age: latestTraining.age,
      sex: latestTraining.sex as "Masculino" | "Feminino",
      weightKg: latestTraining.weightKg,
      heightCm: latestTraining.heightCm,
      hipCircumference: latestTraining.hipCircumference,
      activityLevel: latestTraining.activityLevel as
        | "Sedentário"
        | "Leve"
        | "Intermediário"
        | "Moderado"
        | "Ativo"
        | "Muito ativo",
      objective: latestTraining.objective as
        | "Perda de peso"
        | "Hipertrofia"
        | "Manter massa muscular"
        | "Manter vida saúdavel"
        | "Melhorar desempenho esportivo"
        | "Reeducação alimentar"
        | "Melhorar saúde metabólica",
      trainingPlace: latestTraining.trainingPlace as "Academia (musculação)" | "Casa" | "Parque" | "Corrida de rua ou esteira" | "Artes marciais" |
        "Cross training / funcional" | "Ciclismo" | "Natação" | "Esportes coletivos (futebol, basquete, etc.)",
      budGetLevel: latestTraining.budGetLevel as "Baixo" | "Médio" | "Alto",
      healthConditions: latestTraining.healthConditions as
      "Nenhuma" | "Diabetes" | "Hipertensão" | "Intolerância à lactose" | "Doença celíaca (sem glúten)" |
      "Obesidade" | "Colesterol alto" | "Problemas articulares",
      plan: latestTraining.plan,
      createAt: latestTraining.createAt,
      updateAt: latestTraining.updateAt,
    };
  }
}
