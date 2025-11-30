import styled, { css } from "styled-components";
import { User, Mail } from "lucide-react";

export const PageWrapper = styled.div`
  max-width: 70%;
  margin: 3rem auto;
  display: flex;
  flex-wrap: wrap;
  gap: 1.5rem;
  justify-content: center;

  @media (min-width: 1024px) and (max-width: 1440px) {
    max-width: 80%;
    margin: 2.5rem auto;
    gap: 1.2rem;
  }
`;

export const LeftColumn = styled.div`
  flex: 1 1 300px;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  align-items: stretch;

  @media (min-width: 1024px) and (max-width: 1440px) {
    gap: 0.8rem;
  }
`;

export const RightColumn = styled.div`
  flex: 2 1 400px;
  display: flex;
  flex-direction: column;
  gap: 1.5rem;

  @media (min-width: 1024px) and (max-width: 1440px) {
    gap: 1.2rem;
  }
`;

export const ProfileContainer = styled.div`
  padding: 1rem;
  border: 1px solid ${({ theme }) => theme.colors.borderColor};
  border-radius: 10px;
  background: ${({ theme }) => theme.colors.backgroundShade};
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  display: flex;
  flex-direction: column;
  gap: 0.8rem;

  @media (min-width: 1024px) and (max-width: 1440px) {
    padding: 0.9rem;
    gap: 0.7rem;
  }
`;

export const Card = styled(ProfileContainer)`
  max-height: 300px;

  h3 {
    font-size: 1rem;
  }

  @media (min-width: 1024px) and (max-width: 1440px) {
    max-height: 260px;
    h3 {
      font-size: 0.95rem;
    }
  }

  @media (max-width: 768px) {
    max-height: 240px;
    padding: 0.8rem;
    h3 {
      font-size: 0.9rem;
    }
  }

  @media (max-width: 480px) {
    max-height: 200px;
    padding: 0.7rem;
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
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.08);

  h2,
  p {
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

  @media (min-width: 1024px) and (max-width: 1440px) {
    padding: 0.55rem;
    h2 {
      font-size: 1.1rem;
    }
    p {
      font-size: 0.95rem;
    }
  }

  @media (max-width: 768px) {
    padding: 0.5rem;
    h2 {
      font-size: 1rem;
    }
    p {
      font-size: 0.9rem;
    }
  }

  @media (max-width: 480px) {
    padding: 0.4rem;
    h2 {
      font-size: 0.95rem;
    }
    p {
      font-size: 0.85rem;
    }
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

  @media (min-width: 1024px) and (max-width: 1440px) {
    width: 28px;
    height: 28px;
    padding: 4px;
    margin-right: 0.8rem;
  }
`;

export const UserIcon = styled(User)`
  ${IconStyle}
`;
export const MailIcon = styled(Mail)`
  ${IconStyle}
`;

export const ProfileSection = styled.section`
  margin-top: 0.8rem;

  h3 {
    font-size: 1rem;
    margin-bottom: 0.8rem;
    color: ${({ theme }) => theme.colors.primary};
  }

  @media (min-width: 1024px) and (max-width: 1440px) {
    margin-top: 0.6rem;
    h3 {
      font-size: 0.95rem;
      margin-bottom: 0.6rem;
    }
  }
`;

export const ProfileItem = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 0.3rem 0;
  border-bottom: 1px solid ${({ theme }) => theme.colors.borderColor};

  span {
    font-weight: 700;
    color: ${({ theme }) => theme.colors.text};
  }
  p {
    color: ${({ theme }) => theme.colors.text};
    margin: 0;
  }

  @media (min-width: 1024px) and (max-width: 1440px) {
    padding: 0.25rem 0;
    span {
      font-size: 0.95rem;
    }
    p {
      font-size: 0.9rem;
    }
  }
`;

export const ButtonWrapper = styled.div`
  display: flex;
  gap: 0.5rem;
  margin-top: 0.5rem;
  flex-wrap: wrap;
  justify-content: center;

  @media (min-width: 1024px) and (max-width: 1440px) {
    gap: 0.4rem;
    margin-top: 0.4rem;
  }
