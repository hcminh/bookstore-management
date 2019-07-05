var mongoose = require("mongoose");

var manageBook = new mongoose.Schema({
  book: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'book'
  },
  bookID: {
    type: String,
    required: true
  },
  amount: {
    type: Number,
    default: 0
  },
  minQuantity: {
    type: Number,
    default: 0
  }, 
  initAmount: {
    type: Number,
    default: 0
  },
  solds: {
    type: Number,
    default: 0
  }
});


module.exports = manageBook;
