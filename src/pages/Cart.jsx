// src/pages/Cart.jsx
import React, { useContext } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { StoreContext } from '../context/StoreContext';
import './Cart.css';

const Cart = () => {
  const { cart, setCart } = useContext(StoreContext);
  const navigate = useNavigate();

  const handleRemove = (id) => {
    const updatedCart = cart.filter(item => item.id !== id);
    setCart(updatedCart);
    localStorage.setItem('cart', JSON.stringify(updatedCart));
  };

  const handleCheckout = () => {
    localStorage.removeItem('cart');
    setCart([]);
    navigate('/confirmation');
  };

  const total = cart.reduce((acc, item) => acc + item.price, 0);

  return (
    <div className="cart-container">
      <h2>Your Cart</h2>
      <div className="cart-items">
        {cart.length === 0 ? (
          <p>Your cart is empty.</p>
        ) : (
          cart.map(item => (
            <div className="cart-item" key={item.id}>
              <img src={item.image} alt={item.name} />
              <div className="cart-item-details">
                <h4>{item.name}</h4>
                <p>₹{item.price}</p>
                <button onClick={() => handleRemove(item.id)}>Remove</button>
              </div>
            </div>
          ))
        )}
      </div>

      {cart.length > 0 && (
        <div className="cart-summary">
          <h3>Total: ₹{total.toFixed(2)}</h3>
          <button className="checkout-btn" onClick={handleCheckout}>Checkout</button>
        </div>
      )}

      <div className="cart-nav">
        <Link to="/" className="continue-shopping-btn">← Continue Shopping</Link>
      </div>
    </div>
  );
};

export default Cart;
