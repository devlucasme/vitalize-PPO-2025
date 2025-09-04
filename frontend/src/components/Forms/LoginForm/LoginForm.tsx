import { useForm } from "react-hook-form";
import { Button } from "../../Button/Button";
import VitalizeLogo from "../../../assets/vitalize-logo-menor.png";
import VitalizeDarkLogo from "../../../assets/vitalize-logo-menor-dark.png";
import * as S from "./styles";
import { useTheme } from "../../../contexts/ThemeContext";
import { zodResolver } from "@hookform/resolvers/zod";
import { loginSchema, type LoginSchemaType } from "../../../schemas/loginSchema";
import { Link } from "react-router-dom";

const LoginForm = () => {

    const { handleSubmit, register, formState: { errors } } = useForm<LoginSchemaType>({
        resolver: zodResolver(loginSchema),
        mode: "all"
    });

    const { theme } = useTheme();
    const logo = theme.title === "dark" ? VitalizeDarkLogo : VitalizeLogo;

    return (
        <S.Container>
            <S.LoginForm onSubmit={handleSubmit((data: LoginSchemaType) => console.log(data))}>
                <img src={logo} alt="Logo do vitalize" />
                <h2>Entrar no Vitalize</h2>
                <S.FieldWrapper>
                    <S.Label>E-mail</S.Label>
                    <S.FieldContainer hasError={!!errors.email}>
                        <S.MailIcon />
                        <S.Input type="email" {...register('email')} placeholder="seu@gmail.com"/>
                    </S.FieldContainer>
                    {errors.email?.message && <S.ErrorMessage>{errors.email.message}</S.ErrorMessage>}
                </S.FieldWrapper>
                <S.FieldWrapper>
                    <S.Label>Senha</S.Label>
                    <S.FieldContainer hasError={!!errors.password}>
                        <S.LockIcon />
                        <S.Input type="password" {...register('password')} placeholder="Sua senha" />
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
                <Button>Entrar</Button>
                <S.SignUpLink>Não tem uma conta? <Link to={"/cadastro"}>Cadastra-se aqui</Link></S.SignUpLink>
            </S.LoginForm>
        </S.Container>
    )
}

export { LoginForm };