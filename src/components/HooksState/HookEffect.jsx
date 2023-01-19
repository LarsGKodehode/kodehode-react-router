import { useEffect, useState } from 'react'

function HookState() {
  // Any JavaScript is going to get called whenever this component rerender
  useEffect(
    () => {
      // Any logic inside her will be run whenever the component mount
      // or the elemnts of the depency array changes
      const timerID = setInterval(
        () => {},
        1000
      )

      return () => {
        // Clean up any side effects
        // Logic will be run when the component unmounts
        clearInterval(timerID)
      }
    },
    []
  )

  return (
    <div>
    </div>
  )
}


function FetchData() {
  const [data, setData] = useState(null)
  const [err, setErr] = useState(false)

  useEffect(
    () => {
      // Simple .then
      fetch()
        .then(res => res.json())
        .then(data => setData(data))
        .catch(err => setErr(err))
    },
    []
  )

  if (!data) {
    return (
      <div>
        <h1>Loading...</h1>
      </div>
    )
  }

  return (
    <div>
      {
        data && !err &&
        <p>{data}</p>
      }
    </div>
  )
}

function FetchData() {
  const [data, setData] = useState(null)

  useEffect(
    () => {
      async function fetchData() {
        const res = await fetch()
        const data = await res.json()

        setData(data);
      }

      fetchData()
    },
    []
  )

  return (
    <div>
    </div>
  )
}