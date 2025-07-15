import type { FC } from "react";
import * as S from "./styles";

const About: FC = () => {
    return (
        <S.Section id="sobre">
            <S.Container>
                <S.Title>Propósito</S.Title>
                <S.Text> A <strong>Vitalize</strong> é uma plataforma gratuita criada para te ajudar a cuidar da sua saúde de forma simples e inteligente. Nosso objetivo é tornar a alimentação saudável acessível para todos, com ferramentas práticas e personalizadas.</S.Text>

                <S.SubTitle>Criadores</S.SubTitle>
                <S.Text>
                    Desenvolvido com 💚 por estudantes apaixonados por tecnologia, bem-estar e nutrição.
                </S.Text>
            </S.Container>
        </S.Section>
    )
}

export { About }