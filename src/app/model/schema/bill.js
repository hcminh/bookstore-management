var mongoose = require("mongoose");

var bill = new mongoose.Schema({
  listBook: [{
    book: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'book'
  },
  amount: {
      type: Number,
      default: 0
  }
  }],
  customer: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'customer'
  },
  createDate: {
    type: Date,
    default: new Date()
  },
  billID: {
    type: String,
    default: "BILL-" + new Date().getTime()
  },
  createBy: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'user'
  },
  total: {
    default: 0,
    type: Number
  }
});


module.exports = bill;
