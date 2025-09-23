import type { Request, Response } from "express";
import { UserUseCase } from "../../../usecases/user.usercase";
import type { IUpdateUser } from "../../../interfaces/user.interface";
import { BadRequestError, UnauthorizedError } from "../../../helpers/apiError";

export class UpdateUserController {

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

}