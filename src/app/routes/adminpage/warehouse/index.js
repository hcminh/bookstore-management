
const router = require('express').Router();
const controller = require('app/controllers').warehouseController;


router.route('/')
.get(controller.getPage)

router.route('/create')
.get(controller.createDocx)




module.exports = router