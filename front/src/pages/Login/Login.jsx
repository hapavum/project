import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { loginSuccess } from '../../app/authSlice';
import Input from '../../components/Input/Input';
import s from "./Login.module.sass";

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');

    try {
      const response = await fetch('http://127.0.0.1:8000/api/login/', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, password }),
      });

      const data = await response.json();

      if (response.ok) {
        dispatch(loginSuccess({ token: data.token, user: data.user }));
        navigate('/');
      } else {
        setError(data.message || 'Invalid email or password');
      }
    } catch (err) {
      setError('Failed to connect to the server. Please check your backend.');
    }
  };

  return (
    <div className={s.loginContainer}>
      <h2>Login</h2>
      
      {error && <p className={s.errorText}>{error}</p>}

      <form onSubmit={handleSubmit}>
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
            placeholder="Enter your password"
            required
          />
        </div>

        <button type="submit" className={s.submitBtn}>Sign In</button>
        <div className={s.registerRedirect}>
           <Link to="/registr">Register</Link>
        </div>
      </form>
    </div>
  );
};

export default Login;