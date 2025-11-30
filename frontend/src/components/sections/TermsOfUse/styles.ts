import styled from "styled-components";
import { shade } from "polished";
import { Link } from "react-router-dom";

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: flex-start;
  padding: 60px 20px;
  background: ${({ theme }) => theme.colors.background};
  min-height: 100vh;
`;

export const Content = styled.div`
  position: relative;
  background: ${({ theme }) => theme.colors.backgroundShade};
  color: ${({ theme }) => theme.colors.text};
  border-radius: 10px;
  border: 1px solid ${({ theme }) => theme.colors.borderColor};
  padding: 50px 60px;
  max-width: 850px;
  width: 100%;
  line-height: 1.6;
  box-sizing: border-box;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.08);

  h1 {
    font-size: 1.8rem;
    margin-bottom: 20px;
    text-align: center;
    color: ${({ theme }) => theme.colors.primary};
    transition: margin-top 0.3s ease;
  }

  p {
    font-size: 0.95rem;
    margin-bottom: 12px;
    color: ${({ theme }) => theme.colors.text};
  }

  strong {
    color: ${({ theme }) => theme.colors.primary};
  }

  ul {
    margin: 10px 0 14px 22px;
    list-style: disc;
    color: ${({ theme }) => theme.colors.text};

    li {
      margin-bottom: 6px;
      font-size: 0.92rem;
    }
  }

  @media (max-width: 768px) {
    padding: 30px 22px;

    h1 {
      font-size: 1.5rem;
      margin-top: 35px; 
    }
  }

  @media (max-width: 480px) {
    padding: 24px 18px;

    h1 {
      font-size: 1.3rem;
      margin-top: 45px;
    }
  }

  @media (max-width: 360px) {
    h1 {
      font-size: 1.2rem;
      margin-top: 55px; 
    }
  }
`;

export const Section = styled.section`
  margin-top: 24px;

  h2 {
    font-size: 1.2rem;
    color: ${({ theme }) => theme.colors.primary};
    margin-bottom: 8px;
  }

  p {
    margin-bottom: 10px;
    font-size: 0.92rem;
  }

  @media (max-width: 480px) {
    h2 {
      font-size: 1.05rem;
    }
    p {
      font-size: 0.85rem;
    }
  }
`;

export const BackLink = styled(Link)`
  position: absolute;
  top: 20px;
  left: 20px;
  display: flex;
  align-items: center;
  gap: 6px;
  color: ${({ theme }) => theme.colors.primary};
  font-weight: bold;
  text-decoration: none;
  font-size: 0.9rem;
  transition: color 0.3s ease;

  &:hover {
    color: ${({ theme }) => shade(0.2, theme.colors.primary)};
  }

  svg {
    flex-shrink: 0;
  }

  @media (max-width: 768px) {
    font-size: 0.85rem;
    top: 15px;
    left: 15px;
  }

  @media (max-width: 480px) {
    font-size: 0.8rem;
    top: 12px;
    left: 12px;
  }
`;

export const Footer = styled.footer`
  margin-top: 40px;
  text-align: center;
  font-size: 0.8rem;
  color: ${({ theme }) => theme.colors.text};
  opacity: 0.7;
`;
