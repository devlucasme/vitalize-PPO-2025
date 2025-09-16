import type { FC, ReactNode } from "react";
import * as S from "./styles";

export type ButtonProps = {
    children: ReactNode;
    backgroundColor?: string;
}

const Button: FC<ButtonProps> = ({ children, backgroundColor }) => {
    return (
        <S.Container backgroundColor={backgroundColor}>
            { children }
        </S.Container>
    )
}

export { Button }