import { OpenAiModelsResponse } from "@/app/file-training/file-training.interface";
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const urlBack = `${process.env.NEXT_PUBLIC_API_URL}`;
const apiKey = `${process.env.NEXT_PUBLIC_OPENAI_TOKEN}`

export const openaiApi = createApi({
    reducerPath: 'openaiApi',
    baseQuery: fetchBaseQuery({ 
        baseUrl: `${urlBack}/api/openai` 
    }),
    endpoints: (builder) => ({
        getModels: builder.mutation<OpenAiModelsResponse, string>({
            query: () => ({
                url: '/get-models',
                method: 'POST',
                body: { apiKey }
            })
        })
    })
})

export const { useGetModelsMutation } = openaiApi