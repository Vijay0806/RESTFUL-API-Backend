// ES Module (with `"type": "module"` in package.json)
import Comment from '../Models/Comment.js';

export const createComment = async (req, res) => {
  try {
    const { postId, text } = req.body;
    const comment = await Comment.create({ text, postId, user: req.user.id });
    res.status(201).json(comment);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

export const getComments = async (req, res) => {
  try {
    const comments = await Comment.find({ postId: req.query.postId }).populate('user', 'username');
    res.status(200).json(comments);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};


export const deleteComment = async (req, res) => {
  try {
    // Find the comment by its ID
    const comment = await Comment.findById(req.params.id);

    // If the comment doesn't exist, return a 404 error
    if (!comment) {
      return res.status(404).json({ message: 'Comment not found' });
    }

    // Check if the logged-in user is the owner of the comment
    if (comment.user.toString() !== req.user.id) {
      return res.status(403).json({ message: 'You cannot delete this comment' });
    }

    // Delete the comment
    await Comment.findByIdAndDelete(req.params.id); // Using findByIdAndDelete instead of remove

    // Send response confirming deletion
    res.status(200).json({ message: 'Comment deleted successfully' });
  } catch (error) {
    // Catch any errors and return a 400 status with the error message
    res.status(400).json({ error: error.message });
  }
};