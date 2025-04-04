import mongoose from 'mongoose';

const userProfileSchema = new mongoose.Schema({
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true
  },
  role: {
    type: String,
    enum: ['builder', 'contractor', 'worker'],
    required: true
  },
  // Common fields for all roles
  fullName: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true
  },
  phone: {
    type: String,
    required: true
  },
  location: {
    type: String,
    required: true
  },
  // Builder specific fields
  businessName: String,
  businessLicense: String,
  yearsOfExperience: String,
  licenseNumber: String,
  insuranceInfo: String,
  projectTypes: String,
  // Contractor specific fields
  businessType: String,
  // Worker specific fields
  skills: [String],
  certifications: [String],
  availability: String,
  hourlyRate: Number,
  createdAt: {
    type: Date,
    default: Date.now
  },
  updatedAt: {
    type: Date,
    default: Date.now
  }
});

// Update the updatedAt field before saving
userProfileSchema.pre('save', function(next) {
  this.updatedAt = new Date();
  next();
});

const UserProfile = mongoose.model('UserProfile', userProfileSchema);

export default UserProfile; 