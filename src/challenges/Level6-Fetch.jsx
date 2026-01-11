// src/challenges/Level6-Fetch.jsx
import { useState, useEffect } from 'react'; 

export default function Level6() {
  const [user, setUser] = useState(null); 

  useEffect(() => {
    
    fetch("https://jsonplaceholder.typicode.com/users/1")
      .then(response => response.json()) 
      .then(data => {
        setUser(data);
        console.log("Data loaded:", data);
      });
      
  }, []); 

  return (
    <div style={{ padding: '20px', border: '2px dashed purple', marginTop: '50px' }}>
      <h1>Level 6: The Watchman</h1>
    
      {!user ? (
        <p>Loading user data...</p>
      ) : (
        <div>
          <h2>👤 Name: {user.name}</h2> 
          <p>📧 Email: {user.email}</p>   
          <p>🌐 Website: {user.website}</p> 
        </div>
      )}
      
    </div>
  );
}