import axios from 'axios';

// Get user profile information
export const getUserProfile = async (token) => {
  try {
    const response = await axios.get(`https://ai-application-5lad.onrender.com/api/user/profile`, {
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
    const response = await axios.put(`https://ai-application-5lad.onrender.com/api/user/profile`, userData, {
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
