const mongoose = require('mongoose');

const addressSchema = new mongoose.Schema(
  {
    building: { type: String },
    street: { type: String, required: true },
    zipcode: { type: String }
  },
  { _id: false }
);

const restaurantSchema = new mongoose.Schema(
  {
    address: addressSchema,
    city: { type: String, required: true },
    cuisine: { type: String, required: true },
    name: { type: String, required: true },
    restaurant_id: { type: String, required: true }
  },
  { timestamps: true }
);

// third arg forces exact collection name "Restaurants"
module.exports = mongoose.model('Restaurant', restaurantSchema, 'Restaurants');
