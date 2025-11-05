import * as S from "./styles";
import { useEffect, type FC } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { X, User } from "lucide-react";
import { Button } from "../../ui/Button/Button";

type ResponsiveNavbarProps = {
  menuIsVisible: boolean;
  setMenuIsVisible: React.Dispatch<React.SetStateAction<boolean>>;
};

const ReponsiveNavbar: FC<ResponsiveNavbarProps> = ({
  menuIsVisible,
  setMenuIsVisible,
}) => {
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    document.body.style.overflowY = menuIsVisible ? "hidden" : "auto";
  }, [menuIsVisible]);

  const handleClick = (
    e: React.MouseEvent<HTMLAnchorElement>,
    path: string,
    id?: string
  ) => {
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
    <S.Container isVisible={menuIsVisible}>
      <S.CloseButton onClick={() => setMenuIsVisible(false)}>
        <X size={26} />
      </S.CloseButton>

      <nav>
        <ul>
          <li>
            <a href="#inicio" onClick={(e) => handleClick(e, "/", "inicio")}>
              Início
            </a>
          </li>
          <li>
            <a href="#sobre" onClick={(e) => handleClick(e, "/", "sobre")}>
              Sobre
            </a>
          </li>
          <li>
            <Link to="/faq">FAQ</Link>
          </li>
          <li>
            <Link to="/login">Entrar</Link>
          </li>
          <li>
            <Link to="/cadastro">Cadastrar</Link>
          </li>
          <li>
            <Button width="150px" onClick={() => navigate("/user")}>
              <User size={18} />
              Perfil
            </Button>
          </li>
        </ul>
      </nav>
    </S.Container>
  );
};

export { ReponsiveNavbar };
