import express from 'express';
import { createPost, getPosts, updatePost, deletePost } from '../Controllers/postController.js';
import { protect } from '../MiddleWare/authMiddleware.js';
import { postSchema } from '../Utils/validationSchemas.js';
import { validateBody } from '../MiddleWare/validateInput.js';

const router = express.Router();

router.route('/')
  .get(getPosts)
  .post(protect, validateBody(postSchema), createPost);

router.route('/:id')
  .patch(protect, updatePost)
  .delete(protect, deletePost);

export default router;
