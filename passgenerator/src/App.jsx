import { useState , useCallback, useEffect, useRef} from 'react'

function App() {
  let [length, setlength] = useState(8);
  let [number_allowed, set_num] = useState(false);
  let [characters_allowed, set_char] = useState(false);
  let [password, setpassword] = useState("");
  const [color, setcolor] = useState("blue")

  // useRef()

  const pass_ref = useRef(null)
  const copyPassword = useCallback(() => { 
    window.navigator.clipboard.writeText(password)
    pass_ref.current?.select();           // When password is copied, it will also get selected ; ? means optional beacuse value can be null
  }, [password])

  // useCallback()

  const passwordgen = useCallback(() => {             // Will rerun if anything in dependency array changes ; Only for optimization
    let pass = ""
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
    
    if(number_allowed) {
      str+="0123456789"
    }
    if(characters_allowed) {
      str+="!@#$%^&*()_+-=[]{}|;:',.<>/?~"
    }

    for(let i = 1; i<=length ; i++) {
      let char = Math.floor(Math.random() * str.length + 1)
      pass += str.charAt(char)
    }
    setpassword(pass)

  }, [length, number_allowed, characters_allowed, setpassword])           // These method states will be stored in memory and hence will optimize i.e. if any dependency is changes, we'll have a previous state from memory to copy all the same features of method

  //useEffect()

  useEffect(() => {             // Will rerun if anything in dependency array changes
    passwordgen()
  }, [length, number_allowed, characters_allowed, passwordgen])           // These dependencies are not for optimization, but for rerunning if something is changed

  return (
    <>
      <div className='w-full max-w-md mx-auto shadow-md rounded-lg px-4 py-3 my-8 text-orange-500 bg-gray-800 font-bold'>

        <h1 className='text-4xl text-center text-white'>Password Generator</h1>

        <br/>

        <div className='flex shadow rounded-lg overflow-auto mb-4'>
          <input type='text'
          value={password}
          className='outline-none w-full py-1 px-3'
          placeholder='Password'
          readOnly
          ref={pass_ref}/>

          <button onClick={copyPassword}
          className='outline-none bg-blue-700 text-white px-3 py-0.5 shrink-0'>COPY</button>
        </div>

        <div className='flex text-sm gap-x-2'>
          <div className='flex items-center gap-x-1'>
            <input type = "range"
            min={8}
            max={100}
            value={length}
            className='cursor-pointer'
            onChange={(e) => {setlength(e.target.value)}}
            />

            <label>Length: {length}</label>
          </div>

          <div className='flex items-center gap-x-1'>
            <input type='checkbox'
            defaultChecked = {number_allowed}
            id = "numberInput"
            onChange={() => {
              set_num((prev) => !prev);
            }}
            />

            <label>Numbers</label>
          </div>

          <div className='flex items-center gap-x-1'>
            <input type='checkbox'
            defaultChecked = {characters_allowed}
            id = "characterInput"
            onChange={() => {
              set_char((prev) => !prev);
            }}
            />

            <label>Characters</label>
          </div>
        </div>

      </div>
    </>
  )
}

export default App
