var mongoose = require('mongoose')
var schema = require('./schema');

module.exports = {
  user: mongoose.model('user', schema.user),
  customer: mongoose.model('customer', schema.customer),
  book: mongoose.model('book', schema.book),
  manageBook: mongoose.model('manageBook', schema.manageBook),
  bill: mongoose.model('bill', schema.bill),
  importForm: mongoose.model('importForm', schema.importForm),
  rule: mongoose.model('rule', schema.rule),
}