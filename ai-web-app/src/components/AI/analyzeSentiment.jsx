import React, { useState } from 'react';
import { analyzeSentiment } from '../../api/aiApi';
import './analyzeSentiment.css';


const AnalyzeSentiment = () => {
  const [text, setText] = useState('');
  const [sentimentResult, setSentimentResult] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    try {
      const result = await analyzeSentiment(text);
      setSentimentResult(result);
    } catch (err) {
      setError('Failed to analyze sentiment. Please try again later.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="sentiment-analyzer">
      <h2>Sentiment Analyzer</h2>
      <form onSubmit={handleSubmit}>
        <textarea
          value={text}
          onChange={(e) => setText(e.target.value)}
          placeholder="Enter text to analyze sentiment..."
          rows="5"
          cols="40"
          required
        />
        <br />
        <button type="submit" disabled={loading}>
          {loading ? 'Analyzing...' : 'Analyze Sentiment'}
        </button>
      </form>

      {error && <p className="error">{error}</p>}
      {sentimentResult && (
        <div className="sentiment-result">
          <h3>Sentiment Analysis Result:</h3>
          <p>{JSON.stringify(sentimentResult, null, 2)}</p>
        </div>
      )}
    </div>
  );
};

export default AnalyzeSentiment;
