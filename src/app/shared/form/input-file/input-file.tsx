'use client'
import { useState } from 'react';
import SvgFileRender from './icon-file';
import { InputFileProps } from '../form.interface';


export default function InputFile(data: InputFileProps) {
    const filesAdmited = [ 'png', 'jpg', 'jpeg', 'pdf', 'PDF', 'docx', 'doc', 'ppt', 'pptx', 'xls', 'xlsx', 'csv' ];

    const buttonInitial = `py-3 px-4 inline-flex flex-shrink-0 justify-center items-center rounded-r-md border border-transparent font-semibold bg-indigo-500 text-white focus:z-10 focus:outline-none hover:bg-purple-600 focus:ring-2 focus:ring-indigo-600 transition-all text-sm`;

    const buttoEnabled = `py-3 px-4 inline-flex flex-shrink-0 justify-center items-center rounded-r-md border border-transparent font-semibold bg-green-500 text-white hover:bg-green-600 focus:z-10 focus:outline-none focus:ring-2 focus:ring-green-500`;

    const buttonError = `py-3 px-4 inline-flex flex-shrink-0 justify-center items-center rounded-r-md border border-transparent font-semibold bg-red-500 text-white hover:bg-red-600 focus:z-10 focus:outline-none focus:ring-2 focus:ring-red-500 transition-all text-sm`;

    const [buttonState, setButtonState] = useState(buttonInitial)
    const [buttonName, setButtonName] = useState('Escoge Archivo')
    const [errorMessage, setErrorMessage] = useState('')
    const [nameFile, setNameFile] = useState('');
    const [fileData, setFileData] = useState({});

    function listenerClearFile(){

        const validate = () => {
            //console.log('validating clearFIle')
            if(data.clearFile){
            setButtonState(buttonInitial)
            setButtonName('Escoge Archivo')
            setErrorMessage('')
            setNameFile('')
            setFileData({})
            }
        }

        setInterval(validate, 1200);
    }

     //get peso en archivos
    function bytesToSize(bytes: number){
        let sizes = ['Bytes', 'KB', 'MB', 'GB', 'TB'];
        if (bytes === 0) return '0 Byte';
        let i: number =  Math.floor(Math.log(bytes) / Math.log(1024));
        return Math.round(bytes / Math.pow(1024, i)) + ' ' + sizes[i];
    }

    //validate size return true when size is correct
    function validateSizeFile(sizeBytes: number) {
        const sizeString = bytesToSize(sizeBytes);
        //setsizeFile(sizeString);
        const arraySizeString = sizeString.split(' ');

        const validSize = ['Bytes', 'KB' ];
        const invalidSize = ['GB', 'TB'];

        if(invalidSize.includes(arraySizeString[1])){
            return false
        }

        if(validSize.includes(arraySizeString[1])){
            return true
        }

        if(arraySizeString[1] == 'MB'){
            if(Number(arraySizeString[0]) <= 3){
                return true
            } else {
                return false
            }

        } else {
            return false
        }
    }

    const getFile = ( event: React.ChangeEvent<HTMLInputElement> ) => {

        const file = event.target.files as FileList;
        //valuidate ext 
        const filenameArray = file[0]?.name.split('.');
        let ext = filenameArray[filenameArray.length -1];
        ext = ext.toLowerCase()

        if(!filesAdmited.includes(ext)){
            setErrorMessage(`La extension .${ext} no es admitida`);
            setButtonName( 'Archivo invalido' )
            setFileData( file )
            setButtonState( buttonError )
        } else {
            const sizeValid = validateSizeFile(file[0].size);

            if(sizeValid){
                //sin errores
                setErrorMessage('')
                setNameFile( file[0].name )
                setButtonName( 'Archivo Listo' )
                setButtonState( buttoEnabled )
                data.setState( file )
            } else {
                setNameFile('')
                setErrorMessage('El archivo supera el peso maximo de 3MB');
                setButtonName( 'Archivo invalido' )
                setButtonState( buttonError )
            }
        }
    }

    const clickUploadInput = () => {
        document.getElementById(data.id)?.click()
    }

    listenerClearFile()

    return (

        <div className="flex flex-col gap-2" >

            <label htmlFor={data.id} className="flex gap-2 text-sm font-semibold text-gray-500 mt-2.5">
                { data.label }
                { data.require ? ( <svg className="h-2.5 w-2.5 fill-gray-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512"><path d="M192 32c17.7 0 32 14.3 32 32V199.5l111.5-66.9c15.2-9.1 34.8-4.2 43.9 11s4.2 34.8-11 43.9L254.2 256l114.3 68.6c15.2 9.1 20.1 28.7 11 43.9s-28.7 20.1-43.9 11L224 312.5V448c0 17.7-14.3 32-32 32s-32-14.3-32-32V312.5L48.5 379.4c-15.2 9.1-34.8 4.2-43.9-11s-4.2-34.8 11-43.9L129.8 256 15.5 187.4c-15.2-9.1-20.1-28.7-11-43.9s28.7-20.1 43.9-11L160 199.5V64c0-17.7 14.3-32 32-32z"/></svg>) : ''}
            </label>

            <div className="relative flex rounded-md shadow-sm">

                <input onClick={clickUploadInput} type="text" className="py-3 px-4 pl-11 text-gray-800 block w-full border-gray-200 shadow-sm rounded-l-md text-sm focus:z-10 focus:border-indigo-500 focus:ring-indigo-500 dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400" value={ nameFile }/>

                <div className="absolute inset-y-0 left-0 flex items-center pointer-events-none z-20 pl-4">
                    { nameFile !== '' ? 
                    <SvgFileRender key={data.id} nameFile={nameFile} filesAdmited={filesAdmited} />: ''}
                </div>

                <button 
                    type="button" 
                    onClick={clickUploadInput} 
                    className={ buttonState } >
                        { buttonName }
                </button>

            </div>

            {errorMessage != '' ? (<p className="relative flex  sm:col-span-9 text-xs text-red-600">
            { errorMessage }
            </p>): ''}

            <input className="invisible" onChange={getFile} type="file" id={data.id} />

        </div>
    )
}
