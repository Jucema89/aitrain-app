import { OpenAIModel } from "./openai.interfaces"

export interface Training {
    id: string       
    files: FileTraining[] | File[]
    tokens_usage: number
    name :string
    status: StatusFileTrain
    role_system :string           
    modelGeneratorData :string
    openAiKey: string
    type_answer: TypeAnswer
    observations: string
    createdAt : Date             
    updatedAt : Date  
}

export type StatusFileTrain = 'start' | 'running' | 'finish' | 'cancel' | 'cancel_with_error'
export type TrainingCreate = Omit<Training, 'id' | 'createdAt' | 'status' | 'observations' | 'updatedAt'> 
export type TypeAnswer = 'alls' | 'short' | 'long_explained'
export interface FileTraining {
    id :string                
    fieldName :string
    extension: string
    typeFileInTrain: 'base' | 'final'
    name :string
    link :string
    createdAt :Date             
    updatedAt :Date   
}

export interface TrainingResponse {
    success: boolean
    data: Training | Training[]
    message?: string
}

export interface OpenAiModelsResponse {
    success: boolean
    data: OpenAIModel[]
    message?: string
}

export interface ConfigurationEnv {
    openAiKey: string
    postgresUrl: string
    qdrantUrl: string
    useAws: boolean
    useVectorDatabase: boolean
    awsKeyId: string
    awsAccessKey: string
    awsBucket: string
    awsRegion: string
}