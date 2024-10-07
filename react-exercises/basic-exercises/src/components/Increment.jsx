import React from 'react'

function Increment({count, increment}) {
  return (
    <div>
        <h1>Count: {count}</h1>
        <button onClick={increment}>Increment</button>
    </div>
  )
}

export default Increment