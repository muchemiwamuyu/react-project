import React, {useState} from 'react'
import { createElement } from 'react';

function App() {
  const [input, setInput] = useState("");
  const [name, setName] = useState("");


  return (
    <div className='w-1/3 m-4 shadow-black shadow-lg rounded'>
      <label className='m-3'>
        Name:
        <input type="text" 
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder='type here...'
        className='border border-2px border-black m-3 rounded text-center'
        maxLength={18}
        />
      </label>

      <br />
      <p className='m-3'>Typed name: {name}</p>
      <Button/>
    </div>
    
    
  )
}

function Button() {
  return(
    <button className='px-2 py-2 bg-blue-600 m-3 rounded shadow-md shadow-black' onClick={handleClick => setName(input)}>Click here</button>
  )
}



export default App