import styled from "styled-components";

export const Main = styled.main`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
`;

export const Container = styled.div`
  width: 100%;
  max-width: 70%;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  gap: 2rem;
`;

export const CardLink = styled.div`
  width: 300px;
  height: 340px;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 1.5rem 2.5rem;
  border: 1px solid ${({ theme }) => theme.colors.text}33;
  border-radius: 8px;

  background-color: ${({ theme }) =>
  theme.title === "dark" ? "rgba(255, 255, 255, 0.05)" : "rgba(0, 0, 0, 0.02)"};
  
  backdrop-filter: blur(12px);
  -webkit-backdrop-filter: blur(12px);
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);

  transition: transform 0.3s ease;
  cursor: pointer;

  &:hover {
    transform: scale(1.05);
  }
`;

export const Image = styled.img`
  width: 160px;
  height: 160px;
  border-radius: 50%;
  object-fit: cover;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  transition: box-shadow 0.3s ease, transform 0.3s ease;

  ${CardLink}:hover & {
    box-shadow: 0 6px 20px rgba(0, 0, 0, 0.15);
    transform: scale(1.08);
  }
`;

export const Title = styled.h3`
  font-size: 1.2rem;
  font-weight: bold;
  margin-top: 1rem;
  color: ${({ theme }) => theme.colors.text};
`;

export const Description = styled.p`
  font-size: 0.85rem;
  color: ${({ theme }) => theme.colors.text};
  text-align: center;
  margin-top: 0.60rem;
`;
