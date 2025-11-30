# Documento Técnico: Diretrizes de Dieta e Treino Personalizado   
*(Baseado em Objetivo, Tipo de Treino, Orçamento, Condição de Saúde e Gasto Calórico Total – TDEE)*

Este documento define as diretrizes técnicas para gerar **planos alimentares e de treinamento personalizados**, com base nos parâmetros validados pelo schema `dietAndTrainingPlan`.

Cada plano deve ser ajustado conforme:
- **Idade, sexo, peso, altura e circunferência do quadril**  
- **Nível de atividade física e objetivo**  
- **Tipo ou local de treino (ex: academia, casa, corrida, natação, etc.)**  
- **Orçamento alimentar e condições de saúde**

Todas as quantidades são expressas em **gramas (g)** e devem respeitar o **TDEE (Total Daily Energy Expenditure)** e as **restrições individuais**.

---

## 1. Cálculo do Gasto Calórico Total (TDEE)

O **TDEE (Total Daily Energy Expenditure)** representa o gasto energético diário total, considerando metabolismo basal e nível de atividade física.

### 1.1 Etapas do cálculo

1. **Taxa Metabólica Basal (TMB)** – Fórmula de Mifflin-St Jeor:  
   - **Homens:** `TMB = (10 × peso) + (6,25 × altura) - (5 × idade) + 5`  
   - **Mulheres:** `TMB = (10 × peso) + (6,25 × altura) - (5 × idade) - 161`

2. **Multiplicar pela Taxa de Atividade Física (AF):**

| Nível de Atividade | Descrição | Frequência semanal | Fator AF |
|--------------------|------------|--------------------|-----------|
| **Sedentário** | Pouco ou nenhum exercício | 0x | 1.2 |
| **Leve** | Exercício leve 1–3x por semana | 3x | 1.375 |
| **Intermediário** | Exercício regular 4x por semana | 4x | 1.45 |
| **Moderado** | Exercício 5x por semana | 5x | 1.55 |
| **Ativo** | Exercício intenso 6–7x por semana | 6–7x | 1.725 |
| **Muito ativo** | Treinos diários intensos ou trabalho físico pesado | 7x+ | 1.9 |

> A IA deve usar o campo `activity_level` para definir **exatamente quantos dias de treino por semana** gerar no plano.  
> Em **frequências menores (3–4 dias/semana)**, incluir **descanso estratégico entre treinos** (ex: Segunda, Terça, Quinta, Sexta).

---

3. **Ajuste conforme o objetivo:**

| Objetivo | Ajuste Calórico | Estratégia |
|-----------|----------------|-------------|
| Perda de peso | TDEE × 0.8 | Déficit de 20% |
| Hipertrofia | TDEE × 1.1–1.2 | Superávit leve |
| Manter massa muscular | TDEE × 1.0 | Calorias de manutenção |
| Manter vida saudável | TDEE × 1.0 | Equilíbrio nutricional |
| Melhorar desempenho esportivo | TDEE × 1.1 | Superávit otimizado com carboidratos adicionais |
| Reeducação alimentar | TDEE × 1.0 | Ajuste gradual de hábitos |
| Melhorar saúde metabólica | TDEE × 0.9 | Déficit leve com foco em qualidade alimentar |

---

## 2. Princípios Gerais da Dieta

- Refeições equilibradas com **mínimo de 3 alimentos diferentes** (ideal: 4 ou mais).  
- Hidratação adequada: **~30 mL/kg/dia**.  
- Preferir alimentos **in natura** e minimizar ultraprocessados.  
- Calorias e macronutrientes ajustados com base no **TDEE e orçamento**.  
- Dieta deve ser **sustentável, prática e personalizada** ao estilo de vida do usuário.  
- **TODA REFEIÇÃO DEVE CONTER UMA BEBIDA**, ajustada conforme o objetivo e orçamento:  
  - **Objetivo**: as bebidas ajudam a atingir metas calóricas (ganho, perda, manutenção).  
  - **Orçamento**: bebidas variam conforme custo (água e café em baixo, sucos naturais em médio, funcionais em alto orçamento).

