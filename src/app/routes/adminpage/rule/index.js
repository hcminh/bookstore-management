
var router = require('express').Router();
var controller = require('app/controllers').ruleController;

router.route('/')
.get(controller.getRule)
.post(controller.postRule)




module.exports = router