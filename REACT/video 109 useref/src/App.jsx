import { useState , useRef } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  // let a = 10;
  const a = useRef(0)

  const handleClick = () => {
    // a = a + 1;
    a.current = a.current + 1;
    console.log(a.current);
  }


  return(
    <>
    <button onClick={handleClick}>Click me</button>


    <button ref={btn}>i am button 2</button>
     
    
    
    </>
  )
}

export default App
