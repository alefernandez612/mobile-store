import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

export const Header = () => {
  const [cartCount, setCartCount] = useState(0);

  useEffect(() => {
  const updateCartCount = () => {
    const cart = JSON.parse(localStorage.getItem('cart')) || [];
    console.log("Header.js: Actualizando cartCount a", cart.length);
    setCartCount(cart.length);
  };

  updateCartCount();

  window.addEventListener("storage", updateCartCount);
  return () => window.removeEventListener("storage", updateCartCount);
}, []);

console.log("Header.js: Actualizando cartCount a", cartCount);

  return (
    <header className="header">
      <h1><Link to="/">Mobile Store</Link></h1>
      <div className="breadcrumbs">
        <Link to="/">Home</Link> &gt; <span>Product Details</span>
      </div>
      <div className="cart-count">
        Cart: {cartCount}
      </div>
    </header>
  );
};
