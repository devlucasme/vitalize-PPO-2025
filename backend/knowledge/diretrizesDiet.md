# 📘 Documento Técnico: Diretrizes de Dieta e Treino Personalizado  
*(Baseado em Objetivo, Tipo de Treino, Orçamento, Condição de Saúde e Gasto Calórico Total – TDEE)*

Este documento define as diretrizes técnicas para gerar **planos alimentares e de treinamento personalizados**, com base nos parâmetros validados pelo schema `dietAndTrainingPlan`.

Cada plano deve ser ajustado conforme:
- **Idade, sexo, peso, altura e circunferência do quadril**  
- **Nível de atividade física e objetivo**  
- **Tipo ou local de treino (ex: academia, casa, corrida, natação, etc.)**  
- **Orçamento alimentar e condições de saúde**

Todas as quantidades são expressas em **gramas (g)** e devem respeitar o **TDEE (Total Daily Energy Expenditure)** e as **restrições individuais**.

---

## 🔢 1. Cálculo do Gasto Calórico Total (TDEE)

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

> ⚙️ A IA deve usar o campo `activity_level` para definir **exatamente quantos dias de treino por semana** gerar no plano.  
> 🧠 Em **frequências menores (3–4 dias/semana)**, incluir **descanso estratégico entre treinos** (ex: Segunda, Terça, Quinta, Sexta).

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

## 🥗 2. Princípios Gerais da Dieta

- Refeições equilibradas com **mínimo de 3 alimentos diferentes** (ideal: 4 ou mais).  
- Hidratação adequada: **~30 mL/kg/dia**.  
- Preferir alimentos **in natura** e minimizar ultraprocessados.  
- Calorias e macronutrientes ajustados com base no **TDEE e orçamento**.  
- Dieta deve ser **sustentável, prática e personalizada** ao estilo de vida do usuário.  
- **TODA REFEIÇÃO DEVE CONTER UMA BEBIDA**, ajustada conforme o objetivo e orçamento:  
  - **Objetivo**: as bebidas ajudam a atingir metas calóricas (ganho, perda, manutenção).  
  - **Orçamento**: bebidas variam conforme custo (água e café em baixo, sucos naturais em médio, funcionais em alto orçamento).  

---

## 💰 3. Faixas de Orçamento Alimentar (com alimentos e bebidas por categoria)

O sistema deve interpretar o campo `budget_level` para gerar planos alimentares **compatíveis com o poder aquisitivo do usuário**, **sem perda nutricional**.

### 🔍 Regras técnicas:
- Cada faixa tem **níveis de preço estimados** e **alimentos típicos** encontrados nessa categoria.  
- A IA deve sempre **preservar o equilíbrio entre proteínas, carboidratos, gorduras e líquidos**.  
- Quando o orçamento for **baixo**, priorizar **densidade nutricional e hidratação simples** (ex: água, café, chás).  
- Quando o orçamento for **alto**, incluir **bebidas funcionais e naturais**, que otimizem o desempenho físico.  

---

### 💵 **Resumo por faixa**

| Faixa | Diretriz | Valor estimado (R$/dia) | Foco nutricional |
|--------|-----------|-------------------------|------------------|
| **Baixo** | Alimentação acessível, com foco em praticidade e nutrição básica | 15–25 | Sustentação e baixo custo |
| **Médio** | Boa variedade e equilíbrio entre qualidade e custo | 25–45 | Qualidade e conveniência |
| **Alto** | Ingredientes premium e frescos, bebidas naturais e funcionais | 45+ | Qualidade máxima e performance |

---

### 🍗 **Proteínas**

| Faixa | Exemplos |
|--------|----------|
| **Baixo** | Ovos, frango (coxa/sobrecoxa), carne moída simples, sardinha em lata, proteína de soja texturizada, fígado bovino. |
| **Médio** | Peito de frango, patinho moído, atum em lata, iogurte natural, queijo branco, tilápia comum. |
| **Alto** | Salmão, tilápia premium, carne magra (alcatra, filé mignon), camarão, peito de peru, iogurte proteico. |

---

### 🍚 **Carboidratos**

| Faixa | Exemplos |
|--------|----------|
| **Baixo** | Arroz branco, macarrão comum, batata, cuscuz, mandioca, pão francês. |
| **Médio** | Arroz integral, aveia, pão integral, tapioca, batata-doce, quinoa nacional. |
| **Alto** | Arroz vermelho, massas sem glúten, couscous marroquino, quinoa importada. |

---

### 🥑 **Gorduras boas**

| Faixa | Exemplos |
|--------|----------|
| **Baixo** | Óleo vegetal, amendoim torrado, semente de girassol. |
| **Médio** | Azeite comum, castanha-do-pará, chia, pasta de amendoim. |
| **Alto** | Azeite extra virgem, amêndoas, nozes, abacate premium. |

---

### 🥦 **Leguminosas**

| Faixa | Exemplos |
|--------|----------|
| **Baixo** | Feijão carioca, lentilha, ervilha seca, grão-de-bico nacional. |
| **Médio** | Feijão branco, lentilha vermelha, grão-de-bico selecionado. |
| **Alto** | Mix de leguminosas orgânicas, feijão azuki, lentilha francesa. |

