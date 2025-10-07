import { DietRepository } from "../adapters/repositories/Diet.repository";
import { generateDietPlan } from "../agents/dietOpenAi";
import type { IDiet } from "../interfaces/diet.interface";

type DietInput = Omit<IDiet, "id" | "createAt" | "updateAt" | "plan" | "userId">;

export class DietUseCase {

  private dietRepository = new DietRepository();

  async generateAndSaveDiet(userId: number, data: DietInput): Promise<IDiet> {
    let plan = "";
    for await (const chunk of generateDietPlan(data)) {
      plan += chunk;
    }

    return await this.dietRepository.createDiet({
      ...data,
      userId,
      plan,
    });
  }

  async getLatestDiet(userId: number): Promise<IDiet | null> {
    return this.dietRepository.getLatestDietByUser(userId);
  }
}