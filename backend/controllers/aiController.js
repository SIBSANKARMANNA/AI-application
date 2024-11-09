const axios = require('axios');

// Generate AI-based recommendations based on user preferences
exports.getRecommendations = async (req, res) => {
  const { userPreferences } = req.body;
  // const prompt = `Give recommendations based on these preferences: ${JSON.stringify(userPreferences)}.`;
  const prompt = `Provide recommendations based on genre: ${userPreferences.genre} and interests: ${userPreferences.interests.join(', ')}.`;

  try {
    const response = await axios.post(
      `${process.env.COHERE_API_URL}generate`,
      {
        model: 'command-xlarge-nightly',
        prompt: prompt,
        max_tokens: 150,
        temperature: 0.7,
      },
      {
        headers: {
          Authorization: `Bearer ${process.env.COHERE_API_KEY}`,
          'Content-Type': 'application/json',
        },
      }
    );

    if (response.data && response.data.generations) {
      res.json({ recommendations: response.data.generations[0].text.trim().split('\n') });
    } else {
      res.status(404).json({ message: 'No recommendations found' });
    }
  } catch (error) {
    // console.error('AI service error:', error);
    res.status(500).json({ message: 'AI service error' });
  }
};


exports.analyzeSentiment = async (req, res) => {
  const { text } = req.body;

  // Ensure that text is provided
  if (!text) {
    return res.status(400).json({ message: 'Text input is required.' });
  }

  try {
    const response = await axios.post(
      `${process.env.COHERE_API_URL}classify`,
      {
        // Define inputs and add multiple examples for each sentiment label
        inputs: [text],
        examples: [
          { text: "I love this product!", label: "positive" },
          { text: "This is fantastic!", label: "positive" },
          { text: "I am very pleased with the service!", label: "positive" },
          { text: "This is disappointing.", label: "negative" },
          { text: "I am not happy with the experience.", label: "negative" },
          { text: "This was a terrible decision.", label: "negative" }
        ]
      },
      {
        headers: {
          Authorization: `Bearer ${process.env.COHERE_API_KEY}`,
          'Content-Type': 'application/json',
        },
      }
    );

    if (response.data && response.data.classifications) {
      res.json({ sentiment: response.data.classifications[0].prediction });
    } else {
      res.status(404).json({ message: 'Sentiment analysis failed' });
    }
  } catch (error) {
    console.error('Sentiment analysis error:', error.response ? error.response.data : error.message);
    res.status(500).json({ message: 'AI sentiment service error' });
  }
};
