// backend/middleware/authMiddleware.js

const jwt = require('jsonwebtoken');
const User = require('../models/User');

exports.authenticate = (req, res, next) => {
  const token = req.header('Authorization')?.split(' ')[1]; // Bearer token

  if (!token) return res.status(401).json({ message: 'No token, authorization denied' });

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    req.user = decoded; // Store user data in request object
    next(); // Proceed to the next middleware or route handler
  } catch (error) {
    res.status(401).json({ message: 'Token is not valid' });
  }
};
// Middleware to authorize admin users only
exports.authorizeAdmin = async (req, res, next) => {
  try {
    // Fetch the user from the database using the ID from the authenticated token
    const user = await User.findById(req.user.userId);
    if (!user) return res.status(404).json({ message: 'User not found' });

    // Check if the user's role is "admin"
    if (user.role !== 'admin') {
      return res.status(403).json({ message: 'Access denied. Admins only.' });
    }

    next(); // User is an admin, proceed to the next middleware or route handler
  } catch (error) {
    console.log('authorizeadmin',error);
    res.status(500).json({ message: 'Server error' });
  }
};

