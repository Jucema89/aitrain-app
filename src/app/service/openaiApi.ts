import axios from "axios";
import { OpenAiModelsResponse } from "../interfaces/file-training.interface";
import { OpenAIModel } from "../interfaces/openai.interfaces";
const apiKey = `${process.env.NEXT_PUBLIC_OPENAI_TOKEN}`

export const getModelsOpenai = async (): Promise<OpenAIModel[]> => {
    try {
        const response = await axios.post<OpenAiModelsResponse>(`/api/openai/get-models`, 
            { apiKey }
        );
        return response.data.data;
    } catch (error) {
        throw new Error("Failed to create finetuning");
    }
};