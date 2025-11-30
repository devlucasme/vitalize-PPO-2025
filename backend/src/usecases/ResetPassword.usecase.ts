import { ResetPasswordRepository } from "../adapters/repositories/ResetPassword.repository";
import { BadRequestError } from "../helpers/ApiError";
import type { IResetPassword, IResetPasswordRepository } from "../interfaces/resetPassword.interface";
import type { IUser } from "../interfaces/user.interface";
import bcrypt from "bcrypt";

export class ResetPasswordUseCase {

    private resetPasswordUseCase: IResetPasswordRepository

    constructor() {
        this.resetPasswordUseCase = new ResetPasswordRepository();
    }

    async requestReset(id: number, resetToken: string, resetTokenExpires: number): Promise<void> {
        const expires = new Date(Date.now() + resetTokenExpires);
        await this.resetPasswordUseCase.updateResetToken(id, { resetToken, resetTokenExpires: expires });
    }

    async resetPassword(id: number, password: string): Promise<void> {
        const hashPassword = await bcrypt.hash(password, 10);
        await this.resetPasswordUseCase.resetPassword(id, hashPassword);
    }

    async verifyResetToken(token: string) {

        const data = await this.resetPasswordUseCase.findByResetToken(token);
        if (!data) throw new BadRequestError("Token inválido");

        if (!data.resetTokenExpires) throw new BadRequestError("Token inválido");
        if (data.resetTokenExpires < new Date()) throw new BadRequestError("Token expirado");

        return data.id;
    }

    async findByEmail(email: string): Promise<IUser | null> {
        return await this.resetPasswordUseCase.findByEmail(email);
    }
}