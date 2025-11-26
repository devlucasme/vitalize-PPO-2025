# 📘 Documento Técnico: Diretrizes de Treinamento Personalizado  
*(Baseado em Objetivo, Tipo de Treino, Local, Frequência e Condições do Usuário)*

Este documento define as diretrizes técnicas para gerar **planos de treino personalizados** conforme os parâmetros do schema `dietAndTrainingPlan`, considerando:

- **Objetivo principal** (Perda de peso, Hipertrofia, Manutenção, Desempenho, etc.)  
- **Tipo ou local de treino** (Academia, Casa, Corrida, Natação, Artes Marciais, etc.)  
- **Nível de atividade física e frequência semanal definida**  
- **Condições de saúde** (Diabetes, Hipertensão, Obesidade, etc.)  
- **Recursos disponíveis e orçamento**  

---

## 🧩 1. Estrutura Geral do Treinamento

Cada plano de treino deve ser:

- **Progressivo:** aumento gradual de carga, volume e intensidade.  
- **Personalizado:** compatível com local, equipamentos e saúde do usuário.  
- **Equilibrado:** incluir estímulos de força, resistência, mobilidade e coordenação.  
- **Seguro:** respeitando limitações e prevenindo lesões.

---

## 🧠 2. Frequência e Nível de Atividade Física

A **frequência semanal de treino** é determinada a partir da opção selecionada pelo usuário no campo `activity_level`.  
Cada nível define **exatamente quantos dias de treino a IA deve gerar**, além de determinar **como os dias serão distribuídos ao longo da semana**.

| Nível | Frequência (dias/semana) | Estrutura de Treino Sugerida | Observações |
|--------|---------------------------|------------------------------|--------------|
| **Sedentário** | 0 | Nenhum treino ativo | Pode ser orientado a iniciar com caminhadas leves ou exercícios de mobilidade. |
| **Leve** | 3 | Full Body ou Circuito Leve | Treinos de corpo inteiro em dias alternados (ex: Segunda, Quarta e Sexta) para garantir recuperação adequada. |
| **Intermediário** | 4 | Upper/Lower Split | Equilíbrio ideal entre estímulo e descanso. Treina todos os grupos musculares 2x por semana (ex: Segunda, Terça, Quinta, Sexta). |
| **Moderado** | 5 | Upper/Lower + Cardio | Divisão intermediária com foco em força e resistência, com um dia leve de cardio ou core. |
| **Ativo** | 6 | Push/Pull/Legs | Rotina de alta frequência, alternando grupos musculares e priorizando recuperação ativa. |
| **Muito ativo** | 7 | ABCDE ou Específico | Treinos diários com rotação muscular e intensidade planejada, incluindo dias técnicos e regenerativos. |

### ⚠️ Observação Importante:
Caso o usuário selecione **menos dias de treino semanais (3 ou 4 dias)**,  
a IA **deve inserir pelo menos um dia de descanso entre os treinos**.  
Isso é fundamental porque, com menor frequência semanal, o corpo será submetido a **estímulos mais amplos por sessão**, envolvendo **maior número de músculos em menos dias**.  
Esses intervalos permitem **recuperação adequada** e evitam sobrecarga articular ou fadiga excessiva.

A IA deve gerar automaticamente:
- Os **dias exatos de treino e descanso** (ex: Seg, Qua, Sex para 3x; Seg, Ter, Qui, Sex para 4x).  
- A **divisão muscular ideal** de acordo com o número de dias.  
- A **duração média por sessão** (40–75 min).  

---

## 🏋️‍♂️ 3. Tipos de Treino e Diretrizes Específicas

### 🏢 Academia (Musculação)
Ambiente ideal para ganho de força e hipertrofia, com controle total de carga.

**Equipamentos:**  
Cadeira extensora, mesa flexora, leg press, supinos, crossover, polias, remadas, desenvolvimento de ombro.

**Diretrizes:**  
- Priorizar exercícios compostos (agachamento, supino, remada, levantamento terra).  
- Progressão linear de carga e volume conforme adaptação.  
- 6–12 repetições para hipertrofia; 12–20 para resistência.  

**Objetivos indicados:** Hipertrofia, manutenção e desempenho físico.

---

### 🏠 Casa (Treino Doméstico)
Focado em peso corporal, elásticos, halteres leves ou mochilas com carga.

**Exercícios:**  
Flexões, agachamentos, barra fixa, afundos, abdominais, prancha, polichinelos.

**Diretrizes:**  
- Aumentar intensidade com tempo sob tensão e pausas curtas.  
- Executar 3–5 treinos semanais conforme frequência definida.  

**Objetivos indicados:** Emagrecimento, reeducação alimentar e manutenção.

---

### 🌳 Parque (Funcional / Calistenia)
Treinos ao ar livre com foco em resistência e mobilidade.

**Exercícios:**  
Corrida, barra fixa, paralelas, agachamento com salto, prancha, HIIT leve.

**Diretrizes:**  
- Fortalecimento global e resistência cardiorrespiratória.  
- Circuitos combinando força + cardio (30–40 min).  

