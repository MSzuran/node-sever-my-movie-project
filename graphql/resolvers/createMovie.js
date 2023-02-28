const Movie = require('../../models/movieModel');

const createMovie = async (args) => {
  try {
    const {
      movieId,
      poster='',
      title,
      liked,
      favorite,
      releaseDate
    } = args;
    
    const movie = new Movie({
      movieId,
      poster,
      title,
      liked,
      favorite,
      releaseDate,
    });

    const newMovie = await movie.save();
    return newMovie;
  } catch (error) {
    console.log('cannot create new movie! :(' + error);
  }
}

module.exports = createMovie;
