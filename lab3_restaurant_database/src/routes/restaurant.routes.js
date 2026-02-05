const express = require('express');
const router = express.Router();
const Restaurant = require('../models/restaurant.model');

router.get('/', async (req, res) => {
  try {
    const { sortBy } = req.query;

    if (sortBy) {
      const order = sortBy.toUpperCase() === 'DESC' ? -1 : 1;

      const restaurants = await Restaurant.find(
        {},
        { _id: 1, cuisine: 1, name: 1, city: 1, restaurant_id: 1 }
      ).sort({ restaurant_id: order });

      return res.json(
        restaurants.map(r => ({
          id: r._id,
          cuisines: r.cuisine,
          name: r.name,
          city: r.city,
          resturant_id: r.restaurant_id
        }))
      );
    }

    const restaurants = await Restaurant.find({});
    res.json(restaurants);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

router.get('/cuisine/:cuisine', async (req, res) => {
  try {
    const restaurants = await Restaurant.find({
      cuisine: req.params.cuisine
    });
    res.json(restaurants);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

router.get('/:cuisine', async (req, res) => {
  try {
    const restaurants = await Restaurant.find(
      {
        cuisine: req.params.cuisine,
        city: { $ne: 'Brooklyn' }
      },
      { _id: 0, cuisine: 1, name: 1, city: 1 }
    ).sort({ name: 1 });

    res.json(
      restaurants.map(r => ({
        cuisines: r.cuisine,
        name: r.name,
        city: r.city
      }))
    );
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

module.exports = router;
