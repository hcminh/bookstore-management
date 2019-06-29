
const mongoose = require('mongoose');

const Book = mongoose.model('book');
const Customer = mongoose.model('customer');

async function isExist(schema, item) {
    try {
        var existItem = null;
        if (schema == "BOOK")
            existItem = await Book.findOne({ $or: [ { bookID: item.bookID }, { name: item.name } ] });
        else if (schema == "CUSTOMER")
            existItem = await Customer.findOne({ $or: [{ idCode: item.idCode }, { phone: item.phone }, { email: item.email } ] });


        return (existItem != null) ? true : false
    } catch (error) {
        throw error;
    }
}

module.exports = {
    isExist
}