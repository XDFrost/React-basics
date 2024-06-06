import { useState } from 'react'
import './App.css'

function App() {
  let count = 15;

  let [counter, setcounter] = useState(count)
  
  const addValue = () => {
    counter+=1
    if(counter>20) counter = 20
    console.log("Value added : "+ counter);
    setcounter(counter)
  }
  
  const removeValue = () => {
    counter-=1
    if(counter < 0) counter = 0
    console.log("Value Removed : " + counter);
    setcounter(counter)
  }
  return (
    <>
      
      <h1> Running vite </h1>
      <h2> Counter value: {counter}</h2>

      <button onClick={addValue}> Add value </button> 
      <br/>
      <button onClick={removeValue}> Remove value </button>

    </>
  )
}

export default App
