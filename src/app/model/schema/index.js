module.exports = {
    user: require('./entity/user'),
    customer: require('./entity/customer'),
    book: require('./entity/book'),

    importForm: require('./importForm'),
    bill: require('./bill'),

    //to manage
    manageBook: require('./manageBook'),
    rule: require('./rule'),
  }