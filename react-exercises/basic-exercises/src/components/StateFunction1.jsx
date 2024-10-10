import { useState } from "react"

const StateFunction1 = () => {
    const [randomNumber, setRandomNumber] = useState(()=>{
        return Math.floor(Math.random() * 100)
    })

    function generateNewRandomNumber (){
        const newRandomNumber = Math.floor(Math.random() * 100)
        setRandomNumber(newRandomNumber)
    }

  return (
    <div>
        <h1>Random Number: {randomNumber}</h1>
        <button onClick={generateNewRandomNumber}>Generate Random Number</button>
    </div>
  )
}

export default StateFunction1