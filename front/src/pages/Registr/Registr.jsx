import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { loginSuccess } from '../../app/authSlice';
import Input from '../../components/Input/Input';
import s from "./Registr.module.sass"

const Registr = () => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  
  const dispatch = useDispatch();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');

    try {
      const response = await fetch('http://127.0.0.1:8000/api/register/', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ username, email, password }),
      });

      const data = await response.json();

      if (response.ok) {
        if (data.token) {
          dispatch(loginSuccess({ token: data.token, user: data.user }));
        }
        alert("Registration successful!");
      } else {
        setError(data.message || 'Registration failed.');
      }
    } catch (err) {
      setError('Failed to connect to the server.');
    }
  };

  return (
    <div className={s.registerContainer}>
      <h2>Register</h2>
      
      {error && <p className={s.errorText}>{error}</p>}

      <form onSubmit={handleSubmit}>
        <div className={s.inputGroup}>
          <label>Username</label>
          <Input 
            type="text" 
            name="username"
            value={username} 
            onChange={(e) => setUsername(e.target.value)} 
            placeholder="Choose a username"
            required
          />
        </div>

        <div className={s.inputGroup}>
          <label>Email Address</label>
          <Input 
            type="email" 
            name="email"
            value={email} 
            onChange={(e) => setEmail(e.target.value)} 
            placeholder="Enter your email"
            required
          />
        </div>

        <div className={s.inputGroup}>
          <label>Password</label>
          <Input 
            type="password" 
            name="password"
            value={password} 
            onChange={(e) => setPassword(e.target.value)} 
            placeholder="Create a password"
            required
          />
        </div>

        <button type="submit" className={s.submitBtn}>Sign Up</button>
      </form>
    </div>
  );
};

export default Registr;