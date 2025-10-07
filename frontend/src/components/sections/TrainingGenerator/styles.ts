import styled, { keyframes } from "styled-components";
import { AlertCircle } from "lucide-react";

export const Main = styled.main`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 92vh;
`;

export const BackgroundImage = styled.img<{ isVisible: boolean }>`
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  opacity: ${({ isVisible }) => (isVisible ? 0.3 : 0)};
  transition: opacity 1.5s ease-in-out;
  pointer-events: none;
  user-select: none;
  z-index: 0;
`;

export const Overlay = styled.div`
  position: absolute;
  inset: 0;
  background: rgba(0, 0, 0, 0.3);
  z-index: 1;
`;

export const Container = styled.div`
  position: relative;
  z-index: 2;
  width: 100%;
  max-width: 70%;
  display: flex;
  justify-content: center;
`;

export const Card = styled.div`
  width: 65%;
  max-height: 600px;
  display: flex;
  flex-direction: column;
  padding: 2rem;
  border-radius: 12px;
  border: 1px solid ${({ theme }) => theme.colors.borderColor};
  background-color: ${({ theme }) =>
    theme.title === "dark"
      ? "rgba(255, 255, 255, 0.08)"
      : "rgba(255, 255, 255, 0.6)"};
  backdrop-filter: blur(18px);
  -webkit-backdrop-filter: blur(18px);
  box-shadow: 0 6px 16px rgba(0, 0, 0, 0.2);
  transition: transform 0.3s ease;
  &:hover {
    transform: scale(1.03);
  }
`;

export const ButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 1.5rem;
`;

export const Box = styled.div`
  flex: 1;
  border-radius: 8px;
  padding: 1.5rem;
  border: 1px solid ${({ theme }) => theme.colors.borderColor};
  max-height: 400px;
  overflow-y: auto;

  &::-webkit-scrollbar {
    width: 8px;
  }
  &::-webkit-scrollbar-track {
    background: ${({ theme }) =>
      theme.title === "dark" ? "rgba(255, 255, 255, 0.05)" : "rgba(255, 255, 255, 0.2)"};
    border-radius: 10px;
  }
  &::-webkit-scrollbar-thumb {
    background-color: ${({ theme }) => theme.colors.text};
    border-radius: 10px;
    border: 2px solid
      ${({ theme }) =>
        theme.title === "dark" ? "rgba(255, 255, 255, 0.05)" : "rgba(255, 255, 255, 0.15)"};
  }
`;

export const ContentBox = styled.div`
  width: 100%;
  font-size: 0.9rem;
  line-height: 1.6;
  color: ${({ theme }) => theme.colors.text};
`;

const spin = keyframes`
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
`;

export const LoadingIcon = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 6px;

  svg {
    animation: ${spin} 1.5s cubic-bezier(0.45, 0, 0.55, 1) infinite;
    transform-origin: center;
    opacity: 0.9;
    transition: opacity 0.3s ease, transform 0.3s ease;
  }
`;

export const PlanTitle = styled.h1`
  text-align: center;
  font-size: 1.5rem;
  font-weight: 600;
  margin-bottom: 2rem;
  color: ${({ theme }) => theme.colors.primary};
  background: ${({ theme }) =>
    theme.title === "dark" ? "rgba(255,255,255,0.05)" : "rgba(255,255,255,0.7)"};
  padding: 1rem;
  border-radius: 5px;
  box-shadow: 0 3px 10px rgba(0, 0, 0, 0.15);
`;

export const DayCard = styled.h2`
  background: ${({ theme }) =>
    theme.title === "dark" ? "rgba(255,255,255,0.05)" : "rgba(255,255,255,0.6)"};
  padding: 1.2rem;
  border-radius: 5px;
  color: ${({ theme }) => theme.colors.text};
  font-size: 1.3rem;
  font-weight: 600;
  text-align: center;
  margin: 2rem 0 1.5rem;
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.15);
`;

export const MealTitle = styled.h3`
  font-size: 1.1rem;
  color: ${({ theme }) => theme.colors.text};
  margin: 1rem 0 0.5rem;
`;

export const MealList = styled.ul`
  margin-bottom: 1.5rem;
  padding-left: 0.5rem;
`;

export const MealItem = styled.li`
  font-size: 0.95rem;
  color: ${({ theme }) => theme.colors.text};
  margin-bottom: 0.4rem;
  padding-left: 1rem;
  position: relative;

  &::before {
    content: "•";
    position: absolute;
    left: 0;
    color: ${({ theme }) => theme.colors.primary};
  }
`;

export const Paragraph = styled.p`
  font-size: 0.95rem;
  color: ${({ theme }) => theme.colors.text};
  margin: 0.6rem 0 1rem;
  text-align: justify;
`;

export const WarningBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
  text-align: center;
  padding: 2rem;
  border-radius: 10px;
  background: ${({ theme }) =>
    theme.title === "dark" ? "rgba(255, 255, 255, 0.05)" : "rgba(255, 255, 255, 0.8)"};
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.2);

  h2 {
    font-size: 1.5rem;
    margin-bottom: 0.5rem;
    color: #e74c3c;
    display: flex;
    align-items: center;
    gap: 0.5rem;
  }

  p {
    font-size: 1rem;
    font-weight: 600;
    color: #e74c3c;
    margin-bottom: 1rem;
  }

  button {
    margin-top: 0.5rem;
  }
`;

export const WarningIcon = styled(AlertCircle)`
  color: #e74c3c;
  width: 1.8rem;
  height: 1.8rem;
`;

export const FeedbackBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 0.5rem;
  margin-top: 1rem;
  padding: 1rem;
  border-radius: 8px;
  background: ${({ theme }) =>
    theme.title === "dark" ? "rgba(255, 255, 255, 0.1)" : "rgba(0, 255, 0, 0.1)"};
  color: ${({ theme }) => theme.colors.text};
  font-weight: 500;
`;