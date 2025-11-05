import type { FC } from "react";
import * as S from "./styles";
import { useEffect, useState, useRef } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { Sparkles, Loader } from "lucide-react";
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
  const [feedback, setFeedback] = useState<React.ReactNode>(null);
  const [showDietModal, setShowDietModal] = useState(false);
  const [dontShowAgain, setDontShowAgain] = useState(false);
  const [showFormModal, setShowFormModal] = useState(false);
  const controllerRef = useRef<AbortController | null>(null);

  const token = localStorage.getItem("token");
  const hideKey = token ? `hideDietModal_${token}` : "hideDietModal_guest";

  useEffect(() => {
    const hideDietModal = localStorage.getItem(hideKey) === "true";

    if (!stateData) {
      setShowFormModal(true);
    } else if (!hideDietModal) {
      setShowDietModal(true);
    }
  }, [stateData, hideKey]);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentBgIndex((prev) => (prev + 1) % backgroundImages.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const handleCheckboxChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const checked = e.target.checked;
    setDontShowAgain(checked);
    if (checked) {
      localStorage.setItem(hideKey, "true");
    } else {
      localStorage.removeItem(hideKey);
    }
  };

  const startStreaming = async () => {
    if (!stateData) return;

    const controller = new AbortController();
    controllerRef.current = controller;

    setOutput("");
    setIsStreaming(true);
    setFeedback(null);

    try {
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

      const response = await generateDiet(requestData, token, controller.signal);
      setOutput(response.plan);

      setFeedback(
        <S.FeedbackWrapper>
          <S.FeedbackBox>
            <S.FeedbackIcon color={theme.colors.primary} />
            <span>Dieta gerada com sucesso! Veja no perfil.</span>
          </S.FeedbackBox>
        </S.FeedbackWrapper>
      );
    } catch (err: any) {
      if (err.name === "AbortError") {
        setOutput((prev) => prev + "\n\n[Streaming interrompido]");
        return;
      }
      setOutput("A geração da dieta foi cancelada.");
    } finally {
      setIsStreaming(false);
      controllerRef.current = null;
    }
  };

  const handleGenerate = async () => {
    if (isStreaming) {
      controllerRef.current?.abort();
      setIsStreaming(false);
      return;
    }

    setShowDietModal(false);
    setShowFormModal(false);
    await startStreaming();
  };

  return (
    <S.Main>
      {backgroundImages.map((img, index) => (
        <S.BackgroundImage key={index} src={img} alt="" isVisible={index === currentBgIndex} />
      ))}
      <S.Overlay />
      <S.Container>
        {showFormModal && (
          <S.Modal>
            <S.ModalTitle>Atenção!</S.ModalTitle>
            <S.ModalText>
              Parece que você ainda não preencheu o formulário.
              Por favor, complete seus dados para gerar a dieta.
            </S.ModalText>
            <S.ModalButtons>
              <Button
                onClick={() => navigate("/calculator", { replace: true })}
                backgroundColor={theme.colors.buttonBackgroundColor}
                buttonColor={theme.colors.buttonColor}
              >
                Ir para o formulário
              </Button>
            </S.ModalButtons>
          </S.Modal>
        )}

        {showDietModal && (
          <S.Modal>
            <S.ModalTitle>Atenção!</S.ModalTitle>
            <S.ModalText>
              Se já existir uma dieta cadastrada, ela será substituída ao gerar uma nova.
            </S.ModalText>
            <S.ModalCheckbox>
              <input
                type="checkbox"
                id="dontShow"
                checked={dontShowAgain}
                onChange={handleCheckboxChange}
              />
              <label htmlFor="dontShow">
                Não mostrar novamente
              </label>
            </S.ModalCheckbox>
            <S.ModalButtons>
              <Button
                onClick={() => setShowDietModal(false)}
                backgroundColor={theme.colors.buttonBackgroundColor}
                buttonColor={theme.colors.buttonColor}
              >
                Cancelar
              </Button>
              <Button
                onClick={handleGenerate}
                backgroundColor="#68b957"
              >
                Gerar mesmo assim
              </Button>
            </S.ModalButtons>
          </S.Modal>
        )}

        {!showFormModal && !showDietModal && (
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
            {stateData && output && (
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
            )}
            {feedback}
          </S.Card>
        )}
      </S.Container>
    </S.Main>
  );
};

export { DietGenerator };