import type { Request, Response } from "express";
import { dietAndTrainingPlan } from "../../../validations/validators/dietAndTrainingPlan";
import { BadRequestError } from "../../../helpers/ApiError";
import { TrainingUseCase } from "../../../usecases/Training.usecase";

export class TrainingPlanController {
  private trainingUseCase = new TrainingUseCase();

  async generateTraining(req: Request, res: Response) {

    if (!req.user?.id) {
      return res.status(401).json({ message: "Usuário não autenticado" });
    }

    const parsed = dietAndTrainingPlan.safeParse(req.body);
    if (!parsed.success) {
      throw new BadRequestError("Dados do usuário incorretos");
    }

    const training = await this.trainingUseCase.generateAndSaveTraining(req.user.id, parsed.data);
    res.status(200).json({ plan: training.plan });
  }
}