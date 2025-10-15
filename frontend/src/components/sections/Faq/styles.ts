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
`;


export const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  flex: 1;
`;

export const ImageContainer = styled.div`
  display: flex;
  gap: 20px;
  justify-content: flex-end;
  height: 300px;
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
`;

export const Title = styled.h2`
  font-size: 1.8rem;
  font-weight: 600;
  margin-bottom: 0.5rem;

  @media (max-width: 1366px) {
    font-size: 1.6rem;
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
  }
`;

export const WrapperFaq = styled.section`
  display: flex;
  justify-content: center;
  margin: 0 auto;
  padding: 3rem 2rem;
  width: 80%;

  @media (max-width: 1366px) {
    padding: 2rem 1rem;
  }
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

  @media (max-width: 1366px) {
    font-size: 1.1rem;
  }
`;

export const Answer = styled.p`
  margin-top: 0.5rem;
  font-size: 1rem;
  font-weight: 600;
  color: ${({ theme }) => theme.colors.primary};
  line-height: 1.5;
  padding-right: 1rem;

  @media (max-width: 1366px) {
    font-size: 0.95rem;
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
`;