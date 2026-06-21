import { useState , useEffect} from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  useEffect(()=>{
    alert('render everytime')

  })
useEffect(()=>{
  alert('one time only')
  },[])
  
  useEffect(()=>{
  alert('i am only render when count changes')
  },[count])

  return (
    <>

    <button onClick={()=>setCount(count + 1)}>Click me {count}</button>
    </>
  )
}

export default App
