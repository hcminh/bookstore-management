
const router = require('express').Router();
const controller = require('app/controllers').billController;

const { IS_ADMIN, IS_EMPLOYEE } = require("config/constants");
const { checkPermission } = require("services/checkPermission");

router.route('/')
.get(controller.getAll)

router.route('/create')
.get(controller.getCreatePage)
.post(controller.postCreate)

router.route('/create/infos')
.post(controller.postInfo)

router.route('/info/:id')
.get(controller.getInfo)
.delete(controller.remove);



module.exports = router