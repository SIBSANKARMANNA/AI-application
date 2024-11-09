// backend/controllers/userController.js

// const User = require('../models/User');
// const bcrypt = require('bcryptjs');

// // Get user profile
// exports.getUserProfile = async (req, res) => {
//   try {
//     const user = await User.findById(req.user.userId).select('-password');
//     if (!user) return res.status(404).json({ message: 'User not found' });

//     res.json(user);
//   } catch (error) {
//     res.status(500).json({ message: 'Server error' });
//   }
// };

// // Update user profile
// exports.updateUserProfile = async (req, res) => {
//   const { name, email } = req.body;
//   console.log('req.body',req.body);

//   try {
//     const user = await User.findById(req.user.userId);
//     console.log(user);
//     if (!user){return res.status(404).json({ message: 'User not found' });} 

//     user.name = name || user.name;
//     user.email = email || user.email;
//     await user.save();
//     console.log('after save',user);
//     console.log('res',res);
//     res.status(200).json({ message: 'Profile updated successfully', user });
//   } catch (error) {
//     res.status(500).json({ message: 'Serverr error' });
//   }
// };


// backend/controllers/userController.js

const User = require('../models/User');
const bcrypt = require('bcryptjs');
const multer = require('multer');
const path = require('path');

// Multer configuration
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, 'uploads/'); // Save images in the 'uploads' folder
  },
  filename: (req, file, cb) => {
    cb(null, `${Date.now()}-${file.originalname}`);
  },
});
const upload = multer({ storage });

// // Get user profile
// exports.getUserProfile = async (req, res) => {
//   try {
//     const user = await User.findById(req.user.userId).select('-password');
//     if (!user) return res.status(404).json({ message: 'User not found' });

//     res.json(user);
//   } catch (error) {
//     res.status(500).json({ message: 'Server error' });
//   }
// };

// backend/controllers/userController.js

exports.getUserProfile = async (req, res) => {
  try {
    const user = await User.findById(req.user.userId).select('-password');
    if (!user) return res.status(404).json({ message: 'User not found' });

    // Include the full URL for the profile picture if available
    const profileData = {
      name: user.name,
      email: user.email,
      profilePicture: user.profilePicture ? `${req.protocol}://${req.get('host')}/${user.profilePicture}` : null,
    };

    res.json(profileData);
  } catch (error) {
    res.status(500).json({ message: 'Server error' });
  }
};


// Update user profile with profile picture
exports.updateUserProfile = [
  upload.single('profilePicture'),
  async (req, res) => {
    const { name, email } = req.body;

    try {
      const user = await User.findById(req.user.userId);
      if (!user) return res.status(404).json({ message: 'User not found' });

      user.name = name || user.name;
      user.email = email || user.email;

      // If a new profile picture is uploaded, update the path
      if (req.file) {
        user.profilePicture = req.file.path;
      }
      // console.log('userdata from backend for profile pictue',user.profilePicture);

      await user.save();
      res.status(200).json({ message: 'Profile updated successfully', user });
    } catch (error) {
      res.status(500).json({ message: 'Server error' });
    }
  },
];






// Reset Password
exports.resetPassword = async (req, res) => {
  const { email, password } = req.body;
  // console.log('req.body', req.body);

  try {
    const user = await User.findOne({ email });
    // console.log('user',user);
    if (!user) return res.status(404).json({ message: 'User not found' });

    const hashedPassword = await bcrypt.hash(password, 10);
    user.password = hashedPassword;
    await user.save();

    // console.log('after save', user);
    res.status(200).json({ message: 'Password reset successfully' });
  } catch (error) {
    console.log('error',error);
    res.status(500).json({ message: 'Server error' });
  }
};
