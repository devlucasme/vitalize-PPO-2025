import styled, { keyframes, css } from "styled-components";

type FieldContainerProps = {
  hasError?: boolean;
};

type CalculatorCardProps = {
  isHidden?: boolean;
};

const fadeIn = keyframes`
  from { opacity: 0; transform: translateY(15px); }
  to { opacity: 1; transform: translateY(0); }
`;

const fadeOut = keyframes`
  from { opacity: 1; transform: translateY(0); }
  to { opacity: 0; transform: translateY(-10px); }
`;

const highlightPulse = keyframes`
  0% { transform: scale(1); filter: brightness(1); }
  50% { transform: scale(1.03); filter: brightness(1.25); }
  100% { transform: scale(1); filter: brightness(1); }
`;

export const FormContainer = styled.form`
  display: flex;
  justify-content: center;
  align-items: flex-start;
  padding: 2rem 1.5rem;
  background: ${({ theme }) => theme.colors.background};
  width: 100%;
  min-height: 80vh;

  @media (max-width: 768px) {
    padding: 1rem;
    min-height: auto;
    align-items: flex-start;
  }

  @media (max-width: 480px) {
    padding: 0.8rem 0.5rem;
  }
`;

export const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: flex-start;
  gap: 2rem;
  width: 100%;
  max-width: 950px;

  @media (max-width: 1024px) {
    gap: 1.5rem;
  }

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
    gap: 1rem;
  }
`;

export const CalculatorCard = styled.form<CalculatorCardProps>`
  flex: 1 1 50%;
  background: ${({ theme }) => theme.colors.backgroundShade};
  padding: 2rem;
  border-radius: 14px;
  border: 1px solid ${({ theme }) => theme.colors.borderColor};
  box-shadow: 0 4px 14px rgba(0, 0, 0, 0.1);
  display: flex;
  flex-direction: column;
  transition: all 0.4s ease;
  animation: ${({ isHidden }) => (isHidden ? fadeOut : fadeIn)} 0.4s ease forwards;

  ${({ isHidden }) =>
    isHidden &&
    css`
      opacity: 0;
      transform: translateY(-20px);
      pointer-events: none;
      height: 0;
      overflow: hidden;
      margin: 0;
      padding: 0;
      border: none;
    `}

  h2 {
    margin-bottom: 1.2rem;
    font-size: 1.25rem;
    text-align: center;
    color: ${({ theme }) => theme.colors.text};
  }

  img {
    margin: 0 auto;
    margin-bottom: 1rem;
    border-radius: 50%;
    height: 60px;
    width: 60px;
  }

  @media (max-width: 768px) {
    flex: 1 1 100%;
    max-width: 400px;
    padding: 1.2rem;
    margin-top: 0.3rem;

    h2 {
      font-size: 1.1rem;
    }
  }

  @media (max-width: 480px) {
    max-width: 340px;
    padding: 1rem;

    h2 {
      font-size: 1rem;
    }
  }
`;

export const InputRow = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
  margin-bottom: 0.8rem;

  @media (max-width: 480px) {
    flex-direction: column;
    gap: 0.6rem;
  }
`;

export const InputGroup = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
`;

export const Label = styled.label`
  margin-bottom: 0.4rem;
  font-weight: 600;
  font-size: 0.95rem;
  color: ${({ theme }) => theme.colors.text};
  display: flex;
  align-items: center;
  gap: 0.3rem;

  @media (max-width: 480px) {
    font-size: 0.85rem;
  }
`;

export const FieldContainer = styled.div<FieldContainerProps>`
  display: flex;
  align-items: center;
  border: 1px solid
    ${({ hasError, theme }) =>
      hasError ? "#e57373" : theme.colors.borderColor};
  border-radius: 0.5rem;
  padding: 0.4rem 0.6rem;
  background: ${({ theme }) =>
    theme.title === "dark"
      ? "rgba(255, 255, 255, 0.05)"
      : "rgba(0, 0, 0, 0.05)"};
  transition: border 0.2s ease;

  &:focus-within {
    border-color: ${({ theme }) => theme.colors.primary};
  }

  @media (max-width: 480px) {
    padding: 0.35rem 0.5rem;
  }
