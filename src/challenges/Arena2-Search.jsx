import { useEffect, useState } from 'react';


export default function Arena2() {
    const [user, setUser] = useState(null);

    useEffect(() => {
        
        fetch("https://rickandmortyapi.com/api/character")
        .then(response => {
            if(!response.ok) {
                throw new Error("Network response was not ok")
            }
            return response.json();
        })
        .then(data => {
            setUser(data);
        })
        .catch(error => {
            console.error("Fetch error: ", error);
        });

    }, []);
    
    return(
        <div>
            <h2 style={{color: 'orange'}}>Arena Challenge 2: Search</h2>

            {!user ? (
                <p>Loading...</p>
            ) : (
                <div>

                </div>
            )}
        </div>
    );
}