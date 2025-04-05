import express from 'express';
import { signup, login, logout, getCurrentUser } from '../controllers/authController.js';
import { protect, restrictTo } from '../middleware/authMiddleware.js';

const router = express.Router();

router.post('/signup', signup);
router.post('/login', login);
router.get('/logout', logout);
router.get('/me', protect, getCurrentUser);

export default router;