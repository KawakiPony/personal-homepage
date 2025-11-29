import { GoogleGenAI } from "@google/genai";

const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });

export const generateResponse = async (
  prompt: string, 
  language: 'zh' | 'en'
): Promise<string> => {
  try {
    const systemPrompt = language === 'zh'
      ? `你是一个名为“码上毕设”的智能客服助手。你的主人是 KawakiPony，一位资深的计算机毕设技术顾问。
         你的任务是回答学生关于计算机毕业设计的问题，推荐技术栈，或者介绍 KawakiPony 的服务。
         服务内容包括：Web开发、App开发、人工智能、大数据分析等。
         请保持语气专业、亲切、鼓励学生。不要回答与计算机技术或毕设无关的问题。`
      : `You are an intelligent customer service assistant for "Code My Thesis". Your owner is KawakiPony, a senior CS thesis consultant.
         Your task is to answer student questions about CS graduation projects, recommend tech stacks, or introduce KawakiPony's services.
         Services include: Web Dev, App Dev, AI, Big Data, etc.
         Be professional, friendly, and encouraging. Do not answer questions unrelated to CS or theses.`;

    const response = await ai.models.generateContent({
      model: 'gemini-2.5-flash',
      contents: prompt,
      config: {
        systemInstruction: systemPrompt,
      }
    });

    return response.text || (language === 'zh' ? '抱歉，我暂时无法回答。' : 'Sorry, I cannot answer right now.');
  } catch (error) {
    console.error("Gemini API Error:", error);
    return language === 'zh' 
      ? "抱歉，连接 AI 服务时出现错误。" 
      : "Sorry, there was an error connecting to the AI service.";
  }
};