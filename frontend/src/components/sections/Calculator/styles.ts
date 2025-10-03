import styled from "styled-components";

type FieldContainerProps = {
  hasError?: boolean;
};

export const FormContainer = styled.form`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 92vh;
  gap: 3rem;
  max-width: 70%;
  margin: 0 auto;
`;

export const CalculatorCard = styled.div`
  flex: 3.5;
  background: ${({ theme }) => theme.colors.backgroundShade};
  padding: 2rem;
  border-radius: 1rem;
  border: 1px solid ${({ theme }) => theme.colors.borderColor};
  box-shadow: 0px 4px 10px rgba(0,0,0,0.1);
  display: flex;
  flex-direction: column;

  img {
    width: 60px;
    height: 60px;
    object-fit: cover;
    border-radius: 50%;
    margin: 0 auto 3rem;
  }

  h2 {
    margin-bottom: 3rem;
    font-size: 1.1rem;
    text-align: center;
    color: ${({ theme }) => theme.colors.text};
  }
`;

export const InputRow = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 1rem;
  margin-bottom: 1rem;
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
`;

export const FieldContainer = styled.div<FieldContainerProps>`
  display: flex;
  align-items: center;
  border: 1px solid ${({ hasError, theme }) => hasError ? "#e57373" : theme.colors.borderColor};
  border-radius: 0.5rem;
  padding: 0.4rem;
  transition: border-color 0.2s;

  &:focus-within {
    border-color: ${({ hasError, theme }) => hasError ? "#e57373" : theme.colors.primary};
  }
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

export const ErrorMessage = styled.span`
  color: #e57373;
  font-size: 0.8rem;
  margin-top: 0.30rem;
`;

export const ResultCard = styled.div`
  flex: 2;
  background: ${({ theme }) => theme.colors.backgroundShade};
  padding: 2rem;
  border-radius: 1rem;
  border: 1px solid ${({ theme }) => theme.colors.borderColor};
  box-shadow: 0px 4px 10px rgba(0,0,0,0.1);
  display: flex;
  flex-direction: column;

  h2 {
    margin-bottom: 1.5rem;
    color: ${({ theme }) => theme.colors.text};
  }

  h3 {
    margin-top: 2rem;
    margin-bottom: 1rem;
  }
`;

export const ResultBox = styled.div`
  background: ${({ theme }) => theme.colors.secondary};
  padding: 1rem;
  border-radius: 3px;
  margin-bottom: 0.8rem;

  p {
    margin: 0.3rem 0;
    color: #eee;
  }
`;

export const ViewDiet = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 0.5rem;
`;

export const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
  color: #333;

  th, td {
    padding: 0.8rem;
    border-bottom: 1px solid ${({ theme }) => theme.colors.borderColor};
    text-align: left;
  }

  th {
    background: ${({ theme }) => theme.colors.secondary};
    color: #eee;
  }

  tr.above-0 { background-color: #cce5ff; }      
  tr.normal { background-color: #d4edda; }       
  tr.overweight { background-color: #fff3cd; }   
  tr.obesity-1 { background-color: #ffe5b4; }    
  tr.obesity-2 { background-color: #ffcc99; }    
  tr.obesity-3 { background-color: #eb9aa1ff; }    

  tr.active {
    background-color: ${({ theme }) => theme.colors.primary};
    color: #fff;
    font-weight: 600;
  }
`;