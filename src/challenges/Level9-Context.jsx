// src/challenges/Level9-Context.jsx
import { useState, useContext, createContext } from 'react';

const ThemeContext = createContext();

function ThemedCard() {

  const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    <div style={{ 
      padding: '20px', 
      marginTop: '20px',
      backgroundColor: theme === 'light' ? 'white' : '#333',
      color: theme === 'light' ? 'black' : 'white',
      border: '2px solid gray'
    }}>
      <h2>I am a {theme} card!</h2>
      <p>I didn't get this data via props. I teleported it!</p>
      
      <button onClick={toggleTheme}>
        Toggle Theme
      </button>
    </div>
  );
}

export default function Level9() {
  const [theme, setTheme] = useState('light');

  function toggleTheme() {
    setTheme(theme === 'light' ? 'dark' : 'light');
  }

  return (
    <div style={{ padding: '20px', border: '2px dashed orange', marginTop: '30px' }}>
      <h1>Level 9: Context API</h1>
      
      <ThemeContext.Provider value={{ theme, toggleTheme }}>
        
        <ThemedCard />
        
      </ThemeContext.Provider>
    </div>
  );
}