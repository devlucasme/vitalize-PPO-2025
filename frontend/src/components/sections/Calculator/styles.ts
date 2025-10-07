import styled from "styled-components";

type FieldContainerProps = {
  hasError?: boolean;
};

export const FormContainer = styled.form`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 92vh;
  max-width: 70%;
  margin: 0 auto;
`;

export const CalculatorCard = styled.div`
  width: 70%;
  background: ${({ theme }) => theme.colors.backgroundShade};
  padding: 2.5rem;
  border-radius: 12px;
  border: 1px solid ${({ theme }) => theme.colors.borderColor};
  box-shadow: 0 6px 18px rgba(0,0,0,0.15);
  display: flex;
  flex-direction: column;
  transition: all 0.3s ease;

  &:hover {
    box-shadow: 0 8px 22px rgba(0,0,0,0.25);
  }

  img {
    width: 70px;
    height: 70px;
    object-fit: cover;
    border-radius: 50%;
    margin: 0 auto 2rem;
  }

  h2 {
    margin-bottom: 2rem;
    font-size: 1.2rem;
    text-align: center;
    color: ${({ theme }) => theme.colors.text};
  }
`;

export const InputRow = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 1rem;
  margin-bottom: 1.5rem;
  flex-wrap: wrap;
`;

export const InputGroup = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
`;

export const Label = styled.label`
  margin-bottom: 0.7rem;
  font-weight: 600;
  color: ${({ theme }) => theme.colors.text};
  display: flex;
  align-items: center;
  gap: 0.4rem;
`;

export const FieldContainer = styled.div<FieldContainerProps>`
  display: flex;
  align-items: center;
  border: 1px solid ${({ hasError, theme }) => hasError ? "#e57373" : theme.colors.borderColor};
  border-radius: 0.6rem;
  padding: 0.4rem 0.6rem;
  background: ${({ theme }) =>
    theme.title === "dark"
      ? "rgba(255, 255, 255, 0.05)"
      : "rgba(0, 0, 0, 0.05)"};
`;

export const IconWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 0.4rem;
  color: ${({ theme }) => theme.colors.text};
`;

export const Input = styled.input`
  border: none;
  outline: none;
  font-size: 0.95rem;
  flex: 1;
  background-color: transparent;
  color: ${({ theme }) => theme.colors.text};
  padding: 0.6rem;

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
  padding: 0.6rem;
  color: ${({ theme }) => theme.colors.text};

  option {
    color: ${({ theme }) => theme.colors.text};
    background: ${({ theme }) => theme.colors.background};
  }
`;

export const ButtonContainer = styled.div`
  display: flex;
  gap: 1rem;
  margin-top: 1rem;
`;

export const ErrorMessage = styled.span`
  color: #e57373;
  font-size: 0.8rem;
  margin-top: 0.3rem;
`;