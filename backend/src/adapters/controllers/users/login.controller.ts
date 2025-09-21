import type { Request, Response } from "express";
import { UserUseCase } from "../../../usecases/user.usercase";
import type { ILoginUser } from "../../../interfaces/user.interface";
import { BadRequestError } from "../../../helpers/api-error";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

export class LoginController {

    private userUseCase: UserUseCase;

    constructor() {
        this.userUseCase = new UserUseCase();
    }

    async login(req: Request<{}, {}, ILoginUser>, res: Response) {

        const { email, password } = req.body;
        if (!email || !password) throw new BadRequestError("Preencha todos os campos");

        const user = await this.userUseCase.findByEmail(email);
        if (!user) throw new BadRequestError("Email ou senha incorretos");

        const isPasswordValid = await bcrypt.compare(password, user.password);
        if (!isPasswordValid) throw new BadRequestError("Email ou senha incorretos");

        const token = jwt.sign({ id: user.id }, process.env.JWT_PASS ?? "", { expiresIn: "1d"});

        const { password: _, ...userLogin } = user;
        return res.json({ 
            user: userLogin,
            token: token
         });
    }
}