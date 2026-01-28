import { useEffect, useState } from 'react';


export default function Arena2() {
    const [searchedName, setSearchedName] = useState("");
    const [characters, setCharacters] = useState([]);

    const visibleCharacters = characters.filter(char => 
        char.name.toLowerCase().includes(searchedName.toLowerCase()
    ));

    useEffect(() => {
        
        fetch("https://rickandmortyapi.com/api/character")
        .then(response => {
            if(!response.ok) {
                throw new Error("Network response was not ok")
            }
            return response.json();
        })
        .then(data => {
            setCharacters(data.results);
        })
        .catch(error => {
            console.error("Fetch error: ", error);
        });

    }, []);
    
    return(
        <div>
            <h2 style={{color: 'orange'}}>Arena Challenge 2: Search</h2>

            <label>
                Search: 
                <input
                    type="text"
                    placeholder="Enter name..."
                    value={searchedName}
                    onChange={(e) => setSearchedName(e.target.value)}
                />
            </label>

            {characters.length === 0 ? (
                <p>Loading...</p>
            ) : (
                <div>
                   {visibleCharacters.map(char => (
                    <div key={char.id} style={{ fontWeight: 'bold' }}>
                        <img src={char.image} alt={char.name} width="150" />
                        <p>Name: {char.name}</p>
                        <p>Status: {char.status}</p>
                    </div>
                    ))}
                </div>
            )}
        </div>
    );
}