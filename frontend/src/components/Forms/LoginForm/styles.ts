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
  display: flex;
  align-items: center;
  justify-content: center;
  height: 90vh;
`;

export const LoginForm = styled.form`
  position: relative;
  background: ${({ theme }) => theme.colors.backgroundShade};
  width: 100%;
  max-width: 520px;
  border-radius: 5px;
  border: 1px solid ${({ theme }) => theme.colors.borderColor};
  padding: 40px 48px;
  display: flex;
  justify-content: center;
  flex-direction: column;
  gap: 28px;
  overflow: hidden;

  h2 {
    text-align: center;
    font-size: 20px;
    margin-bottom: 40px;
  }

  img {
    width: 60px;
    border-radius: 50%;
    margin: 0 auto;
  }
`;

export const LoadingBar = styled.div<LoadingBarProps>`
  position: absolute;
  top: 0;
  left: 0;
  height: 4px;
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
  margin-bottom: 5px;
`;

export const FieldContainer = styled.div<FieldContainerProps>`
  display: flex;
  align-items: center;
  padding: 10px 12px;
  border-radius: 10px;
  border: 1px solid ${({ hasError }) => (hasError ? "#e57373" : "#ccc")};
  gap: 8px;
  transition: border-color 0.2s ease;

  &:focus-within {
    border-color: ${({ hasError, theme }) =>
      hasError ? "#e57373" : theme.colors.primary};
  }
`;

export const MailIcon = styled(Mail).attrs({ size: 20 })`
  color: ${({ theme }) => theme.colors.text};
  flex-shrink: 0;
`;

export const LockIcon = styled(MailIcon).attrs({ as: Lock })``;

export const Input = styled.input`
  border: none;
  outline: none;
  font-size: 1rem;
  flex: 1;
  background-color: transparent;
  color: ${({ theme }) => theme.colors.text};

  &::placeholder {
    font-size: 14px;
    color: ${({ theme }) => theme.colors.text};
    opacity: 0.6;
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
  font-size: 1rem;
  margin-top: 8px;
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
  margin-top: 10px;
  text-align: center;
  font-size: 0.9rem;

  a {
    color: ${({ theme }) => theme.colors.primary};
    margin-left: 2px;

    &:hover {
      text-decoration: underline;
      color: ${({ theme }) => shade(0.2, theme.colors.primary)};
    }
  }
`;

export const ErrorMessage = styled.p`
  color: #e57373;
  font-size: 0.875rem;
  margin-top: 2px;
`;

export const SuccessMessage = styled.p`
  color: #38bd90;
  font-size: 14px;
  margin-bottom: 12px;
  text-align: center;
`;

export const ErrorAlert = styled.p`
  background-color: rgba(229, 115, 115, 0.1);
  border: 1px solid #e57373;
  color: #e57373;
  font-size: 0.9rem;
  text-align: center;
  padding: 10px 12px;
  border-radius: 8px;
  margin-bottom: 10px;
  animation: ${fadeIn} 0.3s ease forwards;
`;