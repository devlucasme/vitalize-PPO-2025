import * as S from "./styles";
import type { FC } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { useState, useEffect, useRef } from "react";

const Navbar: FC = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [openFAQ, setOpenFAQ] = useState(false);
  const faqRef = useRef<HTMLLIElement>(null);

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

  const handleLoginClick = () => {
    navigate("/login");
  };

  const toggleFAQ = () => {
    setOpenFAQ((prev) => !prev);
  };

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (faqRef.current && !faqRef.current.contains(event.target as Node)) {
        setOpenFAQ(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <nav>
      <S.NavList>
        <li>
          <a href="#inicio" onClick={(e) => handleClick(e, "/", "inicio")}>Início</a>
        </li>
        <li>
          <a href="#sobre" onClick={(e) => handleClick(e, "/", "sobre")}>Sobre</a>
        </li>
        <li ref={faqRef}>
          <button onClick={toggleFAQ}>Dúvidas</button>
          {openFAQ && (
            <S.DropdownCard>
              <Link to="/faq">Perguntas</Link>
              <a href="#tutorial" onClick={(e) => handleClick(e, "/", "tutorial")}>Tutorial</a>
            </S.DropdownCard>
          )}
        </li>
        <li>
          <a onClick={handleLoginClick}>Entrar</a>
        </li>
        <li>
          <Link to="/cadastro">Cadastrar</Link>
        </li>
      </S.NavList>
    </nav>
  );
};

export { Navbar };