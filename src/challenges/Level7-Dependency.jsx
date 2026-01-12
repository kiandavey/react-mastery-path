// src/challenges/Level7-Dependency.jsx
import { useState, useEffect } from 'react';

export default function Level7() {
  const [id, setId] = useState(1);
  
  const [user, setUser] = useState(null);

  useEffect(() => {
    console.log("Fetching user #", id);
    setUser(null); 
    
    fetch(`https://jsonplaceholder.typicode.com/users/${id}`)
      .then(response => response.json())
      .then(data => {
        setUser(data);
      });

  }, [id]); 

  return (
    <div style={{ padding: '30px', border: '2px solid blue', marginTop: '50px' }}>
      <h1>Level 7: The Dependency Array</h1>
      
      <div style={{ marginBottom: '20px' }}>
        <label>Current ID: {id}</label>
        
        <div style={{ marginTop: '10px' }}>
          <button 
            disabled={id === 1} 
            onClick={() => setId(id - 1)}
          >
            Previous
          </button>
          
          <button 
            style={{ marginLeft: '10px' }} 
            onClick={() => setId(id + 1)}
          >
            Next User
          </button>
        </div>
      </div>

      {!user ? (
        <h3>Loading User #{id}...</h3>
      ) : (
        <div style={{ padding: '20px', background: '#000000', borderRadius: '10px' }}>
          <h2>{user.name}</h2>
          <p>{user.email}</p>
          <p>{user.phone}</p>
        </div>
      )}
    </div>
  );
}