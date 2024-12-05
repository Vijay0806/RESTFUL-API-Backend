import express from 'express'; 
import dotenv from 'dotenv';
import connectDB from './Database/db.js';
import { errorHandler } from './MiddleWare/errorMiddleware.js';
import apiLimiter from './MiddleWare/rateLimiter.js';

// Import routes
import authRoutes from './Routes/authRoutes.js';
import postRoutes from './Routes/PostRoutes.js';
import commentRoutes from './routes/commentRoutes.js';
import likeRoutes from './routes/likeRoutes.js';

// Initialize dotenv configuration
dotenv.config();

const app = express();

// Connect to the database
connectDB();

// Welcome route
app.get("/", (req, res) => {
  res.send("Welcome to Our API 😍");
});

// Middleware setup
app.use(express.json()); // Body parser
app.use(apiLimiter); // Rate limiter

// API Routes
app.use('/api/auth', authRoutes);
app.use('/api/posts', postRoutes);
app.use('/api/comments', commentRoutes);
app.use('/api/likes', likeRoutes);

// Error Handling Middleware
app.use(errorHandler);

// Start the server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
