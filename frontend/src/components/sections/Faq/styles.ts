// styles.ts
import styled from "styled-components";

export const WrapperTop = styled.section`
  display: flex;
  justify-content: center;  
  align-items: center;      
  background-color: ${({ theme }) => theme.colors.backgroundDarkShade};
  padding: 2.8rem;

  @media (max-width: 1366px) {
    padding: 2rem;
  }
`;

export const TopContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;    
  gap: 95px;
  max-width: 70%;

  @media (max-width: 1024px) {
    flex-direction: column;
    gap: 40px;
    max-width: 90%;
  }
`;

export const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  flex: 1;

  @media (max-width: 768px) {
    align-items: center;
    text-align: center;
  }
`;

export const ImageContainer = styled.div`
  display: flex;
  gap: 20px;
  justify-content: flex-end;
  height: 300px;

  @media (max-width: 1024px) {
    justify-content: center;
    height: auto;
  }
`;

export const Image = styled.img`
  width: 100%;
  object-fit: cover;
  border-radius: 12px;
  transition: transform 0.3s ease, filter 0.3s ease;

  &:hover {
    transform: scale(1.05) rotate(-2deg);
    filter: brightness(1.2);
  }

  @media (max-width: 1366px) {
    width: 95%;
  }

  @media (max-width: 480px) {
    width: 100%;
  }
`;

export const Title = styled.h2`
  font-size: 1.8rem;
  font-weight: 600;
  margin-bottom: 0.5rem;

  @media (max-width: 1366px) {
    font-size: 1.6rem;
  }

  @media (max-width: 480px) {
    font-size: 1.4rem;
  }
`;

export const Text = styled.p`
  font-size: 1.1rem;
  color: ${({ theme }) => theme.colors.text};
  text-align: justify;
  margin-top: 20px;

  strong {
    color: ${({ theme }) => theme.colors.primary};
  }

  @media (max-width: 1366px) {
    font-size: 0.95rem;
    text-align: justify;
  }

  @media (max-width: 768px) {
    text-align: center;
    text-align: justify;
  }
`;

export const WrapperFaq = styled.section`
  display: flex;
  justify-content: center;
  margin: 0 auto;
  padding: 3rem 2rem 5rem; /* adicionei padding-bottom maior */
  width: 80%;

  @media (max-width: 1366px) {
    padding: 2rem 1rem 4rem;
  }

  @media (max-width: 1024px) {
    padding: 1.8rem 1rem 3.5rem;
  }

  @media (max-width: 768px) {
    padding: 1.5rem 1rem 3rem;
    width: 90%;
  }

  @media (max-width: 480px) {
    padding: 1rem 0.5rem 2.5rem;
  }
`;


export const FaqContainer = styled.div`
  width: 100%;
  max-width: 70%;

  @media (max-width: 768px) {
    max-width: 100%;
  }
`;

export const QAItem = styled.div`
  border-bottom: 1px solid #ccc;
  padding: 1rem 0;
  cursor: pointer;

  @media (max-width: 480px) {
    padding: 0.8rem 0;
  }
`;

export const Question = styled.h3<{ isOpen: boolean }>`
  font-size: 1.2rem;
  font-weight: 600;
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: ${({ theme }) => theme.colors.text};
  line-height: 1.4;

  @media (max-width: 1366px) {
    font-size: 1.1rem;
  }

  @media (max-width: 1024px) {
    font-size: 1rem;
  }

  @media (max-width: 768px) {
    font-size: 0.95rem;
  }

  @media (max-width: 480px) {
    font-size: 0.9rem;
  }
`;

export const Answer = styled.p`
  margin-top: 0.5rem;
  font-size: 1rem;
  font-weight: 600;
  color: ${({ theme }) => theme.colors.primary};
  line-height: 1.6;
  text-align: justify;
  text-justify: inter-word;
  padding-right: 1rem;

  @media (max-width: 1366px) {
    font-size: 0.95rem;
    padding-right: 0.8rem;
  }

  @media (max-width: 1024px) {
    font-size: 0.9rem;
    padding-right: 0.5rem;
  }

  @media (max-width: 768px) {
    font-size: 0.85rem;
    padding-right: 0.3rem;
  }

  @media (max-width: 480px) {
    font-size: 0.8rem;
    padding-right: 0;
  }
`;

export const IconWrapper = styled.div<{ isOpen: boolean }>`
  display: flex;
  align-items: center;
  justify-content: center;
  border: 2px solid ${({ theme }) => theme.colors.secondary};
  border-radius: 50%;
  width: 24px;
  height: 24px;
  transition: background 0.3s;

  ${({ isOpen, theme }) =>
    isOpen &&
    `
    background: ${theme.colors.secondary};
    color: #fff;
  `}

  @media (max-width: 1366px) {
    width: 22px;
    height: 22px;
  }

  @media (max-width: 768px) {
    width: 20px;
    height: 20px;
  }

  @media (max-width: 480px) {
    width: 18px;
    height: 18px;
  }
`;
