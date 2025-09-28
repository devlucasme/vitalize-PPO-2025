import type { Request, Response } from "express";
import { UnauthorizedError } from "../../../helpers/ApiError";

export class UserProfileController {
    async getProfile(req: Request, res: Response) {
        if (!req.user) throw new UnauthorizedError("Não autorizado");
        res.status(200).json(req.user);
    }
}