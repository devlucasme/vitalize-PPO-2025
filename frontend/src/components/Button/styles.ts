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
  transition: .3s ease-in;

  &:hover {
    opacity: 0.90;
  }

`