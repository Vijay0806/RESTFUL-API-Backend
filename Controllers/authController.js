import User from '../Models/User.js'; // Use `import` for User model
import jwt from 'jsonwebtoken'; // Use `import` for jwt module

// Helper function to generate token
const generateToken = (user) => {
  return jwt.sign({ id: user._id, role: user.role }, process.env.JWT_SECRET, {
    expiresIn: process.env.JWT_EXPIRES_IN,
  });
};

// Register function
export const register = async (req, res) => {
  try {
    const { username, email, password } = req.body;
    const user = await User.create({ username, email, password });
    const token = generateToken(user);
    res.status(201).json({ user, token });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// Login function
export const login = async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await User.findOne({ email });
    if (!user || !(await user.comparePassword(password))) {
      return res.status(401).json({ error: 'Invalid credentials' });
    }
    const token = generateToken(user);
    res.status(200).json({ user, token });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};
