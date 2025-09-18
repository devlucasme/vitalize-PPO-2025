import styled from "styled-components";
import { shade } from "polished";

export const Section = styled.section`
  padding: 5rem 2rem;
  background-color: ${({ theme }) => shade(0.08, theme.colors.background)};
  scroll-margin-top: 80px;   
`;

export const Container = styled.div`
  max-width: 1100px;
  margin: 0 auto;
`;

export const TopAbout = styled.div`
  text-align: center;
  margin-bottom: 3rem;

  h2 {
    font-size: 2rem;
    font-weight: 500;
    color: ${({ theme }) => theme.colors.text};
    margin-bottom: 0.5rem;

    strong {
      color: ${({ theme }) => theme.colors.primary};
    }

    @media (max-width: 1366px) {
      font-size: 1.7rem;
    }

  }

  p {
    font-size: 1.2rem;
    margin: 2rem auto;           
    max-width: 800px;            
    text-align: justify;         
    color: ${({ theme }) => theme.colors.text};
    line-height: 1.6;            

    strong {
      color: ${({ theme }) => theme.colors.primary};
    }

    @media (max-width: 1366px) {
      font-size: 1.1rem;
    }

  }

`;

export const GridCards = styled.div`
  display: grid;
  align-items: center;
  grid-template-columns: repeat(3, 1fr);
  gap: 1.5rem;
`;

export const Card = styled.div`
  background-color: ${({ theme }) => theme.colors.secundary};
  padding: 1.2rem;
  border-radius: 5px;
  box-shadow: 0 3px 8px rgba(0, 0, 0, 0.08);
  display: flex;
  align-items: center;
  gap: 1rem;
  color: #f0fff4;
  transition: all 0.3s ease;

  &:hover {
    transform: translateY(-6px);
    box-shadow: 0 8px 18px rgba(0, 0, 0, 0.12);
  }

  svg {
    width: 28px;
    height: 28px;
    flex-shrink: 0;

    @media (max-width: 1366px) {
      width: 25px;
      height: 25px;
    }

  }

  p {
    font-size: 1rem;
    font-weight: 500;
    line-height: 1.5;

    @media (max-width: 1366px) {
      font-size: 0.9rem;
    }

  }


  @media (max-width: 1366px) {
    padding: 1rem;
  }

`;

export const Icon = styled.svg`
  color: #f0fff4;
  flex-shrink: 0;
`;
