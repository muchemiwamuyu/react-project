import React, { useEffect, useState } from 'react'
import {useParams, Link} from 'react-router-dom'

function CharacterDetails() {
    const {id} = useParams();
    const [character, setCharacter] = useState(null);
    useEffect(() => {
        fetch(`https://rickandmortyapi.com/api/character/${id}`)
        .then(response => response.json())
        .then(data => setCharacter(data))
    }, [id])

    if(!character) {
        return <p>Loading...</p>
    }
  return (
    // All list characters
    <div>CharacterDetails
        
    </div>
  )
}

export default CharacterDetails