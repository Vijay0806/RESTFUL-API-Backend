import mongoose from 'mongoose';

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URL, {
      // useNewUrlParser: true,
      // useUnifiedTopology: true,
    });
    console.log('MongoDB connected 😍😍 ');
  } catch (error) {
    console.error('Database connection failed:', error.message);
    process.exit(1);
  }
};

export default connectDB; // Using export default for ES Modules
