import type { FC } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useNavigate, Link } from "react-router-dom";
import { registerUser } from "../../../services/register.services";
import { Button } from "../../ui/Button/Button";
import VitalizeLogo from "../../../assets/vitalize-logo-menor.png";
import VitalizeLogoDark from "../../../assets/vitalize-logo-menor-dark.png";
import { useTheme } from "../../../contexts/ThemeContext";
import { registerValidation } from "../../../validations/validators/register.validation";
import type { RegisterValidationType } from "../../../validations/protocols/register";
import * as S from "./styles";

const RegisterForm: FC = () => {
    const navigate = useNavigate();
    const { theme } = useTheme();
    const logo = theme.title === "dark" ? VitalizeLogoDark : VitalizeLogo;

    const { handleSubmit, register, formState: { errors, isSubmitting }, setError } = useForm<RegisterValidationType>({
        resolver: zodResolver(registerValidation),
        mode: "all",
    });

    const onSubmit = async (data: RegisterValidationType) => {
        
        try {
            await registerUser(data);
            navigate("/login", { state: { message: "Cadastro realizado com sucesso! Faça login." } });
        
        } catch (error: any) {
            if (error.response?.data?.errors) {
                const backendErrors = error.response.data.errors;
                Object.keys(backendErrors).forEach((field) => {
                    setError(field as keyof RegisterValidationType, {
                        type: "manual",
                        message: backendErrors[field],
                    });
                });
            } else {
                alert(error.response?.data?.message || "Erro ao cadastrar");
            }
        }
    };

    return (
        <S.Container>
            <S.RegisterForm onSubmit={handleSubmit(onSubmit)}>
                <img src={logo} alt="Logo do Vitalize" />
                <h2>Criar conta no Vitalize</h2>
                <S.FieldWrapper>
                    <S.Label>Nome Completo</S.Label>
                    <S.FieldContainer hasError={!!errors.name}>
                        <S.UserIcon />
                        <S.Input type="text" {...register("name")} placeholder="Seu nome completo" />
                    </S.FieldContainer>
                    {errors.name?.message && <S.ErrorMessage>{errors.name.message}</S.ErrorMessage>}
                </S.FieldWrapper>
                <S.FieldWrapper>
                    <S.Label>E-mail</S.Label>
                    <S.FieldContainer hasError={!!errors.email}>
                        <S.MailIcon />
                        <S.Input type="email" {...register("email")} placeholder="Seu@gmail.com" />
                    </S.FieldContainer>
                    {errors.email?.message && <S.ErrorMessage>{errors.email.message}</S.ErrorMessage>}
                </S.FieldWrapper>
                <S.FieldWrapper>
                    <S.Label>Senha</S.Label>
                    <S.FieldContainer hasError={!!errors.password}>
                        <S.LockIcon />
                        <S.Input type="password" {...register("password")} placeholder="Sua senha" />
                    </S.FieldContainer>
                    {errors.password?.message && <S.ErrorMessage>{errors.password.message}</S.ErrorMessage>}
                </S.FieldWrapper>
                <S.FieldWrapper>
                    <S.Label>Confirmar Senha</S.Label>
                    <S.FieldContainer hasError={!!errors.confirmPassword}>
                        <S.LockIcon />
                        <S.Input type="password" {...register("confirmPassword")} placeholder="Confirme sua senha" />
                    </S.FieldContainer>
                    {errors.confirmPassword?.message && <S.ErrorMessage>{errors.confirmPassword.message}</S.ErrorMessage>}
                </S.FieldWrapper>
                <S.ContainerCheckbox>
                    <S.TermsLabel htmlFor="terms of use"> <S.Input type="checkbox" id="terms of use" /> Concordo com os
                        <S.TermsOfUseLink href="#">Termos de Uso</S.TermsOfUseLink> e
                        <S.TermsOfUseLink href="#">Política de Privacidade</S.TermsOfUseLink> </S.TermsLabel> </S.ContainerCheckbox>
                <Button type="submit" disabled={isSubmitting}>
                    {isSubmitting ? "Cadastrando..." : "Criar Conta"}
                </Button>
                <S.LoginLink>
                    Já tem uma conta? <Link to={"/login"}>Faça login aqui</Link>
                </S.LoginLink>
            </S.RegisterForm>
        </S.Container>
    );
};

export { RegisterForm };