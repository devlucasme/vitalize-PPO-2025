import { z } from "zod";

export const passwordToDeleteAccount = z.object({
    password: z
        .string()
        .nonempty("Senha é obrigatória")
        .min(6, "A senha deve ter ao menos 6 caracteres"),
});