import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0);

  const increase = () => {
    setCount(count + 1);
  }
  const descrease = () => {
    setCount(count - 1);
  }

  return (
    <>
       <h1 className='text-xl font-bold text-rose-600'>This is a counter-app</h1>
       <span>{count}</span>
       <button className='m-3' onClick={increase}>increase</button> 
       <button className='m-4' onClick={descrease}>descrease</button> 

    </>
  )
}

export default App
