import styled from "styled-components";

export const Section = styled.section`
  padding: 5rem 2rem;
  background-color: ${({ theme }) => theme.colors.backgroundDarkShade};
  scroll-margin-top: 80px;   

  @media (max-width: 570px) {
    padding: 2rem 1rem;
  }

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

    @media (max-width: 1200px) {
      font-size: 1.4rem;
    }

    @media (max-width: 960px) {
      font-size: 1.2rem;
    }

    @media (max-width: 720px) {
      font-size: 1rem;
    }

    @media (max-width: 480px) {
      font-size: 0.95rem;
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

    @media (max-width: 1200px) {
      font-size: 1rem;
    }

    @media (max-width: 960px) {
      font-size: 0.95rem;
      width: 80%;
    }

    @media (max-width: 720px) {
      font-size: 0.9rem;
    }

    @media (max-width: 480px) {
      font-size: 0.85rem;
    }

  }
`;

export const GridCards = styled.div`
  display: grid;
  align-items: center;
  grid-template-columns: repeat(3, 1fr);
  gap: 1.5rem;

  @media (max-width: 960px) {
    display: flex;
    align-items: center;
    justify-content: center ;
    flex-wrap: wrap;
    width: 380px;
    padding: 0.8rem;
    margin: 0 auto;
  }

  @media (max-width: 720px) {
    width: 340px;
  }

  @media (max-width: 360px) {
    width: 300px;
  }

`;

export const Card = styled.div`
  background-color: ${({ theme }) => theme.colors.secondary};
  padding: 1.2rem;
  border-radius: 5px;
  box-shadow: 0 3px 8px rgba(0, 0, 0, 0.08);
  display: flex;
  justify-content: center;
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

    @media (max-width: 1200px) {
      width: 18px;
      height: 18px;
    }

    @media (max-width: 960px) {
      width: 15px;
      height: 15px;
    }

   
  }

  p {
    font-size: 1rem;
    font-weight: 500;
    line-height: 1.5;

    @media (max-width: 1366px) {
      font-size: 0.9rem;
    }

    @media (max-width: 1200px) {
      font-size: 0.8rem;
    }

  }

  @media (max-width: 1366px) {
    padding: 1rem;
  }

  @media (max-width: 1200px) {
    padding: 0.8rem;
  }

`;

export const Icon = styled.svg`
  color: #f0fff4;
  flex-shrink: 0;
`;