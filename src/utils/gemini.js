import { GEMINI_API_KEY } from "./constants";
import { HarmBlockThreshold, HarmCategory } from "@google/generative-ai";

export const { GoogleGenerativeAI } = require("@google/generative-ai");



// Access your API key as an environment variable (see "Set up your API key" above)
export const genAI = new GoogleGenerativeAI(GEMINI_API_KEY);

export const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash"});

export const safetySettings = [
    {
      category: HarmCategory.HARM_CATEGORY_HARASSMENT,
      threshold: HarmBlockThreshold.BLOCK_LOW_AND_ABOVE,
    },
    {
      category: HarmCategory.HARM_CATEGORY_HATE_SPEECH,
      threshold: HarmBlockThreshold.BLOCK_LOW_AND_ABOVE,
    },
  ];