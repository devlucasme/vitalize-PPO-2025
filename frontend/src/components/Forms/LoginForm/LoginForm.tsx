import type { FC } from "react";
import * as S from "./styles";
import { useEffect, useState } from "react";
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
import { Eye, EyeOff, ArrowLeft } from "lucide-react";

const LoginForm: FC = () => {
  const navigate = useNavigate();
  const location = useLocation() as { state: { message?: string } };
  const { theme } = useTheme();
  const logo = theme.title === "dark" ? VitalizeDarkLogo : VitalizeLogo;
  const [generalError, setGeneralError] = useState<string | null>(null);
  const [showPassword, setShowPassword] = useState(false);
  const [loadingProgress, setLoadingProgress] = useState(0);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) navigate("/user", { replace: true });
  }, [navigate]);

  useEffect(() => {
    let interval: ReturnType<typeof setInterval>;
    if (isLoading) {
      setLoadingProgress(0);
      interval = setInterval(() => {
        setLoadingProgress((prev) => (prev < 90 ? prev + 10 : prev));
      }, 180);
    } else {
      setTimeout(() => setLoadingProgress(0), 500);
    }
    return () => clearInterval(interval);
  }, [isLoading]);

  const {
    handleSubmit,
    register,
    formState: { errors, isSubmitting },
    setError,
  } = useForm<LoginValidationType>({
    resolver: zodResolver(loginValidation),
    mode: "all",
  });

  const onSubmit = async (data: LoginValidationType) => {
    setGeneralError(null);
    setIsLoading(true);

    try {
      const response = await loginUser(data);
      setLoadingProgress(100);

      setTimeout(() => {
        localStorage.setItem("token", response.token);
        localStorage.setItem("user", JSON.stringify(response.user));
        navigate("/user");
      }, 500);
    } catch (error: any) {
      setLoadingProgress(100);
      setTimeout(() => {
        setIsLoading(false);
        if (error.errors) {
          Object.keys(error.errors).forEach((field) => {
            setError(field as keyof LoginValidationType, {
              type: "manual",
              message: error.errors[field],
            });
          });
        } else {
          setGeneralError(
            "Não foi possível realizar o login. Verifique suas credenciais e tente novamente."
          );
        }
      }, 800);
    } finally {
      setTimeout(() => setIsLoading(false), 1200);
    }
  };

  return (
    <S.Container>
      <S.LoginForm onSubmit={handleSubmit(onSubmit)}>
        {isLoading && (
          <S.LoadingBar progress={loadingProgress} visible={isLoading} />
        )}
          <S.BackLink to="/">
            <ArrowLeft size={18} />
            Voltar
          </S.BackLink>
        <img src={logo} alt="Logo do Vitalize" />
        <h2>Entrar no Vitalize</h2>
        {location.state?.message && (
          <S.SuccessMessage>{location.state.message}</S.SuccessMessage>
        )}
        {generalError && <S.ErrorAlert>{generalError}</S.ErrorAlert>}
        <S.FieldWrapper>
          <S.Label>E-mail</S.Label>
          <S.FieldContainer hasError={!!errors.email}>
            <S.MailIcon />
            <S.Input
              type="email"
              {...register("email")}
              placeholder="seu@gmail.com"
            />
          </S.FieldContainer>
          {errors.email?.message && (
            <S.ErrorMessage>{errors.email.message}</S.ErrorMessage>
          )}
        </S.FieldWrapper>
        <S.FieldWrapper>
          <S.Label>Senha</S.Label>
          <S.FieldContainer hasError={!!errors.password}>
            <S.LockIcon />
            <S.Input
              type={showPassword ? "text" : "password"}
              {...register("password")}
              placeholder="Sua senha"
            />
            <S.TogglePasswordButton
              type="button"
              onClick={() => setShowPassword((prev) => !prev)}
              aria-label={showPassword ? "Ocultar senha" : "Mostrar senha"}
            >
              {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
            </S.TogglePasswordButton>
          </S.FieldContainer>
          {errors.password?.message && (
            <S.ErrorMessage>{errors.password.message}</S.ErrorMessage>
          )}
        </S.FieldWrapper>
        <S.ContainerCheckbox>
          <S.RememberLabel htmlFor="remember-me">
            <S.Input type="checkbox" id="remember-me" />
            Lembrar de mim
          </S.RememberLabel>
          <S.ForgotPasswordLink href="#">
            Esqueci minha senha
          </S.ForgotPasswordLink>
        </S.ContainerCheckbox>
        <Button type="submit" disabled={isSubmitting || isLoading} className="button-submit">
          Entrar
        </Button>
        <S.SignUpLink>
          Não tem uma conta? <Link to="/cadastro">Cadastre-se aqui</Link>
        </S.SignUpLink>
      </S.LoginForm>
    </S.Container>
  );
};

export { LoginForm };