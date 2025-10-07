import { prisma } from "../../database/prismaClient";
import type { IDiet, IDietRepository } from "../../interfaces/diet.interface";

export class DietRepository implements IDietRepository {
  async createDiet(data: Omit<IDiet, "id" | "createAt" | "updateAt">): Promise<IDiet> {

    await prisma.diet.deleteMany({
      where: { userId: data.userId },
    });

    // Cria a nova dieta
    const createdDiet = await prisma.diet.create({ data });

    return {
      id: createdDiet.id,
      userId: createdDiet.userId,
      age: createdDiet.age,
      sex: createdDiet.sex as "Masculino" | "Feminino",
      weightKg: createdDiet.weightKg,
      heightCm: createdDiet.heightCm,
      activityLevel: createdDiet.activityLevel as
        | "Sedentário"
        | "2x por semana"
        | "3x por semana"
        | "4x por semana"
        | "5x por semana",
      objective: createdDiet.objective as
        | "Perda de peso"
        | "Hipertrofia"
        | "Manter massa muscular",
      trainingPlace: createdDiet.trainingPlace as "Academia" | "Casa" | "Parque",
      frequency: createdDiet.frequency as
        | "2x por semana"
        | "3x por semana"
        | "4x por semana"
        | "5x por semana",
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
      activityLevel: latestDiet.activityLevel as
        | "Sedentário"
        | "2x por semana"
        | "3x por semana"
        | "4x por semana"
        | "5x por semana",
      objective: latestDiet.objective as
        | "Perda de peso"
        | "Hipertrofia"
        | "Manter massa muscular",
      trainingPlace: latestDiet.trainingPlace as "Academia" | "Casa" | "Parque",
      frequency: latestDiet.frequency as
        | "2x por semana"
        | "3x por semana"
        | "4x por semana"
        | "5x por semana",
      plan: latestDiet.plan,
      createAt: latestDiet.createAt,
      updateAt: latestDiet.updateAt,
    };
  }
}