
const mongoose = require('mongoose');

const contractorProfileSchema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true,
    unique: true
  },
  companyName: {
    type: String,
    required: [true, 'Company name is required']
  },
  businessType: String,
  establishedYear: Number,
  employees: Number,
  about: String,
  contactDetails: {
    email: String,
    phone: String,
    address: String,
    website: String
  },
  servicesOffered: [String],
  profileImage: String,
  documents: [String], // Business registration, licenses, etc.
  completedProjects: [String],
  rating: {
    type: Number,
    min: 0,
    max: 5,
    default: 0
  },
  reviews: [{
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User'
    },
    rating: Number,
    comment: String,
    date: {
      type: Date,
      default: Date.now
    }
  }]
}, { timestamps: true });

const ContractorProfile = mongoose.model('ContractorProfile', contractorProfileSchema);

module.exports = ContractorProfile;
