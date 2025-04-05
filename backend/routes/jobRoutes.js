import express from 'express';
import {
  createJob,
  getAllJobs,
  getJob,
  updateJob,
  deleteJob,
  applyForJob,
  updateApplicationStatus,
  getJobsForWorker,
  getContractorJobs
} from '../controllers/jobController.js';
import { protect } from '../middleware/authMiddleware.js';

const router = express.Router();

// Public routes
router.get('/', getAllJobs);
router.get('/:id', getJob);

// Protect all routes after this middleware
router.use(protect);

router.post('/', createJob);
router.patch('/:id', updateJob);
router.delete('/:id', deleteJob);

router.post('/:id/apply', applyForJob);
router.patch('/applications/status', updateApplicationStatus);

router.get('/worker/recommended', getJobsForWorker);
router.get('/contractor/myjobs', getContractorJobs);

export default router;