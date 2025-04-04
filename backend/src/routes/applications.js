const express = require('express');
const router = express.Router();
const Application = require('../models/Application');
const Project = require('../models/Project');

// Get applications for a project
router.get('/project/:projectId', async (req, res) => {
  try {
    const applications = await Application.find({ project: req.params.projectId })
      .populate('worker')
      .sort('-createdAt');
    res.json(applications);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Apply to project
router.post('/', async (req, res) => {
  try {
    // Ensure contractor details are included
    const applicationData = {
      ...req.body,
      contractorDetails: req.body.contractorDetails || {}
    };
    
    const application = new Application(applicationData);
    await application.save();
    
    // Update project applicants count
    await Project.findByIdAndUpdate(
      req.body.project,
      { $inc: { applicantsCount: 1 } }
    );
    
    res.status(201).json(application);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

// Update application status
router.patch('/:id/status', async (req, res) => {
  try {
    const application = await Application.findByIdAndUpdate(
      req.params.id,
      { status: req.body.status },
      { new: true }
    );
    res.json(application);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

module.exports = router; 