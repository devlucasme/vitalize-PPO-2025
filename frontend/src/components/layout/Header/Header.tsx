import type { FC } from "react";
import * as S from "./styles";
import { useTheme } from "../../../contexts/ThemeContext";
import VitalizeLogo from "../../../assets/vitalize-logo.png";
import VitalizeDarkLogo from "../../../assets/vitalize-logo-dark.png";
import { Navbar } from "../Navbar/Navbar";
import ReactSwitch from "react-switch";
import { Link } from "react-router-dom";
import { Menu } from "lucide-react";

type HeaderProps = {
    menuIsVisible: boolean;
    setMenuIsVisible: React.Dispatch<React.SetStateAction<boolean>>;
};

const Header: FC<HeaderProps> = ({ menuIsVisible, setMenuIsVisible }) => {
    const { toggleTheme, theme } = useTheme();
    const logo = theme.title === "dark" ? VitalizeDarkLogo : VitalizeLogo;

    return (
        <S.Header>
            <S.Container>
                <Link to={"/"}>
                    <S.VitalizeLogo src={logo} alt="Logo do Vitalize" />
                </Link>
                <S.DesktopNavbar>
                    <Navbar />
                </S.DesktopNavbar>
                <S.RightArea>
                    <ReactSwitch
                        onChange={toggleTheme}
                        checked={theme.title === "dark"}
                        height={20}
                        width={48}
                        handleDiameter={22}
                        onColor="#22313F"
                        offColor="#ADD8E6"
                        checkedIcon={
                            <S.IconWrapper>
                                <S.MoonIcon />
                            </S.IconWrapper>
                        }
                        uncheckedIcon={
                            <S.IconWrapper>
                                <S.SunIcon />
                            </S.IconWrapper>
                        }
                    />
                    <S.MenuIconWrapper>
                        {!menuIsVisible && (
                            <Menu
                                size={26}
                                onClick={() => setMenuIsVisible(true)}
                            />
                        )}
                    </S.MenuIconWrapper>
                    <S.DesktopProfileButton>
                        <Link to={"/user"}>
                            <S.UserIcon />
                        </Link>
                    </S.DesktopProfileButton>
                </S.RightArea>
            </S.Container>
        </S.Header>
    );
};

export { Header };