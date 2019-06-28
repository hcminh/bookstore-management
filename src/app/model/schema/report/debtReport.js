var mongoose = require('mongoose');

var debtReport = new mongoose.Schema({
  reportID: {
    type: String,
    default: "report-" + new Date()
  },
  month: {
    type: Date,
    default: new Date().getMonth()
  },
  debts: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'debt'
  }]
})

module.exports = debtReport;