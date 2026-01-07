// src/challenges/Level3-Score.jsx
import { useState } from 'react';

export default function Level3() {
  // TODO: 1. Create state for "homeScore" and "guestScore". Both start at 0.
  const [homeScore, setHomeScore] = useState(0);
  const [guestScore, setGuestScore] = useState(0);

  return (
    <div>
      <h1>Level 3: Scoreboard</h1>
      
      <div style={{ display: 'flex', textAlign: 'center', gap: '50px' }}>
        
        {/* HOME TEAM */}
        <div style={{ border: '2px solid cyan', padding: '20px', borderRadius: '10px' }}>
          <h2>LAKERS</h2>
          <h1 style={{ fontSize: '60px', margin: '10px 0' }}>{homeScore}</h1>
          <div style={{ display: 'flex', gap: '5px' }}>
            <button onClick={() => setHomeScore(homeScore + 1)}>+1</button>
            <button onClick={() => setHomeScore(homeScore + 2)}>+2</button>
            <button onClick={() => setHomeScore(homeScore + 3)}>+3</button>
          </div>
        </div>

        {/* GUEST TEAM */}
        <div style={{ border: '2px solid orange', padding: '20px', borderRadius: '10px' }}>
          <h2>CELTICS</h2>
          <h1 style={{ fontSize: '60px', margin: '10px 0' }}>{guestScore}</h1>
          <div style={{ display: 'flex', gap: '5px' }}>
            <button onClick={() => setGuestScore(guestScore + 1)}>+1</button>
            <button onClick={() => setGuestScore(guestScore + 2)}>+2</button>
            <button onClick={() => setGuestScore(guestScore + 3)}>+3</button>
          </div>
        </div>

      </div>
      
      <button style={{ marginTop: '20px', marginLeft: '220px'}} onClick={() => {
        setHomeScore(0);
        setGuestScore(0);
      }}>Reset</button>

    </div>
  );
}