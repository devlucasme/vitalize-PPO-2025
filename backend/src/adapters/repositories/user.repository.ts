import type { ICreateUser, IUpdateUser, IUser, IUserRepository } from "../../interfaces/user.interface";
import { prisma } from "../../database/prismaClient";

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

    async findById(id: number): Promise<IUser | null> {
        const verifyIfExistsId = prisma.user.findUnique({
            where: { id }
        });
        return verifyIfExistsId;
    }

    async update(id: number, data: IUpdateUser): Promise<IUser> {
        const updateUser = await prisma.user.update({
            where: {
                id
            },
            data
        });
        return updateUser;
    }

    async delete(id: number): Promise<void> {
        await prisma.user.delete({
            where: { id }
        });
    }
}