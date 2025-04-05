
const mongoose = require('mongoose');

const professionalProfileSchema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true,
    unique: true
  },
  title: String,
  specialization: [String],
  experience: String,
  hourlyRate: String,
  certifications: [String],
  education: [String],
  about: String,
  portfolio: [String],
  profileImage: String,
  contactDetails: {
    email: String,
    phone: String,
    address: String,
    website: String
  },
  availability: String,
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

const ProfessionalProfile = mongoose.model('ProfessionalProfile', professionalProfileSchema);

module.exports = ProfessionalProfile;
