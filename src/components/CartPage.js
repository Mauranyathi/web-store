import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

function CartPage() {
  const cart = useSelector(state => state.cart);
  const dispatch = useDispatch();

  // Shipping options
  const shippingOptions = ['Standard Shipping', 'Express Shipping'];
  const [selectedShipping, setSelectedShipping] = useState(shippingOptions[0]);
  
  // Handle item removal
  const handleRemove = (id) => {
    dispatch({
      type: 'REMOVE_FROM_CART',
      payload: id,
    });
  };

  // Calculate total cost
  const totalCost = cart.reduce((acc, item) => acc + item.price, 0);

  // Handle shipping change
  const handleShippingChange = (e) => {
    setSelectedShipping(e.target.value);
  };

  // Handle checkout (simplified for now)
  const handleCheckout = () => {
    alert('Proceeding to checkout with shipping: ' + selectedShipping);
    // Further checkout functionality could be added here (e.g., payment, address form)
  };

  return (
    <div className="container">
      <h2>Your Cart</h2>
      {cart.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <div>
          <ul>
            {cart.map(item => (
              <li key={item.id}>
                <span>{item.name} - ${item.price}</span>
                <button onClick={() => handleRemove(item.id)} className="btn btn-danger ml-3">
                  Remove
                </button>
              </li>
            ))}
          </ul>
          
          {/* Display total cost */}
          <h3>Total: ${totalCost}</h3>

          {/* Shipping selection */}
          <div className="form-group">
            <label htmlFor="shipping">Select Shipping Method</label>
            <select
              id="shipping"
              value={selectedShipping}
              onChange={handleShippingChange}
              className="form-control"
            >
              {shippingOptions.map((option, index) => (
                <option key={index} value={option}>
                  {option}
                </option>
              ))}
            </select>
          </div>

          {/* Checkout Button */}
          <button onClick={handleCheckout} className="btn btn-success">
            Proceed to Checkout
          </button>
        </div>
      )}
    </div>
  );
}

export default CartPage;

