// frontend/src/pages/LoginPage.js

import React from 'react';
import Navbar from '../components/Shared/Navbar';
import Footer from '../components/Shared/Footer';
import Login from '../components/Auth/Login';
import './LoginPage.css';


const LoginPage = ({ onLoginSuccess }) => (
  <div className="login-page">
    <Navbar />
    <main>
      <Login onLoginSuccess={onLoginSuccess} />
    </main>
    <Footer />
  </div>
);

export default LoginPage;
