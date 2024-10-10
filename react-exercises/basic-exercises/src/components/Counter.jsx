import React, { useState } from 'react'

function Counter() {
    const [count, setCount] = useState(0)
  return (
    <div>
        <h1>You Clicked {count} Times</h1>
        <button onClick={() => setCount(count+1)}>Increment</button>
        <button onClick={() => setCount(count-1)}>Decrement</button>
    </div>
  )
}

export default Counter