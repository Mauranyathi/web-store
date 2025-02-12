import React from 'react';
import { useDispatch } from 'react-redux';

function ProductCard({ product }) {
  const dispatch = useDispatch();

  const addToCart = () => {
    dispatch({
      type: 'ADD_TO_CART',
      payload: product,
    });
  };

  return (
    <div className="card">
      <img src={product.image} alt={product.name} className="card-img-top" />
      <div className="card-body">
        <h5 className="card-title">{product.name}</h5>
        <p className="card-text">${product.price}</p>
        <button onClick={addToCart} className="btn btn-primary">Add to Cart</button>
      </div>
    </div>
  );
}

export default ProductCard;
