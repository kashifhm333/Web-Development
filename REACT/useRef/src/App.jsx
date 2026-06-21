import { useState,useEffect, useRef } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import NavBar from './components/NavBar'
function App() {
  const [count, setCount] = useState(0)
  // it will not change value as you click on count
  // const a = useRef(0);


  // now i will use for targeting the element with out DOM manipulation
  const a = useRef();

    // useEffect(() => {
    //   a.current = a.current + 1;
    //     console.log(`useEffect called and the value of a is ${a.current}`);
    //   });


    useEffect(()=>{
      console.log(`first rendering ...`)
      a.current.style.backgroundColor = "red";

    })





  return (
    <>
      <NavBar />
    
      

      <div className="btn">
        <button
          type="button"
          className="counter"
          onClick={() => setCount((count) => count + 1)}
          ref={a}
        >
          Count is {count}
        </button>
      </div>


    </>
  )
}

export default App
