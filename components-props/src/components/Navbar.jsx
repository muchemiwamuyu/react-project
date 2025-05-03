import React, { useState } from 'react'

function Navbar() {
  const [isOpen, setisOpen] = useState(false);

  return (
    <header className='bg-black text-white m-2 rounded shadow-lg shadow-black relative group'>
      <h1>Hello there, this is edwins components page</h1>
        <nav className='text-center space-x-3 p-3'>
            <a href="#">Home</a>
            <a href="#">About</a>
            <a href="#">Services</a>
        </nav>
        <div className='w-10 h-10 rounded-full bg-white absolute group top-4 right-4'></div>
    </header>
  )
}

export default Navbar