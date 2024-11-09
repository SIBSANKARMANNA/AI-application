// frontend/src/components/AI/Recommendations.js

import React, { useEffect, useState } from 'react';
import { getRecommendations } from '../../api/aiApi';
import './Recommendations.css';

const Recommendations = () => {
  const [recommendations, setRecommendations] = useState([]);
  const [genre, setGenre] = useState('');
  const [interests, setInterests] = useState('');

  const handleFetchRecommendations = async () => {
    const userPreferences = {
      genre: genre || 'technology', // Use default if empty
      interests: interests.split(',').map((interest) => interest.trim()), // Split comma-separated interests
    };

    try {
      const data = await getRecommendations({userPreferences});
      setRecommendations(data.recommendations || []);
      // console.log(data.recommendations);
    } catch (error) {
      console.error('Error fetching recommendations:', error);
    }
  };

  return (
    <div className="recommendations">
      <h2>AI-Powered Recommendations</h2>
      
      {/* User input form */}
      <form
        onSubmit={(e) => {
          e.preventDefault();
          handleFetchRecommendations();
        }}
      >
        <label>
          Genre:
          <input
            type="text"
            value={genre}
            onChange={(e) => setGenre(e.target.value)}
            placeholder="e.g., technology"
          />
        </label>
        <br />
        <label>
          Interests (comma-separated):
          <input
            type="text"
            value={interests}
            onChange={(e) => setInterests(e.target.value)}
            placeholder="e.g., AI, Machine Learning"
          />
        </label>
        <br />
        <button type="submit">Get Recommendations</button>
      </form>
      <ul>
        {recommendations.map((rec, index) => (
          <li key={index}>{rec}</li>
        ))}
      </ul>
    </div>
  );
};

export default Recommendations;
