import type { FC } from "react";
import * as S from "./styles";
import { BarChart2, Leaf, Calculator, Activity, DollarSign, HeartPulse } from "lucide-react";

const About: FC = () => {
  return (
    <S.Section id="sobre">
      <S.Container>
        <S.TopAbout>
          <h2>Por que escolher o <strong>Vitalize?</strong></h2>
          <p>
            Com o <strong>Vitalize</strong>, você alcança uma vida saudável sem gastar além do necessário: planos de alimentação e treino personalizados para sua saúde e seu orçamento, ajudando você a manter disciplina e resultados duradouros.
          </p>
        </S.TopAbout>

        <S.GridCards>
          <S.Card>
            <S.Icon as={BarChart2} />
            <p>Planejamento alimentar inteligente, ajustado às suas metas.</p>
          </S.Card>

          <S.Card>
            <S.Icon as={Leaf} />
            <p>Refeições práticas e nutritivas que cabem no seu dia a dia.</p>
          </S.Card>

          <S.Card>
            <S.Icon as={Calculator} />
            <p>Cálculo automático das calorias ideais para o seu objetivo.</p>
          </S.Card>

          <S.Card>
            <S.Icon as={Activity} />
            <p>Integração completa com sua rotina de treinos e progresso.</p>
          </S.Card>

          <S.Card>
            <S.Icon as={DollarSign} />
            <p>Dieta adaptada ao seu orçamento, sem pesar no bolso.</p>
          </S.Card>

          <S.Card>
            <S.Icon as={HeartPulse} />
            <p>Personalização para condições de saúde e bem-estar.</p>
          </S.Card>
        </S.GridCards>
      </S.Container>
    </S.Section>
  );
};

export { About };
