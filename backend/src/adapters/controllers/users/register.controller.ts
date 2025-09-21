import type { Request, Response } from "express";
import { UserUseCase } from "../../../usecases/user.usercase";
import type { ICreateUser } from "../../../interfaces/user.interface";
import { BadRequestError } from "../../../helpers/api-error";
import bcrypt from "bcrypt";

export class RegisterController {

    private userUseCase: UserUseCase

    constructor() {
        this.userUseCase = new UserUseCase();
    }

    async create(req: Request<{}, {}, ICreateUser>, res: Response) {
        
        const { name, email, password } = req.body;
        if (!name || !email || !password) throw new BadRequestError("Preencha todos os campos");

        const existingEmail = await this.userUseCase.findByEmail(email);
        if (existingEmail) throw new BadRequestError("Email já existe");

        const hashPassword = await bcrypt.hash(password, 10);
        const createUser = await this.userUseCase.create({ name, email, password: hashPassword });
        const { password: _, ...user } = createUser;

        res.status(201).json(user);
    }
}