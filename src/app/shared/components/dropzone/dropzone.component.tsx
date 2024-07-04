import { useRef, useState, ChangeEvent, DragEvent, Dispatch, SetStateAction, useEffect } from "react";
import DropzoneFile from "./dropzone-file.component";

export default function Dropzone({addFileToForm, clearFiles }: { addFileToForm: Dispatch<SetStateAction<File[]>>, clearFiles: boolean }) {

    const [dragActive, setDragActive] = useState<boolean>(false);
    const inputRef = useRef<HTMLInputElement>(null);
    const [files, setFiles] = useState<File[]>([]);

    useEffect(() => {
        if(clearFiles) setFiles([])
    }, [clearFiles])

    const extensionValid: string[] = [
        'txt', 'docx', 'doc', 'pdf', 'PDF', 'xls', 'xlsx', 'ppt', 'pptx'
      ]

    function handleChange(e: ChangeEvent<HTMLInputElement>) {
        e.preventDefault();
        console.log("File has been added");
        if (e.target.files && e.target.files[0]) {
            const fileList = Array.from(e.target.files);
            setFiles((prevState) => [...prevState, ...fileList]);
            addFileToForm((prevState) => [...prevState, ...fileList])
        }
    }

    // function handleSubmitFile(e: React.FormEvent) {
    //     e.preventDefault();
    //     if (files.length === 0) {
    //         // no file has been submitted
    //     } else {
    //         // write submit logic here
    //     }
    // }

    function handleDrop(e: DragEvent<HTMLFormElement>) {
        e.preventDefault();
        e.stopPropagation();
        setDragActive(false);
        if (e.dataTransfer.files && e.dataTransfer.files[0]) {
            const fileList = Array.from(e.dataTransfer.files);
            setFiles((prevState) => [...prevState, ...fileList]);
            addFileToForm((prevState) => [...prevState, ...fileList])
        }
    }

    function handleDragLeave(e: DragEvent<HTMLFormElement>) {
        e.preventDefault();
        e.stopPropagation();
        setDragActive(false);
    }

    function handleDragOver(e: DragEvent<HTMLFormElement>) {
        e.preventDefault();
        e.stopPropagation();
        setDragActive(true);
    }

    function handleDragEnter(e: DragEvent<HTMLFormElement>) {
        e.preventDefault();
        e.stopPropagation();
        setDragActive(true);
    }

    function removeFile(idx: number) {
        const newArr = [...files];
        newArr.splice(idx, 1);
        setFiles(newArr)
        addFileToForm(newArr)
    }

    function openFileExplorer() {
        if (inputRef.current) {
            inputRef.current.value = "";
            inputRef.current.click();
        }
    }

    return (
        <section>
        <div className="flex flex-col bg-white border shadow-sm rounded-xl dark:bg-neutral-800 dark:border-neutral-700">

            <form className={`${dragActive ? 'dropzone bg-blue-50 text-blue-600 border-blue-500 border-dashed border-2  flex-col' : 'dropzone border-dashed border-gray-400 border-2  flex-col'}`}
                onDragEnter={handleDragEnter}
                //onSubmit={handleSubmitFile}
                onDrop={handleDrop}
                onDragLeave={handleDragLeave}
                onDragOver={handleDragOver}>
                    
                <input
                    placeholder="fileInput"
                    className="hidden"
                    ref={inputRef}
                    type="file"
                    multiple={true}
                    onChange={handleChange}
                    accept={extensionValid.map(ext => `.${ext}`).join(',')}
                />
                <p>Arrastra y suelta tus archivos aquí</p>

                <button type="button" className="py-2 px-3 inline-flex items-center gap-x-1.5 text-sm font-medium rounded-lg border border-transparent text-gray-800 hover:bg-gray-200 disabled:opacity-50 disabled:pointer-events-none dark:text-white dark:hover:bg-neutral-800" 
                    onClick={openFileExplorer}>
                    <svg xmlns="http://www.w3.org/2000/svg" className="flex-shrink-0 size-4" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" width="20" height="20">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M3 16.5v2.25A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75V16.5m-13.5-9L12 3m0 0 4.5 4.5M12 3v13.5" />
                    </svg>
                    
                    Click para subir
                </button>
                
                <small className="py-2">
                    Se admiten solo los siguientes tipos de archivo:
                    <div className="flex flex-1 gap-2 py-2">
                    {
                        extensionValid.map((ext, i) => (
                            <span key={i} className="inline-flex items-center gap-x-1 py-1 px-2 rounded-lg text-xs font-normal bg-blue-100 text-blue-800 dark:bg-blue-800/30 dark:text-blue-500">.{ ext }</span>
                        ))
                    }
                    </div>
                </small>
            </form>
           
            <DropzoneFile files={files} remove={removeFile} />

            <div className="bg-gray-50 border-t border-gray-200 rounded-b-xl py-2 px-4 md:px-5 dark:bg-white/10 dark:border-neutral-700">
                <div className="flex flex-wrap justify-between items-center gap-x-3">
                    <div>
                    <span className="text-sm font-semibold text-gray-800 dark:text-white">
                        { files.length } Files
                    </span>
                    </div>

                    <div className="-me-2.5">
                    <button type="button" className="py-2 px-3 inline-flex items-center gap-x-1.5 text-sm font-medium rounded-lg border border-transparent text-gray-500 hover:bg-gray-200 hover:text-gray-800 disabled:opacity-50 disabled:pointer-events-none dark:text-neutral-400 dark:hover:bg-neutral-800 dark:hover:text-white"
                    onClick={() => setFiles([])}
                    >
                        <svg className="flex-shrink-0 size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                        <path d="M3 6h18"></path>
                        <path d="M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6"></path>
                        <path d="M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2"></path>
                        <line x1="10" x2="10" y1="11" y2="17"></line>
                        <line x1="14" x2="14" y1="11" y2="17"></line>
                        </svg>
                        Eliminar todos los archivos
                    </button>
                    </div>
                </div>
            </div>
        </div>
        <input type="file" name="file-input" id="one-file-upload" className="invisible" />
        </section>
    )
}
