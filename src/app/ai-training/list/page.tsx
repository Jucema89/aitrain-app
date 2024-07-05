'use client'
import  { DateFromTimestamp } from "@/app/utils/date"
import { FileTraining, StatusFileTrain, Training } from "../../interfaces/file-training.interface"
import { useEffect, useState } from "react";
import Link from "next/link";
import BadgeStatus, { BadgeStatusProps } from "@/app/shared/components/badge-status";
import { FinetunedStatus, OpenaiFinetuningCreated } from "@/app/interfaces/openai.interfaces";
import { getFinetuning } from "@/app/service/finetunningApi";


export default function ListAITraining(){
  const [ finetunning, setFinetunning ] = useState<OpenaiFinetuningCreated[]>([])
  const [loading, setLoading] = useState<boolean>(true)

  useEffect(() => {
    getFinetuning().then((finetunning) => {
      setFinetunning(finetunning)
      setLoading(false)
    })
  })

    const tableHeader: string[] = [
        'Nombre',
        'Modelo Base',
        'Tokens Usados',
        'Estado',
        'Archivos Base',
        'Creado',
        ''
    ]

    // function getFiles(files: FileTraining[] | File[]): FileTraining[]{
    //   const ableFiles = files as FileTraining[]
    //   return ableFiles.filter((file) => file.typeFileInTrain === 'base')
    // }

    function handlerStatus(status: StatusFileTrain): BadgeStatusProps{
      switch (status) {
        case 'start':
          return {type: 'info', message: 'En curso'}
          break;
  
        case 'cancel':
          return {type: 'danger', message: 'Cancelado'}
          break;
  
        case 'cancel_with_error':
            return { type: 'danger', message: 'Fallo'}
            break;
  
        case 'finish':
          return { type: 'success', message: 'Finalizado'}
          break;
  
        case 'running':
          return { type: 'info', message: 'En curso'}
          break;
      
        default:
          return { type: 'info', message: 'En curso'}
          break;
      }
    }
  
    
    if(loading && !finetunning){
      return (<div>Cargando...</div>)
    }    
    
    return(
      <div className="flex flex-col">
      <div className="-m-1.5 overflow-x-auto">
        <div className="p-1.5 min-w-full inline-block align-middle">
          <div className="bg-white border border-gray-200 rounded-xl shadow-sm overflow-hidden dark:bg-neutral-900 dark:border-neutral-700">
            <div className="px-6 py-4 grid gap-3 md:flex md:justify-between md:items-center border-b border-gray-200 dark:border-neutral-700">
              <div>
                <h2 className="text-xl font-semibold text-gray-800 dark:text-neutral-200">
                  Documentos para entrenamientos
                </h2>
                <p className="text-sm text-gray-600 dark:text-neutral-400">
                  Listado de Documentos de Entrenamientos que se han creado usando documentos especificos.
                </p>
              </div>
  
              <div>
                <div className="inline-flex gap-x-2">
                  <a className="py-2 px-3 inline-flex items-center gap-x-2 text-sm font-medium rounded-lg border border-gray-200 bg-white text-gray-800 shadow-sm hover:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-900 dark:border-neutral-700 dark:text-white dark:hover:bg-neutral-800">
                    Ver todos
                  </a>
  
                  <Link className="py-2 px-3 inline-flex items-center gap-x-2 text-sm font-semibold rounded-lg border border-transparent bg-blue-600 text-white hover:bg-blue-700 disabled:opacity-50 disabled:pointer-events-none" 
                  href="/file-training/create">
                    <svg className="flex-shrink-0 size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M5 12h14"/><path d="M12 5v14"/></svg>
                    Crear documentos
                  </Link>
                </div>
              </div>
            </div>
          
            <table className="min-w-full divide-y divide-gray-200 dark:divide-neutral-700">
              <thead className="bg-gray-50 dark:bg-neutral-900">
                <tr>
                  { tableHeader.map((header, i) => (
                      <th key={i} scope="col" className="px-6 py-3 text-start size-px whitespace-nowrap">
                      <div className="flex items-center gap-x-2">
                        <span className="text-xs font-semibold uppercase tracking-wide text-gray-800 dark:text-neutral-200">
                          {header}
                        </span>
                      </div>
                    </th>
                  ))
                  }
                </tr>
              </thead>

              <tbody className="divide-y divide-gray-200 dark:divide-neutral-700">

              { finetunning.map((tunned, i) => (
                  <tr key={i}>
                  <td className="size-px whitespace-nowrap">
                    <div className="px-6 py-3">
                      <span className="text-sm text-gray-600 dark:text-neutral-400">
                        { tunned.fine_tuned_model }
                      </span>
                    </div>
                  </td>
                  <td className="size-px whitespace-nowrap">
                    <div className="px-6 py-3">
                      <div className="flex items-center gap-x-2">
                        <span className="inline-flex items-center justify-center size-6 rounded-full bg-black dark:bg-neutral-700">
                          <svg className="flex-shrink-0 size-4 text-white" viewBox="0 0 24 24" role="img" xmlns="http://www.w3.org/2000/svg"><path d="M22.2819 9.8211a5.9847 5.9847 0 0 0-.5157-4.9108 6.0462 6.0462 0 0 0-6.5098-2.9A6.0651 6.0651 0 0 0 4.9807 4.1818a5.9847 5.9847 0 0 0-3.9977 2.9 6.0462 6.0462 0 0 0 .7427 7.0966 5.98 5.98 0 0 0 .511 4.9107 6.051 6.051 0 0 0 6.5146 2.9001A5.9847 5.9847 0 0 0 13.2599 24a6.0557 6.0557 0 0 0 5.7718-4.2058 5.9894 5.9894 0 0 0 3.9977-2.9001 6.0557 6.0557 0 0 0-.7475-7.0729zm-9.022 12.6081a4.4755 4.4755 0 0 1-2.8764-1.0408l.1419-.0804 4.7783-2.7582a.7948.7948 0 0 0 .3927-.6813v-6.7369l2.02 1.1686a.071.071 0 0 1 .038.052v5.5826a4.504 4.504 0 0 1-4.4945 4.4944zm-9.6607-4.1254a4.4708 4.4708 0 0 1-.5346-3.0137l.142.0852 4.783 2.7582a.7712.7712 0 0 0 .7806 0l5.8428-3.3685v2.3324a.0804.0804 0 0 1-.0332.0615L9.74 19.9502a4.4992 4.4992 0 0 1-6.1408-1.6464zM2.3408 7.8956a4.485 4.485 0 0 1 2.3655-1.9728V11.6a.7664.7664 0 0 0 .3879.6765l5.8144 3.3543-2.0201 1.1685a.0757.0757 0 0 1-.071 0l-4.8303-2.7865A4.504 4.504 0 0 1 2.3408 7.872zm16.5963 3.8558L13.1038 8.364 15.1192 7.2a.0757.0757 0 0 1 .071 0l4.8303 2.7913a4.4944 4.4944 0 0 1-.6765 8.1042v-5.6772a.79.79 0 0 0-.407-.667zm2.0107-3.0231l-.142-.0852-4.7735-2.7818a.7759.7759 0 0 0-.7854 0L9.409 9.2297V6.8974a.0662.0662 0 0 1 .0284-.0615l4.8303-2.7866a4.4992 4.4992 0 0 1 6.6802 4.66zM8.3065 12.863l-2.02-1.1638a.0804.0804 0 0 1-.038-.0567V6.0742a4.4992 4.4992 0 0 1 7.3757-3.4537l-.142.0805L8.704 5.459a.7948.7948 0 0 0-.3927.6813zm1.0976-2.3654l2.602-1.4998 2.6069 1.4998v2.9994l-2.5974 1.4997-2.6067-1.499 7Z" fill="currentColor"/></svg>
                
                        </span>
                        <div className="grow">
                          <span className="text-sm text-gray-600 dark:text-neutral-400">
                            { tunned.model }
                          </span>
                        </div>
                      </div>
                    </div>
                  </td>
                  <td className="size-px whitespace-nowrap">
                    <div className="px-6 py-3">
                      <span className="text-sm text-gray-600 dark:text-neutral-400">
                        { tunned.trained_tokens }
                      </span>
                    </div>
                  </td>
                  <td className="size-px whitespace-nowrap">
                    <div className="px-6 py-3">
                      < BadgeStatus message={tunned.status} 
                        type={tunned.status === 'succeeded' ? 'success' : 'danger'} />
                    </div>
                  </td>
                
                  <td className="size-px whitespace-nowrap">
                    <div className="px-6 py-3 hs-tooltip [--trigger:hover] sm:[--placement:right]">
                        <button type="button" className="hs-tooltip-toggle py-2 px-3 inline-flex items-center gap-x-2 text-xs rounded-lg border border-gray-200 bg-white text-gray-800 shadow-sm hover:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-900 dark:border-neutral-700 dark:text-white dark:hover:bg-neutral-800">
                        { tunned.result_files ? tunned.result_files.length : 2 + ' Archivos'}
                
                        <svg className="flex-shrink-0 size-4 text-gray-400 dark:text-neutral-600" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
                          <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 9.776c.112-.017.227-.026.344-.026h15.812c.117 0 .232.009.344.026m-16.5 0a2.25 2.25 0 0 0-1.883 2.542l.857 6a2.25 2.25 0 0 0 2.227 1.932H19.05a2.25 2.25 0 0 0 2.227-1.932l.857-6a2.25 2.25 0 0 0-1.883-2.542m-16.5 0V6A2.25 2.25 0 0 1 6 3.75h3.879a1.5 1.5 0 0 1 1.06.44l2.122 2.12a1.5 1.5 0 0 0 1.06.44H18A2.25 2.25 0 0 1 20.25 9v.776" />
                        </svg>
                      </button>
                      <div className="hs-tooltip-content hs-tooltip-shown:opacity-100 hs-tooltip-shown:visible hidden opacity-0 transition-opacity absolute invisible z-10 max-w-xs w-full bg-white border border-gray-100 text-start rounded-xl shadow-md after:absolute after:top-0 after:-start-4 after:w-4 after:h-full dark:bg-neutral-800 dark:border-neutral-700" role="tooltip">
                        <ul className="py-3 px-4 space-y-1">
                          { [ tunned.training_file, tunned.validation_file ].map((file, e) => (
                              <li key={e}>
                                  <div className="inline-flex items-center gap-x-3 text-sm text-gray-800 dark:text-neutral-200">
                                  { file }
                                  </div>
                              </li>
                              ))
                          }
                        </ul>
                      </div>
                    </div>
                  </td>
                
                  <td className="size-px whitespace-nowrap">
                    <div className="px-6 py-3">
                      
                      <span className="text-sm text-gray-600 dark:text-neutral-400">
                        { DateFromTimestamp(tunned.finished_at)  }
                      </span>
                    </div>
                  </td>
                  
                  <td className="size-px whitespace-nowrap">
                    <div className="px-6 py-1.5">
                      <div className="hs-dropdown [--placement:bottom-right] relative inline-block">
                        <button id="hs-table-dropdown-1" type="button" className="hs-dropdown-toggle py-1.5 px-2 inline-flex justify-center items-center gap-2 rounded-lg text-gray-700 align-middle disabled:opacity-50 disabled:pointer-events-none focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-white focus:ring-blue-600 transition-all text-sm dark:text-neutral-400 dark:hover:text-white dark:focus:ring-offset-gray-800">
                          <svg className="flex-shrink-0 size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="1"/><circle cx="19" cy="12" r="1"/><circle cx="5" cy="12" r="1"/></svg>
                        </button>
                        <div className="hs-dropdown-menu transition-[opacity,margin] duration hs-dropdown-open:opacity-100 opacity-0 hidden divide-y divide-gray-200 min-w-40 z-10 bg-white shadow-2xl rounded-lg p-2 mt-2 dark:divide-neutral-700 dark:bg-neutral-800 dark:border dark:border-neutral-700" aria-labelledby="hs-table-dropdown-1">
                          <div className="py-2 first:pt-0 last:pb-0">
                            <a className="flex items-center gap-x-3 py-2 px-3 rounded-lg text-sm text-gray-800 hover:bg-gray-100 focus:ring-2 focus:ring-blue-500 dark:text-neutral-400 dark:hover:bg-neutral-700 dark:hover:text-neutral-300" href="/training/create">
                              Entrenar IA con Archivos
                            </a>
                            <a className="flex items-center gap-x-3 py-2 px-3 rounded-lg text-sm text-gray-800 hover:bg-gray-100 focus:ring-2 focus:ring-blue-500 dark:text-neutral-400 dark:hover:bg-neutral-700 dark:hover:text-neutral-300">
                              Descargar Archivos .jsonl
                            </a>
                          </div>
                          <div className="py-2 first:pt-0 last:pb-0">
                            <a className="flex items-center gap-x-3 py-2 px-3 rounded-lg text-sm text-red-600 hover:bg-gray-100 focus:ring-2 focus:ring-blue-500 dark:text-red-500 dark:hover:bg-neutral-700" data-hs-overlay="#hs-danger-alert"
                            >
                              Eliminar Registro
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </td>
              </tr>
                ))  
              }
              </tbody>

            </table>
  
            <div className="px-6 py-4 grid gap-3 md:flex md:justify-between md:items-center border-t border-gray-200 dark:border-neutral-700">
              <div>
                <p className="text-sm text-gray-600 dark:text-neutral-400">
                  <span className="font-semibold text-gray-800 dark:text-neutral-200">
                    { finetunning.length }
                  </span> resultados
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      </div>
    )
}