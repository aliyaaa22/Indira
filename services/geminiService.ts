
import { GoogleGenAI } from "@google/genai";

export const getCampusInsight = async (promptType: 'quote' | 'tip' | 'fact') => {
  // Fix: Strictly follow initialization rules by using process.env.API_KEY directly
  const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
  
  const prompts = {
    quote: "Generate a short, inspiring academic quote for Indira University students.",
    tip: "Give a quick productivity tip for university students during exam season.",
    fact: "Generate a generic but interesting historical fact about prestigious Indian education institutions to inspire students."
  };

  try {
    // Fix: Use gemini-3-flash-preview for basic text tasks as recommended
    const response = await ai.models.generateContent({
      model: 'gemini-3-flash-preview',
      contents: prompts[promptType],
      config: {
        // Fix: Removed maxOutputTokens to prevent potential empty responses as per guidelines
        temperature: 0.7,
      }
    });
    // Fix: Use .text property directly instead of method
    return response.text || "Excellence is not an act, but a habit.";
  } catch (error) {
    console.error("Gemini Error:", error);
    return "The future belongs to those who believe in the beauty of their dreams.";
  }
};
