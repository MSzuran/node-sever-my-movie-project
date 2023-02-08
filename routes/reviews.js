const express = require('express');
const router = express.Router();
const { MongoClient } = require('mongodb');
const uri = process.env.DATABASE_URI;

router.get('/', (req, res) => {
  const listOfDbs = dbAccess();
  res.send('hi' + listOfDbs);
})

async function dbAccess() {
  const client = new MongoClient(uri);
  try {
    await client.connect();
    console.log('connected to db');
    const dbLists = await client.db().admin().listDatabases();
    return dbLists.databases;
  } catch (e) {
    console.error(e);
  }
}

module.exports = router;
