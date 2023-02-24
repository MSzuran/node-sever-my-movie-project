const express = require('express');
const router = express.Router();
const Movie = require('../models/movieModel');

router.get('/', async (req, res) => {
  try {
    const favoritesMoviesArray = await Movie.find({ favorite: true });
    res.json(favoritesMoviesArray);
  } catch (error) {
    res.status(404);
    console.error('Cannot get favorties movies! ' + error);
  }
})

module.exports = router;
