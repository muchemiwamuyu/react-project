import React, {useEffect, useState} from 'react'
import axios from 'axios';

function Nasa() {
    const [nasaData, setNasaData] = useState(null);
    const BASE_URL = import.meta.env.VITE_NASA_BASE_URL;
    const API_KEY = import.meta.env.VITE_NASA_API_KEY;

    useEffect(() => {
        const fetchNasaData = async () => {
            try {
               const response = await axios.get(`${BASE_URL} ? api_key= ${API_KEY}`)
               setNasaData(response.data)
            } catch (error) {
                console.error("Error fetching from NASA api", error)
            }
        };

        fetchNasaData()
    }, [])
  return (
    <>
    <h1>Nasa Apod</h1>
    <div>
        {nasaData.map((datas) => {
            <div>
                <h2 key={datas.id}>{datas.name}</h2>
            </div>
        })}
    </div>
    </>
    
  )
}

export default Nasa