**Objetivos indicados:** Emagrecimento, condicionamento e desempenho.

---

### 🏃 Corrida (Rua ou Esteira)

**Diretrizes:**  
| Nível | Frequência | Duração | Foco |
|--------|-------------|----------|------|
| Sedentário | 0–2x | 20–30 min | Caminhada leve |
| Leve | 3x | 30 min | Ritmo constante |
| Intermediário | 4x | 40–50 min | Corrida leve/moderada com intervalos |
| Moderado | 5x | 40–60 min | Corrida contínua ou intervalada |
| Ativo | 6x | 60 min | Intervalados e resistência |
| Muito ativo | 7x | 70–90 min | Longões e HIIT avançado |

**Objetivos indicados:** Emagrecimento e desempenho cardiovascular.

---

### 🥋 Artes Marciais
Mistura de força, resistência e agilidade.

**Diretrizes:**  
- 3–5 treinos semanais conforme objetivo.  
- Alternar intensidade e combinar com funcional leve.  

**Objetivos indicados:** Condicionamento, emagrecimento e desempenho.

---

### 🏋️‍♀️ Cross Training / Funcional
Treinos intensos em circuito com foco em potência e resistência.

**Diretrizes:**  
- Utilizar AMRAP, EMOM e TABATA.  
- Alternar treinos de força e aeróbicos.  
- 4–6 treinos por semana, ajustados ao nível.  

**Objetivos indicados:** Desempenho, perda de gordura e condicionamento.

---

### 🚴 Ciclismo
Pode ser outdoor ou indoor (spinning).

| Nível | Frequência | Duração | Observações |
|--------|-------------|----------|--------------|
| Leve | 3x | 30–45 min | Ritmo leve |
| Intermediário | 4x | 40–55 min | Ritmo constante com subidas leves |
| Moderado | 5x | 45–60 min | Subidas e cadência moderada |
| Ativo | 6x | 60–75 min | Treinos intervalados |
| Muito ativo | 7x | 75–90 min | Longas distâncias e alta intensidade |

**Objetivos indicados:** Saúde metabólica, resistência e emagrecimento.

---

### 🏊 Natação
Baixo impacto e ativação global.

**Diretrizes:**  
- 3–6 treinos semanais de 30–60 min.  
- Alternar estilos e intensidades.  

**Objetivos indicados:** Saúde, emagrecimento e reabilitação.

---

### ⚽ Esportes Coletivos
Atividades dinâmicas com alto gasto energético.

**Diretrizes:**  
- 2–4 partidas semanais.  
- Complementar com treinos de força ou core.  

**Objetivos indicados:** Desempenho, emagrecimento e socialização.

---

## 🧠 4. Diretrizes por Condição de Saúde

| Condição | Ajustes Recomendados | Evitar |
|-----------|----------------------|---------|
| **Diabetes** | Treino resistido + cardio 3–5x/semana. | Longos jejuns e treinos extenuantes. |
| **Hipertensão** | Aeróbicos leves e resistência controlada. | Isometria intensa e Valsalva. |
| **Obesidade** | Baixo impacto: bike, caminhada, natação. | Corridas longas e saltos. |
| **Colesterol alto** | Cardio moderado frequente. | Sedentarismo prolongado. |
| **Articulações frágeis** | Pilates, hidroginástica, fortalecimento. | Impactos e saltos. |

---

## 🔁 5. Estrutura do Treino

1. **Aquecimento:** 5–10 min de mobilidade.  
2. **Parte principal:** força ou resistência conforme o tipo.  
3. **Finalização:** alongamento e respiração.  

**Progressão:**  
- Aumentar carga/volume a cada 2–4 semanas.  
- Inserir semanas de recuperação ativa a cada 6–8 semanas.  
- Em planos com menor frequência semanal, **aumentar o volume por treino** para manter o estímulo adequado.

---

## 🧭 6. Princípios Fundamentais

- Treino alinhado à dieta e ao TDEE.  
- Técnica e postura > intensidade.  
- Sono, hidratação e descanso são essenciais.  
- Regularidade e progressão sustentada.  
- Reavaliação a cada 4–6 semanas.  
- Nos planos com 3–4 dias, **priorizar o descanso entre os treinos** para maximizar recuperação e resultados.

---

## 📚 7. Fontes Confiáveis

1. **Ministério da Saúde** – *Guia de Atividade Física para a População Brasileira* (2021).  
   🔗 [Guia oficial](https://bvsms.saude.gov.br/bvs/publicacoes/guia_atividade_fisica_populacao_brasileira.pdf)  
2. **Guia Alimentar para a População Brasileira** (2ª edição, 2014).  
   🔗 [Guia Alimentar](https://bvsms.saude.gov.br/bvs/publicacoes/guia_alimentar_populacao_brasileira_2ed.pdf)  
3. **Sociedade Brasileira de Cardiologia** – *Diretrizes sobre Prevenção Cardiovascular e Atividade Física* (2023).  
4. **OMS** – *Physical Activity Initiative*.  
   🔗 [WHO – Physical Activity](https://www.who.int/initiatives/behealthy/physical-activity)