---

## 3. Impacto das Condições de Saúde (campo `healthConditions`)

A IA deve interpretar a condição de saúde informada e **ajustar a dieta automaticamente** conforme as diretrizes nutricionais reconhecidas.  
Essas condições exigem **atenção especial**, respeitando recomendações médicas e científicas.  

| Condição | Diretriz Específica |
|-----------|--------------------|
| **Nenhuma** | Plano livre, baseado apenas em TDEE, objetivo e orçamento. |
| **Diabetes** | Controlar carboidratos com **baixo índice glicêmico**, priorizar **fibras, proteínas magras e gorduras boas**. Evitar açúcar simples, sucos industrializados e ultraprocessados. Preferir carboidratos complexos (aveia, batata-doce, arroz integral). |
| **Hipertensão** | Reduzir sódio (sal, embutidos, enlatados). Priorizar **alimentos ricos em potássio** (banana, abacate, feijão, vegetais verdes). Usar temperos naturais (alho, ervas, limão). |
| **Intolerância à lactose** | Eliminar leite e derivados comuns. Substituir por **leites vegetais (aveia, amêndoas, coco)** e **iogurtes sem lactose ou vegetais**. Garantir reposição de cálcio por vegetais e sementes. |
| **Doença celíaca (sem glúten)** | **Excluir totalmente glúten** (trigo, centeio, cevada, aveia comum). Utilizar **arroz, milho, mandioca, batata e quinoa**. Evitar contaminação cruzada. |
| **Obesidade** | Aplicar **déficit calórico gradual (15–20%)**, alto teor de fibras, proteínas magras e alimentos de baixo índice glicêmico. Reduzir óleos e ultraprocessados. Controlar saciedade e horários fixos. |
| **Colesterol alto** | Reduzir gorduras saturadas e trans. Incluir **fibras solúveis (aveia, frutas, leguminosas)**, **peixes ricos em ômega-3** e azeite em pequenas quantidades (ou castanhas). Evitar frituras e embutidos. |
| **Problemas articulares** | Aumentar alimentos **anti-inflamatórios naturais** (peixes, cúrcuma, gengibre, frutas vermelhas). Controlar peso corporal e hidratação. Reduzir alimentos inflamatórios (açúcar, gorduras ruins, álcool). |

> **A IA deve priorizar segurança alimentar e nutricional.**  
> Nenhum plano deve conter ingredientes proibidos conforme a condição.  
> Fontes e diretrizes científicas (ver seção 10) **devem ser obrigatoriamente consideradas** durante a geração.

---

## 4. Faixas de Orçamento Alimentar (com alimentos e bebidas por categoria)

O sistema deve interpretar o campo `budget_level` para gerar planos alimentares **compatíveis com o poder aquisitivo do usuário**, **sem perda nutricional**.

### Regras técnicas:
- Cada faixa tem **níveis de preço estimados** e **alimentos típicos** encontrados nessa categoria.  
- Deve sempre **preservar o equilíbrio entre proteínas, carboidratos, gorduras e líquidos**.  
- Quando o orçamento for **baixo**, priorizar **densidade nutricional e hidratação simples** (ex: água, café, chás).  
- Quando o orçamento for **alto**, incluir **bebidas funcionais e naturais**, que otimizem o desempenho físico.  

---

### **Resumo por faixa**

| Faixa | Diretriz | Valor estimado (R$/dia) | Foco nutricional |
|--------|-----------|-------------------------|------------------|
| **Baixo** | Alimentação acessível, com foco em praticidade e nutrição básica | 15–25 | Sustentação e baixo custo |
| **Médio** | Boa variedade e equilíbrio entre qualidade e custo | 25–45 | Qualidade e conveniência |
| **Alto** | Ingredientes premium e frescos, bebidas naturais e funcionais | 45+ | Qualidade máxima e performance |

---

### **Proteínas**

