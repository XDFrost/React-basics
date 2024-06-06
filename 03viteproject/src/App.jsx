import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from "./components/card"

function App() {

  const [count, setCount] = useState(0)
  let obj = {
    username : "Pratham",
    age : 21
  }
  let newArr = [1,2,3]
  
  return (
    <>
      <h1 className='bg-green-400 text-black p-4 rounded-xl mb-4' >Tailwind test</h1>

      {/* <Card channel = "first_channel" someobj = {obj} arr = {newArr}/> */}
      <Card username = "pratham" btn_txt = "Text_1"/>
      <Card username = "User_2"/>
      {/* <div className="relative h-[400px] w-[300px] rounded-md">
        <img
          src="https://images.unsplash.com/photo-1546961329-78bef0414d7c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTB8fHVzZXJ8ZW58MHx8MHx8&auto=format&fit=crop&w=800&q=60"
          alt="AirMax Pro"
          className="z-0 h-full w-full rounded-md object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent">
        </div>

        <div className="absolute bottom-4 left-4 text-left">
          <h1 className="text-lg font-semibold text-white">Delba</h1>
          <p className="mt-2 text-sm text-gray-300">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi, debitis?
          </p>
          <button className="mt-2 inline-flex cursor-pointer items-center text-sm font-semibold text-white">
            View Profile &rarr;
          </button>
        </div>
      </div> */}
    </>
  )
}

export default App
