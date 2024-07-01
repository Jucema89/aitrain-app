import { InpuSelectProps } from "./form.interface";


export default function InputSelect (data: InpuSelectProps) {

    const errorClass = 'px-3.5 py-2 block text-gray-900 w-full border-red-500 rounded-md text-sm focus:border-red-500 focus:ring-red-500 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400';

    const normalClass = 'block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue-600 sm:text-sm sm:leading-6'
    return (
    <div className="grid sm:grid-cols-4 sm:gap-2 py-2">
        <div className="sm:col-span-3">
            <label htmlFor={data.name} className="flex gap-2 text-sm font-medium text-gray-500 mt-2.5 dark:text-white">
                { data.label } 
                { data.require ? ( <svg className="h-2.5 w-2.5 fill-gray-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512"><path d="M192 32c17.7 0 32 14.3 32 32V199.5l111.5-66.9c15.2-9.1 34.8-4.2 43.9 11s4.2 34.8-11 43.9L254.2 256l114.3 68.6c15.2 9.1 20.1 28.7 11 43.9s-28.7 20.1-43.9 11L224 312.5V448c0 17.7-14.3 32-32 32s-32-14.3-32-32V312.5L48.5 379.4c-15.2 9.1-34.8 4.2-43.9-11s-4.2-34.8 11-43.9L129.8 256 15.5 187.4c-15.2-9.1-20.1-28.7-11-43.9s28.7-20.1 43.9-11L160 199.5V64c0-17.7 14.3-32 32-32z"/></svg>) : ''}
            </label>
        </div>

        <div className="relative flex  sm:col-span-9">

            <select id={data.id} className={data.errorMessage != '' ? errorClass : normalClass} 
            {...data.registerZod(data.id)}>
                <option selected>Select one Option</option>
                { data.options.map((option, i) => (
                    <option key={i} value={option.value}> {option.label} </option>
                ))}
               
            </select>

            <div className="absolute inset-y-0 right-0 flex items-center pointer-events-none pr-3">
   
            { data.errorMessage != '' ? (<svg className="h-5 w-5 text-red-500" width="16" height="16" fill="currentColor" viewBox="0 0 16 16" aria-hidden="true">
                    <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM8 4a.905.905 0 0 0-.9.995l.35 3.507a.552.552 0 0 0 1.1 0l.35-3.507A.905.905 0 0 0 8 4zm.002 6a1 1 0 1 0 0 2 1 1 0 0 0 0-2z"/>
                </svg>) : ''}
            </div>
        </div>

        {data.errorMessage != '' ? (<p className="relative flex  sm:col-span-9 text-xs text-red-600">
        { data.errorMessage }
        </p>): ''}
    </div>
    )
}