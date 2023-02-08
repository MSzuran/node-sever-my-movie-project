const express = require('express');
const router = express.Router();
const { MongoClient } = require('mongodb');
const uri = process.env.DATABASE_URI;

router.get('/', (req, res) => {
  dbAccess();
  res.send('hi');
})

async function dbAccess() {
  const client = new MongoClient(uri);
  try {
    await client.connect();
    console.log('connected to db');
    const dbLists = await client.db().admin().listDatabases();
    console.log(dbLists.databases);
    return dbLists.databases;
  } catch (e) {
    console.error(e);
  }
}

module.exports = router;
