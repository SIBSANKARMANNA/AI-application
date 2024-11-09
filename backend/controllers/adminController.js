// backend/controllers/adminController.js

const bcrypt = require('bcryptjs');
const User = require('../models/User');

// Create a new user (Admin only)
exports.createUser = async (req, res) => {
  const { name, email, password, role } = req.body; // Assume role is passed in the body
  // console.log('body',req.body);

  try {
    let user = await User.findOne({ email });
    if (user) return res.status(201).json({ message: 'User already exists' });
    // Hash the password before saving
    const hashedPassword = await bcrypt.hash(password, 10);

    // Create new user with hashed password
    const newUser = new User({ name, email, password: hashedPassword, role:role || 'user' }); // Set role
    await newUser.save();

    // // Exclude password from response for security
    // const { password: _, ...userWithoutPassword } = newUser.toObject();

    res.status(201).json({ message: 'User created successfully',role:newUser.role});
  } catch (error) {
    res.status(500).json({ message: 'Server error' });
  }
};



// Get all users (Admin only)
exports.getAllUsers = async (req, res) => {
  // console.log('Admin requesting user list');

  try {
    // Find all users who are not admins and exclude the password field
    const users = await User.find({ role: { $ne: 'admin' } }).select('-password');
   console.log('users checking from admin backend',users);
    res.status(200).json({ users });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: 'Server error' });
  }
};


exports.deleteUser = async (req, res) => {
  const { userId } = req.params;

  try {
    const user = await User.findByIdAndDelete(userId);
    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }
    res.status(200).json({ message: 'User deleted successfully' });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: 'Server error' });
  }
};