import * as S from "./styles";
import type { FC } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";

const Navbar: FC = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>, path: string, id?: string) => {
    e.preventDefault();

    if (location.pathname === path) {
      if (id) {
        const element = document.getElementById(id);
        if (element) {
          element.scrollIntoView({ behavior: "smooth" });
        } else {
          window.scrollTo({ top: 0, behavior: "smooth" }); 
        }
      } else {
        window.scrollTo({ top: 0, behavior: "smooth" });
      }
    } else {
      navigate(path);
      if (id) {
        setTimeout(() => {
          const element = document.getElementById(id);
          if (element) element.scrollIntoView({ behavior: "smooth" });
        }, 50);
      }
    }
  };

  return (
    <nav>
      <S.NavList>
        <li>
          <a href="#inicio" onClick={(e) => handleClick(e, "/", "inicio")}>Início</a>
        </li>
        <li>
          <a href="#sobre" onClick={(e) => handleClick(e, "/", "sobre")}>Sobre</a>
        </li>
        <li>
          <Link to={"/faq"}>FAQ</Link>
        </li>
        <li>
          <Link to="/login">Entrar</Link>
        </li>
        <li>
          <Link to="/cadastro">Cadastrar</Link>
        </li>
      </S.NavList>
    </nav>
  );
};

export { Navbar };
