import { useEffect, useState } from 'react'
import './App.css'
import { ThemeProvider } from './context/theme'
import ThemeButton from './components/ThemeButton'
import Card from './components/Card'
import Test from './components/Test'

function App() {
  const [ThemeMode, setThemeMode] = useState("light")

  const lightTheme = () => {
    setThemeMode("light")
  }

  const darkTheme = () => {
    setThemeMode("dark")
  }

  useEffect(() => {
    document.querySelector(".bgt").classList.remove("light", "dark")
    document.querySelector(".bgt").classList.add(ThemeMode)
  }, [ThemeMode])

  return (
    <ThemeProvider value={{ThemeMode, lightTheme, darkTheme}}>
    <div className='bgt min-h-full min-w-full bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700'>
      <ThemeButton />      
      <Test/>
      
      {/* <div className=" flex flex-wrap min-h-screen items-center">
          <div className="w-full">
              <div className="w-full max-w-sm mx-auto flex justify-end mb-4">
                <ThemeButton />
              </div>
              <div className="w-full max-w-sm mx-auto">
                <Card/>
              </div>
          </div>
      </div> */}
      


      </div>
    </ThemeProvider>  
  )
}

export default App 
