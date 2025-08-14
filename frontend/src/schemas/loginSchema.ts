import z from "zod";

export const loginSchema = z.object({
  email: z.string()
    .nonempty("E-mail é obrigatório")
    .email("E-mail inválido"),
  password: z.string()
    .nonempty("Senha é obrigatória")
    .min(6, "A senha deve ter ao menos 6 caracteres"),
});

export type LoginSchemaType = z.infer<typeof loginSchema>;
