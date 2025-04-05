
const mongoose = require('mongoose');

const jobSchema = new mongoose.Schema({
  postedBy: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: [true, 'A job must have a contractor']
  },
  jobTitle: {
    type: String,
    required: [true, 'Job title is required']
  },
  jobLocation: {
    type: String,
    required: [true, 'Job location is required']
  },
  jobCategory: {
    type: String,
    required: [true, 'Job category is required']
  },
  jobType: String,
  workersNeeded: {
    type: Number,
    default: 1
  },
  duration: String,
  startDate: Date,
  payRate: {
    type: String,
    required: [true, 'Pay rate is required']
  },
  paymentTerms: {
    type: String,
    default: 'Hourly'
  },
  description: String,
  requirements: String,
  benefits: String,
  applicationDeadline: Date,
  contactEmail: String,
  contactPhone: String,
  company: String,
  postedDate: {
    type: Date,
    default: Date.now
  },
  status: {
    type: String,
    enum: ['Open', 'Filled', 'Closed'],
    default: 'Open'
  },
  applicants: [{
    worker: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User'
    },
    status: {
      type: String,
      enum: ['Pending', 'Reviewed', 'Shortlisted', 'Rejected', 'Hired'],
      default: 'Pending'
    },
    appliedAt: {
      type: Date,
      default: Date.now
    }
  }]
}, { timestamps: true });

const Job = mongoose.model('Job', jobSchema);

module.exports = Job;
