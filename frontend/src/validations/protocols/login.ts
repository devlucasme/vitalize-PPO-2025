import z from "zod";
import { loginValidation } from "../validators/login.validation";

export type LoginValidationType = z.infer<typeof loginValidation>;