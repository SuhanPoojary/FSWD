
const mongoose = require('mongoose');

const projectSchema = new mongoose.Schema({
  postedBy: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: [true, 'A project must have a professional']
  },
  title: {
    type: String,
    required: [true, 'Project title is required']
  },
  projectType: {
    type: String,
    required: [true, 'Project type is required']
  },
  location: {
    type: String,
    required: [true, 'Project location is required']
  },
  startDate: Date,
  duration: String,
  budget: String,
  hourlyRate: String,
  description: String,
  skillsRequired: [String],
  equipmentNeeded: [String],
  images: [String],
  status: {
    type: String,
    enum: ['draft', 'active', 'completed', 'cancelled'],
    default: 'active'
  },
  contractors: [{
    contractor: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User'
    },
    status: {
      type: String,
      enum: ['Pending', 'Accepted', 'Rejected'],
      default: 'Pending'
    },
    appliedAt: {
      type: Date,
      default: Date.now
    }
  }],
  createdAt: {
    type: Date,
    default: Date.now
  }
}, { timestamps: true });

const Project = mongoose.model('Project', projectSchema);

module.exports = Project;
