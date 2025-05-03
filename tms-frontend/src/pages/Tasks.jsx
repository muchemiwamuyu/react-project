import React from 'react'

import { useState, useEffect } from "react";

const API_URL = "http://localhost:5000/tasks";

// deleting task

function Task() {
    const [tasks, setTasks] = useState([]);

    // Fetch tasks when the page loads
    useEffect(() => {
        fetch(API_URL)
            .then(res => res.json())
            .then(data => setTasks(data))
            .catch(err => console.error("Error fetching tasks:", err));
    }, []);

    return (
        <div className='p-4 m-4 text-lg'>
            <h1 className='text-rose-800 font-bold'>Your Tasks...</h1>
            <ul>
                {tasks.map(task => (
                  <>
                  <div key={task._id} >
                    <li>{task.name}</li>
                    <li>{task.description}</li>
                  </div>
                  </>
                    
                ))}
            </ul>
        </div>
    );
}

export default Task;
