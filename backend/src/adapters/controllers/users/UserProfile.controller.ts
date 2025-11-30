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

        // Pega a última dieta e treino do usuário
        const lastDiet = await this.dietUseCase.getLatestDiet(req.user.id);
        const lastTraining = await this.trainingUseCase.getLatestTraining(req.user.id);

        // Define os dados mais recentes entre dieta e treino para o perfil geral
        const lastWeight = lastTraining && lastDiet
            ? (lastTraining.updateAt > lastDiet.updateAt ? lastTraining.weightKg : lastDiet.weightKg)
            : lastDiet?.weightKg ?? lastTraining?.weightKg ?? null;

        const lastHeight = lastTraining && lastDiet
            ? (lastTraining.updateAt > lastDiet.updateAt ? lastTraining.heightCm : lastDiet.heightCm)
            : lastDiet?.heightCm ?? lastTraining?.heightCm ?? null;

        const lastObjective = lastTraining && lastDiet
            ? (lastTraining.updateAt > lastDiet.updateAt ? lastTraining.objective : lastDiet.objective)
            : lastDiet?.objective ?? lastTraining?.objective ?? null;

        return res.status(200).json({
            id: req.user.id,
            name: req.user.name,
            email: req.user.email,
            weight: lastWeight,
            height: lastHeight,
            objective: lastObjective,
            lastDiet: {
                plan: lastDiet?.plan ?? null,
                date: lastDiet?.createAt ?? null, 
            },
            lastTraining: {
                plan: lastTraining?.plan ?? null,
                date: lastTraining?.createAt ?? null, // data de criação do treino
            },
        });
    }
}
