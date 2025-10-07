import { UserRepository } from "../adapters/repositories/User.repository";
import { DietRepository } from "../adapters/repositories/Diet.repository";
import { TrainingRepository } from "../adapters/repositories/Training.repository";
import type { ICreateUser, IUpdateUser, IUser, IUserRepository } from "../interfaces/user.interface";

export class UserUseCase {
    
    private userRepository: IUserRepository;
    private dietRepository: DietRepository;
    private trainingRepository: TrainingRepository;

    constructor() {
        this.userRepository = new UserRepository();
        this.dietRepository = new DietRepository();
        this.trainingRepository = new TrainingRepository();
    }

    async create({ name, email, password }: ICreateUser): Promise<IUser> {
        return await this.userRepository.create({ name, email, password });
    }

    async findByEmail(email: string): Promise<IUser | null> {
        return await this.userRepository.findByEmail(email);
    }

    async findById(id: number): Promise<IUser | null> {
        
        const user = await this.userRepository.findById(id);
        if (!user) return null;

        const lastDiet = await this.dietRepository.getLatestDietByUser(id);
        const lastTraining = await this.trainingRepository.getLatestTrainingByUser(id);

        return {
            ...user,
            lastDiet: lastDiet?.plan ?? null,
            lastTraining: lastTraining?.plan ?? null,
        };
    }

    async update(id: number, data: IUpdateUser): Promise<IUser> {
        return await this.userRepository.update(id, data);
    }

    async delete(id: number): Promise<void> {
        await this.userRepository.delete(id);
    }
}
