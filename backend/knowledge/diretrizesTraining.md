# Documento Técnico: Diretrizes de Treinamento Personalizado  
*(Baseado em Objetivo, Tipo de Treino, Local, Frequência, Condições de Saúde e Recursos Disponíveis)*

Este documento define as diretrizes técnicas para gerar **planos de treino personalizados**, baseados nos parâmetros do schema `dietAndTrainingPlan`.

Cada plano deve ser adaptado conforme:
- **Objetivo principal:** perda de peso, hipertrofia, manutenção, desempenho, saúde geral.  
- **Tipo ou local de treino:** academia, casa, corrida, natação, artes marciais, etc.  
- **Nível de atividade física e frequência semanal.**  
- **Condições de saúde (Diabetes, Hipertensão, Intolerância à lactose, Doença Celíaca, Obesidade, Colesterol alto, Problemas articulares, Nenhuma).**  
- **Recursos e orçamento disponíveis.**

Todos os treinos devem respeitar a **progressão gradual**, as **limitações individuais** e as **diretrizes médicas e esportivas reconhecidas** (ver Fontes Técnicas).

---

## 1. Estrutura Geral do Treinamento

Cada plano de treino deve ser:

- **Progressivo:** aumento gradual de carga, volume e intensidade.  
- **Personalizado:** compatível com local, equipamentos e saúde do usuário.  
- **Equilibrado:** incluir estímulos de força, resistência, mobilidade e coordenação.  
- **Seguro:** respeitando limitações e prevenindo lesões.  

A IA deve sempre priorizar **segurança biomecânica**, **adaptação fisiológica** e **individualização do treino**.

---

## 2. Frequência e Nível de Atividade Física

A **frequência semanal** é definida com base no campo `activity_level`.  
Cada nível indica **quantos dias de treino** e a **distribuição ideal da semana**.

| Nível | Frequência (dias/semana) | Estrutura de Treino Sugerida | Observações |
|--------|---------------------------|------------------------------|--------------|
| **Sedentário** | 0 | Nenhum treino ativo | Iniciar com caminhadas leves, mobilidade e alongamento diário. |
| **Leve** | 3 | Full Body / Circuito Leve | Corpo inteiro em dias alternados (ex: Seg, Qua, Sex). |
| **Intermediário** | 4 | Upper/Lower Split | Equilíbrio entre estímulo e descanso (ex: Seg, Ter, Qui, Sex). |
| **Moderado** | 5 | Upper/Lower + Cardio | 4 dias de força + 1 de cardio ou core. |
| **Ativo** | 6 | Push/Pull/Legs | Alternar músculos com 1 dia leve de recuperação. |
| **Muito ativo** | 7 | ABCDE / Específico | Rotação muscular e intensidade variável (1 regenerativo). |

> A IA deve **gerar automaticamente** os dias de treino e descanso, respeitando o volume ideal (40–75 min por sessão) e evitando sobrecarga articular.

---

## 3. Tipos de Treino e Diretrizes Específicas

### **Academia (Musculação)**
**Equipamentos:** leg press, supinos, remadas, polias, máquinas de perna e ombro.  
**Diretrizes:**
- Priorizar exercícios compostos (agachamento, supino, terra, remada).  
- 6–12 repetições para hipertrofia, 12–20 para resistência.  
- Aumentar carga a cada 2–4 semanas.  

**Objetivos indicados:** hipertrofia, manutenção, desempenho.

---

### **Casa (Treino Doméstico)**
**Exercícios:** flexões, agachamentos, barra fixa, abdominais, prancha, polichinelos.  
**Diretrizes:**
- Usar tempo sob tensão e pausas curtas para intensidade.  
- Executar 3–5 treinos/semana conforme frequência.  

**Objetivos:** emagrecimento, manutenção e saúde geral.

---

### **Parque / Calistenia**
**Exercícios:** corrida, barra fixa, paralelas, agachamento com salto, prancha.  
**Diretrizes:**  
- Circuitos de 30–40 min combinando força + cardio.  
- Aumentar volume gradualmente e trabalhar coordenação.  

