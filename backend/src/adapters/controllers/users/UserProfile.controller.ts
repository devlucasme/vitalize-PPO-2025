import type { Request, Response } from "express";
import { DietUseCase } from "../../../usecases/Diet.usecase";
import { TrainingUseCase } from "../../../usecases/Training.usecase";

export class UserProfileController {
    
    private dietUseCase = new DietUseCase();
    private trainingUseCase = new TrainingUseCase();

    async getProfile(req: Request, res: Response) {
        if (!req.user?.id) {
            return res.status(401).json({ message: "Usuário não autenticado" });
        }

        const lastDiet = await this.dietUseCase.getLatestDiet(req.user.id);
        const lastTraining = await this.trainingUseCase.getLatestTraining(req.user.id);

        return res.status(200).json({
            id: req.user.id,
            name: req.user.name,
            email: req.user.email,
            lastDiet: lastDiet?.plan || null,
            lastTraining: lastTraining?.plan || null,
        });
    }
}
