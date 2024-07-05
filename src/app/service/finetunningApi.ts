import axios from "axios";
import { OpenAICreateFientuning, OpenaiFinetuningCreated, OpenaiFinetuningResponse } from "../interfaces/openai.interfaces";

const apiKey = `${process.env.NEXT_PUBLIC_OPENAI_TOKEN}`;

export const getFinetuning = async (): Promise<OpenaiFinetuningCreated[]> => {
    try {
        const response = await axios.get<OpenaiFinetuningResponse>(`/api/openai/finetuning/alls/${apiKey}`);
        return response.data.data;
    } catch (error) {
        throw new Error("Failed to fetch finetuning data");
    }
};

export const getOneFinetuning = async (id: string): Promise<OpenaiFinetuningResponse> => {
    try {
        const response = await axios.get(`/api/openai/finetuning/alls/${apiKey}/${id}`);
        return response.data;
    } catch (error) {
        throw new Error("Failed to fetch finetuning data");
    }
};

export const createFinetuning = async (form: OpenAICreateFientuning): Promise<OpenaiFinetuningResponse> => {
    try {
        const response = await axios.post(`/api/openai/finetuning/create`, { form });
        return response.data;
    } catch (error) {
        throw new Error("Failed to create finetuning");
    }
};
