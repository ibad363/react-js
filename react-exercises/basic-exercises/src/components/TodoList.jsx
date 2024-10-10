import React, { useState } from 'react'

const TodoList = () => {
    const [todos, setTodos] = useState([])

    const handleChange = (e) => {e.target.value}
  return (
    <div>
        <input type="text" onChange={handleChange} value={todos} placeholder='what you want to do'/>



        {todos.map((todo,index)=>(
            <li key={index}>{todo}</li>
        ))}
    </div>
  )
}

export default TodoList