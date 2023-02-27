const { buildSchema } = require('graphql');

module.exports = buildSchema(`
  type Movie {
    _id: ID!
    movieId: String!
    poster: String
    title: String!
    liked: Boolean
    favorite: Boolean
    releaseDate: String!
  }

  input MovieInput {
    movieId: String!
    poster: String
    title: String!
    liked: Boolean
    favorite: Boolean
    releaseDate: String!
  }

  type Query {
    findMovieById(movieId: String!): Movie
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