**Objetivos:** emagrecimento, resistência, mobilidade.

---

### **Corrida**
| Nível | Frequência | Duração | Foco |
|--------|-------------|----------|------|
| Sedentário | 0–2x | 20–30 min | Caminhadas leves. |
| Leve | 3x | 30 min | Ritmo constante. |
| Intermediário | 4x | 40–50 min | Corrida leve/moderada com intervalos. |
| Moderado | 5x | 40–60 min | Corrida contínua. |
| Ativo | 6x | 60 min | Intervalado + resistência. |
| Muito ativo | 7x | 70–90 min | Longões e HIIT avançado. |

**Objetivos:** emagrecimento, saúde cardiovascular e desempenho.

---

### **Artes Marciais**
**Diretrizes:**  
- 3–5 treinos semanais.  
- Alternar intensidade e mesclar com treino funcional.  
- Aumentar foco em flexibilidade e resistência anaeróbica.  

**Objetivos:** condicionamento, emagrecimento e desempenho.

---

### **Cross Training / Funcional**
**Diretrizes:**  
- Utilizar AMRAP, EMOM e TABATA.  
- 4–6 treinos semanais, alternando força e cardio.  
- Descanso ativo entre blocos.  

**Objetivos:** desempenho, perda de gordura, condicionamento.

---

### **Ciclismo**
| Nível | Frequência | Duração | Observações |
|--------|-------------|----------|--------------|
| Leve | 3x | 30–45 min | Ritmo leve. |
| Intermediário | 4x | 40–55 min | Subidas leves. |
| Moderado | 5x | 45–60 min | Cadência moderada. |
| Ativo | 6x | 60–75 min | Intervalados. |
| Muito ativo | 7x | 75–90 min | Longas distâncias. |

**Objetivos:** saúde metabólica, resistência e emagrecimento.

---

### **Natação**
**Diretrizes:**  
- 3–6 sessões semanais de 30–60 min.  
- Alternar estilos e intensidades.  
- Ideal para articulações frágeis e controle de peso.  

**Objetivos:** saúde, emagrecimento e reabilitação.

---

### **Esportes Coletivos**
**Diretrizes:**  
- 2–4 partidas semanais.  
- Combinar com treino de força ou core.  

**Objetivos:** desempenho, socialização e emagrecimento.

---

## 4. Diretrizes por Condição de Saúde (campo `healthConditions`)

A IA deve adaptar a intensidade, frequência e tipo de exercício **de acordo com a condição de saúde** do usuário, respeitando as diretrizes médicas e esportivas.

| Condição | Ajustes Recomendados | Evitar |
|-----------|----------------------|---------|
| **Nenhuma** | Plano normal conforme objetivo. | — |
| **Diabetes** | Combinar treino resistido e cardio 3–5x/semana; evitar longos jejuns; ajustar alimentação pré-treino. | Exercícios intensos em jejum, HIIT prolongado. |
| **Hipertensão** | Treinos aeróbicos moderados e resistência leve. | Isometria intensa e manobra de Valsalva. |
| **Intolerância à lactose** | Sem restrições de exercício; apenas ajuste alimentar pós-treino sem laticínios. | Suplementos com lactose. |
| **Doença Celíaca (sem glúten)** | Treino normal, garantindo alimentação livre de glúten para evitar fadiga e inflamação. | Nenhum exercício contraindicado. |
| **Obesidade** | Foco em exercícios de baixo impacto e volume controlado. | Corridas longas, saltos repetitivos. |
| **Colesterol alto** | Cardio moderado e treino resistido regular. | Sedentarismo e esforço excessivo sem supervisão. |
| **Problemas articulares** | Exercícios de baixo impacto (hidroginástica, pilates, elásticos). | Saltos, corrida de impacto, carga excessiva. |

> **A IA deve sempre considerar segurança, conforto articular e adaptação fisiológica.**  
> O plano gerado **não deve conter treinos incompatíveis com a condição do usuário.**

---

## 5. Estrutura do Treino

