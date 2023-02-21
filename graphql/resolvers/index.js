const createMovie = require('./createMovie');
const addLike = require('./addLike');
const addTofavorites = require('./addTofavorites');
const findMovieById = require('./findMovieById');

module.exports = {
  findMovieById,
  createMovie,
  addLike,
  addTofavorites,
}