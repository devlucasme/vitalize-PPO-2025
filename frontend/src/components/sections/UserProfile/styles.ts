import styled, { css } from "styled-components";
import { User, Mail } from "lucide-react";

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

export const UserContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.6rem;
  border-radius: 8px;
  padding: 0.8rem;
  background: ${({ theme }) => theme.colors.backgroundDarkShade};
  border: 1px solid ${({ theme }) => theme.colors.borderColor};
  box-shadow: 0 2px 6px rgba(0,0,0,0.08);

  h2, p {
    display: flex;
    align-items: center;
    gap: 0.6rem;
    margin: 0;
  }

  h2 {
    font-size: 1.5rem;
    color: ${({ theme }) => theme.colors.text};
    font-weight: 500;
  }

  p {
    font-size: 1.1rem;
    color: ${({ theme }) => theme.colors.text};
    font-weight: 500;
  }
`;

const IconStyle = css`
  width: 35px;
  height: 35px;
  padding: 6px;
  border-radius: 50%;
  background: ${({ theme }) => theme.colors.secondary};
  border: 1px solid ${({ theme }) => theme.colors.borderColor};
  color: #fff;
  margin-right: 1.5rem;
`;

export const UserIcon = styled(User)`
  ${IconStyle}
`;

export const MailIcon = styled(Mail)`
  ${IconStyle}
`;

export const ProfileSection = styled.section`
  margin-top: 1rem;

  h3 {
    font-size: 1.15rem;
    margin-bottom: 1rem;
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
  gap: 0.8rem;
  margin-top: 0.8rem;
`;

export const TipsContainer = styled(ProfileContainer)`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;

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
  gap: 1rem;
  padding: 0.9rem;
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
  color: ${({ theme }) => theme.colors.text};
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

export const DataNotFound = styled.p`
  margin-top: 0.5rem;
  line-height: 1.6;
  font-size: 1.1rem;
  font-weight: 600;
  color: #ce5138ff;
`

export const DataGenerate = styled.h3`
  display: flex;
  justify-content: space-between;

  span {
    font-weight: 600;
    font-size: 1rem;
  }
`