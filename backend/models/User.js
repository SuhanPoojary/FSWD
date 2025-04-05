import mongoose from 'mongoose';
import bcrypt from 'bcryptjs';
import validator from 'validator';

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, 'Please provide your name'],
    trim: true
  },
  email: {
    type: String,
    required: [true, 'Please provide your email'],
    unique: true,
    lowercase: true,
    validate: [validator.isEmail, 'Please provide a valid email']
  },
  password: {
    type: String,
    required: [true, 'Please provide a password'],
    minlength: [8, 'Password must be at least 8 characters'],
    select: false
  },
  role: {
    type: String,
    enum: ['worker', 'professional', 'contractor'],
    required: [true, 'Please specify your role']
  },
  phone: String,
  location: String,
  createdAt: {
    type: Date,
    default: Date.now
  },
  profileCompleted: {
    type: Boolean,
    default: false
  }
}, { 
  timestamps: true,
  toJSON: { virtuals: true },
  toObject: { virtuals: true }
});

// Virtual fields for different profile types
userSchema.virtual('workerProfile', {
  ref: 'WorkerProfile',
  localField: '_id',
  foreignField: 'user',
  justOne: true
});

userSchema.virtual('contractorProfile', {
  ref: 'ContractorProfile',
  localField: '_id',
  foreignField: 'user',
  justOne: true
});

userSchema.virtual('professionalProfile', {
  ref: 'ProfessionalProfile',
  localField: '_id',
  foreignField: 'user',
  justOne: true
});

// Hash password before saving
userSchema.pre('save', async function(next) {
  if (!this.isModified('password')) return next();
  
  this.password = await bcrypt.hash(this.password, 12);
  next();
});

// Compare password method
userSchema.methods.correctPassword = async function(candidatePassword, userPassword) {
  return await bcrypt.compare(candidatePassword, userPassword);
};

export default mongoose.model('User', userSchema);
