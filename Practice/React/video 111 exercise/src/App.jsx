import { useState, useEffect } from 'react'
import './App.css'
import NavBar from './components/NavBar'

function App() {
  const [count, setCount] = useState(0)
  const [posts, setposts] = useState([])
  
  useEffect(()=>{
    fetch('https://jsonplaceholder.typicode.com/posts')
    .then(res=>res.json())
    .then(data=>{
      setposts(data)
    })
    .catch(error =>{
      console.error('Error fetching posts:', error);
    })

  },[])


  return (
    <>
      <NavBar />
    <div className='Middle'>
      <div className="container">
      <h1>API Posts</h1>
      <div className="cardcontainer"></div>
      {posts.map(post=>{
        return (
          <div className="card" key={post.id}>
          <h1>{post.userId}</h1>
          <h3>{post.title}</h3>
          <p>{post.body}</p>

        </div>
        )
      })}
    </div>
    </div>
    
    </>
  )
}

export default App
