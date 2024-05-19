const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
//const kafka = require('./kafka');
const app = express();

mongoose.connect('mongodb://localhost:27017/ubereats', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

app.use(bodyParser.json());

const customerRoutes = require('./routes/customerRoutes');
const restaurantRoutes = require('./routes/restaurantRoutes');
const orderRoutes = require('./routes/orderRoutes');

app.use('/api/customers', customerRoutes);
app.use('/api/restaurants', restaurantRoutes);
app.use('/api/orders', orderRoutes);

app.listen(5000, () => {
  console.log('Server is running on port 5000');
});
