import React, {useState} from 'react'
import Form from './Form'
import Tasks from './Tasks'
import Task from './Tasks';


function Home() {
    const [reload, setReload] = useState(false);
    const refreshtasks = () => setReload(!reload);
  return (
    <div>
        <Form refreshtasks={refreshtasks}/>
    </div>
  )
}

export default Home