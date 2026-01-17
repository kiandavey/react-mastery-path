// src/App.jsx
import { useState } from 'react';
import Level1 from './challenges/Level1-Hero'
import Level2 from './challenges/Level2-Spoiler'
import Level3 from './challenges/Level3-Score'
import Level4 from './challenges/Level4-Mirror'
import Level5 from './challenges/Level5-Playlist'
import BossLevel1 from './challenges/BossLevel1'
import Level6 from './challenges/Level6-Fetch'
import Level7 from './challenges/Level7-Dependency'
import Level8 from './challenges/Level8-Clock'
import BossLevel2 from './challenges/BossLevel2';
import Level9 from './challenges/Level9-Context';
import Level10 from './challenges/Level10-Router';
import BossLevel3 from './challenges/BossLevel3';

function App() {
  const [showClock, setShowClock] = useState(true);

  return (
    <div>
      <Level1 />
      <Level2 />
      <Level3 />
      <Level4 />
      <Level5 />
      <BossLevel1 />
      <Level6 />
      <Level7 />
      <div style={{ textAlign: 'center', padding: '20px' }}>
      <button 
        style={{marginTop: '30px', padding: '10px' }}
        onClick={() => setShowClock(!showClock)}
      >
        {showClock ? "Hide Clock (Unmount)" : "Show Clock (Mount)"}
      </button>
      {showClock && <Level8 />}
    </div>
      <BossLevel2 />
      <Level9 />
      <Level10 />
      <BossLevel3 />
    </div>
  )
}

export default App