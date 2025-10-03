import styled from "styled-components";

export const Main = styled.main`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 92vh;
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
  background: rgba(0, 0, 0, 0.3);
  z-index: 1;
`;

export const Container = styled.div`
  position: relative;
  z-index: 2;
  width: 100%;
  max-width: 70%;
  display: flex;
  justify-content: center;
`;

export const Card = styled.div`
  width: 50%;
  max-height: 500px;
  display: flex;
  flex-direction: column;
  padding: 2rem;
  border-radius: 5px;
  border: 1px solid ${({ theme }) => theme.colors.borderColor};
  background-color: ${({ theme }) =>
    theme.title === "dark"
      ? "rgba(255, 255, 255, 0.08)"
      : "rgba(255, 255, 255, 0.6)"};
  backdrop-filter: blur(18px);
  -webkit-backdrop-filter: blur(18px);
  box-shadow: 0 6px 16px rgba(0, 0, 0, 0.2);

  transition: transform 0.3s ease;

  &:hover {
    transform: scale(1.03);
  }

  img {
    width: 60px;
    height: 60px;
    object-fit: cover;
    border-radius: 50%;
    margin: 0 auto 2rem;
  }

  h2 {
    text-align: center;
    margin-bottom: 2rem;
    color: ${({ theme }) => theme.colors.text};
    font-size: 1.4rem;
  }
`;

export const ButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 1.5rem;
`;

export const Box = styled.div`
  flex: 1;
  border-radius: 5px;
  padding: 1.5rem;
  border: 1px solid ${({ theme }) => theme.colors.borderColor};
  max-height: 400px;
  overflow-y: auto;
  background: ${({ theme }) =>
    theme.title === "dark"
      ? "rgba(0, 0, 0, 0.25)"
      : "rgba(255, 255, 255, 0.7)"};
`;

export const ContentBox = styled.div`
  width: 100%;
  font-size: 0.95rem;
  line-height: 1.6;
  color: ${({ theme }) => theme.colors.text};
`;