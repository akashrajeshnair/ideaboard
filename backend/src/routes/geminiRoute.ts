import { GoogleGenerativeAI } from "@google/generative-ai";
import { Request, Response } from "express";
import { config } from "../config";

const genAI = new GoogleGenerativeAI(config.GEMINI_API_KEY!)
const model = genAI.getGenerativeModel({model: 'gemini-1.5-flash'})

export const geminiRoute = async (req: Request, res: Response) => {
    try {
        const {prompt} = req.body;
        if (!prompt) {
            res.status(400).json({error: 'no prompt received in request!'})
        }
        const result = model.generateContent(prompt);
        const response = (await result).response;
        const text = response.text();
        res.json({
            answer: text
        });
    } catch (error) {
        console.error("Error: " + error);
        res.status(500).json({error: "an error whilst processing your requests!"})
    }
}

