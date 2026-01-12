// src/App.jsx
import Level1 from './challenges/Level1-Hero'
import Level2 from './challenges/Level2-Spoiler'
import Level3 from './challenges/Level3-Score'
import Level4 from './challenges/Level4-Mirror'
import Level5 from './challenges/Level5-Playlist'
import BossLevel1 from './challenges/BossLevel1'
import Level6 from './challenges/Level6-Fetch'
import Level7 from './challenges/Level7-Dependency'

function App() {
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
    </div>
  )
}

export default App