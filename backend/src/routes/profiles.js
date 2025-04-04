const express = require('express');
const router = express.Router();
const Builder = require('../models/Builder');
const Contractor = require('../models/Contractor');
const Worker = require('../models/Worker');

// Create builder profile
router.post('/builder', async (req, res) => {
  try {
    const builder = new Builder(req.body);
    const savedBuilder = await builder.save();
    res.status(201).json(savedBuilder);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

// Create contractor profile
router.post('/contractor', async (req, res) => {
  try {
    console.log('Received contractor profile data:', req.body);
    const contractor = new Contractor(req.body);
    console.log('Created contractor model:', contractor);
    const savedContractor = await contractor.save();
    console.log('Saved contractor:', savedContractor);
    res.status(201).json(savedContractor);
  } catch (error) {
    console.error('Error creating contractor profile:', error);
    res.status(400).json({ 
      message: error.message,
      details: error.errors || 'No additional error details'
    });
  }
});

// Create worker profile
router.post('/worker', async (req, res) => {
  try {
    const worker = new Worker(req.body);
    const savedWorker = await worker.save();
    res.status(201).json(savedWorker);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

// Get builder profile
router.get('/builder/:id', async (req, res) => {
  try {
    const builder = await Builder.findById(req.params.id);
    if (!builder) {
      return res.status(404).json({ message: 'Builder not found' });
    }
    res.json(builder);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Get contractor profile
router.get('/contractor/:id', async (req, res) => {
  try {
    const contractor = await Contractor.findById(req.params.id);
    if (!contractor) {
      return res.status(404).json({ message: 'Contractor not found' });
    }
    res.json(contractor);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Get worker profile
router.get('/worker/:id', async (req, res) => {
  try {
    const worker = await Worker.findById(req.params.id);
    if (!worker) {
      return res.status(404).json({ message: 'Worker not found' });
    }
    res.json(worker);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Update builder profile
router.put('/builder/:id', async (req, res) => {
  try {
    const builder = await Builder.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );
    if (!builder) {
      return res.status(404).json({ message: 'Builder not found' });
    }
    res.json(builder);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

// Update contractor profile
router.put('/contractor/:id', async (req, res) => {
  try {
    const contractor = await Contractor.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );
    if (!contractor) {
      return res.status(404).json({ message: 'Contractor not found' });
    }
    res.json(contractor);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

// Update worker profile
router.put('/worker/:id', async (req, res) => {
  try {
    const worker = await Worker.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );
    if (!worker) {
      return res.status(404).json({ message: 'Worker not found' });
    }
    res.json(worker);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

module.exports = router; 