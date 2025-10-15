import type { Request, Response } from "express";
import { dietAndTrainingPlan } from "../../../validations/validators/dietAndTrainingPlan";
import { BadRequestError } from "../../../helpers/ApiError";
import { DietUseCase } from "../../../usecases/Diet.usecase";

export class DietPlanController {
  private dietUseCase = new DietUseCase();

  async generateDiet(req: Request, res: Response) {

    if (!req.user?.id) {
      return res.status(401).json({ message: "Usuário não autenticado" });
    }

    const parsed = dietAndTrainingPlan.safeParse(req.body);
    if (!parsed.success) {
      throw new BadRequestError("Dados do usuário incorretos");
    }

    const diet = await this.dietUseCase.generateAndSaveDiet(req.user.id, parsed.data);
    res.status(200).json({ plan: diet.plan });
  }
}