import React from 'react'

function Decrement({count, decrement}) {
  return (
    <div>
        {/* <h1>Count: {count}</h1> */}
        <button onClick={decrement}>Decrement</button>
    </div>
  )
}

export default Decrement