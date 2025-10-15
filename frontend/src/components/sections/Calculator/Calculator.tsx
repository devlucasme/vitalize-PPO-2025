import type { FC } from "react";
import * as S from "./styles";
import { Button } from "../../ui/Button/Button";
import VitalizeLogo from "../../../assets/vitalize-logo-menor.png";
import VitalizeDarkLogo from "../../../assets/vitalize-logo-menor-dark.png";
import { Citrus, Dumbbell, User, Calendar, Scale, Ruler, Goal, MapPin, Activity } from "lucide-react";
import { useTheme } from "../../../contexts/ThemeContext";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { dietTrainingCalculatorValidation } from "../../../validations/validators/calculator";
import type { DietTrainingCalculatorValidationType } from "../../../validations/protocols/calculator";
import type { IDietAndTrainingData } from "../../../interfaces/DietAndTraining.interface";
import { useNavigate } from "react-router-dom";

const Calculator: FC = () => {
  
  const { theme } = useTheme();
  const logo = theme.title === "dark" ? VitalizeDarkLogo : VitalizeLogo;
  const navigate = useNavigate();

  const { handleSubmit, register, formState: { errors } } = useForm<DietTrainingCalculatorValidationType>({
    resolver: zodResolver(dietTrainingCalculatorValidation) as any,
    mode: "all",
  });

  const handleFormSubmit = (data: DietTrainingCalculatorValidationType, path: string) => {
    const typedData: IDietAndTrainingData = {
      age: data.age,
      sex: data.sex,
      weight_kg: data.weight_kg,
      height_cm: data.height_cm,
      activity_level: data.activity_level,
      objective: data.objective,
      training_place: data.training_place,
      budGet_level: data.budGet_level,
      health_conditions: data.health_conditions ?? ["Nenhuma"]
    };

    navigate(path, { state: typedData });
  };

  return (
    <S.FormContainer>
      <S.CalculatorCard>
        <img src={logo} alt="Logo do Vitalize" />
        <h2>Calcule sua dieta e treino em segundos!</h2>
        <S.InputRow>
          <S.InputGroup>
            <S.Label><Calendar size={14} /> Idade</S.Label>
            <S.FieldContainer hasError={!!errors.age}>
              <S.IconWrapper><User size={16} /></S.IconWrapper>
              <S.Input type="number" {...register("age")} placeholder="Ex: 20" />
            </S.FieldContainer>
            {errors.age && <S.ErrorMessage>{errors.age.message}</S.ErrorMessage>}
          </S.InputGroup>
          <S.InputGroup>
            <S.Label><User size={14} /> Sexo</S.Label>
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
            <S.Label><Scale size={14} /> Peso (kg)</S.Label>
            <S.FieldContainer hasError={!!errors.weight_kg}>
              <S.IconWrapper><Scale size={16} /></S.IconWrapper>
              <S.Input type="number" {...register("weight_kg")} placeholder="Ex: 70" />
            </S.FieldContainer>
            {errors.weight_kg && <S.ErrorMessage>{errors.weight_kg.message}</S.ErrorMessage>}
          </S.InputGroup>
          <S.InputGroup>
            <S.Label><Ruler size={14} /> Altura (cm)</S.Label>
            <S.FieldContainer hasError={!!errors.height_cm}>
              <S.IconWrapper><Ruler size={16} /></S.IconWrapper>
              <S.Input type="number" {...register("height_cm")} placeholder="Ex: 170" />
            </S.FieldContainer>
            {errors.height_cm && <S.ErrorMessage>{errors.height_cm.message}</S.ErrorMessage>}
          </S.InputGroup>
        </S.InputRow>
        <S.InputRow>
          <S.InputGroup>
            <S.Label><Goal size={14} /> Objetivo</S.Label>
            <S.FieldContainer hasError={!!errors.objective}>
              <S.Select {...register("objective")}>
                <option value="">Selecione</option>
                <option value="Perda de peso">Perda de peso</option>
                <option value="Hipertrofia">Hipertrofia</option>
                <option value="Manter massa muscular">Manter massa muscular</option>
              </S.Select>
            </S.FieldContainer>
            {errors.objective && <S.ErrorMessage>{errors.objective.message}</S.ErrorMessage>}
          </S.InputGroup>
          <S.InputGroup>
            <S.Label><MapPin size={14} /> Local de Treino</S.Label>
            <S.FieldContainer hasError={!!errors.training_place}>
              <S.Select {...register("training_place")}>
                <option value="">Selecione</option>
                <option value="Academia">Academia</option>
                <option value="Casa">Casa</option>
                <option value="Parque">Parque</option>
              </S.Select>
            </S.FieldContainer>
            {errors.training_place && <S.ErrorMessage>{errors.training_place.message}</S.ErrorMessage>}
          </S.InputGroup>
        </S.InputRow>
        <S.InputRow>
          <S.InputGroup>
            <S.Label><Activity size={14} /> Nível de Atividade</S.Label>
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
            {errors.activity_level && <S.ErrorMessage>{errors.activity_level.message}</S.ErrorMessage>}
          </S.InputGroup>
          <S.InputGroup>
            <S.Label><Scale size={14} /> Orçamento</S.Label>
            <S.FieldContainer hasError={!!errors.budGet_level}>
              <S.Select {...register("budGet_level")}>
                <option value="">Selecione</option>
                <option value="Baixo">Baixo</option>
                <option value="Médio">Médio</option>
                <option value="Alto">Alto</option>
              </S.Select>
            </S.FieldContainer>
            {errors.budGet_level && <S.ErrorMessage>{errors.budGet_level.message}</S.ErrorMessage>}
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
                <option value="Doença celíaca (sem glúten)">Doença celíaca (sem glúten)</option>
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
            width="50%"
            backgroundColor="#38bd90"
            onClick={handleSubmit((data) => handleFormSubmit(data, "/diet"))}
          >
            <Citrus size={16} /> Calcular minha dieta
          </Button>
          <Button
            type="button"
            width="50%"
            backgroundColor="#507cda"
            onClick={handleSubmit((data) => handleFormSubmit(data, "/training"))}
          >
            <Dumbbell size={16} /> Calcular meu treino
          </Button>
        </S.ButtonContainer>
      </S.CalculatorCard>
    </S.FormContainer>
  );
};

export { Calculator };