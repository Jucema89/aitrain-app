import { InputSwitchProps } from "./form.interface";


export default function Switch(data: InputSwitchProps) {
    switch (data.type) {
        case 'small':
            return (
                <div className="flex items-center">
                    <input
                        type="checkbox"
                        name={data.name}
                        id={data.id}
                        className="relative shrink-0 w-11 h-6 bg-gray-100 checked:bg-none checked:bg-blue-600 border-2 border-transparent rounded-full cursor-pointer transition-colors ease-in-out duration-200 ring-1 ring-transparent focus:border-blue-600 focus:ring-blue-600 ring-offset-white focus:outline-none appearance-none dark:bg-gray-700 dark:checked:bg-blue-600 dark:focus:ring-offset-gray-800 before:inline-block before:w-5 before:h-5 before:bg-white checked:before:bg-blue-200 before:translate-x-0 checked:before:translate-x-full before:shadow before:rounded-full before:transform before:ring-0 before:transition before:ease-in-out before:duration-200 dark:before:bg-gray-400 dark:checked:before:bg-blue-200"
                    />
                    <label htmlFor={data.name} className="text-sm text-gray-500 ml-3 dark:text-gray-400">
                        {data.label}
                    </label>
                </div>
            );
        case 'medium':
            return (
                <div className="flex items-center">
                    <input
                        type="checkbox"
                        id={data.id}
                        name={data.name}
                        className="relative shrink-0 w-[3.25rem] h-7 bg-gray-100 checked:bg-none checked:bg-blue-600 border-2 border-transparent rounded-full cursor-pointer transition-colors ease-in-out duration-200 ring-1 ring-transparent focus:border-blue-600 focus:ring-blue-600 ring-offset-white focus:outline-none appearance-none dark:bg-gray-700 dark:checked:bg-blue-600 dark:focus:ring-offset-gray-800
                                        before:inline-block before:w-6 before:h-6 before:bg-white checked:before:bg-blue-200 before:translate-x-0 checked:before:translate-x-full before:shadow before:rounded-full before:transform before:ring-0 before:transition before:ease-in-out before:duration-200 dark:before:bg-gray-400 dark:checked:before:bg-blue-200"
                    />
                    <label htmlFor={data.name} className="text-sm text-gray-500 ml-3 dark:text-gray-400">
                        {data.label}
                    </label>
                </div>
            );
        case 'big':
            return (
                <div className="flex items-center">
                    <input
                        type="checkbox"
                        id={data.id}
                        name={data.name}
                        className="relative shrink-0 w-[4.25rem] h-9 bg-gray-100 checked:bg-none checked:bg-blue-600 rounded-full cursor-pointer transition-colors ease-in-out duration-200 border border-transparent ring-1 ring-transparent focus:border-blue-600 focus:ring-blue-600 ring-offset-white focus:outline-none appearance-none dark:bg-gray-700 dark:checked:bg-blue-600 dark:focus:ring-offset-gray-800
                                        before:inline-block before:w-8 before:h-8 before:bg-white checked:before:bg-blue-200 before:translate-x-0 checked:before:translate-x-full before:shadow before:rounded-full before:transform before:ring-0 before:transition before:ease-in-out before:duration-200 dark:before:bg-gray-400 dark:checked:before:bg-blue-200"
                    />
                    <label htmlFor={data.name} className="text-sm text-gray-500 ml-3 dark:text-gray-400">
                        {data.label}
                    </label>
                </div>
            )
    }
}
