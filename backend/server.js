// server.js
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const dotenv = require('dotenv');
const authRoutes = require('./routes/auth'); // Import auth routes
const userRoutes = require('./routes/user'); // Import user routes
const eventRoutes = require('./routes/event');
const homeRoutes = require('./routes/home');
// Initialize express app
const app = express();

// Load environment variables
dotenv.config();

const PORT = process.env.PORT || 5000;
const MONGO_URI = process.env.MONGO_URI;
const CLIENT_URL = process.env.CLIENT_URL;

// Middleware
app.use(cors({ origin: CLIENT_URL })); // Enable CORS for specific client origin
app.use(express.json()); // JSON parsing for request bodies

// MongoDB Connection
mongoose.connect(MONGO_URI)
  .then(() => console.log('MongoDB connected'))
  .catch(err => console.error('MongoDB connection error:', err));

// Routes
app.use('/api/auth', authRoutes); // Auth routes mounted under '/api/auth'
app.use('/api/users', userRoutes); // User routes mounted under '/api/users'
app.use('/api/events', eventRoutes);
app.use('/api/home', homeRoutes);


// Default route for testing server setup
app.get('/', (req, res) => {
  res.send('Welcome to the backend!');
});

// 404 handler for undefined routes
app.use((req, res) => {
  res.status(404).json({ message: 'Route not found' });
});

// Global error handler (optional, but useful for debugging)
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ message: 'An error occurred on the server', error: err.message });
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
