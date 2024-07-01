import { JSXElementConstructor, ReactElement, ReactSVG } from "react"
import { SvgAiSparks, SvgChatAi, SvgFolder, SvgSetting, SvgStats } from "../../../../../public/svg"

export interface RoutesProps {
    id: number
    name: string
    url: string
    icon: JSXElementConstructor<any>
    routes?: RoutesProps[]
}

export const NAV_ROUTES: RoutesProps[] = [  
    {
        id: 1,
        name: 'Stats',
        url: '/',
        icon: SvgStats
    },
    {
        id: 2,
        name: 'AI Training',
        url: '/ai-training',
        icon: SvgAiSparks,
        routes: [
            {
                id: 2.1,
                name: 'Create Training',
                url: '/ai-training/create',
                icon: SvgFolder,
            },
            {
                id: 2.2,
                name: 'List Training',
                url: '/ai-training/list',
                icon: SvgFolder,
            }
        ]
    },
    {
        id: 3,
        name: 'File Training',
        url: '/file-training',
        icon: SvgFolder,
        routes: [
            {
                id: 3.1,
                name: 'Create Files',
                url: '/file-training/create',
                icon: SvgFolder,
            },
            {
                id: 3.2,
                name: 'List Files',
                url: '/file-training/list',
                icon: SvgFolder,
            }
        ]
    },
    {
        id: 4,
        name: 'Chat Ai',
        url: '/chat',
        icon: SvgChatAi
    },
    {
        id: 5,
        name: 'Adjust',
        url: '/adjust',
        icon: SvgSetting
    }
]

