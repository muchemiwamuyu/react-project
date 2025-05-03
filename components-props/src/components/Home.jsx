import React, { useState } from 'react'

const User = {
    name: "Developer < />",
    age: 21,
    nationality: "Kenyan",
    imageUrl: '/src/assets/dog.jpg',
    isUser: true
}

function Home() {
    const [userInput, setuserInput] = useState("");
    const [display, setDisplay] = useState("");
    const [name, setName] = useState("");

    
    const handleClick = () => {
        setDisplay(userInput);
    }

    const handleSubmit = (e) => {
        e.preventDefault();
    }

    return (
        <div className='m-4 w-1/2 bg-red-800 p-4 rounded relative group'>
            <h1 className='text-xl font-bold text-white mb-3'>{User.name}</h1>
            <img className='w-52 rounded' src={User.imageUrl} alt='photo of dog' />
            {/* extra user-input box */}
            <div className='w-1/2 bg-white absolute group top-10 right-4 p-4 rounded space-y-3 shadow-lg shadow-black'>
                <label>Enter your name here</label>
                <input
                    type="text"
                    className='border-2 border-black text-center'
                    placeholder='enter name here...'
                    value={userInput}
                    onChange={(e) => setuserInput(e.target.value)}
                />
                <button className='px-2 py-2 bg-rose-800 ml-3 rounded shadow-lg shadow-black' onClick={handleClick}>submit</button>

                {display && <p className='text-rose-800 font-bold'>{display}</p>}
            </div>
            {/* forms in react */}
            <form className='bg-white grid justify-center text-center m-4 p-4 rounded shadow-lg shadow-black'>
                <h2 className='font-bold text-lg'>Login form</h2>
                <label>email</label>
                <input 
                type="email"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className='border-2 border-black'
                 />
                <br></br>
                <label>username</label>
                <input 
                type="text"
                className='border-2 border-black'
                 />
                <br></br>
                <button className='px-2 py-2 bg-green-700 rounded shadow-lg shadow-gray-800' onClick={handleSubmit}>submit</button>
            </form>

        </div>
    )
}

export default Home