import type { FC } from "react";
import { useEffect, useState } from "react";
import * as S from "./styles";
import { Sparkles } from "lucide-react";
import { Button } from "../../ui/Button/Button";
import { useTheme } from "../../../contexts/ThemeContext";
import MorangoImage from "../../../assets/morango.jpg";
import MingauImage from "../../../assets/mingau-frutas.jpg";
import SaladaFrutasImage from "../../../assets/salada-frutas.jpg";
import Orange from "../../../assets/orange.jpg";
import Refeição from "../../../assets/refeição.jpg";

const backgroundImages = [MorangoImage, MingauImage, SaladaFrutasImage, Orange, Refeição];

const DietGenerator: FC = () => {
  const { theme } = useTheme();
  const [currentBgIndex, setCurrentBgIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentBgIndex((prev) => (prev + 1) % backgroundImages.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <S.Main>
      {backgroundImages.map((img, index) => (
        <S.BackgroundImage
          key={index}
          src={img}
          alt=""
          isVisible={index === currentBgIndex}
        />
      ))}
      <S.Overlay />
      <S.Container>
        <S.Card>
          <S.ButtonContainer>
            <Button
              backgroundColor={theme.colors.buttonBackgroundColor}
              buttonColor={theme.colors.buttonColor}
            >
              <Sparkles /> Gerar dieta
            </Button>
          </S.ButtonContainer>
          <S.Box>
            <S.ContentBox>
              TODO O TEXTO VAI SER GERADO AQUI...
            </S.ContentBox>
          </S.Box>
        </S.Card>
      </S.Container>
    </S.Main>
  );
};

export { DietGenerator };