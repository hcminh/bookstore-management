var mongoose = require('mongoose');

var debt = new mongoose.Schema({
  customer: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'customer'
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

module.exports = debt;