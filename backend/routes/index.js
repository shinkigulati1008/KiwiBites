const express = require('express');
const router = express.Router();
const usersController = require('../controllers/usersController');
const restaurantsRoutes = require('./restaurants');

// User routes
router.get('/users', usersController.getUsers);
router.get('/users/:id', usersController.getUserById);
// Restaurant Routes
router.use('/restaurants', restaurantsRoutes);
module.exports = router;