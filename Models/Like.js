import mongoose from 'mongoose';

const likeSchema = mongoose.Schema(
  {
    postId: { type: mongoose.Schema.Types.ObjectId, ref: 'Post', required: true },
    user: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  },
  { timestamps: true }
);

export default mongoose.model('Like', likeSchema);
