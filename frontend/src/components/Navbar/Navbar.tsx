import * as S from "./styles";
import type { FC } from "react";

const Navbar: FC = () => {
  return (
    <nav>
      <S.NavList>
        <li><a href="#">Início</a></li>
        <li><a href="#sobre">Sobre</a></li>
        <li><a href="#">Progresso</a></li>
        <li><a href="#">Blog</a></li>
        <li><a href="#">FAQ</a></li>
        <li><a href="#">Entrar</a></li>
      </S.NavList>
    </nav>
  );
};

export { Navbar };
