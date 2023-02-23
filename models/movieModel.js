const mongoose = require('mongoose');

const movieSchema = new mongoose.Schema({
  movieId: {
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
