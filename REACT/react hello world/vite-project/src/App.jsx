import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
// import './App.css'
import Navbar from './component/Navbar'


function App() {
  const [value, setValue] = useState(0)

  return (
    <>
      <Navbar logotext="Ronaldo is the best" />
      <div className="ronaldo">
        <div className="value">{value}</div>
        <button onClick={()=>{setValue(value + 1)}}>Click Me</button>
        
      </div>
    </>
  )
}

export default App
