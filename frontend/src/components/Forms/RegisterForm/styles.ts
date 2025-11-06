import styled, { keyframes } from "styled-components";
import { User, Mail, Lock, Eye, EyeOff } from "lucide-react";
import { shade } from "polished";

type FieldContainerProps = {
  hasError?: boolean;
};

const fadeIn = keyframes`
  from { opacity: 0; transform: translateY(10px); }
  to { opacity: 1; transform: translateY(0); }
`;

export const Container = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 100%;
  max-height: 90vh; /* ✅ impede ocupar a tela toda */
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  padding: 0 1rem;
  box-sizing: border-box;

  @media (max-width: 1366px) {
    max-height: 85vh;
  }

  @media (max-width: 1024px) {
    max-height: 82vh;
  }

  @media (max-width: 480px) {
    max-height: none;
    justify-content: center;
  }
`;

export const FeedbackMessage = styled.div<{ type: "success" | "error" }>`
  margin-top: 12px;
  padding: 10px 14px;
  border-radius: 8px;
  font-weight: 500;
  font-size: 0.85rem;
  color: ${({ type }) => (type === "success" ? "#38bd90" : "#e57373")};
  background-color: ${({ type }) =>
    type === "success" ? "rgba(56,189,144,0.1)" : "rgba(229,115,115,0.1)"};
  border: 1px solid ${({ type }) => (type === "success" ? "#38bd90" : "#e57373")};
  animation: ${fadeIn} 0.3s ease forwards;
  text-align: center;
  width: 50%;
`;

export const RegisterForm = styled.form`
  background: ${({ theme }) => theme.colors.backgroundShade};
  width: 100%;
  max-width: 420px; /* ✅ reduzido */
  border-radius: 8px;
  border: 1px solid ${({ theme }) => theme.colors.borderColor};
  padding: 26px 28px; /* ✅ mais compacto */
  display: flex;
  flex-direction: column;
  gap: 18px; /* ✅ gap reduzido */
  box-sizing: border-box;

  h2 {
    text-align: center;
    font-size: 1.25rem;
    margin-bottom: 10px;
    font-weight: 600;
  }

  img {
    width: 46px; /* ✅ menor */
    border-radius: 50%;
    margin: 0 auto 4px;
  }

  /* ✅ RESPONSIVIDADE PARA NOTEBOOKS */
  @media (max-width: 1366px) {
    max-width: 400px;
    padding: 22px 24px;
    gap: 12px;

    h2 {
      font-size: 1rem;
    }
  }

  @media (max-width: 1024px) {
    max-width: 380px;
    padding: 20px 22px;
    gap: 15px;

    h2 {
      font-size: 1.1rem;
    }
  }

  /* ✅ CELULARES */
  @media (max-width: 480px) {
    max-width: 92%;
    padding: 16px 14px;
    gap: 14px;

    h2 {
      font-size: 1.05rem;
      margin-bottom: 8px;
    }
    img {
      width: 40px;
    }
  }
`;

export const FieldWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
`;

export const Label = styled.label`
  font-size: 0.9rem;
  font-weight: 500;
  color: ${({ theme }) => theme.colors.text};

  @media (max-width: 1366px) {
    font-size: 0.85rem;
  }

  @media (max-width: 480px) {
    font-size: 0.8rem;
  }
`;

export const FieldContainer = styled.div<FieldContainerProps>`
  display: flex;
  align-items: center;
  padding: 8px 10px; /* ✅ menor */
  border-radius: 8px;
  border: 1px solid ${({ hasError }) => (hasError ? "#e57373" : "#ccc")};
  width: 100%;
  position: relative;
  gap: 6px;

  &:focus-within {
    border-color: ${({ hasError, theme }) =>
      hasError ? "#e57373" : theme.colors.primary};
  }

  @media (max-width: 1366px) {
    padding: 7px 9px;
  }

  @media (max-width: 480px) {
    padding: 7px 8px;
  }
`;

export const UserIcon = styled(User).attrs({ size: 18 })`
  color: ${({ theme }) => theme.colors.text};
`;

export const MailIcon = styled(Mail).attrs({ size: 18 })`
  color: ${({ theme }) => theme.colors.text};
`;

export const LockIcon = styled(Lock).attrs({ size: 18 })`
  color: ${({ theme }) => theme.colors.text};
`;

export const EyeIcon = styled(Eye).attrs({ size: 16 })``;
export const EyeOffIcon = styled(EyeOff).attrs({ size: 16 })``;

export const EyeButton = styled.button`
  position: absolute;
  right: 6px;
  top: 50%;
  transform: translateY(-50%);
  background: none;
  border: none;
  color: ${({ theme }) => theme.colors.text};
  cursor: pointer;

  &:hover {
    color: ${({ theme }) => shade(0.2, theme.colors.text)};
  }
`;

export const Input = styled.input`
  border: none;
  outline: none;
  font-size: 0.9rem;
  flex: 1;
  width: 100%;
  background-color: transparent;
  color: ${({ theme }) => theme.colors.text};

  &::placeholder {
    font-size: 0.85rem;
    opacity: 0.7;
  }

  @media (max-width: 1366px) {
    font-size: 0.85rem;
  }

  @media (max-width: 480px) {
    font-size: 0.8rem;
  }
`;

export const ContainerCheckbox = styled.div`
  display: flex;
  justify-content: flex-start;
  font-size: 0.9rem;

  @media (max-width: 1366px) {
    font-size: 0.85rem;
  }

  @media (max-width: 480px) {
    font-size: 0.8rem;
  }
`;

export const TermsLabel = styled.label`
  display: flex;
  align-items: center;
  gap: 5px;
  cursor: pointer;

  input {
    accent-color: ${({ theme }) => theme.colors.primary};
    margin-right: 3px;
  }
`;

export const TermsOfUseLink = styled.a`
  color: ${({ theme }) => theme.colors.primary};
  transition: color 0.3s ease;

  &:hover {
    text-decoration: underline;
    color: ${({ theme }) => shade(0.2, theme.colors.primary)};
  }
`;

export const LoginLink = styled.p`
  margin-top: 10px;
  text-align: center;
  font-size: 0.85rem;

  a {
    color: ${({ theme }) => theme.colors.primary};

    &:hover {
      text-decoration: underline;
      color: ${({ theme }) => shade(0.2, theme.colors.primary)};
    }
  }

  @media (max-width: 1366px) {
    font-size: 0.8rem;
  }

  @media (max-width: 480px) {
    font-size: 0.75rem;
  }
`;

export const ErrorMessage = styled.p`
  color: #e57373;
  font-size: 0.8rem;

  @media (max-width: 1366px) {
    font-size: 0.75rem;
  }

  @media (max-width: 480px) {
    font-size: 0.7rem;
  }
`;
