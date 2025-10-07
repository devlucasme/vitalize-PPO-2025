import type { FC } from "react";
import * as S from "./styles";
import { useEffect } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { loginUser } from "../../../services/login.services";
import { useNavigate, Link, useLocation } from "react-router-dom";
import { Button } from "../../ui/Button/Button";
import VitalizeLogo from "../../../assets/vitalize-logo-menor.png";
import VitalizeDarkLogo from "../../../assets/vitalize-logo-menor-dark.png";
import { useTheme } from "../../../contexts/ThemeContext";
import { loginValidation } from "../../../validations/validators/login.validation";
import type { LoginValidationType } from "../../../validations/protocols/login";

const LoginForm: FC = () => {
  const navigate = useNavigate();
  const location = useLocation() as { state: { message?: string } };
  const { theme } = useTheme();
  const logo = theme.title === "dark" ? VitalizeDarkLogo : VitalizeLogo;

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) navigate("/user", { replace: true });
  }, [navigate]);

  const { handleSubmit, register, formState: { errors, isSubmitting }, setError, } = useForm<LoginValidationType>({
    resolver: zodResolver(loginValidation),
    mode: "all",
  });

  const onSubmit = async (data: LoginValidationType) => {
    
    try {  
      const response = await loginUser(data);

      localStorage.setItem("token", response.token);
      localStorage.setItem("user", JSON.stringify(response.user));
      navigate("/user");

    } catch (error: any) {
      if (error.errors) {
        const backendErrors = error.errors;
        Object.keys(backendErrors).forEach((field) => {
          setError(field as keyof LoginValidationType, {
            type: "manual",
            message: backendErrors[field],
          });
        });
      } else {
        alert(error.message || "Erro ao fazer login");
      }
    }
  };

  return (
    <S.Container>
      <S.LoginForm onSubmit={handleSubmit(onSubmit)}>
        <img src={logo} alt="Logo do vitalize" />
        <h2>Entrar no Vitalize</h2>

        {location.state?.message && (
          <S.SuccessMessage>{location.state.message}</S.SuccessMessage>
        )}

        <S.FieldWrapper>
          <S.Label>E-mail</S.Label>
          <S.FieldContainer hasError={!!errors.email}>
            <S.MailIcon />
            <S.Input type="email" {...register("email")} placeholder="seu@gmail.com" />
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
        <S.ContainerCheckbox>
          <S.RememberLabel htmlFor="remember-me">
            <S.Input type="checkbox" id="remember-me" />
            Lembrar de mim
          </S.RememberLabel>
          <S.ForgotPasswordLink href="#">Esqueci minha senha</S.ForgotPasswordLink>
        </S.ContainerCheckbox>
        <Button type="submit" disabled={isSubmitting}>
          {isSubmitting ? "Entrando..." : "Entrar"}
        </Button>
        <S.SignUpLink>
          Não tem uma conta? <Link to={"/cadastro"}>Cadastra-se aqui</Link>
        </S.SignUpLink>
      </S.LoginForm>
    </S.Container>
  );
};

export { LoginForm };