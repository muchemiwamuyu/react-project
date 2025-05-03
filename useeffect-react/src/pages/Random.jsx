import axios from 'axios'
import React, { useEffect, useState } from 'react'

function Random() {
    const [users, setUsers] = useState(null)

    useEffect(() => {
        const fetchUsers = async () => {
            try {
                const response = await axios.get("https://randomuser.me/api/")
                setUsers(response.data.results[0]);
            } catch (error) {
                console.error("Error fetching apis", error)
            }
        }
        fetchUsers();
    }, [])
  return (
    <>
    <h1 className='text-black font-bold text-xl m-4'>Random Users</h1>
    <div className='w-1/2 flex justify-center m-4 p-4 shadow-md shadow-black rounded'>
        
        {users ? (
            <div className="text-center">
            <img className="w-32 h-32 rounded-full" src={users.picture.large} alt="User" />
            <h2 className="text-lg font-semibold mt-4">{users.name.first} {users.name.last}</h2>
            <p className="text-gray-600">{users.email}</p>
          </div>
        ): (
            <p className="text-gray-500">No user data available.</p>
        )}
    </div>
    </>
    
    
  )
}

export default Random