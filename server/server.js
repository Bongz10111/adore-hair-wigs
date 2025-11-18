const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
require('dotenv').config();

const app = express();

// CORS configuration for production
const allowedOrigins = [
  'https://adore-wigs-frontend.onrender.com',
  'http://localhost:3000'
];

app.use(cors({
  origin: function (origin, callback) {
    if (!origin) return callback(null, true);
    if (allowedOrigins.indexOf(origin) === -1) {
      const msg = 'The CORS policy for this site does not allow access from the specified Origin.';
      return callback(new Error(msg), false);
    }
    return callback(null, true);
  },
  credentials: true
}));

app.use(express.json());

// MongoDB connection with better error handling
const MONGODB_URI = process.env.MONGODB_URI || 'mongodb://localhost:27017/adore-wigs';

mongoose.connect(MONGODB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(() => console.log('✅ Connected to MongoDB Atlas'))
.catch(err => {
  console.error('❌ MongoDB connection error:', err);
  process.exit(1);
});

// Your existing routes
app.use('/api/products', require('./routes/products'));
app.use('/api/orders', require('./routes/orders'));

// Basic route for testing
app.get('/', (req, res) => {
  res.json({ 
    message: 'Adore Wigs & Hair API is running!',
    database: 'Connected to MongoDB Atlas',
    timestamp: new Date().toISOString()
  });
});

// Health check route for Render
app.get('/health', (req, res) => {
  res.status(200).json({ 
    status: 'OK', 
    database: mongoose.connection.readyState === 1 ? 'Connected' : 'Disconnected'
  });
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`🚀 Server running on port ${PORT}`);
  console.log(`📱 API: http://localhost:${PORT}`);
  console.log(`🌐 Environment: ${process.env.NODE_ENV || 'development'}`);
});