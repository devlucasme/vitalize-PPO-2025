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
import { useState } from "react";
import { ArrowLeft } from "lucide-react";
import * as S from "./styles";

type FeedbackType = "success" | "error";

const RegisterForm: FC = () => {
  const navigate = useNavigate();
  const { theme } = useTheme();
  const logo = theme.title === "dark" ? VitalizeLogoDark : VitalizeLogo;
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [feedback, setFeedback] = useState<{ type: FeedbackType; message: string } | null>(null);

  const { handleSubmit, register, formState: { errors } } = useForm<RegisterValidationType>({
    resolver: zodResolver(registerValidation),
    mode: "all",
  });

  const onSubmit = async (data: RegisterValidationType) => {
    setIsLoading(true);
    setFeedback(null);

    try {
      const user = await registerUser(data);

      if (!user || !user.id) {
        setFeedback({ type: "error", message: "Erro ao cadastrar. Tente novamente." });
        return;
      }

      if (user.token) {
        localStorage.setItem("token", user.token);
        localStorage.setItem("user", JSON.stringify(user));
      }

      setFeedback({ type: "success", message: "Cadastro realizado com sucesso!" });
      setTimeout(() => navigate("/"), 1500);
    } catch (error: any) {
      const msg = error.response?.data?.message;
      if (msg) {
        setFeedback({ type: "error", message: "Erro ao cadastrar. Tente novamente." });
      }
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <S.Container>
      <S.RegisterForm onSubmit={handleSubmit(onSubmit)}>

        <S.BackLink to="/">
          <ArrowLeft size={18} />
          Voltar
        </S.BackLink>

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
            <S.Input type="email" {...register("email")} placeholder="seu@gmail.com" />
          </S.FieldContainer>
          {errors.email?.message && <S.ErrorMessage>{errors.email.message}</S.ErrorMessage>}
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
            <S.EyeButton type="button" onClick={() => setShowPassword(!showPassword)}>
              {showPassword ? <S.EyeOffIcon /> : <S.EyeIcon />}
            </S.EyeButton>
          </S.FieldContainer>
          {errors.password?.message && <S.ErrorMessage>{errors.password.message}</S.ErrorMessage>}
        </S.FieldWrapper>

        <S.FieldWrapper>
          <S.Label>Confirmar Senha</S.Label>
          <S.FieldContainer hasError={!!errors.confirmPassword}>
            <S.LockIcon />
            <S.Input
              type={showConfirmPassword ? "text" : "password"}
              {...register("confirmPassword")}
              placeholder="Confirme sua senha"
            />
            <S.EyeButton type="button" onClick={() => setShowConfirmPassword(!showConfirmPassword)}>
              {showConfirmPassword ? <S.EyeOffIcon /> : <S.EyeIcon />}
            </S.EyeButton>
          </S.FieldContainer>
          {errors.confirmPassword?.message && (
            <S.ErrorMessage>{errors.confirmPassword.message}</S.ErrorMessage>
          )}
        </S.FieldWrapper>

        <Button type="submit" disabled={isLoading}>
          Criar Conta
        </Button>

        <S.LoginLink>
          Já tem uma conta? <Link to="/login">Entrar</Link>
        </S.LoginLink>
      </S.RegisterForm>

      {feedback && (
        <S.FeedbackMessage type={feedback.type}>{feedback.message}</S.FeedbackMessage>
      )}
    </S.Container>
  );
};

export { RegisterForm };