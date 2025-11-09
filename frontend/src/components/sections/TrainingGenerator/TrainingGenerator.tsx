import type { FC } from "react";
import * as S from "./styles";
import { useEffect, useState, useRef } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { Dumbbell, Loader } from "lucide-react";
import { Button } from "../../ui/Button/Button";
import { useTheme } from "../../../contexts/ThemeContext";
import type { ITrainingRequestData } from "../../../services/training.services";
import { generateTraining } from "../../../services/training.services";
import PushUpImage from "../../../assets/push-up.jpg";
import PullUpImage from "../../../assets/pull-up.jpg";
import SquatImage from "../../../assets/squat.jpg";
import RunningImage from "../../../assets/running1.jpg";
import RunningTwoImage from "../../../assets/running2.jpg";
import type { IDietAndTrainingData } from "../../../interfaces/DietAndTraining.interface";
import ReactMarkdown from "react-markdown";
import { Link } from "react-router-dom";

const backgroundImages = [
  PushUpImage,
  PullUpImage,
  SquatImage,
  RunningImage,
  RunningTwoImage,
];

const TrainingGenerator: FC = () => {
  const { theme } = useTheme();
  const location = useLocation();
  const navigate = useNavigate();
  const stateData = location.state as IDietAndTrainingData | undefined;

  // Recupera dados salvos localmente se não vier via state
  const storedData = localStorage.getItem("userDietTrainingData");
  const parsedData: IDietAndTrainingData | undefined = storedData ? JSON.parse(storedData) : undefined;
  const finalData = stateData ?? parsedData;

  const [output, setOutput] = useState("");
  const [isStreaming, setIsStreaming] = useState(false);
  const [currentBgIndex, setCurrentBgIndex] = useState(0);
  const [feedback, setFeedback] = useState<React.ReactNode>(null);
  const [showTrainingModal, setShowTrainingModal] = useState(false);
  const [dontShowAgain, setDontShowAgain] = useState(false);
  const [showFormModal, setShowFormModal] = useState(false);
  const controllerRef = useRef<AbortController | null>(null);

  const token = localStorage.getItem("token");
  const hideKey = token ? `hideTrainingModal_${token}` : "hideTrainingModal_guest";

  useEffect(() => {
    const hideTrainingModal = localStorage.getItem(hideKey) === "true";

    if (!finalData) {
      setShowFormModal(true);
    } else if (!hideTrainingModal) {
      setShowTrainingModal(true);
    }
  }, [finalData, hideKey]);

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
    if (!finalData) return;

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

      const requestData: ITrainingRequestData = {
        age: Number(finalData.age),
        sex: finalData.sex,
        weightKg: Number(finalData.weight_kg),
        heightCm: Number(finalData.height_cm),
        activityLevel: finalData.activity_level,
        objective: finalData.objective,
        trainingPlace: finalData.training_place,
        budGetLevel: finalData.budGet_level,
        healthConditions: finalData.health_conditions,
      };

      const response = await generateTraining(requestData, token, controller.signal);
      setOutput(response.plan);

      setFeedback(
        <S.FeedbackWrapper>
          <S.FeedbackBox>
            <S.FeedbackIcon color={"#219221"} />
            <span>Treino gerado! <Link to={"/user"}>Veja no perfil.</Link></span>
          </S.FeedbackBox>
        </S.FeedbackWrapper>
      );
    } catch (err: any) {
      if (err.name === "AbortError") {
        setOutput((prev) => prev + "\n\n[Streaming interrompido]");
        return;
      }
      setOutput("A geração do treino foi cancelada.");
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

    setShowTrainingModal(false);
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
              Por favor, complete seus dados para gerar o treino.
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

        {showTrainingModal && (
          <S.Modal>
            <S.ModalTitle>Atenção!</S.ModalTitle>
            <S.ModalText>
              Se já existir um treino cadastrado, ele será substituído ao gerar um novo.
            </S.ModalText>
            <S.ModalCheckbox>
              <input
                type="checkbox"
                id="dontShowTraining"
                checked={dontShowAgain}
                onChange={handleCheckboxChange}
              />
              <label htmlFor="dontShowTraining">
                Não mostrar novamente
              </label>
            </S.ModalCheckbox>
            <S.ModalButtons>
              <Button
                onClick={() => setShowTrainingModal(false)}
                backgroundColor={theme.colors.buttonBackgroundColor}
                buttonColor={theme.colors.buttonColor}
              >
                Cancelar
              </Button>
              <Button
                onClick={handleGenerate}
                backgroundColor="#68b957"
              >
                Gerar treino
              </Button>
            </S.ModalButtons>
          </S.Modal>
        )}

        {!showFormModal && !showTrainingModal && (
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
                  <Dumbbell size={16} />
                )}
                {isStreaming ? "Cancelar" : "Gerar treino"}
              </Button>
            </S.ButtonContainer>

            {finalData && output && (
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

export { TrainingGenerator };
