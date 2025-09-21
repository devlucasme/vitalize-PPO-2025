import { Router } from "express";
import { UserController } from "../adapters/controllers/user.controller";

export const router = Router();

router.post("/user", (req, res) => new UserController().create(req, res));