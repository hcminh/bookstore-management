
var router = require('express').Router();
var controller = require('app/controllers').userController;

const { EMPLOYEE_MANAGER } = require("config/constants");
const { checkPermission } = require("services/checkPermission");

router.route('/')
.get(controller.getAll)

router.route('/create')
.post(controller.postCreate)

router.route('/info/:id')
.get(controller.getInfo)
.post(checkPermission(EMPLOYEE_MANAGER), controller.postEdit)
.delete(checkPermission(EMPLOYEE_MANAGER), controller.remove)



module.exports = router