const mongoose = require('mongoose');

const contractorSchema = new mongoose.Schema({
  businessName: {
    type: String,
    required: true
  },
  businessLicense: {
    type: String,
    required: true
  },
  businessType: {
    type: String,
    required: true
  },
  yearsOfExperience: {
    type: Number,
    required: true
  },
  licenseNumber: {
    type: String,
    required: true
  },
  insuranceInfo: {
    type: String,
    required: true
  },
  projectTypes: {
    type: String,
    required: true
  },
  phoneNumber: {
    type: String,
    required: true
  },
  createdAt: {
    type: Date,
    default: Date.now
  },
  updatedAt: {
    type: Date,
    default: Date.now
  }
});

module.exports = mongoose.model('Contractor', contractorSchema); 