import axios from 'axios';
import React, {useEffect, useState} from 'react'

function Repos() {
    const [userData, setUserData] = useState([]);
    const BASE_URL = import.meta.env.VITE_BASE_URL;
    const API_KEY = import.meta.env.VITE_GITHUB_REPOS;

    useEffect(() => {
        const fetchUsers = async () => {
            try {
                const response = await axios.get(`${BASE_URL}?api_key= ${API_KEY}`);
                setUserData(response.data[0]);
            } catch (error) {
                console.error("there was an error loading data from api", error)
            }
        }

        fetchUsers();
    }, [])
  return (
    <div className='h-screen'>
        <h1>Github repos</h1>
        <div>
            {userData ? (
                <div>
                    <h3>{userData.id}</h3>
                    <p>{userData.login}</p>
                </div>
            ) : (
                <p>Loading...</p>
            )}
        </div>
    </div>
  )
}

export default Repos