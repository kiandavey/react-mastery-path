// src/challenges/BossLevel3.jsx
import { useState, useContext, createContext } from 'react';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';

const CartContext = createContext();

function CartProvider({ children }) {
  const [cart, setCart] = useState([]);

  function addToCart(item) {
    setCart([...cart, item]);
    console.log("Adding to cart:", item.name);
  }

  return (
    <CartContext.Provider value={{ cart, addToCart }}>
      {children}
    </CartContext.Provider>
  );
}

function Home() {
  const { addToCart } = useContext(CartContext);

  const products = [
    { id: 1, name: "Gaming Mouse", price: 29.99 },
    { id: 2, name: "Mechanical Keyboard", price: 89.99 },
    { id: 3, name: "Headphones", price: 59.99 }
  ];

  return (
    <div>
      <h2>🛒 Products</h2>
      <div style={{ display: 'flex', gap: '20px' }}>
        {products.map(p => (
          <div key={p.id} style={{ border: '1px solid white', padding: '10px', borderRadius: '8px' }}>
            <h3>{p.name}</h3>
            <p>${p.price}</p>
            <button onClick={() => addToCart(p)}>
              Add to Cart
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

function CartPage() {
  const { cart } = useContext(CartContext);

  return (
    <div>
      <h2>🛍️ Your Cart</h2>
      {cart.length === 0 ? <p>Cart is empty!</p> : (
        <ul>
          {cart.map((item, index) => (
             <li key={index}>
               {item.name} - ${item.price}
             </li>
          ))}
        </ul>
      )}
    </div>
  );
}

function Navbar() {
  const { cart } = useContext(CartContext);
  
  return (
    <nav style={{ marginBottom: '20px', padding: '10px', borderBottom: '2px solid gold', display: 'flex', justifyContent: 'space-between' }}>
      <Link to="/" style={{ fontWeight: 'bold' }}>MegaShop</Link>
      <Link to="/cart">
        Cart ({cart.length})
      </Link>
    </nav>
  );
}

export default function BossLevel3() {
  return (
    <div style={{ padding: '20px', border: '4px solid gold', marginTop: '30px' }}>
      <h1>Boss Level 3: The Mini-Shop</h1>
      
      <CartProvider>
        <BrowserRouter>
          <Navbar />
          
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/cart" element={<CartPage />} />
          </Routes>
          
        </BrowserRouter>
      </CartProvider>
    </div>
  );
}