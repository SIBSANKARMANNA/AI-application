// backend/utils/apiClient.js

const axios = require('axios');

// Create an Axios instance
const apiClient = axios.create({
  baseURL: process.env.API_BASE_URL, // Base URL for your external API
  timeout: 10000, // Timeout for requests
});

// Intercept requests
apiClient.interceptors.request.use(
  (config) => {
    // You can add authentication headers or other configurations here
    const token = localStorage.getItem('token'); // Example: getting token from localStorage
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

// Intercept responses
apiClient.interceptors.response.use(
  (response) => response,
  (error) => {
    // Handle errors here
    return Promise.reject(error);
  }
);

module.exports = apiClient;
