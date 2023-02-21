const { buildSchema } = require('graphql');

module.exports = buildSchema(`
  type Movie {
    _id: ID!
    movieId: Int!
    liked: Boolean
    favorite: Boolean
  }

  input MovieInput {
    movieId: Int!
    liked: Boolean
    favorite: Boolean
  }

  type Query {
    findMovieById(movieId: Int!): Movie
  }
  
  type Mutation {
    createMovie(movie: MovieInput): Movie
    addLike(movie: MovieInput): Movie
    addTofavorites(movie: MovieInput): Movie
  }

  schema {
    query: Query
    mutation: Mutation
  }
`)
