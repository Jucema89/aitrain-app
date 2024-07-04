import { configureStore } from '@reduxjs/toolkit'
import { setupListeners } from '@reduxjs/toolkit/query'

import openAIModelsReducer from './features/openaiModels.slice'
import trainingDocsReducer from './features/trainingDocs.slice'
import finetunningJobsReducer from './features/finetuningJobs.slice'

import { aitrainApi } from './service/aitrainApi'
import { openaiApi } from './service/openaiApi'
import { finetunningApi } from './service/finetunningApi'

export const makeStore = () => {
    const store = configureStore({
        reducer: {
                openAIModelsReducer,
                [openaiApi.reducerPath]: openaiApi.reducer,
                trainingDocsReducer,
                [aitrainApi.reducerPath]: aitrainApi.reducer,
                finetunningJobsReducer,
                [finetunningApi.reducerPath]: finetunningApi.reducer
        },
        middleware: (getDefaultMiddleware) => 
            getDefaultMiddleware().concat([
                openaiApi.middleware,
                aitrainApi.middleware,
                finetunningApi.middleware
            ])
    })

    setupListeners(store.dispatch)

    return store
}

export type AppStore = ReturnType<typeof makeStore>
export type RootState = ReturnType<AppStore['getState']>
export type AppDispatch = AppStore['dispatch']