import styled from "styled-components";
import { shade } from "polished";
import { Mail, Lock } from "lucide-react";

type FieldContainerProps = {
  hasError?: boolean;
}

export const Container = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    height: 90vh;
`;

export const LoginForm = styled.form`
    background: ${({ theme }) => theme.colors.backgroundShade};
    width: 100%;
    max-width: 450px;
    border-radius: 5px;
    border: 1px solid ${({ theme }) => theme.colors.borderColor};
    padding: 24px 32px;
    display: flex;
    justify-content: center;
    flex-direction: column;
    gap: 24px;

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

    &:focus-within {
    border-color: ${({ hasError, theme }) => (hasError ? "#e57373" : theme.colors.primary)};
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
  }

  &:-webkit-autofill,
  &:-webkit-autofill:hover,
  &:-webkit-autofill:focus,
  &:-webkit-autofill:active {
    -webkit-box-shadow: 0 0 0 1000px ${({ theme }) => shade(0.04, theme.colors.background)} inset !important;
    box-shadow: 0 0 0 1000px ${({ theme }) => shade(0.04, theme.colors.background)} inset !important;
    -webkit-text-fill-color: ${({ theme }) => theme.colors.text} !important;
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
    transition: color .3s ease;

    &:hover {
      text-decoration: underline;
      color: ${({ theme }) => shade(0.2, theme.colors.primary)};
    }
`;

export const SignUpLink = styled.p`
    margin-top: 10px;
    text-align: center;
    font-size: 0.9rem;
    text-decoration: none;

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