// Dish.js
const mongoose = require('mongoose');
const dishSchema = new mongoose.Schema({
  name: String,
  price: Number,
  restaurant: { type: mongoose.Schema.Types.ObjectId, ref: 'Restaurant' },
});
module.exports = mongoose.model('Dish', dishSchema);
