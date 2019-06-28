var mongoose = require('mongoose');

var inventoryReport = new mongoose.Schema({
  reportID: {
    type: String,
    default: "report-" + new Date()
  },
  month: {
    type: Date,
    default: new Date().getMonth()
  },
  inventories: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'inventory'
  }]
})

module.exports = inventoryReport;