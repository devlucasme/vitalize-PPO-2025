import styled, { css } from "styled-components";

export const Container = styled.div<{ isVisible: boolean }>`
  position: fixed;
  inset: 0;
  z-index: 9999;
  display: flex;
  align-items: center;
  justify-content: center;
  background: rgba(0, 0, 0, 0.40);
  backdrop-filter: blur(10px);
  opacity: 0;
  pointer-events: none;
  transform: translateY(50px);
  transition: opacity 0.5s ease, transform 0.5s ease;

  nav {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 2rem;
  }

  ul {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 1.5rem;
  }

  a {
    width: 160px; 
    font-size: 1.2rem;
    font-weight: 600;
    color: #eee;
    text-align: center;
    padding: 0.6rem 1rem;
    border: 1px solid #eee;
    border-radius: 8px;
    display: flex;
    align-items: center;
    justify-content: center; 
    gap: 0.5rem;
    transition: transform .3s ease-in-out;

    &:hover {
      transform: scale(1.05); 
    }
  }

  ${({ isVisible }) =>
    isVisible &&
    css`
      opacity: 1;
      pointer-events: auto;
      transform: translateY(0px);
    `}

  @media (max-width: 660px) {
    a {
      width: 180px;
      font-size: 1rem;
      padding: 0.5rem 0.8rem;
    }
  }

  @media (max-width: 480px) {
    a {
      width: 150px;
      font-size: 0.9rem;
      padding: 0.4rem 0.6rem;
    }
  }
`;

export const CloseButton = styled.button`
  position: absolute;
  top: 1rem;
  right: 1rem;
  background: transparent;
  border: none;
  cursor: pointer;
  z-index: 10000;

  svg {
    color: #eee;
    transition: transform 0.3s ease;
  }

  &:hover svg {
    transform: scale(1.1);
  }
`;