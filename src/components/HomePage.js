// HomePage.js
import React from 'react';
import { Link } from 'react-router-dom';
import './HomePage.css'; // Styling for the homepage

const HomePage = () => {
  return (
    <div className="home-container">
      {/* Store Name */}
      <h1 className="store-name">Bella Luz Boutique</h1>
      
      {/* Welcome Text */}
      <p>Your one-stop shop for stunning jewelry.</p>
      
      {/* CTA Buttons */}
      <div className="cta-buttons">
        <Link to="/register" className="btn-primary">Register</Link>
        <Link to="/login" className="btn-primary">Login</Link>
      </div>
    </div>
  );
};

export default HomePage;
