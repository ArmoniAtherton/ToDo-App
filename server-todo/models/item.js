const mongoose = require('mongoose');
const Schema = mongoose.Schema;

//This will create a schema
const itemSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    data: {
        type: Date,
        default: Date.now
    }
});

module.exports = item = mongoose.model('item', itemSchema);