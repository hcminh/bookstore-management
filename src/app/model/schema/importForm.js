var mongoose = require("mongoose");

var imporForm = new mongoose.Schema({
  importInfo: [{
    book: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'book'
  },
  amount: {
      type: Number,
      default: 0
  }
  }],
  inDate: {
    type: Date,
    default: new Date()
  },
  formID: {
    type: String,
    default: "FORM-" + new Date().getTime()
  },
  verified: {
    type: Boolean,
    default: false
  },
  createBy: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'user'
  },
  verifiedBy: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'user'
  }
});


module.exports = imporForm;
