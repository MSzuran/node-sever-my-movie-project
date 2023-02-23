const Movie = require('../../models/movieModel');
const lodash = require('lodash');

const findMovieById = async (args) => {
  try {
    const { movieId } = args;
    const movie = await Movie.find({movieId});
    return !lodash.isEmpty(movie)? movie[0] : {movieId};
  } catch (error) {
    console.log('can not get movie! :( ' + error);
  }
}

module.exports = findMovieById;
