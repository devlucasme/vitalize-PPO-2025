import styled, { keyframes, css } from "styled-components";
import { shade } from "polished";
import { Lock } from "lucide-react";

type FieldContainerProps = {
  hasError?: boolean;
};

type LoadingBarProps = {
  progress: number;
  visible: boolean;
};

const shimmer = keyframes`
  0% { background-position: 0% 50%; }
  100% { background-position: 100% 50%; }
`;

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 90vh;
  padding: 1rem; 
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
  flex-direction: column;
  gap: 28px;
  overflow: hidden;

  h2 {
    text-align: center;
    font-size: 20px;
  }

  p {
    text-align: center;
    font-size: 14px;
    color: ${({ theme }) => theme.colors.text};
  }

  @media (max-width: 768px) {
    padding: 30px 24px;
    gap: 20px;

    h2 {
      font-size: 18px;
    }

    p {
      font-size: 13px;
    }
  }

  @media (max-width: 480px) {
    padding: 24px 16px;
    gap: 16px;

    h2 {
      font-size: 16px;
    }

    p {
      font-size: 12px;
    }
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
      ? css`opacity: 1;`
      : css`opacity: 0;`
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
  margin-bottom: 0.6rem;

  @media (max-width: 480px) {
    font-size: 0.8rem;
  }
`;

export const FieldContainer = styled.div<FieldContainerProps>`
  display: flex;
  align-items: center;
  padding: 10px 12px;
  border-radius: 10px;
  border: 1px solid ${({ hasError }) => (hasError ? "#e57373" : "#ccc")};
  gap: 8px;
  transition: border-color 0.2s ease;

  @media (max-width: 480px) {
    padding: 8px 10px;
  }
`;

export const LockIcon = styled(Lock).attrs({ size: 20 })`
  color: ${({ theme }) => theme.colors.text};
  flex-shrink: 0;

  @media (max-width: 480px) {
    width: 18px;
    height: 18px;
  }
`;

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

  @media (max-width: 480px) {
    font-size: 0.9rem;

    &::placeholder {
      font-size: 12px;
    }
  }
`;

export const ButtonContainer = styled.div`
  display: flex;
  gap: 12px;
  justify-content: center;
  flex-wrap: wrap;
`;

export const FeedbackBox = styled.div`
  font-size: 14px;
  text-align: center;
  padding: 10px;
  border-radius: 8px;
  margin-bottom: 10px;

  @media (max-width: 480px) {
    font-size: 12px;
    padding: 8px;
  }
`;

export const FieldError = styled.span`
  color: #e57373;
  font-size: 0.8rem;
  margin-top: 4px;
  display: block;

  @media (max-width: 480px) {
    font-size: 0.7rem;
  }
`;