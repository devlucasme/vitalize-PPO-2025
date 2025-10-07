import z from "zod";

export const registerValidation = z.object({
    name: z
        .string()
        .nonempty("Nome é obrigatório")
        .min(1, "Digite um nome válido"),
    email: z
        .string()
        .nonempty("E-mail é obrigatório")
        .email("E-mail inválido"),
    password: z
        .string()
        .nonempty("Senha é obrigatória")
        .min(6, "A senha deve ter ao menos 6 caracteres"),
    confirmPassword: z
        .string()
        .nonempty("Confirmar sua senha")
})
    .refine((fields) => fields.password === fields.confirmPassword, {
        path: ["confirmPassword"],
        message: "As senhas precisam ser iguais"
    });