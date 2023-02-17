const Movie = require('../../models/movieModel');

const addTofavorites = async (args) => {
  try {
    const { movieId, favorite } = args.movie;
    const filter = { movieId };
    const update = { favorite };
    const updated = await Movie.findOneAndUpdate(filter, update, { new: true });
    return updated;
  } catch (error) {
    console.log('cannot update movies favorite! :(' + error);
  }
}

module.exports = addTofavorites;
