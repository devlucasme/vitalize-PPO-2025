import type { FC } from "react";
import * as S from "./styles";
import { useTheme } from "../../../contexts/ThemeContext";
import VitalizeLogo from "../../../assets/vitalize-logo.png";
import VitalizeDarkLogo from "../../../assets/vitalize-logo-dark.png";
import { Navbar } from "../Navbar/Navbar";
import ReactSwitch from "react-switch";
import { Link } from "react-router-dom";

const Header: FC = () => {
    const { toggleTheme, theme } = useTheme();
    const logo = theme.title === "dark" ? VitalizeDarkLogo : VitalizeLogo;

    return (
        <S.Header>
            <S.Container>
                <Link to={"/"}>
                    <S.VitalizeLogo src={logo} alt="Logo do vitalize" />
                </Link>
                <Navbar />
                <S.Actions>
                    <S.ProfileButton>
                        <Link to={"/user"}>
                            <S.UserIcon />
                        </Link>
                    </S.ProfileButton>
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
                </S.Actions>
            </S.Container>
        </S.Header>
    );
};

export { Header };