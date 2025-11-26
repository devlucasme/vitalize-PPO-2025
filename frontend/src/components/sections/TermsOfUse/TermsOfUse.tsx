import type { FC } from "react";
import { ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";
import * as S from "./styles";

export const TermsOfUse: FC = () => {
  return (
    <S.Container>
      <S.Content>
        <S.BackLink to="/">
          <ArrowLeft size={18} />
          Voltar
        </S.BackLink>

        <h1>Termos de Uso e Política de Privacidade</h1>
        <p>
          Bem-vindo ao <strong>Vitalize</strong>. Ao utilizar nossos serviços, você concorda com os
          presentes Termos de Uso e reconhece ter lido e compreendido nossa Política de Privacidade.
        </p>

        <S.Section>
          <h2>1. Finalidade do Vitalize</h2>
          <p>
            O <strong>Vitalize</strong> tem como objetivo oferecer recomendações personalizadas
            relacionadas a alimentação, treinos e hábitos saudáveis, com base nas informações
            fornecidas pelo usuário. As sugestões apresentadas não substituem o acompanhamento
            profissional individualizado por nutricionistas, médicos, educadores físicos ou outros
            especialistas da área da saúde.
          </p>
        </S.Section>

        <S.Section>
          <h2>2. Uso com Acompanhamento Profissional</h2>
          <p>
            O <strong>Vitalize</strong> deve ser utilizado como uma ferramenta complementar para o
            bem-estar e o autoconhecimento. Recomendamos fortemente que o usuário mantenha
            acompanhamento com <strong>profissionais de nutrição</strong> e{" "}
            <strong>educação física</strong>, especialmente em casos que envolvam:
          </p>
          <ul>
            <li>Perda ou ganho de peso de forma acelerada;</li>
            <li>Condições de saúde pré-existentes, como diabetes, hipertensão ou dislipidemias;</li>
            <li>Treinamentos de alta intensidade, competições ou reabilitação física;</li>
            <li>Uso de suplementação alimentar ou dietas restritivas.</li>
          </ul>
          <p>
            O acompanhamento profissional garante segurança, ajustes individualizados e o alcance de
            resultados de maneira saudável e sustentável.
          </p>
        </S.Section>

        <S.Section>
          <h2>3. Responsabilidade do Usuário</h2>
          <p>
            O usuário é responsável por fornecer informações verdadeiras, completas e atualizadas
            sobre sua saúde, peso, altura, nível de atividade física e objetivos. O uso de dados
            incorretos pode comprometer a precisão das recomendações geradas pelo sistema.
          </p>
          <p>
            O usuário concorda em utilizar o Vitalize apenas para fins pessoais e reconhece que os
            resultados relacionados à dieta e ao desempenho físico podem variar de acordo com fatores
            individuais.
          </p>
        </S.Section>

        <S.Section>
          <h2>4. Isenção de Responsabilidade</h2>
          <p>
            O Vitalize não se responsabiliza por quaisquer danos, prejuízos ou lesões decorrentes do
            uso incorreto das informações fornecidas. As orientações apresentadas possuem caráter
            informativo e educativo, devendo ser complementadas por acompanhamento profissional.
          </p>
          <p>
            Em caso de desconforto, sintomas adversos ou condições médicas específicas, o usuário
            deve interromper o uso e procurar orientação médica imediatamente.
          </p>
        </S.Section>

        <S.Section>
          <h2>5. Privacidade e Proteção de Dados</h2>
          <p>
            O Vitalize coleta e armazena apenas as informações necessárias para o funcionamento do
            sistema, respeitando as normas da{" "}
            <strong>Lei Geral de Proteção de Dados (LGPD - Lei nº 13.709/2018)</strong>. Nenhuma
            informação pessoal será compartilhada com terceiros sem o consentimento do usuário,
            exceto quando exigido por lei.
          </p>
        </S.Section>

        <S.Section>
          <h2>6. Alterações nos Termos</h2>
          <p>
            O Vitalize reserva-se o direito de atualizar estes Termos de Uso e a Política de
            Privacidade periodicamente. Recomendamos que o usuário consulte esta página
            regularmente. O uso contínuo da plataforma após alterações constitui aceitação dos novos
            termos.
          </p>
        </S.Section>

        <S.Section>
          <h2>7. Contato</h2>
          <p>
            Em caso de dúvidas sobre estes Termos, entre em contato pelo e-mail{" "}
            <Link to="mailto:suporte@vitalize.com.br">suporte@vitalize.com.br</Link>.
          </p>
        </S.Section>

        <S.Footer>
          <p>
            © {new Date().getFullYear()} Vitalize — Todos os direitos reservados.  
            Desenvolvido para promover saúde e bem-estar de forma responsável.
          </p>
        </S.Footer>
      </S.Content>
    </S.Container>
  );
};
