var mongoose = require("mongoose");

var manageBook = new mongoose.Schema({
  bookID: {
    type: String,
    required: true
  },
  amount: {
    type: Number,
    default: 0
  }
});


module.exports = manageBook;
