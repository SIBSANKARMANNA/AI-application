// frontend/src/pages/NotFound.js

import React from 'react';
import Navbar from '../components/Shared/Navbar';
import Footer from '../components/Shared/Footer';

const NotFound = () => (
  <div className="not-found">
    <Navbar />
    <main>
      <h2>404 - Page Not Found</h2>
      <p>Sorry, the page you're looking for doesn't exist.</p>
    </main>
    <Footer />
  </div>
);

export default NotFound;
