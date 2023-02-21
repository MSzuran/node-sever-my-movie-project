const Movie = require('../../models/movieModel');
const createMovie = require('./createMovie');

const addLike = async (args) => {
  try {
    const { movieId, liked } = args.movie;
    const filter = { movieId };
    const update = { liked };
    const updatedMovie = await Movie.findOneAndUpdate(filter, update, { new: true });
    if (!updatedMovie) {
      const newMovie = createMovie({movieId, liked});
      return newMovie;
    }
    return updatedMovie? updatedMovie : newMovie;
  } catch (error) {
    console.log('cannot update movies like! :(' + error);
  }
}

module.exports = addLike;
