import type { ICreateUser, IUpdateUser, IUser, IUserRepository } from "../../interfaces/user.interface";
import { prisma } from "../../database/prismaClient";

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

    async update(id: number, data: IUpdateUser): Promise<IUser> {
        return await prisma.user.update({
            where: {
                id
            },
            data
        });
    }

    async delete(id: number): Promise<void> {
        await prisma.user.delete({
            where: { id }
        });
    }
}