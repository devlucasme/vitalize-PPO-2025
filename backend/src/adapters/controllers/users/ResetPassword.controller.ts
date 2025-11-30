import type { Request, Response } from "express";
import { ResetPasswordUseCase } from "../../../usecases/ResetPassword.usecase.js";
import { BadRequestError } from "../../../helpers/ApiError.js";
import crypto from "crypto";
import type { IResetPassword } from "../../../interfaces/resetPassword.interface.js";

export class ResetPasswordController {

    private resetPasswordUseCase: ResetPasswordUseCase;

    constructor() {
        this.resetPasswordUseCase = new ResetPasswordUseCase();
    }

    async requestReset(req: Request<{}, {}, { email: string }>, res: Response) {

        const { email } = req.body;
        if (!email) throw new BadRequestError("Email obrigatório");

        const user = await this.resetPasswordUseCase.findByEmail(email);
        if (!user) throw new BadRequestError("Usuário não encontrado");

        const token = crypto.randomBytes(32).toString("hex");

        await this.resetPasswordUseCase.requestReset(user.id, token, 3600 * 1000);
        res.status(200).json({ message: "Token gerado com sucesso", token });
    }

    async resetPassword(req: Request<{}, {}, IResetPassword>, res: Response) {

        const { token, password } = req.body;
        if (!token || !password) throw new BadRequestError("Token e senha são obrigatórios");

        const id = await this.resetPasswordUseCase.verifyResetToken(token);
        await this.resetPasswordUseCase.resetPassword(id, password);
        return res.status(200).json({ message: "Senha alterada com sucesso" });
    }
}