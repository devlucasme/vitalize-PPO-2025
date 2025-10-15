import type { FC } from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as S from "./styles";
import { Button } from "../../ui/Button/Button";
import { deleteUserAccount } from "../../../services/deleteUser.services";
import { Loader } from "lucide-react";
import { passwordToDeleteAccount } from "../../../validations/validators/deleteAccount";
import type { PasswordToDeleteAccountType } from "../../../validations/protocols/deleteAccount";

const DeleteAccount: FC = () => {
    
    const navigate = useNavigate();
    const [loadingProgress, setLoadingProgress] = useState(0);
    const [isLoading, setIsLoading] = useState(false);
    const [feedback, setFeedback] = useState<{ message: string; success: boolean } | null>(null);
    const token = localStorage.getItem("token");

    const { register, handleSubmit, formState: { errors } } = useForm<PasswordToDeleteAccountType>({
        resolver: zodResolver(passwordToDeleteAccount),
    });

    const startLoading = () => {
        setLoadingProgress(0);
        setIsLoading(true);
        const interval = setInterval(() => {
            setLoadingProgress((prev) => (prev < 90 ? prev + 10 : prev));
        }, 180);
        return interval;
    };

    const onSubmit = async (data: PasswordToDeleteAccountType) => {
        
        if (!token) {
            setFeedback({ message: "Usuário não autenticado", success: false });
            return;
        }

        const interval = startLoading();
        setFeedback(null);

        try {
            await deleteUserAccount(token, { password: data.password });
            setLoadingProgress(100);
            setFeedback({ message: "Conta deletada com sucesso!", success: true });
            localStorage.removeItem("token");
            localStorage.removeItem("user");

            setTimeout(() => {
                clearInterval(interval);
                navigate("/", { replace: true });
            }, 3000);
        } catch (err: any) {
            setLoadingProgress(100);
            setTimeout(() => {
                clearInterval(interval);
                setIsLoading(false);
                setFeedback({ message: err.response?.data?.message || "Erro ao deletar a conta", success: false });
            }, 800);
        }
    };

    return (
        <S.Container>
            <S.LoginForm onSubmit={handleSubmit(onSubmit)}>
                {isLoading && <S.LoadingBar progress={loadingProgress} visible={isLoading} />}
                <h2>Excluir Conta</h2>
                <p>Digite sua senha para confirmar a exclusão da conta. Esta ação é irreversível.</p>
                {feedback && (
                    <S.FeedbackBox style={{ background: feedback.success ? "#d4edda" : "#f8d7da", color: feedback.success ? "#155724" : "#721c24" }}>
                        {feedback.message}
                    </S.FeedbackBox>
                )}
                <S.FieldWrapper>
                    <S.Label>Senha</S.Label>
                    <S.FieldContainer hasError={!!errors.password}>
                        <S.LockIcon />
                        <S.Input
                            type="password"
                            placeholder="Sua senha"
                            {...register("password")}
                        />
                    </S.FieldContainer>
                    {errors.password && <S.FieldError>{errors.password.message}</S.FieldError>}
                </S.FieldWrapper>
                <S.ButtonContainer>
                    <Button type="submit" backgroundColor="#a83232" disabled={isLoading}>
                        {isLoading ? <Loader size={16} /> : "Confirmar Exclusão"}
                    </Button>
                    <Button type="button" backgroundColor="#8d8c8c" onClick={() => navigate(-1)} disabled={isLoading}>
                        Cancelar
                    </Button>
                </S.ButtonContainer>
            </S.LoginForm>
        </S.Container>
    );
};

export { DeleteAccount };