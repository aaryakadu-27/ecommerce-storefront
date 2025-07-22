import React, { useContext } from 'react';
import { StoreContext } from '../context/StoreContext';
import { useNavigate } from 'react-router-dom';
import Navbar from '../components/Navbar';

export default function Checkout() {
  const { cart, setCart } = useContext(StoreContext);
  const navigate = useNavigate();

  const handlePlace = () => {
    setCart([]);
    localStorage.setItem('lastOrder', JSON.stringify(cart));
    navigate('/confirmation');
  };

  return (
    <>
      <Navbar />
      <h2>Checkout</h2>
      <p>Items: {cart.length}</p>
      <button onClick={handlePlace}>Place Order</button>
    </>
  );
}
