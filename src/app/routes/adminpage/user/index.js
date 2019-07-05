
var router = require('express').Router();
var controller = require('app/controllers').userController;

router.route('/')
.get(controller.getAll)

router.route('/create')
.post(controller.postCreate)

router.route('/info/:id')
.get(controller.getInfo)
.post(controller.postEdit)
.delete(controller.remove)



module.exports = router