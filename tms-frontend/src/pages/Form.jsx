import React, { useState } from 'react'
import { addTask } from '../api/Taskapi.js';
import Task from './Tasks.jsx';

function Form({refreshtasks}) {
    const [tasks, setTasks] = useState([]);
    const [name, setName] = useState(""); //for title
    const [input, setUserInput] = useState(""); // for user input
    const [showList, setShowList] = useState(false) // for handling showing of the list 

const API_URL = "http://localhost:5000/tasks";




          // adding task function
const addTask = async (e) => {
  e.preventDefault();
  setShowList(!showList);
  const newTask = { name: "New Task", description: "Sample task" };
  if (!input.trim()) 
  try {
      const res = await fetch(API_URL, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(input)
      });
      const data = await res.json();
      setTasks([...tasks, newTask]); // Update state with the new task
  } catch (err) {
      console.error("Error adding task:", err);
  }
};

  return (
    <div>
        <h1 className='text-center text-lg font-bold shadow-md shadow-gray-800 m-4 rounded'>TASK MANAGER</h1>
        <form  className=' grid justify-center items-center text-center p-4 m-4 shadow-md shadow-black rounded space-y-3'>
            <label>Title</label>
            <input 
            value={name}
            onChange={(e) => setName(e.target.value)}
            type="text"
            className='border-2 border-black rounded text-center'
            placeholder='input task name...'
             />
            <label>Description</label>
            <input 
            type="text"
            value={input}
            onChange={(e) => setUserInput(e.target.value)}
            className='border-2 border-black rounded p-3 text-center'
            placeholder='input task here...'
             />
            <button type='submit' className='px-2 py-2 bg-blue-700 text-lg m-4 rounded font-bold text-white' onClick={addTask}>Submit</button>
        </form>
        {showList && <Task /> }
    </div>
  )
}

export default Form