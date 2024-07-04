
import { TrainingResponse } from "../interfaces/file-training.interface";
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const urlBack = `${process.env.NEXT_PUBLIC_API_URL}`;

export const aitrainApi = createApi({
    reducerPath: 'aitrainApi',
    baseQuery: fetchBaseQuery({ 
        baseUrl: `${urlBack}/api/train` 
    }),
    endpoints: (builder) => ({
        getTrains: builder.query<TrainingResponse, void>({
            query: () => ({
                url: '/alls',
                method: 'GET'
            })
        }),
        getOneTrain: builder.query<TrainingResponse, string>({
            query: (id: string) => ({
                url: `/one/${id}`,
                method: 'GET',
            })
        }),
        createTrain: builder.mutation<TrainingResponse, FormData>({
            query: (form) => ({
                url: `/create`,
                //headers: 'accept: */*',
                method: 'POST',
                body: form
            })
        }),
        _deleteOneTrain: builder.mutation<boolean, string>({
            query: (id) => ({
                url: `/delete/${id}`,
                method: 'DELETE'
            })
        })
    })
})

export const { useCreateTrainMutation, useGetOneTrainQuery, useGetTrainsQuery, use_deleteOneTrainMutation } = aitrainApi