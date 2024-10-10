import React,{ useEffect, useState,} from "react";

function StateFunction2() {
    const [name, setName] = useState(()=>{
        const savedName = localStorage.getItem("name")
        return savedName ? JSON.parse(savedName) : ""
    })

    useEffect(() => {
        localStorage.setItem("name", JSON.stringify(name));
    }, [name]);
    

    const handleChange = (event) =>{
        setName(event.target.value)
    }

  return (
    <div>
        <h1>Your Name: {name}</h1>
        <input type="text" onChange={handleChange} value={name} placeholder="Enter Your Name" />
        <button onClick={()=> setName("")}>Clear Name</button>
    </div>
  )
}

export default StateFunction2