import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

  let Counter = 5

  const addValue = () => {
    console.log("clicked", Counter);
    Counter = Counter + 1 
  }

  return (
    <>
     <h1>Krish Nakrani</h1>
     <h2>Counter Value: {Counter}</h2>

     <button onClick={addValue}>Add Value</button>
     <button>Remove Value</button>
    </>
  )
}

export default App
