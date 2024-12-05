// authRoutes.js
import express from 'express';  // Import express using ES module syntax
import { register, login } from '../controllers/authController.js';  // Import functions using named imports

const router = express.Router();

// Define the routes
router.post('/register', register);
router.post('/login', login);

// Export the router using ES module export syntax
export default router;


// {
//     "user": {
//         "username": "viji",
//         "email": "viji@gmail.com",
//         "password": "$2a$10$L7Q3ud/UNjoGySc/3BEFquSmvTRtqoRCvVazdSUL2YafMHZTp1kk2",
//         "role": "user",
//         "_id": "67511c82c0e9fea7280e46f2",
//         "createdAt": "2024-12-05T03:22:42.074Z",
//         "updatedAt": "2024-12-05T03:22:42.074Z",
//         "__v": 0
//     },
//     "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY3NTExYzgyYzBlOWZlYTcyODBlNDZmMiIsInJvbGUiOiJ1c2VyIiwiaWF0IjoxNzMzMzY4OTYyLCJleHAiOjE3MzM0NTUzNjJ9.D46804JufAqyGAN4K0d-oYRNJmm0PbnGnyiSqvSo2fI"
// }
