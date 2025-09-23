import { UserRepository } from "../adapters/repositories/user.repository";
import type { ICreateUser, IUpdateUser, IUser, IUserRepository } from "../interfaces/user.interface";

export class UserUseCase {

    private userUseCase: IUserRepository;

    constructor() {
        this.userUseCase = new UserRepository();
    }

    async create({ name, email, password }: ICreateUser): Promise<IUser> {
        return await this.userUseCase.create({
            name, email, password
        });
    }

    async findByEmail(email: string): Promise<IUser | null> {
        return await this.userUseCase.findByEmail(email);
    }

    async findById(id: number): Promise<IUser | null> {
        return await this.userUseCase.findById(id);
    }

    async update(id: number, data: IUpdateUser): Promise<IUser> {
        return await this.userUseCase.update(id, data);
    }

    async delete(id: number): Promise<void> {
        return await this.userUseCase.delete(id);
    }
}