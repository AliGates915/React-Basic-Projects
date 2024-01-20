import { useState } from 'react'
import './App.css'

function App() {

  let [counter, setCounter] = useState(10)

  const addValue = () => {
    counter = counter + 1;
    setCounter(counter);
  }
  const removeValue = () => {
    counter = counter - 1;
    setCounter(counter);
  }
  
  return (
    <>
     <h1>Chai aur React</h1>
     <p>{counter}</p>  
     <button onClick={addValue}>Increase Value</button> 
     <button onClick={removeValue}>Decrease Value</button>
    </>
  )
}

export default App
