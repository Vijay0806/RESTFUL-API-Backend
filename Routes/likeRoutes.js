import express from 'express';
import { likePost, unlikePost, getLikes } from '../controllers/likeController.js';
import { protect } from '../MiddleWare/authMiddleware.js';

const router = express.Router();

// Routes for likes
router
  .route('/:postId')
  .post(protect, likePost) // Like a post (protected)
  .delete(protect, unlikePost); // Unlike a post (protected)

router
  .route('/:postId')
  .get(getLikes); // Get all likes for a post (public)

export default router;
