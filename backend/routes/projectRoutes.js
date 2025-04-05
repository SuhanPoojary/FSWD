import express from 'express';
import {
  createProject,
  getAllProjects,
  getProject,
  updateProject,
  deleteProject,
  applyForProject,
  updateContractorStatus,
  getProjectsForContractor,
  getProfessionalProjects
} from '../controllers/projectController.js';
import { protect } from '../middleware/authMiddleware.js';

const router = express.Router();

// Public routes
router.get('/', getAllProjects);
router.get('/:id', getProject);

// Protect all routes after this middleware
router.use(protect);

router.post('/', createProject);
router.patch('/:id', updateProject);
router.delete('/:id', deleteProject);

router.post('/:id/apply', applyForProject);
router.patch('/contractors/status', updateContractorStatus);

router.get('/contractor/available', getProjectsForContractor);
router.get('/professional/myprojects', getProfessionalProjects);

export default router;
