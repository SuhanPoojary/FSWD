import Job from '../models/Job.js';
import User from '../models/User.js';

// Create a new job
const createJob = async (req, res) => {
  try {
    // Only contractors can post jobs
    if (req.user.role !== 'contractor') {
      return res.status(403).json({
        status: 'fail',
        message: 'Only contractors can post jobs'
      });
    }
    
    const newJob = await Job.create({
      ...req.body,
      postedBy: req.user.id
    });
    
    res.status(201).json({
      status: 'success',
      data: {
        job: newJob
      }
    });
  } catch (error) {
    console.error('Create job error:', error);
    res.status(400).json({
      status: 'fail',
      message: error.message
    });
  }
};

// Get all jobs
const getAllJobs = async (req, res) => {
  try {
    let filter = {};
    
    // If filter for open jobs is needed
    if (req.query.status) {
      filter.status = req.query.status;
    }
    
    // If filter for specific contractor
    if (req.query.contractor) {
      filter.postedBy = req.query.contractor;
    }
    
    const jobs = await Job.find(filter)
      .populate('postedBy', 'name email')
      .populate('applicants.worker', 'name email')
      .sort('-createdAt');
    
    res.status(200).json({
      status: 'success',
      results: jobs.length,
      data: {
        jobs
      }
    });
  } catch (error) {
    console.error('Get all jobs error:', error);
    res.status(400).json({
      status: 'fail',
      message: error.message
    });
  }
};

// Get a single job
const getJob = async (req, res) => {
  try {
    const job = await Job.findById(req.params.id)
      .populate('postedBy', 'name email')
      .populate('applicants.worker', 'name email');
    
    if (!job) {
      return res.status(404).json({
        status: 'fail',
        message: 'Job not found'
      });
    }
    
    res.status(200).json({
      status: 'success',
      data: {
        job
      }
    });
  } catch (error) {
    console.error('Get job error:', error);
    res.status(400).json({
      status: 'fail',
      message: error.message
    });
  }
};

// Update a job
const updateJob = async (req, res) => {
  try {
    const job = await Job.findById(req.params.id);
    
    if (!job) {
      return res.status(404).json({
        status: 'fail',
        message: 'Job not found'
      });
    }
    
    // Check if user is the job poster
    if (job.postedBy.toString() !== req.user.id) {
      return res.status(403).json({
        status: 'fail',
        message: 'You can only update your own jobs'
      });
    }
    
    const updatedJob = await Job.findByIdAndUpdate(
      req.params.id,
      req.body,
      {
        new: true,
        runValidators: true
      }
    );
    
    res.status(200).json({
      status: 'success',
      data: {
        job: updatedJob
      }
    });
  } catch (error) {
    console.error('Update job error:', error);
    res.status(400).json({
      status: 'fail',
      message: error.message
    });
  }
};

// Delete a job
const deleteJob = async (req, res) => {
  try {
    const job = await Job.findById(req.params.id);
    
    if (!job) {
      return res.status(404).json({
        status: 'fail',
        message: 'Job not found'
      });
    }
    
    // Check if user is the job poster
    if (job.postedBy.toString() !== req.user.id) {
      return res.status(403).json({
        status: 'fail',
        message: 'You can only delete your own jobs'
      });
    }
    
    await Job.findByIdAndDelete(req.params.id);
    
    res.status(204).json({
      status: 'success',
      data: null
    });
  } catch (error) {
    console.error('Delete job error:', error);
    res.status(400).json({
      status: 'fail',
      message: error.message
    });
  }
};

// Apply for a job
const applyForJob = async (req, res) => {
  try {
    // Only workers can apply for jobs
    if (req.user.role !== 'worker') {
      return res.status(403).json({
        status: 'fail',
        message: 'Only workers can apply for jobs'
      });
    }
    
    const job = await Job.findById(req.params.id);
    
    if (!job) {
      return res.status(404).json({
        status: 'fail',
        message: 'Job not found'
      });
    }
    
    // Check if worker has already applied
    const alreadyApplied = job.applicants.find(
      app => app.worker.toString() === req.user.id
    );
    
    if (alreadyApplied) {
      return res.status(400).json({
        status: 'fail',
        message: 'You have already applied for this job'
      });
    }
    
    // Add applicant
    job.applicants.push({
      worker: req.user.id,
      status: 'Pending'
    });
    
    await job.save();
    
    res.status(200).json({
      status: 'success',
      message: 'Application submitted successfully',
      data: {
        job
      }
    });
  } catch (error) {
    console.error('Apply for job error:', error);
    res.status(400).json({
      status: 'fail',
      message: error.message
    });
  }
};

// Update application status (for contractors)
const updateApplicationStatus = async (req, res) => {
  try {
    const { jobId, workerId, status } = req.body;
    
    // Only contractors can update application status
    if (req.user.role !== 'contractor') {
      return res.status(403).json({
        status: 'fail',
        message: 'Only contractors can update application status'
      });
    }
    
    const job = await Job.findById(jobId);
    
    if (!job) {
      return res.status(404).json({
        status: 'fail',
        message: 'Job not found'
      });
    }
    
    // Check if user is the job poster
    if (job.postedBy.toString() !== req.user.id) {
      return res.status(403).json({
        status: 'fail',
        message: 'You can only update applications for your own jobs'
      });
    }
    
    // Find and update the applicant
    const applicant = job.applicants.find(
      app => app.worker.toString() === workerId
    );
    
    if (!applicant) {
      return res.status(404).json({
        status: 'fail',
        message: 'Applicant not found'
      });
    }
    
    applicant.status = status;
    
    await job.save();
    
    res.status(200).json({
      status: 'success',
      message: 'Application status updated successfully',
      data: {
        job
      }
    });
  } catch (error) {
    console.error('Update application status error:', error);
    res.status(400).json({
      status: 'fail',
      message: error.message
    });
  }
};

// Get jobs for worker (recommended jobs)
const getJobsForWorker = async (req, res) => {
  try {
    // Get all open jobs
    const jobs = await Job.find({ status: 'Open' })
      .populate('postedBy', 'name email')
      .sort('-postedDate');
    
    res.status(200).json({
      status: 'success',
      results: jobs.length,
      data: {
        jobs
      }
    });
  } catch (error) {
    console.error('Get jobs for worker error:', error);
    res.status(400).json({
      status: 'fail',
      message: error.message
    });
  }
};

// Get jobs posted by a contractor
const getContractorJobs = async (req, res) => {
  try {
    const jobs = await Job.find({ postedBy: req.user.id })
      .populate('applicants.worker', 'name email')
      .sort('-postedDate');
    
    res.status(200).json({
      status: 'success',
      results: jobs.length,
      data: {
        jobs
      }
    });
  } catch (error) {
    console.error('Get contractor jobs error:', error);
    res.status(400).json({
      status: 'fail',
      message: error.message
    });
  }
};

export {
  createJob,
  getAllJobs,
  getJob,
  updateJob,
  deleteJob,
  applyForJob,
  updateApplicationStatus,
  getJobsForWorker,
  getContractorJobs
};
