module.exports = {
    user: require('./entity/user'),
    customer: require('./entity/customer'),
    book: require('./entity/book'),

    debt: require('./report/debt'),
    debtReport: require('./report/debtReport'),
    inventory: require('./report/inventory'),
    inventoryReport: require('./report/inventoryReport'),

    importForm: require('./importForm'),
    order: require('./order'),
    receipt: require('./receipt'),
    bill: require('./bill'),

    //to manage
    manageBook: require('./manageBook'),
    rule: require('./rule'),
  }