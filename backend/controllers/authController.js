
const jwt = require('jsonwebtoken');
const User = require('../models/User');
const WorkerProfile = require('../models/WorkerProfile');
const ContractorProfile = require('../models/ContractorProfile');
const ProfessionalProfile = require('../models/ProfessionalProfile');

// Sign JWT token
const signToken = id => {
  return jwt.sign({ id }, process.env.JWT_SECRET, {
    expiresIn: process.env.JWT_EXPIRES_IN
  });
};

// Send token response
const createSendToken = (user, statusCode, res) => {
  const token = signToken(user._id);
  
  // Set cookie options
  const cookieOptions = {
    expires: new Date(
      Date.now() + parseInt(process.env.JWT_EXPIRES_IN) * 24 * 60 * 60 * 1000
    ),
    httpOnly: true
  };
  
  // Send cookie
  res.cookie('jwt', token, cookieOptions);
  
  // Remove password from output
  user.password = undefined;
  
  res.status(statusCode).json({
    status: 'success',
    token,
    data: {
      user
    }
  });
};

// Sign up user
exports.signup = async (req, res) => {
  try {
    const { name, email, password, role, phone, location } = req.body;
    
    // Check if email already exists
    const userExists = await User.findOne({ email });
    if (userExists) {
      return res.status(400).json({
        status: 'fail',
        message: 'Email already registered. Please use a different email or login.'
      });
    }
    
    // Create new user
    const newUser = await User.create({
      name,
      email,
      password,
      role,
      phone,
      location
    });
    
    // Create empty profile based on role
    if (role === 'worker') {
      await WorkerProfile.create({ user: newUser._id });
    } else if (role === 'contractor') {
      await ContractorProfile.create({ 
        user: newUser._id,
        companyName: req.body.companyName || 'Company Name'
      });
    } else if (role === 'professional') {
      await ProfessionalProfile.create({ user: newUser._id });
    }
    
    createSendToken(newUser, 201, res);
  } catch (error) {
    console.error('Signup error:', error);
    res.status(400).json({
      status: 'fail',
      message: error.message
    });
  }
};

// Login user
exports.login = async (req, res) => {
  try {
    const { email, password } = req.body;
    
    // Check if email and password exist
    if (!email || !password) {
      return res.status(400).json({
        status: 'fail',
        message: 'Please provide email and password'
      });
    }
    
    // Check if user exists and password is correct
    const user = await User.findOne({ email }).select('+password');
    
    if (!user || !(await user.correctPassword(password, user.password))) {
      return res.status(401).json({
        status: 'fail',
        message: 'Incorrect email or password'
      });
    }
    
    // If everything is correct, send token to client
    createSendToken(user, 200, res);
  } catch (error) {
    console.error('Login error:', error);
    res.status(400).json({
      status: 'fail',
      message: error.message
    });
  }
};

// Logout user
exports.logout = (req, res) => {
  res.cookie('jwt', 'loggedout', {
    expires: new Date(Date.now() + 10 * 1000),
    httpOnly: true
  });
  
  res.status(200).json({ status: 'success' });
};

// Get current user
exports.getCurrentUser = async (req, res) => {
  try {
    let user = await User.findById(req.user.id);
    
    if (!user) {
      return res.status(404).json({
        status: 'fail',
        message: 'User not found'
      });
    }
    
    // Get profile based on role
    let profile;
    if (user.role === 'worker') {
      profile = await WorkerProfile.findOne({ user: user._id });
    } else if (user.role === 'contractor') {
      profile = await ContractorProfile.findOne({ user: user._id });
    } else if (user.role === 'professional') {
      profile = await ProfessionalProfile.findOne({ user: user._id });
    }
    
    res.status(200).json({
      status: 'success',
      data: {
        user,
        profile
      }
    });
  } catch (error) {
    console.error('Get current user error:', error);
    res.status(400).json({
      status: 'fail',
      message: error.message
    });
  }
};
