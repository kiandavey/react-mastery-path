// src/challenges/Level12-CustomHook.jsx
import { useState, useEffect } from 'react';

function useFetch(url) {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);

    console.log("Fetching:", url);
    
    fetch(url)
       .then(res => res.json())
       .then(result => {
         setData(result);
          setLoading(false);
        });

  }, [url]); 

  return { data, loading };
}

export default function Level12() {
  const [id, setId] = useState(1);

  const { data, loading } = useFetch(`https://jsonplaceholder.typicode.com/users/${id}`);

  return (
    <div style={{ padding: '20px', border: '2px solid teal', marginTop: '30px' }}>
      <h1>Level 12: Custom Hooks</h1>
      
      <button onClick={() => setId(id + 1)}>Next User</button>
      
      {loading ? (
        <p>⏳ Loading data...</p>
      ) : (
        data && (
          <div style={{ background: '#000000', padding: '10px', marginTop: '10px' }}>
            <h3>{data.name}</h3>
            <p>{data.email}</p>
          </div>
        )
      )}
    </div>
  );
}