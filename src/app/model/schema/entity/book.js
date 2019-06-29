var mongoose = require("mongoose");

var book = new mongoose.Schema({
  bookID: {
    type: String,
    required: true
  },
  name: {
    type: String,
    required: true
  },
  category: {
    type: String,
    require: true
  },
  author: {
    type: String
  },
  price: {
    type: Number,
    required: true
  },
  description: {
    type: String
  }
});


module.exports = book;
