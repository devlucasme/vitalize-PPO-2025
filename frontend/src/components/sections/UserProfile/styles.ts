import styled, { css } from "styled-components";
import { User, Mail } from "lucide-react";

export const PageWrapper = styled.div`
  max-width: 70%;
  margin: 2rem auto;
  display: flex;
  flex-wrap: wrap;
  gap: 1.5rem;
  justify-content: center;
`;

export const LeftColumn = styled.div`
  flex: 1 1 300px;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  align-items: stretch;
`;

export const RightColumn = styled.div`
  flex: 2 1 400px;
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
`;

export const ProfileContainer = styled.div`
  padding: 1rem;
  border: 1px solid ${({ theme }) => theme.colors.borderColor};
  border-radius: 10px;
  background: ${({ theme }) => theme.colors.backgroundShade};
  box-shadow: 0 2px 8px rgba(0,0,0,0.1);
  display: flex;
  flex-direction: column;
  gap: 0.8rem;
`;

export const Card = styled(ProfileContainer)`
  max-height: 300px;

  h3 {
    font-size: 1rem;
  }
`;

export const ScrollBox = styled.div`
  overflow-y: auto;
  padding-right: 0.5rem;
  margin-top: 0.5rem;
  flex: 1;

  &::-webkit-scrollbar {
    width: 6px;
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

export const UserContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  border-radius: 8px;
  padding: 0.6rem;
  background: ${({ theme }) => theme.colors.backgroundDarkShade};
  border: 1px solid ${({ theme }) => theme.colors.borderColor};
  box-shadow: 0 2px 6px rgba(0,0,0,0.08);

  h2, p {
    display: flex;
    align-items: center;
    gap: 0.5rem;
    margin: 0;
  }

  h2 {
    font-size: 1.2rem;
    font-weight: 500;
    color: ${({ theme }) => theme.colors.text};
  }

  p {
    font-size: 1rem;
    font-weight: 500;
    color: ${({ theme }) => theme.colors.text};
  }
`;

const IconStyle = css`
  width: 30px;
  height: 30px;
  padding: 5px;
  border-radius: 50%;
  background: ${({ theme }) => theme.colors.secondary};
  border: 1px solid ${({ theme }) => theme.colors.borderColor};
  color: #fff;
  margin-right: 1rem;
`;

export const UserIcon = styled(User)` ${IconStyle} `;
export const MailIcon = styled(Mail)` ${IconStyle} `;

export const ProfileSection = styled.section`
  margin-top: 0.8rem;

  h3 {
    font-size: 1rem;
    margin-bottom: 0.8rem;
    color: ${({ theme }) => theme.colors.primary};
  }
`;

export const ProfileItem = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 0.3rem 0;
  border-bottom: 1px solid ${({ theme }) => theme.colors.borderColor};

  span { font-weight: 700; color: ${({ theme }) => theme.colors.text}; }
  p { color: ${({ theme }) => theme.colors.text}; margin: 0; }
`;

export const ButtonWrapper = styled.div`
  display: flex;
  gap: 0.5rem;
  margin-top: 0.5rem;
  flex-wrap: wrap;
  justify-content: center; 
`;

export const TipsContainer = styled(ProfileContainer)`
  display: flex;
  flex-direction: column;
  gap: 0.4rem;

  h3 {
    text-align: center;
    font-size: 1rem;
    font-weight: 700;
    margin-bottom: 0.4rem;
    color: ${({ theme }) => theme.colors.primary};
  }

  @media (max-width: 768px) {
    display: none; 
  }
`;

export const TipCard = styled.div`
  display: flex;
  align-items: center;
  gap: 0.8rem;
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

  @media (max-width: 768px) {
    display: none; 
  }
`;

export const PlanTitle = styled.h1`
  font-size: 1.2rem;
  font-weight: 700;
  margin-bottom: 0.8rem;
  color: ${({ theme }) => theme.colors.primary};
  border-bottom: 1px solid ${({ theme }) => theme.colors.borderColor};
  padding-bottom: 0.5rem;
`;

export const DayCard = styled.h2`
  font-size: 1rem;
  font-weight: 600;
  margin: 1.2rem 0 0.6rem 0;
  color: ${({ theme }) => theme.colors.text};
`;

export const MealTitle = styled.h3`
  font-size: 0.95rem;
  font-weight: 600;
  margin: 0.6rem 0 0.4rem 0;
  color: ${({ theme }) => theme.colors.primary};
`;

export const MealList = styled.ul`
  margin-left: 1rem;
  margin-top: 0.4rem;
  padding-left: 0.5rem;
  list-style-type: none;
  border-left: 2px solid ${({ theme }) => theme.colors.borderColor};
`;

export const MealItem = styled.li`
  margin-bottom: 0.4rem;
  padding: 0.5rem 0.6rem;
  border-radius: 3px;
  background-color: ${({ theme }) =>
    theme.title === "dark"
      ? "rgba(255, 255, 255, 0.08)"
      : "rgba(255, 255, 255, 0.15)"};
  backdrop-filter: blur(15px);
  -webkit-backdrop-filter: blur(15px);
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.06);
  color: ${({ theme }) => theme.colors.text};
`;

export const Paragraph = styled.p`
  margin: 0.6rem 0;
  line-height: 1.4;
  color: ${({ theme }) => theme.colors.text};
`;

export const DataNotFound = styled.p`
  margin-top: 0.4rem;
  line-height: 1.4;
  font-size: 1rem;
  font-weight: 600;
  color: #ce5138ff;
`;

export const DataGenerate = styled.h3`
  display: flex;
  justify-content: space-between;

  span {
    font-weight: 600;
    font-size: 0.9rem;
  }
`;

export const ResponsiveStyles = css`
  @media (max-width: 1024px) {
    ${PageWrapper} { max-width: 95%; gap: 1rem; }
  }

  @media (max-width: 768px) {
    ${LeftColumn}, ${RightColumn} { flex: 1 1 100%; }
    ${TipsContainer}, ${TipCard} { display: none; } 
  }

  @media (max-width: 480px) {
    ${PlanTitle} { font-size: 1rem; padding-bottom: 0.4rem; }
    ${DayCard} { font-size: 0.9rem; margin: 1rem 0 0.4rem 0; }
    ${MealTitle} { font-size: 0.85rem; margin: 0.4rem 0 0.3rem 0; }
    ${MealItem} { padding: 0.4rem 0.5rem; }
    ${UserContent} h2 { font-size: 1rem; }
    ${UserContent} p { font-size: 0.9rem; }
  }
`;