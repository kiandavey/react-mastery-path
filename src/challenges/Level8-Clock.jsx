// src/challenges/Level8-Clock.jsx
import { useState, useEffect } from 'react';

export default function Level8() {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    
    const timerId = setInterval(() => {
      console.log("Tick Tock...");
      setTime(new Date());
    }, 1000);
    
    return () => {
      console.log("Cleaning up timer!");
      clearInterval(timerId);
    };

  }, []); 

  return (
    <div style={{ textAlign: 'center', marginTop: '50px' }}>
      <h1>Level 8: The Clock</h1>
      
      <div style={{ 
        fontSize: '80px', 
        fontFamily: 'monospace', 
        border: '5px solid red', 
        display: 'inline-block',
        padding: '20px',
        backgroundColor: 'black',
        color: 'red',
        borderRadius: '10px'
      }}>
        {time.toLocaleTimeString()}
      </div>
      
      <p>Check your console to see the "Tick Tock"</p>
    </div>
  );
}