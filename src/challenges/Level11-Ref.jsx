// src/challenges/Level11-Ref.jsx
import { useRef, useEffect } from 'react';

export default function Level11() {

  const inputRef = useRef(null); 

  useEffect(() => {
    inputRef.current.focus();
  }, []);

  function handleFocus() {
    inputRef.current.focus();
  }

  return (
    <div style={{ padding: '20px', border: '2px solid red', marginTop: '30px' }}>
      <h1>Level 11: The Laser Pointer (useRef)</h1>
      
      <div style={{ display: 'flex', gap: '10px' }}>
        <input 
          ref={inputRef} 
          type="text" 
          placeholder="I should be focused..." 
          style={{ padding: '10px', fontSize: '18px' }}
        />
        
        <button onClick={handleFocus}>
          Click to Focus Input
        </button>
      </div>
      
      <p>
        Note: Typing here does NOT cause a re-render because we aren't using useState!
      </p>
    </div>
  );
}