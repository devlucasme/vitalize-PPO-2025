import type { Request, Response } from "express";
import { UserUseCase } from "../../../usecases/User.usecase.js";
import { BadRequestError, UnauthorizedError } from "../../../helpers/ApiError.js";

export class DeleteUserController {

    private userUseCase: UserUseCase;

    constructor() {
        this.userUseCase = new UserUseCase();
    }

    async delete(req: Request<{}, {}, { password: string }>, res: Response) {

        const { id } = req.user;
        if (!id) throw new UnauthorizedError("Usuário não autorizado");
        const { password } = req.body;
        if (!password) throw new BadRequestError("Senha obrigatória");

        const numericId = Number(id);
        if (isNaN(numericId)) throw new BadRequestError("ID inválido");

        const deleted = await this.userUseCase.deleteWithPassword(numericId, password);
        if (!deleted) throw new UnauthorizedError("Senha incorreta");
        
        res.status(200).json({ message: "Usuário deletado com sucesso" });
    }
}