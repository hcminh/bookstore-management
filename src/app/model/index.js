var mongoose = require('mongoose')
var schema = require('./schema');

module.exports = {
  user: mongoose.model('user', schema.user),
  customer: mongoose.model('customer', schema.customer),
  book: mongoose.model('book', schema.book),
  bill: mongoose.model('bill', schema.bill),
  debt: mongoose.model('debt', schema.debt),
  debtReport: mongoose.model('debtReport', schema.debtReport),
  inventory: mongoose.model('inventory', schema.inventory),
  inventoryReport: mongoose.model('inventoryReport', schema.inventoryReport),
  importBookForm: mongoose.model('importBookForm', schema.importBookForm),
  importBookInfo: mongoose.model('importBookInfo', schema.importBookInfo),
  order: mongoose.model('order', schema.order),
  receipt: mongoose.model('receipt', schema.receipt),
}