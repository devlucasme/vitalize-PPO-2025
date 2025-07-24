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

  @media (min-width: 1400px) and (max-width: 1600px) {
    max-width: 85%;
    width: 70%;
  }

  @media (max-width: 1380px) {
    max-width: 85%;
    width: 60%;
  }

  @media (max-width: 1024px) {
    max-width: 90%;
    width: 75%;
  }
`;

export const Title = styled.h2`
  font-size: 2rem;
  margin-bottom: 1.5rem;

  @media (max-width: 1380px) {
    font-size: 1.8rem;
  }

  @media (max-width: 1024px) {
    font-size: 1.6rem;
  }
`;

export const Subtitle = styled.h3`
  font-size: 1.5rem;
  margin-top: 2.5rem;
  margin-bottom: 1.2rem;

  @media (max-width: 1380px) {
    font-size: 1.3rem;
  }

  @media (max-width: 1024px) {
    font-size: 1.1rem;
    margin-top: 2rem;
    margin-bottom: 1rem;
  }
`;

export const Text = styled.p`
  font-size: 1rem;
  line-height: 1.6;
  margin-bottom: 1rem;

  @media (max-width: 1380px) {
    font-size: 0.95rem;
  }

  @media (max-width: 1024px) {
    font-size: 0.9rem;
  }
`;

export const CardList = styled.div`
  display: flex;
  flex-direction: column;
  align-items: start;
  gap: 1rem;
  margin-bottom: 2rem;
`;

export const Card = styled.div`
  background-color: ${({ theme }) => theme.colors.secundary};
  padding: 0.75rem 1rem;
  border-radius: 12px;
  width: 100%;
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.08);
  display: flex;
  align-items: center;
  gap: 1rem;
  cursor: pointer;
  color: #f0fff4;
  transition: all 0.3s ease;

  &:hover {
    transform: translateY(-4px);
    box-shadow: 0 6px 16px rgba(0, 0, 0, 0.12);
  }

  svg {
    width: 22px;
    height: 22px;
    flex-shrink: 0;
  }

  p {
    font-size: 1rem;
    font-weight: 500;

    @media (max-width: 1380px) {
      font-size: 0.95rem;
    }

    @media (max-width: 1024px) {
      font-size: 0.9rem;
    }
  }
`;

export const Icon = styled.svg`
  color: #f0fff4;
  flex-shrink: 0;
  justify-content: flex-start;
  width: 26px;
  height: 26px;
`;
