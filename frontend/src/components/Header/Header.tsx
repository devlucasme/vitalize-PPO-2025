import type { FC } from "react";
import * as S from "./styles";
import VitalizeLogo from "../../assets/vitalize-logo.png";
import VitalizeDarkLogo from "../../assets/vitalize-logo-dark.png";
import { Navbar } from "../Navbar/Navbar";
import ReactSwitch from "react-switch";
import { useTheme } from "../../contexts/ThemeContext";


const Header: FC = () => {

    const { toggleTheme, theme } = useTheme();
    const logo = theme.title == "dark" ? VitalizeDarkLogo : VitalizeLogo;

    return (
        <S.Header>
            <S.Container>
                <img src={logo} alt="Logo da vitalize" />
                <Navbar />
                <ReactSwitch
                    onChange={toggleTheme}
                    checked={theme.title == "dark"}
                    checkedIcon={false}
                    uncheckedIcon={false}
                    height={10}
                    width={40}
                    handleDiameter={20}
                    onColor={theme.colors.secundary}
                />
            </S.Container>
        </S.Header>
    )
}

export { Header }