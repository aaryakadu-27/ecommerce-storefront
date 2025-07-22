import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';

export default function OrderConfirmation() {
  const order = JSON.parse(localStorage.getItem('lastOrder')) || [];
  const total = order.reduce((a,c)=>a + c.price*c.quantity,0);

  return (
    <>
      <Navbar />
      <h2>Order Confirmed!</h2>
      <ul>{order.map(i=>(
        <li key={i.id}>{i.name} x{i.quantity} = ₹{i.price*i.quantity}</li>
      ))}</ul>
      <p>Total paid: ₹{total.toFixed(2)}</p>
      <Link to="/">Home</Link>
    </>
  );
}
