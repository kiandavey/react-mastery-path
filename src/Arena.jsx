// src/Arena.jsx
import Arena1 from "./challenges/Arena1-Reviews";
import Arena2 from "./challenges/Arena2-Search";
import Arena3 from "./challenges/Arena3-Stopwatch";
import Arena4 from "./challenges/Arena4-Vending";

export default function Arena() {
  return (
    <div>
      <h1 style={{color: 'orange'}}>⚔️ The Arena</h1>
      <p>Practice challenges to test my skills.</p>
      <hr />
      
      <Arena1 />
      <Arena2 />
      <Arena3 />
      <Arena4 />

    </div>
  );
}