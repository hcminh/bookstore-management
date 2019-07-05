var mongoose = require('mongoose');

var user = new mongoose.Schema({
  username: {
    required: true,
    type: String,
  },
  fullname: {
    required: true,
    type: String,
  },
  password: {
    required: true,
    type: String,
  },
  roles: [{
    type: String
  }],
  userID: {
    type: String,
    default: "USER-" + new Date().getTime()
  }
})

module.exports = user;