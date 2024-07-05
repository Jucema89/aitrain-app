
import axios from "axios";
import { Training, TrainingResponse } from "../interfaces/file-training.interface";

export const getTrains = async (): Promise<Training[]> => {
    try {
        const response = await axios.get<TrainingResponse>(`/api/train/alls`);
        return response.data.data as Training[];
    } catch (error) {
        throw new Error("Failed to fetch finetuning data");
    }
}

export const getOneTrain = async (id: string): Promise<TrainingResponse> => {
    try {
        const response = await axios.get(`/api/train/one/${id}`);
        return response.data;
    } catch (error) {
        throw new Error("Failed to fetch finetuning data");
    }
}

export const createTrain = async (form: FormData): Promise<TrainingResponse> => {
    try {
        const response = await axios.post<TrainingResponse>(`/api/train/create`, { form });
        return response.data;
    } catch (error) {
        throw new Error("Failed to create finetuning");
    }
}


export const _deleteTrain = async (id: string): Promise<boolean> => {
    try {
        const response = await axios.delete(`/api/train/delete/${id}`);
        return response.data;
    } catch (error) {
        throw new Error("Failed to create finetuning");
    }
}