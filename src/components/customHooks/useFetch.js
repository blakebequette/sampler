import React, { useState, useEffect } from "react"

export default function useFetch({url}){
    const [data, setData] = useState(null)
    const [isPending, setIsPending] = useState(true)
    const [error, setError] = useState(null)

    useEffect(() => {
        const abortControl = new AbortController()

        fetch(url, { signal: abortControl.signal })
            .then(res => {
                if (!res.ok){
                    throw Error('could not fetch the data for that resource')
                }
                return res.json()
            })
            .then(dat => {
                setData(dat)
                setIsPending(false)
                setError(null)
            })
            .catch(err => {
                setIsPending(false)
                setError(err.message)
            })
    }, 
    [])

    return { data, isPending, error }
}