/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable @next/next/no-img-element */
'use client'
import HSOverlay from "@preline/overlay"
import { IStaticMethods } from "preline";
import { useEffect, useState } from "react";

declare global {
    interface Window {
      HSStaticMethods: IStaticMethods;
    }
}

export interface ModalNotificationData {
    open: boolean
    type: 'success' | 'error' | 'warning' | 'info'
    data: {
        title: string
        message: string
    }
}

export default function ModalNotification({ modal }: { modal: ModalNotificationData}){

    useEffect(() => {
        if (typeof window !== "undefined" && window.HSStaticMethods && window.HSStaticMethods.autoInit) {
            window.HSStaticMethods.autoInit()
            if(modal.open){
                const getModal = document.querySelector('#hs-modal-projects') as HTMLElement
                HSOverlay.open(getModal)
            }
        }
     
    }, [ modal ])

    function closeModal(){
        if (typeof document !== "undefined") {
            const getModal = document.querySelector('#hs-modal-projects') as HTMLElement
            HSOverlay.close(getModal)
        }
    }

    return(
        <div id="hs-modal-projects" className="hs-overlay hidden size-full fixed top-0 start-0 z-[80] overflow-x-hidden overflow-y-auto">
            <div className="hs-overlay-open:mt-7 hs-overlay-open:opacity-100 hs-overlay-open:duration-500 mt-0 opacity-0 ease-out transition-all sm:max-w-lg sm:w-full m-3 sm:mx-auto md:max-w-[50vw] lg:max-w-[50vw] lg:max-h-[50vh] md:max-h-[50vh] lg:self-center">
                <div className="relative flex flex-col bg-white shadow-lg rounded-xl dark:bg-neutral-900">
                <div className="absolute top-2 z-[10] end-2">
                    <button type="button" className="inline-flex justify-center items-center size-8 text-sm font-semibold rounded-lg border border-transparent bg-white/10 text-white hover:bg-white/20 disabled:opacity-50 disabled:pointer-events-none" onClick={() => closeModal()}>
                    <span className="sr-only">Close</span>
                    <svg className="flex-shrink-0 size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M18 6 6 18"/><path d="m6 6 12 12"/></svg>
                    </button>
                </div>

                {/* <div className="aspect-w-16 aspect-h-8">
                    <img className="w-full object-cover rounded-t-xl" src={modal.data.image} alt={modal.data.title} />
                </div> */}

                <div className="p-4 sm:p-10 text-center overflow-y-auto">
                    <h3 className="mb-2 text-2xl font-bold text-gray-800 dark:text-neutral-200">
                    { modal.data.title }
                    </h3>
                    <p className="text-gray-500 dark:text-neutral-500">
                    { modal.data.message }
                    </p>

                    <div className="mt-6 flex justify-center gap-x-4">
                    <a type="button" className="py-2 px-3 inline-flex items-center gap-x-2 text-sm font-semibold rounded-lg border border-transparent bg-black text-white hover:bg-gray-700  disabled:opacity-50 disabled:pointer-events-none" data-hs-overlay="#hs-modal-projects">
                        Ver Proyecto
                    </a>
                    <button className="py-2 px-3 inline-flex items-center gap-x-2 text-sm font-semibold rounded-lg border border-transparent text-gray-700  hover:text-blue-800 disabled:opacity-50 disabled:pointer-events-none dark:text-white dark:hover:text-blue-400 cursor-pointer" onClick={() => closeModal()}>
                        Cerrar
                    </button>
                    </div>
                </div>
                </div>
            </div>
        </div>

    //     <div id="modal_error_form" className="hs-overlay hidden w-full h-full fixed top-0 left-0 z-[60] overflow-x-hidden overflow-y-auto">
    //                 <div className="hs-overlay-open:mt-7 hs-overlay-open:opacity-100 hs-overlay-open:duration-500 mt-0 opacity-0 ease-out transition-all md:max-w-2xl md:w-full m-3 md:mx-auto">
    //                     <div className="relative flex flex-col bg-white border shadow-sm rounded-xl overflow-hidden dark:bg-gray-800 dark:border-gray-700">
    //                     <div className="absolute top-2 right-2">
    //                         <button type="button" className="inline-flex flex-shrink-0 justify-center items-center h-8 w-8 rounded-md text-gray-500 hover:text-gray-400 focus:outline-none focus:ring-2 focus:ring-gray-400 focus:ring-offset-2 focus:ring-offset-white transition-all text-sm dark:focus:ring-gray-700 dark:focus:ring-offset-gray-800" onClick={() => closeModal()}>
    //                         <span className="sr-only">Close</span>
    //                         <svg className="w-3.5 h-3.5" width="8" height="8" viewBox="0 0 8 8" fill="none" xmlns="http://www.w3.org/2000/svg">
    //                             <path d="M0.258206 1.00652C0.351976 0.912791 0.479126 0.860131 0.611706 0.860131C0.744296 0.860131 0.871447 0.912791 0.965207 1.00652L3.61171 3.65302L6.25822 1.00652C6.30432 0.958771 6.35952 0.920671 6.42052 0.894471C6.48152 0.868271 6.54712 0.854471 6.61352 0.853901C6.67992 0.853321 6.74572 0.865971 6.80722 0.891111C6.86862 0.916251 6.92442 0.953381 6.97142 1.00032C7.01832 1.04727 7.05552 1.1031 7.08062 1.16454C7.10572 1.22599 7.11842 1.29183 7.11782 1.35822C7.11722 1.42461 7.10342 1.49022 7.07722 1.55122C7.05102 1.61222 7.01292 1.6674 6.96522 1.71352L4.31871 4.36002L6.96522 7.00648C7.05632 7.10078 7.10672 7.22708 7.10552 7.35818C7.10442 7.48928 7.05182 7.61468 6.95912 7.70738C6.86642 7.80018 6.74102 7.85268 6.60992 7.85388C6.47882 7.85498 6.35252 7.80458 6.25822 7.71348L3.61171 5.06702L0.965207 7.71348C0.870907 7.80458 0.744606 7.85498 0.613506 7.85388C0.482406 7.85268 0.357007 7.80018 0.264297 7.70738C0.171597 7.61468 0.119017 7.48928 0.117877 7.35818C0.116737 7.22708 0.167126 7.10078 0.258206 7.00648L2.90471 4.36002L0.258206 1.71352C0.164476 1.61976 0.111816 1.4926 0.111816 1.36002C0.111816 1.22744 0.164476 1.10028 0.258206 1.00652Z" fill="currentColor"/>
    //                         </svg>
    //                         </button>
    //                     </div>

    //                     <div className="p-4 sm:p-10 overflow-y-auto">
    //                         <div className="flex gap-x-4 md:gap-x-7">
    //                         <span className="flex-shrink-0 inline-flex justify-center items-center w-[46px] h-[46px] sm:w-[62px] sm:h-[62px] rounded-full border-4 border-red-50 bg-red-100 text-red-500 dark:bg-red-700 dark:border-red-600 dark:text-red-100">
    //                             <svg className="w-5 h-5" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
    //                             <path d="M8.982 1.566a1.13 1.13 0 0 0-1.96 0L.165 13.233c-.457.778.091 1.767.98 1.767h13.713c.889 0 1.438-.99.98-1.767L8.982 1.566zM8 5c.535 0 .954.462.9.995l-.35 3.507a.552.552 0 0 1-1.1 0L7.1 5.995A.905.905 0 0 1 8 5zm.002 6a1 1 0 1 1 0 2 1 1 0 0 1 0-2z"/>
    //                             </svg>
    //                         </span>
    //                         <div className="grow">
    //                             <h3 className="mb-2 text-xl font-bold text-gray-800 dark:text-gray-200">
    //                             {modal.data.title}
    //                             </h3>
    //                             <p className="text-gray-500">
    //                             {modal.data.message}
    //                             </p>
    //                         </div>
    //                         </div>
    //                     </div>

    //                     <div className="flex justify-end items-center gap-x-2 py-3 px-4 bg-gray-50 border-t dark:bg-gray-800 dark:border-gray-700">
    //                         <button type="button" className="py-2.5 px-4 inline-flex justify-center items-center gap-2 rounded-md border font-medium bg-white text-gray-700 shadow-sm align-middle hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-white focus:ring-blue-600 transition-all text-sm dark:bg-gray-800 dark:hover:bg-slate-800 dark:border-gray-700 dark:text-gray-400 dark:hover:text-white dark:focus:ring-offset-gray-800" onClick={() => closeModal()}>
    //                         Entiendo
    //                         </button>
    //                     </div>
    //                     </div>
    //                 </div>
    //   </div>

    )
}