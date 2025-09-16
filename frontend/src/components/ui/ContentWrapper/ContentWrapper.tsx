import * as S from "./styles";
import type { ReactNode, FC } from "react";

type ContentWrapperProps = {
    children: ReactNode;
}

const ContentWrapper: FC<ContentWrapperProps> = ({ children }) => {
    return (
        <S.Wrapper>
            { children }
        </S.Wrapper>
    )
}

export { ContentWrapper }