import z from "zod";
import { registerValidation } from "../validators/register.validation";

export type RegisterValidationType = z.infer<typeof registerValidation>;
