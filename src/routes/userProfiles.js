import express from 'express';
import UserProfile from '../models/UserProfile.js';

const router = express.Router();

// Create or update user profile
router.post('/', async (req, res) => {
  try {
    const { userId, role, ...profileData } = req.body;
    
    // Check if profile already exists
    let profile = await UserProfile.findOne({ userId });
    
    if (profile) {
      // Update existing profile
      profile = await UserProfile.findOneAndUpdate(
        { userId },
        { ...profileData, role },
        { new: true }
      );
    } else {
      // Create new profile
      profile = new UserProfile({
        userId,
        role,
        ...profileData
      });
      await profile.save();
    }
    
    res.json(profile);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Get user profile
router.get('/:userId', async (req, res) => {
  try {
    const profile = await UserProfile.findOne({ userId: req.params.userId });
    if (!profile) {
      return res.status(404).json({ message: 'Profile not found' });
    }
    res.json(profile);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Get all profiles by role
router.get('/role/:role', async (req, res) => {
  try {
    const profiles = await UserProfile.find({ role: req.params.role });
    res.json(profiles);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

export default router; 