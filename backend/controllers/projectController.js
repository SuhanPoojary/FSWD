import Project from '../models/Project.js';
import User from '../models/User.js';

// Create a new project
const createProject = async (req, res) => {
  try {
    // Only professionals can post projects
    if (req.user.role !== 'professional') {
      return res.status(403).json({
        status: 'fail',
        message: 'Only professionals can post projects'
      });
    }
    
    const newProject = await Project.create({
      ...req.body,
      postedBy: req.user.id
    });
    
    res.status(201).json({
      status: 'success',
      data: {
        project: newProject
      }
    });
  } catch (error) {
    console.error('Create project error:', error);
    res.status(400).json({
      status: 'fail',
      message: error.message
    });
  }
};

// Get all projects
const getAllProjects = async (req, res) => {
  try {
    let filter = {};
    
    // If filter for active projects is needed
    if (req.query.status) {
      filter.status = req.query.status;
    }
    
    // If filter for specific professional
    if (req.query.professional) {
      filter.postedBy = req.query.professional;
    }
    
    const projects = await Project.find(filter)
      .populate('postedBy', 'name email')
      .populate('contractors.contractor', 'name email')
      .sort('-createdAt');
    
    res.status(200).json({
      status: 'success',
      results: projects.length,
      data: {
        projects
      }
    });
  } catch (error) {
    console.error('Get all projects error:', error);
    res.status(400).json({
      status: 'fail',
      message: error.message
    });
  }
};

// Get a single project
const getProject = async (req, res) => {
  try {
    const project = await Project.findById(req.params.id)
      .populate('postedBy', 'name email')
      .populate('contractors.contractor', 'name email');
    
    if (!project) {
      return res.status(404).json({
        status: 'fail',
        message: 'Project not found'
      });
    }
    
    res.status(200).json({
      status: 'success',
      data: {
        project
      }
    });
  } catch (error) {
    console.error('Get project error:', error);
    res.status(400).json({
      status: 'fail',
      message: error.message
    });
  }
};

// Update a project
const updateProject = async (req, res) => {
  try {
    const project = await Project.findById(req.params.id);
    
    if (!project) {
      return res.status(404).json({
        status: 'fail',
        message: 'Project not found'
      });
    }
    
    // Check if user is the project poster
    if (project.postedBy.toString() !== req.user.id) {
      return res.status(403).json({
        status: 'fail',
        message: 'You can only update your own projects'
      });
    }
    
    const updatedProject = await Project.findByIdAndUpdate(
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
        project: updatedProject
      }
    });
  } catch (error) {
    console.error('Update project error:', error);
    res.status(400).json({
      status: 'fail',
      message: error.message
    });
  }
};

// Delete a project
const deleteProject = async (req, res) => {
  try {
    const project = await Project.findById(req.params.id);
    
    if (!project) {
      return res.status(404).json({
        status: 'fail',
        message: 'Project not found'
      });
    }
    
    // Check if user is the project poster
    if (project.postedBy.toString() !== req.user.id) {
      return res.status(403).json({
        status: 'fail',
        message: 'You can only delete your own projects'
      });
    }
    
    await Project.findByIdAndDelete(req.params.id);
    
    res.status(204).json({
      status: 'success',
      data: null
    });
  } catch (error) {
    console.error('Delete project error:', error);
    res.status(400).json({
      status: 'fail',
      message: error.message
    });
  }
};

// Apply for a project (for contractors)
const applyForProject = async (req, res) => {
  try {
    // Only contractors can apply for projects
    if (req.user.role !== 'contractor') {
      return res.status(403).json({
        status: 'fail',
        message: 'Only contractors can apply for projects'
      });
    }
    
    const project = await Project.findById(req.params.id);
    
    if (!project) {
      return res.status(404).json({
        status: 'fail',
        message: 'Project not found'
      });
    }
    
    // Check if contractor has already applied
    const alreadyApplied = project.contractors.find(
      app => app.contractor.toString() === req.user.id
    );
    
    if (alreadyApplied) {
      return res.status(400).json({
        status: 'fail',
        message: 'You have already applied for this project'
      });
    }
    
    // Add contractor application
    project.contractors.push({
      contractor: req.user.id,
      status: 'Pending'
    });
    
    await project.save();
    
    res.status(200).json({
      status: 'success',
      message: 'Application submitted successfully',
      data: {
        project
      }
    });
  } catch (error) {
    console.error('Apply for project error:', error);
    res.status(400).json({
      status: 'fail',
      message: error.message
    });
  }
};

// Update contractor application status (for professionals)
const updateContractorStatus = async (req, res) => {
  try {
    const { projectId, contractorId, status } = req.body;
    
    // Only professionals can update contractor status
    if (req.user.role !== 'professional') {
      return res.status(403).json({
        status: 'fail',
        message: 'Only professionals can update contractor status'
      });
    }
    
    const project = await Project.findById(projectId);
    
    if (!project) {
      return res.status(404).json({
        status: 'fail',
        message: 'Project not found'
      });
    }
    
    // Check if user is the project poster
    if (project.postedBy.toString() !== req.user.id) {
      return res.status(403).json({
        status: 'fail',
        message: 'You can only update contractors for your own projects'
      });
    }
    
    // Find and update the contractor
    const contractor = project.contractors.find(
      app => app.contractor.toString() === contractorId
    );
    
    if (!contractor) {
      return res.status(404).json({
        status: 'fail',
        message: 'Contractor not found'
      });
    }
    
    contractor.status = status;
    
    await project.save();
    
    res.status(200).json({
      status: 'success',
      message: 'Contractor status updated successfully',
      data: {
        project
      }
    });
  } catch (error) {
    console.error('Update contractor status error:', error);
    res.status(400).json({
      status: 'fail',
      message: error.message
    });
  }
};

// Get projects for contractor (available projects)
const getProjectsForContractor = async (req, res) => {
  try {
    // Get all active projects
    const projects = await Project.find({ status: 'active' })
      .populate('postedBy', 'name email')
      .sort('-createdAt');
    
    res.status(200).json({
      status: 'success',
      results: projects.length,
      data: {
        projects
      }
    });
  } catch (error) {
    console.error('Get projects for contractor error:', error);
    res.status(400).json({
      status: 'fail',
      message: error.message
    });
  }
};

// Get projects posted by a professional
const getProfessionalProjects = async (req, res) => {
  try {
    const projects = await Project.find({ postedBy: req.user.id })
      .populate('contractors.contractor', 'name email')
      .sort('-createdAt');
    
    res.status(200).json({
      status: 'success',
      results: projects.length,
      data: {
        projects
      }
    });
  } catch (error) {
    console.error('Get professional projects error:', error);
    res.status(400).json({
      status: 'fail',
      message: error.message
    });
  }
};

export {
  createProject,
  getAllProjects,
  getProject,
  updateProject,
  deleteProject,
  applyForProject,
  updateContractorStatus,
  getProjectsForContractor,
  getProfessionalProjects
};
