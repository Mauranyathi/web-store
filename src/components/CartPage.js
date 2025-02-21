// src/components/CartPage.js
import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { removeFromCart, clearCart } from '../redux/actions/cartActions';
import './CartPage.css';

const CartPage = () => {
  const cart = useSelector(state => state.cart);
  const dispatch = useDispatch();
  const [shippingMethod, setShippingMethod] = useState('standard');

  const total = cart.reduce((acc, item) => acc + item.price, 0);

  const handleRemove = (id) => dispatch(removeFromCart(id));
  const handleCheckout = () => {
    alert('Thank you for your purchase! Your order has been placed.');
    dispatch(clearCart());
  };

  return (
    <div className="cart-container">
      <h2>Your Shopping Cart</h2>

      {cart.length > 0 ? (
        <>
          <div className="cart-items">
            {cart.map((item, index) => (
              <div key={index} className="cart-item">
                <img src={item.image} alt={item.name} className="cart-item-img" />
                <div className="cart-item-details">
                  <h3>{item.name}</h3>
                  <p>Price: ${item.price}</p>
                  <button onClick={() => handleRemove(item.id)} className="remove-btn">Remove</button>
                </div>
              </div>
            ))}
          </div>

          <h3>Total: ${total.toFixed(2)}</h3>

          <div className="shipping-selection">
            <label htmlFor="shipping">Shipping Method:</label>
            <select id="shipping" value={shippingMethod} onChange={(e) => setShippingMethod(e.target.value)}>
              <option value="standard">Standard Shipping - Free</option>
              <option value="express">Express Shipping - $5.99</option>
            </select>
          </div>

          <button className="checkout-btn" onClick={handleCheckout}>Proceed to Checkout</button>
        </>
      ) : (
        <p className="empty-cart">Your cart is empty</p>
      )}
    </div>
  );
};

export default CartPage;
