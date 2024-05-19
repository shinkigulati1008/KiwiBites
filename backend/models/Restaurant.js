// Restaurant.js
const mongoose = require('mongoose');
const restaurantSchema = new mongoose.Schema({
  name: String,
  address: String,
  city: String,
  owner: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
});
module.exports = mongoose.model('Restaurant', restaurantSchema);
