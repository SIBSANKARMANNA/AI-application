import axios from 'axios';

// Get user profile information
export const getUserProfile = async (token) => {
  try {
    const response = await axios.get(`http://localhost:5000/api/user/profile`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return response.data;
  } catch (error) {
    console.error("Error fetching user profile:", error);
    throw error;
  }
};

// Update user profile information
export const updateUserProfile = async (userData, token) => {
  try {
    const response = await axios.put(`http://localhost:5000/api/user/profile`, userData, {
      headers: {
        Authorization: `Bearer ${token}`,
        'Content-Type': 'multipart/form-data',
      },
    });
    console.log('profile picture update check',response.data.user.profilePicture);
    return response.data;
  } catch (error) {
    console.error("Error updating user profile:", error);
    throw error;
  }
};