`;

export const WarningContainer = styled.div`
  position: relative;
  display: flex;
  align-items: flex-start;
  gap: 1rem;
  padding: 1.2rem 1rem;
  border-radius: 14px;
  border: 1px solid ${({ theme }) => theme.colors.borderColor};
  background: linear-gradient(
    135deg,
    ${({ theme }) =>
    theme.title === "dark" ? "#3a3f47" : theme.colors.background},
    ${({ theme }) =>
    theme.title === "dark" ? "#2c3038" : theme.colors.background}
  );
  border-left: 5px solid #e6a93a;
  box-shadow: 0 4px 12px
    ${({ theme }) =>
    theme.title === "dark"
      ? "rgba(255, 255, 255, 0.05)"
      : "rgba(0, 0, 0, 0.08)"};
  transition: all .3s ease;
  overflow: hidden;
  animation: fadeIn .5s ease forwards;

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 6px 14px
      ${({ theme }) =>
    theme.title === "dark"
      ? "rgba(255, 255, 255, 0.08)"
      : "rgba(0, 0, 0, 0.12)"};
  }

  svg {
    flex-shrink: 0;
    color: #e6a93a;
    width: 26px;
    height: 26px;
    margin-top: 4px;
    animation: pulse 2s infinite;
  }

  h3 {
    margin: 0 0 0.6rem 0;
    font-size: 1.05rem;
    font-weight: 700;
    color: ${({ theme }) =>
    theme.title === "dark" ? "#ffe69a" : "#cf8b25ff"};
  }

  p {
    color: ${({ theme }) => theme.colors.text};
    font-size: 0.95rem;
    line-height: 1.45;
    opacity: 0.9;
  }

  strong {
    color: ${({ theme }) => theme.colors.primary};
  }

  @keyframes fadeIn {
    from {
      opacity: 0;
      transform: translateY(-6px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }

  @keyframes pulse {
    0%, 100% {
      opacity: 0.9;
      transform: scale(1);
    }
    50% {
      opacity: 1;
      transform: scale(1.1);
    }
  }

  @media (max-width: 1368px) {
    padding: 0.8rem 0.6rem;
    
    h3 {
      font-size: 0.9rem;
    }
    p {
      font-size: 0.8rem;
    }

    svg {
      width: 22px;
      height: 22px;
    }

  }

  @media (max-width: 768px) {
    flex-direction: column;
    text-align: justify;
    align-items: center;
    padding: 0.7rem;
    gap: 0.6rem;

    svg {
      width: 20px;
      height: 20px;
    }

    h3 {
      font-size: 0.85rem;
      text-align: center;
      margin-bottom: 0.5rem;
    }

    p {
      font-size: 0.78rem;
      max-width: 80%;
      margin: 0 auto 4px;
    }
  }

  @media (max-width: 480px) {
    padding: 0.7rem;
    gap: 0.5rem;

    svg {
      width: 18px;
      height: 18px;
    }

    h3 {
      font-size: 0.8rem;
    }

    p {
      font-size: 0.75rem;
    }
  }
`;

export const PlanTitle = styled.h1`
  font-size: 1.2rem;
  font-weight: 700;
  margin-bottom: 0.8rem;
  color: ${({ theme }) => theme.colors.primary};
  border-bottom: 1px solid ${({ theme }) => theme.colors.borderColor};
  padding-bottom: 0.5rem;

  @media (max-width: 480px) {
    font-size: 1rem;
  }

`;

export const DayCard = styled.h2`
  font-size: 1rem;
  font-weight: 600;
  margin: 1.2rem 0 0.6rem 0;
  color: ${({ theme }) => theme.colors.text};

  @media (max-width: 480px) {
    font-size: 0.9rem;
  }

`;

export const MealTitle = styled.h3`
  font-size: 0.95rem;
  font-weight: 600;
  margin: 0.6rem 0 0.4rem 0;
  color: ${({ theme }) => theme.colors.primary};

  @media (max-width: 480px) {
    font-size: 0.85rem;
  }

`;

export const MealList = styled.ul`
  margin-left: 1rem;
  margin-top: 0.4rem;
  padding-left: 0.5rem;
  list-style-type: none;
  border-left: 2px solid ${({ theme }) => theme.colors.borderColor};

  @media (max-width: 480px) {
    font-size: 0.8rem;
  }

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


  @media (max-width: 480px) {
    font-size: 0.9rem;
  }


`;

export const DataNotFound = styled.p`
  margin-top: 0.4rem;
  line-height: 1.4;
  font-size: 1rem;
  font-weight: 600;
  color: #ce5138ff;

  @media (max-width: 480px) {
    font-size: 0.8rem;
  }

`;

export const DataGenerate = styled.h3`
  display: flex;
  justify-content: space-between;

  span {
    font-weight: 600;
    font-size: 0.9rem;
  }
`;