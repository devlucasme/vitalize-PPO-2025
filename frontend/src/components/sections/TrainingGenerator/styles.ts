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
  padding: 0.5rem; /* reduzido */

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
  max-width: 68%;
  display: flex;
  flex-direction: column;
  align-items: center;

  @media (max-width: 1366px) { max-width: 78%; }
  @media (max-width: 1024px) { max-width: 90%; }
  @media (max-width: 480px) { max-width: 100%; }
`;

export const Card = styled.div`
  width: 60%;
  max-height: 480px; /* ✅ reduzido */
  display: flex;
  flex-direction: column;
  padding: 1.4rem; /* ✅ padding reduzido */
  border-radius: 12px;
  border: 1px solid ${({ theme }) => theme.colors.borderColor};
  background-color: ${({ theme }) =>
    theme.title === "dark" ? "rgba(255,255,255,0.08)" : "rgba(255,255,255,0.6)"};
  backdrop-filter: blur(18px);
  -webkit-backdrop-filter: blur(18px);
  box-shadow: 0 6px 16px rgba(0,0,0,0.2);

  /* ✅ Ajustes para notebooks */
  @media (max-width: 1440px) {
    width: 58%;
    max-height: 470px;
  }

  @media (max-width: 1366px) {
    width: 55%;
    max-height: 450px;
    padding: 1.2rem;
  }

  @media (max-width: 1280px) {
    width: 60%;
    max-height: 440px;
    padding: 1rem;
  }

  @media (max-width: 1100px) {
    width: 70%;
    max-height: 460px;
  }

  /* Já existia */
  @media (max-width: 980px) { 
    width: 90%; 
    max-height: 520px; 
  }

  @media (max-width: 720px) { 
    width: 95%; 
    padding: 1.2rem; 
    max-height: 480px; 
  }

  @media (max-width: 480px) { 
    width: 100%; 
    padding: 1rem; 
    max-height: 450px; 
  }
`;

export const ButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 1rem; /* reduzido */
`;

export const Box = styled.div`
  flex: 1;
  border-radius: 8px;
  padding: 1.5rem; /* reduzido */
  border: 1px solid ${({ theme }) => theme.colors.borderColor};
  max-height: 300px; /* ✅ reduzido para notebook */
  overflow-y: auto;

  background-color: ${({ theme }) =>
    theme.title === "dark" ? "rgba(255,255,255,0.05)" : "rgba(255,255,255,0.6)"};

  @media (max-width: 1366px) { max-height: 280px; }
  @media (max-width: 1024px) { max-height: 260px; }

  @media (max-width: 768px) { padding: 1rem; max-height: 250px; }
  @media (max-width: 480px) { padding: 0.8rem; max-height: none; }
`;

export const ContentBox = styled.div`
  width: 100%;
  font-size: 0.85rem; /* menor */
  line-height: 1.45;

  @media (max-width: 1024px) { font-size: 0.82rem; }
  @media (max-width: 768px) { font-size: 0.8rem; }
  @media (max-width: 480px) { font-size: 0.78rem; }
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
  margin-top: 0.6rem;
  display: flex;
  justify-content: center;
  width: 100%;
`;

export const FeedbackBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 0.4rem;
  width: 100%;
  padding: 0.8rem;
  border-radius: 8px;

  background: ${({ theme }) =>
    theme.title === "dark" ? "rgba(255,255,255,0.1)" : "rgba(0,255,0,0.1)"};

  span {
    font-size: 0.85rem;
  }
`;

export const FeedbackIcon = styled(CheckCircle)`
  width: 18px;
  height: 18px;
`;

export const Modal = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 50%;
  background: ${({ theme }) => (theme.title === "dark" ? "#1e1e1e" : "#fff")};
  padding: 1.8rem;
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
  font-size: 1.4rem;

  @media (max-width: 480px) { font-size: 1.2rem; }
`;

export const ModalText = styled.p`
  font-size: 0.9rem;
  margin: 1rem 0 0.5rem 0;
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
    accent-color: #68b957;
  }

  label {
    font-size: 0.85rem;
  }
`;

export const PlanTitle = styled.h1`
  text-align: center;
  font-size: 1.35rem;
  margin-bottom: 1.5rem;
  padding: 0.8rem;
  border-radius: 5px;
  box-shadow: 0 3px 10px rgba(0,0,0,0.15);
`;

export const DayCard = styled.h2`
  padding: 1rem;
  font-size: 1.15rem;
  margin: 1.5rem 0 1rem;
`;

export const MealTitle = styled.h3`
  font-size: 1rem;
  margin: 0.8rem 0 0.4rem;
`;

export const MealList = styled.ul`
  margin-bottom: 1rem;
  padding-left: 0.5rem;
`;

export const MealItem = styled.li`
  font-size: 0.9rem;
  margin-bottom: 0.35rem;

  @media (max-width: 480px) { font-size: 0.85rem; }
`;

export const Paragraph = styled.p`
  font-size: 0.9rem;
  margin: 0.5rem 0 0.8rem;
  text-align: justify;
`;
