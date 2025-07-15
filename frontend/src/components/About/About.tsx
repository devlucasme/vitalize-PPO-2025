import type { FC } from "react";
import * as S from "./styles";

const About: FC = () => {
    return (
        <S.Section id="sobre">
            <S.Container>
                <S.Title>Sobre Nós</S.Title>
                <S.Text>Temos como objetivo promover a saúde entre as pessoas, de acordo com Governo Brasileiro em uma pesquisa feita em 2019 sobre obesidade, a população feminina teve um aumento de 14,5% para 30,2%, enquanto a masculina passou de 9,6% para 22,8%.
                  Criado por Andrey C. O. Ferreira, Lucas G. Silva e José C. S. Costa o site conta com funcionalidades que auxilia com melhora da sua saúde com base no seu estado atual.  
                </S.Text>
            </S.Container>
        </S.Section>
    )
}

export { About }