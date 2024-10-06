import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  
  function handleClick (){
    alert ("I am Clicked")
  }
  
  return (
    <>
      <div className="button">
        <button onClick={handleClick}>Click Me</button>
      </div>
    </>
  )
}

export default App
