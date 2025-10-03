import type { FC } from "react";
import * as S from "./styles";
import { Button } from "../../ui/Button/Button";
import VitalizeLogo from "../../../assets/vitalize-logo-menor.png";
import VitalizeDarkLogo from "../../../assets/vitalize-logo-menor-dark.png";
import { Citrus, Dumbbell, Zap } from "lucide-react";
import { useTheme } from "../../../contexts/ThemeContext";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { dietTrainingCalculatorValidation } from "../../../validations/validators/calculator";
import type { dietTrainingCalculatorValidationType } from "../../../validations/protocols/calculator";

const Calculator: FC = () => {
  const { theme } = useTheme();
  const logo = theme.title === "dark" ? VitalizeDarkLogo : VitalizeLogo;

  const {
    handleSubmit,
    register,
    formState: { errors }
  } = useForm<dietTrainingCalculatorValidationType>({
    resolver: zodResolver(dietTrainingCalculatorValidation),
    mode: "all"
  });

  return (
    <S.FormContainer
      onSubmit={handleSubmit((data) => console.log("Dados enviados:", data))}
    >
      <S.CalculatorCard>
        <img src={logo} alt="Logo do Vitalize" />
        <h2>Calcule sua dieta, treino e IMC em segundos!</h2>
        <S.InputRow>
          <S.InputGroup>
            <S.Label>Idade</S.Label>
            <S.FieldContainer hasError={!!errors.age}>
              <S.Input type="number" {...register("age")} placeholder="Ex: 20" />
            </S.FieldContainer>
            {errors.age && <S.ErrorMessage>{errors.age.message}</S.ErrorMessage>}
          </S.InputGroup>
          <S.InputGroup>
            <S.Label>Sexo</S.Label>
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
            <S.Label>Peso (kg)</S.Label>
            <S.FieldContainer hasError={!!errors.weight_kg}>
              <S.Input type="number" {...register("weight_kg")} placeholder="Ex: 70" />
            </S.FieldContainer>
            {errors.weight_kg && <S.ErrorMessage>{errors.weight_kg.message}</S.ErrorMessage>}
          </S.InputGroup>
          <S.InputGroup>
            <S.Label>Altura (cm)</S.Label>
            <S.FieldContainer hasError={!!errors.height_cm}>
              <S.Input type="number" {...register("height_cm")} placeholder="Ex: 170" />
            </S.FieldContainer>
            {errors.height_cm && <S.ErrorMessage>{errors.height_cm.message}</S.ErrorMessage>}
          </S.InputGroup>
        </S.InputRow>
        <S.InputRow>
          <S.InputGroup>
            <S.Label>Objetivo</S.Label>
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
            <S.Label>Local de Treino</S.Label>
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
            <S.Label>Nível de Atividade</S.Label>
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
            <S.Label>Frequência semanal</S.Label>
            <S.FieldContainer hasError={!!errors.frequency}>
              <S.Select {...register("frequency")}>
                <option value="">Selecione</option>
                <option value="2x por semana">2x por semana</option>
                <option value="3x por semana">3x por semana</option>
                <option value="4x por semana">4x por semana</option>
                <option value="5x por semana">5x por semana</option>
              </S.Select>
            </S.FieldContainer>
            {errors.frequency && <S.ErrorMessage>{errors.frequency.message}</S.ErrorMessage>}
          </S.InputGroup>
        </S.InputRow>
        <Button width="100%">
          <Zap size={16} /> Calcular
        </Button>
      </S.CalculatorCard>
      <S.ResultCard>
        <h2>Resultados</h2>
        <S.ResultBox>
          <p><strong>Seu IMC:</strong> --</p>
          <p><strong>Classificação:</strong> --</p>
        </S.ResultBox>
        <S.ViewDiet>
          <Link to={"/diet"}>
            <Button width="100%" backgroundColor="#e07d59">
              <Citrus size={16} /> Visualizar Dieta
            </Button>
          </Link>
        </S.ViewDiet>
        <S.ViewDiet>
          <Link to={"/training"}>
            <Button width="100" backgroundColor="#5594c4">
              <Dumbbell size={16} /> Visualizar Treino
            </Button>
          </Link>
        </S.ViewDiet>
        <h3>Tabela de Referência</h3>
        <S.Table>
          <thead>
            <tr>
              <th>Classificação</th>
              <th>IMC (kg/m²)</th>
            </tr>
          </thead>
          <tbody>
            <tr className="above-0"><td>Abaixo do peso</td><td>&lt; 18.5</td></tr>
            <tr className="normal"><td>Peso normal</td><td>18.5 - 24.9</td></tr>
            <tr className="overweight"><td>Sobrepeso</td><td>25 - 29.9</td></tr>
            <tr className="obesity-1"><td>Obesidade I</td><td>30 - 34.9</td></tr>
            <tr className="obesity-2"><td>Obesidade II</td><td>35 - 39.9</td></tr>
            <tr className="obesity-3"><td>Obesidade III</td><td>&ge; 40</td></tr>
          </tbody>
        </S.Table>
      </S.ResultCard>
    </S.FormContainer>
  );
};

export { Calculator };