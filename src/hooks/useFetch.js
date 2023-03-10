import { useState, useEffect } from 'react'

const useFetch = (url) => {
    const [ data, setData ] = useState(null)
    const [ isPending, setIsPending ] = useState(true)
    const [ error, setError ] = useState(null)

    //Abort controller allows you to stop fetch request, such as if user clicks new page
    const abortController = new AbortController()

    //Runs every time component is rendered
    useEffect(() => {
        setTimeout(() => {
            fetch(url, { signal: abortController.signal })
            .then(res => {
                if(!res.ok){
                    throw Error('Could not fetch data')
                }
                return res.json()
            })
            .then(data => {
                setData(data)
                setIsPending(false)
                setError(null)
            })
            .catch(err => {
                if( err.message === "AbortError" ){
                    console.log('fetch aborted')
                } else {
                    setIsPending(false) 
                    setError(err.message)
                }

            })
        }, 1000)
        
        //return () => abortController.abort()

    }, [ url ]) //Only runs if these values change (dependency array)

    return { data, isPending, error }
}
 
export default useFetch;