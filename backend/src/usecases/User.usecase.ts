import { UserRepository } from "../adapters/repositories/User.repository.js";
import { DietRepository } from "../adapters/repositories/Diet.repository.js";
import { TrainingRepository } from "../adapters/repositories/Training.repository.js";
import type { ICreateUser, IUser, IUserRepository } from "../interfaces/user.interface.js";
import { BadRequestError, UnauthorizedError } from "../helpers/ApiError.js";
import bcrypt from "bcrypt";

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

    async deleteWithPassword(id: number, password: string): Promise<boolean> {
        const user = await this.userRepository.findById(id);
        if (!user) throw new BadRequestError("Usuário não encontrado");

        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) throw new UnauthorizedError("Senha incorreta");

        await this.userRepository.delete(id);
        return true;
    }
}
