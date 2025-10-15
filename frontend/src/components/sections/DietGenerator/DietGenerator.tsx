import type { FC } from "react";
import * as S from "./styles";
import { useEffect, useState, useRef } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { Sparkles, Loader, CheckCircle } from "lucide-react";
import { Button } from "../../ui/Button/Button";
import { useTheme } from "../../../contexts/ThemeContext";
import type { IDietRequestData } from "../../../services/diet.services";
import { generateDiet } from "../../../services/diet.services";
import MorangoImage from "../../../assets/morango.jpg";
import MingauImage from "../../../assets/mingau-frutas.jpg";
import SaladaFrutasImage from "../../../assets/salada-frutas.jpg";
import Orange from "../../../assets/orange.jpg";
import Refeição from "../../../assets/refeição.jpg";
import type { IDietAndTrainingData } from "../../../interfaces/DietAndTraining.interface";
import ReactMarkdown from "react-markdown";

const backgroundImages = [
  MorangoImage,
  MingauImage,
  SaladaFrutasImage,
  Orange,
  Refeição,
];

const DietGenerator: FC = () => {
  const { theme } = useTheme();
  const location = useLocation();
  const navigate = useNavigate();
  const stateData = location.state as IDietAndTrainingData | undefined;
  const [output, setOutput] = useState("");
  const [isStreaming, setIsStreaming] = useState(false);
  const [currentBgIndex, setCurrentBgIndex] = useState(0);
  const [hasGenerated, setHasGenerated] = useState(false);
  const [feedback, setFeedback] = useState<React.ReactNode>(null);
  const controllerRef = useRef<AbortController | null>(null);

  const startStreaming = async () => {
    if (!stateData) return;

    const controller = new AbortController();
    controllerRef.current = controller;

    setOutput("");
    setIsStreaming(true);
    setFeedback(null);

    try {
      const token = localStorage.getItem("token");
      if (!token) {
        navigate("/login");
        return;
      }

      const requestData: IDietRequestData = {
        age: Number(stateData.age),
        sex: stateData.sex,
        weightKg: Number(stateData.weight_kg),
        heightCm: Number(stateData.height_cm),
        activityLevel: stateData.activity_level,
        objective: stateData.objective,
        trainingPlace: stateData.training_place,
        budGetLevel: stateData.budGet_level,
        healthConditions: stateData.health_conditions,
      };

      const response = await generateDiet(requestData, token ?? undefined, controller.signal);
      setOutput(response.plan);

      setFeedback(
        <S.FeedbackWrapper>
          <S.FeedbackBox>
            <CheckCircle size={20} color={theme.colors.primary} />
            <span>Dieta gerada com sucesso! Veja no perfil.</span>
          </S.FeedbackBox>
        </S.FeedbackWrapper>
      );
    } catch (err: any) {
      if (err.name === "AbortError") {
        setOutput((prev) => prev + "\n\n[Streaming interrompido]");
        return;
      }
      setOutput("Erro ao gerar dieta.");
      console.error(err);
    } finally {
      setIsStreaming(false);
      controllerRef.current = null;
    }
  };

  const handleGenerate = async () => {
    setHasGenerated(true);

    if (!stateData) return;

    if (isStreaming) {
      controllerRef.current?.abort();
      setIsStreaming(false);
      return;
    }

    await startStreaming();
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentBgIndex((prev) => (prev + 1) % backgroundImages.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <S.Main>
      {backgroundImages.map((img, index) => (
        <S.BackgroundImage key={index} src={img} alt="" isVisible={index === currentBgIndex} />
      ))}
      <S.Overlay />

      <S.Container>
        {hasGenerated && !stateData && (
          <S.Modal>
            <S.ModalTitle>Atenção!</S.ModalTitle>
            <S.ModalText>
              Parece que você ainda não preencheu o formulário.<br />
              Por favor, complete seus dados para gerar a dieta.
            </S.ModalText>
            <S.ModalButtons>
              <Button
                className="confirm"
                onClick={() => navigate("/", { replace: true })}
                backgroundColor={theme.colors.buttonBackgroundColor}
              >
                Ir para o formulário
              </Button>
            </S.ModalButtons>
          </S.Modal>
        )}

        {!hasGenerated || (hasGenerated && stateData) ? (
          <S.Card>
            <S.ButtonContainer>
              <Button
                type="button"
                backgroundColor={theme.colors.buttonBackgroundColor}
                buttonColor={theme.colors.buttonColor}
                onClick={handleGenerate}
              >
                {isStreaming ? (
                  <S.LoadingIcon>
                    <Loader size={16} />
                  </S.LoadingIcon>
                ) : (
                  <Sparkles size={16} />
                )}
                {isStreaming ? "Cancelar" : "Gerar dieta"}
              </Button>
            </S.ButtonContainer>

            {stateData && (
              <>
                <S.Box>
                  <S.ContentBox>
                    <ReactMarkdown
                      children={output}
                      components={{
                        h1: ({ children }) => <S.PlanTitle>{children}</S.PlanTitle>,
                        h2: ({ children }) => <S.DayCard>{children}</S.DayCard>,
                        h3: ({ children }) => <S.MealTitle>{children}</S.MealTitle>,
                        ul: ({ children }) => <S.MealList>{children}</S.MealList>,
                        li: ({ children }) => <S.MealItem>{children}</S.MealItem>,
                        p: ({ children }) => <S.Paragraph>{children}</S.Paragraph>,
                      }}
                    />
                  </S.ContentBox>
                </S.Box>

                {feedback}
              </>
            )}
          </S.Card>
        ) : null}
      </S.Container>
    </S.Main>
  );
};

export { DietGenerator };
