import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './components/Navbar'
import Prop from './pages/prop'
import Greeting from './components/Greeting'
import Home from './components/Home'


function App() {

  return (
    <>
    <Navbar />
    <Home />
    </>
  )
}

export default App
