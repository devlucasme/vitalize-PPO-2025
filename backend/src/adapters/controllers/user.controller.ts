import type { Request, Response } from "express";
import { UserUseCase } from "../../usecases/user.usercase";
import type { ICreateUser } from "../../interfaces/user.interface";
import { BadRequestError } from "../../helpers/api-error";

export class UserController {

    private userUseCase: UserUseCase

    constructor() {
        this.userUseCase = new UserUseCase();
    }

    async create(req: Request<{}, {}, ICreateUser>, res: Response) {

        const { name, email, password } = req.body;

        if (!name || !email || !password) throw new BadRequestError("Preencha todos os campos", 400);

        const createUser = await this.userUseCase.create({ name, email, password });
        res.status(201).json(createUser);

    }
}