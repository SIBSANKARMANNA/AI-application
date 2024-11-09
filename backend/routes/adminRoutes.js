// backend/routes/adminRoutes.js

const express = require('express');
const { getAllUsers,createUser,deleteUser } = require('../controllers/adminController');
const { authenticate, authorizeAdmin } = require('../middleware/authMiddleware');
const router = express.Router();

router.get('/users', authenticate, authorizeAdmin, getAllUsers);
router.post('/create',authenticate,createUser);
router.delete('/users/:userId', authenticate, deleteUser);

module.exports = router;
