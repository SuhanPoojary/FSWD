import User from '../models/User.js';
import WorkerProfile from '../models/WorkerProfile.js';
import ContractorProfile from '../models/ContractorProfile.js';
import ProfessionalProfile from '../models/ProfessionalProfile.js';

// Get profile model based on user role
const getProfileModel = (role) => {
  switch (role) {
    case 'worker':
      return WorkerProfile;
    case 'contractor':
      return ContractorProfile;
    case 'professional':
      return ProfessionalProfile;
    default:
      return null;
  }
};

// Update user profile
const updateProfile = async (req, res) => {
  try {
    const user = await User.findById(req.user.id);
    
    if (!user) {
      return res.status(404).json({
        status: 'fail',
        message: 'User not found'
      });
    }
    
    // Get profile model based on role
    const ProfileModel = getProfileModel(user.role);
    
    if (!ProfileModel) {
      return res.status(400).json({
        status: 'fail',
        message: 'Invalid user role'
      });
    }
    
    // Find and update profile
    let profile = await ProfileModel.findOne({ user: user._id });
    
    if (!profile) {
      profile = await ProfileModel.create({
        user: user._id,
        ...req.body
      });
    } else {
      profile = await ProfileModel.findOneAndUpdate(
        { user: user._id },
        req.body,
        { 
          new: true,
          runValidators: true
        }
      );
    }
    
    // Update profile completion status
    await User.findByIdAndUpdate(user._id, { profileCompleted: true });
    
    res.status(200).json({
      status: 'success',
      data: {
        profile
      }
    });
  } catch (error) {
    console.error('Update profile error:', error);
    res.status(400).json({
      status: 'fail',
      message: error.message
    });
  }
};

// Get user profile
const getProfile = async (req, res) => {
  try {
    const userId = req.params.userId || req.user.id;
    const user = await User.findById(userId);
    
    if (!user) {
      return res.status(404).json({
        status: 'fail',
        message: 'User not found'
      });
    }
    
    // Get profile model based on role
    const ProfileModel = getProfileModel(user.role);
    
    if (!ProfileModel) {
      return res.status(400).json({
        status: 'fail',
        message: 'Invalid user role'
      });
    }
    
    // Find profile
    const profile = await ProfileModel.findOne({ user: user._id });
    
    if (!profile) {
      return res.status(404).json({
        status: 'fail',
        message: 'Profile not found'
      });
    }
    
    res.status(200).json({
      status: 'success',
      data: {
        user,
        profile
      }
    });
  } catch (error) {
    console.error('Get profile error:', error);
    res.status(400).json({
      status: 'fail',
      message: error.message
    });
  }
};

// Get all workers
const getAllWorkers = async (req, res) => {
  try {
    const workers = await User.find({ role: 'worker' });
    const workerIds = workers.map(worker => worker._id);
    
    const profiles = await WorkerProfile.find({ user: { $in: workerIds } });
    
    const workersWithProfiles = workers.map(worker => {
      const profile = profiles.find(p => p.user.toString() === worker._id.toString());
      return {
        user: worker,
        profile
      };
    });
    
    res.status(200).json({
      status: 'success',
      results: workersWithProfiles.length,
      data: {
        workers: workersWithProfiles
      }
    });
  } catch (error) {
    console.error('Get all workers error:', error);
    res.status(400).json({
      status: 'fail',
      message: error.message
    });
  }
};

// Get all professionals
const getAllProfessionals = async (req, res) => {
  try {
    const professionals = await User.find({ role: 'professional' });
    const professionalIds = professionals.map(professional => professional._id);
    
    const profiles = await ProfessionalProfile.find({ user: { $in: professionalIds } });
    
    const professionalsWithProfiles = professionals.map(professional => {
      const profile = profiles.find(p => p.user.toString() === professional._id.toString());
      return {
        user: professional,
        profile
      };
    });
    
    res.status(200).json({
      status: 'success',
      results: professionalsWithProfiles.length,
      data: {
        professionals: professionalsWithProfiles
      }
    });
  } catch (error) {
    console.error('Get all professionals error:', error);
    res.status(400).json({
      status: 'fail',
      message: error.message
    });
  }
};

// Get all contractors
const getAllContractors = async (req, res) => {
  try {
    const contractors = await User.find({ role: 'contractor' });
    const contractorIds = contractors.map(contractor => contractor._id);
    
    const profiles = await ContractorProfile.find({ user: { $in: contractorIds } });
    
    const contractorsWithProfiles = contractors.map(contractor => {
      const profile = profiles.find(p => p.user.toString() === contractor._id.toString());
      return {
        user: contractor,
        profile
      };
    });
    
    res.status(200).json({
      status: 'success',
      results: contractorsWithProfiles.length,
      data: {
        contractors: contractorsWithProfiles
      }
    });
  } catch (error) {
    console.error('Get all contractors error:', error);
    res.status(400).json({
      status: 'fail',
      message: error.message
    });
  }
};

export {
  updateProfile,
  getProfile,
  getAllWorkers,
  getAllProfessionals,
  getAllContractors
};
