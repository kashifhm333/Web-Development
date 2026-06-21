import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'

function App() {
  const [text, setText] = useState("")
  const [isON, setIsON] = useState(false)
  const[name, setName] = useState("")

  const handleToggle = () => {
    setIsON(!isON)
  }


  const handleSubmit = ()=>{
    alert(`Hello, ${name}!`)
  }

  return (
    <div>
     <div className="input">
     <input type="text" onChange={(e)=>{setText(e.target.value)}}  />
     </div>
     print: {text}



    <h1>Toggle Example</h1>
    <div className="toggle">
      <button onClick={handleToggle}>
      {isON ? "ON" : "OFF"}
      </button>
    </div>


    <h1>Combined Example</h1>

    <div className="combined">
      <input type="text" onChange={(e)=>{
        setName(e.target.value)
      }} />

      <button onClick={handleSubmit}>Submit</button>
    </div>


    </div>
  )
}

export default App
