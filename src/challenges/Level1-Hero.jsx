// src/challenges/Level1-Hero.jsx

// 1. This is the Child Component (The Template)
// It receives "props" (data) from the parent.
function HeroCard(props) {
  return (
    <div style={{ border: '2px solid gold', padding: '20px', margin: '10px', borderRadius: '10px' }}>
      <h2>Name: {props.name} </h2>
      <p>Race: {props.race} </p>
      <p>Class: {props.class} </p>
    </div>
  );
}

// 2. This is the Parent Component (The Container)
// This is what we will show on the screen.
export default function Level1() {
  return (
    <div>
      <h1>Level 1: The Hero Card</h1>
      
      <div style={{ display: 'flex' }}>
        <HeroCard name="Geralt" race="Human" class="Witcher" />
        <HeroCard name="Legolas" race="Elf" class="Archer" />
        <HeroCard name="Gimli" race="Dwarf" class="Warrior" />
      </div>
    </div>
  );
}