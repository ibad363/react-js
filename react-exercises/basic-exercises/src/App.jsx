import { useState } from 'react'
import './App.css'
import Greeting from "./components/Greeting"
import Person from "./components/Person"
import Product from "./components/Product"
import UserStatus from "./components/UserStatus"
import Weather from './components/Weather'
import UseSatePractice from './components/UseSatePractice'
import Increment from './components/Increment'
import Decrement from './components/Decrement'
import UserList from './components/UserList'
import ProductList from './components/ProductList'
import StateFunction1 from './components/StateFunction1'
import StateFunction2 from './components/StateFunction2'
import Counter from "./components/Counter"
import TodoList from './components/TodoList'

function App() {
  // const [count, setCount] = useState(0)
  return (
    <>
      {/* <section>
        <Greeting/>
        <Person name="Ibad" age={20}/>
        <Product name="Laptop" price={100000}/>
        <UserStatus/>
        <Weather/>
        <Increment count={count} increment={()=> setCount(prev=> prev+1)}/>
        <Decrement count={count} decrement={()=> setCount(prev=> prev-1)}/>
        <UserList/>
        <ProductList/>
        <StateFunction1/>
        <StateFunction2/>
        <Counter/>
        <TodoList/>
      </section> */}
      <div>
      </div>
    </>
  );
}

export default App