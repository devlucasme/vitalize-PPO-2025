import type { FC } from "react";
import * as S from "./styles";
import { Button } from "../../ui/Button/Button";
import VitalizeLogo from "../../../assets/vitalize-logo-menor.png";
import VitalizeDarkLogo from "../../../assets/vitalize-logo-menor-dark.png";
import { useTheme } from "../../../contexts/ThemeContext";

const Calculator: FC = () => {

    const { theme } = useTheme();
    const logo = theme.title === "dark" ? VitalizeDarkLogo : VitalizeLogo;

    return (
        <S.Container>
            <S.CalculatorCard>
                <img src={logo} alt="Logo do vitalize" />
                <h2>Saiba sua dieta personalizada e seu IMC em segundos!</h2>

                <S.InputRow>
                    <label>Idade</label>
                    <S.Input type="number" placeholder="Ex: 20" />
                </S.InputRow>

                <S.InputRow>
                    <label>Sexo</label>
                    <S.Select>
                        <option value="">Selecione</option>
                        <option value="masculino">Masculino</option>
                        <option value="feminino">Feminino</option>
                    </S.Select>
                </S.InputRow>

                <S.InputRow>
                    <label>Peso (kg)</label>
                    <S.Input type="number" placeholder="Ex: 70" />
                </S.InputRow>

                <S.InputRow>
                    <label>Altura (cm)</label>
                    <S.Input type="number" placeholder="Ex: 170" />
                </S.InputRow>

                <Button width="100%">Calcular</Button>
            </S.CalculatorCard>

            <S.ResultCard>
                <h2>Resultados</h2>

                <S.ResultBox>
                    <p><strong>Seu IMC:</strong> --</p>
                    <p><strong>Classificação:</strong> --</p>
                </S.ResultBox>

                <S.ViewDiet>
                    <Button width="60%" backgroundColor="#d68365">Visualizar Dieta</Button>
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
                        <tr className="above-0">
                            <td>Abaixo do peso</td>
                            <td>&lt; 18.5</td>
                        </tr>
                        <tr className="normal">
                            <td>Peso normal</td>
                            <td>18.5 - 24.9</td>
                        </tr>
                        <tr className="overweight">
                            <td>Sobrepeso</td>
                            <td>25 - 29.9</td>
                        </tr>
                        <tr className="obesity-1">
                            <td>Obesidade I</td>
                            <td>30 - 34.9</td>
                        </tr>
                        <tr className="obesity-2">
                            <td>Obesidade II</td>
                            <td>35 - 39.9</td>
                        </tr>
                        <tr className="obesity-3">
                            <td>Obesidade III</td>
                            <td>&ge; 40</td>
                        </tr>
                    </tbody>
                </S.Table>
            </S.ResultCard>
        </S.Container>
    );
};

export { Calculator };