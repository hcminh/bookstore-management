module.exports = {
    user: require('./entity/user'),
    customer: require('./entity/customer'),
    book: require('./entity/book'),
    bill: require('./entity/bill'),

    debt: require('./report/debt'),
    debtReport: require('./report/debtReport'),
    inventory: require('./report/inventory'),
    inventoryReport: require('./report/inventoryReport'),

    importBookForm: require('./importBookForm'),
    importBookInfo: require('./importBookInfo'),
    order: require('./order'),
    receipt: require('./receipt'),
  }