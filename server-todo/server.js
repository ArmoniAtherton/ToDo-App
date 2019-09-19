const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const path = require('path');

const items = require('./routes/api/items')
const cors = require('cors');
const app = express();

const PORT = process.env.PORT || 5000;

app.use(cors());

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

//Server static assets if we are in production
if (process.env.NODE_ENV === 'production') {
//    Set a static folder
    app.use(express.static('client-todo/build'));

    app.get('*', (req, res) => {
        res.sendFile(path.resolve(__dirname, 'client-todo', 'build', "index.html"));
    });

}


app.listen(PORT, function () {
    console.log("Server is running on port: " + PORT);
});