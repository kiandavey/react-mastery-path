// src/challenges/Level2-Spoiler.jsx
import { useState } from 'react';

export default function Level2() {
  const [isVisible, setIsVisible] = useState(false);  

  function toggleSecret() {
    setIsVisible(!isVisible);
    alert("Button clicked! Now connect the state.");
  }

  return (
    <div>
      <h1>Level 2: The Spoiler Button</h1>
      
      <button onClick={toggleSecret}>
        {isVisible ? "Hide" : "Show"}
      </button>

      {isVisible && (
        <div style={{ marginTop: '20px', border: '1px solid red', padding: '10px' }}>
          ⚠️ SPOILER: Darth Vader is Luke's Father! ⚠️
        </div>
      )}
      
    </div>
  );
}