// src/components/Header.js
import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import './Header.css';

const Header = ({ username }) => {
  const cart = useSelector(state => state.cart); // Get cart items from Redux

  return (
    <header className="header">
      <nav>
        <Link to="/" className="nav-link">Home</Link> {/* ✅ Home link added back */}
        <Link to="/store" className="nav-link">Store</Link>
        <Link to="/cart" className="nav-link cart-icon">
          🛒 Cart <span className="cart-count">{cart.length}</span>
        </Link>
        {!username ? (
          <>
            <Link to="/login" className="nav-link">Login</Link>
            <Link to="/register" className="nav-link">Register</Link>
          </>
        ) : (
          <span className="username">Welcome, {username}!</span>
        )}
      </nav>
    </header>
  );
};

export default Header;
