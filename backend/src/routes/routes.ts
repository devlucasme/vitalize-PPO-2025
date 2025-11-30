import { Router } from "express";
import { auth } from "../middlewares/auth.middleware.js";
import { UserSignUpController } from "../adapters/controllers/Users/UserSignUp.controller.js";
import { UserSignInController } from "../adapters/controllers/Users/UserSignIn.controller.js";
import { UserProfileController } from "../adapters/controllers/Users/UserProfile.controller.js";
import { UserUseCase } from "../usecases/User.usecase.js";
import { DietPlanController } from "../adapters/controllers/DietAndTraining/DietPlan.controller.js";
import { TrainingPlanController } from "../adapters/controllers/DietAndTraining/TrainingPlan.controller.js";
import { DeleteUserController } from "../adapters/controllers/Users/DeleteUser.controller.js";

export const router = Router();
const userUseCase = new UserUseCase();

router.post("/users/register", (req, res) => new UserSignUpController().create(req, res));
router.post("/users/login", (req, res) => new UserSignInController().login(req, res));
router.get("/users/profile", auth(userUseCase), (req, res) => new UserProfileController().getProfile(req, res));
router.delete("/users/delete", auth(userUseCase), (req, res) => new DeleteUserController().delete(req, res));

router.post("/users/diet", auth(userUseCase), (req, res) => new DietPlanController().generateDiet(req, res));
router.post("/users/training", auth(userUseCase), (req, res) => new TrainingPlanController().generateTraining(req, res));