import type { FC, ReactNode, ButtonHTMLAttributes } from "react";
import * as S from "./styles";

export type ButtonProps = {
  children: ReactNode;
  backgroundColor?: string;
  width?: string;
  buttonColor?: string;
} & ButtonHTMLAttributes<HTMLButtonElement>;

const Button: FC<ButtonProps> = ({ children, backgroundColor, width, buttonColor, ...rest }) => {
  return (
    <S.Container backgroundColor={backgroundColor} width={width} buttonColor={buttonColor} {...rest}>
      {children}
    </S.Container>
  );
};

export { Button };