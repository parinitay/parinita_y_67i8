import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import API from '../services/api';

function Register() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleRegister = async (e) => {
    e.preventDefault();
    try {
      await API.post('/auth/register', { username, password });
      alert('Registration successful! Please login.');
      navigate('/');
    } catch (err) {
      alert('Username already exists or error occurred.');
    }
  };

  return (
    <div className="container mt-5">
      <h2 className="mb-4">Register</h2>
      <form onSubmit={handleRegister} className="card p-4 shadow-sm border">
        <input
          type="text"
          className="form-control mb-3"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          required
        />
        <input
          type="password"
          className="form-control mb-3"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <button type="submit" className="btn btn-success w-100">Register</button>
      </form>
    </div>
  );
}

export default Register;
