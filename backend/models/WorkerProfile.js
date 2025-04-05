import mongoose from 'mongoose';

const workerProfileSchema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true,
    unique: true
  },
  skills: [String],
  experience: String,
  hourlyRate: String,
  availability: String,
  education: String,
  certificates: [String],
  about: String,
  profileImage: String,
  previousProjects: [String],
  contactDetails: {
    email: String,
    phone: String,
    address: String
  }
}, { timestamps: true });

const WorkerProfile = mongoose.model('WorkerProfile', workerProfileSchema);

export default WorkerProfile;
