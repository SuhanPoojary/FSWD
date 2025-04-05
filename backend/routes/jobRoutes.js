
const express = require('express');
const jobController = require('../controllers/jobController');
const authMiddleware = require('../middleware/authMiddleware');

const router = express.Router();

// Public routes
router.get('/', jobController.getAllJobs);
router.get('/:id', jobController.getJob);

// Protect all routes after this middleware
router.use(authMiddleware.protect);

router.post('/', jobController.createJob);
router.patch('/:id', jobController.updateJob);
router.delete('/:id', jobController.deleteJob);

router.post('/:id/apply', jobController.applyForJob);
router.patch('/applications/status', jobController.updateApplicationStatus);

router.get('/worker/recommended', jobController.getJobsForWorker);
router.get('/contractor/myjobs', jobController.getContractorJobs);

module.exports = router;
