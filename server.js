const express = require('express');
const app = express();

const cors = require('cors');

require('dotenv').config();
const port = process.env.PORT;

const router = require('./routes/reviews');

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(cors());

app.use('/', router);

app.listen(port, () => console.log(`listening on port ${port}`));
