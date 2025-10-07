import { prisma } from "../../database/prismaClient";
import type { ITraining, ITrainingRepository } from "../../interfaces/training.interface";

export class TrainingRepository implements ITrainingRepository {
  async createTraining(data: Omit<ITraining, "id" | "createAt" | "updateAt">): Promise<ITraining> {

    await prisma.training.deleteMany({
      where: { userId: data.userId },
    });

    // Cria o novo treino
    const createdTraining = await prisma.training.create({ data });

    return {
      id: createdTraining.id,
      userId: createdTraining.userId,
      age: createdTraining.age,
      sex: createdTraining.sex as "Masculino" | "Feminino",
      weightKg: createdTraining.weightKg,
      heightCm: createdTraining.heightCm,
      activityLevel: createdTraining.activityLevel as
        | "Sedentário"
        | "2x por semana"
        | "3x por semana"
        | "4x por semana"
        | "5x por semana",
      objective: createdTraining.objective as
        | "Perda de peso"
        | "Hipertrofia"
        | "Manter massa muscular",
      trainingPlace: createdTraining.trainingPlace as "Academia" | "Casa" | "Parque",
      frequency: createdTraining.frequency as
        | "2x por semana"
        | "3x por semana"
        | "4x por semana"
        | "5x por semana",
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
      activityLevel: latestTraining.activityLevel as
        | "Sedentário"
        | "2x por semana"
        | "3x por semana"
        | "4x por semana"
        | "5x por semana",
      objective: latestTraining.objective as
        | "Perda de peso"
        | "Hipertrofia"
        | "Manter massa muscular",
      trainingPlace: latestTraining.trainingPlace as "Academia" | "Casa" | "Parque",
      frequency: latestTraining.frequency as
        | "2x por semana"
        | "3x por semana"
        | "4x por semana"
        | "5x por semana",
      plan: latestTraining.plan,
      createAt: latestTraining.createAt,
      updateAt: latestTraining.updateAt,
    };
  }
}