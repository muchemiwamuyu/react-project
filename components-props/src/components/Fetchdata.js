import React, { useEffect, useState } from 'react'
import { db } from "../firebaseConfig";
import { collection, getDocs } from "firebase/firestore";


function Fetchdata() {
    const [users, setUsers] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const querySnapshot = await getDoc(collection(db, "users"));
                setUsers(querySnapshot.docs.map( (doc ) =>))
            } catch (error) {
                console.error('error fetching users', error);
            }
        }
    })
  return (
    <div>Fetchdata</div>
  )
}

export default Fetchdata