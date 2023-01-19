import { useState } from 'react'

function HookState() {
  const [count, setCount] = useState(0)

  function handleClick() {
    setCount(
      (oldCount) => oldCount + 1
    )
  }

  return (
    <div>
      <h3>{count}</h3>

      <button onClick={handleClick}>CLick Me!</button>
    </div>
  )
}