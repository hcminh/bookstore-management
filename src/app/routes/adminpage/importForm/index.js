
const router = require('express').Router();
const controller = require('app/controllers').importFormController;

const { IS_ADMIN, IS_EMPLOYEE } = require("config/constants");
const { checkPermission } = require("services/checkPermission");

router.route('/')
.get(controller.getAllForm)

router.route('/create')
.get(controller.getCreateForm)
.post(controller.postCreateForm)

router.route('/create/infos')
.post(controller.postCheckCreateInfo)

router.route('/info/:id')
.get(controller.getFormInfo)
.post(controller.postVerifyForm)
.delete(controller.deleteForm);



module.exports = router