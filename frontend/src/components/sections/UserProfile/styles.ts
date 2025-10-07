import styled from "styled-components";
import { User } from "lucide-react";

export const PageWrapper = styled.div`
  max-width: 70%;
  margin: 4rem auto;
  display: flex;
  max-height: 500px;
  gap: 2rem;
`;

export const LeftColumn = styled.div`
  flex: 1.3;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  align-items: stretch;
`;

export const RightColumn = styled.div`
  flex: 2;
  display: flex;
  flex-direction: column;
  gap: 2rem;
`;

export const ProfileContainer = styled.div`
  padding: 1.5rem;
  border: 1px solid ${({ theme }) => theme.colors.borderColor};
  border-radius: 10px;
  background: ${({ theme }) => theme.colors.backgroundShade};
  box-shadow: 0 2px 8px rgba(0,0,0,0.1);
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

export const Card = styled(ProfileContainer)`
  max-height: 350px;
  display: flex;
  flex-direction: column;

  h3 {
    font-size: 1.2rem;
  }

`;

export const ScrollBox = styled.div`
  overflow-y: auto;
  padding-right: 0.5rem;
  margin-top: 0.5rem;
  flex: 1;

  &::-webkit-scrollbar {
    width: 8px;
  }

  &::-webkit-scrollbar-track {
    background: ${({ theme }) => theme.colors.backgroundDarkShade};
    border-radius: 10px;
  }

  &::-webkit-scrollbar-thumb {
    background-color: ${({ theme }) => theme.colors.primary};
    border-radius: 10px;
    border: 2px solid ${({ theme }) => theme.colors.backgroundShade};
  }
`;

export const ProfileHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0.5rem;
`;

export const UserInfo = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
`;

export const UserContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.3rem;

  h2 {
    font-size: 1.5rem;
    color: ${({ theme }) => theme.colors.primary};
  }

  p {
    font-size: 0.95rem;
    color: ${({ theme }) => theme.colors.text};
  }
`;

export const UserIcon = styled(User)`
  border-radius: 50%;
  background: ${({ theme }) => theme.colors.secondary};
  width: 36px;
  height: 36px;
  padding: 7px;
  color: #fff;
`;

export const EditButtonWrapper = styled.div`
  button {
    display: flex;
    align-items: center;
    justify-content: center; 
    gap: 0.5rem;
    padding: 0.5rem 0.8rem;
    font-size: 0.85rem;
  }
`;

export const ProfileSection = styled.section`
  margin-bottom: 1.5rem;
  h3 {
    font-size: 1.15rem;
    margin-bottom: 0.7rem;
    color: ${({ theme }) => theme.colors.primary};
  }
`;

export const ProfileItem = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 0.4rem 0;
  border-bottom: 1px solid ${({ theme }) => theme.colors.borderColor};

  span { font-weight: 700; color: ${({ theme }) => theme.colors.text}; }
  p { color: ${({ theme }) => theme.colors.text}; margin: 0; }
`;

export const ButtonWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.8rem;
  margin-top: 1rem;

  button {
    margin: 0 auto;
    width: 70%;
    display: flex;
    align-items: center;
    justify-content: center; 
    gap: 0.5rem;
  }
`;

export const TipsContainer = styled(ProfileContainer)`
  display: flex;
  flex-direction: column;
  gap: 0.8rem;

  h3 {
    text-align: center;
    font-size: 1.2rem;
    font-weight: 700;
    margin-bottom: 0.5rem;
    color: ${({ theme }) => theme.colors.primary};
  }
`;

export const TipCard = styled.div`
  display: flex;
  align-items: center;
  gap: 0.7rem;
  padding: 0.7rem;
  border: 1px solid ${({ theme }) => theme.colors.borderColor};
  border-radius: 10px;
  background: ${({ theme }) => theme.colors.backgroundDarkShade};
  transition: transform 0.3s ease, box-shadow 0.3s ease;

  svg { color: ${({ theme }) => theme.colors.primary}; }
  p { margin: 0; color: ${({ theme }) => theme.colors.text}; }

  &:hover {
    transform: scale(1.02);
    box-shadow: 0 4px 8px rgba(0,0,0,0.15);
  }
`;

export const PlanTitle = styled.h1`
  font-size: 1.5rem;
  font-weight: 700;
  margin-bottom: 1rem;
  color: ${({ theme }) => theme.colors.primary};
  border-bottom: 1px solid ${({ theme }) => theme.colors.borderColor};
  padding-bottom: 1rem;
`;

export const DayCard = styled.h2`
  font-size: 1.25rem;
  font-weight: 600;
  margin: 1.8rem 0 1rem 0;
  color: ${({ theme }) =>
    theme.title === "light" ? "#3f6ed3ff" : "#60a5fa"};
`;

export const MealTitle = styled.h3`
  font-size: 1.05rem;
  font-weight: 600;
  margin: 1rem 0 0.6rem 0;
  color: ${({ theme }) => theme.colors.primary};
`;

export const MealList = styled.ul`
  margin-left: 1.2rem;
  margin-top: 0.5rem;
  padding-left: 0.5rem;
  list-style-type: none;
  border-left: 2px solid ${({ theme }) => theme.colors.borderColor};
`;

export const MealItem = styled.li`
  margin-bottom: 0.6rem;
  padding: 0.6rem 0.8rem;
  border-radius: 8px;

  background-color: ${({ theme }) =>
    theme.title === "dark"
      ? "rgba(255, 255, 255, 0.08)"
      : "rgba(255, 255, 255, 0.15)"}; 

  backdrop-filter: blur(20px);
  -webkit-backdrop-filter: blur(20px);
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.08);
  color: ${({ theme }) => theme.colors.text};
`;

export const Paragraph = styled.p`
  margin-top: 0.8rem;
  margin-bottom: 0.8rem;
  line-height: 1.6;
  color: ${({ theme }) => theme.colors.text};
`;