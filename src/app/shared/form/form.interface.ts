export interface InputTextProps {
    label: string;
    placeholder: string;
    id: string;
    name: string;
    type: string;
    registerZod: any;
    errorMessage?: string;
    require?: boolean;
}

export interface InpuSelectProps {
    id: string
    label: string
    name: string
    placeholder: string
    options: string[]
    registerZod: any
    errorMessage: string
    require: boolean
}

export interface InputNumberProps {
    label: string
    placeholder: string
    id: string
    name: string
    registerZod: any
    errorMessage: string
    require: boolean
}

export interface InputCheckBoxProps {
    label: string;
    question: string;
    id: string;
    registerZod: Function;
}

export interface InputSwitchProps {
    type: 'small' | 'medium' | 'big';
    label: string;
    name: string;
    id: string;
}

export interface InputFileProps {
    label: string;
    id: string;
    require?: boolean;
    setState: Function;
    clearFile?: boolean;
}

export interface SvgFileRenderProps {
    nameFile: string
    filesAdmited: string[]
}