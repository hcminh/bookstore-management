var mongoose = require('mongoose');

var inventory = new mongoose.Schema({
    book: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'book'
    },
  earlyInventory: {
    default: 0,
    type: Number
  },
  latelyInventory: {
    default: 0,
    type: Number
  },
  incurred: {
    default: 0,
    type: Number
  }
})

module.exports = inventory;