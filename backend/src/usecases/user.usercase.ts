import { UserRepository } from "../adapters/repositories/user.repository";
import type { ICreateUser, IUser, IUserRepository } from "../interfaces/user.interface";

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
}