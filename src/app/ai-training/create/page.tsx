'use client'
import * as z from 'zod';
import { SubmitHandler, useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod'
import { useAppDispatch, useAppSelector } from '@/app/redux/hooks';
import { OpenAIModel } from '@/app/redux/interfaces/openai.interfaces';
import { useCreateFinetuningMutation } from '@/app/redux/service/finetunningApi';
import InputSelect from '@/app/shared/form/input-select';
import InputText from '@/app/shared/form/input-text';
import { useGetTrainsQuery } from '@/app/redux/service/aitrainApi';
import { useEffect } from 'react';
import { Training } from '@/app/redux/interfaces/file-training.interface';


export default function CreateAITraining(){

    const dispatch = useAppDispatch()

    const models = useAppSelector(state => state.openAIModelsReducer.models)
  
    const trainsList = useAppSelector(state => state.trainingDocsReducer.trains)
    const { data: trainings } = useGetTrainsQuery()

    const [createFinetinning, { data: FinetunedData, isLoading, isSuccess }] = useCreateFinetuningMutation()

    // useEffect(() => {   

    // }, [dispatch])

    const requiredString = {
        required_error: "Este campo es Requerido",
        invalid_type_error: "Este campo debe ser un texto",
      }

    const FormSchema = z.object({
        idDoc: z.string(requiredString)
          .min(5, { message: "You must select an AI model from the list" }),
        name: z.string(requiredString)
          .min(3, { message: "The name of the file to be created is required" }),
        model: z.string(requiredString)
          .min(5, { message: "You must select an AI model from the list" }),
        apiKey: z.string(requiredString)
          .min(3, { message: "The name of the file to be created is required" }),
      })
  
      const defaultValues = {
        idDoc: '',
        name: '',
        model: '',
        apiKey: '',
      }

      const {
        register,
        handleSubmit,
        reset,
        formState: { errors },
    } = useForm({
        resolver: zodResolver(FormSchema),
        defaultValues
    })

      const formatModels = (Allmodels: OpenAIModel[]) => {
        const optionModels: {label: string, value: string}[] = []
        Allmodels.forEach((model) => {
          if(model.id.includes('gpt-')){
            optionModels.push({
              label: model.id,
              value: model.id
            })
          }
        })
  
        return optionModels
      }

      const formatTrainings = (Alltrains: Training[]) => {
        const optionModels: {label: string, value: string}[] = []
        Alltrains.forEach((train) => {
            optionModels.push({
                label: train.name,
                value: train.id
            })
        })
  
        return optionModels
      }

      function submitForm(payload: {
        idDoc: string;
        name: string;
        model: string
      }) {
        const form = { 
            ...payload, 
            apiKey: `${process.env.NEXT_PUBLIC_OPENAI_TOKEN}`
        }

        createFinetinning(form)
      }
      
      if(isLoading && !FinetunedData){
        return(
          <div className="max-w-[85rem] px-4 py-4 sm:px-6 lg:px-8 lg:py-4 mx-auto">
    
            <div className="mx-auto max-w-2xl">
            <div className="mt-5 p-4 relative bg-white border rounded-xl sm:mt-10 md:p-10 dark:bg-neutral-900 dark:border-neutral-700">
        
              <p className="text-2xl text-gray-800 pb-2 font-bold sm:text-2xl dark:text-white">
                Crear Finetunning Job
              </p>
        
              <div>
              {
                [1, 2, 3, 4].map((item) => (
                  <div key={item} className="my-4 h-full w-full animate-pulse">
                    <p className="h-8 w-full bg-gray-200 rounded-md dark:bg-neutral-700"></p>
                </div>
                ))
              }
    
              <div className="mt-6 grid">
                <button type="submit" className="animate-pulse w-full py-3 px-4 inline-flex justify-center items-center gap-x-2 text-sm font-semibold rounded-lg border border-transparent bg-gray-200 text-gray-500 disabled:opacity-50 disabled:pointer-events-none">
                  await Data
                </button>
              </div>
              </div>
            </div>
            </div>
          </div>
        )
      } else {
        return(
          <div className="max-w-[85rem] px-4 py-4 sm:px-6 lg:px-8 lg:py-4 mx-auto">
           
            <div className="mx-auto max-w-2xl">
            <div className="mt-5 p-4 relative bg-white border rounded-xl sm:mt-10 md:p-10 dark:bg-neutral-900 dark:border-neutral-700">
        
              <p className="text-2xl text-gray-800 pb-2 font-bold sm:text-2xl dark:text-white">
              Crear Finetunning Job
              </p>
        
              <form  onSubmit={handleSubmit(submitForm)}>
        
              <InputSelect
                label="AI Model Base for Finetunning" 
                placeholder="Select an option"
                id="model"
                name="model"
                options={isSuccess ? formatModels(models) : []}
                registerZod={register}
                errorMessage={errors.model ? errors.model?.message : ''}
                require={true}
              />

            <InputSelect
                label="Select a valid training file" 
                placeholder="Select an option"
                id="idDoc"
                name="idDoc"
                options={isSuccess ? formatTrainings(trainsList) : []}
                registerZod={register}
                errorMessage={errors.model ? errors.model?.message : ''}
                require={true}
              />
        
              <InputText
                label="Name to new Model Tuned" 
                placeholder="Super Sale Model" 
                id="name" 
                name="name" 
                type="text"
                registerZod={register}
                errorMessage={errors.name ? errors.name?.message: ''}
                require={true}
              />
          
                <div className="mt-6 grid">
                  <button type="submit" className="w-full py-3 px-4 inline-flex justify-center items-center gap-x-2 text-sm font-semibold rounded-lg border border-transparent bg-blue-600 text-white hover:bg-blue-700 disabled:opacity-50 disabled:pointer-events-none">
                    Crear Finetunning
                  </button>
                </div>
              </form>
            </div>
            </div>
          </div>
        )
      }
}