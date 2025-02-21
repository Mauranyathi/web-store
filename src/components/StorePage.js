// src/components/StorePage.js
import React from 'react';
import ProductCard from './ProductCard';
import './StorePage.css';
import goldennecklace from '../assets/goldnecklace.webp';
import silverring from '../assets/silverring.jpg';
import goldenearrings from '../assets/golden earrings.jpg';

const products = [
  { id: 1, name: 'Gold Necklace', price: 200, image: goldennecklace },
  { id: 2, name: 'Silver Ring', price: 100, image: silverring },
  { id: 3, name: 'Golden Earrings', price: 500, image: goldenearrings },
];

const StorePage = () => {
  return (
    <div className="store-container">
      <h2>Our Products</h2>
      <div className="product-list">
        {products.map(product => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default StorePage;