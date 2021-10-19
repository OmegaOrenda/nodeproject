const express = require('express');
const bodyParser= require('body-parser');
const mongoose = require('mongoose'); 
const app = express();
app.use(express.json())

var dbURI='mongodb+srv://admin:tech1234@nodeproject.ixgxg.mongodb.net/myFirstDatabase?retryWrites=true&w=majority';
mongoose.connect(dbURI, { useNewUrlParser: true, useCreateIndex: true });
const connection = mongoose.connection;
connection.once('open', () => {
console.log("MongoDB database connection established successfully");
})


const MongoClient = require('mongodb').MongoClient 

app.get('/', function (req, res) {
  res.send('Hello World!');
});

const bookingRouter = require('./routes/bookCab');
app.use('/bookCab', bookingRouter);

app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});