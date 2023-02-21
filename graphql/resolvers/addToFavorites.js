const Movie = require('../../models/movieModel');
const createMovie = require('./createMovie');

const addTofavorites = async (args) => {
  try {
    const { movieId, favorite } = args.movie;
    const filter = { movieId };
    const update = { favorite };
    const updatedMovie = await Movie.findOneAndUpdate(filter, update, { new: true });
    if (!updatedMovie) {
      const newMovie = createMovie({movieId, favorite});
      return newMovie;
    }
    return updatedMovie || newMovie;
  } catch (error) {
    console.log('cannot update movies favorite! :(' + error);
  }
}

module.exports = addTofavorites;
