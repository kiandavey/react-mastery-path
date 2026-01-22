// src/challenges/Level10-Router.jsx
import { Routes, Route, Link } from 'react-router-dom';

function Home() {
  return <h2>🏠 Home Page - Welcome!</h2>;
}

function About() {
  return <h2>ℹ️ About - We are learning React.</h2>;
}

function Contact() {
  return <h2>📞 Contact - Call us maybe?</h2>;
}

export default function Level10() {
  return (
    <div style={{ padding: '20px', border: '2px solid purple', marginTop: '30px' }}>
      <h1>Level 10: React Router</h1>
      
      <nav style={{ marginBottom: '20px', borderBottom: '1px solid #ccc', paddingBottom: '10px' }}>
        <Link to="/" style={{ marginRight: '10px' }}>Home</Link>
        <Link to="/about" style={{ marginRight: '10px' }}>About</Link>
        <Link to="/contact">Contact</Link>
      </nav>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </div>
  );
}