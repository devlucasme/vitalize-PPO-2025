import styled, { keyframes } from "styled-components";
import { User, Mail, Lock, Eye, EyeOff } from "lucide-react";
import { shade } from "polished";
import { Link } from "react-router-dom";

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
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 0 1rem;
  box-sizing: border-box;

  @media (max-width: 480px) {
    max-width: 90%;
    padding: 0 0.5rem;
  }

  /* Ajuste Notebook */
  @media (min-width: 1024px) and (max-width: 1440px) {
    padding: 0 1.5rem;
  }

  /* Ajuste Full HD */
  @media (min-width: 1600px) {
    padding: 0 2rem;
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
  width: 80%;
`;

export const RegisterForm = styled.form`
  position: relative;
  background: ${({ theme }) => theme.colors.backgroundShade};
  width: 100%;
  max-width: 520px;
  border-radius: 8px;
  border: 1px solid ${({ theme }) => theme.colors.borderColor};
  padding: 40px 48px;
  display: flex;
  flex-direction: column;
  gap: 26px;
  box-sizing: border-box;

  h2 {
    text-align: center;
    font-size: 1.5rem;
    margin-bottom: 18px;
    font-weight: 600;
  }

  img {
    width: 60px;
    border-radius: 50%;
    margin: 0 auto 6px;
  }

  @media (max-width: 660px) {
    max-width: 400px;
    padding: 30px 35px;

    h2 {
      font-size: 1.35rem;
    }

    img {
      width: 50px;
    }
  }

  @media (max-width: 480px) {
    padding: 18px 14px;
    gap: 16px;

    h2 {
      font-size: 1.2rem;
      margin-bottom: 12px;
    }

    img {
      width: 42px;
    }
  }

  /* Ajuste Notebook (1366x768) */
  @media (min-width: 1024px) and (max-width: 1440px) {
    max-width: 460px;
    padding: 32px 36px;
    gap: 18px;

    h2 {
      font-size: 1.45rem;
    }

    img {
      width: 58px;
    }
  }

  /* Ajuste Full HD (1920x1080) */
  @media (min-width: 1600px) {
    max-width: 480px;
    padding: 36px 40px;
    gap: 20px;

    h2 {
      font-size: 1.5rem;
    }

    img {
      width: 60px;
    }
  }
`;

export const BackLink = styled(Link)`
  position: absolute;
  top: 18px;
  left: 18px;
  display: flex;
  align-items: center;
  gap: 6px;
  color: ${({ theme }) => theme.colors.primary};
  font-weight: bold;
  text-decoration: none;
  font-size: 0.9rem;
  transition: color 0.3s ease, transform 0.2s ease;

  &:hover {
    color: ${({ theme }) => shade(0.2, theme.colors.primary)};
  }

  svg {
    flex-shrink: 0;
    font-weight: bold;
  }

  @media (max-width: 660px) {
    top: 14px;
    left: 14px;
    font-size: 0.85rem;
  }

  @media (max-width: 480px) {
    top: 10px;
    left: 10px;
    font-size: 0.8rem;
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
  margin-bottom: 4px;

  @media (max-width: 480px) {
    font-size: 0.8rem;
  }
`;

export const FieldContainer = styled.div<FieldContainerProps>`
  display: flex;
  align-items: center;
  padding: 10px 12px;
  border-radius: 8px;
  border: 1px solid ${({ hasError }) => (hasError ? "#e57373" : "#ccc")};
  width: 100%;
  position: relative;
  gap: 8px;

  &:focus-within {
    border-color: ${({ hasError, theme }) =>
      hasError ? "#e57373" : theme.colors.primary};
  }

  @media (max-width: 480px) {
    padding: 8px 10px;
  }

  /* Ajuste Notebook */
  @media (min-width: 1024px) and (max-width: 1440px) {
    padding: 9px 11px;
  }

  /* Ajuste Full HD */
  @media (min-width: 1600px) {
    padding: 10px 12px;
  }
`;

export const UserIcon = styled(User).attrs({ size: 20 })`
  color: ${({ theme }) => theme.colors.text};
`;

export const MailIcon = styled(Mail).attrs({ size: 20 })`
  color: ${({ theme }) => theme.colors.text};
`;

export const LockIcon = styled(Lock).attrs({ size: 20 })`
  color: ${({ theme }) => theme.colors.text};
`;

export const EyeIcon = styled(Eye).attrs({ size: 18 })``;
export const EyeOffIcon = styled(EyeOff).attrs({ size: 18 })``;

export const EyeButton = styled.button`
  position: absolute;
  right: 8px;
  top: 50%;
  transform: translateY(-50%);
  background: none;
  border: none;
  color: ${({ theme }) => theme.colors.text};
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;

  &:hover {
    color: ${({ theme }) => shade(0.2, theme.colors.text)};
  }
`;

export const Input = styled.input`
  border: none;
  outline: none;
  font-size: 1rem;
  flex: 1;
  width: 100%;
  background-color: transparent;
  color: ${({ theme }) => theme.colors.text};
  margin-left: 8px;

  &::placeholder {
    font-size: 0.9rem;
    color: ${({ theme }) => theme.colors.text};
    opacity: 0.7;
  }

  &:-webkit-autofill {
    -webkit-box-shadow: 0 0 0 1000px
      ${({ theme }) => shade(0.04, theme.colors.background)} inset !important;
    -webkit-text-fill-color: ${({ theme }) => theme.colors.text} !important;
  }

  @media (max-width: 480px) {
    font-size: 0.85rem;
  }
`;

export const ContainerCheckbox = styled.div`
  display: flex;
  justify-content: flex-start;
  font-size: 0.9rem;
  margin-top: 4px;

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
    margin-left: 3px;

    &:hover {
      text-decoration: underline;
      color: ${({ theme }) => shade(0.2, theme.colors.primary)};
    }
  }

  @media (max-width: 480px) {
    font-size: 0.8rem;
  }
`;

export const ErrorMessage = styled.p`
  color: #e57373;
  font-size: 0.8rem;
  margin-top: 2px;

  @media (max-width: 480px) {
    font-size: 0.75rem;
  }
`;
