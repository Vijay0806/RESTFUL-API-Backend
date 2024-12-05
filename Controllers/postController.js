import Post from '../Models/Post.js';  // Assuming you're using ES modules
import Joi from 'joi';
import { postSchema } from '../Utils/validationSchemas.js';  // Assuming this is the validation schema you created

// Create a new post
export const createPost = async (req, res) => {
  try {
    // // Validate the request body
    // const { error } = postSchema.validate(req.body);
    // if (error) return res.status(400).json({ error: error.details.map((e) => e.message) });
     
    // Validate the request body using Joi
    const { error } = postSchema.validate(req.body);
    if (error) {
      return res.status(400).json({ error: error.details.map((e) => e.message) });
    }
    // If validation passes, create the post
    const { title, content, tags } = req.body;
    const post = await Post.create({ title, content, tags, author: req.user.id });
    res.status(201).json(post);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// Get all posts
export const getPosts = async (req, res) => {
  try {
    const posts = await Post.find().populate('author', 'username');
    res.status(200).json(posts);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// Update a post
export const updatePost = async (req, res) => {
  try {
    const post = await Post.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.status(200).json(post);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// Delete a post
export const deletePost = async (req, res) => {
  try {
    await Post.findByIdAndDelete(req.params.id);
    res.status(200).json({ message: 'Post deleted successfully' });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};
