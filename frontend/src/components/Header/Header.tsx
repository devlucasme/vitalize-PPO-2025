import type { FC } from "react";
import * as S from "./styles";
import VitalizeLogo from "../../assets/vitalize-logo.png";
import VitalizeDarkLogo from "../../assets/vitalize-logo-dark.png";
import ReactSwitch from "react-switch";
import { ThemeContext } from "styled-components";
import { useContext } from "react";

interface HeaderProps {
    toggleTheme(): void;
}

const Header: FC<HeaderProps> = ({ toggleTheme }) => {

    const theme = useContext(ThemeContext);

    const logo = theme?.title == "dark" ? VitalizeDarkLogo : VitalizeLogo;

    return (
        <S.Container>
            <img src={logo} alt="Logo da vitalize" />
            <ReactSwitch
                onChange={toggleTheme}
                checked={theme?.title == "dark"}
                checkedIcon={false}
                uncheckedIcon={false}
                height={10}
                width={40}
                handleDiameter={20}
                onColor={theme?.colors.secundary}
            />
        </S.Container>
    )
}

export { Header }