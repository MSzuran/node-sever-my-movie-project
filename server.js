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

const router = require('./routes/reviews');

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());
app.use('/api/reviews', router);

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
