import type { Request, Response, NextFunction } from "express";
import jwt from "jsonwebtoken";
import type { JwtPayload } from "jsonwebtoken";
import { UnauthorizedError } from "../helpers/apiError";
import { UserUseCase } from "../usecases/user.usercase";

export const auth = (userUseCase: UserUseCase) => {
    return async (req: Request, res: Response, next: NextFunction) => {
        
        const { authorization } = req.headers;
        if (!authorization) throw new UnauthorizedError("Não autorizado!");

        const token = authorization.split(" ")[1] as string;
        if (!token) throw new UnauthorizedError("Token Inválido");        

        const { id } = jwt.verify(token, process.env.JWT_PASS ?? "") as JwtPayload;

        const user = await userUseCase.findById(id);
        if (!user) throw new UnauthorizedError("Não autorizado");

        const { password, ...loggedUser } = user;
        req.user = loggedUser;

        next();
    }
}