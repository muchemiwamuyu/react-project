import { useState } from 'react'
import React from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
// import Home from '../src/pages/User'
import User from '../src/pages/User'
import Nasa from './pages/Nasa'
import Repos from '../src/pages/Repos'
import Sample from './pages/Sample'
import Random  from './pages/Random'
import Character from './pages/Character'

function App() {
  // const [count, setCount] = useState(0)

  return (
    <>
      {/* <User/> */}
      {/* <Nasa/> */}
      {/* <Repos /> */}
      {/* <Sample/> */}
      {/* <Random/> */}
      <Character/>

    </>
  )
}

export default App
