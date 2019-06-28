var mongoose = require('mongoose');
//Phiếu thu tiền
var receipt = new mongoose.Schema({
  totalAmount: {
    default: 0,
    type: Number
  },
  receiveDate: {
      type: Date,
      default: new Date()
  },
  customer: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'customer'
  }
})

module.exports = receipt;