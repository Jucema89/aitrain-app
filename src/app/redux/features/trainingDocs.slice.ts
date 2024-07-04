import { createSlice } from "@reduxjs/toolkit";
import { Training } from "../interfaces/file-training.interface";

interface TrainingDocsState {
    trains: Training[];
}

const initialState: TrainingDocsState = {
    trains: [],
}

export const openaiModelsSlice = createSlice({
    name: "trainingDocs",
    initialState,
    reducers: {
        addTraining: (state, action) => {
            action.payload.forEach((train: Training) => {
                state.trains.push(train)
            })
        },
        updateTraining: (state, action) => {
            const { id, updatedTrain } = action.payload;
            const trainIndex = state.trains.findIndex(train => train.id === id);
            if (trainIndex !== -1) {
                state.trains[trainIndex] = { ...state.trains[trainIndex], ...updatedTrain };
            }
        },
        deleteTraining: (state, action) => {
            const { id } = action.payload;
            state.trains = state.trains.filter(train => train.id !== id);
        },
    },
})

export const { addTraining, updateTraining, deleteTraining } = openaiModelsSlice.actions
export default openaiModelsSlice.reducer