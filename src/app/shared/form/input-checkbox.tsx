import { InputCheckBoxProps } from "./form.interface";

export default function InputCheckBox (data: InputCheckBoxProps) {
    return (
        <div className="relative flex justify-items-start align-baseline border border-gray-200 rounded-lg mx-2 my-4 px-2 py-4">
            <div className="flex items-center h-5 mt-1">
                <input id={data.id} name={data.id} type="checkbox" {...data.registerZod(data.id)} className="border-gray-200 rounded text-blue-600 focus:ring-blue-500 dark:bg-gray-800 dark:border-gray-700 dark:checked:bg-blue-500 dark:checked:border-blue-500 dark:focus:ring-offset-gray-800"/>
            </div>
            <label htmlFor={data.id} className="ml-3">
                <span className="block text-sm font-semibold text-gray-800 dark:text-gray-300">
                    {data.label}
                </span>
                <span className="block text-sm text-gray-600 dark:text-gray-500">
                    {data.question}
                </span>
            </label>
        </div>
    )
}
