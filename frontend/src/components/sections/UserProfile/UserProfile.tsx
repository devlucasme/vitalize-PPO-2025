import type { FC } from "react";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import * as S from "./styles";
import { Button } from "../../ui/Button/Button";
import { LogOut, AlertTriangle } from "lucide-react";
import ReactMarkdown from "react-markdown";
import { getUserProfile } from "../../../services/user.services";

interface IUserProfile {
  id: number;
  name: string;
  email: string;
  weight?: string;
  height?: string;
  objective?: string;
  lastDiet?: { plan: string | null; date: string | null };
  lastTraining?: { plan: string | null; date: string | null };
}

const UserProfile: FC = () => {
  const navigate = useNavigate();
  const [user, setUser] = useState<IUserProfile | null>(null);
  const token = localStorage.getItem("token");

  const fetchUser = async () => {
    if (!token) return;
    try {
      const data = await getUserProfile(token);
      setUser(data);
      localStorage.setItem("user", JSON.stringify(data));
    } catch (err: any) {
      console.error(err);
      localStorage.removeItem("token");
      navigate("/login", { replace: true });
    }
  };

  useEffect(() => {
    if (token) fetchUser();
  }, [token]);

  if (!token) {
    navigate("/login", { replace: true });
    return null;
  }

  if (!user) return null;

  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    navigate("/login", { replace: true });
  };

  const handleDeleteAccount = () => {
    navigate("/delete-account");
  };

  const formatDate = (dateStr?: string | null) => {
    if (!dateStr) return "—";
    const date = new Date(dateStr);
    return date.toLocaleDateString("pt-BR", {
      day: "2-digit",
      month: "2-digit",
      year: "numeric",
    });
  };

  return (
    <S.PageWrapper>
      <S.LeftColumn>
        <S.ProfileContainer>
          <S.UserContent>
            <h2>
              <S.UserIcon /> {user.name}
            </h2>
            <p>
              <S.MailIcon /> {user.email}
            </p>
          </S.UserContent>

          <S.ProfileSection>
            <h3>Dados Pessoais</h3>
            <S.ProfileItem>
              <span>Peso</span> <p>{user.weight ?? "—"} Kg</p>
            </S.ProfileItem>
            <S.ProfileItem>
              <span>Altura</span> <p>{user.height ?? "—"} Cm</p>
            </S.ProfileItem>
            <S.ProfileItem>
              <span>Objetivo</span> <p>{user.objective ?? "—"}</p>
            </S.ProfileItem>
          </S.ProfileSection>

          <S.ButtonWrapper>
            <Button backgroundColor="#d3764b" width="70%" onClick={handleLogout}>
              <LogOut size={16} /> Sair da Conta
            </Button>
            <Button backgroundColor="#c74343" width="70%" onClick={handleDeleteAccount}>
              Deletar Conta
            </Button>
          </S.ButtonWrapper>
        </S.ProfileContainer>

        {/* Novo Card de Aviso */}
        <S.WarningContainer>
          <AlertTriangle size={22} />
          <div>
            <h3>Aviso Importante</h3>
            <p>
              O <strong>Vitalize</strong> não substitui nenhum profissional de saúde. 
              Consulte um nutricionista ou médico antes de iniciar qualquer plano 
              alimentar ou rotina de treinos.
            </p>
          </div>
        </S.WarningContainer>
      </S.LeftColumn>

      <S.RightColumn>
        <S.Card>
          <S.DataGenerate>
            Última Dieta <span>{formatDate(user.lastDiet?.date)}</span>
          </S.DataGenerate>
          <S.ScrollBox>
            {user.lastDiet?.plan ? (
              <ReactMarkdown
                children={user.lastDiet.plan}
                components={{
                  h1: ({ children }) => <S.PlanTitle>{children}</S.PlanTitle>,
                  h2: ({ children }) => <S.DayCard>{children}</S.DayCard>,
                  h3: ({ children }) => <S.MealTitle>{children}</S.MealTitle>,
                  ul: ({ children }) => <S.MealList>{children}</S.MealList>,
                  li: ({ children }) => <S.MealItem>{children}</S.MealItem>,
                  p: ({ children }) => <S.Paragraph>{children}</S.Paragraph>,
                }}
              />
            ) : (
              <S.DataNotFound>Nenhuma dieta encontrada</S.DataNotFound>
            )}
          </S.ScrollBox>
        </S.Card>

        <S.Card>
          <S.DataGenerate>
            Último Treino <span>{formatDate(user.lastTraining?.date)}</span>
          </S.DataGenerate>
          <S.ScrollBox>
            {user.lastTraining?.plan ? (
              <ReactMarkdown
                children={user.lastTraining.plan}
                components={{
                  h1: ({ children }) => <S.PlanTitle>{children}</S.PlanTitle>,
                  h2: ({ children }) => <S.DayCard>{children}</S.DayCard>,
                  h3: ({ children }) => <S.MealTitle>{children}</S.MealTitle>,
                  ul: ({ children }) => <S.MealList>{children}</S.MealList>,
                  li: ({ children }) => <S.MealItem>{children}</S.MealItem>,
                  p: ({ children }) => <S.Paragraph>{children}</S.Paragraph>,
                }}
              />
            ) : (
              <S.DataNotFound>Nenhum treino encontrado</S.DataNotFound>
            )}
          </S.ScrollBox>
        </S.Card>
      </S.RightColumn>
    </S.PageWrapper>
  );
};

export { UserProfile };