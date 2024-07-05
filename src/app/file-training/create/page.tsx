/* eslint-disable react-hooks/exhaustive-deps */
'use client'
import * as z from 'zod';
import { useGetModelsMutation } from '@/app/redux/service/openaiApi';
import { useAppDispatch, useAppSelector } from '@/app/redux/hooks';
import { SubmitHandler, useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod'
import InputText from '@/app/shared/form/input-text';
import InputSelect from '@/app/shared/form/input-select';
import { useEffect, useState } from 'react';
import { addModels } from '@/app/redux/features/openaiModels.slice';
import Dropzone from '@/app/shared/components/dropzone/dropzone.component';
import InputTextarea from '@/app/shared/form/input-textarea';
import { OpenAIModel } from '@/app/redux/interfaces/openai.interfaces';
import { useCreateTrainMutation } from '@/app/redux/service/trainingDocsApi';
import { Training } from '@/app/redux/interfaces/file-training.interface';
import { useNotification } from '@/app/shared/hooks/NotificationContext';


export default function CreateFileTraining(){
    const dispatch = useAppDispatch()
    const { showNotification } = useNotification();

    const [files, setFiles] = useState<File[]>([]);
    const [ forceClearFiles, setForceClearFiles ] = useState<boolean>(false)

    const models = useAppSelector(state => state.openAIModelsReducer.models)

    const [getModels, { data: modelsAI, isLoading, isSuccess, isError, error }] = useGetModelsMutation();

    const [createTrain, { data: TrainCreated }] = useCreateTrainMutation()

    //effect in start App
    useEffect(() => {
      getModels();
      if(isSuccess && modelsAI){
        dispatch(addModels(modelsAI.data))
      }
    }, [dispatch]);

    //Effect after send Form create training
    useEffect(() => {

      if (typeof window !== "undefined" && modelsAI && TrainCreated){

        const trainCreated: Training = typeof(TrainCreated.data) === 'object' ? TrainCreated.data as Training : (TrainCreated.data[0] as Training)

        showNotification ({ 
          message: `Trainer Doc has been created in our database, the training files are being created, this may take a few minutes depending on the size and number of files.`, 
          type: 'success', 
          open: true, 
          time: 5200
        })

        reset()
        setForceClearFiles(true)
        setFiles([])
      }
    }, [TrainCreated])

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

    const requiredString = {
      required_error: "Este campo es Requerido",
      invalid_type_error: "Este campo debe ser un texto",
    }

    const requiredNumber = {
      required_error: "Este campo es Requerido",
      invalid_type_error: "Este campo debe ser un numero",
    }

    const FormSchema = z.object({
      modelGeneratorData: z.string(requiredString)
        .min(5, { message: "You must select an AI model from the list" }),
      name: z.string(requiredString)
        .min(3, { message: "The name of the file to be created is required" }),
      type_answer: z.string(requiredNumber)
        .min(5, { message: "Choose a type of response you are looking for" }),
      role_system: z.string(requiredString)
        .min(3, { message: "The role of the system is required to enroll the AI ​​around its functions" }),
    })

    const defaultValues = {
      modelGeneratorData: '',
      name: '',
      type_answer: '',
      role_system: '',
    }

    const optionsAnswer: { label: string, value: string }[] = [
      {
        label: 'All: The AI defines length and tokens of responses.',
        value: 'alls'
      },
      {
        label: 'Short: Reduced and concise responses.',
        value: 'short'
      },
      {
        label: 'Long: Extensive and well-explained responses.',
        value: 'long_explained'
      }
    ]

    const {
      register,
      handleSubmit,
      reset,
      formState: { errors },
  } = useForm({
      resolver: zodResolver(FormSchema),
      defaultValues
  })

  function submitForm(payload: {
    name: string;
    role_system: string;
    type_answer: string;
    modelGeneratorData: string;
  }) {
    console.log('event form ', payload )
    const headers = new Headers()
    const formData = new FormData()

    headers.append("Accept", "*/*");

    formData.append('name', payload.name)
    formData.append('role_system', payload.role_system)
    formData.append('type_answer', payload.type_answer)
    formData.append('modelGeneratorData', payload.modelGeneratorData)
    formData.append('openAiKey', `${process.env.NEXT_PUBLIC_OPENAI_TOKEN}`)

    console.log('files = ', files)

    files.forEach(file => formData.append('files', file, file.name));

    console.log('formData antes = ', formData)
    createTrain(formData)
  }


  if(isLoading && !modelsAI){
    return(
      <div className="max-w-[85rem] px-4 py-4 sm:px-6 lg:px-8 lg:py-4 mx-auto grid md:grid-cols-2 items-center gap-12">

        <div className="h-auto w-full bg-gray-100">
          <div className="h-full w-full animate-pulse">
            <p className="h-40 w-full bg-gray-100 border-dashed border-2 border-gray-200 rounded-md dark:bg-neutral-700"></p>
          </div>

          <div className="mt-4 h-full w-full animate-pulse">
            <p className="h-8 w-full bg-gray-200 rounded-md dark:bg-neutral-700"></p>
          </div>
        </div>

        <div className="mx-auto max-w-2xl">
        <div className="mt-5 p-4 relative bg-white border rounded-xl sm:mt-10 md:p-10 dark:bg-neutral-900 dark:border-neutral-700">
    
          <p className="text-2xl text-gray-800 pb-2 font-bold sm:text-2xl dark:text-white">
            Crear Archivos de Entrenamiento
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
      <div className="max-w-[85rem] px-4 py-4 sm:px-6 lg:px-8 lg:py-4 mx-auto grid md:grid-cols-2 items-center gap-12">
        <Dropzone addFileToForm={setFiles} clearFiles={forceClearFiles} />
        <div className="mx-auto max-w-2xl">
        <div className="mt-5 p-4 relative bg-white border rounded-xl sm:mt-10 md:p-10 dark:bg-neutral-900 dark:border-neutral-700">
    
          <p className="text-2xl text-gray-800 pb-2 font-bold sm:text-2xl dark:text-white">
            Crear Archivos de Entrenamiento
          </p>
    
          <form  onSubmit={handleSubmit(submitForm)}>
    
          < InputSelect
            label="AI Model that will generate the Documents" 
            placeholder="Select an option"
            id="modelGeneratorData"
            name="modelGeneratorData"
            options={isSuccess ? formatModels(models) : []}
            registerZod={register}
            errorMessage={errors.modelGeneratorData ? errors.modelGeneratorData?.message : ''}
            require={true}
          />
    
          <InputText 
            label="File name to create" 
            placeholder="Chat for clients" 
            id="name" 
            name="name" 
            type="text"
            registerZod={register}
            errorMessage={errors.name ? errors.name?.message: ''}
            require={true}
          />
    
          < InputSelect
            label="Type of responses you want to get" 
            placeholder="Select an option"
            id="type_answer" 
            name="type answer" 
            options={optionsAnswer}
            registerZod={register}
            errorMessage={errors.type_answer ? errors.type_answer?.message : ''}
            require={true}
          />
    
          <InputTextarea
            label="System Role for AI" 
            placeholder="You are a salesperson, you advise people and companies on how to insure their possessions and people, you are attentive and very friendly."
            id="role_system" 
            name="role_system" 
            type="text"
            registerZod={register}
            errorMessage={errors.role_system ? errors.role_system?.message: ''}
            require={true}
          />
            <div className="mt-6 grid">
              <button type="submit" className="w-full py-3 px-4 inline-flex justify-center items-center gap-x-2 text-sm font-semibold rounded-lg border border-transparent bg-blue-600 text-white hover:bg-blue-700 disabled:opacity-50 disabled:pointer-events-none">
                Crear Archivos
              </button>
            </div>
          </form>
        </div>
        </div>
      </div>
    )
  }
}
