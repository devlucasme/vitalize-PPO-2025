import type { Request, Response } from "express";
import { UserUseCase } from "../../../usecases/user.usercase";
import { BadRequestError, UnauthorizedError } from "../../../helpers/apiError";

export class DeleteUserController {

    private userUseCase: UserUseCase;

    constructor() {
        this.userUseCase = new UserUseCase();
    }

    async delete(req: Request, res: Response) {

        const { id } = req.user;
        if (!id) throw new UnauthorizedError("Usuário não autorizado");

        const numericId = Number(id);
        if (isNaN(numericId)) throw new BadRequestError("ID inválido");

        await this.userUseCase.delete(numericId);
        res.status(200).json({ message: "Usuário deletado com sucesso" });
    }
}