import { createSlice } from "@reduxjs/toolkit";
import { OpenaiFinetuningCreated } from "../interfaces/openai.interfaces";

interface FinetuningJobsState {
    jobs: OpenaiFinetuningCreated[]
}

const initialState: FinetuningJobsState = {
    jobs: []
}

export const finetuningJobsSlice = createSlice({  
    name: "finetuningJobs",
    initialState,
    reducers: {
        addFinetuningJob: (state, action) => {
            state.jobs.push(action.payload)
        },
        updateFinetuningJob: (state, action) => {
            const { id, updatedJob } = action.payload;
            const jobIndex = state.jobs.findIndex(job => job.id === id);
            if (jobIndex !== -1) {
                state.jobs[jobIndex] = { ...state.jobs[jobIndex], ...updatedJob };
            }
        },
        deleteFinetuningJob: (state, action) => {
            const { id } = action.payload;
            state.jobs = state.jobs.filter(job => job.id !== id);
        },
    },
})

export const { addFinetuningJob, updateFinetuningJob, deleteFinetuningJob } = finetuningJobsSlice.actions   
export default finetuningJobsSlice.reducer