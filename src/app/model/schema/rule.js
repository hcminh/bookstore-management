var mongoose = require("mongoose");

var rule = new mongoose.Schema({
  minOfImport: {
    type: Number,
    default: 0
  },
  minOfinventory: {
    type: Number,
    default: 0
  },
  minQuantity: {
    type: Number,
    default: 0
  }
});


module.exports = rule;
