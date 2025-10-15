import { z } from "zod";
import { passwordToDeleteAccount } from "../validators/deleteAccount";

export type PasswordToDeleteAccountType = z.infer<typeof passwordToDeleteAccount>;