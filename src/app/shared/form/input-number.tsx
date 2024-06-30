import { InputNumberProps } from "./form.interface";

export default function InputNumber (data: InputNumberProps) {

    const errorClass = 'px-3.5 py-2 block text-gray-900 w-full border-red-500 rounded-md text-sm focus:border-red-500 focus:ring-red-500 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400';

    const normalClass = `w-full p-0 bg-transparent border-0 text-gray-800 focus:ring-0 dark:text-white`
    return (
    <div className="grid sm:grid-cols-4 sm:gap-2 py-2">

        <div className="py-2 px-3 bg-white border border-gray-200 rounded-lg dark:bg-slate-900 dark:border-gray-700" data-hs-input-number>
        <div className="w-full flex justify-between items-center gap-x-5">
            <div className="grow">
            <span className="block text-xs text-gray-500 dark:text-gray-400">
                {data.label}
                {data.require ? ( <svg className="h-2.5 w-2.5 fill-gray-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512"><path d="M192 32c17.7 0 32 14.3 32 32V199.5l111.5-66.9c15.2-9.1 34.8-4.2 43.9 11s  4.2 34.8-11 43.9L254.2 256l114.3 68.6c15.2 9.1 20.1 28.7 11 43.9s-28.7 20.1-43.9 11L224 312.5V448c0 17.7-14.3 32-32 32s-32-14.3-32-32V312.5L48.5 379.4c-15.2 9.1-34.8 4.2-43.9-11s-4.2-34.8 11-43.9L129.8 256 15.5 187.4c-15.2-9.1-20.1-28.7-11-43.9s28.7-20.1 43.9-11L160 199.5V64c0-17.7 14.3-32 32-32z"/></svg>) : ''}
            </span>
            <input id={data.id} name={data.name} placeholder={data.placeholder} {...data.registerZod(data.id)} className={data.errorMessage != '' ? errorClass : normalClass} type="text" data-hs-input-number-input />
            </div>
            <div className="flex justify-end items-center gap-x-1.5">
            <button type="button" className="w-6 h-6 inline-flex justify-center items-center gap-x-2 text-sm font-medium rounded-full border border-gray-200 bg-white text-gray-800 shadow-sm hover:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none dark:bg-slate-900 dark:border-gray-700 dark:text-white dark:hover:bg-gray-800 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600" data-hs-input-number-decrement>
                <svg className="flex-shrink-0 w-3.5 h-3.5" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14"/></svg>
            </button>
            <button type="button" className="w-6 h-6 inline-flex justify-center items-center gap-x-2 text-sm font-medium rounded-full border border-gray-200 bg-white text-gray-800 shadow-sm hover:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none dark:bg-slate-900 dark:border-gray-700 dark:text-white dark:hover:bg-gray-800 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600" data-hs-input-number-increment>
                <svg className="flex-shrink-0 w-3.5 h-3.5" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14"/><path d="M12 5v14"/></svg>
            </button>
            </div>
        </div>
        </div>

       {data.errorMessage != '' ? (<p className="text-sm text-red-600 mt-2" id="hs-validation-name-error-helper">
            { data.errorMessage }
         </p>): ''}
    </div>
    )
}