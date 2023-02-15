const express = require('express');
const router = express.Router();
const Review = require('../models/reviewModel');

router.get('/', async (req, res) => {
  try {
    const reviews = await Review.find();
    res.json(reviews);
  } catch (error) {
    res.status(404);
    console.error('can not get reviews :( ' + error);
  }
})

router.post('/addNew', async (req, res) => {
  const { author, reviewDescription, movieId } = req.body.data;
  try {
    await Review.create({author, reviewDescription, movieId});
    res.status(200);
  } catch (error) {
    res.status(400);
    console.error('can not add new review :( ' + error);
  }
})

module.exports = router;
