import styled from "styled-components";
import type { ButtonProps } from "./Button";

type ContainerProps = Pick<ButtonProps, "backgroundColor" | "width" | "buttonColor">;

export const Container = styled.button<ContainerProps>`
  width: ${({ width }) => width || "auto"};
  background-color: ${({ backgroundColor, theme }) =>
    backgroundColor || theme.colors.secondary};
  color: ${({ buttonColor, theme }) =>
    buttonColor ? theme.colors.buttonColor : "#fff"};
  border: none;
  border-radius: 5px;
  margin-top: 1rem;
  padding: 0.6rem 1rem;
  font-weight: 600;
  font-size: 0.85rem;
  position: relative;
  overflow: hidden;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.15);
  
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;

  transition:
    transform 0.2s ease,
    box-shadow 0.2s ease,
    background-color 0.3s ease;

  &:hover {
    transform: translateY(-2px) scale(1.03);
    box-shadow: 0 6px 14px rgba(0, 0, 0, 0.18);
  }

  &:active {
    transform: translateY(0) scale(0.98);
    box-shadow: 0 3px 8px rgba(0, 0, 0, 0.12);
  }

  &::after {
    content: '';
    position: absolute;
    top: 0;
    left: -75%;
    width: 50%;
    height: 100%;
    background: linear-gradient(
      120deg,
      transparent,
      rgba(255, 255, 255, 0.3),
      transparent
    );
    transform: skewX(-20deg);
  }

  &:hover::after {
    animation: shine 0.8s forwards;
  }

  @keyframes shine {
    0% {
      left: -75%;
    }
    100% {
      left: 125%;
    }
  }
`;
