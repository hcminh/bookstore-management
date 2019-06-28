
var router = require('express').Router();
var controllers = require('controllers').customersController;


router.route('/api')
.post(controllers.registerNewCustomer)

router.route('/api/:id')
.get(controllers.getInfoCustomer)
.delete(controllers.deleteCustomer)



module.exports = router