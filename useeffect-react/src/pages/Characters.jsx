import React, { useEffect, useState } from 'react'
import {Link} from 'react-router-dom'
import axios from 'axios';

function Characters() {
    const [characters, setCharacters] = useState(null);

    useEffect(() => {
        const fetchCharacters = async () => {
            try {
                const response = await axios.get("https://rickandmortyapi.com/api/character")
                setCharacters(response.data)
            } catch (error) {
                console.error("Error loading rick and morty character", error)
            }
        }
        fetchCharacters();
    }, [])

  return (
    <>
    <div>Characters
        {characters ? (
            <div key={characters.id}>
                <h1>{characters.name}</h1>
                <p>{characters.location}</p>
            </div>
        ): (
            <p>No user data available....</p>
        )}
    </div>
    </>
    
  )
}

export default Characters