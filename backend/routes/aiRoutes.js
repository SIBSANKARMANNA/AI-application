
// backend/routes/aiRoutes.js

const express = require('express');
const { getRecommendations, analyzeSentiment} = require('../controllers/aiController');
const { authenticate } = require('../middleware/authMiddleware');
const router = express.Router();

// Get AI recommendations route
router.post('/recommendations', authenticate, getRecommendations); // Changed to POST to accept preferences

// Analyze sentiment route
router.post('/sentiment', authenticate, analyzeSentiment);

// router.post('/summarize', getSummarization);
// router.get('/searchSuggestions',authenticate, getSearchSuggestions);

// router.post('/translate',authenticate, translateText);

// router.post('/summarize', summarizeText);

module.exports = router;
