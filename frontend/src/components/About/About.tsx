import type { FC } from "react";
import * as S from "./styles";
import { BarChart2, Leaf, Calculator, Activity, DollarSign, HeartPulse } from "lucide-react";

const About: FC = () => {
  return (
    <S.Section id="sobre">
      <S.Container>
        <S.Title>Sobre o Vitalize</S.Title>

        <S.Text>
          Nosso objetivo é promover a saúde e o bem-estar das pessoas, oferecendo ferramentas digitais que auxiliam na adoção de hábitos mais saudáveis.
          De acordo com uma pesquisa do Governo Brasileiro realizada em 2019, os índices de obesidade cresceram significativamente: entre as mulheres, os números passaram de 14,5% para 30,2%, e entre os homens, de 9,6% para 22,8%.
          Esses dados reforçam a importância de iniciativas que contribuam para uma vida mais equilibrada.
        </S.Text>

        <S.Text>
          Pensando nisso, o <strong>Vitalize</strong> foi desenvolvido como um aplicativo completo de nutrição e acompanhamento alimentar. Acreditamos que alimentação saudável não precisa ser complicada nem inacessível.
        </S.Text>

        <S.Subtitle>O que oferecemos:</S.Subtitle>
        <S.CardGrid>
          <S.Card>
            <S.Icon as={BarChart2} />
            <p>Planejamento alimentar baseado nas suas metas.</p>
          </S.Card>
          <S.Card>
            <S.Icon as={Leaf} />
            <p>Refeições acessíveis e nutritivas.</p>
          </S.Card>
          <S.Card>
            <S.Icon as={Calculator} />
            <p>Cálculo automático das suas necessidades calóricas diárias.</p>
          </S.Card>
          <S.Card>
            <S.Icon as={Activity} />
            <p>Integração com sua rotina de treinos.</p>
          </S.Card>
          <S.Card>
            <S.Icon as={DollarSign} />
            <p>Dieta adaptada ao seu orçamento diário.</p>
          </S.Card>
          <S.Card>
            <S.Icon as={HeartPulse} />
            <p>Personalização alimentar para condições de saúde.</p>
          </S.Card>
        </S.CardGrid>

        <S.Text>
          Nosso compromisso é com resultados reais, promovendo escolhas mais conscientes no dia a dia. Vamos juntos nessa jornada por mais saúde, equilíbrio e bem-estar.
        </S.Text>
      </S.Container>
    </S.Section>
  );
};

export { About };
