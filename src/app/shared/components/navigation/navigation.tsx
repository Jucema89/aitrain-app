'use client'
import { useEffect, useState } from "react";
import { useRouter } from 'next/navigation'
import { RoutesProps } from "./nav-data"
import { NAV_ROUTES as navRoutes } from "./nav-data"
import { SvgAitrainLogoPC, SvgAitrainLogoPhone } from "../../../../../public/svg";

export default function Navigation() {

    const router = useRouter()
    const [ routes, setRoutes ] = useState<RoutesProps[]>(navRoutes)
    useEffect(() => {
        setRoutes(navRoutes)
    }, [routes])

    function redirectUrl(route: RoutesProps){
        if(!route.routes){
            router.push(route.url)
        }
    }

    return (
        <>
         <div className="sticky top-0 inset-x-0 z-20 bg-white border-y px-4 sm:px-6 md:px-8 lg:hidden dark:bg-neutral-800 dark:border-neutral-700">
          <div className="flex justify-between items-center py-2">
            <ol className="ms-3 flex items-center whitespace-nowrap">
              <li className="flex items-center text-sm text-gray-800 dark:text-neutral-400">
                Application Layout
                <svg className="flex-shrink-0 mx-3 overflow-visible size-2.5 text-gray-400 dark:text-neutral-500" width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M5 1L10.6869 7.16086C10.8637 7.35239 10.8637 7.64761 10.6869 7.83914L5 14" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>
                </svg>
              </li>
              <li className="text-sm font-semibold text-gray-800 truncate dark:text-neutral-400" aria-current="page">
                Dashboard
              </li>
            </ol>

            <button type="button" className="py-2 px-3 flex justify-center items-center gap-x-1.5 text-xs rounded-lg border border-gray-200 text-gray-500 hover:text-gray-600 dark:border-neutral-700 dark:text-neutral-400 dark:hover:text-neutral-200" data-hs-overlay="#application-sidebar" aria-controls="application-sidebar" aria-label="Sidebar">
              <svg className="flex-shrink-0 size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M17 8L21 12L17 16M3 12H13M3 6H13M3 18H13"/></svg>
              <span className="sr-only">Sidebar</span>
            </button>
          </div>
        </div>
        
        <div id="application-sidebar" className="hs-overlay [--auto-close:lg]
          hs-overlay-open:translate-x-0
          -translate-x-full transition-all duration-300 transform
          w-[260px]
          hidden
          fixed inset-y-0 start-0 z-[60]
          bg-white border-e border-gray-200
          lg:block lg:translate-x-0 lg:end-auto lg:bottom-0
          dark:bg-neutral-800 dark:border-neutral-700
        ">
            <div className="px-8 pt-4">
                <a className="flex-none rounded-xl text-xl inline-block font-semibold focus:outline-none focus:opacity-80" href="/" aria-label="Aitrain">
                <SvgAitrainLogoPC />
                </a>
            </div>

            <nav className="hs-accordion-group p-6 w-full flex flex-col flex-wrap" data-hs-accordion-always-open>
                <ul className="space-y-1.5">

                    { routes.map((route) => (
                        <li key={route.id} className="hs-accordion" id={route.name}>
                        <button type="button" className="hs-accordion-toggle w-full text-start flex items-center gap-x-3.5 py-2 px-2.5 hs-accordion-active:text-blue-600 hs-accordion-active:hover:bg-transparent text-sm text-neutral-700 rounded-lg hover:bg-gray-100 dark:bg-neutral-800 dark:hover:bg-neutral-700 dark:text-neutral-400 dark:hover:text-neutral-300 dark:hs-accordion-active:text-white"
                        onClick={ () => redirectUrl(route) }>
                            {< route.icon className="flex-shrink-0 size-4" />}
                            {route.name}
                            { route.routes && (
                                <>
                                    <svg className="hs-accordion-active:block ms-auto hidden size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m18 15-6-6-6 6"/></svg>
                    
                                    <svg className="hs-accordion-active:hidden ms-auto block size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m6 9 6 6 6-6"/></svg>
                                </>
                            )}
                        </button>
                        { route.routes && (
                            <div id="projects-accordion-child" className="hs-accordion-content w-full overflow-hidden transition-[height] duration-300 hidden">
                                <ul className="pt-2 ps-2">
                                    { route.routes.map((subRoute) => (
                                        <li key={subRoute.id} >
                                            <a  className="flex items-center gap-x-3.5 py-2 px-2.5 text-sm text-neutral-700 rounded-lg hover:bg-gray-100 dark:bg-neutral-800 dark:text-neutral-400 dark:hover:text-neutral-300" href={subRoute.url}>
                                            { subRoute.name }
                                            </a>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        )}
                        </li>
                    ))}
                </ul>
            </nav>
        </div>
       

        
        </>
        
    )
}