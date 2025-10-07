import { Router } from "express";
import { auth } from "../middlewares/auth.middleware";
import { UserSignUpController } from "../adapters/controllers/Users/UserSignUp.controller";
import { UserSignInController } from "../adapters/controllers/Users/UserSignIn.controller";
import { UserProfileController } from "../adapters/controllers/Users/UserProfile.controller";
import { UserUseCase } from "../usecases/User.usecase";
import { ResetPasswordController } from "../adapters/controllers/Users/ResetPassword.controller";
import { DietPlanController } from "../adapters/controllers/DietAndTraining/DietPlan.controller";
import { TrainingPlanController } from "../adapters/controllers/DietAndTraining/TrainingPlan.controller";

export const router = Router();
const userUseCase = new UserUseCase();

router.post("/users/register", (req, res) => new UserSignUpController().create(req, res));
router.post("/users/login", (req, res) => new UserSignInController().login(req, res));
router.get("/users/profile", auth(userUseCase), (req, res) => new UserProfileController().getProfile(req, res));

router.post("/auth/forgot-password", (req, res) => new ResetPasswordController().requestReset(req, res));
router.post("/auth/reset-password", (req, res) => new ResetPasswordController().resetPassword(req, res));

router.post("/users/diet", auth(userUseCase), (req, res) => new DietPlanController().generateDiet(req, res));
router.post("/users/training", auth(userUseCase), (req, res) => new TrainingPlanController().generateTraining(req, res));