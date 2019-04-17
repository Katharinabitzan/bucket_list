const express = require('express');
const app = express();
const parser = require('body-parser');
const MongoClient = require('mongodb').MongoClient;
const createRouter = require('./helpers/create_router.js');
const path = require('path');

const publicPath = path.join(__dirname, '../client/public' )
app.use(express.static(publicPath));

app.use(parser.json());
