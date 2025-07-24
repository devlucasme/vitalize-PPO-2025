import type { FC } from "react";
import * as S from "./styles";
import { BarChart2, Leaf, Calculator, Activity, DollarSign, HeartPulse } from "lucide-react";

const About: FC = () => {
  return (
    <S.Section id="sobre">
      <S.Container>
        <S.Title>Sobre o Vitalize</S.Title>

        <S.Text>
          Nosso objetivo é promover a saúde e o bem-estar das pessoas, oferecendo ferramentas digitais que incentivem a adoção de hábitos mais saudáveis. O cenário atual é preocupante: segundo um estudo da Fundação Oswaldo Cruz (Fiocruz), publicado em 2024, a tendência de crescimento da obesidade no Brasil aponta que, em menos de 20 anos, quase metade da população adulta poderá viver com obesidade. A projeção indica que até 2044, aproximadamente 48% dos adultos estarão obesos e outros 27% com sobrepeso, totalizando 75% da população acima do peso ideal. Esse avanço representa uma séria ameaça à saúde pública, pois o excesso de peso está diretamente relacionado ao aumento de doenças crônicas como diabetes tipo 2, hipertensão e problemas cardiovasculares.
        </S.Text>

        <S.Text>
          Diante disso, o <strong>Vitalize</strong> surge como uma solução prática e acessível para apoiar a transformação de hábitos alimentares de forma sustentável. Desenvolvemos um aplicativo completo de nutrição e acompanhamento alimentar que torna a alimentação saudável simples, personalizada e ao alcance de todos. Acreditamos que a tecnologia pode ser uma grande aliada na prevenção da obesidade e na construção de um estilo de vida mais equilibrado.
        </S.Text>

        <S.Text>
          Nosso compromisso é com resultados reais, ajudando cada pessoa a alcançar seus objetivos por meio de escolhas conscientes — seja no controle calórico, no planejamento das refeições, na adaptação ao orçamento ou na integração com a rotina de treinos. Com base em dados confiáveis e uma abordagem prática, o Vitalize se posiciona como uma ferramenta essencial para enfrentar um dos maiores desafios de saúde da atualidade.
        </S.Text>

        <S.Subtitle>Soluções para você</S.Subtitle>
        <S.CardList>
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
        </S.CardList>
      </S.Container>
    </S.Section>
  );
};

export { About };
