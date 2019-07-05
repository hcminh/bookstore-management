
var router = require('express').Router();
var controller = require('app/controllers').customerController;


const { CUSTOMER_MANAGER } = require("config/constants");
const { checkPermission } = require("services/checkPermission");

router.route('/')
.get(controller.getAllCustomer)

router.route('/create')
.post(controller.postCreateCustomer)

router.route('/info/:id')
.get(controller.getCustomerInfo)
.post(checkPermission(CUSTOMER_MANAGER), controller.postEditCustomer)
.delete(checkPermission(CUSTOMER_MANAGER), controller.deleteCustomer)



module.exports = router