const mongoose = require('mongoose');

const workerSchema = new mongoose.Schema({
  fullName: {
    type: String,
    required: true
  },
  yearsOfExperience: {
    type: Number,
    required: true
  },
  skills: {
    type: String,
    required: true
  },
  certifications: {
    type: String,
    required: true
  },
  phoneNumber: {
    type: String,
    required: true
  },
  hourlyRate: {
    type: Number,
    required: true
  },
  availability: {
    type: String,
    required: true
  },
  description: {
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
workerSchema.pre('save', function(next) {
  if (this.reviews.length > 0) {
    this.averageRating = this.reviews.reduce((acc, review) => acc + review.rating, 0) / this.reviews.length;
  }
  this.updatedAt = new Date();
  next();
});

module.exports = mongoose.model('Worker', workerSchema); 