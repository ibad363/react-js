import { useState } from 'react'
import './App.css'

function App() {
  let [count,setCount] = useState(1)
  return (
    <>
    <div>
      The Count is {count} <br/><br/>
      <button onClick={()=>{setCount(count + 1)}}>Update Count</button>
    </div>
    </>
  )
}

export default App