| Faixa | Exemplos |
|--------|----------|
| **Baixo** | Ovos, frango (coxa/sobrecoxa), carne moída simples, sardinha em lata, proteína de soja texturizada, fígado bovino. |
| **Médio** | Peito de frango, patinho moído, atum em lata, iogurte natural, queijo branco, tilápia comum. |
| **Alto** | Salmão, tilápia premium, carne magra (alcatra, filé mignon), camarão, peito de peru, iogurte proteico. |

---

### **Carboidratos**

| Faixa | Exemplos |
|--------|----------|
| **Baixo** | Arroz branco, macarrão comum, batata, cuscuz, mandioca, pão francês. |
| **Médio** | Arroz integral, aveia, pão integral, tapioca, batata-doce, quinoa nacional. |
| **Alto** | Arroz vermelho, massas sem glúten, couscous marroquino, quinoa importada. |

---

### **Gorduras boas**

| Faixa | Exemplos |
|--------|----------|
| **Baixo** | Óleo vegetal, amendoim torrado, semente de girassol. |
| **Médio** | Azeite comum, castanha-do-pará, chia, pasta de amendoim. |
| **Alto** | Azeite extra virgem, amêndoas, nozes, abacate premium. |

---

### **Leguminosas**

| Faixa | Exemplos |
|--------|----------|
| **Baixo** | Feijão carioca, lentilha, ervilha seca, grão-de-bico nacional. |
| **Médio** | Feijão branco, lentilha vermelha, grão-de-bico selecionado. |
| **Alto** | Mix de leguminosas orgânicas, feijão azuki, lentilha francesa. |

---

### **Frutas**

| Faixa | Exemplos |
|--------|----------|
| **Baixo** | Banana, maçã, mamão, melancia, laranja. |
| **Médio** | Morango, manga, pera, uva comum, caqui. |
| **Alto** | Frutas vermelhas, kiwi, figo, cereja, mirtilo. |

---

### **Vegetais**

| Faixa | Exemplos |
|--------|----------|
| **Baixo** | Alface, couve, cenoura, tomate, chuchu. |
| **Médio** | Brócolis, couve-flor, vagem, abóbora, espinafre. |
| **Alto** | Aspargos, cogumelos, palmito, mix de folhas gourmet. |

---

### **Laticínios**

| Faixa | Exemplos |
|--------|----------|
| **Baixo** | Leite integral, iogurte simples, queijo processado leve. |
| **Médio** | Leite semidesnatado, queijos brancos, iogurte integral. |
| **Alto** | Iogurtes proteicos, kefir, leite vegetal premium (amêndoas, coco). |

---

### **Bebidas (de acordo com objetivo e orçamento)**

| Faixa | Ganho de Massa / Desempenho | Manutenção / Saúde | Perda de Peso / Déficit |
|--------|------------------------------|--------------------|--------------------------|
| **Baixo** | Leite integral, café, água, suco de frutas | Água filtrada, café preto, chá simples. | Água, chá verde, café preto sem açúcar. |
| **Médio** | Suco natural (laranja, uva), leite com aveia, vitaminas caseiras. | Água mineral, sucos diluídos, leite semidesnatado. | Água com limão, chá verde, café coado sem açúcar. |
| **Alto** | Suco 100% integral, água de coco natural, smoothies proteicos, bebidas funcionais (whey, matcha, kefir). | Água alcalina, chás orgânicos, sucos prensados a frio. | Água de coco leve, chás detox naturais, kombucha. |

---

## 7. Estrutura de Refeições Diárias (com bebidas)

| Refeição | Composição Ideal | Bebida (por faixa) | Observações |
|-----------|------------------|--------------------|-------------|
| **Café da manhã** | Proteína + carboidrato + fruta | Baixo: café preto / Médio: leite + café / Alto: smoothie proteico ou suco integral | Base energética para o dia. |
| **Almoço** | Proteína + carboidrato + leguminosa + vegetal | Baixo: água / Médio: suco natural / Alto: suco integral ou água de coco | Refeição principal e mais completa. |
| **Lanche da tarde** | Proteína leve + fruta + oleaginosa | Baixo: chá simples / Médio: leite ou iogurte / Alto: shake leve ou kombucha | Mantém energia e saciedade. |
| **Jantar** | Proteína + vegetal + carboidrato leve | Baixo: água / Médio: chá relaxante / Alto: suco leve ou leite vegetal | Evitar bebidas muito calóricas à noite. |

