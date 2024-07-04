import { InputTextProps } from "./form.interface";


export default function InputTextarea (data: InputTextProps) {

    const errorClass = 'py-3 px-4 block w-full border-red-200 rounded-lg text-sm focus:border-red-500 focus:ring-red-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-900 dark:border-neutral-700 dark:text-red-400 dark:placeholder-red-500 dark:focus:ring-red-600';

    const normalClass = 'py-3 px-4 block w-full border-gray-200 rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-900 dark:border-neutral-700 dark:text-neutral-400 dark:placeholder-neutral-500 dark:focus:ring-neutral-600'
    return (
    <div className="grid sm:grid-cols-4 sm:gap-2 py-2">
        <div className="sm:col-span-3">
            <label htmlFor={data.name} className="flex gap-2 text-sm font-medium text-gray-500 mt-2.5 dark:text-white">
                { data.label } 
                { data.require ? ( <svg className="h-2.5 w-2.5 fill-gray-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512"><path d="M192 32c17.7 0 32 14.3 32 32V199.5l111.5-66.9c15.2-9.1 34.8-4.2 43.9 11s4.2 34.8-11 43.9L254.2 256l114.3 68.6c15.2 9.1 20.1 28.7 11 43.9s-28.7 20.1-43.9 11L224 312.5V448c0 17.7-14.3 32-32 32s-32-14.3-32-32V312.5L48.5 379.4c-15.2 9.1-34.8 4.2-43.9-11s-4.2-34.8 11-43.9L129.8 256 15.5 187.4c-15.2-9.1-20.1-28.7-11-43.9s28.7-20.1 43.9-11L160 199.5V64c0-17.7 14.3-32 32-32z"/></svg>) : ''}
            </label>
        </div>

        <div className="relative flex  sm:col-span-9">
            <textarea id={data.id} name={data.name} type={data.type} placeholder={data.placeholder} {...data.registerZod(data.id)} className={data.errorMessage != '' ? errorClass : normalClass} rows="3" ></textarea>

            <div className="absolute inset-y-0 right-0 flex items-center pointer-events-none pr-3">
            { data.errorMessage != '' ? (<svg className="h-5 w-5 text-red-500" width="16" height="16" fill="currentColor" viewBox="0 0 16 16" aria-hidden="true">
                    <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM8 4a.905.905 0 0 0-.9.995l.35 3.507a.552.552 0 0 0 1.1 0l.35-3.507A.905.905 0 0 0 8 4zm.002 6a1 1 0 1 0 0 2 1 1 0 0 0 0-2z"/>
                </svg>) : ''}
            </div>
        </div>

        { data.errorMessage != '' ? (<p className="relative flex  sm:col-span-9 text-xs text-red-600">
        { data.errorMessage }
        </p>): ''}
    </div>
    )
}