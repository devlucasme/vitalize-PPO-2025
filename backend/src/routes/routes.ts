import { Router } from "express";
import { UserSignUpController } from "../adapters/controllers/users/UserSignUp.controller";
import { UserSignInController } from "../adapters/controllers/users/UserSignIn.controller";
import { UserProfileController } from "../adapters/controllers/users/UserProfile.controller";
import { auth } from "../middlewares/auth.middleware";
import { UserUseCase } from "../usecases/user.usercase";
import { UpdateUserController } from "../adapters/controllers/users/UpdateUser.controller";
import { DeleteUserController } from "../adapters/controllers/users/DeleteUser.controller";

export const router = Router();
const userUseCase = new UserUseCase();

router.post("/users", (req, res) => new UserSignUpController().create(req, res));
router.post("/users/login", (req, res) => new UserSignInController().login(req, res));
router.get("/users/profile", auth(userUseCase), (req, res) => new UserProfileController().getProfile(req, res));
router.put("/users/update/", auth(userUseCase), (req, res) => new UpdateUserController().update(req, res));
router.delete("/users/delete/", auth(userUseCase), (req, res) => new DeleteUserController().delete(req, res));