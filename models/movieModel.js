const mongoose = require('mongoose');

const movieSchema = new mongoose.Schema({
  movieId: {
    type: String,
    required: true,
  },
  poster: {
    type: String,
  },
  title: {
    type: String,
    required: true,
  },
  liked: {
    type: Boolean,
    default: false,
  },
  favorite: {
    type: Boolean,
    default: false,
  },
})

module.exports = mongoose.model('Movie', movieSchema);
