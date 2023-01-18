import { useState, useEffect } from "react";

const useQuery = (request) => {
    const [response, setResponse] = useState([])
    const [isLoading, setIsLoading] = useState(false)
    const [error, setError] = useState(null)

    useEffect(() => {
        setIsLoading(true)
        request.then((fetchResponse) => {
            setResponse(fetchResponse.data)
            setIsLoading(false)
            setError(null)
        }).catch(error => {
            setIsLoading(false)
            setError(error)
        })
    }, [])

    return { response, isLoading, error }
}

export default useQuery