import type { FC } from "react";
import * as S from "./styles";
import { Button } from "../../ui/Button/Button";
import VitalizeLogo from "../../../assets/vitalize-logo-menor.png";
import VitalizeDarkLogo from "../../../assets/vitalize-logo-menor-dark.png";
import { Citrus, Dumbbell, User, Calendar, Scale, Ruler, Activity, Wallet, Goal, ArrowLeft, Percent, Cross } from "lucide-react";
import { useTheme } from "../../../contexts/ThemeContext";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { dietTrainingCalculatorValidation } from "../../../validations/validators/calculator";
import type { DietTrainingCalculatorValidationType } from "../../../validations/protocols/calculator";
import type { IDietAndTrainingData } from "../../../interfaces/DietAndTraining.interface";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

const Calculator: FC = () => {
  const { theme } = useTheme();
  const logo = theme.title === "dark" ? VitalizeDarkLogo : VitalizeLogo;
  const navigate = useNavigate();

  const token = localStorage.getItem("token");
  const userKey = token ? `userDietTrainingData_${token}` : "userDietTrainingData_guest";

  const {
    handleSubmit,
    register,
    reset,
    formState: { errors },
  } = useForm<DietTrainingCalculatorValidationType>({
    resolver: zodResolver(dietTrainingCalculatorValidation) as any,
    mode: "all",
  });

  const [imcResult, setImcResult] = useState<number | null>(null);
  const [iacResult, setIacResult] = useState<number | null>(null);

  const calculateIMCeIAC = (data: DietTrainingCalculatorValidationType) => {
    const heightM = Number(data.height_cm) / 100;
    const weight = Number(data.weight_kg);
    const hip = Number(data.hip_circumference);
    if (!heightM || !weight || !hip) return;

    const imc = weight / (heightM * heightM);
    setImcResult(Number(imc.toFixed(1)));

    const iac = hip / (heightM * Math.sqrt(heightM)) - 18;
    setIacResult(Number(iac.toFixed(1)));
  };

  const getIMCClassification = (imc: number) => {
    if (imc < 18.5) return "Abaixo do peso";
    if (imc < 24.9) return "Peso normal";
    if (imc < 29.9) return "Sobrepeso";
    if (imc < 34.9) return "Obesidade grau I";
    if (imc < 39.9) return "Obesidade grau II";
    return "Obesidade grau III";
  };

  const getIACClassification = (iac: number, sex: string) => {
    if (sex === "Feminino") {
      if (iac < 21) return "Abaixo do ideal";
      if (iac <= 32) return "Ideal";
      if (iac <= 38) return "Levemente acima";
      return "Alto índice de gordura";
    } else {
      if (iac < 8) return "Abaixo do ideal";
      if (iac <= 20) return "Ideal";
      if (iac <= 25) return "Levemente acima";
      return "Alto índice de gordura";
    }
  };

  const getCombinedDescription = (imcClass: string, iacClass: string) => {
    if (!imcClass || !iacClass) return "";

    if (imcClass === "Peso normal" && iacClass === "Ideal") {
      return `
      <strong class="excellent">Excelente!</strong> 
      Seu peso e percentual estimado de gordura estão dentro das faixas ideais. 
      Continue com seus hábitos atuais para manter o equilíbrio corporal.
    `;
    }

    if (imcClass === "Abaixo do peso" && iacClass === "Abaixo do ideal") {
      return `
      <strong class="alert">Atenção!</strong> 
      Seu peso e índice de gordura estão abaixo do ideal. 
      É importante ajustar sua alimentação e garantir que está consumindo calorias e nutrientes suficientes.
    `;
    }

    if (imcClass.includes("Obesidade") || iacClass === "Alto índice de gordura") {
      return `
      <strong class="warning">Atenção!</strong> 
      Seus índices indicam excesso de gordura corporal e possível sobrepeso. 
      Um acompanhamento nutricional e atividade física regular podem ajudar a melhorar sua composição corporal.
    `;
    }

    if (imcClass === "Sobrepeso" && (iacClass === "Levemente acima" || iacClass === "Ideal")) {
      return `
      <strong class="tip">Nota:</strong> 
      Você está levemente acima do peso, mas seu percentual de gordura está em uma faixa razoável. 
      Pequenos ajustes na dieta e treino já podem gerar bons resultados.
    `;
    }

    if (imcClass === "Peso normal" && iacClass === "Levemente acima") {
      return `
      <strong class="tip">Importante:</strong> 
      Seu peso está adequado, mas há um leve acúmulo de gordura corporal. 
      Reforçar a rotina de treinos e alimentação equilibrada pode otimizar seus resultados.
    `;
    }

    return `
    <strong class="neutral">Equilíbrio:</strong> 
    Os resultados indicam equilíbrio geral, mas vale acompanhar periodicamente para manter a saúde corporal ideal.
  `;
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
      hip_circumference: Number(data.hip_circumference),
      activity_level: data.activity_level,
      objective: data.objective,
      training_place: data.training_place,
      budGet_level: data.budGet_level,
      health_conditions: data.health_conditions ?? "Nenhuma",
    };

    localStorage.setItem(userKey, JSON.stringify(typedData));
    navigate(path, { state: typedData });

    reset();
    setImcResult(null);
    setIacResult(null);
  };

  const classification = imcResult ? getIMCClassification(imcResult) : null;
  const iacClassification =
    iacResult && imcResult ? getIACClassification(iacResult, "Masculino") : null;

  const combinedDescription =
    classification && iacClassification
      ? getCombinedDescription(classification, iacClassification)
      : "";

  return (
    <S.FormContainer>
      <S.Wrapper>
        {!imcResult && !iacResult && (
          <S.CalculatorCard>
            <S.BackLink to="/">
              <ArrowLeft size={18} />
              Voltar
            </S.BackLink>
            <img src={logo} alt="Logo do Vitalize" />
            <h2>Calcule seu IMC e IAC e veja sua classificação!</h2>

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
                  <Ruler size={14} /> Circunferência do quadril (cm)
                </S.Label>
                <S.FieldContainer hasError={!!errors.hip_circumference}>
                  <S.Input type="number" {...register("hip_circumference")} placeholder="Ex: 80" />
                </S.FieldContainer>
                {errors.hip_circumference && (
                  <S.ErrorMessage>{errors.hip_circumference.message}</S.ErrorMessage>
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
                    <option value="Manter vida saúdavel">Manter vida saúdavel</option>
                    <option value="Melhorar desempenho esportivo">Melhorar desempenho esportivo</option>
                    <option value="Reeducação alimentar">Reeducação alimentar</option>
                    <option value="Melhorar saúde metabólica">Melhorar saúde metabólica</option>
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
                  <Dumbbell size={18} /> Tipo de treino
                </S.Label>
                <S.FieldContainer hasError={!!errors.training_place}>
                  <S.Select {...register("training_place")}>
                    <option value="">Selecione</option>
                    <option value="Academia (musculação)">Academia (musculação)</option>
                    <option value="Casa">Casa</option>
                    <option value="Parque">Parque</option>
                    <option value="Corrida de rua ou esteira">Corrida de rua ou esteira</option>
                    <option value="Artes marciais">Artes marciais</option>
                    <option value="Cross training / funcional">Cross training / funcional</option>
                    <option value="Ciclismo">Ciclismo</option>
                    <option value="Natação">Natação</option>
                    <option value="Esportes coletivos (futebol, basquete, etc.)">Esportes coletivos (futebol, basquete, etc.)</option>
                  </S.Select>
                </S.FieldContainer>
                {errors.training_place && (
                  <S.ErrorMessage>{errors.training_place.message}</S.ErrorMessage>
                )}
              </S.InputGroup>

              <S.InputGroup>
                <S.Label>
                  <Activity size={14} /> Nível de atividade
                </S.Label>
                <S.FieldContainer hasError={!!errors.activity_level}>
                  <S.Select {...register("activity_level")}>
                    <option value="">Selecione</option>
                    <option value="Sedentário">Sedentário (Nenhum exercício)</option>
                    <option value="Leve">Leve (3x por semana)</option>
                    <option value="Intermediário">Intermediário (4x por semana)</option>
                    <option value="Moderado">Moderado (5x por semana)</option>
                    <option value="Ativo">Ativo (6x por semana)</option>
                    <option value="Muito ativo">Muito ativo (Treinos diários intensos)</option>
                  </S.Select>
                </S.FieldContainer>
                {errors.activity_level && (
                  <S.ErrorMessage>{errors.activity_level.message}</S.ErrorMessage>
                )}
              </S.InputGroup>
            </S.InputRow>

            <S.InputRow>
              <S.InputGroup>
                <S.Label> <Cross size={18} /> Condições de saúde</S.Label>
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
                    <option value="Obesidade">
                      Obesidade
                    </option>
                    <option value="Colesterol alto">
                      Colesterol alto
                    </option>
                    <option value="Problemas articulares">
                      Problemas articulares
                    </option>
                  </S.Select>
                </S.FieldContainer>
                {errors.health_conditions && (
                  <S.ErrorMessage>{errors.health_conditions.message}</S.ErrorMessage>
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

            <S.ButtonContainer>
              <Button
                type="button"
                onClick={handleSubmit(calculateIMCeIAC)}
              >
               Calcular
              </Button>
            </S.ButtonContainer>
          </S.CalculatorCard>
        )}

        {imcResult && iacResult && (
          <S.ResultCard>
            <S.ResultHeader>
              <h3 className="result">Resultados Corporais</h3>

              <div className="acronym-info">
                <div className="line imc">
                  <strong>IMC</strong> — Índice de Massa Corporal
                </div>
                <div className="line iac">
                  <strong>IAC</strong> — Índice de Adiposidade Corporal
                </div>
              </div>


              <div className="dual-values">
                <S.ValueBox color="#38bd90">
                  <Scale size={18} />
                  <strong>IMC</strong>
                  <span>{imcResult}</span>
                  <p>{classification}</p>
                </S.ValueBox>

                <S.ValueBox color="#507cda">
                  <Percent size={18} />
                  <strong>IAC</strong>
                  <span>{iacResult}</span>
                  <p>{iacClassification}</p>
                </S.ValueBox>
              </div>
            </S.ResultHeader>

            <p
              className="combined-description"
              dangerouslySetInnerHTML={{ __html: combinedDescription }}
            ></p>

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
                onClick={() => {
                  setImcResult(null);
                  setIacResult(null);
                }}
              >
                <ArrowLeft size={16} /> Voltar
              </Button>
            </S.ButtonContainer>
          </S.ResultCard>
        )}
      </S.Wrapper>
    </S.FormContainer>
  );
};

export { Calculator };