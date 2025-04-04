const express = require('express');
const router = express.Router();
const Builder = require('../models/Builder');
const Contractor = require('../models/Contractor');
const Worker = require('../models/Worker');

// Create test contractor if not exists
const createTestContractor = async () => {
  try {
    const testContractor = await Contractor.findOne({ businessName: 'Test Contractor' });
    if (!testContractor) {
      const newContractor = new Contractor({
        businessName: 'Test Contractor',
        businessLicense: 'TEST123',
        businessType: 'General Contractor',
        yearsOfExperience: 5,
        licenseNumber: 'LIC123',
        insuranceInfo: 'Test Insurance',
        projectTypes: 'Residential, Commercial'
      });
      await newContractor.save();
      console.log('Test contractor created successfully');
    }
  } catch (error) {
    console.error('Error creating test contractor:', error);
  }
};

// Initialize test contractor
createTestContractor();

// Get current user profile
router.get('/me', async (req, res) => {
  try {
    // For now, return the test contractor
    const contractor = await Contractor.findOne({ businessName: 'Test Contractor' });
    if (!contractor) {
      return res.status(404).json({ message: 'Contractor not found' });
    }
    res.json(contractor);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Get all users by type
router.get('/', async (req, res) => {
  try {
    const type = req.query.type; // builder, contractor, or worker
    let users;
    
    switch (type) {
      case 'builder':
        users = await Builder.find();
        break;
      case 'contractor':
        users = await Contractor.find();
        break;
      case 'worker':
        users = await Worker.find();
        break;
      default:
        return res.status(400).json({ message: 'Invalid user type' });
    }
    
    res.json(users);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Get user by ID and type
router.get('/:type/:id', async (req, res) => {
  try {
    const { type, id } = req.params;
    let user;
    
    switch (type) {
      case 'builder':
        user = await Builder.findById(id);
        break;
      case 'contractor':
        user = await Contractor.findById(id);
        break;
      case 'worker':
        user = await Worker.findById(id);
        break;
      default:
        return res.status(400).json({ message: 'Invalid user type' });
    }
    
    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }
    res.json(user);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Create user by type
router.post('/:type', async (req, res) => {
  try {
    const { type } = req.params;
    let newUser;
    
    switch (type) {
      case 'builder':
        newUser = new Builder(req.body);
        break;
      case 'contractor':
        newUser = new Contractor(req.body);
        break;
      case 'worker':
        newUser = new Worker(req.body);
        break;
      default:
        return res.status(400).json({ message: 'Invalid user type' });
    }
    
    const savedUser = await newUser.save();
    res.status(201).json(savedUser);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

// Update user by type and ID
router.put('/:type/:id', async (req, res) => {
  try {
    const { type, id } = req.params;
    let user;
    
    switch (type) {
      case 'builder':
        user = await Builder.findByIdAndUpdate(id, req.body, { new: true });
        break;
      case 'contractor':
        user = await Contractor.findByIdAndUpdate(id, req.body, { new: true });
        break;
      case 'worker':
        user = await Worker.findByIdAndUpdate(id, req.body, { new: true });
        break;
      default:
        return res.status(400).json({ message: 'Invalid user type' });
    }
    
    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }
    res.json(user);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

module.exports = router; 