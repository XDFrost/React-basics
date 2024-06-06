import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'

const Reactelement = {
  type : 'a',
  props : {
      href : 'https://google.com',
      target : '_blank'
  },
  children : 'Click me to visit google'
}

const anotherelement = (
  <a href = 'www.google.com' target = '_blank'> Google </a>
)

const vari = "Hello";
const reactelement_fromreact = React.createElement(
  'a',
  {
    href : "www.google.com",
    target : "_blank"
  },
  "click me to visit google",
  vari
)

function CheckIfWorksInMain() {
  return(
    <h1>This is written in main not in app</h1>
  )
}

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
  <>
    
    <App />
    {/* {Reactelement} won't work as it is an object and its syntax defies that of react render  */}
    <CheckIfWorksInMain/>
    {anotherelement}      {/* Works because syntax is followed */}
    {reactelement_fromreact}
  
  </>
  </React.StrictMode>,
)
