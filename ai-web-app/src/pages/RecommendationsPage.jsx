// frontend/src/pages/RecommendationsPage.js

import React from 'react';
import Navbar from '../components/Shared/Navbar';
import Footer from '../components/Shared/Footer';
import Recommendations from '../components/AI/Recommendations';
import './RecommendationsPage.css';

const RecommendationsPage = () => (
  <div className="recommendations-page">
    <Navbar />
    <main>
      <Recommendations />
    </main>
    <Footer />
  </div>
);

export default RecommendationsPage;
