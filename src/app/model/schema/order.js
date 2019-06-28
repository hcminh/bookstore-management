var mongoose = require('mongoose');

var order = new mongoose.Schema({
    item: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'book'
    },
    amount: { type: Number, default: 0 },
    prices: { type: Number, default: 0 }
})

module.exports = order;