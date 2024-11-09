// frontend/src/api/authApi.js

import axios from 'axios';

// const API_URL = process.env.REACT_APP_API_URL || 'http://localhost:5000/api/auth';

// Register a new user
export const registerUser = async (userData) => {
  try {
    const response = await axios.post(`http://localhost:5000/api/auth/register`, userData);
    return response.data;
  } catch (error) {
    console.error("Error during user registration:", error);
    throw error;
  }
};

// Login an existing user
export const loginUser = async (userData) => {
  try {
    const response = await axios.post(`http://localhost:5000/api/auth/login`, userData);
    // console.log('response',response.data);
    return response.data;
  } catch (error) {
    console.error("Error during user login:", error);
    throw error;
  }
};
