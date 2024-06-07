import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [color, setcolor] = useState("grey")
  return (
    <div 
    className="w-full h-screen duration-200"
    style = {{backgroundColor : color}}>
      
      <div 
      className='fixed flex flex-wrap justify-center insert-x-0 px-2 bottom-12'>

        <div 
        className='flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-2 rounded-3xl'>

          <button 
          className='px-4 py-1 rounded-full' 
          onClick={() => setcolor('red')} 
          style={{backgroundColor : 'red'}}>
          Red </button>

          <button 
          className='px-4 py-1 rounded-full' 
          onClick={() => setcolor('Blue')} 
          style={{backgroundColor : 'Blue'}}>
          Blue </button>

          <button 
          className='px-4 py-1 rounded-full' 
          onClick={() => setcolor('green')} 
          style={{backgroundColor : 'green'}}>
          Green </button>

        </div>
      </div>
    </div>
  )
}

export default App
