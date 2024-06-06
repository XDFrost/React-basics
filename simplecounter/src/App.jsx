import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  let [count, setCount] = useState(0)

  const addcount = () => {
    count=count+1
    setCount(count)
  }

  const removecount = () => {
    count=count-1
    setCount(count)
  }

  return (
    <>
      <h1>Counter Value: {count}</h1>
      <button onClick={addcount}>Add count</button>
      <br/>
      <button onClick={removecount}>Remove count</button>
    </>
  )
}

export default App
