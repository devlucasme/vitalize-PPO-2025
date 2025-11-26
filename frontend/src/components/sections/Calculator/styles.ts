import styled, { keyframes, css } from "styled-components";
import { Link } from "react-router-dom";
import { shade } from "polished";

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
  height: 80vh;

  @media (min-width: 1024px) and (max-width: 1440px) {
    align-items: center;
    padding-top: 1rem;
    min-height: 70vh;
  }

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

  @media (min-width: 1024px) and (max-width: 1440px) {
    max-width: 850px;
    gap: 1rem;
  }

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
    gap: 1rem;
  }
`;

export const CalculatorCard = styled.form<CalculatorCardProps>`
  position: relative;
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
    margin: 0 auto 1rem;
    border-radius: 50%;
    height: 60px;
    width: 60px;
  }

  @media (min-width: 1024px) and (max-width: 1440px) {
    padding: 1.3rem 1.2rem;
    h2 {
      font-size: 1rem;
      margin-bottom: 1rem;
    }
    img {
      height: 52px;
      width: 52px;
    }
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

export const BackLink = styled(Link)`
  position: absolute;
  top: 18px;
  left: 18px;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 6px;
  color: ${({ theme }) => theme.colors.primary};
  font-weight: bold;
  text-decoration: none;
  font-size: 0.9rem;
  line-height: 1;
  transition: color 0.3s ease, transform 0.2s ease;

  svg {
    flex-shrink: 0;
    position: relative;
    top: -1px;
  }
`;

export const InputRow = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
  margin-bottom: 0.8rem;
  width: 100%;

  @media (max-width: 768px) {
    gap: 0.8rem;
  }
`;

export const InputGroup = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1 1 calc(50% - 0.5rem);
  min-width: 220px;
  max-width: 100%;
  overflow: hidden;

  @media (max-width: 768px) {
    flex: 1 1 100%;
    min-width: 100%;
  }
`;

export const Label = styled.label`
  margin-bottom: 0.35rem;
  font-weight: 600;
  font-size: 0.95rem;
  color: ${({ theme }) => theme.colors.text};
  display: flex;
  align-items: center;
  gap: 0.5rem;
  word-break: break-word;
`;

export const FieldContainer = styled.div<FieldContainerProps>`
  display: flex;
  align-items: center;
  width: 100%;
  border: 1px solid
    ${({ hasError, theme }) => (hasError ? "#e57373" : theme.colors.borderColor)};
  border-radius: 0.5rem;
  padding: 0.4rem 0.6rem;
  background: ${({ theme }) =>
    theme.title === "dark"
      ? "rgba(255, 255, 255, 0.05)"
      : "rgba(0, 0, 0, 0.05)"};
  transition: border 0.2s ease;
  overflow: hidden;

  &:focus-within {
    border-color: ${({ theme }) => theme.colors.primary};
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
  min-width: 0; /* evita que o flex item quebre */

  &::placeholder {
    color: ${({ theme }) => theme.colors.text};
    opacity: 0.7;
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
  min-width: 0;
  white-space: normal;
  word-wrap: break-word;

  option {
    color: ${({ theme }) => theme.colors.text};
    background: ${({ theme }) => theme.colors.background};
    white-space: normal;
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
`;

export const ErrorMessage = styled.span`
  color: #e57373;
  font-size: 0.8rem;
  margin-top: 0.2rem;
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

  .result {
    font-size: 1.6rem;
    font-weight: 900;
    text-align: center;
    margin-bottom: 2rem;
    background: linear-gradient(135deg, #38bd90, #507cda);
    background-clip: text;
    -webkit-background-clip: text;
    color: transparent;
    -webkit-text-fill-color: transparent;
  }

  p {
    text-align: center;
    font-size: 1rem;
    margin-bottom: 1.2rem;
    line-height: 1.4;
  }

  .combined-description {
    text-align: justify;
    line-height: 1.5;

    strong {
      font-weight: 700;
    }

    .excellent {
      color: #38bd90; /* verde – positivo */
    }

    .alert {
      color: #f1c232; /* amarelo – aviso leve */
    }

    .warning {
      color: #e75a5a; /* vermelho – alerta */
    }

    .tip {
      color: #cca041; /* dourado – informação */
    }

    .neutral {
      color: #507cda; /* azul – equilíbrio */
    }
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

  /* 📱 Ajustes de responsividade */
  @media (max-width: 1024px) {
    max-width: 420px;
    padding: 1.6rem 1.2rem;
    min-height: 460px;
  }

  @media (max-width: 768px) {
    max-width: 380px;
    padding: 1.4rem 1rem;
    min-height: auto;
  }

  @media (max-width: 480px) {
    max-width: 330px;
    padding: 1.2rem 0.8rem;
    min-height: auto;
    h3 {
      font-size: 1.1rem;
    }

    .result {
      font-size: 1.4rem;
      margin-bottom: 1.4rem;
    }

    p {
      font-size: 0.9rem;
      line-height: 1.45;
    }

    .combined-description {
      font-size: 0.9rem;
      line-height: 1.45;
    }

    table {
      font-size: 0.88rem;
    }
  }
`;


export const ResultHeader = styled.div`
  text-align: center;
  margin-bottom: 1.4rem;

  h3 {
    font-size: 1.3rem;
    margin-bottom: 1rem;
  }

  .acronym-info {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 0.4rem;
  width: 100%;
  text-align: center;
  font-size: 0.9rem;
  opacity: 0.95;
  line-height: 1.4;
  margin-bottom: 1.2rem;

  /* Cada linha explicativa (IMC e IAC) */
  .line {
    width: 80%;
    max-width: 380px;
    border-radius: 8px;
    padding: 0.4rem 0.6rem;
    background: ${({ theme }) =>
    theme.title === "dark"
      ? "rgba(255,255,255,0.05)"
      : "rgba(0,0,0,0.05)"};
    text-align: center;
  }

  /* IMC → verde */
  .imc {
    strong {
      color: #38bd90;
      font-weight: 900;
    }
  }

  /* IAC → azul */
  .iac {
    strong {
      color: #507cda;
      font-weight: 900;
    }
  }

  strong {
    font-weight: 700;
  }

  @media (max-width: 768px) {
    font-size: 0.85rem;
    .line {
      width: 90%;
    }
  }

  @media (max-width: 480px) {
    font-size: 0.8rem;
    .line {
      width: 100%;
    }
  }
}


  .dual-values {
    display: flex;
    justify-content: center;
    align-items: stretch;
    gap: 1rem;
    flex-wrap: wrap;
  }
`;


export const ValueBox = styled.div<{ color: string }>`
  flex: 1 1 45%;
  min-width: 160px;
  max-width: 220px;
  background: ${({ color }) =>
    `linear-gradient(135deg, ${color}cc, ${shade(0.2, color)}cc)`};
  border-radius: 10px;
  padding: 0.45rem;
  color: #fff;
  text-align: center;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
  animation: ${fadeIn} 0.6s ease, ${highlightPulse} 3s ease-in-out infinite;

  strong {
    display: block;
    font-size: 1rem;
    letter-spacing: 0.5px;
    margin-bottom: 0.3rem;
  }

  span {
    font-size: 2.1rem;
    font-weight: 700;
  }

  p {
    margin-top: 0.3rem;
    font-size: 0.9rem;
    opacity: 0.95;
  }

  svg {
    margin-bottom: 0.4rem;
  }
`;
