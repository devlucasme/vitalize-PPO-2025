import styled from "styled-components";

export const Container = styled.div`
  width: 70%;
  margin: 0 auto;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 4rem;
  padding: 4rem;
`;

export const CalculatorCard = styled.div`
  background: ${({ theme }) => theme.colors.backgroundShade};
  padding: 2rem;
  border-radius: 1rem;
  box-shadow: 0px 4px 10px rgba(0,0,0,0.1);
  border: 1px solid ${({ theme }) => theme.colors.borderColor};
  display: flex;
  flex-direction: column;
  justify-content: flex-start;

  img {
    width: 60px;         
    height: 60px;        
    object-fit: cover;   
    border-radius: 50%;
    margin: 0 auto 2.5rem; 
  }

  h2 {
    margin-bottom: 2rem;
    font-size: 1.1rem;
    text-align: center;
    color: ${({ theme }) => theme.colors.text};
  }
`;

export const InputRow = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 1rem;

  label {
    margin-bottom: 0.7rem;
    font-weight: 600;
    color: ${({ theme }) => theme.colors.text};
  }
`;

export const Input = styled.input`
  padding: 0.8rem;
  border-radius: 0.5rem;
  border: 1px solid ${({ theme }) => theme.colors.borderColor};
  outline: none;
  font-size: 0.95rem;
  background: ${({ theme }) => theme.colors.background};
  color: ${({ theme }) => theme.colors.text};

  &:focus {
    border-color: ${({ theme }) => theme.colors.primary};
  }
`;

export const Select = styled.select`
  padding: 0.6rem;
  border-radius: 0.5rem;
  border: 1px solid ${({ theme }) => theme.colors.borderColor};
  outline: none;
  font-size: 0.95rem;
  background: ${({ theme }) => theme.colors.background};
  color: ${({ theme }) => theme.colors.text};
  height: 2.8rem;

  &:focus {
    border-color: ${({ theme }) => theme.colors.primary};
  }

  option {
    background: ${({ theme }) => theme.colors.background};
    color: ${({ theme }) => theme.colors.text};
  }
`;

export const ResultCard = styled.div`
  background: ${({ theme }) => theme.colors.backgroundShade};
  padding: 2rem;
  border-radius: 1rem;
  box-shadow: 0px 4px 10px rgba(0,0,0,0.1);
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  height: 100%;

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

  th:first-child {
    border-top-left-radius: 5px;
  }

  th:last-child {
    border-top-right-radius: 5px;
  }

  tr.above-0 { background-color: #cce5ff; }      
  tr.normal { background-color: #d4edda; }       
  tr.overweight { background-color: #fff3cd; }   
  tr.obesity-1 { background-color: #ffe5b4; }    
  tr.obesity-2 { background-color: #ffcc99; }    
  tr.obesity-3 { background-color: #f8d7da; }    

  tr.active {
    background-color: ${({ theme }) => theme.colors.primary};
    color: #fff;
    font-weight: 600;
  }
`;