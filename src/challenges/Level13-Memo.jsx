// src/challenges/Level13-Memo.jsx
import { useState, useMemo } from 'react';

export default function Level13() {
  const [number, setNumber] = useState(0);
  const [text, setText] = useState("");

  const doubleNumber = (num) => {
    console.log("Running expensive calculation... 🐌");
    for (let i = 0; i < 1000000000; i++) {} 
    return num * 2;
  };
  
  const doubled = useMemo(() => {
    return doubleNumber(number);
  }, [number]); 

  return (
    <div style={{ padding: '20px', border: '2px solid pink', marginTop: '30px' }}>
      <h1>Level 13: The Optimizer (useMemo)</h1>

      <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
        
        <div>
          <label>Number: </label>
          <input 
            type="number" 
            value={number} 
            onChange={(e) => setNumber(parseInt(e.target.value) || 0)} 
          />
        </div>

        <h3>Result: {doubled}</h3>

        <hr />

        <div>
          <label>Unrelated Text: </label>
          <input 
            type="text" 
            placeholder="Type here..." 
            value={text} 
            onChange={(e) => setText(e.target.value)} 
          />
        </div>
        
        <p>Open Console. If you see "Running expensive..." when typing text, it's slow!</p>
      </div>
    </div>
  );
}