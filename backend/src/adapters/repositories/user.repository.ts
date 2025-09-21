import type { ICreateUser, IUser, IUserRepository } from "../../interfaces/user.interface";
import { prisma } from "../../database/prisma-client";

export class UserRepository implements IUserRepository {
    async create({ name, email, password }: ICreateUser): Promise<IUser> {
        const createUser = await prisma.user.create({
            data: {
                name, email, password
            }
        });
        return createUser;
    }

    async findByEmail(email: string): Promise<IUser | null> {
        const verifyIfExistsEmail = prisma.user.findUnique({
            where: { email }
        });
        return verifyIfExistsEmail;
    }
}