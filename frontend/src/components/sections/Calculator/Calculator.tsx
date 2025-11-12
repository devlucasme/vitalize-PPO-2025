import type { FC } from "react";
import * as S from "./styles";
import { Button } from "../../ui/Button/Button";
import VitalizeLogo from "../../../assets/vitalize-logo-menor.png";
import VitalizeDarkLogo from "../../../assets/vitalize-logo-menor-dark.png";
import {
  Citrus,
  Dumbbell,
  User,
  Calendar,
  Scale,
  Ruler,
  Activity,
  Home,
  Wallet,
  Goal,
  ArrowLeft,
} from "lucide-react";
import { useTheme } from "../../../contexts/ThemeContext";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { dietTrainingCalculatorValidation } from "../../../validations/validators/calculator";
import type { DietTrainingCalculatorValidationType } from "../../../validations/protocols/calculator";
import type { IDietAndTrainingData } from "../../../interfaces/DietAndTraining.interface";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";

const Calculator: FC = () => {
  const { theme } = useTheme();
  const logo = theme.title === "dark" ? VitalizeDarkLogo : VitalizeLogo;
  const navigate = useNavigate();

  const token = localStorage.getItem("token");
  const userKey = token ? `userDietTrainingData_${token}` : "userDietTrainingData_guest";

  const {
    handleSubmit,
    register,
    setValue,
    formState: { errors },
  } = useForm<DietTrainingCalculatorValidationType>({
    resolver: zodResolver(dietTrainingCalculatorValidation) as any,
    mode: "all",
  });

  const [imcResult, setImcResult] = useState<number | null>(null);

  // 🔄 Carregar dados salvos do usuário
  useEffect(() => {
    const savedData = localStorage.getItem(userKey);
    if (savedData) {
      const parsed = JSON.parse(savedData) as DietTrainingCalculatorValidationType;
      Object.entries(parsed).forEach(([key, value]) => {
        setValue(key as keyof DietTrainingCalculatorValidationType, value);
      });
    }
  }, [userKey, setValue]);

  const calculateIMC = (data: DietTrainingCalculatorValidationType) => {
    const heightM = Number(data.height_cm) / 100;
    const weight = Number(data.weight_kg);
    if (!heightM || !weight) return;
    const imc = weight / (heightM * heightM);
    setImcResult(Number(imc.toFixed(1)));
  };

  const getIMCClassification = (imc: number) => {
    if (imc < 18.5) return "Abaixo do peso";
    if (imc < 24.9) return "Peso normal";
    if (imc < 29.9) return "Sobrepeso";
    if (imc < 34.9) return "Obesidade grau I";
    if (imc < 39.9) return "Obesidade grau II";
    return "Obesidade grau III";
  };

  const getIMCDescription = (classification: string) => {
    switch (classification) {
      case "Abaixo do peso":
        return "Seu peso está abaixo do ideal. É importante garantir uma nutrição adequada e saudável.";
      case "Peso normal":
        return "Parabéns! Seu peso está dentro da faixa ideal para sua altura.";
      case "Sobrepeso":
        return "Você está levemente acima do peso. Pequenos ajustes na dieta e exercícios podem ajudar.";
      case "Obesidade grau I":
        return "Risco leve de complicações. Busque equilibrar alimentação e atividade física.";
      case "Obesidade grau II":
        return "Risco moderado à saúde. Consulte um profissional para acompanhamento adequado.";
      case "Obesidade grau III":
        return "Risco elevado à saúde. É essencial acompanhamento médico e nutricional.";
      default:
        return "";
    }
  };

  const handleFormSubmit = (
    data: DietTrainingCalculatorValidationType,
    path: string
  ) => {
    const typedData: IDietAndTrainingData = {
      age: Number(data.age),
      sex: data.sex,
      weight_kg: Number(data.weight_kg),
      height_cm: Number(data.height_cm),
      activity_level: data.activity_level,
      objective: data.objective,
      training_place: data.training_place,
      budGet_level: data.budGet_level,
      health_conditions: data.health_conditions ?? "Nenhuma",
    };

    localStorage.setItem(userKey, JSON.stringify(typedData));
    navigate(path, { state: typedData });
  };

  const classification = imcResult ? getIMCClassification(imcResult) : null;
  const description = classification ? getIMCDescription(classification) : "";

  return (
    <S.FormContainer>
      <S.Wrapper>
        {!imcResult && (
          <S.CalculatorCard>
            <S.BackLink to="/">
              <ArrowLeft size={18} />
              Voltar
            </S.BackLink>
            <img src={logo} alt="Logo do Vitalize" />
            <h2>Calcule seu IMC e veja sua classificação!</h2>

            {/* ---- Inputs ---- */}
            <S.InputRow>
              <S.InputGroup>
                <S.Label>
                  <Calendar size={14} /> Idade
                </S.Label>
                <S.FieldContainer hasError={!!errors.age}>
                  <S.Input type="number" {...register("age")} placeholder="Ex: 20" />
                </S.FieldContainer>
                {errors.age && <S.ErrorMessage>{errors.age.message}</S.ErrorMessage>}
              </S.InputGroup>

              <S.InputGroup>
                <S.Label>
                  <User size={14} /> Sexo
                </S.Label>
                <S.FieldContainer hasError={!!errors.sex}>
                  <S.Select {...register("sex")}>
                    <option value="">Selecione</option>
                    <option value="Masculino">Masculino</option>
                    <option value="Feminino">Feminino</option>
                  </S.Select>
                </S.FieldContainer>
                {errors.sex && <S.ErrorMessage>{errors.sex.message}</S.ErrorMessage>}
              </S.InputGroup>
            </S.InputRow>

            <S.InputRow>
              <S.InputGroup>
                <S.Label>
                  <Scale size={14} /> Peso (kg)
                </S.Label>
                <S.FieldContainer hasError={!!errors.weight_kg}>
                  <S.Input type="number" {...register("weight_kg")} placeholder="Ex: 70" />
                </S.FieldContainer>
                {errors.weight_kg && <S.ErrorMessage>{errors.weight_kg.message}</S.ErrorMessage>}
              </S.InputGroup>

              <S.InputGroup>
                <S.Label>
                  <Ruler size={14} /> Altura (cm)
                </S.Label>
                <S.FieldContainer hasError={!!errors.height_cm}>
                  <S.Input type="number" {...register("height_cm")} placeholder="Ex: 170" />
                </S.FieldContainer>
                {errors.height_cm && <S.ErrorMessage>{errors.height_cm.message}</S.ErrorMessage>}
              </S.InputGroup>
            </S.InputRow>

            <S.InputRow>
              <S.InputGroup>
                <S.Label>
                  <Activity size={14} /> Nível de atividade
                </S.Label>
                <S.FieldContainer hasError={!!errors.activity_level}>
                  <S.Select {...register("activity_level")}>
                    <option value="">Selecione</option>
                    <option value="Sedentário">Sedentário</option>
                    <option value="2x por semana">2x por semana</option>
                    <option value="3x por semana">3x por semana</option>
                    <option value="4x por semana">4x por semana</option>
                    <option value="5x por semana">5x por semana</option>
                  </S.Select>
                </S.FieldContainer>
                {errors.activity_level && (
                  <S.ErrorMessage>{errors.activity_level.message}</S.ErrorMessage>
                )}
              </S.InputGroup>

              <S.InputGroup>
                <S.Label>
                  <Goal size={14} /> Objetivo
                </S.Label>
                <S.FieldContainer hasError={!!errors.objective}>
                  <S.Select {...register("objective")}>
                    <option value="">Selecione</option>
                    <option value="Perda de peso">Perda de peso</option>
                    <option value="Hipertrofia">Hipertrofia</option>
                    <option value="Manter massa muscular">Manter massa muscular</option>
                  </S.Select>
                </S.FieldContainer>
                {errors.objective && (
                  <S.ErrorMessage>{errors.objective.message}</S.ErrorMessage>
                )}
              </S.InputGroup>
            </S.InputRow>

            <S.InputRow>
              <S.InputGroup>
                <S.Label>
                  <Home size={14} /> Local de treino
                </S.Label>
                <S.FieldContainer hasError={!!errors.training_place}>
                  <S.Select {...register("training_place")}>
                    <option value="">Selecione</option>
                    <option value="Academia">Academia</option>
                    <option value="Casa">Casa</option>
                    <option value="Parque">Parque</option>
                  </S.Select>
                </S.FieldContainer>
                {errors.training_place && (
                  <S.ErrorMessage>{errors.training_place.message}</S.ErrorMessage>
                )}
              </S.InputGroup>

              <S.InputGroup>
                <S.Label>
                  <Wallet size={14} /> Nível de orçamento
                </S.Label>
                <S.FieldContainer hasError={!!errors.budGet_level}>
                  <S.Select {...register("budGet_level")}>
                    <option value="">Selecione</option>
                    <option value="Baixo">Baixo</option>
                    <option value="Médio">Médio</option>
                    <option value="Alto">Alto</option>
                  </S.Select>
                </S.FieldContainer>
                {errors.budGet_level && (
                  <S.ErrorMessage>{errors.budGet_level.message}</S.ErrorMessage>
                )}
              </S.InputGroup>
            </S.InputRow>

            <S.InputRow>
              <S.InputGroup>
                <S.Label>Condições de saúde</S.Label>
                <S.FieldContainer hasError={!!errors.health_conditions}>
                  <S.Select {...register("health_conditions")}>
                    <option value="">Selecione</option>
                    <option value="Nenhuma">Nenhuma</option>
                    <option value="Diabetes">Diabetes</option>
                    <option value="Hipertensão">Hipertensão</option>
                    <option value="Intolerância à lactose">Intolerância à lactose</option>
                    <option value="Doença celíaca (sem glúten)">
                      Doença celíaca (sem glúten)
                    </option>
                  </S.Select>
                </S.FieldContainer>
                {errors.health_conditions && (
                  <S.ErrorMessage>{errors.health_conditions.message}</S.ErrorMessage>
                )}
              </S.InputGroup>
            </S.InputRow>

            <S.ButtonContainer>
              <Button
                type="button"
                onClick={handleSubmit(calculateIMC)}
                backgroundColor="#cca041"
              >
                <Scale size={16} /> Calcular IMC
              </Button>
            </S.ButtonContainer>
          </S.CalculatorCard>
        )}

        {imcResult && (
          <S.ResultCard>
            <h3>Resultado do IMC</h3>
            <div className="imc-value">{imcResult}</div>
            <p>
              Classificação: <strong>{classification}</strong>
            </p>
            <p>{description}</p>

            <table>
              <tbody>
                {[
                  { label: "Abaixo do peso", min: 0, max: 18.4 },
                  { label: "Peso normal", min: 18.5, max: 24.9 },
                  { label: "Sobrepeso", min: 25, max: 29.9 },
                  { label: "Obesidade grau I", min: 30, max: 34.9 },
                  { label: "Obesidade grau II", min: 35, max: 39.9 },
                  { label: "Obesidade grau III", min: 40, max: 99 },
                ].map((item) => (
                  <tr
                    key={item.label}
                    className={
                      imcResult >= item.min && imcResult <= item.max ? "highlight" : ""
                    }
                  >
                    <td>{item.label}</td>
                    <td>
                      {item.min} – {item.max}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>

            <S.ButtonContainer>
              <Button
                type="button"
                backgroundColor="#38bd90"
                onClick={handleSubmit((data) => handleFormSubmit(data, "/diet"))}
              >
                <Citrus size={16} /> Gerar Dieta
              </Button>
              <Button
                type="button"
                backgroundColor="#507cda"
                onClick={handleSubmit((data) => handleFormSubmit(data, "/training"))}
              >
                <Dumbbell size={16} /> Gerar Treino
              </Button>
              <Button
                type="button"
                backgroundColor="#e77272"
                onClick={() => setImcResult(null)}
              >
                <ArrowLeft size={16} /> Voltar para a calculadora
              </Button>
            </S.ButtonContainer>
          </S.ResultCard>
        )}
      </S.Wrapper>
    </S.FormContainer>
  );
};

export { Calculator };
