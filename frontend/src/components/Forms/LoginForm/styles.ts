import styled, { keyframes, css } from "styled-components";
import { shade } from "polished";
import { Mail, Lock } from "lucide-react";

type FieldContainerProps = {
  hasError?: boolean;
};

type LoadingBarProps = {
  progress: number;
  visible: boolean;
};

const fadeIn = keyframes`
  from { opacity: 0; transform: translateY(-4px); }
  to { opacity: 1; transform: translateY(0); }
`;

const shimmer = keyframes`
  0% { background-position: 0% 50%; }
  100% { background-position: 100% 50%; }
`;

export const Container = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 100%;
  max-height: 90vh; /* ✅ impede ocupar a tela toda */
  display: flex;
  align-items: center;
  justify-content: center;
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
  }
`;

export const LoginForm = styled.form`
  position: relative;
  background: ${({ theme }) => theme.colors.backgroundShade};
  width: 100%;
  max-width: 420px; /* ✅ menor para notebook */
  border-radius: 8px;
  border: 1px solid ${({ theme }) => theme.colors.borderColor};
  padding: 28px 30px; /* ✅ compacto */
  display: flex;
  flex-direction: column;
  gap: 20px; /* ✅ menor */
  overflow: hidden;
  box-sizing: border-box;

  h2 {
    text-align: center;
    font-size: 1.28rem;
    margin-bottom: 18px;
  }

  img {
    width: 48px; /* ✅ menor */
    border-radius: 50%;
    margin: 0 auto;
  }

  /* ✅ NOTEBOOK 1366px */
  @media (max-width: 1366px) {
    max-width: 390px;
    padding: 24px 26px;
    gap: 18px;

    h2 {
      font-size: 1.22rem;
    }

    img {
      width: 44px;
    }
  }

  /* ✅ NOTEBOOK 1024px */
  @media (max-width: 1024px) {
    max-width: 370px;
    padding: 22px 24px;
    gap: 16px;

    h2 {
      font-size: 1.18rem;
    }

    img {
      width: 42px;
    }
  }

  /* ✅ CELULAR */
  @media (max-width: 480px) {
    max-width: 95%;
    padding: 20px 15px;

    h2 {
      font-size: 1.15rem;
    }

    img {
      width: 40px;
    }
  }
`;

export const LoadingBar = styled.div<LoadingBarProps>`
  position: absolute;
  top: 0;
  left: 0;
  height: 3px;
  width: ${({ progress }) => progress}%;
  background: linear-gradient(
    90deg,
    ${({ theme }) => shade(0.1, theme.colors.primary)},
    ${({ theme }) => theme.colors.primary},
    ${({ theme }) => shade(0.2, theme.colors.primary)}
  );
  background-size: 200% 100%;
  animation: ${shimmer} 1.5s linear infinite;
  border-radius: 2px;
  transition: width 0.4s ease, opacity 0.6s ease;
  ${({ visible }) =>
    visible
      ? css`
          opacity: 1;
        `
      : css`
          opacity: 0;
        `}
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

  @media (max-width: 1366px) {
    font-size: 0.85rem;
  }
`;

export const FieldContainer = styled.div<FieldContainerProps>`
  position: relative;
  display: flex;
  align-items: center;
  padding: 8px 10px; /* ✅ menor */
  border-radius: 8px;
  border: 1px solid ${({ hasError }) => (hasError ? "#e57373" : "#ccc")};
  gap: 6px;
  transition: border-color 0.2s ease;

  &:focus-within {
    border-color: ${({ hasError, theme }) =>
      hasError ? "#e57373" : theme.colors.primary};
  }

  @media (max-width: 1366px) {
    padding: 7px 9px;
  }
`;

export const MailIcon = styled(Mail).attrs({ size: 18 })`
  color: ${({ theme }) => theme.colors.text};
  flex-shrink: 0;
`;

export const LockIcon = styled(MailIcon).attrs({ as: Lock })``;

export const Input = styled.input`
  border: none;
  outline: none;
  font-size: 0.95rem; /* ✅ menor */
  flex: 1;
  background-color: transparent;
  color: ${({ theme }) => theme.colors.text};
  padding-right: 35px;

  &::placeholder {
    font-size: 0.85rem;
    opacity: 0.6;
  }

  @media (max-width: 1366px) {
    font-size: 0.9rem;
  }

  &:-webkit-autofill,
  &:-webkit-autofill:hover,
  &:-webkit-autofill:focus {
    transition: background-color 9999s ease-in-out 0s;
    -webkit-text-fill-color: ${({ theme }) => theme.colors.text} !important;
    box-shadow: 0 0 0px 1000px ${({ theme }) => theme.colors.backgroundShade} inset;
  }
`;

export const TogglePasswordButton = styled.button`
  position: absolute;
  right: 6px;
  top: 50%;
  transform: translateY(-50%);
  background: none;
  border: none;
  outline: none;
  cursor: pointer;
  display: flex;
  align-items: center;
  color: ${({ theme }) => theme.colors.text};
  opacity: 0.8;
  transition: opacity 0.2s ease;

  &:hover {
    opacity: 1;
  }
`;

export const ContainerCheckbox = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 0.85rem;

  @media (max-width: 1366px) {
    font-size: 0.8rem;
  }
`;

export const RememberLabel = styled.label`
  display: flex;
  align-items: center;
  gap: 5px;
  cursor: pointer;

  input {
    accent-color: ${({ theme }) => theme.colors.primary};
    margin-right: 3px;
  }
`;

export const ForgotPasswordLink = styled.a`
  color: ${({ theme }) => theme.colors.primary};
  transition: color 0.3s ease;

  &:hover {
    text-decoration: underline;
    color: ${({ theme }) => shade(0.2, theme.colors.primary)};
  }
`;

export const SignUpLink = styled.p`
  margin-top: 8px;
  text-align: center;
  font-size: 0.8rem;

  a {
    color: ${({ theme }) => theme.colors.primary};

    &:hover {
      text-decoration: underline;
      color: ${({ theme }) => shade(0.2, theme.colors.primary)};
    }
  }
`;

export const ErrorMessage = styled.p`
  color: #e57373;
  font-size: 0.8rem;
  margin-top: 2px;
  min-height: 16px;

  @media (max-width: 1366px) {
    font-size: 0.75rem;
  }
`;

export const SuccessMessage = styled.p`
  color: #38bd90;
  font-size: 0.8rem;
  text-align: center;
`;

export const ErrorAlert = styled.p`
  background-color: rgba(229, 115, 115, 0.1);
  border: 1px solid #e57373;
  color: #e57373;
  font-size: 0.85rem;
  text-align: center;
  padding: 8px 10px;
  border-radius: 6px;
  margin-bottom: 8px;
  animation: ${fadeIn} 0.3s ease forwards;
`;
