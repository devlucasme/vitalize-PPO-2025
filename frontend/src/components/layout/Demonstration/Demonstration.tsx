import type { FC } from "react";
import * as S from "./styles";
import {
  ClipboardList,
  Dumbbell,
  Utensils,
  User,
  LogIn,
  RefreshCw,
} from "lucide-react";

const Demonstration: FC = () => {
  return (
    <S.Section id="tutorial">
      <S.Container>
        <S.TopDemo>
          <h2>
            Como gerar sua <strong>dieta</strong> e <strong>treino personalizados?</strong>
          </h2>
        </S.TopDemo>

        <S.TableWrapper>
          <S.Table>
            <thead>
              <tr>
                <th>Etapa</th>
                <th>Ação</th>
                <th>Descrição</th>
              </tr>
            </thead>

            <tbody>
              <tr>
                <td>
                  <S.IconWrapper>
                    <S.StepIcon as={User} size={15}/>
                  </S.IconWrapper>
                </td>
                <td>Criar uma conta e fazer login</td>
                <td>Crie sua conta no Vitalize e acesse o painel com seu login.</td>
              </tr>

              <tr>
                <td>
                  <S.IconWrapper>
                    <S.StepIcon as={ClipboardList} />
                  </S.IconWrapper>
                </td>
                <td>Preencher a Calculadora</td>
                <td>Adicione seus dados de forma precisa.</td>
              </tr>

              <tr>
                <td>
                  <S.IconWrapper>
                    <S.StepIcon as={Utensils} />
                  </S.IconWrapper>
                </td>
                <td>Escolher entre dieta ou treino</td>
                <td>Selecione qual plano deseja gerar primeiro.</td>
              </tr>

              <tr>
                <td>
                  <S.IconWrapper>
                    <S.StepIcon as={Dumbbell} />
                  </S.IconWrapper>
                </td>
                <td>Visualizar no perfil</td>
                <td>Após gerar, veja seu plano personalizado no perfil.</td>
              </tr>

              <tr>
                <td>
                  <S.IconWrapper>
                    <S.StepIcon as={LogIn} />
                  </S.IconWrapper>
                </td>
                <td>Gerar o que ainda não foi criado</td>
                <td>
                  Caso tenha feito apenas um, acesse o card correspondente para gerar o outro plano.
                </td>
              </tr>

              <tr>
                <td>
                  <S.IconWrapper>
                    <S.StepIcon as={RefreshCw}/>
                  </S.IconWrapper>
                </td>
                <td>Preencher novamente a calculadora</td>
                <td>
                  Se quiser alterar seus dados e gerar novos planos, basta refazer o
                  preenchimento da calculadora.
                </td>
              </tr>
            </tbody>
          </S.Table>
        </S.TableWrapper>
      </S.Container>
    </S.Section>
  );
};

export { Demonstration };
