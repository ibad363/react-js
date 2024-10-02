import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [showBtn, setShowBtn] = useState(false)
  const [todos,setTodos] = useState([
    {
      title: "I am Todo 1",
      desc: "I am Description 1"
    },
    {
      title: "I am Todo 2",
      desc: "I am Description 2"
    },
    {
      title: "I am Todo 3",
      desc: "I am Description 3"
    },
  ])

  return (
    <>
      <h1>Vite + React</h1>
      {todos.map((todo) => {
        return (
          <div key={todo.title} className="m-6 border-2 border-slate-950">
            <div>{todo.title}</div>
            <div>{todo.desc}</div>
          </div>
        );
      })}
      <br />
      {showBtn && (
        <button>This button is only show when showbtn is true</button>
      )}
      <br /> <br />
      {showBtn ? (
        <button>showbtn is true</button>
      ) : (
        <button>showbtn is false</button>
      )}
      <div className="card">
        <button onClick={() => setShowBtn(!showBtn)}>Show Button</button>
      </div>
    </>
  );
}

export default App