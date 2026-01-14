// src/challenges/BossLevel2.jsx
import { useState, useEffect } from 'react';

export default function BossLevel2() {
  const [cryptoCode, setCryptoCode] = useState("BTC");
  const [price, setPrice] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setPrice(null);
    setLoading(true);
    
    console.log(`Fetching price for ${cryptoCode}...`);

    fetch(`https://api.coinbase.com/v2/prices/${cryptoCode}-USD/spot`)
      .then(res => res.json())
      .then(data => {
        
        setPrice(data.data.amount);
        setLoading(false);
      })
      .catch(err => {
        console.error("Error fetching:", err);
        setLoading(false);
      });

  }, [cryptoCode]); 

  return (
    <div style={{ padding: '20px', border: '4px solid gold', marginTop: '30px', backgroundColor: '#333', color: 'white' }}>
      <h1>🟡 Crypto Ticker</h1>

      <div style={{ marginBottom: '20px' }}>
        <label style={{ marginRight: '10px' }}>Select Coin:</label>
        
        <select 
          value={cryptoCode} 
          onChange={(e) => setCryptoCode(e.target.value)}
          style={{ padding: '5px', fontSize: '16px' }}
        >
          <option value="BTC">Bitcoin (BTC)</option>
          <option value="ETH">Ethereum (ETH)</option>
          <option value="DOGE">Dogecoin (DOGE)</option>
        </select>
      </div>

      <div style={{ 
        background: 'black', 
        padding: '20px', 
        borderRadius: '10px', 
        textAlign: 'center',
        minHeight: '100px', 
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
      }}>
        
        {loading ? (
          <h2 style={{ color: 'yellow' }}>⏳ Loading...</h2>
        ) : (
          <h2 style={{ fontSize: '40px', color: '#00ff00', margin: 0 }}>
            ${price}
          </h2>
        )}
      </div>
      
      <p style={{ fontSize: '12px', color: 'gray', marginTop: '10px' }}>
        Data from Coinbase API
      </p>
    </div>
  );
}