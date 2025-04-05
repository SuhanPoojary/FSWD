import express from 'express';
import {
  updateProfile,
  getProfile,
  getAllWorkers,
  getAllProfessionals,
  getAllContractors
} from '../controllers/userController.js';
import { protect } from '../middleware/authMiddleware.js';

const router = express.Router();

// Protect all routes after this middleware
router.use(protect);

router.get('/profile', getProfile);
router.get('/profile/:userId', getProfile);
router.patch('/profile', updateProfile);

router.get('/workers', getAllWorkers);
router.get('/professionals', getAllProfessionals);
router.get('/contractors', getAllContractors);

export default router;
