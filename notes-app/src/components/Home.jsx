import React, {useState} from 'react'

function Home() {
    const [inputText, showText] = useState("");
    const [showContainer, setContainer] = useState(false);
    return (
        <>
            <div className='m-4 shadow-lg shadow-black p-4 rounded bg-black transition duration-400 space-y-6'>
            <div className='text-white bg-white rounded text-center'>Hello there i am a very nice developer and you cant even see</div>
                <label className='underline text-violet-700 font-bold text-xl'>Write your notes here....</label>
                <input 
                type="text" 
                value={inputText}
                onChange={(e) => showText(e.target.value)}
                className='h-12 border border-3px border-black text-center text-white m-3 border border-3px border-white rounded'
                placeholder='enter your notes here'
                />
                <p className='text-white'>{inputText ? `Noting... ${inputText}` : "Start typing"}</p>
                <button className='m-2 bg-blue-600 px-3 py-3 rounded shadow-md shadow-red-800'>Save notes</button>
                <button className='m-2 bg-gray-600 px-3 py-3 rounded shadow-md shadow-white text-white' onClick={() =>setContainer(!showContainer)}>Add notes</button>
                {showContainer && <Home/>}
            </div>
        </>
    )
}

export default Home