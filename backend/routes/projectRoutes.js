
const express = require('express');
const projectController = require('../controllers/projectController');
const authMiddleware = require('../middleware/authMiddleware');

const router = express.Router();

// Public routes
router.get('/', projectController.getAllProjects);
router.get('/:id', projectController.getProject);

// Protect all routes after this middleware
router.use(authMiddleware.protect);

router.post('/', projectController.createProject);
router.patch('/:id', projectController.updateProject);
router.delete('/:id', projectController.deleteProject);

router.post('/:id/apply', projectController.applyForProject);
router.patch('/contractors/status', projectController.updateContractorStatus);

router.get('/contractor/available', projectController.getProjectsForContractor);
router.get('/professional/myprojects', projectController.getProfessionalProjects);

module.exports = router;
