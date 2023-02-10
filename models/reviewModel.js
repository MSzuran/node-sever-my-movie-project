const mongoose = require('mongoose');

const reviewSchema = new mongoose.Schema({
  author: {
    type: String, 
    required: true
  }, 
  reviewDescription: {
    type: String, 
    required: true
  },
  movieId: {
    type: Number,
    required: true,
  },
}, { timestamps: true })

module.exports = mongoose.model('Review', reviewSchema);