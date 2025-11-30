import { TrainingRepository } from "../adapters/repositories/Training.repository.js";
import { generateTrainingPlan } from "../agents/trainingOpenAi.js";
import type { ITraining } from "../interfaces/training.interface.js";

type TrainingInput = Omit<ITraining, "id" | "createAt" | "updateAt" | "userId" | "plan">;

export class TrainingUseCase {

  private trainingRepository = new TrainingRepository();

  async generateAndSaveTraining(userId: number, data: TrainingInput): Promise<ITraining> {
    let plan = "";
    for await (const chunk of generateTrainingPlan(data)) {
      plan += chunk;
    }

    return await this.trainingRepository.createTraining({
      ...data,
      userId,
      plan,
    });
  }

  async getLatestTraining(userId: number): Promise<ITraining | null> {
    return this.trainingRepository.getLatestTrainingByUser(userId);
  }
}