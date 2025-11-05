import type { FC } from "react";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import * as S from "./styles";
import { Button } from "../../ui/Button/Button";
import { LogOut, Droplets, Dumbbell, BedDouble, Apple } from "lucide-react";
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
      // Se o token for inválido, limpa e volta pro login
      localStorage.removeItem("token");
      navigate("/login", { replace: true });
    }
  };

  useEffect(() => {
    // Só busca os dados se houver token
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
        <S.TipsContainer>
          <h3>Algumas Dicas</h3>
          <S.TipCard>
            <Droplets size={18} />
            <p>Beba pelo menos 2L de água por dia</p>
          </S.TipCard>
          <S.TipCard>
            <Dumbbell size={18} />
            <p>Treine com consistência semanal</p>
          </S.TipCard>
          <S.TipCard>
            <BedDouble size={18} />
            <p>Durma entre 7h e 8h todas as noites</p>
          </S.TipCard>
          <S.TipCard>
            <Apple size={18} />
            <p>Mantenha uma alimentação equilibrada</p>
          </S.TipCard>
        </S.TipsContainer>
      </S.LeftColumn>

      <S.RightColumn>
        <S.Card>
          <S.DataGenerate>
            Última Dieta{" "}
            <span>{formatDate(user.lastDiet?.date)}</span>
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
            Último Treino{" "}
            <span>{formatDate(user.lastTraining?.date)}</span>
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
