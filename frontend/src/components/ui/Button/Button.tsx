import type { FC, ReactNode } from "react";
import * as S from "./styles";

export type ButtonProps = {
  children: ReactNode;
  backgroundColor?: string;
  width?: string;
};

const Button: FC<ButtonProps> = ({ children, backgroundColor, width }) => {
  return (
    <S.Container backgroundColor={backgroundColor} width={width}>
      {children}
    </S.Container>
  );
};

export { Button };
