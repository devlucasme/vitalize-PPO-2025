import type { FC } from "react";
import * as S from "./styles";

const Footer: FC = () => {
  return (
    <S.Footer>
      <S.Container>
        <S.Text>© {new Date().getFullYear()} Vitalize. Tecnologia e nutrição por uma vida mais saudável. Todos os direitos reservados.</S.Text>
      </S.Container>
    </S.Footer>
  );
};

export { Footer };