---

## 9. Notas Finais

- Medidas expressas em **gramas (g)**.  
- Planos **personalizados e ajustáveis** conforme evolução e exames.  
- Cada refeição **deve conter uma bebida** coerente com o orçamento e objetivo.  
- **Em baixo orçamento:** priorizar alimentos simples, água e café como hidratação base.  
- **Em alto orçamento:** ampliar variedade e adicionar bebidas funcionais.  
- **Condições de saúde** devem **guiar restrições alimentares obrigatórias** (ex: sem glúten, sem lactose, baixo teor de sódio ou açúcar).  
- Reavaliação recomendada a cada **4–6 semanas**.  

---

## 10. Fontes Técnicas (de uso obrigatório pela IA)

1. **Guia Alimentar para a População Brasileira** – Ministério da Saúde, 2014  
2. **Diretrizes da Sociedade Brasileira de Diabetes** – SBD, 2024–2025  
3. **Protocolo Clínico – Doença Celíaca** – Conitec, 2023  
4. **Guia de Atividade Física para a População Brasileira** – Ministério da Saúde, 2021  
5. **Sociedade Brasileira de Cardiologia – Diretrizes sobre Dislipidemias**, 2023  
6. **WHO – Healthy Diet / Physical Activity Initiative** – Organização Mundial da Saúde  
7. **Mifflin MD, St Jeor ST et al.** (1990). *A new predictive equation for resting energy expenditure in healthy individuals.*  
8. [Diretriz Brasileira para Manejo da Obesidade e Prevenção de Doenças Cardiovasculares – Nutritotal](https://nutritotal.com.br/pro/material/diretriz-brasileira-para-manejo-da-obesidade-e-prevencao-de-doencas-cardiovasculares/)  
9. [Cuidados Primários em Diabetes – Nutritotal](https://nutritotal.com.br/pro/material/cuidados-primarios-em-diabetes/)  
10. [Alimentação, Saúde e Meio Ambiente – ABESO / Nutritotal](https://nutritotal.com.br/pro/material/alimentacao-saude-e-meio-ambiente-e-book-abeso/)  
11. [Diretrizes sobre Controle Glicêmico em Pacientes Críticos – Nutritotal](https://nutritotal.com.br/pro/material/diretrizes-sobre-controle-glicemico-em-pacientes-criticos/)  
12. [Diretrizes de Micronutrientes da ESPEN – Nutritotal](https://nutritotal.com.br/pro/material/diretrizes-de-micronutrientes-da-espen/)  
13. [Posicionamento SBC sobre Consumo de Gorduras e Saúde Cardiovascular – Nutritotal](https://nutritotal.com.br/pro/material/sbc-2021-posicionamento-sobre-o-consumo-de-gorduras-e-saude-cardiovascular/)  
14. [Diretriz Brasileira de Hipertensão Arterial 2025 – Nutritotal](https://nutritotal.com.br/pro/material/diretriz-brasileira-de-hipertensao-arterial-2025/)  
15. [Caso Clínico Lactosil – Nutritotal](https://nutritotal.com.br/pro/material/caso-clinico-lactosil/)  
16. [Deficiências Nutricionais Comuns na Doença Celíaca – Nutritotal](https://nutritotal.com.br/pro/deficiaancias-nutricionais-sa-o-comuns-na-doena-a-cela-aca/)  
17. [Recomendações Dietéticas no Tratamento da Hipercolesterolemia – Nutritotal](https://nutritotal.com.br/pro/quais-as-recomendaa-aues-dieta-ticas-no-tratamento-da-hipercolesterolemia/)  

> **A IA deve obrigatoriamente utilizar as fontes acima como base científica** ao gerar qualquer plano alimentar ou de treino relacionado a condições de saúde.