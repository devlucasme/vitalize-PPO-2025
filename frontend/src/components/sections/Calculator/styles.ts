import styled from "styled-components";

type FieldContainerProps = {
  hasError?: boolean;
};

export const FormContainer = styled.form`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0.8rem 1.5rem; 
  width: 100%;
  min-height: 85vh;
  box-sizing: border-box;
  background: ${({ theme }) => theme.colors.background};

  @media (max-width: 1024px) { padding: 0.8rem 1rem; }
  @media (max-width: 480px) { padding: 0.6rem; min-height: auto; }
`;

export const CalculatorCard = styled.div`
  width: 100%;
  max-width: 900px;
  background: ${({ theme }) => theme.colors.backgroundShade};
  padding: 1.5rem 1.8rem;
  border-radius: 12px;
  border: 1px solid ${({ theme }) => theme.colors.borderColor};
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  display: flex;
  flex-direction: column;
  box-sizing: border-box;

  img {
    width: 60px;
    height: 60px;
    object-fit: cover;
    border-radius: 50%;
    margin: 0 auto 1rem;
  }

  h2 {
    margin-bottom: 1.5rem;
    font-size: 1.2rem;
    text-align: center;
    color: ${({ theme }) => theme.colors.text};

    @media (max-width: 768px) { font-size: 1.1rem; }
    @media (max-width: 480px) { font-size: 1rem; }
  }

  @media (max-width: 768px) { padding: 1.2rem 1.5rem; }
  @media (max-width: 480px) { padding: 1rem 1rem; }
`;

export const InputRow = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.8rem;
  margin-bottom: 0.6rem;

  @media (max-width: 480px) {
    flex-direction: column;
    gap: 0.5rem;
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
  font-size: 0.9rem;
  color: ${({ theme }) => theme.colors.text};
  display: flex;
  align-items: center;
  gap: 0.3rem;

  @media (max-width: 480px) { font-size: 0.8rem; }
`;

export const FieldContainer = styled.div<FieldContainerProps>`
  display: flex;
  align-items: center;
  border: 1px solid ${({ hasError, theme }) => hasError ? "#e57373" : theme.colors.borderColor};
  border-radius: 0.5rem;
  padding: 0.35rem 0.5rem;
  background: ${({ theme }) => theme.title === "dark" ? "rgba(255, 255, 255, 0.05)" : "rgba(0, 0, 0, 0.05)"};
`;

export const IconWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 0.3rem;
  color: ${({ theme }) => theme.colors.text};
`;

export const Input = styled.input`
  border: none;
  outline: none;
  font-size: 0.9rem;
  flex: 1;
  background-color: transparent;
  color: ${({ theme }) => theme.colors.text};
  padding: 0.5rem;

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
  font-size: 0.9rem;
  padding: 0.5rem;
  color: ${({ theme }) => theme.colors.text};

  option {
    color: ${({ theme }) => theme.colors.text};
    background: ${({ theme }) => theme.colors.background};
  }
`;

export const ButtonContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.8rem;
  margin-top: 1.2rem;
  justify-content: center;

  button {
    flex: 1 1 180px;
    max-width: 220px;
    min-height: 36px;
    font-size: 0.9rem;
    padding: 0.5rem 0.8rem;
  }

  @media (max-width: 768px) { button { flex: 1 1 45%; max-width: none; } }
  @media (max-width: 480px) {
    flex-direction: column;
    gap: 0.6rem;
    button { width: 100%; }
  }
`;

export const ErrorMessage = styled.span`
  color: #e57373;
  font-size: 0.75rem;
  margin-top: 0.25rem;
`;
