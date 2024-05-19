const express = require('express');
const router = express.Router();
const restaurantsController = require('../controllers/restaurantsController');

// Define routes
router.get('/', restaurantsController.getRestaurants);
router.get('/:id', restaurantsController.getRestaurantById);

module.exports = router;