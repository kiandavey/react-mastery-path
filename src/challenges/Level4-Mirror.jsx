// src/challenges/Level4-Mirror.jsx
import { useState } from 'react';

export default function Level4() {
  const [name, setName] = useState("");
  const [title, setTitle] = useState("");

  return (
    <div>
      <h1>Level 4: The Mirror</h1>
      
      {/* THE CONTROLS */}
      <div style={{ marginBottom: '20px', display: 'flex', flexDirection: 'column', gap: '10px', maxWidth: '300px' }}>
        
        <label>
          Name:
          <input 
            type="text" 
            placeholder="Enter name..."
            value={name}
            onChange={(e) => setName(e.target.value)}
            style={{ marginLeft: '10px', padding: '5px' }}
          />
        </label>

        <label>
          Job Title:
          <input 
            type="text" 
            placeholder="Enter job..."
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            style={{ marginLeft: '10px', padding: '5px' }}
          />
        </label>
      </div>

      {/* THE RESULT (ID CARD) */}
      <div style={{ 
        border: '3px solid black', 
        width: '300px', 
        height: '150px',
        padding: '20px',
        background: 'black',
        borderRadius: '15px',
        boxShadow: '5px 5px 15px rgba(0,0,0,0.3)'
      }}>

        <h2 style={{ margin: 0, color: 'white' }}>{name || "Unknown"}</h2>
        <p style={{ margin: 0, color: 'gray' }}>{title || "No title provided"}</p>
        
        <div style={{ marginTop: '40px', fontSize: '12px'}}>
          OFFICIAL ID CARD
        </div>
      </div>

    </div>
  );
}