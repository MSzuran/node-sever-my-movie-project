const Movie = require('../../models/movieModel');
const createMovie = require('./createMovie');
const addLike = require('./addLike');
const addTofavorites = require('./addTofavorites');

module.exports = {
  movies: async () => {
    try {
      const moviesCollection = await Movie.find();
      return moviesCollection;
    } catch (error) {
      console.log('can not get movies collection! :( ' + error);
    }
  },
  createMovie,
  addLike,
  addTofavorites,
}