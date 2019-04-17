const express = require('express');
const app = express();
const parser = require('body-parser');
const MongoClient = require('mongodb').MongoClient;
const createRouter = require('./helpers/create_router.js');
const path = require('path');

const publicPath = path.join(__dirname, '../client/public' )
app.use(express.static(publicPath));

app.use(parser.json());

MongoClient.connect('mongodb://localhost:27017')
  .then((client) => {
    const db = client.db('bucket_list');
    const bucketListCollection = db.collection('bucket_list');
    const bucketListRouter = createRouter(bucketListCollection);
    app.use('/api/bucketlist', bucketListRouter);
  });

app.listen(3000, function () {
  console.log(`Listening on Port ${ this.address().port}`);
});
