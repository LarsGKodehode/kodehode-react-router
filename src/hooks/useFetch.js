import { useState, useEffect } from "react"

function useFetch(url) {
  const [ isLoading, setIsLoading ] = useState(true)
  const [ data, setData ] = useState(null)
  const [ error, setError ] = useState(false)

  useEffect(
    () => {
      fetch(url)
        .then(response => response.json())
        .then(data => setData(data))
        .catch(error => setError(error))
        .finally(() => setIsLoading(false))
    },
    []
  )

  return {
    isLoading,
    data,
    error,
  }
}

export default useFetch