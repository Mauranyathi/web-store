import React from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import ProductCard from './ProductCard';

const products = [
  { id: 1, name: 'Gold Necklace', price: 200, image: 'https://via.placeholder.com/150' },
  { id: 2, name: 'Silver Ring', price: 100, image: 'https://via.placeholder.com/150' },
  { id: 3, name: 'Diamond Earrings', price: 500, image: 'https://via.placeholder.com/150' },
];

function StorePage() {
  return (
    <div className="container">
      <h2>Our Products</h2>
      <div className="row">
        {products.map(product => (
          <div key={product.id} className="col-md-4">
            <ProductCard product={product} />
          </div>
        ))}
      </div>
      <Link to="/cart" className="btn btn-secondary">Go to Cart</Link>
    </div>
  );
}

export default StorePage;
