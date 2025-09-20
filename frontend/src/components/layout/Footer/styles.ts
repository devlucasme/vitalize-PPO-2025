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
`;

export const Container = styled.div`
  max-width: 70%;
  margin: 0 auto;
`;

export const Text = styled.p`
  font-size: 0.875rem;
  color: ${({ theme }) => theme.colors.text};

  strong {
    color: ${({ theme }) => theme.colors.primary};
  }
`;