import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { OpenAICreateFientuning, OpenaiFinetuningResponse } from "../interfaces/openai.interfaces";

const urlBack = `${process.env.NEXT_PUBLIC_API_URL}`;
const apiKey = `${process.env.NEXT_PUBLIC_OPENAI_TOKEN}`

export const finetunningApi = createApi({
    reducerPath: 'finetunningApi',
    baseQuery: fetchBaseQuery({ 
        baseUrl: `${urlBack}/api/openai/finetuning` 
    }),
    endpoints: (builder) => ({
        getFinetuning: builder.query<OpenaiFinetuningResponse, void>({
            query: () => ({
                url: `/alls/${apiKey}`,
                method: 'GET'
            })
        }),
        getOneFinetuning: builder.query<OpenaiFinetuningResponse, string>({
            query: (id: string) => ({
                url: `/alls/${apiKey}/${id}`,
                method: 'GET',
            })
        }),
        createFinetuning: builder.mutation<OpenaiFinetuningResponse, OpenAICreateFientuning>({
            query: (form) => ({
                url: `/create`,
                method: 'POST',
                body: { form }
            })
        })
    })
})

export const { useCreateFinetuningMutation, useGetOneFinetuningQuery, useGetFinetuningQuery } = finetunningApi