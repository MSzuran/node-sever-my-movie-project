const express = require('express');
const app = express();

const cors = require('cors');

require('dotenv').config();
const port = process.env.PORT;

const router = require('./routes/reviews');

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(cors());

const mongoose = require('mongoose');
mongoose.set('strictQuery', true);
mongoose.connect(process.env.DATABASE_URL, { useNewUrlParser: true});
const db = mongoose.connection;
db.on('error', error => console.error(error));
db.once('open', () => console.log('Connected to Mongoose'));

app.use('/', router);

app.listen(port, () => console.log(`listening on port ${port}`));