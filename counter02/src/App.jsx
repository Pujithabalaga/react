import { useState } from 'react'
import './App.css'

function App() {
  const [counter, setCounter] = useState(11)
  const addFour = () => {
   setCounter((prevCounter) => prevCounter + 1)
   setCounter((prevCounter) => prevCounter + 1)
   setCounter((prevCounter) => prevCounter + 1)
   setCounter((prevCounter) => prevCounter + 1)
  }
  const addValue = () => {
    setCounter(counter+1)
  }
  const removeValue = () => { 
    setCounter(counter - 1)
  }
  
  return (
    <>
      <h1>Counter Value {counter}</h1>
      <h2>value : {counter} </h2>
      <button onClick={addValue}>Add value</button> {" "}
      <button onClick={removeValue}>remove value</button>{" "}
      <button onClick={addFour}>Add 4</button>
      <p>footer: {counter}</p>
    </>
  )
}

export default App