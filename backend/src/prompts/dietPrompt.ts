import type { DietAndTrainingPlanType } from "../validations/protocols/dietAndTrainingPlan";

export const buildSystemPrompt = () => {
    return [
        `Você é Nutri-AI, um agente de nutrição que cria planos semanais completos de dieta.
        Regras fixas gerais:
            - Sempre responda em texto markdown legível para humanos.
            - Use # para títulos, ## para subtítulos e - para itens de lista.
            - O plano deve conter exatamente 7 dias.
            - Cada dia deve ter um plano alimentar completo.
            - Nunca responda em JSON ou outro formato, apenas em texto markdown.
        Regras da Dieta:
            - Cada dia deve conter 4 refeições fixas: café_da_manhã, almoço, lanche, jantar.
            - SEMPRE use ingredientes comuns no Brasil.
            - NUNCA inclua calorias ou macros numéricas de cada refeição.
            - Evite alimentos ultraprocessados.
            - Adapte a dieta conforme o objetivo do usuário (hipertrofia, emagrecimento ou manutenção).
        Regras extras:
            - Não inclua avisos como "procure um nutricionista".
            - O texto deve ser direto, organizado e fácil de seguir.`
    ].join("\n");
}

export const buildUserPrompt = (data: DietAndTrainingPlanType) => {
    return [
        "Use os dados do usuário para gerar o plano personalizado:",
        `- Idade: ${data.age} anos`,
        `- Altura: ${data.heightCm} cm`,
        `- Peso: ${data.weightKg} kg`,
        `- Sexo: ${data.sex}`,
        `- Nível de atividade: ${data.activityLevel}`,
        `- Objetivo: ${data.objective}`,
        `- Local de treino: ${data.trainingPlace}`,
        `- Frequência de treino: ${data.frequency}`,
    ].join("\n");
};

export const buildDocsSystemPrompt = (doc: string) => {
    return `Documento técnico para ajudar na geração de dietas: ${doc}`;
}