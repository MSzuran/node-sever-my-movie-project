const Movie = require('../../models/movieModel');

const addLike = async (args) => {
  try {
    const { movieId, liked } = args.movie;
    const filter = { movieId };
    const update = { liked };
    const updated = await Movie.findOneAndUpdate(filter, update, { new: true });
    return updated;
  } catch (error) {
    console.log('cannot update movies like! :(' + error);
  }
}

module.exports = addLike;
