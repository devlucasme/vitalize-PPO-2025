import CalculadoraImc from "../../assets/calculadora.jpg";
import Dieta from "../../assets/dieta.jpg";
import Treino from "../../assets/treino.jpg";
import type { FC } from "react";
import * as S from "./styles";
import { Button } from "../Button/Button";

const features = [
    {
        image: CalculadoraImc,
        title: "Calculadora",
        description: "Calcule o seu IMC e gasto calórico",
    },
    {
        image:  Dieta,
        title: "Alimentação",
        description: "Veja a sua dieta personalizada",
    },
    {
        image: Treino,
        title: "Treino",
        description: "Acesse o seu treino personalizado",
    }
];

const FeatureCards: FC = () => {
    return (
        <S.Main>
            <S.Container>
                {
                    features.map(({image, title, description}) => (
                        <S.CardLink key={title}>
                            <S.Image src={image} alt="imagens feature cards" />
                            <S.Title>{title}</S.Title>
                            <S.Description>{description}</S.Description>
                            <Button backgroundColor={"#81c784"}>Acessar</Button>
                        </S.CardLink>
                    ))
                }
            </S.Container>
        </S.Main>
    )
}

export { FeatureCards }