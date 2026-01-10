// src/challenges/BossLevel1.jsx
import { useState } from 'react';

export default function BossLevel1() {
  // STATE 1: The Input box (for typing new items)
  const [newItemName, setNewItemName] = useState("");

  // STATE 2: The Inventory List (Array of objects)
  const [items, setItems] = useState([
    { id: 1, name: "Rusty Sword" },
    { id: 2, name: "Healing Potion" }
  ]);

  function addItem() {
    if (!newItemName) return; 

    const newItem = {
      id: Date.now(), 
      name: newItemName
    };

    // Update the items state
    setItems(oldItems => [...oldItems, newItem]);
    
    // Clear the input box (setNewItemName to "")
    setNewItemName("");
  }

  function dropItem(idToDelete) {
    // Update the items state
    const updatedList = items.filter(item => item.id !== idToDelete);
    setItems(updatedList);
  }

  return (
    <div style={{ padding: '20px', maxWidth: '400px', border: '4px solid gold' }}>
      <h1>Boss Level 1: RPG Inventory</h1>

      {/* INPUT SECTION */}
      <div style={{ marginBottom: '20px', display: 'flex', gap: '10px' }}>
        <input 
          type="text" 
          placeholder="New Item..."
          value={newItemName}
          onChange={(e) => setNewItemName(e.target.value)}
          style={{ padding: '5px', flexGrow: 1 }}
        />
        <button onClick={addItem}>Add</button>
      </div>

      {/* LIST SECTION */}
      <ul style={{ listStyle: 'none', padding: 0 }}>
        {items.map((item) => (
          <li 
            key={item.id} 
            style={{ 
              display: 'flex', 
              justifyContent: 'space-between', 
              borderBottom: '1px solid #444', 
              padding: '10px 0' 
            }}
          >
            <span>⚔️ {item.name}</span>
            <button onClick={() => dropItem(item.id)}>Drop</button>
          </li>
        ))}
      </ul>
      
      {items.length === 0 && <p>Your inventory is empty!</p>}
    </div>
  );
}