import React, {useEffect, useState} from 'react'

function User() {
    const [users, setUsers] = useState([])

    useEffect(() => {
        fetch("https://jsonplaceholder.typicode.com/users")
        .then((response) => response.json())
        .then((data) => setUsers(data))
    }, [])
  return (
    <div>
        <h1 className='text-red-700'>users</h1>
        <ul className='text-black'>
            {users.map((user) => (
                <li key={user.id}>
                    {user.name}
                </li>
            ))}
        </ul>
    </div>
  )
}

export default User