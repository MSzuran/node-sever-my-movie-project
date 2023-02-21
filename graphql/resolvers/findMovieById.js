const Movie = require('../../models/movieModel');

const findMovieById = async (args) => {
  try {
    const { movieId } = args;
    const movie = await Movie.find({movieId: movieId});
    return movie;
  } catch (error) {
    console.log('can not get movie! :( ' + error);
  }
}

module.exports = findMovieById;
