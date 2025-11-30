import type { ICreateUser, IUser, IUserRepository } from "../../interfaces/user.interface.js";
import { prisma } from "../../database/prismaClient.js";

export class UserRepository implements IUserRepository {
    async create({ name, email, password }: ICreateUser): Promise<IUser> {
        return await prisma.user.create({
            data: {
                name, email, password
            }
        });
    }

    async findByEmail(email: string): Promise<IUser | null> {
        return await prisma.user.findUnique({
            where: { email }
        });
    }

    async findById(id: number): Promise<IUser | null> {
        return await prisma.user.findUnique({
            where: { id }
        });
    }

    async delete(id: number): Promise<void> {
        await prisma.user.delete({
            where: { id }
        });
    }
}