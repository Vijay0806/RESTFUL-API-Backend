import Joi from 'joi';

// Define the validation schema for creating a post
export const postSchema = Joi.object({
  title: Joi.string().required().min(3).max(100),  // Title is required, must be a string, and has length limits
  content: Joi.string().required(),               // Content is required, must be a string
  tags: Joi.array().items(Joi.string()).optional(), // Tags is optional, but if provided, must be an array of strings
});
