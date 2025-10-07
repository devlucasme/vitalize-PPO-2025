import type { FC } from "react";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import * as S from "./styles";
import { Button } from "../../ui/Button/Button";
import { Edit2, RotateCcw, LogOut, Droplets, Dumbbell, BedDouble, Apple } from "lucide-react";
import ReactMarkdown from "react-markdown";
import { getUserProfile } from "../../../services/user.services";

interface IUserProfile {
  id: number;
  name: string;
  email: string;
  weight?: string;
  height?: string;
  age?: string;
  lastDiet?: string;
  lastTraining?: string;
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
      navigate("/login", { replace: true });
    }
  };

  useEffect(() => {
    if (!token) {
      navigate("/login", { replace: true });
      return;
    }
    fetchUser();
  }, [token, navigate]);

  if (!user) return null;

  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    navigate("/", { replace: true });
  };

  const handleRefresh = () => fetchUser();

  return (
    <S.PageWrapper>
      <S.LeftColumn>
        <S.ProfileContainer>
          <S.ProfileHeader>
            <S.UserInfo>
              <S.UserIcon />
              <S.UserContent>
                <h2>{user.name}</h2>
                <p>{user.email}</p>
              </S.UserContent>
            </S.UserInfo>
            <S.EditButtonWrapper>
              <Button><Edit2 size={16} /> Editar Perfil</Button>
            </S.EditButtonWrapper>
          </S.ProfileHeader>
          <S.ProfileSection>
            <h3>Dados Pessoais</h3>
            <S.ProfileItem><span>Peso:</span> <p>{user.weight ?? "—"}</p></S.ProfileItem>
            <S.ProfileItem><span>Altura:</span> <p>{user.height ?? "—"}</p></S.ProfileItem>
            <S.ProfileItem><span>Idade:</span> <p>{user.age ?? "—"}</p></S.ProfileItem>
          </S.ProfileSection>
          <S.ButtonWrapper>
            <Button backgroundColor="#599e6d" onClick={handleRefresh}><RotateCcw size={16} /> Atualizar Dados</Button>
            <Button backgroundColor="#c75d56" onClick={handleLogout}><LogOut size={16} /> Sair da Conta</Button>
          </S.ButtonWrapper>
        </S.ProfileContainer>
        <S.TipsContainer>
          <h3>Algumas Dicas</h3>
          <S.TipCard><Droplets size={18} /><p>Beba pelo menos 2L de água por dia</p></S.TipCard>
          <S.TipCard><Dumbbell size={18} /><p>Treine com consistência semanal</p></S.TipCard>
          <S.TipCard><BedDouble size={18} /><p>Durma entre 7h e 8h todas as noites</p></S.TipCard>
          <S.TipCard><Apple size={18} /><p>Mantenha uma alimentação equilibrada</p></S.TipCard>
        </S.TipsContainer>
      </S.LeftColumn>
      <S.RightColumn>
        <S.Card>
          <h3>Última Dieta</h3>
          <S.ScrollBox>
            {user.lastDiet ? (
              <ReactMarkdown
                children={user.lastDiet}
                components={{
                  h1: ({ children }) => <S.PlanTitle>{children}</S.PlanTitle>,
                  h2: ({ children }) => <S.DayCard>{children}</S.DayCard>,
                  h3: ({ children }) => <S.MealTitle>{children}</S.MealTitle>,
                  ul: ({ children }) => <S.MealList>{children}</S.MealList>,
                  li: ({ children }) => <S.MealItem>{children}</S.MealItem>,
                  p: ({ children }) => <S.Paragraph>{children}</S.Paragraph>,
                }}
              />
            ) : <p>—</p>}
          </S.ScrollBox>
        </S.Card>
        <S.Card>
          <h3>Último Treino</h3>
          <S.ScrollBox>
            {user.lastTraining ? (
              <ReactMarkdown
                children={user.lastTraining}
                components={{
                  h1: ({ children }) => <S.PlanTitle>{children}</S.PlanTitle>,
                  h2: ({ children }) => <S.DayCard>{children}</S.DayCard>,
                  h3: ({ children }) => <S.MealTitle>{children}</S.MealTitle>,
                  ul: ({ children }) => <S.MealList>{children}</S.MealList>,
                  li: ({ children }) => <S.MealItem>{children}</S.MealItem>,
                  p: ({ children }) => <S.Paragraph>{children}</S.Paragraph>,
                }}
              />
            ) : <p>—</p>}
          </S.ScrollBox>
        </S.Card>
      </S.RightColumn>
    </S.PageWrapper>
  );
};

export { UserProfile };