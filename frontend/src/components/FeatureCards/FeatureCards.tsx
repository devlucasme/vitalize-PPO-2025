import { useEffect, useState } from "react";
import CalculadoraImc from "../../assets/pavol-stugel-MnHLe_eOtn0-unsplash.jpg";
import Dieta from "../../assets/dieta.jpg";
import Treino from "../../assets/treino.jpg";
import * as S from "./styles";
import { Button } from "../Button/Button";

const features = [
  {
    image: CalculadoraImc,
    title: "Calculadora",
    description: "Calcule seu IMC e calorias",
  },
  {
    image: Dieta,
    title: "Alimentação",
    description: "Confira sua dieta personalizada",
  },
  {
    image: Treino,
    title: "Treino",
    description: "Veja seu treino personalizado",
  },
];


const backgroundImages = [CalculadoraImc, Dieta, Treino];

const FeatureCards = () => {
  const [currentBgIndex, setCurrentBgIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentBgIndex((prev) => (prev + 1) % backgroundImages.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  return (
    <S.Main>
      {backgroundImages.map((img, i) => (
        <S.BackgroundImage
          key={i}
          src={img}
          alt=""
          isVisible={i === currentBgIndex}
        />
      ))}
      <S.Overlay />
      <S.Container>
        {features.map(({ image, title, description }) => (
          <S.CardLink key={title}>
            <S.Image src={image} alt={title} />
            <S.Title>{title}</S.Title>
            <S.Description>{description}</S.Description>
            <Button>Acessar</Button>
          </S.CardLink>
        ))}
      </S.Container>
    </S.Main>
  );
};

export { FeatureCards };
