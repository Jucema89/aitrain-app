/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from "react"

export type Method =  'GET' | 'POST' | 'PUT' | 'DELETE'

export default function useFetch(url: string, method?: Method, body?: any ){

    let request = {
        input: url,
        init: {
            method: method ? method : 'GET',
            headers: {
                'Content-Type': 'application/json',
            },
            body: body ? JSON.stringify(body) : null,
        }
    };

    const [ response, setResponse ] = useState({})
    const [ loading, setLoading ] = useState<boolean>(true)
    const [ error, setError ] = useState<string>('')
    const [ controller, setController ] = useState<AbortController>()

    useEffect(() => {
        const abortController = new AbortController()
        setController(abortController)
        setLoading(true)

        console.log('req antes de send = ', request)
        const init = { ...request.init, signal: abortController.signal }

        fetch( request.input, {...init })
        .then((response) => response.json())
        .then(data => setResponse({ success: true, data }))
        .catch((error) => {
            if(error.name === 'AbortError'){
                console.log('Request Cancelled')
            } else {
                setError(error)
            }
            
        })
        .finally(() => setLoading(false))
        //antes componentDidMount()
        return () => abortController.abort()
    }, [])

    const handleCancelRequest = (): void => { 
        if(controller){
            controller.abort()
            setError('Request Cancelled')
        }
    }

    return{ response, loading, error,  handleCancelRequest }
}