// import { Home } from 'lucide-react';
import React, {useState} from 'react'
import Home from '../components/Home'


function Navbar() {
    const [showBox, setBox] = useState(false);
  return (
    <div>
        <h1 className='text-black text-2xl m-4 font-bold'>Hello there, Welcome to your <span className='text-rose-500'>Notes app</span></h1>
        <button className='px-3 py-3 bg-blue-700 font-bold m-4 rounded shadow shadow-md shadow-black' onClick={() => setBox(!showBox)}>Create new note</button>
        {showBox && <Home/>}
    </div>
  )
}

export default Navbar