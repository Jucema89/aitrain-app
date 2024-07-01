'use client'
import { useEffect, useState } from "react";
import { useRouter } from 'next/navigation'
import { RoutesProps } from "./nav-data"
import { NAV_ROUTES as navRoutes } from "./nav-data"

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
    )
}