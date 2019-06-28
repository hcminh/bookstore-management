
var router = require('express').Router();
var controller = require('app/controllers').customerController;

router.route('/')
.get(controller.getAllCustomer)

router.route('/create')
.get(controller.getCreateCustomer)
.post(controller.postCreateCustomer)

router.route('/info/:id')
.get(controller.getCustomerInfo)
.post(controller.postEditCustomer)
.delete(controller.deleteCustomer)



module.exports = router