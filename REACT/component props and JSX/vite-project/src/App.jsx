import { useState } from 'react'

import './App.css'
import Card from './components/card'

function App() {

  return (
    <>
    <div className="cards">
      <Card title="Card 1" paragraph="This is the first card." />
      <Card title="Card 2" paragraph="This is the second card." />
      <Card title="Card 3" paragraph="This is the third card." />
    </div>
    </>
  )
}

export default App
