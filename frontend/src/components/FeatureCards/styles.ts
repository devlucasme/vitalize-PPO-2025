import styled from "styled-components";

export const Main = styled.main`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  overflow: hidden;
`;

export const BackgroundImage = styled.img<{ isVisible: boolean }>`
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  opacity: ${({ isVisible }) => (isVisible ? 0.3 : 0)};
  transition: opacity 1.5s ease-in-out;
  pointer-events: none;
  user-select: none;
  z-index: 0;
`;

export const Overlay = styled.div`
  position: absolute;
  inset: 0;
  background: rgba(0, 0, 0, 0.25);
  z-index: 1;
`;

export const Container = styled.div`
  position: relative;
  z-index: 2;
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
    theme.title === "dark"
      ? "rgba(255, 255, 255, 0.15)"  // mais visível no dark
      : "rgba(255, 255, 255, 0.3)"};  // mais opaco no light

  backdrop-filter: blur(20px);
  -webkit-backdrop-filter: blur(20px);
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);

  transition: transform 0.3s ease;
  cursor: pointer;

  &:hover {
    transform: scale(1.05);
  }

  @media(max-width: 1360px) {
    width: 280px;
  }

`;

export const Image = styled.img`
  width: 160px;
  height: 160px;
  border-radius: 50%;
  object-fit: cover;

  filter: brightness(0.85);
  
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.1);
  transition: filter 0.3s ease, transform 0.3s ease, box-shadow 0.3s ease;

  ${CardLink}:hover & {
    filter: brightness(1);
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
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
  margin-top: 0.6rem;
`;
