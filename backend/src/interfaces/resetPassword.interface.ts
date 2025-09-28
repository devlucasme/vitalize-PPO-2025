import type { IUser } from "./user.interface";

export interface IResetPasswordToken {
    resetToken: string;
    resetTokenExpires: Date;
}

export interface IResetPassword {
    token: string;
    password: string;
}

export interface IResetPasswordRepository {
    updateResetToken(id: number, data: IResetPasswordToken): Promise<void>;
    resetPassword(id: number, password: string): Promise<void>;
    findByResetToken(token: string): Promise<{ id: number; resetTokenExpires: Date | null } | null>;
    findByEmail(email: string): Promise<IUser | null>;
}