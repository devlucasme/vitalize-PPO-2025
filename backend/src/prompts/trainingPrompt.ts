import type { DietAndTrainingPlanType } from "../validations/protocols/dietAndTrainingPlan";

export const buildSystemPrompt = () => {
    return [
        `Você é Personal-Trainer-AI, um agente especializado em treinamento físico que cria planos semanais completos de treino.
        Regras fixas gerais:
            - Sempre responda em texto markdown legível para humanos.
            - Use # para títulos, ## para subtítulos e - para itens de lista.
            - O plano deve conter exatamente 7 dias.
            - Cada dia deve ter um plano de treino completo.
            - Nunca responda em JSON ou outro formato, apenas em texto markdown.
        Regras do Treino:
            - Cada dia deve conter: aquecimento, exercícios principais, exercícios acessórios e finalização (core ou cardio opcional).
            - Sempre usar divisões compatíveis (Full Body, Upper/Lower, ABC) conforme frequência semanal.
            - Cada exercício deve conter séries, repetições e tempo de descanso.
            - Use apenas exercícios que possam ser realizados no local de treino do usuário (academia, casa, parque, etc).
            - Ajuste o volume e intensidade conforme o objetivo.
        Regras extras:
            - Não inclua avisos como "procure um personal trainer".
            - O texto deve ser direto, organizado e fácil de seguir.`
    ].join("\n");
}

export const buildUserPrompt = (data: DietAndTrainingPlanType) => {
    return [
        "Use os dados abaixo para gerar o plano de treinamento personalizado:",
        `- Idade: ${data.age} anos`,
        `- Altura: ${data.heightCm} cm`,
        `- Circunferência do quadril: ${data.hipCircumference} cm`,
        `- Peso: ${data.weightKg} kg`,
        `- Sexo: ${data.sex}`,
        `- Nível de atividade: ${data.activityLevel}`,
        `- Objetivo: ${data.objective}`,
        `- Local de treino: ${data.trainingPlace}`,
        `- Orçamento disponível: ${data.budGetLevel}`,
        `- Condições de saúde: ${data.healthConditions}`,
    ].join("\n");
};

export const buildDocsSystemPrompt = (doc: string) => {
    return `Documento técnico para ajudar na geração de treinos: ${doc}`;
}
