// backend/utils/logger.js

const fs = require('fs');
const path = require('path');

// Log request to a file
exports.logRequest = (req) => {
  const logMessage = `${new Date().toISOString()} - ${req.method} ${req.originalUrl}\n`;
  fs.appendFile(path.join(__dirname, 'requests.log'), logMessage, (err) => {
    if (err) console.error('Error logging request:', err);
  });
};
