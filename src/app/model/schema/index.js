module.exports = {
    user: require('./entity/user'),
    customer: require('./entity/customer'),
    book: require('./entity/book'),
    bill: require('./entity/bill'),

    debt: require('./report/debt'),
    debtReport: require('./report/debtReport'),
    inventory: require('./report/inventory'),
    inventoryReport: require('./report/inventoryReport'),

    importForm: require('./importForm'),
    importInfo: require('./importInfo'),
    order: require('./order'),
    receipt: require('./receipt'),

    //to manage
    manageBook: require('./manageBook'),
  }