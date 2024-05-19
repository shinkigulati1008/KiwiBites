// Order.js
const mongoose = require('mongoose');
const orderSchema = new mongoose.Schema({
  customer: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
  restaurant: { type: mongoose.Schema.Types.ObjectId, ref: 'Restaurant' },
  dishes: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Dish' }],
  status: { type: String, enum: ['placed', 'preparing', 'delivered'], default: 'placed' },
});
module.exports = mongoose.model('Order', orderSchema);
