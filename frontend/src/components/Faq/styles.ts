import styled from "styled-components";
import { shade } from "polished";

export const WrapperTop = styled.section`
  display: flex;
  justify-content: center;  
  align-items: center;      
  background-color: ${({ theme }) => shade(0.08, theme.colors.background)};
  padding: 6rem 2rem 4rem;
`;

export const TopContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;    
  gap: 80px;
  max-width: 70%;
  width: 100%;
`;


export const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  flex: 1;
`;

export const ImagesContainer = styled.div`
  display: flex;
  gap: 20px;
  justify-content: flex-end;
  flex: 1; 
  height: 300px;
`;

export const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 12px;
  transition: transform 0.3s ease, filter 0.3s ease;

  &:hover {
    transform: scale(1.05) rotate(-2deg);
    filter: brightness(1.1);
  }
`;

export const Title = styled.h2`
  font-size: 2rem;
  font-weight: bold;
  margin-bottom: 0.5rem;
`;

export const Text = styled.p`
  font-size: 1.1rem;
  color: ${({ theme }) => theme.colors.text};
  text-align: justify;
  margin-top: 20px;

  strong {
    color: ${({ theme }) => theme.colors.primary};
  }

`;

export const WrapperFaq = styled.section`
  display: flex;
  justify-content: center;
  padding: 3rem 2rem;
`;

export const FaqContainer = styled.div`
  max-width: 70%;
  width: 100%;
`;

export const QAItem = styled.div`
  border-bottom: 1px solid #ccc;
  padding: 1rem 0;
  cursor: pointer;
`;

export const Question = styled.h3<{ isOpen: boolean }>`
  font-size: 1.2rem;
  font-weight: 600;
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: ${({ theme }) => theme.colors.text};

  transition: color 0.3s ease;
`;

export const Answer = styled.p`
  margin-top: 0.5rem;
  font-size: 1rem;
  color: ${({ theme }) => theme.colors.primary};
  line-height: 1.5;
  padding-right: 1rem;
`;

export const IconWrapper = styled.div<{ isOpen: boolean }>`
  display: flex;
  align-items: center;
  justify-content: center;
  border: 2px solid ${({ theme }) => theme.colors.secundary};
  border-radius: 50%;
  width: 24px;
  height: 24px;
  transition: background 0.3s;

  ${({ isOpen, theme }) =>
    isOpen &&
    `
    background: ${theme.colors.secundary};
    color: #fff;
  `}
`;
