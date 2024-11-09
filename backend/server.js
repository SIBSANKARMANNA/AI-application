// // backend/server.js

// const express = require('express');
// const dotenv = require('dotenv');
// const connectDB = require('./config/db');
// const routes = require('./routes');
// const { logRequest } = require('./utils/logger'); // Optional logger
// const cors = require("cors");

// dotenv.config(); // Load environment variables

// const app = express();
// const PORT = process.env.PORT || 5000;

// // Connect to MongoDB
// connectDB();
// app.use(cors());
// // Middleware
// app.use(express.json()); // For parsing application/json
// app.use((req, res, next) => {
//   logRequest(req); // Log each request (optional)
//   next();
// });

// // Use routes
// app.use('/api', routes);

// // Start server
// app.listen(PORT, () => {
//   console.log(`Server running on http://localhost:${PORT}`);
// });

// backend/server.js

const express = require('express');
const dotenv = require('dotenv');
const connectDB = require('./config/db');
const routes = require('./routes');
const { logRequest } = require('./utils/logger'); // Optional logger
const cors = require("cors");
const path = require('path');

dotenv.config(); // Load environment variables

const app = express();
app.use(express.json());
// app.use('/uploads', express.static('uploads'));
app.use('/uploads', express.static(path.join(__dirname, 'uploads')));
const PORT = process.env.PORT || 5000;

// Connect to MongoDB
connectDB();
app.use(cors());

// // Conditional JSON parsing middleware
// app.use((req, res, next) => {
//   // Only parse JSON for requests that might have a body
//   if (['POST', 'PUT', 'DELETE'].includes(req.method)) {
//     express.json()(req, res, next);
//   } else {
//     next();
//   }
// });

// Optional logger for each request
app.use((req, res, next) => {
  logRequest(req);
  next();
});

// Use routes
app.use('/api', routes);

// Start server
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});

