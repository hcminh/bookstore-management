var mongoose = require('mongoose');

var customer = new mongoose.Schema({
  fullname: {
    required: true,
    type: String
  },
  address: {
    required: true,
    type: String
  },
  email: {
    required: true,
    type: String
  },
  phone: {
    required: true,
    type: String
  },
  customerID: {
      type: String,
      default: "CUSTOMER-" + new Date().getTime()
  },
  totalMoney: {
      type: Number,
      default: 0
  },
})

module.exports = customer;