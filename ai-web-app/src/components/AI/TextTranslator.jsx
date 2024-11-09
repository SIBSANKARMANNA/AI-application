// frontend/src/components/TextTranslator.js

import React, { useState } from 'react';
import axios from 'axios';

const TextTranslator = () => {
  const [text, setText] = useState('');
  const [language, setLanguage] = useState('es'); // Default target language (Spanish)
  const [translatedText, setTranslatedText] = useState('');

  const handleTranslate = async () => {
    try {
      const response = await axios.post('http://localhost:5000/api/ai/translate', { text, language });
      setTranslatedText(response.data.translatedText);
    } catch (error) {
      console.error('Error during translation:', error);
    }
  };

  return (
    <div>
      <textarea
        placeholder="Enter text to translate"
        value={text}
        onChange={(e) => setText(e.target.value)}
      ></textarea>
      <select value={language} onChange={(e) => setLanguage(e.target.value)}>
        <option value="es">Spanish</option>
        <option value="fr">French</option>
        <option value="de">German</option>
        <option value="zh">Chinese</option>
        {/* Add more languages as needed */}
      </select>
      <button onClick={handleTranslate}>Translate</button>
      {translatedText && <p>Translated Text: {translatedText}</p>}
    </div>
  );
};

export default TextTranslator;
