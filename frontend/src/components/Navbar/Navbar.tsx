import * as S from "./styles";
import type { FC } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";

const Navbar: FC = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const handleInicioClick = (e: React.MouseEvent) => {
    e.preventDefault();

    if (location.pathname !== "/") {
      navigate("/");
    } else {
      const section = document.getElementById("cards");
      if (section) {
        section.scrollIntoView({ behavior: "smooth" });
      }
    }
  };

  return (
    <nav>
      <S.NavList>
        <li><a href="/" onClick={handleInicioClick}>Início</a></li>
        <li><a href="#sobre">Sobre</a></li>
        <li><a href="#">FAQ</a></li>
        <li><Link to="/login">Entrar</Link></li>
        <li><a href="#">Cadastrar</a></li>
      </S.NavList>
    </nav>
  );
};

export { Navbar };
