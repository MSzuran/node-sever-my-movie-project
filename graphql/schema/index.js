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

  input MovieLikeInput {
    movieId: String!
    poster: String
    title: String!
    liked: Boolean!
    releaseDate: String!
  }

  input MovieFavoriteInput {
    movieId: String!
    poster: String
    title: String!
    favorite: Boolean!
    releaseDate: String!
  }

  type Query {
    findMovieById(movieId: String!): Movie
  }
  
  type Mutation {
    createMovie(movie: MovieInput): Movie
    addLike(movie: MovieLikeInput): Movie
    addTofavorites(movie: MovieFavoriteInput): Movie
  }

  schema {
    query: Query
    mutation: Mutation
  }
`)
