// For ES Modules (with `"type": "module"` in package.json)
import Like from '../Models/Like.js';

export const likePost = async (req, res) => {
  try {
    const { postId } = req.params;

    // Check if the user has already liked the post
    const existingLike = await Like.findOne({ postId, user: req.user.id });
    if (existingLike) {
      return res.status(400).json({ message: 'You have already liked this post' });
    }

    const like = await Like.create({ postId, user: req.user.id });
    res.status(201).json({ message: 'Post liked' });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

export const unlikePost = async (req, res) => {
  try {
    const { postId } = req.params;

    const like = await Like.findOne({ postId, user: req.user.id });
    if (!like) return res.status(404).json({ message: 'Like not found' });

    // await like.remove();
    // Delete the like
    await Like.findByIdAndDelete(like._id); // Use findByIdAndDelete or deleteOne
    res.status(200).json({ message: 'Post unliked' });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

export const getLikes = async (req, res) => {
  try {
    const { postId } = req.params;
    const likes = await Like.find({ postId }).populate('user', 'username');
    res.status(200).json(likes);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};
