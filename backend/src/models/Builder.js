const mongoose = require('mongoose');

const builderSchema = new mongoose.Schema({
  businessName: {
    type: String,
    required: true
  },
  businessLicense: {
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

// Update the average rating whenever a new review is added
builderSchema.pre('save', function(next) {
  if (this.reviews.length > 0) {
    this.averageRating = this.reviews.reduce((acc, review) => acc + review.rating, 0) / this.reviews.length;
  }
  this.updatedAt = new Date();
  next();
});

module.exports = mongoose.model('Builder', builderSchema); 