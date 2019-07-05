
const router = require('express').Router();
const controller = require('app/controllers').warehouseController;


router.route('/')
.get(controller.getPage)




module.exports = router