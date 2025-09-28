import type { Request, Response } from "express";
import { UserUseCase } from "../../../usecases/User.usecase";
import type { IUpdateUser } from "../../../interfaces/user.interface";
import { BadRequestError, UnauthorizedError } from "../../../helpers/ApiError";

export class UserController {

    private userUseCase: UserUseCase;

    constructor() {
        this.userUseCase = new UserUseCase();
    }

    async update(req: Request, res: Response) {

        const { id } = req.user;
        console.log(id);
        if (!id) throw new UnauthorizedError("Usuário não autorizado");

        const data: IUpdateUser = req.body;

        const numericId = Number(id);
        if (isNaN(numericId)) throw new BadRequestError("ID inválido");

        const updateUser = await this.userUseCase.update(numericId, data);
        return res.status(200).json({ message: "Usuário atualizado com sucesso", user: updateUser });
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