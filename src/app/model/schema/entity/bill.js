var mongoose = require('mongoose');

var bill = new mongoose.Schema({
  billID: {
    type: String,
    default: "bill-" + new Date()
  },
  createDate: {
    type: Date,
    default: new Date()
  },
  isPaid: {
    type: Boolean,
    default: false
  },
  total: {
    default: 0,
    type: Number
  },
  customer: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'customer'
  },
  orders: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'order'
  }]
})

module.exports = bill;