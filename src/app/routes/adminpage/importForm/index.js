
const router = require('express').Router();
const controller = require('app/controllers').importFormController;

const { WAREHOUSE_MANAGER } = require("config/constants");
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
.post(checkPermission(WAREHOUSE_MANAGER), controller.postVerify)
.delete(checkPermission(WAREHOUSE_MANAGER), controller.remove);



module.exports = router