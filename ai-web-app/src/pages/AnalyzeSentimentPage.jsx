import React from 'react';
import Navbar from '../components/Shared/Navbar';
import Footer from '../components/Shared/Footer';
import AnalyzeSentiment from '../components/AI/analyzeSentiment';
import './AnalyzeSentimentPage.css';

const SentimentAnalysisPage = () => {
  return (
    <div className="sentiment-analysis-page">
      <Navbar />
    <main>
    <AnalyzeSentiment />
    </main>
    <Footer />
    </div>
  );
};

export default SentimentAnalysisPage;
