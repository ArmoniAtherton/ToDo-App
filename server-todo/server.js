const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

const items = require('./routes/api/items')

const app = express();
const PORT = process.env.PORT || 5000;

//Body-parser Middleware
app.use(bodyParser.json());

// DB config
const db = require('./config/keys').mongoURI;

//Connect to Mongo
mongoose.connect(db, { useNewUrlParser: true }).
    then(() => console.log('MongoDB connected...'))
    .catch(err => console.log('MongoDB connection failed...'));

//Use routes
app.use('/api/items', items);


app.listen(PORT, function () {
    console.log("Server is running on port: " + PORT);
});