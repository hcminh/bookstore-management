var mongoose = require("mongoose");

var importInfo = new mongoose.Schema({
    book: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'book',
        required: true
    },
    amount: {
        type: Number,
        default: 0
    },
    price: {
        type: Number,
        default: 0
    },
    total: {
        type: Number,
        default: 0
    }
});


module.exports = importInfo;
