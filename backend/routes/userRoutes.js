// backend/routes/userRoutes.js

const express = require('express');
const { getUserProfile, updateUserProfile,resetPassword } = require('../controllers/userController');
const { authenticate } = require('../middleware/authMiddleware');
const router = express.Router();

// Get user profile route
router.get('/profile', authenticate, getUserProfile);

// Update user profile route
router.put('/profile', authenticate, updateUserProfile);
router.post('/reset-password',authenticate,resetPassword);

module.exports = router;
