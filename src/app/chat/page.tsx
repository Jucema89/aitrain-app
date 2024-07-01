import { SvgAitrainLogoChat } from "../../../public/svg";

export default function Chat(){
    return(
       <>
        <div className="relative h-screen">
            <div className="max-w-4xl px-4 py-4 sm:px-6 lg:px-8 lg:py-14 mx-auto">
        
            <ul className="mt-2 space-y-12">
                <li className="flex gap-x-2 sm:gap-x-4">

                    <span className="flex items-center justify-items-center justify-center bg-gradient-to-tl from-[#25CAEB] to-[#5E17D8] w-[2.375rem] h-[2.375rem] rounded-full text-center">
                        < SvgAitrainLogoChat className="fill-white" />
                    </span>
                <div className="bg-white border border-gray-200 rounded-lg p-4 space-y-3 dark:bg-neutral-900 dark:border-neutral-700">
                    <div className="space-y-1.5">
                    <p className="mb-1.5 text-sm text-gray-800 dark:text-white">
                        Segun las especificaciones que me cuentas puedo ofrecerte estas laptops:
                    </p>
                    <ul className="list-disc list-outside space-y-1.5 ps-3.5">
                        <li className="text-sm text-gray-800 dark:text-white">
                        Lenovo Legion 7i
                        </li>
        
                        <li className="text-sm text-gray-800 dark:text-white">
                        Razer Blade
                        </li>
        
                        <li className="text-sm text-gray-800 dark:text-white">
                        Omen Trascendent
                        </li>
                    </ul>
                    </div>
                </div>
                </li>
        
                <li className="max-w-2xl ms-auto flex justify-end gap-x-2 sm:gap-x-4">
                <div className="grow text-end space-y-3">
            
                    <div className="inline-block bg-blue-600 rounded-lg p-4 shadow-sm">
                    <p className="text-sm text-white">
                        Necesito mas informacion sobre la Razer Blade, caul grafica usa?
                    </p>
                    </div>
                </div>
        
                <span className="flex-shrink-0 inline-flex items-center justify-center size-[38px] rounded-full bg-gray-600">
                    <span className="text-sm font-medium text-white leading-none">AZ</span>
                </span>
                </li>
                
                <li className="flex gap-x-2 sm:gap-x-4">
                    <span className="flex items-center justify-items-center justify-center bg-gradient-to-tl from-[#25CAEB] to-[#5E17D8] w-[2.375rem] h-[2.375rem] rounded-full text-center">
                        < SvgAitrainLogoChat className="fill-white" />
                    </span>
        
                <div className="grow max-w-[90%] md:max-w-2xl w-full space-y-3">
                    <div className="bg-white border border-gray-200 rounded-lg p-4 space-y-3 dark:bg-neutral-900 dark:border-neutral-700">
                    <p className="text-sm text-gray-800 dark:text-white">
                        La tenemos en 2 referencias de grafica: Con RTX 4070 y con RTX 3080TI, te comparto las especificaciones de ambas:
                    </p>
                    <div className="space-y-1.5">
                        <ul>
                        <li>
                            <a className="text-sm text-blue-600 decoration-2 hover:underline font-medium dark:text-blue-500 dark:hover:text-blue-400" href="../docs/index.html">
                            Razer Blade 15 Core i7/13 - RTX 4070
                            </a>
                        </li>
                        <li>
                            <a className="text-sm text-blue-600 decoration-2 hover:underline font-medium dark:text-blue-500 dark:hover:text-blue-400" href="../docs/frameworks.html">
                                Razer Blade 15 Core i9/12 - RTX 3080TI
                            </a>
                        </li>
                        </ul>
                    </div>
                    </div>
                    <div>
                    <div className="sm:flex sm:justify-between">
                        <div>
                        <div className="inline-flex border border-gray-200 rounded-full p-0.5 dark:border-neutral-700">
                            <button type="button" className="inline-flex flex-shrink-0 justify-center items-center size-8 rounded-full text-gray-500 hover:bg-blue-100 hover:text-blue-800 focus:z-10 focus:outline-none focus:ring-2 focus:ring-blue-500 dark:text-neutral-500 dark:hover:bg-blue-900 dark:hover:text-blue-200">
                            <svg className="flex-shrink-0 size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M7 10v12"/><path d="M15 5.88 14 10h5.83a2 2 0 0 1 1.92 2.56l-2.33 8A2 2 0 0 1 17.5 22H4a2 2 0 0 1-2-2v-8a2 2 0 0 1 2-2h2.76a2 2 0 0 0 1.79-1.11L12 2h0a3.13 3.13 0 0 1 3 3.88Z"/></svg>
                            </button>
                            <button type="button" className="inline-flex flex-shrink-0 justify-center items-center size-8 rounded-full text-gray-500 hover:bg-blue-100 hover:text-blue-800 focus:z-10 focus:outline-none focus:ring-2 focus:ring-blue-500 dark:text-neutral-500 dark:hover:bg-blue-900 dark:hover:text-blue-200">
                            <svg className="flex-shrink-0 size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M17 14V2"/><path d="M9 18.12 10 14H4.17a2 2 0 0 1-1.92-2.56l2.33-8A2 2 0 0 1 6.5 2H20a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2h-2.76a2 2 0 0 0-1.79 1.11L12 22h0a3.13 3.13 0 0 1-3-3.88Z"/></svg>
                            </button>
                        </div>
                        <button type="button" className="py-2 px-3 inline-flex items-center gap-x-2 text-sm rounded-full border border-transparent text-gray-500 hover:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none dark:text-neutral-400 dark:hover:bg-neutral-800">
                            <svg className="flex-shrink-0 size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M17 14V2"/><path d="M9 18.12 10 14H4.17a2 2 0 0 1-1.92-2.56l2.33-8A2 2 0 0 1 6.5 2H20a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2h-2.76a2 2 0 0 0-1.79 1.11L12 22h0a3.13 3.13 0 0 1-3-3.88Z"/></svg>
                            Copy
                        </button>
                        <button type="button" className="py-2 px-3 inline-flex items-center gap-x-2 text-sm rounded-full border border-transparent text-gray-500 hover:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none dark:text-neutral-400 dark:hover:bg-neutral-800">
                            <svg className="flex-shrink-0 size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="18" cy="5" r="3"/><circle cx="6" cy="12" r="3"/><circle cx="18" cy="19" r="3"/><line x1="8.59" x2="15.42" y1="13.51" y2="17.49"/><line x1="15.41" x2="8.59" y1="6.51" y2="10.49"/></svg>
                            Share
                        </button>
                        </div>
        
                        <div className="mt-1 sm:mt-0">
                        <button type="button" className="py-2 px-3 inline-flex items-center gap-x-2 text-sm rounded-full border border-transparent text-gray-500 hover:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none dark:text-neutral-400 dark:hover:bg-neutral-800">
                            <svg className="flex-shrink-0 size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 12a9 9 0 1 1-9-9c2.52 0 4.93 1 6.74 2.74L21 8"/><path d="M21 3v5h-5"/></svg>
                            New answer
                        </button>
                        </div>
                    </div>
                    </div>
                </div>
                </li>
            </ul>
            </div>

            <footer className="max-w-4xl mx-auto sticky bottom-0 z-10 bg-white border-t border-gray-200 pt-2 pb-4 sm:pt-4 sm:pb-6 px-4 sm:px-6 lg:px-0 dark:bg-neutral-900 dark:border-neutral-700">
            <div className="flex justify-between items-center mb-3">
                <button id="new_chat" type="button" className="inline-flex justify-center items-center gap-x-2 rounded-lg font-medium text-gray-800 hover:text-blue-600 text-xs sm:text-sm dark:text-neutral-200 dark:hover:text-blue-500" data-hs-overlay="#hs-task-created-alert">
                <svg className="flex-shrink-0 size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M5 12h14"/><path d="M12 5v14"/></svg>
                Nuevo Chat
                </button>
        
                <button type="button" className="py-1.5 px-2 inline-flex justify-center items-center gap-2 rounded-lg border font-medium bg-white text-gray-700 shadow-sm align-middle hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-white focus:ring-blue-600 text-xs dark:bg-neutral-900 dark:hover:bg-neutral-800 dark:border-neutral-700 dark:text-neutral-400 dark:hover:text-white dark:focus:ring-offset-gray-800">
                <svg className="flex-shrink-0 size-3" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                    <path d="M5 3.5h6A1.5 1.5 0 0 1 12.5 5v6a1.5 1.5 0 0 1-1.5 1.5H5A1.5 1.5 0 0 1 3.5 11V5A1.5 1.5 0 0 1 5 3.5z"/>
                </svg>
                Detener Generacion
                </button>
            </div>
        
            <div className="relative">
                <textarea className="p-4 pb-12 block w-full border-gray-200 rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-900 dark:border-neutral-700 dark:text-neutral-400 dark:placeholder-neutral-500 dark:focus:ring-neutral-600" placeholder="Escribe tu consulta..."></textarea>

                <div className="absolute bottom-px inset-x-px p-2 rounded-b-lg bg-white dark:bg-neutral-900">
                <div className="flex justify-between items-center">
            
                    <div className="flex items-center">
                
                    {/* <!-- <button type="button" className="inline-flex flex-shrink-0 justify-center items-center size-8 rounded-lg text-gray-500 hover:text-blue-600 focus:z-10 focus:outline-none focus:ring-2 focus:ring-blue-500 dark:text-neutral-500 dark:hover:text-blue-500">
                        <svg className="flex-shrink-0 size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect width="18" height="18" x="3" y="3" rx="2"/><line x1="9" x2="15" y1="15" y2="9"/></svg>
                    </button> -->
                    <!-- End Mic Button --> */}
        
                    
                    <button type="button" className="inline-flex flex-shrink-0 justify-center items-center size-8 rounded-lg text-gray-500 hover:text-blue-600 focus:z-10 focus:outline-none focus:ring-2 focus:ring-blue-500 dark:text-neutral-500 dark:hover:text-blue-500">
                        <svg className="flex-shrink-0 size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m21.44 11.05-9.19 9.19a6 6 0 0 1-8.49-8.49l8.57-8.57A4 4 0 1 1 18 8.84l-8.59 8.57a2 2 0 0 1-2.83-2.83l8.49-8.48"/></svg>
                    </button>
                    
                    </div>
            
        
                    <div className="flex items-center gap-x-1">
                
                    <button type="button" className="inline-flex flex-shrink-0 justify-center items-center size-8 rounded-lg text-white bg-blue-600 hover:bg-blue-500 focus:z-10 focus:outline-none focus:ring-2 focus:ring-blue-500">
                        <svg className="flex-shrink-0 size-3.5" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                        <path d="M15.964.686a.5.5 0 0 0-.65-.65L.767 5.855H.766l-.452.18a.5.5 0 0 0-.082.887l.41.26.001.002 4.995 3.178 3.178 4.995.002.002.26.41a.5.5 0 0 0 .886-.083l6-15Zm-1.833 1.89L6.637 10.07l-.215-.338a.5.5 0 0 0-.154-.154l-.338-.215 7.494-7.494 1.178-.471-.47 1.178Z"/>
                        </svg>
                    </button>
                
                    </div>
                
                </div>
                </div>
        
            </div>
            
            </footer>
        </div>

        <div id="hs-task-created-alert" className="hs-overlay hidden size-full fixed top-0 start-0 z-[80] overflow-x-hidden overflow-y-auto">
            <div className="hs-overlay-open:mt-7 hs-overlay-open:opacity-100 hs-overlay-open:duration-500 mt-0 opacity-0 ease-out transition-all sm:max-w-lg sm:w-full m-3 sm:mx-auto">
            <div className="relative flex flex-col bg-white shadow-lg rounded-xl dark:bg-neutral-900">
                <div className="p-4 sm:p-10 text-center overflow-y-auto">
                
                <span className="mb-4 inline-flex justify-center items-center size-[46px] rounded-full border-4 border-green-50 bg-gradient-to-tl from-[#25CAEB] to-[#5E17D8] text-white dark:bg-green-700 dark:border-green-600 dark:text-green-100">
                    <svg className="flex-shrink-0 size-5" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                    <path d="M11.251.068a.5.5 0 0 1 .227.58L9.677 6.5H13a.5.5 0 0 1 .364.843l-8 8.5a.5.5 0 0 1-.842-.49L6.323 9.5H3a.5.5 0 0 1-.364-.843l8-8.5a.5.5 0 0 1 .615-.09z"/>
                    </svg>
                </span>
        
                <h3 className="mb-2 text-xl font-bold text-gray-800 dark:text-neutral-200">
                    Seguimos trabajando en el Chat!
                </h3>
                <p className="text-gray-500 dark:text-neutral-500">
                    Queremos que puedas chatear pronto con los modelos que ya entrenaste.
                    Siempre puedes apoyarnos en el proceso <a className="inline-flex items-center gap-x-1.5 text-blue-600 decoration-2 hover:underline font-medium dark:text-blue-500" href="https://github.com/Jucema89/aitrain" target="_blank">creando código.</a>
                </p>
        
                <div className="mt-6 flex justify-center gap-x-4">
                    <a type="button" className="py-2 px-3 inline-flex items-center gap-x-2 text-sm font-medium rounded-lg border border-gray-200 bg-white text-gray-800 shadow-sm hover:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-900 dark:border-neutral-800 dark:text-white dark:hover:bg-neutral-800" href="/training/create">
                    Volver a IA training
                    </a>
                </div>
                </div>
            </div>
            </div>
        </div>
       </>
    )
}