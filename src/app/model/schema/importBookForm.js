var mongoose = require("mongoose");

var formImportBook = new mongoose.Schema({
  importBookInfo: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'book'
  },
  inDate: {
    type: Date,
    default: new Date()
  },
  formID: {
    type: String,
    default: "form-" + new Date()
  }
});


module.exports = formImportBook;
