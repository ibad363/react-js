import React, { useState } from 'react'

function TodoList() {
    const [todos, setTodos] = useState(["eating"])
    const [inputValue, setInputValue] = useState("")

    const handleChange = (e) =>{
        setInputValue(e.target.value)
    }

    const handleClick = (e) =>{
        setTodos([...todos, inputValue])
        e.preventDefault()
        setInputValue("")
    }

  return (
    <div>
            <input type="text" placeholder='add todos' value={inputValue} onChange={handleChange}/>
            <button onClick={handleClick}>Add Todo</button>
        <h3>Todo List</h3>
        {todos.map((todo,index) => (
            <li key={index}>{todo}</li>
        ))}
    </div>
  )
}

export default TodoList