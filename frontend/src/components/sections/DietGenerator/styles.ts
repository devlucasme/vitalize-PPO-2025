import styled, { keyframes } from "styled-components";
import { CheckCircle } from "lucide-react";

const spin = keyframes`
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
`;

export const Main = styled.main`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 92vh;
  padding: 1rem;

  @media (min-width: 1024px) and (max-width: 1440px) {
    min-height: 88vh;
    padding: 0.8rem;
  }

  @media (max-width: 480px) {
    height: 100vh;
  }
`;

export const BackgroundImage = styled.img<{ isVisible: boolean }>`
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  opacity: ${({ isVisible }) => (isVisible ? 0.5 : 0)};
  transition: opacity 1.5s ease-in-out;
  pointer-events: none;
  user-select: none;
  z-index: 0;
`;

export const Overlay = styled.div`
  position: absolute;
  inset: 0;
  background: rgba(0,0,0,0.3);
  z-index: 1;
`;

export const Container = styled.div`
  position: relative;
  z-index: 2;
  width: 100%;
  max-width: 70%;
  display: flex;
  flex-direction: column;
  align-items: center;

  @media (max-width: 1024px) { max-width: 90%; }
  @media (max-width: 480px) { max-width: 100%; }
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
      ? "rgba(255,255,255,0.08)"
      : "rgba(255,255,255,0.6)"};
  backdrop-filter: blur(18px);
  -webkit-backdrop-filter: blur(18px);
  box-shadow: 0 6px 16px rgba(0,0,0,0.2);
  margin: 0 auto;

  @media (min-width: 1024px) and (max-width: 1440px) {
    width: 70%;
    max-height: 500px;
    padding: 1.6rem; 
  }

  @media (max-width: 1400px) { width: 80%; }
  @media (max-width: 1280px) { width: 85%; }
  @media (max-width: 980px) { width: 90%; max-height: 550px; }
  @media (max-width: 720px) { width: 95%; padding: 1.5rem; max-height: 500px; }
  @media (max-width: 480px) { width: 100%; padding: 1rem; max-height: 450px; }
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
  background-color: ${({ theme }) =>
    theme.title === "dark"
      ? "rgba(255,255,255,0.05)"
      : "rgba(255,255,255,0.6)"};

  @media (min-width: 1024px) and (max-width: 1440px) {
    max-height: 320px; 
    padding: 1.2rem;
  }

  @media (max-width: 1024px) { padding: 1.2rem; max-height: 350px; }
  @media (max-width: 768px) { padding: 1rem; max-height: 300px; }
  @media (max-width: 480px) { padding: 0.8rem; max-height: none; }
`;

export const ContentBox = styled.div`
  width: 100%;
  font-size: 0.9rem;
  line-height: 1.6;
  color: ${({ theme }) => theme.colors.text};

  @media (min-width: 1024px) and (max-width: 1440px) {
    font-size: 0.88rem;
    line-height: 1.5;
  }

  @media (max-width: 1024px) { font-size: 0.88rem; line-height: 1.5; }
  @media (max-width: 768px) { font-size: 0.85rem; line-height: 1.4; }
  @media (max-width: 480px) { font-size: 0.8rem; line-height: 1.35; }
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

export const FeedbackWrapper = styled.div`
  margin-top: 0.8rem;
  display: flex;
  justify-content: center;
  width: 100%;
`;

export const FeedbackBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 0.5rem;
  width: 100%;
  padding: 1rem;
  border-radius: 8px;
  background: ${({ theme }) =>
    theme.title === "dark"
      ? "rgba(255,255,255,0.1)"
      : "rgba(0,255,0,0.1)"};
  color: ${({ theme }) => theme.colors.text};
  font-weight: 500;

  span {
    font-size: 1rem;
    margin-left: 0.5rem;
    @media (max-width: 768px) { font-size: 0.9rem; }
    @media (max-width: 480px) { font-size: 0.85rem; }
  }

  a {
    color: ${({ theme }) => theme.colors.primary};
    font-weight: bold;
  }

  a:hover {
    text-decoration: underline;
  }

  @media (max-width: 768px) { padding: 0.8rem; gap: 0.4rem; }
  @media (max-width: 480px) { padding: 0.6rem; gap: 0.3rem; }
`;

export const FeedbackIcon = styled(CheckCircle)`
  width: 20px;
  height: 20px;

  @media (max-width: 768px) { width: 18px; height: 18px; }
  @media (max-width: 480px) { width: 16px; height: 16px; }
`;

export const Modal = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 50%;
  background: ${({ theme }) => (theme.title === "dark" ? "#1e1e1e" : "#fff")};
  padding: 2rem;
  border-radius: 12px;
  gap: 0.5rem;
  opacity: 0;
  transform: translateY(-20px);
  animation: fadeIn 0.3s forwards;

  @keyframes fadeIn { to { opacity: 1; transform: translateY(0); } }

  @media (max-width: 768px) { width: 80%; padding: 1.5rem; }
  @media (max-width: 480px) { width: 95%; padding: 1rem; }
`;

export const ModalTitle = styled.h2`
  font-size: 1.5rem;
  color: #ce5244ff;

  @media (max-width: 480px) { font-size: 1.3rem; }
`;

export const ModalText = styled.p`
  font-size: 0.95rem;
  font-weight: 500;
  color: ${({ theme }) => theme.colors.text};
  text-align: center;
  margin: 1rem 0 0.5rem 0;

  @media (max-width: 480px) { font-size: 0.85rem; }
`;

export const ModalButtons = styled.div`
  display: flex;
  gap: 1rem;
  width: 100%;
  justify-content: center;

  @media (max-width: 480px) { flex-direction: column; }
`;

export const ModalCheckbox = styled.div`
  margin: 1rem 0;
  display: flex;
  align-items: center;
  gap: 0.5rem;

  input {
    width: 16px;
    height: 16px;
    accent-color: ${({ theme }) => theme.colors.primary};
  }

  label {
    font-size: 0.9rem;
    color: ${({ theme }) => theme.colors.text};
    cursor: pointer;

    @media (max-width: 480px) { font-size: 0.8rem; }
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
  box-shadow: 0 3px 10px rgba(0,0,0,0.15);

  @media (max-width: 768px) { font-size: 1.3rem; padding: 0.8rem; }
  @media (max-width: 480px) { font-size: 1.1rem; padding: 0.6rem; }
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
  box-shadow: 0 2px 6px rgba(0,0,0,0.15);

  @media (max-width: 768px) { font-size: 1.15rem; padding: 1rem; }
  @media (max-width: 480px) { font-size: 1rem; padding: 0.7rem; }
`;

export const MealTitle = styled.h3`
  font-size: 1.1rem;
  color: ${({ theme }) => theme.colors.text};
  margin: 1rem 0 0.5rem;

  @media (max-width: 768px) { font-size: 1rem; margin: 0.8rem 0 0.4rem; }
  @media (max-width: 480px) { font-size: 0.95rem; }
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

  @media (max-width: 768px) { font-size: 0.9rem; }
  @media (max-width: 480px) { font-size: 0.85rem; }
`;

export const Paragraph = styled.p`
  font-size: 0.95rem;
  color: ${({ theme }) => theme.colors.text};
  margin: 0.6rem 0 1rem;
  text-align: justify;

  @media (max-width: 768px) { font-size: 0.9rem; margin: 0.5rem 0 0.8rem; }
  @media (max-width: 480px) { font-size: 0.85rem; margin: 0.4rem 0 0.7rem; }
`;