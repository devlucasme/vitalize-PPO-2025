import styled from "styled-components";
import type { ButtonProps } from "./Button";

type ContainerProps = Pick<ButtonProps, "backgroundColor">;

export const Container = styled.button<ContainerProps>`
  background-color: #246d52;
  color: #f0fff4;
  border: none;
  border-radius: 5px;
  margin-top: 1rem;
  padding: 0.45rem 1rem;
  font-weight: 500;
  position: relative;
  overflow: hidden;
  transition: transform 0.3s ease, box-shadow 0.3s ease;

  &:hover {
    transform: translateY(-2px) scale(1.02);
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.08);
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
      rgba(255, 255, 255, 0.25),
      transparent
    );
    transform: skewX(-20deg);
    transition: none;
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