---

### 🍎 **Frutas**

| Faixa | Exemplos |
|--------|----------|
| **Baixo** | Banana, maçã, mamão, melancia, laranja. |
| **Médio** | Morango, manga, pera, uva comum, caqui. |
| **Alto** | Frutas vermelhas, kiwi, figo, cereja, mirtilo. |

---

### 🥕 **Vegetais**

| Faixa | Exemplos |
|--------|----------|
| **Baixo** | Alface, couve, cenoura, tomate, chuchu. |
| **Médio** | Brócolis, couve-flor, vagem, abóbora, espinafre. |
| **Alto** | Aspargos, cogumelos, palmito, mix de folhas gourmet. |

---

### 🧀 **Laticínios**

| Faixa | Exemplos |
|--------|----------|
| **Baixo** | Leite integral, iogurte simples, queijo processado leve. |
| **Médio** | Leite semidesnatado, queijos brancos, iogurte integral. |
| **Alto** | Iogurtes proteicos, kefir, leite vegetal premium (amêndoas, coco). |

---

### ☕ **Bebidas (de acordo com objetivo e orçamento)**

| Faixa | Ganho de Massa / Desempenho | Manutenção / Saúde | Perda de Peso / Déficit |
|--------|------------------------------|--------------------|--------------------------|
| **Baixo** | Leite integral, café, água, suco em pó leve. | Água filtrada, café preto, chá simples. | Água, chá verde, café preto sem açúcar. |
| **Médio** | Suco natural (laranja, uva), leite com aveia, vitaminas caseiras. | Água mineral, sucos diluídos, leite semidesnatado. | Água com limão, chá verde, café coado sem açúcar. |
| **Alto** | Suco 100% integral, água de coco natural, smoothies proteicos, bebidas funcionais (whey, matcha, kefir). | Água alcalina, chás orgânicos, sucos prensados a frio. | Água de coco leve, chás detox naturais, kombucha. |

> 💧 **Toda refeição deve conter uma bebida condizente com o orçamento e objetivo.**  
> - **Baixo orçamento:** água, café, chás simples.  
> - **Médio orçamento:** sucos naturais e leite.  
> - **Alto orçamento:** sucos integrais, águas funcionais e shakes naturais.  
>  
> A bebida complementa o valor calórico e auxilia na hidratação e absorção de nutrientes.

---

## 🍽️ 7. Estrutura de Refeições Diárias (com bebidas)

| Refeição | Composição Ideal | Bebida (por faixa) | Observações |
|-----------|------------------|--------------------|-------------|
| **Café da manhã** | Proteína + carboidrato + fruta | Baixo: café preto / Médio: leite + café / Alto: smoothie proteico ou suco integral | Base energética para o dia. |
| **Almoço** | Proteína + carboidrato + leguminosa + vegetal | Baixo: água / Médio: suco natural / Alto: suco integral ou água de coco | Refeição principal e mais completa. |
| **Lanche da tarde** | Proteína leve + fruta + oleaginosa | Baixo: chá simples / Médio: leite ou iogurte / Alto: shake leve ou kombucha | Mantém energia e saciedade. |
| **Jantar** | Proteína + vegetal + carboidrato leve | Baixo: água / Médio: chá relaxante / Alto: suco leve ou leite vegetal | Evitar bebidas muito calóricas à noite. |

> 💧 A IA deve sempre incluir uma bebida **condizente com o objetivo (hipertrofia, cutting, manutenção)** e o **nível de orçamento (baixo, médio, alto)**.  
> Exemplo:  
> - Hipertrofia + orçamento alto → smoothie proteico natural.  
> - Cutting + orçamento médio → chá verde com limão.  
> - Manutenção + orçamento baixo → café ou água filtrada.  

---

## 🧾 9. Notas Finais

- Medidas expressas em **gramas (g)**.  
- Planos **personalizados e ajustáveis** conforme evolução e exames.  
- Cada refeição **deve conter uma bebida** coerente com o orçamento e objetivo.  
- **Intermediário (4x/semana):** equilíbrio ideal entre estímulo e descanso.  
- **Em baixo orçamento:** priorizar alimentos simples, água e café como hidratação base.  
- **Em alto orçamento:** ampliar variedade e adicionar bebidas funcionais.  
- Reavaliação recomendada a cada **4–6 semanas**.  

---

## 📚 10. Fontes Técnicas

1. **Guia Alimentar para a População Brasileira** – Ministério da Saúde, 2014  
2. **Diretrizes da Sociedade Brasileira de Diabetes** – SBD, 2024–2025  
3. **Protocolo Clínico – Doença Celíaca** – Conitec, 2023  
4. **Guia de Atividade Física para a População Brasileira** – Ministério da Saúde, 2021  
5. **Sociedade Brasileira de Cardiologia** – Diretrizes sobre Dislipidemias, 2023  
6. **WHO – Healthy Diet / Physical Activity Initiative** – Organização Mundial da Saúde  
7. **Mifflin MD, St Jeor ST et al.** (1990). *A new predictive equation for resting energy expenditure in healthy individuals.*

---
