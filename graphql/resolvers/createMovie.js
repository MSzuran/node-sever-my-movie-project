const Movie = require('../../models/movieModel');

const createMovie = async (args) => {
  try {
    const { movieId, liked, favorite } = args.movie;
    const movie = new Movie({
      movieId,
      liked,
      favorite,
    });
    const newMovie = await movie.save();
    return newMovie;
  } catch (error) {
    console.log('cannot create new movie! :(' + error);
  }
}

module.exports = createMovie;
