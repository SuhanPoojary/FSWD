const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true,
    unique: true
  },
  phone: String,
  role: {
    type: String,
    enum: ['worker', 'contractor', 'builder'],
    required: true
  },
  location: String,
  title: String,
  experience: Number,
  hourlyRate: Number,
  about: String,
  skills: [String],
  rating: {
    type: Number,
    default: 0
  },
  reviews: {
    type: Number,
    default: 0
  },
  availability: {
    type: String,
    default: 'Available Now'
  },
  profileImage: String
}, {
  timestamps: true
});

module.exports = mongoose.model('User', userSchema); 