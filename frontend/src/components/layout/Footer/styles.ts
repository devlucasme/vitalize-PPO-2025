import styled from "styled-components";

export const Footer = styled.footer`
  width: 100%;
  padding: 1.8rem 1rem;
  background: ${({ theme }) => theme.colors.backgroundShade};
  border-top: 1px solid ${({ theme }) => theme.colors.borderColor};
  text-align: center;

  @media (max-width: 1366px) {
    padding: 1.5rem 0.8rem;
  }

  @media (max-width: 1024px) {
    padding: 1.2rem 0.6rem;
  }

  @media (max-width: 768px) {
    padding: 1rem 0.5rem;
  }

  @media (max-width: 480px) {
    padding: 0.8rem 0.4rem;
  }
`;

export const Container = styled.div`
  max-width: 70%;
  margin: 0 auto;

  @media (max-width: 1440px) {
    max-width: 85%;
  }

  @media (max-width: 1024px) {
    max-width: 90%;
  }

  @media (max-width: 768px) {
    max-width: 95%;
  }

  @media (max-width: 480px) {
    max-width: 98%;
  }
`;

export const Text = styled.p`
  font-size: 0.875rem;
  color: ${({ theme }) => theme.colors.text};

  strong {
    color: ${({ theme }) => theme.colors.primary};
  }

  @media (max-width: 1366px) {
    font-size: 0.82rem;
  }

  @media (max-width: 1024px) {
    font-size: 0.78rem;
  }

  @media (max-width: 768px) {
    font-size: 0.75rem;
  }

  @media (max-width: 480px) {
    font-size: 0.72rem;
  }
`;
