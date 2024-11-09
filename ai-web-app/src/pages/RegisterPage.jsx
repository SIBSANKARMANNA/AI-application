// frontend/src/pages/RegisterPage.js

import React from 'react';
import Navbar from '../components/Shared/Navbar';
import Footer from '../components/Shared/Footer';
import Register from '../components/Auth/Register';
import './RegisterPage.css';


const RegisterPage = () => (
  <div className="register-page">
    <Navbar />
    <main>
      <Register />
    </main>
    <Footer />
  </div>
);

export default RegisterPage;
