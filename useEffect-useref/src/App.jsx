import { useEffect, useRef, useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  const inputElem = useRef();
  const inputElem2 = useRef();

  const btnClicked = () => {
    inputElem.current.style.backgroundColor = "blue";
    inputElem2.current.style.backgroundColor = "red";
  };

  return (
    <>
      <input type="text" ref={inputElem} />
      <br />
      <input type="text" ref={inputElem2} />
      <br />
      <button onClick={btnClicked}>Click Me</button>
    </>
  );
}

export default App;
