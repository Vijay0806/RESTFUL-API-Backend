import express from 'express';
import { createComment, getComments, deleteComment } from '../Controllers/commentController.js';
import { protect } from '../MiddleWare/authMiddleware.js';
import { validateBody } from '../MiddleWare/validateInput.js';
// import { commentSchema } from '../Utils/validationSchemas.js';

const router = express.Router();

// Routes for comments
router
  .route('/')
  .get(getComments) // Fetch all comments (public or specific post filtering can be added)
  .post(protect,  createComment); // Create a comment (protected)

router
  .route('/:id')
  .delete(protect, deleteComment); // Delete a comment (protected, with ownership check)

export default router;
