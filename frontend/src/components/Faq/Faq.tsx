import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, Minus } from "lucide-react";
import SaladImage from "../../assets/salad.jpg";
import OrangeImage from "../../assets/orange.jpg";
import ChickenImage from "../../assets/chicken.jpg";
import * as S from "./styles";

const imagesWrapper = [SaladImage, OrangeImage, ChickenImage];

const faqs = [
  {
    question: "Como funciona o Vitalize?",
    answer:
      "O Vitalize ajuda você a organizar treinos, acompanhar progresso e manter uma rotina de bem-estar de forma prática e intuitiva.",
  },
  {
    question: "Posso acessar de qualquer dispositivo?",
    answer:
      "Sim! O Vitalize é responsivo e funciona em computadores, tablets e smartphones.",
  },
  {
    question: "É possível personalizar meus treinos e refeições?",
    answer:
      "Sim! O Vitalize permite ajustar treinos e planos de alimentação conforme seus objetivos, nível de experiência e preferências.",
  },
  {
    question: "O Vitalize oferece dicas de nutrição e saúde?",
    answer:
      "Sim! O app fornece recomendações e dicas de alimentação saudável, hábitos de bem-estar e pequenas orientações para otimizar seus treinos.",
  },
  {
    question: "Como o Vitalize me ajuda na alimentação e treino?",
    answer:
      "O Vitalize permite organizar refeições, acompanhar calorias e monitorar treinos, fornecendo uma visão completa da sua rotina de saúde e ajudando a manter disciplina e consistência.",
  },
  {
    question: "Qual é o diferencial do Vitalize?",
    answer:
      "O Vitalize personaliza sua dieta e treinos considerando não apenas seus objetivos de saúde, mas também restrições alimentares e seu orçamento financeiro, garantindo um plano completo e adaptado à sua rotina.",
  },
];


const Faq = () => {
  
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <>
      <S.WrapperTop>
        <S.TopContainer>
          <S.TextContainer>
            <S.Title>Perguntas Frequentes</S.Title>
            <S.Text>
              O <strong>Vitalize</strong> foi criado para facilitar sua rotina de saúde e
              bem-estar, reunindo ferramentas que ajudam a organizar alimentação,
              treinos e hábitos diários. Nesta seção de Perguntas Frequentes,
              você encontra respostas rápidas para as dúvidas mais comuns sobre
              o uso da plataforma, seus recursos e benefícios. Assim, fica mais
              fácil aproveitar tudo o que o Vitalize pode oferecer no seu dia a
              dia.
            </S.Text>
          </S.TextContainer>

          <S.ImagesContainer>
            {imagesWrapper.map((image, index) => (
              <S.Image key={index} src={image} alt={`imagem ${index}`} />
            ))}
          </S.ImagesContainer>
        </S.TopContainer>
      </S.WrapperTop>

      <S.WrapperFaq>
        <S.FaqContainer>
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;

            return (
              <S.QAItem key={index} onClick={() => toggleFAQ(index)}>
                <S.Question isOpen={isOpen}>
                  {faq.question}
                  <S.IconWrapper isOpen={isOpen}>
                    {isOpen ? <Minus size={16} /> : <Plus size={16} />}
                  </S.IconWrapper>
                </S.Question>

                <AnimatePresence>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                    >
                      <S.Answer>{faq.answer}</S.Answer>
                    </motion.div>
                  )}
                </AnimatePresence>
              </S.QAItem>
            );
          })}
        </S.FaqContainer>
      </S.WrapperFaq>
    </>
  );
};

export { Faq };