import { Router } from "express";
import { RegisterController } from "../adapters/controllers/users/register.controller";
import { LoginController } from "../adapters/controllers/users/login.controller";

export const router = Router();

router.post("/user", (req, res) => new RegisterController().create(req, res));
router.post("/login", (req, res) => new LoginController().login(req, res));