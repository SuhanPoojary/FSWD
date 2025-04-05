
const express = require('express');
const userController = require('../controllers/userController');
const authMiddleware = require('../middleware/authMiddleware');

const router = express.Router();

// Protect all routes after this middleware
router.use(authMiddleware.protect);

router.get('/profile', userController.getProfile);
router.get('/profile/:userId', userController.getProfile);
router.patch('/profile', userController.updateProfile);

router.get('/workers', userController.getAllWorkers);
router.get('/professionals', userController.getAllProfessionals);
router.get('/contractors', userController.getAllContractors);

module.exports = router;
