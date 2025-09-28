import { Router } from "express";
import { auth } from "../middlewares/auth.middleware";
import { UserSignUpController } from "../adapters/controllers/users/UserSignUp.controller";
import { UserSignInController } from "../adapters/controllers/users/UserSignIn.controller";
import { UserProfileController } from "../adapters/controllers/users/UserProfile.controller";
import { UserUseCase } from "../usecases/User.usecase";
import { UserController } from "../adapters/controllers/users/User.controller";
import { ResetPasswordController } from "../adapters/controllers/users/ResetPassword.controller";

export const router = Router();
const userUseCase = new UserUseCase();

router.post("/users", (req, res) => new UserSignUpController().create(req, res));
router.post("/users/login", (req, res) => new UserSignInController().login(req, res));
router.get("/users/profile", auth(userUseCase), (req, res) => new UserProfileController().getProfile(req, res));
router.put("/users/update", auth(userUseCase), (req, res) => new UserController().update(req, res));
router.delete("/users/delete", auth(userUseCase), (req, res) => new UserController().delete(req, res));

router.post("/auth/forgot-password", (req, res) => new ResetPasswordController().requestReset(req, res));
router.post("/auth/reset-password", (req, res) => new ResetPasswordController().resetPassword(req, res));