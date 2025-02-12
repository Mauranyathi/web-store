import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function Header() {
  const [username, setUsername] = useState('');

  const handleLogin = (e) => {
    e.preventDefault();
    // Simple login mechanism
    setUsername('User');
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <Link to="/" className="navbar-brand">Bella Luz Boutique</Link>
      <div className="navbar-nav">
        <Link to="/store" className="nav-item nav-link">Store</Link>
        <Link to="/cart" className="nav-item nav-link">Cart</Link>
        {username ? (
          <span className="navbar-text">{username}</span>
        ) : (
          <button onClick={handleLogin} className="btn btn-outline-success">Login</button>
        )}
      </div>
    </nav>
  );
}

export default Header;
