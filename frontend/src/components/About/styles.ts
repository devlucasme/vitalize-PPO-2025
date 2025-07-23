import styled from "styled-components";
import { shade } from "polished";

export const Section = styled.section`
  padding: 4rem 2rem;
  background-color: ${({ theme }) => shade(0.04, theme.colors.background)};
  scroll-margin-top: 80px;
  text-align: justify;
`;

export const Container = styled.div`
  max-width: 70%;
  width: 50%;
  margin: 0 auto;
`;

export const Title = styled.h2`
  font-size: 2rem;
  margin-bottom: 1.5rem;

  @media(max-width: 1360px) {
    font-size: 1.8rem;
  }

`;

export const Subtitle = styled.h3`
  font-size: 1.5rem;
  margin-top: 2.5rem;
  margin-bottom: 1rem;

  @media(max-width: 1360px) {
    font-size: 1.3rem;
  }

`;

export const Text = styled.p`
  font-size: 1rem;
  line-height: 1.6;
  margin-bottom: 1rem;

`;

export const CardGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
  gap: 1rem;
  margin-bottom: 2rem;
`;

export const Card = styled.div`
  background-color: ${({ theme }) => theme.colors.secundary};
  padding: 1.25rem;
  border-radius: 12px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.75rem;
  transition: all 0.3s ease;
  cursor: pointer;
  color: #f0fff4;
  
  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 8px 20px rgba(0, 0, 0, 0.15);
  }

  span {
    font-size: 1.5rem;
  }

  p {
    font-size: 0.95rem;
  }
`;

export const Icon = styled.svg`
  color: #f0fff4;
  flex-shrink: 0;
  width: 28px;
  height: 28px;
`;