import React, { useState } from 'react';
import { loginUser } from '../../api/authApi';
import { Link } from 'react-router-dom';
import './login.css';

const Login = ({ onLoginSuccess }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(null);
  const [showPassword, setShowPassword] = useState(false);

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const userData = await loginUser({ email, password });
      onLoginSuccess(userData);
      setError("Login Successful");
    } catch (err) {
      console.log(err);
      setError('Login failed. Please check your credentials.');
    }
  };

  return (
    <div className="login">
      <h2>Login</h2>
      <form onSubmit={handleLogin} >
        <input
          name='email'
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          autoComplete='on'
        />
        <div className="password-field">
          <input
            name='password'
            type={showPassword ? 'text' : 'password'}
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <button
           
            type="button"
            onClick={() => setShowPassword(!showPassword)}
            className="show-password-btn"
          >
            {showPassword ? 'Hide' : 'Show'}
          </button>
        </div>
        {error && <p className="error">{error}</p>}
        <button type="submit">Login</button>
      </form>
      <Link to="/reset-password">Reset-Password</Link>
    </div>
  );
};

export default Login;
