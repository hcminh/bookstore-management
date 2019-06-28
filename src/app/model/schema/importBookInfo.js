var mongoose = require("mongoose");

var formImportBook = new mongoose.Schema({
    importBooks: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'importBookInfo'
    },
    amount: {
        type: Number,
        default: 0
    },
    total: {
        type: Number,
        default: 0
    }
});


module.exports = formImportBook;
