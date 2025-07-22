// src/pages/Login.jsx
import React, { useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { StoreContext } from '../context/StoreContext';
import './Login.css';

const Login = () => {
  const { setUser } = useContext(StoreContext);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const credentials = {
    admin: { password: 'admin123', role: 'admin' },
    user: { password: 'user123', role: 'user' }
  };

  const handleLogin = (e) => {
    e.preventDefault();
    if (credentials[username] && credentials[username].password === password) {
      setUser({ username, role: credentials[username].role });
      navigate('/');
    } else {
      setError('Invalid credentials. Try again.');
    }
  };

  return (
    <div className="login-container">
      <form onSubmit={handleLogin} className="login-form">
        <h2>Login</h2>
        {error && <p className="error">{error}</p>}
        <input
          type="text"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          required
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <button type="submit">Login</button>
      </form>
    </div>
  );
};

export default Login;
