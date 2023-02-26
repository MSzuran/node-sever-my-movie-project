const express = require('express');
const app = express();
require('dotenv').config();
const cors = require('cors');
const mongoose = require('mongoose');
const { graphqlHTTP } = require('express-graphql');
const graphqlSchema = require('./graphql/schema')
const graphqlResolvers = require('./graphql/resolvers')

const uri = process.env.DATABASE_URI;
const port = process.env.PORT;

const reviewsRoute = require('./routes/reviews');
const favoritesRoute = require('./routes/favorites');

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());
app.use('/api/reviews', reviewsRoute);
app.use('/api/favorites', favoritesRoute);

app.use('/graphql', graphqlHTTP({
  schema: graphqlSchema,
  rootValue: graphqlResolvers,
  graphiql: true,
}));

mongoose.set('strictQuery', true);
mongoose.connect(uri, { useNewUrlParser: true })
  .then(() => {
    app.listen(port, () => console.log(`connect to mongodb && listening on port ${port}`));
  })
  .catch((error) => {
    throw new Error(error);
  })
