import type { FC } from "react";
import * as S from "./styles";
import { Button } from "../../ui/Button/Button";
import UserImage from "../../../assets/alexander-hipp-iEEBWgY_6lA-unsplash.jpg";
import { Edit2, RotateCcw, LogOut, Droplets, Dumbbell, BedDouble, Apple } from "lucide-react";

const UserProfile: FC = () => {    
    return (
        <S.PageWrapper>
            <S.LeftColumn>
                <S.ProfileContainer>
                    <S.ProfileHeader>
                        <S.UserInfo>
                            <img src={UserImage} alt="Foto do usuário" />
                            <div>
                                <h2>Nome do Usuário</h2>
                                <p>usuario@email.com</p>
                            </div>
                        </S.UserInfo>
                        <S.EditButtonWrapper>
                            <Button>
                                <Edit2 size={16} /> Editar Perfil
                            </Button>
                        </S.EditButtonWrapper>
                    </S.ProfileHeader>

                    <S.ProfileSection>
                        <h3>Dados Pessoais</h3>
                        <S.ProfileItem><span>Peso:</span> <p>—</p></S.ProfileItem>
                        <S.ProfileItem><span>Altura:</span> <p>—</p></S.ProfileItem>
                        <S.ProfileItem><span>Idade:</span> <p>—</p></S.ProfileItem>
                        <S.ProfileItem><span>Meta:</span> <p>—</p></S.ProfileItem>
                    </S.ProfileSection>

                    <S.ButtonWrapper>
                        <Button>
                            <RotateCcw size={16}/> Atualizar Dados
                        </Button>
                        <Button backgroundColor="#c75d56">
                            <LogOut size={16}/> Sair da Conta
                        </Button>
                    </S.ButtonWrapper>
                </S.ProfileContainer>
            </S.LeftColumn>
            <S.RightColumn>
                <S.ProgressContainer>
                    <h3>Progresso</h3>
                    <S.ProfileItem><span>Última dieta:</span> <p>—</p></S.ProfileItem>
                    <S.ProfileItem><span>Último treino:</span> <p>—</p></S.ProfileItem>
                    <S.ProfileItem><span>Status:</span> <p>—</p></S.ProfileItem>
                    <S.ButtonWrapper>
                        <Button>
                            <RotateCcw size={16} /> Atualizar Progresso
                        </Button>
                    </S.ButtonWrapper>
                </S.ProgressContainer>
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
            </S.RightColumn>
        </S.PageWrapper>
    );
};

export { UserProfile };