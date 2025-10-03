import type { FC, ReactNode } from "react";
import * as S from "./styles";

export type ButtonProps = {
  children: ReactNode;
  backgroundColor?: string;
  width?: string;
  buttonColor?: string;
};

const Button: FC<ButtonProps> = ({ children, backgroundColor, width, buttonColor }) => {
  return (
    <S.Container backgroundColor={backgroundColor} width={width} buttonColor={buttonColor}>
      {children}
    </S.Container>
  );
};

export { Button };
