// src/App.jsx
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import Mastery from './Mastery';
import Arena from './Arena';

export default function App() {
  return (
    <BrowserRouter>
      <div style={{ fontFamily: 'sans-serif' }}>
        
        {/* GLOBAL NAVIGATION BAR */}
        <nav style={{ 
          display: 'flex', 
          gap: '20px', 
          padding: '20px', 
          background: '#222', 
          color: 'white',
          marginBottom: '20px'
        }}>
          <Link to="/" style={{ color: 'white', textDecoration: 'none', fontWeight: 'bold' }}>
            🏠 Mastery Path
          </Link>
          <Link to="/arena" style={{ color: '#00ff00', textDecoration: 'none', fontWeight: 'bold' }}>
            ⚔️ The Arena
          </Link>
        </nav>

        {/* PAGE CONTENT SWAPS HERE */}
        <div style={{ padding: '0 20px' }}>
          <Routes>
            <Route path="/" element={<Mastery />} />
            <Route path="/arena" element={<Arena />} />
          </Routes>
        </div>

      </div>
    </BrowserRouter>
  );
}