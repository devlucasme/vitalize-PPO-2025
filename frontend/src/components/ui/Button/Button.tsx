import type { FC, MouseEventHandler, ReactNode } from "react";
import * as S from "./styles";

export type ButtonProps = {
    children: ReactNode;
    backgroundColor?: string;
    onClick?: MouseEventHandler<HTMLButtonElement>;
}

const Button: FC<ButtonProps> = ({ children, backgroundColor }) => {
    return (
        <S.Container backgroundColor={backgroundColor}>
            { children }
        </S.Container>
    )
}

export { Button }