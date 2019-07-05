
const router = require('express').Router();
const controller = require('app/controllers').warehouseController;


router.route('/')
.get(controller.getPage)

router.route('/create')
.post(controller.postCreateBook)




module.exports = router