1. **Aquecimento:** 5–10 min de mobilidade e ativação.  
2. **Parte principal:** força, resistência ou técnica conforme tipo.  
3. **Finalização:** alongamento e relaxamento.  

**Progressão:**  
- Aumentar carga/volume a cada 2–4 semanas.  
- Inserir semana leve de recuperação a cada 6–8 semanas.  
- Em frequência menor (3–4x/semana), aumentar volume por sessão.

---

## 6. Princípios Fundamentais

- Treino deve ser coerente com o objetivo, TDEE e condição física.  
- Postura e técnica têm prioridade sobre intensidade.  
- Sono, hidratação e descanso são essenciais.  
- Regularidade e progressão sustentável.  
- Reavaliação física a cada 4–6 semanas.  
- Nos planos com 3–4 dias, priorizar **descanso ativo entre treinos**.  
- Sempre respeitar **condições de saúde e limitações pessoais**.  

---

## 7. Fontes Técnicas de Treinamento e Saúde (de uso obrigatório pela IA)

1. **Ministério da Saúde (Brasil)** – *Guia de Atividade Física para a População Brasileira* (2021).  
   🔗 [PDF Oficial](https://bvsms.saude.gov.br/bvs/publicacoes/guia_atividade_fisica_populacao_brasileira.pdf)
2. **Sociedade Brasileira de Cardiologia (SBC)** – *Diretrizes sobre Prevenção Cardiovascular e Atividade Física* (2023).  
   🔗 [SBC – Diretrizes 2023](https://www.portal.cardiol.br/diretrizes/)
3. **OMS – World Health Organization (WHO)** – *Guidelines on Physical Activity and Sedentary Behaviour* (2020).  
   🔗 [WHO Physical Activity PDF](https://iris.who.int/server/api/core/bitstreams/faa83413-d89e-4be9-bb01-b24671aef7ca/content)
4. **ACSM – American College of Sports Medicine** – *Guidelines for Exercise Testing and Prescription* (11ª ed., 2021).  
   🔗 [Resumo público](https://pt.slideshare.net/slideshow/diretrizes-acsm-formato-melhor/72957909)
5. **CREF/CONFEF (Conselho Federal de Educação Física)** – *Orientações para Avaliação e Prescrição de Exercícios* (2021).  
   🔗 [PDF Oficial CREFSP](https://www.crefsp.gov.br/storage/app/arquivos/7e02a5c44298e22ad31dce23f52948b9.pdf)
6. **Exercise is Medicine Global Initiative (EIM / ACSM).**  
   🔗 [Profissionais de saúde](https://www.exerciseismedicine.org/eim-in-action/health-care/health-care-providers/)  
   🔗 [Profissionais de exercício físico](https://www.exerciseismedicine.org/eim-in-action/exercise-professionals/)
7. **Canadian Society for Exercise Physiology (CSEP)** – *Physical Activity and Sedentary Behaviour Guidelines* (2021).  
   🔗 [CSEP PDF](https://www.heartandstroke.ca/-/media/pdf-files/healthy-living/csep_guidelines_handbook.pdf)
8. **Science and Practice of Strength Training** – Zatsiorsky & Kraemer, 3rd Edition (2018).  
   🔗 [Resumo acadêmico ResearchGate](https://www.researchgate.net/publication/25132202_Science_and_Practice_of_Strength_Training)
9. **WHO – Be Active Campaign** – *Physical Activity for Health Initiative*.  
   🔗 [WHO – Be Active](https://www.who.int/initiatives/behealthy/physical-activity)
10. **CDC – Physical Activity Guidelines** – *Exercise Recommendations for Adults*.  
   🔗 [CDC Physical Activity](https://www.cdc.gov/physicalactivity)

---

> **A IA deve obrigatoriamente utilizar as fontes acima** para embasar todas as recomendações de treino, carga, frequência e intensidade, considerando o objetivo e as condições de saúde do usuário.  
> Nenhuma prescrição deve contrariar as recomendações oficiais da **OMS, ACSM, CREF/CONFEF, SBMEE ou Ministério da Saúde.**