`;

export const Input = styled.input`
  border: none;
  outline: none;
  font-size: 0.95rem;
  flex: 1;
  background-color: transparent;
  color: ${({ theme }) => theme.colors.text};
  padding: 0.5rem;

  &::placeholder {
    color: ${({ theme }) => theme.colors.text};
    opacity: 0.7;
  }

  @media (max-width: 480px) {
    font-size: 0.85rem;
    padding: 0.4rem;
  }
`;

export const Select = styled.select`
  border: none;
  outline: none;
  flex: 1;
  background-color: transparent;
  font-size: 0.95rem;
  padding: 0.5rem;
  color: ${({ theme }) => theme.colors.text};

  option {
    color: ${({ theme }) => theme.colors.text};
    background: ${({ theme }) => theme.colors.background};
  }

  @media (max-width: 480px) {
    font-size: 0.85rem;
    padding: 0.4rem;
  }
`;

export const ButtonContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.55rem; 
  justify-content: center;
  align-items: center;
  width: 100%;
  margin-top: 1rem;

  button {
    flex: 1 1 200px;
    max-width: 240px;
    min-height: 42px;
    font-size: 0.95rem;
    padding: 0.6rem 0.8rem;
    transition: transform 0.2s ease, opacity 0.2s ease;
  }

  button:hover {
    transform: scale(1.03);
    opacity: 0.95;
  }

  @media (max-width: 768px) {
    justify-content: center;

    button {
      flex: 1 1 48%;
      font-size: 0.9rem;
      min-height: 40px;
    }
  }

  @media (max-width: 480px) {
    flex-direction: column;
    align-items: center;

    button {
      width: 90%;
      max-width: 260px;
      min-height: 36px;
      font-size: 0.85rem;
    }
  }
`;

export const ErrorMessage = styled.span`
  color: #e57373;
  font-size: 0.8rem;
  margin-top: 0.3rem;
`;

export const ResultCard = styled.div`
  flex: 1 1 45%;
  background: ${({ theme }) => theme.colors.backgroundShade};
  padding: 2rem;
  border-radius: 14px;
  border: 1px solid ${({ theme }) => theme.colors.borderColor};
  box-shadow: 0 4px 14px rgba(0, 0, 0, 0.1);
  animation: ${fadeIn} 0.4s ease;
  color: ${({ theme }) => theme.colors.text};
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  min-height: 520px;
  max-width: 480px;
  margin: auto;

  h3 {
    text-align: center;
    font-size: 1.3rem;
    margin-bottom: 1rem;
  }

  .imc-value {
    font-size: 2.3rem;
    font-weight: bold;
    text-align: center;
    margin-bottom: 0.5rem;
    color: #38BD90; 

  }

  p {
    text-align: center;
    font-size: 1rem;
    margin-bottom: 1.2rem;
    line-height: 1.4;
  }

  table {
    width: 100%;
    border-collapse: collapse;
    margin-bottom: 1.4rem;
    font-size: 0.95rem;

    td {
      padding: 0.6rem;
      border: 1px solid ${({ theme }) => theme.colors.borderColor};
      text-align: center;
    }

    tr:nth-child(even) {
      background: ${({ theme }) =>
        theme.title === "dark"
          ? "rgba(255, 255, 255, 0.04)"
          : "rgba(0, 0, 0, 0.03)"};
    }

    tr.highlight {
      font-weight: 700;
      color: #fff;
      background: linear-gradient(
        90deg,
        rgba(56, 189, 144, 0.9),
        rgba(80, 124, 218, 0.9)
      );
      animation: ${highlightPulse} 2s ease-in-out infinite;
    }
  }

  @media (max-width: 768px) {
    width: 100%;
    order: 2;
    max-width: 400px;
    min-height: 420px;
    padding: 1.2rem;

    h3 {
      font-size: 1.15rem;
    }

    .imc-value {
      font-size: 2rem;
    }

    table {
      font-size: 0.9rem;
    }
  }

  @media (max-width: 480px) {
    max-width: 330px;
    padding: 0.9rem;
    min-height: 360px;

    h3 {
      font-size: 1rem;
    }

    .imc-value {
      font-size: 1.8rem;
    }

    table {
      font-size: 0.85rem;

      td {
        padding: 0.45rem;
      }
    }
  }
`;