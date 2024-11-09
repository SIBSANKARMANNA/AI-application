// backend/routes/index.js

const express = require('express');
const authRoutes = require('./authRoutes');
const userRoutes = require('./userRoutes');
const aiRoutes = require('./aiRoutes');
const adminRoutes=require('./adminRoutes');

const router = express.Router();

// Use the routes
router.use('/auth', authRoutes);
router.use('/user', userRoutes);
router.use('/ai', aiRoutes);
router.use('/admin',adminRoutes);

module.exports = router;
