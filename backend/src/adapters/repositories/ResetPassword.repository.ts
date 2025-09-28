import { prisma } from "../../database/prismaClient";
import type { IResetPassword, IResetPasswordRepository, IResetPasswordToken } from "../../interfaces/resetPassword.interface";
import type { IUser } from "../../interfaces/user.interface";


export class ResetPasswordRepository implements IResetPasswordRepository {
    async updateResetToken(id: number, { resetToken, resetTokenExpires }: IResetPasswordToken): Promise<void> {
        await prisma.user.update({
            where: {
                id
            },
            data: {
                resetToken, resetTokenExpires
            }
        });
    }

    async resetPassword(id: number, password: string): Promise<void> {
        await prisma.user.update({
            where: {
                id
            },
            data: {
                password,
                resetToken: null,
                resetTokenExpires: null
            }
        });
    }

    async findByResetToken(token: string): Promise<{ id: number; resetTokenExpires: Date | null; } | null> {
        return await prisma.user.findFirst({
            where: { resetToken: token },
            select: { id: true, resetTokenExpires: true }
        });
    }

    async findByEmail(email: string): Promise<IUser | null> {
        return await prisma.user.findUnique({
            where: { email }
        });
    }
}