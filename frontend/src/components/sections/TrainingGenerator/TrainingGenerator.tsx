import type { FC } from "react";
import { useEffect, useState } from "react";
import * as S from "./styles";
import { Sparkles } from "lucide-react";
import { Button } from "../../ui/Button/Button";
import { useTheme } from "../../../contexts/ThemeContext";
import PushUpImage from "../../../assets/push-up.jpg";
import PullUpImage from "../../../assets/pull-up.jpg";
import SquatImage from "../../../assets/squat.jpg";
import RunningImage from "../../../assets/running1.jpg";
import RunningTwoImage from "../../../assets/running2.jpg";

const backgroundImages = [PushUpImage, PullUpImage, SquatImage, RunningImage, RunningTwoImage];

const TrainingGenerator: FC = () => {
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
                            <Sparkles size={16} /> Gerar treino
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

export { TrainingGenerator };