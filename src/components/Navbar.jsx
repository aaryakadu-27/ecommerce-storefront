import React, { useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { StoreContext } from '../context/StoreContext';

export default function Navbar() {
  const { cart, user, setUser } = useContext(StoreContext);
  const navigate = useNavigate();

  const handleLogout = () => {
    setUser(null);
    localStorage.removeItem('user');
    navigate('/');
  };

  return (
    <nav style={{ padding: '10px', background: '#eee', display: 'flex', gap: '15px' }}>
      <Link to="/">Home</Link>
      <Link to="/cart">Cart ({cart.length})</Link>
      {user ? (
        <>
          <span>Hi, {user.username}</span>
          <button onClick={handleLogout}>Logout</button>
          {user.role === 'admin' && <Link to="/admin">Admin</Link>}
        </>
      ) : (
        <Link to="/login">Login</Link>
      )}
    </nav>
  );
}
