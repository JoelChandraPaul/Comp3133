const express = require('express');

const restaurantRoutes = require('./routes/restaurant.routes');

const app = express();

app.use(express.json());

app.use('/restaurants', restaurantRoutes);

module.exports = app;
