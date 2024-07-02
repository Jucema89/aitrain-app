import { createSlice } from "@reduxjs/toolkit";
import { useGetModelsMutation } from "../service/openaiApi";

interface ModelOpenAI {
    created: number;
    id: string;
    object: string;
    owned_by: string;
}

interface OpenaiModelsState {
    models: ModelOpenAI[];
}

const initialState: OpenaiModelsState = {
    models: [],
};

export const openaiModelsSlice = createSlice({
    name: "modelsAI",
    initialState,
    reducers: {
        addModels: (state, action) => {
            action.payload.forEach((model: ModelOpenAI) => {
                state.models.push(model)
            })
        },
        updateModel: (state, action) => {
            const { id, updatedModel } = action.payload;
            const modelIndex = state.models.findIndex(model => model.id === id);
            if (modelIndex !== -1) {
                state.models[modelIndex] = { ...state.models[modelIndex], ...updatedModel };
            }
        },
        deleteModel: (state, action) => {
            const { id } = action.payload;
            state.models = state.models.filter(model => model.id !== id);
        },
    },
})

export const { addModels, updateModel, deleteModel } = openaiModelsSlice.actions
export default openaiModelsSlice.reducer