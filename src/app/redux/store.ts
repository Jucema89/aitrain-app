import { configureStore } from '@reduxjs/toolkit'
import openAIModelsReducer from './features/openaiModels.slice'
import { openaiApi } from './service/openaiApi'
import { setupListeners } from '@reduxjs/toolkit/query'

export const makeStore = () => {
    const store = configureStore({
        reducer: {
                openAIModelsReducer,
                [openaiApi.reducerPath]: openaiApi.reducer
        },
        middleware: (getDefaultMiddleware) => 
            getDefaultMiddleware().concat([openaiApi.middleware])
    })

    setupListeners(store.dispatch)

    return store
}

// Infer the type of makeStore
export type AppStore = ReturnType<typeof makeStore>
// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<AppStore['getState']>
export type AppDispatch = AppStore['dispatch']